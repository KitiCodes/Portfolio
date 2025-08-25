import { SiteHeader } from "../components/SiteHeader";
import { Link, NavLink } from "react-router-dom";
import { ContactSection } from "../components/ContactSection";
import { FooterBar } from "../components/FooterBar";
import UMtopImg from "../assets/UM0.jpeg";
import UMb1Img from "../assets/UM1.jpg";
import UMb2Img from "../assets/UM2.jpg";
import UMb3Img from "../assets/UM3.jpg";
import UMb4Img from "../assets/UM4.jpg";
import UMb5Img from "../assets/UM5.jpg";
import UMb6Img from "../assets/UM6.jpg";
import UMb7Img from "../assets/UM7.jpg";
import UMb8Img from "../assets/UM8.jpg";

export const AboutMe = (): JSX.Element => (
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
					<div className="w-[1440px] h-[2822px] relative bg-stone-300 overflow-hidden" style={{ marginTop: -124 }}>
						<FooterBar className="absolute" style={{ width: 430, top: 2767, left: 20 }} />
						<img className="w-96 h-[524px] left-[56px] top-[200px] absolute object-cover" src={UMtopImg} alt="Über mich – Portrait" loading="lazy" />
						<div className="w-[806px] h-72 left-[523px] top-[409px] absolute text-center justify-start text-black text-4xl font-thin font-['Antonio'] leading-[54px]">
							Ich bin Sabine Hansen – geboren und aufgewachsen im hohen Norden, zwischen Nord- und Ostsee. Heute lebe ich in Schwentinental, in der Nähe von Kiel.
							<br />
							<br />
							Kreativität und die Liebe zu Kunst und Literatur begleiten mich schon mein ganzes Leben.
						</div>
						<div className="w-[1127px] h-[810px] left-[157px] top-[787px] absolute text-center justify-start text-black text-4xl font-thin font-['Antonio'] leading-[54px]">
							2019 habe ich meine Leidenschaft für die Acrylmalerei entdeckt. Seither bilde ich mich kontinuierlich weiter, unter anderem bei Workshops, Atelierkursen und Malreisen in Schleswig-Holstein und Hamburg.
							<br />
							<br />
							Mein künstlerischer Fokus liegt heute auf der abstrakten Acrylmalerei. Ich experimentiere gern mit verschiedenen Materialien und Techniken – immer auf der Suche nach neuen Ausdrucksformen und spannenden Oberflächen.
							<br />
							<br />
							Malen ist für mich in erster Linie Ausdruck und Verarbeitung von Emotionen, Erinnerungen, Bildern oder Ereignissen. Meine Inspiration finde ich in der Natur, in der Kunst und in meinem eigenen Innenleben.
							<br />
							<br />
							Kraftvolle, aber auch zarte Farben finden sich ebenso wie feine und grobe Strukturen wieder. Ich arbeite meist auf großen Formaten – sie geben mir die Freiheit, mit großer Geste und vollem Einsatz zu arbeiten.
						</div>
						<ContactSection
							className="absolute"
							style={{ width: 560, top: 2225, left: 440 }}
						/>
						{/* Bottom image strip with equal spacing */}
						<div className="absolute left-[28px] top-[1800px] w-[1384px]">
							<div className="flex items-end justify-between gap-6">
								<img className="w-36 h-56 object-cover" src={UMb1Img} loading="lazy" />
								<img className="w-36 h-56 object-cover" src={UMb2Img} loading="lazy" />
								<img className="w-36 h-56 object-cover" src={UMb3Img} loading="lazy" />
								<img className="w-80 h-56 object-cover" src={UMb4Img} loading="lazy" />
								<img className="w-36 h-56 object-cover" src={UMb5Img} loading="lazy" />
								<img className="w-36 h-56 object-cover" src={UMb6Img} loading="lazy" />
								<img className="w-36 h-56 object-cover" src={UMb7Img} loading="lazy" />
								<img className="w-36 h-56 object-cover" src={UMb8Img} loading="lazy" />
							</div>
						</div>
					</div>
				</main>
			</div>
);