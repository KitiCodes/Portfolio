import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button-mobile";
import { MobileNavigation } from "./MobileNavigation";

interface MobileNavbarProps {
  className?: string;
}

export const MobileNavbar = ({ className }: MobileNavbarProps): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <header className={`absolute w-[390px] h-[53px] top-[13px] left-0 bg-[#af8f5b] ${className || ""}`}>
        <div className="relative w-[356px] h-12 -top-px left-[7px]">
          <div className="absolute w-[342px] top-0 left-0 [font-family:'Antonio',Helvetica] font-normal text-[#fffdfd] text-[40px] tracking-[-0.80px] leading-[48.0px]">
            Sabine Hansen
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute w-[27px] h-5 top-[19px] left-[329px] p-0 h-auto bg-transparent hover:bg-transparent"
            onClick={toggleNav}
          >
            <Menu className="w-[27px] h-5 text-[#fffdfd]" />
          </Button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <MobileNavigation isOpen={isNavOpen} onClose={closeNav} />
    </>
  );
};
