import { useCallback, useEffect, useRef, useState } from "react";
import SiteHeaderMobile from "../components/SiteHeaderMobile";
import { ContactSection } from "../components/ContactSection";
import { FooterBar } from "../components/FooterBar";

// Use optimized small WebP artworks for page rendering (sm folder)
const Ausstellung3Img = new URL("../assets/optimized/sm/Ausstellung-Offenes Atelier.webp", import.meta.url).href;
const Ausstellung2Img = new URL("../assets/optimized/sm/Ausstellung-Giesecke.webp", import.meta.url).href;
const Ausstellung1Img = new URL("../assets/optimized/sm/Ausstellung-Aumann.webp", import.meta.url).href;
// Large variants for lightbox
const Ausstellung3Lg = new URL("../assets/optimized/lg/Ausstellung-Offenes Atelier.webp", import.meta.url).href;
const Ausstellung2Lg = new URL("../assets/optimized/lg/Ausstellung-Giesecke.webp", import.meta.url).href;
const Ausstellung1Lg = new URL("../assets/optimized/lg/Ausstellung-Aumann.webp", import.meta.url).href;

const imgs = [
  { small: Ausstellung3Img, large: Ausstellung3Lg, alt: 'Offenes Atelier' },
  { small: Ausstellung2Img, large: Ausstellung2Lg, alt: 'Licht und Kunst' },
  { small: Ausstellung1Img, large: Ausstellung1Lg, alt: 'Aumann Authentics' }
];

export const ExhebitionsMobile = (): JSX.Element => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const openPreview = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsPreviewOpen(true);
  }, []);
  const closePreview = useCallback(() => setIsPreviewOpen(false), []);
  const showPrev = useCallback(() => setCurrentIndex((i) => (i - 1 + imgs.length) % imgs.length), []);
  const showNext = useCallback(() => setCurrentIndex((i) => (i + 1) % imgs.length), []);

  useEffect(() => {
    if (!isPreviewOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePreview();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // focus close button for accessibility
    if (closeBtnRef.current) closeBtnRef.current.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isPreviewOpen, closePreview, showPrev, showNext]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) showPrev();
    if (dx < -50) showNext();
    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Language bar (top, non-sticky) */}
      <div className="w-full">
        <div className="container mx-auto relative h-7 px-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [font-family:'Antonio',Helvetica] text-[16px] font-thin leading-none text-black">
            <a href="#de" className="hover:underline">de</a>
            <span className="px-1">|</span>
            <a href="#en" className="hover:underline">en</a>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <SiteHeaderMobile />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-6">
          {imgs.map((i, idx) => (
            <article key={i.alt}>
              <img src={i.small} alt={i.alt} className="w-full h-auto object-cover rounded cursor-pointer" loading="lazy" onClick={() => openPreview(idx)} />
              <div className="mt-3 [font-family:'Antonio',Helvetica] text-black text-base">
                {idx === 0 && (
                  <>
                    <div className="font-normal">Offenes Atelier</div>
                    <div className="font-thin">6. und 7. Dezember 2024<br/>Giesecke Licht + Design, Schwentinental</div>
                  </>
                )}
                {idx === 1 && (
                  <>
                    <div className="font-normal">Ausstellung „Licht und Kunst - Kunst und Licht”</div>
                    <div className="font-thin">seit September 2024<br/>Giesecke Licht + Design, Schwentinental</div>
                  </>
                )}
                {idx === 2 && (
                  <>
                    <div className="font-normal">Ausstellung</div>
                    <div className="font-thin">seit August 2024<br/>Aumann Authentics, Kiel</div>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>

        <ContactSection className="mt-8" />
        <FooterBar className="mt-6" />
      </main>

      {/* Lightbox preview */}
      {isPreviewOpen && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] bg-[#D3CCC3] flex items-center justify-center px-4" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onClick={(e) => { if (e.target === e.currentTarget) closePreview(); }}>
          <button ref={closeBtnRef} aria-label="Close preview" onClick={closePreview} className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-3xl text-black">×</button>
          <button aria-label="Previous image" onClick={showPrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-2xl text-black">{'<'}</button>
          <button aria-label="Next image" onClick={showNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-2xl text-black">{'>'}</button>

          <div className="max-w-full max-h-full flex flex-col items-center justify-center">
            <img src={imgs[currentIndex].large} alt={imgs[currentIndex].alt} className="max-w-[92vw] max-h-[82vh] object-contain" />
            <div className="mt-3 text-center [font-family:'Antonio',Helvetica] text-black text-lg">{imgs[currentIndex].alt}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExhebitionsMobile;
