import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button-mobile";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps): JSX.Element => {
  if (!isOpen) return <></>;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="absolute top-0 right-0 w-[280px] h-full bg-[#af8f5b] shadow-lg">
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 border-b border-[#854686]">
          <h2 className="text-white text-xl [font-family:'Antonio',Helvetica] font-normal">
            Navigation
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-[#854686] p-2"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4">
          <a
            href="/"
            className="block py-3 px-2 text-white text-lg [font-family:'Antonio',Helvetica] font-normal hover:bg-[#854686] hover:text-white rounded transition-colors"
            onClick={onClose}
          >
            Home
          </a>
          <a
            href="/exhibitions"
            className="block py-3 px-2 text-white text-lg [font-family:'Antonio',Helvetica] font-normal hover:bg-[#854686] hover:text-white rounded transition-colors"
            onClick={onClose}
          >
            Ausstellungen
          </a>
          <a
            href="/about-me"
            className="block py-3 px-2 text-white text-lg [font-family:'Antonio',Helvetica] font-normal hover:bg-[#854686] hover:text-white rounded transition-colors"
            onClick={onClose}
          >
            Über mich
          </a>
          <a
            href="/contact"
            className="block py-3 px-2 text-white text-lg [font-family:'Antonio',Helvetica] font-normal hover:bg-[#854686] hover:text-white rounded transition-colors"
            onClick={onClose}
          >
            Kontakt
          </a>
        </nav>

        {/* Language switcher */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="border-t border-[#854686] pt-4">
            <div className="text-white text-sm [font-family:'Antonio',Helvetica] font-normal text-center">
              <a href="#de" className="hover:underline">de</a>
              <span className="px-2">|</span>
              <a href="#en" className="hover:underline">en</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
