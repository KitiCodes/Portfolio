import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContactSection } from "../components/ContactSection";
import { FooterBar } from "../components/FooterBar";

// Import images so Vite bundles them correctly
import imgAufbruchI from "../assets/AufbruchI-web.jpg";
import imgAufbruchII from "../assets/AufbruchII-web.jpg";
import imgEismeer from "../assets/Eismeer-web.jpg";
import imgFruehling from "../assets/Fr\u00fchling-web.jpg";
import imgKuechenphilosophie from "../assets/K\u00fcchenphilosophie-web.jpg";
import imgOhneTitelA from "../assets/ohneTitel-a-web.jpg";
import imgOhneTitel1 from "../assets/ohneTitel1-web.jpg";
import imgOhneTitelB from "../assets/ohneTitelb-web.jpg";
import imgPower from "../assets/power-web.jpg";
import imgSonnenblumen from "../assets/Sonnenblumen-web.jpg";
import imgSpuren from "../assets/Spuren-web.jpg";
import imgTanzendeA from "../assets/Tanzende-a-web.jpg";
import imgTanzendeB from "../assets/Tanzende-b-web.jpg";
import imgZaghaft from "../assets/Zaghaft-beginnt-etwas-Neues-web.jpg";

type Artwork = {
  id: number;
  src: string;
  alt: string;
  title: string;
  year: string;
  dimensions: string;
  // Optional group id to allow showing pairs/series together in the lightbox
  groupId?: string;
  img: { w: number; h: number; top: number; left: number };
  caption?: { w?: number; top: number; left: number; align?: "left" | "right" };
};

const navigationItems = [
  { label: "Ausstellungen", href: "/exhibitions" },
  { label: "Über mich", href: "/about-me" },
  { label: "Kontakt", href: "/contact" },
];


