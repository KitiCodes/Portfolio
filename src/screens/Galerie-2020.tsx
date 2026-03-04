import { GalleryPage } from "../components/GalleryPage";

// ─── Image imports ────────────────────────────────────────────────────────────
import smEismeer from "../assets/optimized/sm/10-Eismeer-sm.webp";
import smFruehling from "../assets/optimized/sm/12-Fruehling-sm.webp";
import smTiefseetraum from "../assets/optimized/sm/20-Tiefseetraum-sm.webp";

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
    widthPct: pct(850),
    marginLeftPct: pct(543),
    marginTopPct: pct(180),
    captionSide: "left",
    captionPos: {mt: "50px", alignSelf: "flex-start" },
  },
  {
    id: 2,
    widthPct: pct(800),
    marginLeftPct: pct(26),
    marginTopPct: pct(-200),
    captionSide: "right",
    captionPos: {mt: "250px", alignSelf: "center" },  },
  {
    id: 3,
    widthPct: pct(1200),
    marginLeftPct: pct(220),
    marginTopPct: pct(50),
    captionSide: "left",
    captionPos: {mt: "350px", alignSelf: "center" },  },
];

// ─── Mobile layout data ──────────────────────────────────────────────────────
const mobileLayout: MobileLayoutItem[] = [
  {
    id: 1,
    widthPct: 96,
    marginLeftPct: 3,
    marginTopRem: 3,
    captionSide: "right",
    captionPos: {mt: "20px", alignSelf: "flex-start" },
  },
  {
    id: 2,
    widthPct: 95,
    marginLeftPct: 4,
    marginTopRem: 1.5,
    captionSide: "left",
    captionPos: {mt: "", alignSelf: "center" },
  },
  {
    id: 3,
    widthPct: 100,
    marginLeftPct: 1,
    marginTopRem: 2,
    captionSide: "right",
    captionPos: {mt: "20px", alignSelf: "flex-start" },
  },
];

// ─── Artwork data ─────────────────────────────────────────────────────────────
const artworks: Artwork[] = [
  {
    id: 1,
    smallSrc: smTiefseetraum,
    largeSrc: smTiefseetraum,
    alt: "Tiefseetraum",
    title: "Tiefseetraum",
    year: "2020",
    dimensions: "80 x 80 cm",
  },
  {
    id: 2,
    smallSrc: smFruehling,
    largeSrc: smFruehling,
    alt: "Frühling",
    title: "Frühling",
    year: "2020",
    dimensions: "70 x 70 cm",
  },
  {
    id: 3,
    smallSrc: smEismeer,
    largeSrc: smEismeer,
    alt: "Eismeer",
    title: "Eismeer",
    year: "2020",
    dimensions: "100 x 50 cm",
  },
];


export function Galerie2020(): JSX.Element {
  return <GalleryPage artworks={artworks} desktopLayout={desktopLayout} mobileLayout={mobileLayout} />;
}
