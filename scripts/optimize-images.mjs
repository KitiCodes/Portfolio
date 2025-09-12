import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFile } from 'child_process';
import { promisify } from 'util';
import imageSize from 'image-size';

const execFileAsync = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');
const OUT_SM = path.join(__dirname, '..', 'src', 'assets', 'optimized', 'sm');
const OUT_LG = path.join(__dirname, '..', 'src', 'assets', 'optimized', 'lg');

const SMALL_MAX_WIDTH = 1200; // max display width on page
const LARGE_MAX_WIDTH = 2400; // larger for lightbox but still optimized

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png']);

function getCli() {
  return process.platform === 'win32' ? 'npx.cmd' : 'npx';
}

async function ensureDirs() {
  await fs.mkdir(OUT_SM, { recursive: true });
  await fs.mkdir(OUT_LG, { recursive: true });
}

async function listImages(dir) {
  const all = await fs.readdir(dir);
  return all.filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
            .map((f) => path.join(dir, f));
}

function safeWidth(srcPath, target) {
  try {
    const dim = imageSize(srcPath);
    if (dim?.width && dim.width > 0) {
      return Math.min(dim.width, target);
    }
  } catch {}
  return target;
}

async function convertOne(srcPath) {
  const smallWidth = safeWidth(srcPath, SMALL_MAX_WIDTH);
  const largeWidth = safeWidth(srcPath, LARGE_MAX_WIDTH);

  const cli = getCli();
  // Small variant (display)
  await execFileAsync(cli, [
    'squoosh-cli',
    '--webp', JSON.stringify({ quality: 75 }),
    '--resize', JSON.stringify({ width: smallWidth }),
    '--output-dir', OUT_SM,
    srcPath,
  ]);

  // Large variant (lightbox)
  await execFileAsync(cli, [
    'squoosh-cli',
    '--webp', JSON.stringify({ quality: 80 }),
    '--resize', JSON.stringify({ width: largeWidth }),
    '--output-dir', OUT_LG,
    srcPath,
  ]);
}

async function main() {
  await ensureDirs();
  const files = await listImages(ASSETS_DIR);
  if (files.length === 0) {
    console.log('No source images found in', ASSETS_DIR);
    return;
  }
  console.log(`Optimizing ${files.length} images...`);
  for (const f of files) {
    console.log('Processing', path.basename(f));
    await convertOne(f);
  }
  console.log('Done. Outputs:');
  console.log(' - small:', OUT_SM);
  console.log(' - large:', OUT_LG);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
