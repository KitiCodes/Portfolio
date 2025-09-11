import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { FooterBarMobile } from "../components/FooterBarMobile";

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

        <header className="absolute w-[390px] h-[53px] top-[13px] left-0 bg-[#af8f5b]">
          <div className="relative w-[356px] h-12 -top-px left-[7px]">
            <div className="absolute w-[342px] top-0 left-0 [font-family:'Antonio',Helvetica] font-normal text-[#fffdfd] text-[40px] tracking-[-0.80px] leading-[48.0px]">
              Sabine Hansen
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-[19px] left-[329px] w-[27px] h-5 p-0 hover:bg-transparent"
            >
              <div className="relative w-[27px] h-5">
                <img
                  className="top-[-3px] absolute w-[27px] h-[3px] left-0"
                  alt="MenuIcon line"
                  src="/line-2.svg"
                />
                <img
                  className="top-[17px] absolute w-[27px] h-[3px] left-0"
                  alt="MenuIcon line"
                  src="/line-2.svg"
                />
                <img
                  className="top-[7px] absolute w-[27px] h-[3px] left-0"
                  alt="MenuIcon line"
                  src="/line-2.svg"
                />
              </div>
            </Button>
          </div>
        </header>

        <footer className="absolute w-[432px] h-[313px] top-[654px] left-0">
          <Card className="absolute w-[390px] h-[313px] top-0 left-0 bg-transparent border-0 shadow-none">
            <CardContent className="relative h-[313px] p-0">
              <div className="absolute w-[390px] h-[313px] top-0 left-0">
                <div className="flex flex-col items-start gap-2.5 relative w-[245px] h-[121px] -top-px left-[73px]">
                  <div className="relative self-stretch [font-family:'Antonio',Helvetica] font-normal text-black text-4xl text-center tracking-[-0.72px] leading-[43.2px]">
                    <span className="tracking-[-0.26px]">
                      Sabine Hansen
                      <br />
                    </span>
                  </div>
                  <div className="relative self-stretch [font-family:'Antonio',Helvetica] font-normal text-black text-4xl text-center tracking-[-0.72px] leading-[43.2px]">
                    <span className="text-2xl tracking-[-0.12px] leading-[28.8px]">
                      Schwentinental, Deutschland
                      <br />
                    </span>
                  </div>
                  <div className="relative self-stretch [font-family:'Antonio',Helvetica] font-normal text-black text-4xl text-center tracking-[-0.72px] leading-[43.2px]">
                    <a
                      href="mailto:kontakt@sabinehansen.art"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-2xl tracking-[-0.12px] leading-[28.8px] underline">
                        kontakt@sabinehansen.art
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <img
                className="absolute w-[46px] h-[53px] top-[166px] left-[172px]"
                alt="Instagram"
                src="/instagram.png"
              />
            </CardContent>
          </Card>

          {/* Use FooterBarMobile component with mobile-appropriate styling */}
          <FooterBarMobile className="absolute top-[287px] left-3" />
        </footer>
      </div>
    </div>
  );
};

export default ExhebitionsMobile;
