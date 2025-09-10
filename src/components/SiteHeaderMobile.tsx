import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function SiteHeaderMobile(): JSX.Element {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const focusableSelector = 'a, button, [tabindex]:not([tabindex="-1"])';
    const getFocusable = () => Array.from(nav.querySelectorAll<HTMLElement>(focusableSelector)).filter((el) => !el.hasAttribute('disabled'));

    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') {
        setOpen(false);
      }
      if (e.key === 'Tab') {
        // simple focus trap
        const focusable = getFocusable();
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onKey);

      // Focus first link when opened
      const focusable = getFocusable();
      if (focusable.length > 0) focusable[0].focus();

      return () => {
        document.removeEventListener('keydown', onKey);
        document.body.style.overflow = prevOverflow;
      };
    }

    // cleanup in case nav closes
    return () => {};
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[#af8f5b] shadow">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <h1 className="[font-family:'Antonio',Helvetica] text-white text-2xl leading-none">
          <Link to="/" className="hover:opacity-90" aria-label="Zur Startseite">Sabine Hansen</Link>
        </h1>
        <button
          aria-expanded={open}
          aria-label={open ? "Schließe Navigation" : "Öffne Navigation"}
          className="text-white text-2xl p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Sliding nav when open */}
      <nav ref={navRef} className={`transition-max-h duration-300 overflow-hidden bg-[#af8f5b] ${open ? 'max-h-64' : 'max-h-0'}`} aria-hidden={!open}>
        <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
          <NavLink to="/exhibitions" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'text-[#854686]' : 'text-white')}>
            Ausstellungen
          </NavLink>
          <NavLink to="/about-me" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'text-[#854686]' : 'text-white')}>
            Über mich
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'text-[#854686]' : 'text-white')}>
            Kontakt
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
