import { Link, NavLink } from "react-router-dom";

const navigationItems = [
  { label: "Ausstellungen", href: "/exhibitions" },
  { label: "Über mich", href: "/about-me" },
  { label: "Kontakt", href: "/contact" },
];

export const AppHeader = (): JSX.Element => {
  return (
    <>
  <header className="sticky top-0 left-0 right-0 z-50 bg-[#af8f5b] shadow">
        <div className="container mx-auto flex h-24 items-center justify-between px-6">
          <h1 className="[font-family:'Antonio',Helvetica] tracking-[-0.02em] leading-none">
            <Link to="/" className="text-white text-5xl md:text-6xl hover:opacity-90" aria-label="Zur Startseite">
              Sabine Hansen
            </Link>
          </h1>
          <nav className="flex items-center gap-[72px] [font-family:'Antonio',Helvetica]">
            {navigationItems.map((item) => (
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
          </nav>
        </div>
      </header>
  {/* spacer removed: header is sticky and occupies layout */}
    </>
  );
};
