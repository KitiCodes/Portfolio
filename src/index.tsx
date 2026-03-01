import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { Galerie2020 } from "./screens/Galerie-2020";
import { Galerie2021 } from "./screens/Galerie-2021";
import { Galerie2022 } from "./screens/Galerie-2022";
//import { Galerie2023 } from "./screens/Galerie-2023";
import { Galerie2024 } from "./screens/Galerie-2024";
import { Galerie2025 } from "./screens/Galerie-2025";
import { Galerie2026 } from "./screens/Galerie-2026";
import { AboutMe } from "./screens/aboutMe";
import { Contact } from "./screens/contact";
import { Exhebitions } from "./screens/exhebitions";
import { PrivacyPolicy } from "./screens/privacy-policy";
import { Imprint } from "./screens/imprint";
import { ScrollToTop } from "./components/ScrollToTop";
import { LanguageProvider } from "./lib/LanguageContext";
import { SiteHeader } from "./components/SiteHeader";
import { FooterBar } from "./components/FooterBar";
import { Updates } from "./screens/updates.tsx";
import { UpdatesCalendar2026 } from "./screens/calendar-2026.tsx";

// desktop-only routes (mobile variants removed)

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LanguageProvider>
  <SiteHeader />
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery-2020" element={<Galerie2020 />} />
        <Route path="/gallery-2021" element={<Galerie2021 />} />
        <Route path="/gallery-2022" element={<Galerie2022 />} />
        <Route path="/gallery-2024" element={<Galerie2024 />} />
        <Route path="/gallery-2025" element={<Galerie2025 />} />
        <Route path="/gallery-2026" element={<Galerie2026 />} />
        <Route path="/exhibitions" element={<Exhebitions />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/exhibitions" element={<Exhebitions />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/updates/calendar-2026" element={<UpdatesCalendar2026 />} />

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
