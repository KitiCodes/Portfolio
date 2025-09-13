import { StrictMode, useEffect, useState } from "react";
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

// desktop-only routes (mobile variants removed)

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LanguageProvider>
        <TopLanguageBar />
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exhibitions" element={<Exhebitions />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
