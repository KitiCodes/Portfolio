import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const ASSETS = path.join(ROOT, 'src', 'assets');
const OUT_SM = path.join(ASSETS, 'optimized', 'sm');
const OUT_LG = path.join(ASSETS, 'optimized', 'lg');

const SMALL_MAX_WIDTH = 1200;
const LARGE_MAX_WIDTH = 2400;
const QUALITY_SM = 75;
const QUALITY_LG = 80;
const EXTS = new Set(['.jpg', '.jpeg', '.png']);

async function ensureDirs() {
  await fs.mkdir(OUT_SM, { recursive: true });
  await fs.mkdir(OUT_LG, { recursive: true });
}

async function listImages(dir) {
  const files = await fs.readdir(dir);
  return files.filter(f => EXTS.has(path.extname(f).toLowerCase()))
              .map(f => path.join(dir, f));
}

function outName(srcPath, outDir) {
  const base = path.basename(srcPath);
  const name = base.replace(path.extname(base), '.webp');
  return path.join(outDir, name);
}

async function processOne(src) {
  try {
    const metadata = await sharp(src).metadata();
    const width = metadata.width || LARGE_MAX_WIDTH;
    const smallW = Math.min(width, SMALL_MAX_WIDTH);
    const largeW = Math.min(width, LARGE_MAX_WIDTH);

    const outSmall = outName(src, OUT_SM);
    const outLarge = outName(src, OUT_LG);

    await sharp(src).resize({ width: smallW }).webp({ quality: QUALITY_SM }).toFile(outSmall);
    await sharp(src).resize({ width: largeW }).webp({ quality: QUALITY_LG }).toFile(outLarge);

    console.log('Optimized:', path.basename(src));
  } catch (err) {
    console.error('Failed to optimize', src, err);
  }
}

async function main() {
  await ensureDirs();
  const images = await listImages(ASSETS);
  if (images.length === 0) {
    console.log('No images found in', ASSETS);
    return;
  }
  console.log('Found', images.length, 'images; optimizing...');
  for (const img of images) {
    // skip optimized folder if present
    if (img.includes(path.join('assets', 'optimized'))) continue;
    await processOne(img);
  }
  console.log('Done. Outputs in', OUT_SM, 'and', OUT_LG);
}

main().catch(err => { console.error(err); process.exit(1); });
