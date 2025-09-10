import { useCallback, useEffect, useRef, useState } from "react";
import { ContactSection } from "../components/ContactSection";
import { FooterBar } from "../components/FooterBar";
import SiteHeaderMobile from "../components/SiteHeaderMobile";

const sm = {
  AufbruchI: new URL("../assets/optimized/sm/AufbruchI-web.webp", import.meta.url).href,
  AufbruchII: new URL("../assets/optimized/sm/AufbruchII-web.webp", import.meta.url).href,
  Fruehling: new URL("../assets/optimized/sm/Fruehling-web.webp", import.meta.url).href,
  Eismeer: new URL("../assets/optimized/sm/Eismeer-web.webp", import.meta.url).href,
  Zaghaft: new URL("../assets/optimized/sm/Zaghaft-beginnt-etwas-Neues-web.webp", import.meta.url).href,
  Power: new URL("../assets/optimized/sm/power-web.webp", import.meta.url).href,
  TanzendeA: new URL("../assets/optimized/sm/Tanzende-a-web.webp", import.meta.url).href,
  TanzendeB: new URL("../assets/optimized/sm/Tanzende-b-web.webp", import.meta.url).href,
  Sonnenblumen: new URL("../assets/optimized/sm/Sonnenblumen-web.webp", import.meta.url).href,
  Kuechen: new URL("../assets/optimized/sm/Kuechenphilosophie-web.webp", import.meta.url).href,
  OhneA: new URL("../assets/optimized/sm/ohneTitel-a-web.webp", import.meta.url).href,
  OhneB: new URL("../assets/optimized/sm/ohneTitelb-web.webp", import.meta.url).href,
  Ohne1: new URL("../assets/optimized/sm/ohneTitel1-web.webp", import.meta.url).href,
  Spuren: new URL("../assets/optimized/sm/Spuren-web.webp", import.meta.url).href,
  Kontakt: new URL("../assets/optimized/sm/Kontakt.webp", import.meta.url).href,
};

const lg = {
  AufbruchI: new URL("../assets/optimized/lg/AufbruchI-web.webp", import.meta.url).href,
  AufbruchII: new URL("../assets/optimized/lg/AufbruchII-web.webp", import.meta.url).href,
  Fruehling: new URL("../assets/optimized/lg/Fruehling-web.webp", import.meta.url).href,
  Eismeer: new URL("../assets/optimized/lg/Eismeer-web.webp", import.meta.url).href,
  Zaghaft: new URL("../assets/optimized/lg/Zaghaft-beginnt-etwas-Neues-web.webp", import.meta.url).href,
  Power: new URL("../assets/optimized/lg/power-web.webp", import.meta.url).href,
  TanzendeA: new URL("../assets/optimized/lg/Tanzende-a-web.webp", import.meta.url).href,
  TanzendeB: new URL("../assets/optimized/lg/Tanzende-b-web.webp", import.meta.url).href,
  Sonnenblumen: new URL("../assets/optimized/lg/Sonnenblumen-web.webp", import.meta.url).href,
  Kuechen: new URL("../assets/optimized/lg/Kuechenphilosophie-web.webp", import.meta.url).href,
  OhneA: new URL("../assets/optimized/lg/ohneTitel-a-web.webp", import.meta.url).href,
  OhneB: new URL("../assets/optimized/lg/ohneTitelb-web.webp", import.meta.url).href,
  Ohne1: new URL("../assets/optimized/lg/ohneTitel1-web.webp", import.meta.url).href,
  Spuren: new URL("../assets/optimized/lg/Spuren-web.webp", import.meta.url).href,
  Kontakt: new URL("../assets/optimized/lg/Kontakt.webp", import.meta.url).href,
};

type Artwork = {
  id: number;
  smallSrc: string;
  largeSrc: string;
  alt: string;
  title: string;
  year?: string;
  dimensions?: string;
  groupId?: string;
  className: string; // for absolute placement on the mobile layout
};

