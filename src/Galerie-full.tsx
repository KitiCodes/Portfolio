// ─── Image imports ────────────────────────────────────────────────────────────
import smSandmeer from "../assets/optimized/sm/1-Sandmeer-sm.webp";
import smSonnenblumen from "../assets/optimized/sm/2-Sonnenblumen-sm.webp";
import smKuechenphilosophie from "../assets/optimized/sm/3-Kuechenphilosophie-sm.webp";
import smPower from "../assets/optimized/sm/4-power-sm.webp";
import smResonanzA from "../assets/optimized/sm/5-Resonanz-sm.webp";
import smResonanzB from "../assets/optimized/sm/6-Resonanz-sm.webp";
import smAusbruch from "../assets/optimized/sm/7-Ausbruch-sm.webp";
import smTanzendeA from "../assets/optimized/sm/8-Tanzende-sm.webp";
import smTanzendeB from "../assets/optimized/sm/9-Tanzende-sm.webp";
import smEismeer from "../assets/optimized/sm/10-Eismeer-sm.webp";
import smZaghaft from "../assets/optimized/sm/11-Zaghaft-beginnt-etwas-Neues-sm.webp";
import smFruehling from "../assets/optimized/sm/12-Fruehling-sm.webp";
import smAufbruch from "../assets/optimized/sm/13-Aufbruch-sm.webp";
import smSpuren from "../assets/optimized/sm/14-Spuren-sm.webp";
import smVonderDunkelheit from "../assets/optimized/sm/15-Von-der-Dunkelheit-ins-Licht-sm.webp";
import smAufloesung from "../assets/optimized/sm/16-Aufloesung-in-blau-sm.webp";
import smKleineAufruhr from "../assets/optimized/sm/17-Kleine-Aufruhr-sm.webp";
import smRiff from "../assets/optimized/sm/18-Riff-sm.webp";
import smEismeerII from "../assets/optimized/sm/19-Eismeer-II-sm.webp";
import smTiefseetraum from "../assets/optimized/sm/20-Tiefseetraum-sm.webp";
import smUnterwasserwunder from "../assets/optimized/sm/21-Unterwasserwunder-sm.webp";
import smAufruhr from "../assets/optimized/sm/22-Aufruhr-sm.webp";
import smFarbedrängt from "../assets/optimized/sm/23-Farbe-draengt-zwischen-Hitze-und-Form-sm.webp";
import smWennBewegung from "../assets/optimized/sm/24-Wenn-Bewegung-bleibt-sm.webp";
import smZustandeines from "../assets/optimized/sm/25-Zustand-eines-Himmels-sm.webp";
import smFokus from "../assets/optimized/sm/26-Fokus-sm.webp";

type Artwork = {
  id: number;
  smallSrc: string;
  largeSrc: string;
  alt: string;
  title: string;
  year: string;
  dimensions: string;
  groupId?: string;
};

