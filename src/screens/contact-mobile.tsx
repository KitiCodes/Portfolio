import { InstagramIcon } from "lucide-react";
import { FooterBarMobile } from "../components/FooterBarMobile";
import { MobileNavbar } from "../components/MobileNavbar";

// Optimized WebP import (small variant for mobile)
import kontaktImg from "../assets/optimized/sm/Kontakt.webp";

export const ContactMobile = (): JSX.Element => {
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

        {/* Use unified MobileNavbar component */}
        <MobileNavbar />

        {/* Use FooterBarMobile component with mobile-appropriate styling */}
        <FooterBarMobile className="absolute top-[513px] left-3" />
      </div>
    </div>
  );
};

export default ContactMobile;
