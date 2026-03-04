import { GalleryPage } from "../components/GalleryPage";

// ─── Image imports ────────────────────────────────────────────────────────────
import smSandmeer from "../assets/optimized/sm/1-Sandmeer-sm.webp";
import smVonderDunkelheit from "../assets/optimized/sm/15-Von-der-Dunkelheit-ins-Licht-sm.webp";
import smUnterwasserwunder from "../assets/optimized/sm/21-Unterwasserwunder-sm.webp";
import smAufruhr from "../assets/optimized/sm/22-Aufruhr-sm.webp";
import smZustandeines from "../assets/optimized/sm/25-Zustand-eines-Himmels-sm.webp";

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
    widthPct: pct(600),
    marginLeftPct: pct(700),
    marginTopPct: pct(170),
    captionSide: "left",
    captionPos: { alignSelf: "center" },  },

  {
    id: 2,
    widthPct: pct(900),
    marginLeftPct: pct(26),
    marginTopPct: pct(-200),
    captionSide: "right",
    captionPos: {mt: "150px", alignSelf: "center" },  },
  {
    id: 3,
    widthPct: pct(1100),
    marginLeftPct: pct(330),
    marginTopPct: pct(20),
    captionSide: "left",
    captionPos: {mt: "300px", alignSelf: "center" },  },
  {
    id: 4,
    widthPct: pct(1000),
    marginLeftPct: pct(70),
    marginTopPct: pct(50),
    captionSide: "right",
    captionPos: {mt: "150px", alignSelf: "flex-start" },  },
  {
    id: 5,
    widthPct: pct(850),
    marginLeftPct: pct(550),
    marginTopPct: pct(30),
    captionSide: "left",
    captionPos: {mt: "50px", alignSelf: "flex-start" },  },
];

// ─── Mobile layout data ──────────────────────────────────────────────────────
const mobileLayout: MobileLayoutItem[] = [
    {
    id: 1,
    widthPct: 85,
    marginLeftPct: 1,
    marginTopRem: 2.5,
    captionSide: "right",
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
    widthPct: 88,
    marginLeftPct: 1,
    marginTopRem: 1.5,
    captionSide: "right",
    captionPos: {mt: "", alignSelf: "center" },
  },
];

// ─── Artwork data ─────────────────────────────────────────────────────────────
const artworks: Artwork[] = [
  {
      id: 1,
    smallSrc: smUnterwasserwunder,
    largeSrc: smUnterwasserwunder,
    alt: "Unterwasserwunder",
    title: <>Unterwasser-<br />wunder</>,
    year: "2025",
    dimensions: "70 x 140 cm",
  },
  {
    id: 2,
    smallSrc: smVonderDunkelheit,
    largeSrc: smVonderDunkelheit,
    alt: "Von der Dunkelheit ins Licht",
    title: "Von der Dunkelheit ins Licht",
    year: "2025",
    dimensions: "80 x 80 cm",
  },
  {
    id: 3,
    smallSrc: smAufruhr,
    largeSrc: smAufruhr,
    alt: "Aufruhr",
    title: "Aufruhr",
    year: "2025",
    dimensions: "140 x 70 cm",
  },
  {
    id: 4,
    smallSrc: smSandmeer,
    largeSrc: smSandmeer,
    alt: "Sandmeer",
    title: "Sandmeer",
    year: "2025",
    dimensions: "140 x 100 cm",
  },
  {
    id: 5,
    smallSrc: smZustandeines,
    largeSrc: smZustandeines,
    alt: "Zustand eines Himmels",
    title: "Zustand eines Himmels",
    year: "2025",
    dimensions: "120 x 100 cm",
  },
];


export function Galerie2025(): JSX.Element {
  return <GalleryPage artworks={artworks} desktopLayout={desktopLayout} mobileLayout={mobileLayout} />;
}
