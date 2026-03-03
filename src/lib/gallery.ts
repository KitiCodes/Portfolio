// ─── Shared gallery types ─────────────────────────────────────────────────────

export type Artwork = {
  id: number;
  smallSrc: string;
  largeSrc: string;
  alt: string;
  title: string;
  year: string;
  dimensions: string;
  groupId?: string;
};

export type CaptionPosition = {
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  alignSelf?: "flex-start" | "center" | "flex-end";
};

export type DesktopLayoutItem = {
  id: number;
  widthPct: number;
  marginLeftPct: number;
  marginTopPct: number;
  captionSide: "left" | "right";
  captionPos?: CaptionPosition;
};

export type MobileLayoutItem = {
  id: number;
  widthPct: number;
  marginLeftPct: number;
  marginTopRem: number;
  captionSide: "left" | "right";
  captionPos?: CaptionPosition;
};

// ─── Reference canvas width for computing percentages ─────────────────────────
const REF_W = 1440;

/** Convert a pixel value (designed at 1440px) to a percentage of REF_W */
export const pct = (px: number) => (px / REF_W) * 100;
