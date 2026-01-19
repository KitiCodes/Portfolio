import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      filter: (file) => {
        return file.includes("calendar_big");
      },
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      webp: {
        quality: 75,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  define: {
    "import.meta.env.VITE_MAPBOX_TOKEN": JSON.stringify(process.env.VITE_MAPBOX_TOKEN),
  },
});
