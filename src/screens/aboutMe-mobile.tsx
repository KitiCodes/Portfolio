import { MenuIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { FooterBarMobile } from "../components/FooterBarMobile";

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
    <div className="bg-[#d3ccc3] grid justify-items-center [align-items:start] w-screen">
      <div className="bg-[#d3ccc3] overflow-hidden w-[390px] h-[1581px] relative">
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
          geben mir die Freiheit, mit großer Geste und vollem Einsatz zu
          arbeiten.
        </div>

        <header className="absolute w-[390px] h-[53px] top-[13px] left-0 bg-[#af8f5b]">
          <div className="relative w-[356px] h-12 -top-px left-[7px]">
            <div className="absolute w-[342px] top-0 left-0 [font-family:'Antonio',Helvetica] font-normal text-[#fffdfd] text-[40px] tracking-[-0.80px] leading-[48.0px]">
              Sabine Hansen
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute w-[27px] h-5 top-[19px] left-[329px] p-0 h-auto"
            >
              <MenuIcon className="w-[27px] h-5 text-[#fffdfd]" />
            </Button>
          </div>
        </header>

        {galleryImages.map((image, index) => (
          <img
            key={`gallery-${index}`}
            className={`absolute ${image.className}`}
            alt={image.alt}
            src={image.src}
          />
        ))}

        <Card className="absolute w-[390px] h-[313px] top-[1223px] left-0 bg-transparent border-none shadow-none">
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
        <FooterBarMobile className="absolute top-[1551px] left-3" />
      </div>
    </div>
  );
};

export default AboutMeMobile;