export const DesktopDark = (): JSX.Element => {
  // Preview (lightbox) state
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // Language label centered above "Kontakt"
  const kontaktRef = useRef<HTMLAnchorElement | null>(null);
  const headerContainerRef = useRef<HTMLDivElement | null>(null);
  const [langLeft, setLangLeft] = useState<number>(0);

  const openPreview = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsPreviewOpen(true);
  }, []);

  const closePreview = useCallback(() => {
    setIsPreviewOpen(false);
  }, []);

  const showPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + artworks.length) % artworks.length);
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % artworks.length);
  }, []);

  // Lock background scroll when preview is open & add keyboard controls
  useEffect(() => {
    if (isPreviewOpen) {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") closePreview();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
      };
      document.addEventListener("keydown", onKey);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isPreviewOpen, closePreview, showPrev, showNext]);
  // Compute language label position (centered over "Kontakt")
  useEffect(() => {
    const update = () => {
      const kontakt = kontaktRef.current;
      const container = headerContainerRef.current;
      if (!kontakt || !container) return;
      const kRect = kontakt.getBoundingClientRect();
      const cRect = container.getBoundingClientRect();
      const center = kRect.left - cRect.left + kRect.width / 2;
      setLangLeft(center);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  // Fixed canvas dimensions (no viewport scaling)
  const DESIGN_WIDTH = 1440;
  const DESIGN_HEIGHT = 7700;
  // Header (h-24 = 96px) + language bar (h-7 = 28px) = 124px
  const HEADER_OFFSET = 124;

  const artworks: Artwork[] = [
    {
      id: 1,
      src: imgAufbruchI,
      alt: "Aufbruch I",
      title: "Aufbruch I",
      year: "2022",
      dimensions: "70 x 60 cm",
      img: { w: 706, h: 600, top: 232, left: 31 },
      caption: { w: 196, top: 316, left: 812 },
    },
    {
      id: 2,
      src: imgFruehling,
      alt: "Frühling",
      title: "Frühling",
      year: "2020",
      dimensions: "70 x 70 cm",
      img: { w: 491, h: 486, top: 647, left: 918 },
      caption: { w: 196, top: 965, left: 704, align: "right" },
    },
    {
      id: 3,
      src: imgEismeer,
      alt: "Eismeer",
      title: "Eismeer",
      year: "2020",
      dimensions: "80 x 40 cm",
      img: { w: 1202, h: 600, top: 1166, left: 68 },
      caption: { w: 196, top: 1409, left: 1291 },
    },
    {
      id: 4,
      src: imgZaghaft,
      alt: "Zaghaft beginnt etwas Neues",
      title: "Zaghaft beginnt etwas Neues",
      year: "2021",
      dimensions: "70 x 70 cm",
      img: { w: 511, h: 499, top: 1839, left: 13 },
      caption: { w: 196, top: 1918, left: 566 },
    },
    {
      id: 5,
      src: imgPower,
      alt: "power",
      title: "power",
      year: "2021",
      dimensions: "70 x 70 cm",
      img: { w: 566, h: 600, top: 2010, left: 843 },
      caption: { w: 196, top: 2435, left: 639, align: "right" },
    },
    {
      id: 6,
      src: imgTanzendeA,
      alt: "Tanzende",
      title: "Tanzende",
      year: "2024",
      dimensions: "je 80 x 40 cm",
  groupId: "tanzende",
      img: { w: 297, h: 600, top: 2610, left: 120 },
      caption: { w: 196, top: 2840, left: 861 },
    },
    {
      id: 7,
      src: imgTanzendeB,
      alt: "Tanzende b",
      title: "",
      year: "",
      dimensions: "",
  groupId: "tanzende",
      img: { w: 304, h: 600, top: 2610, left: 458 },
    },
    {
      id: 8,
      src: imgSonnenblumen,
      alt: "Sonnenblumen",
      title: "Sonnenblumen",
      year: "2021",
      dimensions: "100 x 80 cm",
      img: { w: 797, h: 524, top: 3283, left: 608 },
      caption: { w: 196, top: 3420, left: 350, align: "right" },
    },
    {
      id: 9,
      src: imgKuechenphilosophie,
      alt: "Küchenphilosophie",
      title: "Küchenphilosophie",
      year: "2022",
      dimensions: "100 x 100 cm",
      img: { w: 497, h: 494, top: 3646, left: 68 },
      caption: { w: 196, top: 3942, left: 575 },
    },
    {
      id: 10,
      src: imgOhneTitelA,
      alt: "ohne Titel",
      title: "ohne Titel",
      year: "2024",
      dimensions: "je 80 x 40 cm",
  groupId: "ohne-titel-diptych",
      img: { w: 301, h: 600, top: 4170, left: 1089 },
      caption: { w: 196, top: 4299, left: 467, align: "right" },
    },
    {
      id: 11,
      src: imgOhneTitelB,
      alt: "ohne Titel b",
      title: "",
      year: "",
      dimensions: "",
  groupId: "ohne-titel-diptych",
      img: { w: 299, h: 600, top: 4170, left: 749 },
    },
    {
      id: 12,
      src: imgAufbruchII,
      alt: "Aufbruch II",
      title: "Aufbruch II",
      year: "2024",
      dimensions: "100 x 100 cm",
      img: { w: 781, h: 782, top: 4800, left: 26 },
      caption: { w: 196, top: 5275, left: 965 },
    },
    {
      id: 13,
      src: imgOhneTitel1,
      alt: "ohne Titel 1",
      title: "ohne Titel",
      year: "2025",
      dimensions: "120 x 100 cm",
      img: { w: 904, h: 600, top: 5612, left: 524 },
      caption: { w: 196, top: 6016, left: 302, align: "right" },
    },
    {
      id: 14,
      src: imgSpuren,
      alt: "Spuren",
      title: "Spuren",
      year: "2022",
      dimensions: "100 x 100 cm",
      img: { w: 776, h: 781, top: 6300, left: 333 },
      caption: { w: 196, top: 6415, left: 1173 },
    },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Language bar (top, non-sticky) */}
      <div className="w-full">
    <div className="container mx-auto relative h-7 px-4">
          <div
      className="absolute top-1/2 -translate-y-1/2 [font-family:'Antonio',Helvetica] text-[16px] font-thin leading-none text-black"
            style={{ left: langLeft, transform: "translate(-50%, -50%)" }}
          >
            <a href="#de" className="hover:underline">de</a>
            <span className="px-1">|</span>
            <a href="#en" className="hover:underline">en</a>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#af8f5b] shadow">
        <div ref={headerContainerRef} className="container mx-auto flex h-24 items-center justify-between px-6">
          <h1 className="[font-family:'Antonio',Helvetica] text-white text-5xl md:text-6xl tracking-[-0.02em] leading-none">
            <Link to="/" className="hover:opacity-90" aria-label="Zur Startseite">
              Sabine Hansen
            </Link>
          </h1>
      <nav className="flex items-center gap-[72px] [font-family:'Antonio',Helvetica]">
            {navigationItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                ref={item.label === "Kontakt" ? (kontaktRef as any) : undefined}
                className={({ isActive }) =>
                  [
                    "text-[16px] font-thin px-0",
                    "hover:text-[#854686] hover:bg-transparent",
                    isActive ? "text-[#854686]" : "text-white",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      {/* Positioned canvas (no viewport scaling) */}
      <main className="w-full">
        <div className="w-full overflow-x-auto" style={{ marginTop: -HEADER_OFFSET }}>
          <div
            className="relative"
            style={{ width: DESIGN_WIDTH, height: DESIGN_HEIGHT, margin: "0 auto" }}
            aria-label="Galerie"
          >
            {artworks.map((artwork, idx) => (
              <React.Fragment key={artwork.id}>
                <figure
                  className="absolute"
                  style={{
                    top: artwork.img.top,
                    left: artwork.img.left,
                    width: artwork.img.w,
                    height: artwork.img.h,
                  }}
                >
                  <img
                    src={artwork.src}
                    alt={artwork.alt}
                    className="w-full h-full object-cover cursor-pointer"
                    loading="lazy"
                    onClick={() => openPreview(idx)}
                  />
                </figure>
                {artwork.title && artwork.caption && (
                  <div
                    className="absolute [font-family:'Antonio',Helvetica] text-black text-base leading-[120%]"
                    style={{
                      top: artwork.caption.top,
                      left: artwork.caption.left,
                      width: artwork.caption.w ?? 196,
                      textAlign: artwork.caption.align === "right" ? ("right" as const) : ("left" as const),
                    }}
                  >
                    <div className="font-normal">{artwork.title}</div>
                    <div className="font-thin">{artwork.year}</div>
                    <div className="font-thin">{artwork.dimensions}</div>
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* Kontakt (positioned as in original) */}
            <ContactSection
              className="absolute"
              style={{ width: 560, top: 7205, left: "50%", transform: "translateX(-50%)" }}
            />

            {/* Footer (positioned as in original) */}
            <FooterBar
              className="absolute"
              style={{ width: 430, top: 7653, left: 20 }}
            />
          </div>
        </div>
      </main>

      {/* Preview (lightbox) overlay */}
      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-[#D3CCC3]"
        >
          {/* Close button */}
          <button
            aria-label="Close preview"
            onClick={closePreview}
            className="absolute top-2 right-6 md:right-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-5xl md:text-7xl leading-none text-black hover:text-[#854686] focus:outline-none transition-colors"
          >
            ×
          </button>

          {/* Navigation arrows */}
          <button
            aria-label="Previous image"
            onClick={showPrev}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-4xl md:text-6xl text-black hover:text-[#854686] select-none transition-colors"
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            onClick={showNext}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-4xl md:text-6xl text-black hover:text-[#854686] select-none transition-colors"
          >
            ›
          </button>

          {/* Content */}
          <div className="h-full w-full flex flex-col items-center justify-center px-4 md:px-8">
            {(() => {
              const current = artworks[currentIndex];
              const group = current.groupId
                ? artworks.filter((a) => a.groupId === current.groupId)
                : null;

              if (group && group.length > 1) {
                return (
                  <>
                    <div className="flex items-center justify-center gap-4 md:gap-8 w-full">
                      {group.map((a) => (
                        <img
                          key={a.src}
                          src={a.src}
                          alt={a.alt}
                          className="max-w-[40vw] max-h-[70vh] md:max-w-[35vw] md:max-h-[72vh] object-contain"
                        />
                      ))}
                    </div>
                    {(() => {
                      const main = group.find((a) => (a.title ?? "").trim().length > 0) ?? group[0];
                      const mainTitle = (main.title || main.alt) ?? "";
                      return (
                        <div className="mt-4 md:mt-6 text-center [font-family:'Antonio',Helvetica] text-black text-lg md:text-xl">
                          {mainTitle}
                        </div>
                      );
                    })()}
                  </>
                );
              }

              return (
                <>
                  <img
                    src={current.src}
                    alt={current.alt}
                    className="max-w-[90vw] max-h-[70vh] md:max-w-[72vw] md:max-h-[72vh] object-contain"
                  />
                  <div className="mt-4 md:mt-6 text-center [font-family:'Antonio',Helvetica] text-black text-lg md:text-xl">
                    {(current.title || current.alt) ?? ""}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};
