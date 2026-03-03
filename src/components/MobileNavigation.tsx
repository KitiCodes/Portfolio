import { X } from "lucide-react";
import { Button } from "./ui/button-mobile";
// import { useLanguage } from "../lib/LanguageContext";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  /** Render inline (under header) rather than fixed overlay */
  inline?: boolean;
  /** Optional ref from parent to attach to nav element for focus trapping */
  refNav?: React.RefObject<HTMLElement> | null;
}

export const MobileNavigation = ({ isOpen, onClose, inline = false, refNav = null }: MobileNavigationProps): JSX.Element => {
  const galleryYears = [2026, 2025, 2024, 2022, 2021,2020];
  const [galleryOpen, setGalleryOpen] = useState(false);

  if (!isOpen) return <></>;

  const NavContent = (
    <>
      <div className="w-full px-4 py-3 flex flex-col gap-2">
          <NavLink to="/updates" onClick={onClose} className={({ isActive }) => (isActive ? 'text-[#854686]' : 'text-white')}>
          Aktuelles
        </NavLink>
          {/* Gallery expandable */}
          <button
            onClick={() => setGalleryOpen((v) => !v)}
            className="text-left text-white hover:text-[#854686] flex items-center gap-1"
          >
            Galerie <span className="text-xs">{galleryOpen ? "▲" : "▼"}</span>
          </button>
          {galleryOpen && (
            <div className="flex flex-col gap-1 pl-4">
              {galleryYears.map((year) => (
                <NavLink
                  key={year}
                  to={`/gallery-${year}`}
                  onClick={onClose}
                  className={({ isActive }) => (isActive ? "text-[#854686]" : "text-white")}
                >
                  {year}
                </NavLink>
              ))}
            </div>
          )}
          <NavLink to="/exhibitions" onClick={onClose} className={({ isActive }) => (isActive ? 'text-[#854686]' : 'text-white')}>
          Ausstellungen
        </NavLink>
        <NavLink to="/about-me" onClick={onClose} className={({ isActive }) => (isActive ? 'text-[#854686]' : 'text-white')}>
          Über mich
        </NavLink>
        <NavLink to="/contact" onClick={onClose} className={({ isActive }) => (isActive ? 'text-[#854686]' : 'text-white')}>
          Kontakt
        </NavLink>

        {/*/!* separator *!/*/}
        {/*<div className="h-px bg-white/30 my-2" role="separator" />*/}

        {/* Language selector */}
        {/*<div className="flex items-center gap-2 text-white text-sm [font-family:'Antonio',Helvetica]">*/}
        {/*  {(() => {*/}
        {/*    const { lang, setLang } = useLanguage();*/}
        {/*    return (*/}
        {/*      <>*/}
        {/*        <button onClick={() => { setLang('de'); onClose(); }} className={`hover:underline px-2 ${lang === 'de' ? 'underline' : ''}`}>de</button>*/}
        {/*        <span className="opacity-80">|</span>*/}
        {/*        <button onClick={() => { setLang('en'); onClose(); }} className={`hover:underline px-2 ${lang === 'en' ? 'underline' : ''}`}>en</button>*/}
        {/*      </>*/}
        {/*    );*/}
        {/*  })()}*/}
        {/*</div>*/}
      </div>
    </>
  );

  if (inline) {
    // render the same markup used previously by SiteHeaderMobile so visual stays identical
    return (
      <nav ref={refNav ?? undefined} aria-hidden={isOpen ? 'false' : 'true'} className={`duration-300 bg-[#af8f5b]`}>
        {NavContent}
      </nav>
    );
  }

  // default: fixed overlay drawer
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

        <nav className="flex flex-col p-4">
          {NavContent}
        </nav>
      </div>
    </div>
  );
};
