import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopDark } from "./screens/DesktopDark/DesktopDark";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DesktopDark />
  </StrictMode>,
);
