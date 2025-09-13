import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { AboutMe } from "./screens/aboutMe";
import { Contact } from "./screens/contact";
import { Exhebitions } from "./screens/exhebitions";
import { PrivacyPolicy } from "./screens/privacy-policy";
import { Imprint } from "./screens/imprint";
import { ScrollToTop } from "./components/ScrollToTop";
import { TopLanguageBar } from "./components/TopLanguageBar";
import { LanguageProvider } from "./lib/LanguageContext";
import { SiteHeader } from "./components/SiteHeader";
import { FooterBar } from "./components/FooterBar";

// desktop-only routes (mobile variants removed)

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LanguageProvider>
  <TopLanguageBar />
  {/* spacer for fixed language bar height */}
  <div className="hidden md:block h-[41px] w-full" aria-hidden="true" />
  <SiteHeader />
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exhibitions" element={<Exhebitions />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
      {/* Global footer: centered on mobile, shifted left on desktop using flex */}
      <div className="w-full py-6">
        <div className="max-w-[1440px] mx-auto flex justify-center md:justify-start">
          <div className="w-full md:w-[430px] px-6 md:px-0 md:ml-5">
            <FooterBar />
          </div>
        </div>
      </div>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
