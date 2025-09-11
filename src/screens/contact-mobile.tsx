import { InstagramIcon } from "lucide-react";
import { FooterBarMobile } from "../components/FooterBarMobile";
import SiteHeaderMobile from "../components/SiteHeaderMobile";
import { useEffect, useRef, useState } from "react";

// Optimized WebP import (small variant for mobile)
import kontaktImg from "../assets/optimized/sm/Kontakt.webp";

export const ContactMobile = (): JSX.Element => {
  const stackingRef = useRef<HTMLDivElement | null>(null);
  const [stackHeight, setStackHeight] = useState<number>(546);

  useEffect(() => {
    const el = stackingRef.current;
    if (!el) return;
    const update = () => {
      const parentRect = el.getBoundingClientRect();
      // use all descendants to catch absolute-positioned nodes
      const descendants = Array.from(el.querySelectorAll('*')) as HTMLElement[];
      let max = 0;
      descendants.forEach((ch) => {
        const rect = ch.getBoundingClientRect();
        const bottom = rect.bottom - parentRect.top;
        if (bottom > max) max = bottom;
      });
      const value = Math.max(300, Math.ceil(max + 24));
      setStackHeight(value);
    };
    const ro = new (window as any).ResizeObserver(update);
    ro.observe(el);
    const imgs = el.querySelectorAll('img');
    imgs.forEach((i) => i.addEventListener('load', update));
    window.addEventListener('resize', update);
    setTimeout(update, 50);
    return () => {
      ro.disconnect();
      imgs.forEach((i) => i.removeEventListener('load', update));
      window.removeEventListener('resize', update);
    };
  }, []);

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

      <div className="bg-[#d4cdc4] w-[390px] relative">
        <div ref={stackingRef} className="relative w-full" style={{ minHeight: stackHeight }}>
          <div className="absolute w-[167px] top-[139px] left-[11px] [font-family:'Antonio',Helvetica] font-normal text-black text-base text-center tracking-[-0.32px] leading-6">
            <span className="tracking-[-0.05px]">
              Bei Interesse an meinen Bildern freue ich mich über eine E-Mail:
              <br />
              <br />
              <br />
              <br />
            </span>

            <a
              href="mailto:kontakt@sabinehansen.art"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="tracking-[-0.05px] underline">
                kontakt@sabinehansen.art
              </span>
            </a>
          </div>

          <InstagramIcon className="absolute w-14 h-[37px] top-[371px] left-[67px]" />

          <img
            className="absolute w-[186px] h-[353px] top-[77px] left-[196px]"
            alt="Element"
            src={kontaktImg}
          />
        </div>

        <div className="w-full flex flex-col items-start">
          <FooterBarMobile className="mt-4 pl-3" />
        </div>
      </div>
    </div>
  );
};

export default ContactMobile;
