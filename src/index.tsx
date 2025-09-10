import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DesktopDark } from "./screens/DesktopDark";
import { AboutMe } from "./screens/aboutMe";
import { Contact } from "./screens/contact";
import { Exhebitions } from "./screens/exhebitions";
import { ScrollToTop } from "./components/ScrollToTop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DesktopDark />} />
        <Route path="/ausstellungen" element={<Exhebitions />} />
        <Route path="/ueber" element={<AboutMe />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