// ─── Artwork data ─────────────────────────────────────────────────────────────
const artworks: Artwork[] = [
  {
      id: 1,
    smallSrc: smSandmeer,
    largeSrc: smSandmeer,
    alt: "Sandmeer",
    title: "Sandmeer",
    year: "2025",
    dimensions: "140 x 100 cm",
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
    smallSrc: smKuechenphilosophie,
    largeSrc: smKuechenphilosophie,
    alt: "Küchenphilosophie",
    title: "Küchenphilosophie",
    year: "2022",
    dimensions: "100 x 100 cm",
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
    smallSrc: smResonanzA,
    largeSrc: smResonanzA,
    alt: "Resonanz A",
    title: "Resonanz",
    year: "2024",
    dimensions: "je 40 x 80 cm",
    groupId: "resonanz",
  },
  {
    id: 6,
    smallSrc: smResonanzB,
    largeSrc: smResonanzB,
    alt: "Resonanz B",
    title: "",
    year: "2024",
    dimensions: "40 x 80 cm",
    groupId: "resonanz",
  },
  {
    id: 7,
    smallSrc: smAusbruch,
    largeSrc: smAusbruch,
    alt: "Ausbruch",
    title: "Ausbruch",
    year: "2022",
    dimensions: "70 x 60 cm",
  },
  {
    id: 8,
    smallSrc: smTanzendeA,
    largeSrc: smTanzendeA,
    alt: "Tanzende A",
    title: "Tanzende",
    year: "2024",
    dimensions: "je 40 x 80 cm",
    groupId: "tanzende",
  },
  {
    id: 9,
    smallSrc: smTanzendeB,
    largeSrc: smTanzendeB,
    alt: "Tanzende B",
    title: "",
    year: "2024",
    dimensions: "40 x 80 cm",
    groupId: "tanzende",
  },
  {
    id: 10,
    smallSrc: smEismeer,
    largeSrc: smEismeer,
    alt: "Eismeer",
    title: "Eismeer",
    year: "2020",
    dimensions: "100 x 50 cm",
  },
  {
    id: 11,
    smallSrc: smZaghaft,
    largeSrc: smZaghaft,
    alt: "Zaghaft beginnt etwas Neues",
    title: "Zaghaft beginnt etwas Neues",
    year: "2021",
    dimensions: "70 x 70 cm",
  },
  {
    id: 12,
    smallSrc: smFruehling,
    largeSrc: smFruehling,
    alt: "Frühling",
    title: "Frühling",
    year: "2020",
    dimensions: "70 x 70 cm",
  },
  {
    id: 13,
    smallSrc: smAufbruch,
    largeSrc: smAufbruch,
    alt: "Aufbruch",
    title: "Aufbruch",
    year: "2024",
    dimensions: "100 x 100 cm",
  },
  {
    id: 14,
    smallSrc: smSpuren,
    largeSrc: smSpuren,
    alt: "Spuren",
    title: "Spuren",
    year: "2022",
    dimensions: "100 x 100 cm",
  },
  {
    id: 15,
    smallSrc: smVonderDunkelheit,
    largeSrc: smVonderDunkelheit,
    alt: "Von der Dunkelheit ins Licht",
    title: "Von der Dunkelheit ins Licht",
    year: "2025",
    dimensions: "80 x 80 cm",
  },
  {
    id: 16,
    smallSrc: smAufloesung,
    largeSrc: smAufloesung,
    alt: "Auflösung in blau",
    title: "Auflösung in blau",
    year: "2022",
    dimensions: "70 x 70 cm",
  },
  {
    id: 17,
    smallSrc: smKleineAufruhr,
    largeSrc: smKleineAufruhr,
    alt: "Kleine Aufruhr",
    title: "Kleine Aufruhr",
    year: "2026",
    dimensions: "60 x 70 cm",
  },
  {
    id: 18,
    smallSrc: smRiff,
    largeSrc: smRiff,
    alt: "Riff",
    title: "Riff",
    year: "2021",
    dimensions: "80 x 60 cm",
  },
  {
    id: 19,
    smallSrc: smEismeerII,
    largeSrc: smEismeerII,
    alt: "Eismeer II",
    title: "Eismeer II",
    year: "2024",
    dimensions: "100 x 50 cm",
  },
  {
    id: 20,
    smallSrc: smTiefseetraum,
    largeSrc: smTiefseetraum,
    alt: "Tiefseetraum",
    title: "Tiefseetraum",
    year: "2020",
    dimensions: "80 x 80 cm",
  },
  {
    id: 21,
    smallSrc: smUnterwasserwunder,
    largeSrc: smUnterwasserwunder,
    alt: "Unterwasserwunder",
    title: "Unterwasserwunder",
    year: "2025",
    dimensions: "70 x 140 cm",
  },
  {
    id: 22,
    smallSrc: smAufruhr,
    largeSrc: smAufruhr,
    alt: "Aufruhr",
    title: "Aufruhr",
    year: "2025",
    dimensions: "140 x 70 cm",
  },
  {
    id: 23,
    smallSrc: smFarbedrängt,
    largeSrc: smFarbedrängt,
    alt: "Farbe drängt – Zwischen Hitze und Form",
    title: "Farbe drängt – Zwischen Hitze und Form",
    year: "2024",
    dimensions: "100 x 100 cm",
  },
  {
    id: 24,
    smallSrc: smWennBewegung,
    largeSrc: smWennBewegung,
    alt: "Wenn Bewegung bleibt",
    title: "Wenn Bewegung bleibt",
    year: "2024",
    dimensions: "100 x 100 cm",
  },
  {
    id: 25,
    smallSrc: smZustandeines,
    largeSrc: smZustandeines,
    alt: "Zustand eines Himmels",
    title: "Zustand eines Himmels",
    year: "2025",
    dimensions: "120 x 100 cm",
  },
  {
    id: 26,
    smallSrc: smFokus,
    largeSrc: smFokus,
    alt: "Fokus",
    title: "Fokus",
    year: "2026",
    dimensions: "100 x 100 cm",
  },
  ];
