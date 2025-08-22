import React from "react";
import { Button } from "../../components/ui/button";

// Import images so Vite bundles them correctly
import imgAufbruchI from "../../assets/AufbruchI-web.jpg";
import imgAufbruchII from "../../assets/AufbruchII-web.jpg";
import imgEismeer from "../../assets/Eismeer-web.jpg";
import imgFruehling from "../../assets/Frühling-web.jpg";
import imgKuechenphilosophie from "../../assets/Küchenphilosophie-web.jpg";
import imgOhneTitelA from "../../assets/ohneTitel-a-web.jpg";
import imgOhneTitel1 from "../../assets/ohneTitel1-web.jpg";
import imgOhneTitelB from "../../assets/ohneTitelb-web.jpg";
import imgPower from "../../assets/power-web.jpg";
import imgSonnenblumen from "../../assets/Sonnenblumen-web.jpg";
import imgSpuren from "../../assets/Spuren-web.jpg";
import imgTanzendeA from "../../assets/Tanzende-a-web.jpg";
import imgTanzendeB from "../../assets/Tanzende-b-web.jpg";
import imgZaghaft from "../../assets/Zaghaft-beginnt-etwas-Neues-web.jpg";

type Artwork = {
  id: number;
  src: string;
  alt: string;
  className: string;
  title: string;
  year: string;
  dimensions: string;
  textPosition: string;
  textAlign?: string;
};

const navigationItems = [
  { label: "Kontakt", href: "#kontakt" },
  { label: "Über mich", href: "#ueber" },
  { label: "Impressum", href: "#impressum" },
];

const footerLinks = [
  { label: "Impressum", href: "#impressum" },
  { label: "Datenschutz", href: "#datenschutz" },
];

