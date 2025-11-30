import { ContactSection } from "../components/ContactSection";
import kontaktImgSm from "../assets/optimized/sm/Kontakt.webp";
import kontaktImgLg from "../assets/optimized/lg/Kontakt.webp";
import { useEffect, useState, useRef } from "react";
import ContactSectionMobile from "../components/ContactSectionMobile";

export function Contact(): JSX.Element {
	const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth <= 768 : false));

	useEffect(() => {
		if (typeof window === "undefined") return;
		const onResize = () => setIsMobile(window.innerWidth <= 768);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	if (isMobile) {
		const stackingRef = useRef<HTMLDivElement | null>(null);
		const [stackHeight, setStackHeight] = useState<number>(546);

		useEffect(() => {
			const el = stackingRef.current;
			if (!el) return;
			const update = () => {
				const parentRect = el.getBoundingClientRect();
				const descendants = Array.from(el.querySelectorAll('*')) as HTMLElement[];
				let max = 0;
				descendants.forEach((ch) => {
					const rect = ch.getBoundingClientRect();
					const bottom = rect.bottom - parentRect.top;
					if (bottom > max) max = bottom;
				});
				const value = Math.max(300, Math.ceil(max + 24));
				setStackHeight(value);
			};
			const ro = new (window as any).ResizeObserver(update);
			ro.observe(el);
			const imgs = el.querySelectorAll('img');
			imgs.forEach((i) => i.addEventListener('load', update));
			window.addEventListener('resize', update);
			setTimeout(update, 50);
			return () => {
				ro.disconnect();
				imgs.forEach((i) => i.removeEventListener('load', update));
				window.removeEventListener('resize', update);
			};
		}, []);

		return (
			<div className="bg-[#d4cdc4] grid justify-items-center [align-items:start] w-screen min-h-screen pt-5">
				{/* header is rendered globally */}
				<div className="bg-[#d4cdc4] w-[390px] relative flex flex-col">
					{/* Top spacer to push content down from header */}
					<div className="h-16"></div>

					{/* Main content area using flex layout */}
					<div ref={stackingRef} className="flex flex-col flex-1" style={{ minHeight: stackHeight }}>
						{/* Horizontal layout for text and image */}
						<div className="flex flex-row px-3 gap-2">
							{/* Left side - Text content */}
							<div className="w-[167px] flex-shrink-0">
								<div className="[font-family:'Antonio',Helvetica] font-normal text-black text-base text-center tracking-[-0.32px] leading-6">
									<span className="tracking-[-0.05px]">Bei Interesse an meinen Bildern freue ich mich über eine E-Mail:</span>
									<a href="mailto:kontakt@sabinehansen.art" rel="noopener noreferrer" target="_blank" className="block mt-3">
										<span className="tracking-[-0.05px] underline">kontakt@sabinehansen.art</span>
									</a>
								</div>
							</div>

							{/* Right side - Image */}
							<div className="flex-1 flex justify-end">
								<img className="w-[186px] h-[353px] object-cover" alt="Element" src={kontaktImgSm} />
							</div>
						</div>
					</div>

					<div className="w-full flex flex-col items-start">
						<ContactSectionMobile className="mt-6 w-full" />
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col">
			{/* header is rendered globally */}
			{/* Main content */}
			<main className="flex-1 w-full">
				<div className="w-full max-w-[1440px] relative bg-background overflow-hidden mx-auto lg:h-[1458px]" style={{ marginTop: 0, paddingTop: 0 }}>
					<div className="w-full lg:w-[508px] h-96 lg:left-[149px] lg:top-[269px] lg:absolute text-center justify-start mx-auto lg:mx-0">
						<span className="text-black text-4xl font-normal font-['Antonio'] leading-[60px]">
							Bei Interesse an meinen Bildern freue ich mich über eine E-Mail:
						</span>
					</div>
					{/* Use shared ContactSection for email + icon centered under the text */}
					<ContactSection
						className="lg:absolute relative lg:w-[508px] w-full lg:top-[550px] lg:left-[149px] mx-auto lg:mx-0"
						showName={false}
						showLocation={false}
					/>
					<img
						className="w-full lg:w-[549px] h-auto lg:h-[1044px] lg:left-[855px] lg:top-[184px] lg:absolute object-cover mx-auto lg:mx-0"
						src={kontaktImgLg}
						alt="Kontakt Vorschau"
						loading="lazy"
					/>
				</div>
			</main>
		</div>
	);
}