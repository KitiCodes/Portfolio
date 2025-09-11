import { Card, CardContent } from "../components/ui/card";
import { FooterBarMobile } from "../components/FooterBarMobile";
import { MobileNavbar } from "../components/MobileNavbar";

// Optimized WebP imports (small variants for mobile)
import smAufbruchI from "../assets/optimized/sm/AufbruchI-web.webp";
import smAufbruchII from "../assets/optimized/sm/AufbruchII-web.webp";
import smEismeer from "../assets/optimized/sm/Eismeer-web.webp";
import smFruehling from "../assets/optimized/sm/Fruehling-web.webp";
import smKuechenphilosophie from "../assets/optimized/sm/Küchenphilosophie-web.webp";
import smOhneTitelA from "../assets/optimized/sm/ohneTitel-a-web.webp";
import smOhneTitel1 from "../assets/optimized/sm/ohneTitel1-web.webp";
import smOhneTitelB from "../assets/optimized/sm/ohneTitelb-web.webp";
import smPower from "../assets/optimized/sm/power-web.webp";
import smSonnenblumen from "../assets/optimized/sm/Sonnenblumen-web.webp";
import smSpuren from "../assets/optimized/sm/Spuren-web.webp";
import smTanzendeA from "../assets/optimized/sm/Tanzende-a-web.webp";
import smTanzendeB from "../assets/optimized/sm/Tanzende-b-web.webp";
import smZaghaft from "../assets/optimized/sm/Zaghaft-beginnt-etwas-Neues-web.webp";

const artworks = [
	{
		id: 1,
		image: smAufbruchI,
		title: "Aufbruch I",
		year: "2022",
		dimensions: "70 x 60 cm",
		imageClasses:
			"absolute w-[278px] h-[236px] top-[99px] left-[13px] object-cover",
		textClasses:
			"absolute top-32 left-[311px] [font-family:'Antonio',Helvetica] font-normal text-black text-base tracking-[-0.32px] leading-[19.2px]",
	},
	{
		id: 2,
		image: smFruehling,
		title: "Frühling",
		year: "2020",
		dimensions: "70 x 70 cm",
		imageClasses:
			"absolute w-[247px] h-[244px] top-[353px] left-[137px] object-cover",
		textClasses:
			"absolute w-14 top-[497px] left-[68px] [font-family:'Antonio',Helvetica] font-normal text-black text-base text-right tracking-[-0.32px] leading-[19.2px]",
	},
	{
		id: 3,
		image: smEismeer,
		title: "Eismeer",
		year: "2020",
		dimensions: "80 x 40 cm",
		imageClasses:
			"absolute w-[315px] h-[157px] top-[609px] left-0 object-cover",
		textClasses:
			"absolute w-[108px] top-[654px] left-[324px] [font-family:'Antonio',Helvetica] font-normal text-black text-base tracking-[-0.32px] leading-[19.2px]",
	},
	{
		id: 4,
		image: smZaghaft,
		title: "Zaghaft beginnt etwas Neues",
		year: "2021",
		dimensions: "70 x 70 cm",
		imageClasses:
			"absolute w-[313px] h-[306px] top-[801px] left-[11px] object-cover",
		textClasses:
			"absolute w-[67px] top-[986px] left-[328px] [font-family:'Antonio',Helvetica] font-normal text-black text-base tracking-[-0.32px] leading-[19.2px]",
	},
	{
		id: 5,
		image: smPower,
		title: "power",
		year: "2021",
		dimensions: "70 x 70 cm",
		imageClasses:
			"absolute w-[302px] h-80 top-[1127px] left-[82px] object-cover",
		textClasses:
			"absolute w-14 top-[1210px] left-[11px] [font-family:'Antonio',Helvetica] font-normal text-black text-base text-right tracking-[-0.32px] leading-[19.2px]",
	},
	{
		id: 6,
		image: smTanzendeA,
		title: "Tanzende",
		year: "2024",
		dimensions: "je 80 x 40 cm",
		imageClasses:
			"absolute w-[135px] h-[272px] top-[1473px] left-[11px] object-cover",
		textClasses:
			"absolute w-[69px] top-[1648px] left-[301px] [font-family:'Antonio',Helvetica] font-normal text-black text-base tracking-[-0.32px] leading-[19.2px]",
	},
	{
		id: 7,
		image: smTanzendeB,
		title: "",
		year: "",
		dimensions: "",
		imageClasses:
			"absolute w-[138px] h-[272px] top-[1473px] left-[154px] object-cover",
		textClasses: "",
	},
	{
		id: 8,
		image: smSonnenblumen,
		title: "Sonnenblumen",
		year: "2021",
		dimensions: "100 x 80 cm",
		imageClasses:
			"absolute w-[290px] h-[194px] top-[1753px] left-[100px] object-cover",
		textClasses:
			"absolute w-[85px] top-[1780px] left-[11px] [font-family:'Antonio',Helvetica] font-normal text-black text-base text-right tracking-[-0.32px] leading-[19.2px]",
	},
	{
		id: 9,
		image: smKuechenphilosophie,
		title: "Küchenphilosophie",
		year: "2022",
		dimensions: "100 x 100 cm",
		imageClasses:
			"absolute w-[254px] h-[252px] top-[1961px] left-[5px] object-cover",
		textClasses:
			"absolute w-[108px] top-[2095px] left-[271px] [font-family:'Antonio',Helvetica] font-normal text-black text-base tracking-[-0.32px] leading-[19.2px]",
	},
	{
		id: 10,
		image: smOhneTitelA,
		title: "ohne Titel",
		year: "2024",
		dimensions: "je 80 x 40 cm",
		imageClasses:
			"absolute w-[131px] h-[261px] top-[2243px] left-[254px] object-cover",
		textClasses:
			"absolute top-[2379px] left-[19px] [font-family:'Antonio',Helvetica] font-normal text-black text-base text-right tracking-[-0.32px] leading-[19.2px]",
	},
	{
		id: 11,
		image: smOhneTitelB,
		title: "",
		year: "",
		dimensions: "",
		imageClasses:
			"absolute w-[130px] h-[261px] top-[2243px] left-[121px] object-cover",
		textClasses: "",
	},
	{
		id: 12,
		image: smAufbruchII,
		title: "Aufbruch II",
		year: "2024",
		dimensions: "100 x 100 cm",
		imageClasses:
			"absolute w-[276px] h-[276px] top-[2530px] left-0 object-cover",
		textClasses:
			"absolute top-[2617px] left-[295px] [font-family:'Antonio',Helvetica] font-normal text-black text-base tracking-[-0.32px] leading-[19.2px]",
	},
	{
		id: 13,
		image: smOhneTitel1,
		title: "ohne Titel",
		year: "2025",
		dimensions: "120 x 100 cm",
		imageClasses:
			"absolute w-[286px] h-[190px] top-[2814px] left-[88px] object-cover",
		textClasses:
			"absolute w-[69px] top-[2832px] left-[11px] [font-family:'Antonio',Helvetica] font-normal text-black text-base text-right tracking-[-0.32px] leading-[19.2px]",
	},
	{
		id: 14,
		image: smSpuren,
		title: "Spuren",
		year: "2022",
		dimensions: "100 x 100 cm",
		imageClasses:
			"absolute w-[281px] h-[283px] top-[3034px] left-[11px] object-cover",
		textClasses:
			"absolute w-[69px] top-[3167px] left-[306px] [font-family:'Antonio',Helvetica] font-normal text-black text-base tracking-[-0.32px] leading-[19.2px]",
	},
];

