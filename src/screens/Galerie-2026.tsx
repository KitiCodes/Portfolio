import { GalleryPage } from "../components/GalleryPage";

// ─── Image imports ────────────────────────────────────────────────────────────
import smKleineAufruhr from "../assets/optimized/sm/17-Kleine-Aufruhr-sm.webp";
import smFokus from "../assets/optimized/sm/26-Fokus-sm.webp";

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
    widthPct: pct(850),
    marginLeftPct: pct(570),
    marginTopPct: pct(-150),
    captionSide: "left",
    captionPos: {mt: "300px", alignSelf: "center" },  },
];

// ─── Mobile layout data ──────────────────────────────────────────────────────
const mobileLayout: MobileLayoutItem[] = [
    {
    id: 1,
    widthPct: 95,
    marginLeftPct: 4,
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
    captionPos: {mt: "70px", alignSelf: "flex-start" },
  },
];

// ─── Artwork data ─────────────────────────────────────────────────────────────
const artworks: Artwork[] = [
  {
    id: 1,
    smallSrc: smFokus,
    largeSrc: smFokus,
    alt: "Fokus",
    title: "Fokus",
    year: "2026",
    dimensions: "100 x 100 cm",
  },
  {
    id: 2,
    smallSrc: smKleineAufruhr,
    largeSrc: smKleineAufruhr,
    alt: "Kleine Aufruhr",
    title: "Kleine Aufruhr",
    year: "2026",
    dimensions: "60 x 70 cm",
  },
];


export function Galerie2026(): JSX.Element {
  return <GalleryPage artworks={artworks} desktopLayout={desktopLayout} mobileLayout={mobileLayout} />;
}
