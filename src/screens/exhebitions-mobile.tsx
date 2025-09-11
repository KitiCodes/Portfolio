import { FooterBarMobile } from "../components/FooterBarMobile";
import SiteHeaderMobile from "../components/SiteHeaderMobile";
import ContactSectionMobile from "../components/ContactSectionMobile";

// Optimized WebP imports (small variants for mobile)
import AusstellungOffenes from "../assets/optimized/sm/Ausstellung-Offenes Atelier.webp";
import AusstellungGiesecke from "../assets/optimized/sm/Ausstellung-Giesecke.webp";
import AusstellungAumann from "../assets/optimized/sm/Ausstellung-Aumann.webp";

export const ExhebitionsMobile = (): JSX.Element => {
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
    <div className="bg-[#d3ccc3] grid justify-items-center [align-items:start] w-screen">
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

      <div className="bg-[#d3ccc3] overflow-hidden w-[390px] h-[967px] relative">
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

        {/* Unified contact block at previous position (654px from top) */}
        <ContactSectionMobile className="absolute top-[654px] left-0" />

        {/* FooterBarMobile positioned equivalent to former relative 287px inside footer => 654 + 287 = 941 */}
        <FooterBarMobile className="absolute top-[941px] left-3" />
      </div>
    </div>
  );
};

export default ExhebitionsMobile;