const artworks: Artwork[] = [
  { id: 1, smallSrc: sm.AufbruchI, largeSrc: lg.AufbruchI, alt: "Aufbruch I", title: "Aufbruch I", year: "2022", dimensions: "70 x 60 cm", className: "w-72 h-60 left-[13px] top-[99px] absolute" },
  { id: 2, smallSrc: sm.AufbruchII, largeSrc: lg.AufbruchII, alt: "Aufbruch II", title: "Aufbruch II", year: "2024", dimensions: "100 x 100 cm", className: "w-60 h-60 left-[137px] top-[353px] absolute" },
  { id: 3, smallSrc: sm.Fruehling, largeSrc: lg.Fruehling, alt: "Frühling", title: "Frühling", year: "2020", dimensions: "70 x 70 cm", className: "w-80 h-40 left-0 top-[609px] absolute" },
  { id: 4, smallSrc: sm.Eismeer, largeSrc: lg.Eismeer, alt: "Eismeer", title: "Eismeer", year: "2020", dimensions: "80 x 40 cm", className: "w-80 h-80 left-[11px] top-[801px] absolute" },
  { id: 5, smallSrc: sm.Zaghaft, largeSrc: lg.Zaghaft, alt: "Zaghaft beginnt etwas Neues", title: "Zaghaft beginnt etwas Neues", year: "2021", dimensions: "70 x 70 cm", className: "w-72 h-80 left-[82px] top-[1127px] absolute" },
  { id: 6, smallSrc: sm.Power, largeSrc: lg.Power, alt: "power", title: "power", year: "2021", dimensions: "70 x 70 cm", className: "w-32 h-64 left-[11px] top-[1473px] absolute" },
  { id: 7, smallSrc: sm.TanzendeA, largeSrc: lg.TanzendeA, alt: "Tanzende A", title: "Tanzende", year: "2024", dimensions: "je 80 x 40 cm", groupId: "tanzende", className: "w-36 h-64 left-[154px] top-[1473px] absolute" },
  { id: 8, smallSrc: sm.TanzendeB, largeSrc: lg.TanzendeB, alt: "Tanzende B", title: "", year: "", dimensions: "", groupId: "tanzende", className: "w-72 h-48 left-[100px] top-[1753px] absolute" },
  { id: 9, smallSrc: sm.Sonnenblumen, largeSrc: lg.Sonnenblumen, alt: "Sonnenblumen", title: "Sonnenblumen", year: "2021", dimensions: "100 x 80 cm", className: "w-64 h-64 left-[5px] top-[1961px] absolute" },
  { id: 10, smallSrc: sm.Kuechen, largeSrc: lg.Kuechen, alt: "Küchenphilosophie", title: "Küchenphilosophie", year: "2022", dimensions: "100 x 100 cm", className: "w-32 h-64 left-[254px] top-[2243px] absolute" },
  { id: 11, smallSrc: sm.OhneA, largeSrc: lg.OhneA, alt: "ohne Titel A", title: "ohne Titel", year: "2024", dimensions: "je 80 x 40 cm", groupId: "ohne-titel-diptych", className: "w-32 h-64 left-[121px] top-[2243px] absolute" },
  { id: 12, smallSrc: sm.OhneB, largeSrc: lg.OhneB, alt: "ohne Titel B", title: "", year: "", dimensions: "", groupId: "ohne-titel-diptych", className: "w-72 h-48 left-[88px] top-[2814px] absolute" },
  { id: 13, smallSrc: sm.AufbruchII, largeSrc: lg.AufbruchII, alt: "Aufbruch II", title: "Aufbruch II", year: "2024", dimensions: "100 x 100 cm", className: "w-72 h-72 left-0 top-[2530px] absolute" },
  { id: 14, smallSrc: sm.Ohne1, largeSrc: lg.Ohne1, alt: "ohne Titel 1", title: "ohne Titel", year: "2025", dimensions: "120 x 100 cm", className: "w-72 h-72 left-[11px] top-[3034px] absolute" },
  { id: 15, smallSrc: sm.Spuren, largeSrc: lg.Spuren, alt: "Spuren", title: "Spuren", year: "2022", dimensions: "100 x 100 cm", className: "w-72 h-72 left-[11px] top-[3034px] absolute" },
];

