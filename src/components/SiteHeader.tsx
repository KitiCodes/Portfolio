import { useRef, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";
import SiteHeaderMobile from "./SiteHeaderMobile";

export const SiteHeader = (): JSX.Element => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth <= 768 : false));
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setAtTop(window.scrollY <= 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const galleryYears = [2026, 2025, 2024, 2022, 2021,2020];
  const isGalleryActive = galleryYears.some((y) => location.pathname === `/gallery-${y}`);

  const navigationItems = [
    { label: t("Aktuelles", "Updates"), href: "/updates" },
    { label: t("Ausstellungen", "Exhibitions"), href: "/exhibitions" },
    { label: t("Über mich", "About me"), href: "/about-me" },
    { label: t("Kontakt", "Contact"), href: "/contact" },
  ];

  const kontaktRef = useRef<HTMLAnchorElement | null>(null);
  const headerContainerRef = useRef<HTMLDivElement | null>(null);

  if (isMobile) return <SiteHeaderMobile />;

  return (
    <div className="w-full">
      {/* Desktop Navigation Bar: fixed, sits below 41px language bar at page top; then snaps to top on scroll. */}
      <header
        className="fixed left-0 right-0 z-50 bg-[#af8f5b] shadow"
        style={{ top: atTop ? 41 : 0 }}
      >
        <div ref={headerContainerRef} className="container mx-auto flex h-24 items-center justify-between px-6">
          <h1 className="[font-family:'Antonio',Helvetica] text-white text-5xl md:text-6xl tracking-[-0.02em] leading-none">
            <Link to="/" className="hover:opacity-90" aria-label="Zur Startseite">
              Sabine Hansen
            </Link>
          </h1>
          <nav className="flex items-center gap-[72px] [font-family:'Antonio',Helvetica]">
            {/* Aktuelles first */}
            {navigationItems.slice(0, 1).map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  [
                    "text-[16px] font-thin px-0",
                    "hover:text-[#854686] hover:bg-transparent",
                    isActive ? "text-[#854686]" : "text-white",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            {/* Gallery dropdown */}
            <div className="relative group">
              <span
                className={`text-[16px] font-thin cursor-default hover:text-[#854686] ${isGalleryActive ? "text-[#854686]" : "text-white"}`}
              >
                {t("Galerie", "Gallery")}
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block z-50">
                <div className="bg-[#af8f5b] shadow-lg py-2 flex flex-col items-center min-w-[90px]">
                  {galleryYears.map((year) => (
                    <NavLink
                      key={year}
                      to={`/gallery-${year}`}
                      className={({ isActive }) =>
                        `block text-[16px] font-thin px-6 py-1 w-full text-center hover:text-[#854686] ${isActive ? "text-[#854686]" : "text-white"}`
                      }
                    >
                      {year}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            {/* Remaining items */}
            {navigationItems.slice(1).map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                ref={item.label === "Kontakt" ? (kontaktRef as any) : undefined}
                className={({ isActive }) =>
                  [
                    "text-[16px] font-thin px-0",
                    "hover:text-[#854686] hover:bg-transparent",
                    isActive ? "text-[#854686]" : "text-white",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};
