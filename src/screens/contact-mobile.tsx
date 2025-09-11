import { InstagramIcon } from "lucide-react";
import { Button } from "../components/ui/button-mobile";

// Optimized WebP import (small variant for mobile)
import kontaktImg from "../assets/optimized/sm/Kontakt.webp";

export const ContactMobile = (): JSX.Element => {
  const footerLinks = [
    { text: "Sabine Hansen", className: "w-[57px]" },
    { text: "2025", className: "w-[18px]" },
    { text: "Impressum", className: "w-11" },
    { text: "Datenschutz", className: "w-12" },
  ];

  return (
    <div className="bg-[#d3ccc3] grid justify-items-center [align-items:start] w-screen">
      <div className="bg-[#d3ccc3] overflow-hidden w-[390px] h-[546px] relative">
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

        <header className="absolute w-[390px] h-[53px] top-[13px] left-0 bg-[#af8f5b]">
          <div className="relative w-[356px] h-12 -top-px left-[7px]">
            <div className="absolute w-[342px] top-0 left-0 [font-family:'Antonio',Helvetica] font-normal text-[#fffdfd] text-[40px] tracking-[-0.80px] leading-[48.0px]">
              Sabine Hansen
            </div>

            <Button
              variant="ghost"
              className="absolute w-[27px] h-5 top-[19px] left-[329px] p-0 h-auto"
            >
              <div className="relative w-[27px] h-5">
                <img
                  className="top-[-3px] absolute w-[27px] h-[3px] left-0"
                  alt="Line"
                  src="/line-2.svg"
                />
                <img
                  className="top-[17px] absolute w-[27px] h-[3px] left-0"
                  alt="Line"
                  src="/line-2.svg"
                />
                <img
                  className="top-[7px] absolute w-[27px] h-[3px] left-0"
                  alt="Line"
                  src="/line-2.svg"
                />
              </div>
            </Button>
          </div>
        </header>

        <footer className="absolute w-[432px] h-[19px] top-[513px] left-0">
          <div className="absolute w-11 top-0.5 left-[155px] [font-family:'Antonio',Helvetica] font-normal text-black text-[11px] tracking-[-0.22px] leading-[13.2px] whitespace-nowrap">
            Impressum
          </div>

          <div className="absolute w-12 top-0.5 left-[243px] [font-family:'Antonio',Helvetica] font-normal text-black text-[11px] tracking-[-0.22px] leading-[13.2px] whitespace-nowrap">
            Datenschutz
          </div>

          <img
            className="absolute w-[18px] h-[15px] top-0.5 left-[72px]"
            alt="Copyright"
            src="/copyright.png"
          />

          <div className="absolute w-[18px] top-0.5 left-[93px] [font-family:'Antonio',Helvetica] font-normal text-black text-[11px] tracking-[-0.22px] leading-[13.2px] whitespace-nowrap">
            2025
          </div>

          <div className="absolute w-[57px] top-0.5 left-3 [font-family:'Antonio',Helvetica] font-normal text-black text-[11px] tracking-[-0.22px] leading-[13.2px] whitespace-nowrap">
            Sabine Hansen
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactMobile;
