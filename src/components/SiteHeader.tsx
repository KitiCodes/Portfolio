import { useRef, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";
import SiteHeaderMobile from "./SiteHeaderMobile";

export const SiteHeader = (): JSX.Element => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth <= 768 : false));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const navigationItems = [
    { label: t("Ausstellungen", "Exhibitions"), href: "/exhibitions" },
    { label: t("Über mich", "About me"), href: "/about-me" },
    { label: t("Kontakt", "Contact"), href: "/contact" },
  ];

  const kontaktRef = useRef<HTMLAnchorElement | null>(null);
  const headerContainerRef = useRef<HTMLDivElement | null>(null);

  if (isMobile) return <SiteHeaderMobile />;

  return (
    <div className="w-full">
      {/* Navigation Bar: sticky under the top language bar (41px) */}
      <header className="sticky top-[41px] left-0 right-0 z-40 bg-[#af8f5b] shadow">
        <div ref={headerContainerRef} className="container mx-auto flex h-24 items-center justify-between px-6">
          <h1 className="[font-family:'Antonio',Helvetica] text-white text-5xl md:text-6xl tracking-[-0.02em] leading-none">
            <Link to="/" className="hover:opacity-90" aria-label="Zur Startseite">
              Sabine Hansen
            </Link>
          </h1>
          <nav className="flex items-center gap-[72px] [font-family:'Antonio',Helvetica]">
            {navigationItems.map((item) => (
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
  {/* spacer to preserve layout (header height) - only for md+ */}
  <div aria-hidden="true" className="hidden md:block h-24 w-full" />
    </div>
  );
};
