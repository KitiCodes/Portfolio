import { GalleryPage } from "../components/GalleryPage";

// ─── Image imports ────────────────────────────────────────────────────────────
import smSandmeer from "../assets/optimized/sm/1-Sandmeer-sm.webp";
import smSonnenblumen from "../assets/optimized/sm/2-Sonnenblumen-sm.webp";
import smPower from "../assets/optimized/sm/4-power-sm.webp";
import smAusbruch from "../assets/optimized/sm/7-Ausbruch-sm.webp";
import smEismeer from "../assets/optimized/sm/10-Eismeer-sm.webp";
import smAufbruch from "../assets/optimized/sm/13-Aufbruch-sm.webp";
import smSpuren from "../assets/optimized/sm/14-Spuren-sm.webp";
import smAufloesung from "../assets/optimized/sm/16-Aufloesung-in-blau-sm.webp";
import smEismeerII from "../assets/optimized/sm/19-Eismeer-II-sm.webp";

import { pct } from "../lib/gallery";
import type { Artwork, DesktopLayoutItem, MobileLayoutItem } from "../lib/gallery";

// ─── Desktop layout data ──────────────────────────────────────────────────────
/*
 * Each item's position was derived from the original absolute-positioned coords
 * on a 1440px canvas. The vertical spacing (marginTopPct) is tuned so that the
 * visual rhythm — overlaps, gaps — matches the original design, but now the
 * container's height is fully determined by content flow.
 *
 * Original coords (for reference):
 *   id=4:  left=843, w=566,  top=232
 *   id=13: left=26,  w=700,  top=600
 *   id=10: left=530, w=900,  top=1340
 *   id=19: left=33,  w=850,  top=1870
 *   id=16: left=600, w=670,  top=2300
 *   id=2:  left=10,  w=797,  top=3000
 *   id=14: left=760, w=650,  top=3600
 *   id=1:  left=200, w=904,  top=4400
 *   id=7:  left=640, w=706,  top=5050
 */
const desktopLayout: DesktopLayoutItem[] = [
  {
    id: 1,
    widthPct: pct(750),
    marginLeftPct: pct(643),
    marginTopPct: pct(180),
    captionSide: "left",
    captionPos: {mt: "50px", alignSelf: "flex-start" },
  },
  {
    id: 2,
    widthPct: pct(800),
    marginLeftPct: pct(26),
    marginTopPct: pct(-100),
    captionSide: "right",
    captionPos: {mt: "50px", alignSelf: "center" },  },
  {
    id: 3,
    widthPct: pct(1200),
    marginLeftPct: pct(220),
    marginTopPct: pct(20),
    captionSide: "left",
    captionPos: {mt: "350px", alignSelf: "center" },  },
  {
    id: 4,
    widthPct: pct(1100),
    marginLeftPct: pct(33),
    marginTopPct: pct(50),
    captionSide: "right",
    captionPos: {mt: "150px", alignSelf: "flex-start" },  },
  {
    id: 5,
    widthPct: pct(830),
    marginLeftPct: pct(500),
    marginTopPct: pct(30),
    captionSide: "left",
    captionPos: {mt: "50px", alignSelf: "flex-start" },  },
  {
    id: 6,
    widthPct: pct(1000),
    marginLeftPct: pct(10),
    marginTopPct: pct(10),
    captionSide: "right",
    captionPos: {mt: "0px", alignSelf: "center" },  },
  {
    id: 7,
    widthPct: pct(850),
    marginLeftPct: pct(560),
    marginTopPct: pct(50),
    captionSide: "left",
    captionPos: {mt: "450px", alignSelf: "center" },  },
  {
    id: 8,
    widthPct: pct(1104),
    marginLeftPct: pct(50),
    marginTopPct: pct(25),
    captionSide: "right",
    captionPos: {mt: "150px", alignSelf: "flex-start" },  },
  {
    id: 9,
    widthPct: pct(906),
    marginLeftPct: pct(520),
    marginTopPct: pct(40),
    captionSide: "left",
    captionPos: {mt: "200px", alignSelf: "flex-start" },  },
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
    marginTopRem: 1,
    captionSide: "right",
    captionPos: {mt: "20px", alignSelf: "flex-start" },
  },
  {
    id: 4,
    widthPct: 100,
    marginLeftPct: 0,
    marginTopRem: 1.7,
    captionSide: "left",
    captionPos: {mt: "50px", alignSelf: "center" },
  },
  {
    id: 5,
    widthPct: 90,
    marginLeftPct: 3,
    marginTopRem: 1.5,
    captionSide: "right",
    captionPos: {mt: "", alignSelf: "center" },
  },
  {
    id: 6,
    widthPct: 95,
    marginLeftPct: 5,
    marginTopRem: 1.5,
    captionSide: "left",
    captionPos: {mt: "10px", alignSelf: "flex-start" },
  },
  {
    id: 7,
    widthPct: 91,
    marginLeftPct: 0,
    marginTopRem: 2,
    captionSide: "right",
    captionPos: {mt: "130px", alignSelf: "center" },
  },
  {
    id: 8,
    widthPct: 100,
    marginLeftPct: 1,
    marginTopRem: 1,
    captionSide: "left",
    captionPos: {mt: "20px", alignSelf: "flex-start" },
  },
  {
    id: 9,
    widthPct: 95,
    marginLeftPct: 6,
    marginTopRem: 1.5,
    captionSide: "right",
    captionPos: {mt: "20px", alignSelf: "center" },
  },
];

// ─── Artwork data ─────────────────────────────────────────────────────────────
const artworks: Artwork[] = [
  {
    id: 1,
    smallSrc: smPower,
    largeSrc: smPower,
    alt: "power",
    title: "power",
    year: "2021",
    dimensions: "70 x 70 cm",
  },
  {
    id: 2,
    smallSrc: smAufbruch,
    largeSrc: smAufbruch,
    alt: "Aufbruch",
    title: "Aufbruch",
    year: "2024",
    dimensions: "100 x 100 cm",
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
  {
    id: 4,
    smallSrc: smEismeerII,
    largeSrc: smEismeerII,
    alt: "Eismeer II",
    title: "Eismeer II",
    year: "2024",
    dimensions: "100 x 50 cm",
  },
  {
    id: 5,
    smallSrc: smAufloesung,
    largeSrc: smAufloesung,
    alt: "Auflösung in blau",
    title: "Auflösung in blau",
    year: "2022",
    dimensions: "70 x 70 cm",
  },
  {
    id: 6,
    smallSrc: smSonnenblumen,
    largeSrc: smSonnenblumen,
    alt: "Sonnenblumen",
    title: "Sonnenblumen",
    year: "2021",
    dimensions: "100 x 80 cm",
  },
  {
    id: 7,
    smallSrc: smSpuren,
    largeSrc: smSpuren,
    alt: "Spuren",
    title: "Spuren",
    year: "2022",
    dimensions: "100 x 100 cm",
  },
  {
    id: 8,
    smallSrc: smSandmeer,
    largeSrc: smSandmeer,
    alt: "Sandmeer",
    title: "Sandmeer",
    year: "2025",
    dimensions: "140 x 100 cm",
  },
  {
    id: 9,
    smallSrc: smAusbruch,
    largeSrc: smAusbruch,
    alt: "Ausbruch",
    title: "Ausbruch",
    year: "2022",
    dimensions: "70 x 60 cm",
  },
];


export function HomePage(): JSX.Element {
  return <GalleryPage artworks={artworks} desktopLayout={desktopLayout} mobileLayout={mobileLayout} />;
}