export const DesktopDark = (): JSX.Element => {
  const artworks: Artwork[] = [
    {
      id: 1,
      src: imgAufbruchI,
      alt: "Aufbruch I",
      className:
        "absolute w-[706px] h-[600px] top-[232px] left-[31px] object-cover",
      title: "Aufbruch I",
      year: "2022",
      dimensions: "70 x 60 cm",
      textPosition: "absolute w-[196px] top-[316px] left-[812px]",
    },
    {
      id: 2,
      src: imgFruehling,
      alt: "Frühling",
      className:
        "absolute w-[491px] h-[486px] top-[647px] left-[918px] object-cover",
      title: "Frühling",
      year: "2020",
      dimensions: "70 x 70 cm",
      textPosition: "absolute w-[196px] top-[965px] left-[704px]",
      textAlign: "text-right",
    },
    {
      id: 3,
      src: imgEismeer,
      alt: "Eismeer",
      className:
        "absolute w-[1202px] h-[600px] top-[1166px] left-[68px] object-cover",
      title: "Eismeer",
      year: "2020",
      dimensions: "80 x 40 cm",
      textPosition: "absolute w-[196px] top-[1409px] left-[1291px]",
    },
    {
      id: 4,
      src: imgZaghaft,
      alt: "Zaghaft beginnt etwas Neues",
      className:
        "absolute w-[511px] h-[499px] top-[1839px] left-[13px] object-cover",
      title: "Zaghaft beginnt etwas Neues",
      year: "2021",
      dimensions: "70 x 70 cm",
      textPosition: "absolute w-[196px] top-[1918px] left-[566px]",
    },
    {
      id: 5,
      src: imgPower,
      alt: "power",
      className:
        "absolute w-[566px] h-[600px] top-[2010px] left-[843px] object-cover",
      title: "power",
      year: "2021",
      dimensions: "70 x 70 cm",
      textPosition: "absolute w-[196px] top-[2435px] left-[639px]",
      textAlign: "text-right",
    },
    {
      id: 6,
      src: imgTanzendeA,
      alt: "Tanzende",
      className:
        "absolute w-[297px] h-[600px] top-[2610px] left-[120px] object-cover",
      title: "Tanzende",
      year: "2024",
      dimensions: "je 80 x 40 cm",
      textPosition: "absolute w-[196px] top-[2840px] left-[861px]",
    },
    {
      id: 7,
      src: imgTanzendeB,
      alt: "Tanzende b",
      className:
        "absolute w-[304px] h-[600px] top-[2610px] left-[458px] object-cover",
      title: "",
      year: "",
      dimensions: "",
      textPosition: "",
    },
    {
      id: 8,
      src: imgSonnenblumen,
      alt: "Sonnenblumen",
      className:
        "absolute w-[797px] h-[524px] top-[3283px] left-[608px] object-cover",
      title: "Sonnenblumen",
      year: "2021",
      dimensions: "100 x 80 cm",
      textPosition: "absolute w-[196px] top-[3420px] left-[350px]",
      textAlign: "text-right",
    },
    {
      id: 9,
      src: imgKuechenphilosophie,
      alt: "Küchenphilosophie",
      className:
        "absolute w-[497px] h-[494px] top-[3646px] left-[68px] object-cover",
      title: "Küchenphilosophie",
      year: "2022",
      dimensions: "100 x 100 cm",
      textPosition: "absolute w-[196px] top-[3942px] left-[575px]",
    },
    {
      id: 10,
      src: imgOhneTitelA,
      alt: "ohne Titel",
      className:
        "absolute w-[301px] h-[600px] top-[4170px] left-[1089px] object-cover",
      title: "ohne Titel",
      year: "2024",
      dimensions: "je 80 x 40 cm",
      textPosition: "absolute w-[196px] top-[4299px] left-[467px]",
      textAlign: "text-right",
    },
    {
      id: 11,
      src: imgOhneTitelB,
      alt: "ohne Titel b",
      className:
        "absolute w-[299px] h-[600px] top-[4170px] left-[749px] object-cover",
      title: "",
      year: "",
      dimensions: "",
      textPosition: "",
    },
    {
      id: 12,
      src: imgAufbruchII,
      alt: "Aufbruch II",
      className:
        "absolute w-[781px] h-[782px] top-[4800px] left-[26px] object-cover",
      title: "Aufbruch II",
      year: "2024",
      dimensions: "100 x 100 cm",
      textPosition: "absolute w-[196px] top-[5275px] left-[965px]",
    },
    {
      id: 13,
      src: imgOhneTitel1,
      alt: "ohne Titel 1",
      className:
        "absolute w-[904px] h-[600px] top-[5612px] left-[524px] object-cover",
      title: "ohne Titel",
      year: "2025",
      dimensions: "120 x 100 cm",
      textPosition: "absolute w-[196px] top-[6016px] left-[302px]",
      textAlign: "text-right",
    },
    {
      id: 14,
      src: imgSpuren,
      alt: "Spuren",
      className:
        "absolute w-[776px] h-[781px] top-[6300px] left-[333px] object-cover",
      title: "Spuren",
      year: "2022",
      dimensions: "100 x 100 cm",
      textPosition: "absolute w-[196px] top-[6415px] left-[1173px]",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="w-full h-28 bg-[#af8f5b] relative">
        {navigationItems.map((item, index) => (
          <Button
            key={item.label}
            asChild
            variant="ghost"
            className={`absolute h-[21px] top-[45px] ${index === 0 ? "left-[1034px]" : index === 1 ? "left-[1193px]" : "left-[1329px]"} [font-family:'Antonio',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[20.8px] whitespace-nowrap bg-transparent hover:bg-transparent h-auto p-0`}
          >
            <a href={item.href}>{item.label}</a>
          </Button>
        ))}

        <h1 className="absolute w-[345px] top-4 left-14 [font-family:'Antonio',Helvetica] font-normal text-[#fffdfd] text-[64px] tracking-[-1.28px] leading-[76.8px]">
          Sabine Hansen
        </h1>
      </header>

      {/* Canvas container approximating the original absolute layout height */}
      <main className="relative w-[1440px] mx-auto" style={{ height: 7700 }}>
        {artworks.map((artwork) => (
          <React.Fragment key={artwork.id}>
            <img src={artwork.src} alt={artwork.alt} className={artwork.className} />
            {artwork.title && (
              <div className={artwork.textPosition}>
                <span className={`${artwork.textAlign ?? ""} [font-family:'Antonio',Helvetica] font-normal text-black text-base`}> 
                  {artwork.title}
                  <br />
                  {artwork.year}
                  <br />
                  {artwork.dimensions}
                </span>
              </div>
            )}
          </React.Fragment>
        ))}

        {/* Contact section */}
        <section id="kontakt" className="absolute w-[560px] h-[211px] top-[7205px] left-[440px]">
          <div className="flex flex-col items-start gap-2.5 absolute w-[560px] left-0">
            <div className="relative self-stretch [font-family:'Antonio',Helvetica] font-normal text-black text-5xl text-center tracking-[-0.96px] leading-[57.6px]">
              <span className="tracking-[-0.46px]">Sabine Hansen</span>
            </div>
            <div className="relative self-stretch [font-family:'Antonio',Helvetica] font-normal text-black text-4xl text-center tracking-[-0.26px] leading-[43.2px]">
              Schwentinental, Deutschland
            </div>
            <div className="relative self-stretch [font-family:'Antonio',Helvetica] font-normal text-black text-4xl text-center tracking-[-0.26px] leading-[43.2px]">
              <a href="mailto:kontakt@sabinehansen.art" className="underline">
                kontakt@sabinehansen.art
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="absolute w-[430px] h-5 top-[7653px] left-5 flex items-center gap-6 text-base text-black [font-family:'Antonio',Helvetica]">
          <span>Sabine Hansen</span>
          <span>© 2025</span>
          <a href={footerLinks[0].href}>{footerLinks[0].label}</a>
          <a href={footerLinks[1].href}>{footerLinks[1].label}</a>
        </footer>
      </main>
    </div>
  );
};
