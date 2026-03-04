import { GalleryPage } from "../components/GalleryPage";

// ─── Image imports ────────────────────────────────────────────────────────────
import smSonnenblumen from "../assets/optimized/sm/2-Sonnenblumen-sm.webp";
import smZaghaft from "../assets/optimized/sm/11-Zaghaft-beginnt-etwas-Neues-sm.webp";
import smRiff from "../assets/optimized/sm/18-Riff-sm.webp";

import { pct } from "../lib/gallery";
import type { Artwork, DesktopLayoutItem, MobileLayoutItem } from "../lib/gallery";

// ─── Desktop layout data ──────────────────────────────────────────────────────
/*
 * Each item's position was derived from the original absolute-positioned coords
 * on a 1440px canvas. The vertical spacing (marginTopPct) is tuned so that the
 * visual rhythm — overlaps, gaps — matches the original design, but now the
 * container's height is fully determined by content flow.
 */
const desktopLayout: DesktopLayoutItem[] = [
  {
    id: 1,
    widthPct: pct(800),
    marginLeftPct: pct(26),
    marginTopPct: pct(180),
    captionSide: "right",
    captionPos: {mt: "50px", alignSelf: "center" },  },
  {
    id: 2,
    widthPct: pct(1200),
    marginLeftPct: pct(220),
    marginTopPct: pct(20),
    captionSide: "left",
    captionPos: {mt: "350px", alignSelf: "center" },  },
  {
    id: 3,
    widthPct: pct(1100),
    marginLeftPct: pct(33),
    marginTopPct: pct(50),
    captionSide: "right",
    captionPos: {mt: "150px", alignSelf: "flex-start" },  },
];

// ─── Mobile layout data ──────────────────────────────────────────────────────
const mobileLayout: MobileLayoutItem[] = [
  {
    id: 1,
    widthPct: 95,
    marginLeftPct: 5,
    marginTopRem: 2.5,
    captionSide: "left",
    captionPos: {mt: "", alignSelf: "center" },
  },
  {
    id: 2,
    widthPct: 100,
    marginLeftPct: 1,
    marginTopRem: 1,
    captionSide: "right",
    captionPos: {mt: "20px", alignSelf: "center" },
  },
  {
    id: 3,
    widthPct: 100,
    marginLeftPct: 0,
    marginTopRem: 0.5,
    captionSide: "left",
    captionPos: {mt: "20px", alignSelf: "flex-start" },
  },
];

// ─── Artwork data ─────────────────────────────────────────────────────────────
const artworks: Artwork[] = [
  {
    id: 1,
    smallSrc: smZaghaft,
    largeSrc: smZaghaft,
    alt: "Zaghaft beginnt etwas Neues",
    title: "Zaghaft beginnt etwas Neues",
    year: "2021",
    dimensions: "70 x 70 cm",
  },
  {
    id: 2,
    smallSrc: smSonnenblumen,
    largeSrc: smSonnenblumen,
    alt: "Sonnenblumen",
    title: "Sonnenblumen",
    year: "2021",
    dimensions: "100 x 80 cm",
  },
  {
    id: 3,
    smallSrc: smRiff,
    largeSrc: smRiff,
    alt: "Riff",
    title: "Riff",
    year: "2021",
    dimensions: "80 x 60 cm",
  },
];


export function Galerie2021(): JSX.Element {
  return <GalleryPage artworks={artworks} desktopLayout={desktopLayout} mobileLayout={mobileLayout} />;
}
