import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navigationItems = [
  { label: "Ausstellungen", href: "/exhibitions" },
  { label: "Über mich", href: "/about-me" },
  { label: "Kontakt", href: "/contact" },
];

export const SiteHeader = (): JSX.Element => {
  const kontaktRef = useRef<HTMLAnchorElement | null>(null);
  const headerContainerRef = useRef<HTMLDivElement | null>(null);
  const [langLeft, setLangLeft] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      const kontakt = kontaktRef.current;
      const container = headerContainerRef.current;
      if (!kontakt || !container) return;
      const kRect = kontakt.getBoundingClientRect();
      const cRect = container.getBoundingClientRect();
      const center = kRect.left - cRect.left + kRect.width / 2;
      setLangLeft(center);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="w-full">
      {/* Language bar (top, non-sticky) */}
      <div className="w-full">
        <div className="container mx-auto relative h-7 px-4">
          <div
            className="absolute top-1/2 -translate-y-1/2 [font-family:'Antonio',Helvetica] text-[16px] font-thin leading-none text-black"
            style={{ left: langLeft, transform: "translate(-50%, -50%)" }}
          >
            <a href="#de" className="hover:underline">de</a>
            <span className="px-1">|</span>
            <a href="#en" className="hover:underline">en</a>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#af8f5b] shadow">
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
    </div>
  );
};
