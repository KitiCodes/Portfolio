import { SiteHeader } from "../components/SiteHeader";
import { ContactSection } from "../components/ContactSection";
import { FooterBar } from "../components/FooterBar";
const Ausstellung3Img = new URL("../assets/Ausstellung-Offenes Atelier.jpg", import.meta.url).href;
const Ausstellung2Img = new URL("../assets/Ausstellung-Giesecke.jpg", import.meta.url).href;
const Ausstellung1Img = new URL("../assets/Ausstellung-Aumann.jpg", import.meta.url).href;
import { Link, NavLink } from "react-router-dom";

export const Exhebitions = (): JSX.Element => (
			<div className="min-h-screen bg-background text-foreground">
				{/* Language bar (top, non-sticky) */}
				<div className="w-full">
					<div className="container mx-auto relative h-7 px-4">
						<div className="absolute top-1/2 -translate-y-1/2 [font-family:'Antonio',Helvetica] text-[16px] font-thin leading-none text-black" style={{ left: '50%', transform: 'translate(-50%, -50%)' }}>
							<a href="#de" className="hover:underline">de</a>
							<span className="px-1">|</span>
							<a href="#en" className="hover:underline">en</a>
						</div>
					</div>
				</div>
				{/* Sticky Navigation Bar */}
				<header className="sticky top-0 z-50 bg-[#af8f5b] shadow">
					<div className="container mx-auto flex h-24 items-center justify-between px-6">
						<h1 className="[font-family:'Antonio',Helvetica] text-white text-5xl md:text-6xl tracking-[-0.02em] leading-none">
							<Link to="/" className="hover:opacity-90" aria-label="Zur Startseite">
								Sabine Hansen
							</Link>
						</h1>
						<nav className="flex items-center gap-[72px] [font-family:'Antonio',Helvetica]">
							<NavLink to="/ausstellungen" className={({ isActive }) => ["text-[16px] font-thin px-0", "hover:text-[#854686] hover:bg-transparent", isActive ? "text-[#854686]" : "text-white"].join(" ")}>Ausstellungen</NavLink>
							<NavLink to="/ueber" className={({ isActive }) => ["text-[16px] font-thin px-0", "hover:text-[#854686] hover:bg-transparent", isActive ? "text-[#854686]" : "text-white"].join(" ")}>Über mich</NavLink>
							<NavLink to="/kontakt" className={({ isActive }) => ["text-[16px] font-thin px-0", "hover:text-[#854686] hover:bg-transparent", isActive ? "text-[#854686]" : "text-white"].join(" ")}>Kontakt</NavLink>
						</nav>
					</div>
				</header>
				{/* Main content */}
				<main className="w-full">
					<div className="w-[1440px] h-[2118px] relative bg-stone-300 overflow-hidden" style={{ marginTop: -124 }}>
						<div className="w-80 h-24 left-[968px] top-[1217px] absolute justify-start">
							<span className="text-black text-base font-normal font-['Antonio'] leading-tight">Ausstellung<br /></span>
							<span className="text-black text-base font-thin font-['Antonio'] leading-tight">seit Augsut 2024<br />Aumann Authentics, Kiel<br /></span>
						</div>
						<div className="w-80 h-24 left-[368px] top-[709px] absolute text-right justify-start">
							<span className="text-black text-base font-normal font-['Antonio'] leading-tight">Ausstellung “Licht und Kunst - Kunst und Licht”<br /></span>
							<span className="text-black text-base font-thin font-['Antonio'] leading-tight">seit September 2024<br />Giesecke Licht + Design, Schwentinental<br /></span>
						</div>
						<div className="w-80 h-24 left-[701px] top-[238px] absolute justify-start">
							<span className="text-black text-base font-normal font-['Antonio'] leading-tight">Offenes Atelier<br /></span>
							<span className="text-black text-base font-thin font-['Antonio'] leading-tight">6. und 7. Dezember 2024<br />Giesecke Licht + Design, Schwentinental<br /></span>
						</div>
						<ContactSection
							className="absolute"
							style={{ width: 560, top: 1660, left: 440 }}
						/>
						<img 
							className="w-[579px] h-96 left-[18px] top-[203px] absolute object-cover" 
							src={Ausstellung3Img}
							loading="lazy"
						/>
						<img className="w-[650px] h-96 left-[736px] top-[492px] absolute object-cover" src={Ausstellung2Img} loading="lazy" />
						<img className="w-[745px] h-[527px] left-[123px] top-[953px] absolute object-cover" src={Ausstellung1Img} loading="lazy" />
						<FooterBar className="absolute" style={{ width: 430, top: 2057, left: 20 }} />
					</div>
				</main>
			</div>
);