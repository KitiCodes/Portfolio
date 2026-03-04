import { GalleryPage } from "../components/GalleryPage";

// ─── Image imports ────────────────────────────────────────────────────────────
import smKuechenphilosophie from "../assets/optimized/sm/3-Kuechenphilosophie-sm.webp";
import smPower from "../assets/optimized/sm/4-power-sm.webp";
import smAusbruch from "../assets/optimized/sm/7-Ausbruch-sm.webp";
import smSpuren from "../assets/optimized/sm/14-Spuren-sm.webp";
import smAufloesung from "../assets/optimized/sm/16-Aufloesung-in-blau-sm.webp";

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
    widthPct: pct(750),
    marginLeftPct: pct(665),
    marginTopPct: pct(180),
    captionSide: "left",
    captionPos: {mt: "50px", alignSelf: "flex-start" },
  },
  {
    id: 2,
    widthPct: pct(900),
    marginLeftPct: pct(26),
    marginTopPct: pct(-100),
    captionSide: "right",
    captionPos: {mt: "50px", alignSelf: "center" },  },
  {
    id: 3,
    widthPct: pct(850),
    marginLeftPct: pct(570),
    marginTopPct: pct(20),
    captionSide: "left",
    captionPos: {mt: "50px", alignSelf: "center" },  },
  {
    id: 4,
    widthPct: pct(800),
    marginLeftPct: pct(10),
    marginTopPct: pct(-50),
    captionSide: "right",
    captionPos: {mt: "150px", alignSelf: "flex-start" },  },
  {
    id: 5,
    widthPct: pct(1000),
    marginLeftPct: pct(350),
    marginTopPct: pct(30),
    captionSide: "left",
    captionPos: {mt: "50px", alignSelf: "center" },  },
];

// ─── Mobile layout data ──────────────────────────────────────────────────────
const mobileLayout: MobileLayoutItem[] = [
  {
    id: 1,
    widthPct: 85,
    marginLeftPct: 3,
    marginTopRem: 3,
    captionSide: "right",
    captionPos: {mt: "20px", alignSelf: "flex-start" },
  },
  {
    id: 2,
    widthPct: 100,
    marginLeftPct: 0,
    marginTopRem: 1.5,
    captionSide: "left",
    captionPos: {mr: "20px", mt: "10px", alignSelf: "center" },
  },
  {
    id: 3,
    widthPct: 90,
    marginLeftPct: 1,
    marginTopRem: 1,
    captionSide: "right",
    captionPos: {mt: "20px", alignSelf: "flex-start" },
  },
  {
    id: 4,
    widthPct: 95,
    marginLeftPct: 2,
    marginTopRem: 1.7,
    captionSide: "left",
    captionPos: {mt: "50px", alignSelf: "center" },
  },
  {
    id: 5,
    widthPct: 95,
    marginLeftPct: 3,
    marginTopRem: 1.5,
    captionSide: "right",
    captionPos: {mt: "", alignSelf: "center" },
  },
];

// ─── Artwork data ─────────────────────────────────────────────────────────────
const artworks: Artwork[] = [
  {
    id: 1,
    smallSrc: smSpuren,
    largeSrc: smSpuren,
    alt: "Spuren",
    title: "Spuren",
    year: "2022",
    dimensions: "100 x 100 cm",
  },
  {
    id: 2,
    smallSrc: smKuechenphilosophie,
    largeSrc: smKuechenphilosophie,
    alt: "Küchenphilosophie",
    title: "Küchenphilosophie",
    year: "2022",
    dimensions: "100 x 100 cm",
  },
  {
    id: 3,
    smallSrc: smAufloesung,
    largeSrc: smAufloesung,
    alt: "Auflösung in blau",
    title: "Auflösung in blau",
    year: "2022",
    dimensions: "70 x 70 cm",
  },
  {
    id: 4,
    smallSrc: smPower,
    largeSrc: smPower,
    alt: "power",
    title: "power",
    year: "2022",
    dimensions: "70 x 70 cm",
  },
  {
    id: 5,
    smallSrc: smAusbruch,
    largeSrc: smAusbruch,
    alt: "Ausbruch",
    title: "Ausbruch",
    year: "2022",
    dimensions: "70 x 60 cm",
  },
];


export function Galerie2022(): JSX.Element {
  return <GalleryPage artworks={artworks} desktopLayout={desktopLayout} mobileLayout={mobileLayout} />;
}
