import { GalleryPage } from "../components/GalleryPage";

// ─── Image imports ────────────────────────────────────────────────────────────
import smResonanzA from "../assets/optimized/sm/5-Resonanz-sm.webp";
import smResonanzB from "../assets/optimized/sm/6-Resonanz-sm.webp";
import smTanzendeA from "../assets/optimized/sm/8-Tanzende-sm.webp";
import smTanzendeB from "../assets/optimized/sm/9-Tanzende-sm.webp";
import smAufbruch from "../assets/optimized/sm/13-Aufbruch-sm.webp";
import smEismeerII from "../assets/optimized/sm/19-Eismeer-II-sm.webp";
import smFarbedrängt from "../assets/optimized/sm/23-Farbe-draengt-zwischen-Hitze-und-Form-sm.webp";
import smWennBewegung from "../assets/optimized/sm/24-Wenn-Bewegung-bleibt-sm.webp";

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
    widthPct: pct(900),
    marginLeftPct: pct(26),
    marginTopPct: pct(200),
    captionSide: "right",
    captionPos: {mt: "50px", alignSelf: "center" },  },

  {
    id: 2,
    widthPct: pct(500),
    marginLeftPct: pct(0),
    marginTopPct: pct(0),
    captionSide: "right",
  },
  {
    id: 3,
    widthPct: pct(850),
    marginLeftPct: pct(580),
    marginTopPct: pct(15),
    captionSide: "left",
    captionPos: { alignSelf: "center" },  },
  {
    id: 4,
    widthPct: pct(850),
    marginLeftPct: pct(33),
    marginTopPct: pct(50),
    captionSide: "right",
    captionPos: {mt: "150px", alignSelf: "flex-start" },  },
  {
    id: 5,
    widthPct: pct(900),
    marginLeftPct: pct(500),
    marginTopPct: pct(30),
    captionSide: "left",
    captionPos: {mt: "50px", alignSelf: "flex-start" },  },
  {
    id: 6,
    widthPct: pct(300),
    marginLeftPct: pct(500),
    marginTopPct: pct(30),
    captionSide: "left",
    captionPos: {mt: "50px", alignSelf: "flex-start" },  },
  {
    id: 7,
    widthPct: pct(800),
    marginLeftPct: pct(10),
    marginTopPct: pct(10),
    captionSide: "right",
    captionPos: {mt: "0px", alignSelf: "center" },  },
  {
    id: 8,
    widthPct: pct(1050),
    marginLeftPct: pct(360),
    marginTopPct: pct(50),
    captionSide: "left",
    captionPos: {mt: "50px", alignSelf: "center" },  },
];

// ─── Mobile layout data ──────────────────────────────────────────────────────
const mobileLayout: MobileLayoutItem[] = [
    {
    id: 1,
    widthPct: 95,
    marginLeftPct: 4,
    marginTopRem: 1.5,
    captionSide: "left",
    captionPos: {mt: "", alignSelf: "center" },
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
    widthPct: 90,
    marginLeftPct: 3,
    marginTopRem: 1.5,
    captionSide: "right",
    captionPos: {mt: "", alignSelf: "center" },
  },
  {
    id: 7,
    widthPct: 95,
    marginLeftPct: 5,
    marginTopRem: 1.5,
    captionSide: "left",
    captionPos: {mt: "10px", alignSelf: "flex-start" },
  },
  {
    id: 8,
    widthPct: 91,
    marginLeftPct: 0,
    marginTopRem: 2,
    captionSide: "right",
    captionPos: {mt: "130px", alignSelf: "center" },
  },
];

// ─── Artwork data ─────────────────────────────────────────────────────────────
const artworks: Artwork[] = [
  {
    id: 1,
    smallSrc: smResonanzA,
    largeSrc: smResonanzA,
    alt: "Resonanz A",
    title: "Resonanz",
    year: "2024",
    dimensions: "je 40 x 80 cm",
    groupId: "resonanz",
  },
  {
    id: 2,
    smallSrc: smResonanzB,
    largeSrc: smResonanzB,
    alt: "Resonanz B",
    title: "",
    year: "2024",
    dimensions: "40 x 80 cm",
    groupId: "resonanz",
  },
  {
    id: 3,
    smallSrc: smFarbedrängt,
    largeSrc: smFarbedrängt,
    alt: "Farbe drängt – Zwischen Hitze und Form",
    title: "Farbe drängt – Zwischen Hitze und Form",
    year: "2024",
    dimensions: "100 x 100 cm",
  },
  {
    id: 4,
    smallSrc: smAufbruch,
    largeSrc: smAufbruch,
    alt: "Aufbruch",
    title: "Aufbruch",
    year: "2024",
    dimensions: "100 x 100 cm",
  },
  {
    id: 5,
    smallSrc: smTanzendeA,
    largeSrc: smTanzendeA,
    alt: "Tanzende A",
    title: "Tanzende",
    year: "2024",
    dimensions: "je 40 x 80 cm",
    groupId: "tanzende",
  },
  {
    id: 6,
    smallSrc: smTanzendeB,
    largeSrc: smTanzendeB,
    alt: "Tanzende B",
    title: "",
    year: "2024",
    dimensions: "40 x 80 cm",
    groupId: "tanzende",
  },
  {
    id: 7,
    smallSrc: smWennBewegung,
    largeSrc: smWennBewegung,
    alt: "Wenn Bewegung bleibt",
    title: "Wenn Bewegung bleibt",
    year: "2024",
    dimensions: "100 x 100 cm",
  },
  {
    id: 8,
    smallSrc: smEismeerII,
    largeSrc: smEismeerII,
    alt: "Eismeer II",
    title: "Eismeer II",
    year: "2024",
    dimensions: "100 x 50 cm",
  },
];

export function Galerie2024(): JSX.Element {
  return <GalleryPage artworks={artworks} desktopLayout={desktopLayout} mobileLayout={mobileLayout} />;
}
