//
import { ContactSection } from "../components/ContactSection";
import { useEffect, useState, useRef } from "react";
import ContactSectionMobile from "../components/ContactSectionMobile";
import UMtopImg from "../assets/optimized/sm/UM0.webp";
import UMb1Img from "../assets/optimized/sm/UM1.webp";
import UMb2Img from "../assets/optimized/sm/UM2.webp";
import UMb3Img from "../assets/optimized/sm/UM3.webp";
import UMb4Img from "../assets/optimized/sm/UM4.webp";
import UMb5Img from "../assets/optimized/sm/UM5.webp";
import UMb6Img from "../assets/optimized/sm/UM6.webp";
import UMb7Img from "../assets/optimized/sm/UM7.webp";
import UMb8Img from "../assets/optimized/sm/UM8.webp";

export function AboutMe(): JSX.Element {
	const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth <= 768 : false));

	useEffect(() => {
		if (typeof window === "undefined") return;
		const onResize = () => setIsMobile(window.innerWidth <= 768);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	if (isMobile) {
		// Inline mobile markup previously in aboutMe-mobile.tsx
		const stackingRef = useRef<HTMLDivElement | null>(null);
		const [stackHeight, setStackHeight] = useState<number>(1581);

		useEffect(() => {
			const el = stackingRef.current;
			if (!el) return;
			const update = () => {
				const parentRect = el.getBoundingClientRect();
				const descendants = Array.from(el.querySelectorAll("*")) as HTMLElement[];
				let max = 0;
				descendants.forEach((ch) => {
					const rect = ch.getBoundingClientRect();
					const bottom = rect.bottom - parentRect.top;
					if (bottom > max) max = bottom;
				});
				const value = Math.max(600, Math.ceil(max + 24));
				setStackHeight(value);
			};
			const ro = new (window as any).ResizeObserver(update);
			ro.observe(el);
			const imgs = el.querySelectorAll("img");
			imgs.forEach((i) => i.addEventListener("load", update));
			window.addEventListener("resize", update);
			setTimeout(update, 50);
			return () => {
				ro.disconnect();
				imgs.forEach((i) => i.removeEventListener("load", update));
				window.removeEventListener("resize", update);
			};
		}, []);

		const galleryImages = [
			{ src: UMb1Img, alt: "Img", className: "w-[82px] h-[123px] top-[885px] left-3.5 object-cover" },
			{ src: UMb2Img, alt: "Img", className: "w-[184px] h-[123px] top-[885px] left-[105px] object-cover" },
			{ src: UMb3Img, alt: "Img", className: "w-[78px] h-[123px] top-[885px] left-[298px] object-cover" },
			{ src: UMb4Img, alt: "Img", className: "w-[84px] h-[123px] top-[1020px] left-3.5 object-cover" },
			{ src: UMb5Img, alt: "Img", className: "w-[82px] h-[123px] top-[1020px] left-[110px] object-cover" },
			{ src: UMb6Img, alt: "Img", className: "w-[82px] h-[123px] top-[1020px] left-[203px] object-cover" },
			{ src: UMb7Img, alt: "Img", className: "w-20 h-[123px] top-[1020px] left-[296px] object-cover" },
		];

		return (
			<div className="bg-[#d4cdc4] grid justify-items-center [align-items:start] w-screen">
				{/* header is rendered globally */}

				<div className="bg-[#d4cdc4] w-[390px] relative">
					<div ref={stackingRef} className="relative w-full pt-0" style={{ minHeight: stackHeight }}>
						<img className="absolute w-[199px] h-[257px] top-[83px] left-2.5" alt="Img" src={UMtopImg} />

						<div className="absolute w-[162px] top-[78px] left-[218px] [font-family:'Antonio',Helvetica] font-thin text-black text-base text-left tracking-[0] leading-6">
							Ich bin Sabine Hansen  geboren und aufgewachsen im hohen Norden,
							zwischen Nord- und Ostsee. Heute lebe ich in Schwentinental, in der
							Nhe von Kiel. <br />
							<br />
							Kreativitt und die Liebe zu Kunst und Literatur begleiten mich schon
							mein ganzes Leben.
						</div>

						<div className="absolute w-[333px] top-[369px] left-[11px] [font-family:'Antonio',Helvetica] font-thin text-black text-base text-left tracking-[0] leading-6">
							Nach vielen Jahren im sozialen Bereich habe ich 2019 meine
							Leidenschaft fr die Acrylmalerei entdeckt. Seither bilde ich mich
							kontinuierlich weiter, unter anderem an Malschulen in
							Schleswig-Holstein und Hamburg.
							<br />
							<br />
							Mein Schwerpunkt liegt heute auf der abstrakten Acrylmalerei. Ich
							experimentiere gern mit verschiedenen Materialien und Techniken 
							immer auf der Suche nach neuen Ausdrucksformen und spannenden
							Oberflchen.
							<br />
							<br />
							Malen ist fr mich in erster Linie Ausdruck und Verarbeitung von
							Emotionen, Erinnerungen, Bildern oder Ereignissen. Meine Inspiration
							finde ich in der Natur, in der Kunst und in meinem eigenen Innenleben.
							<br />
							<br />
							Kraftvolle, aber auch zarte Farben finden sich ebenso wie feine und
							grobe Strukturen wieder. Ich arbeite meist auf groen Formaten  sie
							geben mir the Freiheit, mit groer Geste und vollem Einsatz zu
							arbeiten.
						</div>

						{galleryImages.map((image, index) => (
							<img key={`gallery-${index}`} className={`absolute ${image.className}`} alt={image.alt} src={image.src} />
						))}
					</div>

					<div className="w-full flex flex-col items-start">
						<ContactSectionMobile className="mt-6 w-full" />
					</div>
				</div>
			</div>
		);
	}

	// Desktop markup preserved below
	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col">
			{/* header is rendered globally */}
			{/* Main content */}
			<main className="flex-1 w-full">
				<div className="w-full max-w-[1440px] relative bg-background overflow-hidden mx-auto" style={{ marginTop: 0, paddingTop: 0 }}>
					<img className="w-96 h-[524px] object-cover lg:absolute lg:left-[56px] lg:top-[200px] mx-auto lg:mx-0" src={UMtopImg} alt="Über mich – Portrait" loading="lazy" />
					<div className="w-full lg:w-[806px] h-72 lg:left-[523px] lg:top-[409px] lg:absolute text-center justify-start text-black text-4xl font-thin font-['Antonio'] leading-[54px] mx-auto lg:mx-0">
						Ich bin Sabine Hansen – geboren und aufgewachsen im hohen Norden, zwischen Nord- und Ostsee. Heute lebe ich in Schwentinental, in der Nähe von Kiel.
						<br />
						<br />
						Kreativität und die Liebe zu Kunst und Literatur begleiten mich schon mein ganzes Leben.
					</div>
					<div className="w-full lg:w-[1127px] h-[810px] lg:left-[157px] lg:top-[787px] lg:absolute text-center justify-start text-black text-4xl font-thin font-['Antonio'] leading-[54px] mx-auto lg:mx-0">
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
					<ContactSection className="lg:absolute relative lg:w-[560px] w-full lg:top-[2225px] lg:left-[440px] mx-auto lg:mx-0" />
					{/* Bottom image strip with equal spacing */}
					<div className="w-full lg:absolute lg:left-[28px] lg:top-[1800px] lg:w-[1384px] px-4 lg:px-0">
						<div className="flex flex-wrap items-end justify-between gap-6">
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
}