import { SiteHeader } from "../components/SiteHeader";
import { FooterBar } from "../components/FooterBar";
import { ContactSection } from "../components/ContactSection";
import kontaktImg from "../assets/Kontakt.jpg"; 
import { Link, NavLink } from "react-router-dom";

export const Contact = (): JSX.Element => (
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
			<div className="w-[1440px] h-[1458px] relative bg-stone-300 overflow-hidden" style={{ marginTop: -124 }}>
				<div className="w-[508px] h-96 left-[149px] top-[269px] absolute text-center justify-start">
					<span className="text-black text-4xl font-normal font-['Antonio'] leading-[60px]">
						Bei Interesse an meinen Bildern freue ich mich über eine E-Mail:
					</span>
				</div>
				{/* Use shared ContactSection for email + icon centered under the text */}
				<ContactSection
					className="absolute"
					style={{ width: 508, top: 550, left: 149 }}
					showName={false}
					showLocation={false}
				/>
				<img
					className="w-[549px] h-[1044px] left-[855px] top-[184px] absolute object-cover"
					src={kontaktImg}
					alt="Kontakt Vorschau"
					loading="lazy"
				/>
				<FooterBar className="absolute" style={{ width: 430, top: 1401, left: 20 }} />
			</div>
		</main>
	</div>
);