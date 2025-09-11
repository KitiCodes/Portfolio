import { FooterBarMobile } from "../components/FooterBarMobile";
import SiteHeaderMobile from "../components/SiteHeaderMobile";
import ContactSectionMobile from "../components/ContactSectionMobile";
import { useEffect, useRef, useState } from "react";

// Optimized WebP imports (small variants for mobile)
import AusstellungOffenes from "../assets/optimized/sm/Ausstellung-Offenes Atelier.webp";
import AusstellungGiesecke from "../assets/optimized/sm/Ausstellung-Giesecke.webp";
import AusstellungAumann from "../assets/optimized/sm/Ausstellung-Aumann.webp";

export const ExhebitionsMobile = (): JSX.Element => {
  const stackingRef = useRef<HTMLDivElement | null>(null);
  const [stackHeight, setStackHeight] = useState<number>(1100);

  useEffect(() => {
    const el = stackingRef.current;
    if (!el) return;

    const update = () => {
      const parentRect = el.getBoundingClientRect();
      // include all descendants so absolutely positioned elements are counted
      const descendants = Array.from(el.querySelectorAll('*')) as HTMLElement[];
      let max = 0;
      descendants.forEach((ch) => {
        const rect = ch.getBoundingClientRect();
        const bottom = rect.bottom - parentRect.top;
        if (bottom > max) max = bottom;
      });
      // add some spacing buffer
      const value = Math.max(600, Math.ceil(max + 24));
      setStackHeight(value);
    };

    // ResizeObserver to track layout changes
    const ro = new (window as any).ResizeObserver(update);
    ro.observe(el);

    // update on image load inside the stacking area
    const imgs = el.querySelectorAll('img');
    imgs.forEach((i) => i.addEventListener('load', update));

    window.addEventListener('resize', update);
    // initial measurement (give browser a tick)
    setTimeout(update, 50);

    return () => {
      ro.disconnect();
      imgs.forEach((i) => i.removeEventListener('load', update));
      window.removeEventListener('resize', update);
    };
  }, []);

  const exhibitions = [
    {
      id: 1,
      title: "Offenes Atelier",
      date: "6. und 7. Dezember 2024",
      location: "Giesecke Licht + Design\nin Schwentinental",
      image: AusstellungOffenes,
      imageClasses: "w-[218px] h-[145px] top-[78px] left-1",
      textClasses: "top-[132px] left-[249px]",
    },
    {
      id: 2,
      title: 'Ausstellung\n"Licht und Kunst - Kunst und Licht"',
      date: "seit September 2024",
      location: "Giesecke Licht + Design\nin Schwentinental",
      image: AusstellungGiesecke,
      imageClasses: "w-[203px] h-[135px] top-[235px] left-[187px]",
      textClasses: "top-[285px] left-[5px] text-right",
    },
    {
      id: 3,
      title: "Ausstellung",
      date: "seit August 2024",
      location: "Aumann Authentics, Kiel",
      image: AusstellungAumann,
      imageClasses: "w-[238px] h-[168px] top-[404px] left-[11px]",
      textClasses: "top-[461px] left-[260px]",
    },
  ];

  return (
    <div className="bg-[#d4cdc4] grid justify-items-center [align-items:start] w-screen">
      {/* Language bar (centered) */}
      <div className="w-full">
        <div className="mx-auto relative h-7 px-4" style={{ maxWidth: 1200 }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [font-family:'Antonio',Helvetica] text-[16px] font-thin leading-none text-black">
            <a href="#de" className="hover:underline">de</a>
            <span className="px-1">|</span>
            <a href="#en" className="hover:underline">en</a>
          </div>
        </div>
      </div>

      {/* Sticky mobile header */}
      <SiteHeaderMobile />

      {/* container: stacking area (for absolutely-positioned exhibition assets) + normal flow below */}
      <div className="bg-[#d4cdc4] w-[390px] relative">
        {/* Stacking area: keep relative so child images/text can still be absolute if needed */}
        <div ref={stackingRef} className="relative w-full" style={{ minHeight: stackHeight }}>
          {exhibitions.map((exhibition) => (
            <div key={exhibition.id}>
              <div
                className={`absolute ${exhibition.textClasses} [font-family:'Antonio',Helvetica] font-normal text-black text-sm tracking-[-0.28px] leading-[16.8px]`}
              >
                <span className="tracking-[-0.04px]">
                  {exhibition.title}
                  <br />
                </span>
                <span className="font-thin tracking-[-0.04px]">
                  {exhibition.date}
                  <br />
                  {exhibition.location}
                </span>
              </div>
              <img
                className={`absolute ${exhibition.imageClasses} object-cover`}
                alt="Exhibition image"
                src={exhibition.image}
              />
            </div>
          ))}
        </div>

        {/* Contact and footer are now regular flow children and will appear below the stacking area */}
        <div className="w-full flex flex-col items-start">
          <ContactSectionMobile className="mt-6 w-full" />
          <FooterBarMobile className="mt-4 pl-3" />
        </div>
      </div>
    </div>
  );
};

export default ExhebitionsMobile;
