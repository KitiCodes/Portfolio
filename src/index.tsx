import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DesktopDark } from "./screens/DesktopDark";
import { AboutMe } from "./screens/aboutMe";
import { Contact } from "./screens/contact";
import { Exhebitions } from "./screens/exhebitions";
import { ScrollToTop } from "./components/ScrollToTop";

// Mobile variants
import DesktopDarkMobile from "./screens/DesktopDark-mobile";
import AboutMeMobile from "./screens/aboutMe-mobile";
import ContactMobile from "./screens/contact-mobile";
import ExhebitionsMobile from "./screens/exhebitions-mobile";

// Simple responsive wrapper used in routes. Chooses mobile when window width <= breakpoint (px).
function Responsive({ desktop, mobile, breakpoint = 768 }: { desktop: JSX.Element; mobile: JSX.Element; breakpoint?: number }) {
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth <= breakpoint : false));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile ? mobile : desktop;
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Responsive desktop={<DesktopDark />} mobile={<DesktopDarkMobile />} />} />
        <Route path="/exhibitions" element={<Responsive desktop={<Exhebitions />} mobile={<ExhebitionsMobile />} />} />
        <Route path="/about-me" element={<Responsive desktop={<AboutMe />} mobile={<AboutMeMobile />} />} />
        <Route path="/contact" element={<Responsive desktop={<Contact />} mobile={<ContactMobile />} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