export const DesktopDarkMobile = (): JSX.Element => {
	return (
		<div className="bg-[#d3ccc3] grid justify-items-center [align-items:start] w-screen">
			<div className="bg-[#d3ccc3] overflow-hidden w-[390px] h-[3790px] relative">
				{artworks.map((artwork) => (
					<div key={artwork.id}>
						<img
							className={artwork.imageClasses}
							alt="Element web"
							src={artwork.image}
						/>
						{artwork.title && (
							<div className={artwork.textClasses}>
								<span className="tracking-[-0.05px]">
									{artwork.title}
									<br />
								</span>
								<span className="font-thin tracking-[-0.05px]">
									{artwork.year}
									<br />
									{artwork.dimensions}
									<br />
								</span>
							</div>
						)}
					</div>
				))}

				<Card className="absolute w-[390px] h-[313px] top-[3442px] left-0 bg-transparent border-none shadow-none">
					<CardContent className="p-0">
						<div className="relative h-[313px]">
							<div className="absolute w-[390px] h-[313px] top-0 left-0">
								<div className="flex flex-col items-start gap-2.5 relative w-[245px] h-[121px] -top-px left-[73px]">
									<div className="relative self-stretch [font-family:'Antonio',Helvetica] font-normal text-black text-4xl text-center tracking-[-0.72px] leading-[43.2px]">
										<span className="tracking-[-0.26px]">
											Sabine Hansen
											<br />
										</span>
									</div>

									<div className="relative self-stretch [font-family:'Antonio',Helvetica] font-normal text-black text-4xl text-center tracking-[-0.72px] leading-[43.2px]">
										<span className="text-2xl tracking-[-0.12px] leading-[28.8px]">
											Schwentinental, Deutschland
											<br />
										</span>
									</div>

									<div className="relative self-stretch [font-family:'Antonio',Helvetica] font-normal text-black text-4xl text-center tracking-[-0.72px] leading-[43.2px]">
										<a
											href="mailto:kontakt@sabinehansen.art"
											rel="noopener noreferrer"
											target="_blank"
										>
											<span className="text-2xl tracking-[-0.12px] leading-[28.8px] underline">
												kontakt@sabinehansen.art
											</span>
										</a>
									</div>
								</div>
							</div>

							<img
								className="absolute w-[46px] h-[53px] top-[166px] left-[172px]"
								alt="Instagram"
								src="/instagram.png"
							/>
						</div>
					</CardContent>
				</Card>

				{/* Use unified MobileNavbar component */}
				<MobileNavbar />

				{/* Use FooterBarMobile component with mobile-appropriate styling */}
				<FooterBarMobile className="absolute top-[3763px] left-3" />
			</div>
		</div>
	);
};

export default DesktopDarkMobile;
