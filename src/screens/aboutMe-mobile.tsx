import { FooterBarMobile } from "../components/FooterBarMobile";
import SiteHeaderMobile from "../components/SiteHeaderMobile";
import ContactSectionMobile from "../components/ContactSectionMobile";
import { useEffect, useRef, useState } from "react";

// Optimized WebP imports (small variants for mobile)
import UMtopImg from "../assets/optimized/sm/UM0.webp";
import UMb1Img from "../assets/optimized/sm/UM1.webp";
import UMb2Img from "../assets/optimized/sm/UM2.webp";
import UMb3Img from "../assets/optimized/sm/UM3.webp";
import UMb4Img from "../assets/optimized/sm/UM4.webp";
import UMb5Img from "../assets/optimized/sm/UM5.webp";
import UMb6Img from "../assets/optimized/sm/UM6.webp";
import UMb7Img from "../assets/optimized/sm/UM7.webp";

export const AboutMeMobile = (): JSX.Element => {
  const stackingRef = useRef<HTMLDivElement | null>(null);
  const [stackHeight, setStackHeight] = useState<number>(1581);

  useEffect(() => {
    const el = stackingRef.current;
    if (!el) return;
    const update = () => {
      const parentRect = el.getBoundingClientRect();
      // measure all descendants so absolute children are included
      const descendants = Array.from(el.querySelectorAll('*')) as HTMLElement[];
      let max = 0;
      descendants.forEach((ch) => {
        const rect = ch.getBoundingClientRect();
        const bottom = rect.bottom - parentRect.top;
        if (bottom > max) max = bottom;
      });
      const value = Math.max(600, Math.ceil(max + 24));
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

  const galleryImages = [
    {
      src: UMb1Img,
      alt: "Img",
      className: "w-[82px] h-[123px] top-[885px] left-3.5 object-cover",
    },
    {
      src: UMb2Img,
      alt: "Img",
      className: "w-[184px] h-[123px] top-[885px] left-[105px] object-cover",
    },
    {
      src: UMb3Img,
      alt: "Img",
      className: "w-[78px] h-[123px] top-[885px] left-[298px] object-cover",
    },
    {
      src: UMb4Img,
      alt: "Img",
      className: "w-[84px] h-[123px] top-[1020px] left-3.5 object-cover",
    },
    {
      src: UMb5Img,
      alt: "Img",
      className: "w-[82px] h-[123px] top-[1020px] left-[110px] object-cover",
    },
    {
      src: UMb6Img,
      alt: "Img",
      className: "w-[82px] h-[123px] top-[1020px] left-[203px] object-cover",
    },
    {
      src: UMb7Img,
      alt: "Img",
      className: "w-20 h-[123px] top-[1020px] left-[296px] object-cover",
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

      <div className="bg-[#d4cdc4] w-[390px] relative">
        <div ref={stackingRef} className="relative w-full" style={{ minHeight: stackHeight }}>
          <img
            className="absolute w-[199px] h-[257px] top-[83px] left-2.5"
            alt="Img"
            src={UMtopImg}
          />

          <div className="absolute w-[162px] top-[78px] left-[218px] [font-family:'Antonio',Helvetica] font-thin text-black text-base tracking-[0] leading-6">
            Ich bin Sabine Hansen – geboren und aufgewachsen im hohen Norden,
            zwischen Nord- und Ostsee. Heute lebe ich in Schwentinental, in der
            Nähe von Kiel. <br />
            <br />
            Kreativität und die Liebe zu Kunst und Literatur begleiten mich schon
            mein ganzes Leben.
          </div>

          <div className="absolute w-[333px] top-[369px] left-7 [font-family:'Antonio',Helvetica] font-thin text-black text-base text-center tracking-[0] leading-6">
            Nach vielen Jahren im sozialen Bereich habe ich 2019 meine
            Leidenschaft für die Acrylmalerei entdeckt. Seither bilde ich mich
            kontinuierlich weiter, unter anderem an Malschulen in
            Schleswig-Holstein und Hamburg.
            <br />
            <br />
            Mein Schwerpunkt liegt heute auf der abstrakten Acrylmalerei. Ich
            experimentiere gern mit verschiedenen Materialien und Techniken –
            immer auf der Suche nach neuen Ausdrucksformen und spannenden
            Oberflächen.
            <br />
            <br />
            Malen ist für mich in erster Linie Ausdruck und Verarbeitung von
            Emotionen, Erinnerungen, Bildern oder Ereignissen. Meine Inspiration
            finde ich in der Natur, in der Kunst und in meinem eigenen Innenleben.
            <br />
            <br />
            Kraftvolle, aber auch zarte Farben finden sich ebenso wie feine und
            grobe Strukturen wieder. Ich arbeite meist auf großen Formaten – sie
            geben mir the Freiheit, mit großer Geste und vollem Einsatz zu
            arbeiten.
          </div>

          {galleryImages.map((image, index) => (
            <img
              key={`gallery-${index}`}
              className={`absolute ${image.className}`}
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>

        <div className="w-full flex flex-col items-center">
          <ContactSectionMobile className="mt-6 w-full" />
          <FooterBarMobile className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default AboutMeMobile;