export const DesktopDarkMobile = (): JSX.Element => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

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

  useEffect(() => {
    if (!isPreviewOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreview();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // focus close button for accessibility
    if (closeBtnRef.current) closeBtnRef.current.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isPreviewOpen, closePreview, showPrev, showNext]);

  // touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) showPrev();
    if (dx < -50) showNext();
    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Language bar */}
      <div className="w-full">
        <div className="container mx-auto relative h-7 px-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [font-family:'Antonio',Helvetica] text-[16px] font-thin leading-none text-black">
            <a href="#de" className="hover:underline">de</a>
            <span className="px-1">|</span>
            <a href="#en" className="hover:underline">en</a>
          </div>
        </div>
      </div>

      {/* Sticky mobile header */}
      <SiteHeaderMobile />

      {/* mobile absolute-layout gallery (keeps previous positions) */}
      <div className="w-96 h-[3790px] relative bg-stone-300 overflow-hidden mx-auto">
        {artworks.map((a, idx) => (
          <img
            key={a.id}
            src={a.smallSrc}
            alt={a.alt}
            className={`${a.className} object-cover cursor-pointer`}
            loading="lazy"
            onClick={() => openPreview(idx)}
          />
        ))}

        {/* captions retained as text blocks positioned as before */}
        <div className="w-16 h-24 left-[328px] top-[987px] absolute justify-start"><span className="text-black text-base font-normal font-['Antonio'] leading-tight">Zaghaft beginnt etwas Neues<br/></span><span className="text-black text-base font-thin font-['Antonio'] leading-tight">2021<br/>70 x 70 cm<br/></span></div>
        <div className="w-16 left-[301px] top-[1649px] absolute justify-start"><span className="text-black text-base font-normal font-['Antonio'] leading-tight">Tanzende<br/></span><span className="text-black text-base font-thin font-['Antonio'] leading-tight">2024<br/>je 80 x 40 cm<br/></span></div>
        <div className="w-20 left-[11px] top-[1781px] absolute text-right justify-start"><span className="text-black text-base font-normal font-['Antonio'] leading-tight">Sonnenblumen<br/></span><span className="text-black text-base font-thin font-['Antonio'] leading-tight">2021<br/>100 x 80 cm<br/></span></div>
        <div className="left-[311px] top-[129px] absolute justify-start"><span className="text-black text-base font-normal font-['Antonio'] leading-tight">Aufbruch I<br/></span><span className="text-black text-base font-thin font-['Antonio'] leading-tight">2022<br/>70 x 60 cm<br/></span></div>
        <div className="w-14 left-[68px] top-[498px] absolute text-right justify-start"><span className="text-black text-base font-normal font-['Antonio'] leading-tight">Frühling<br/></span><span className="text-black text-base font-thin font-['Antonio'] leading-tight">2020<br/>70 x 70 cm<br/></span></div>
        <div className="w-14 left-[11px] top-[1211px] absolute text-right justify-start"><span className="text-black text-base font-normal font-['Antonio'] leading-tight">power<br/></span><span className="text-black text-base font-thin font-['Antonio'] leading-tight">2021<br/>70 x 70 cm<br/></span></div>
        <div className="w-28 h-24 left-[324px] top-[655px] absolute justify-start"><span className="text-black text-base font-normal font-['Antonio'] leading-tight">Eismeer<br/></span><span className="text-black text-base font-thin font-['Antonio'] leading-tight">2020<br/>80 x 40 cm<br/></span></div>

        <ContactSection className="absolute" style={{ width: 360, top: 3442, left: 18 }} />
        <FooterBar className="absolute" style={{ width: 360, top: 3740, left: 18 }} />
      </div>

      {/* Lightbox preview overlay */}
      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-[#D3CCC3] flex items-center justify-center px-4"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={(e) => {
            // close when clicking the overlay background (but not when clicking inside content)
            if (e.target === e.currentTarget) closePreview();
          }}
        >
          <button ref={closeBtnRef} aria-label="Close preview" onClick={closePreview} className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-3xl text-black">
            ×
          </button>

          <button aria-label="Previous image" onClick={showPrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-2xl text-black">{'<'}</button>
          <button aria-label="Next image" onClick={showNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-2xl text-black">{'>'}</button>

          <div className="max-w-full max-h-full flex flex-col items-center justify-center">
            {(() => {
              const cur = artworks[currentIndex];
              const group = cur.groupId ? artworks.filter((a) => a.groupId === cur.groupId) : null;

              if (group && group.length > 1) {
                const main = group.find((a) => (a.title ?? "").trim().length > 0) ?? group[0];
                return (
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-2 items-center justify-center">
                      {group.map((a) => (
                        <img key={a.id} src={a.largeSrc} alt={a.alt} className="max-w-[40vw] max-h-[60vh] object-contain" />
                      ))}
                    </div>
                    <div className="text-center [font-family:'Antonio',Helvetica] text-black text-lg">{(main.title || main.alt) ?? ""}</div>
                  </div>
                );
              }

              return (
                <div className="flex flex-col items-center">
                  <img src={cur.largeSrc} alt={cur.alt} className="max-w-[92vw] max-h-[82vh] object-contain" />
                  <div className="mt-3 text-center [font-family:'Antonio',Helvetica] text-black text-lg">{(cur.title || cur.alt) ?? ""}</div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopDarkMobile;
