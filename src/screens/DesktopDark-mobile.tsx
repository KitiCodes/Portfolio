import { FooterBarMobile } from "../components/FooterBarMobile";
// Replace MobileNavbar with SiteHeaderMobile and add hooks for lightbox
import SiteHeaderMobile from "../components/SiteHeaderMobile";
import { useCallback, useEffect, useMemo, useRef, useState, type TouchEvent } from "react";
import ContactSectionMobile from "../components/ContactSectionMobile";

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

// Large variants for lightbox
import lgAufbruchI from "../assets/optimized/lg/AufbruchI-web.webp";
import lgAufbruchII from "../assets/optimized/lg/AufbruchII-web.webp";
import lgEismeer from "../assets/optimized/lg/Eismeer-web.webp";
import lgFruehling from "../assets/optimized/lg/Fruehling-web.webp";
import lgKuechenphilosophie from "../assets/optimized/lg/Küchenphilosophie-web.webp";
import lgOhneTitelA from "../assets/optimized/lg/ohneTitel-a-web.webp";
import lgOhneTitel1 from "../assets/optimized/lg/ohneTitel1-web.webp";
import lgOhneTitelB from "../assets/optimized/lg/ohneTitelb-web.webp";
import lgPower from "../assets/optimized/lg/power-web.webp";
import lgSonnenblumen from "../assets/optimized/lg/Sonnenblumen-web.webp";
import lgSpuren from "../assets/optimized/lg/Spuren-web.webp";
import lgTanzendeA from "../assets/optimized/lg/Tanzende-a-web.webp";
import lgTanzendeB from "../assets/optimized/lg/Tanzende-b-web.webp";
import lgZaghaft from "../assets/optimized/lg/Zaghaft-beginnt-etwas-Neues-web.webp";

const artworks = [
	{
		id: 1,
		image: smAufbruchI,
		large: lgAufbruchI,
		alt: "Aufbruch I",
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
		large: lgFruehling,
		alt: "Frühling",
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
		large: lgEismeer,
		alt: "Eismeer",
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
		large: lgZaghaft,
		alt: "Zaghaft beginnt etwas Neues",
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
		large: lgPower,
		alt: "power",
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
		large: lgTanzendeA,
		alt: "Tanzende A",
		title: "Tanzende",
		year: "2024",
		dimensions: "je 80 x 40 cm",
		groupId: "tanzende",
		imageClasses:
			"absolute w-[135px] h-[272px] top-[1473px] left-[11px] object-cover",
		textClasses:
			"absolute w-[69px] top-[1648px] left-[301px] [font-family:'Antonio',Helvetica] font-normal text-black text-base tracking-[-0.32px] leading-[19.2px]",
	},
	{
		id: 7,
		image: smTanzendeB,
		large: lgTanzendeB,
		alt: "Tanzende B",
		title: "",
		year: "",
		dimensions: "",
		groupId: "tanzende",
		imageClasses:
			"absolute w-[138px] h-[272px] top-[1473px] left-[154px] object-cover",
		textClasses: "",
	},
	{
		id: 8,
		image: smSonnenblumen,
		large: lgSonnenblumen,
		alt: "Sonnenblumen",
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
		large: lgKuechenphilosophie,
		alt: "Küchenphilosophie",
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
		large: lgOhneTitelA,
		alt: "ohne Titel A",
		title: "ohne Titel",
		year: "2024",
		dimensions: "je 80 x 40 cm",
		groupId: "ohne-titel-diptych",
		imageClasses:
			"absolute w-[131px] h-[261px] top-[2243px] left-[254px] object-cover",
		textClasses:
			"absolute top-[2379px] left-[19px] [font-family:'Antonio',Helvetica] font-normal text-black text-base text-right tracking-[-0.32px] leading-[19.2px]",
	},
	{
		id: 11,
		image: smOhneTitelB,
		large: lgOhneTitelB,
		alt: "ohne Titel B",
		title: "",
		year: "",
		dimensions: "",
		groupId: "ohne-titel-diptych",
		imageClasses:
			"absolute w-[130px] h-[261px] top-[2243px] left-[121px] object-cover",
		textClasses: "",
	},
	{
		id: 12,
		image: smAufbruchII,
		large: lgAufbruchII,
		alt: "Aufbruch II",
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
		large: lgOhneTitel1,
		alt: "ohne Titel 1",
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
		large: lgSpuren,
		alt: "Spuren",
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
	// Lightbox state and helpers
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	// refs used by lightbox: close button & touch start X for swipe
	const closeBtnRef = useRef<HTMLButtonElement | null>(null);
	const touchStartX = useRef<number | null>(null);

	const openPreview = useCallback((index: number) => {
		setCurrentIndex(index);
		setIsPreviewOpen(true);
	}, []);

	const closePreview = useCallback(() => {
		setIsPreviewOpen(false);
	}, []);

	const showPrev = useCallback(() => {
		setCurrentIndex((i) => (i - 1 + artworks.length) % artworks.length);
	}, []);

	const showNext = useCallback(() => {
		setCurrentIndex((i) => (i + 1) % artworks.length);
	}, []);

	useEffect(() => {
		if (!isPreviewOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") closePreview();
			if (e.key === "ArrowLeft") showPrev();
			if (e.key === "ArrowRight") showNext();
		};
		document.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [isPreviewOpen, closePreview, showPrev, showNext]);

	// touch handlers for swipe
	const onTouchStart = (e: TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
	};
	const onTouchEnd = (e: TouchEvent) => {
		if (touchStartX.current == null) return;
		const dx = e.changedTouches[0].clientX - touchStartX.current;
		if (dx > 50) showPrev();
		if (dx < -50) showNext();
		touchStartX.current = null;
	};

	// Map groupId to indices for quick lookup in lightbox
	const groups = useMemo(() => {
		const map = new Map<string, number[]>();
		artworks.forEach((a, idx) => {
			if (a.groupId) {
				const arr = map.get(a.groupId) ?? [];
				arr.push(idx);
				map.set(a.groupId, arr);
			}
		});
		return map;
	}, []);

	return (
		<div className="bg-[#d4cdc4] grid justify-items-center [align-items:start] w-screen">
			{/* Language bar (centered) */}
			<div className="w-full">
				<div className="mx-auto relative h-7 px-4" style={{ maxWidth: 1200 }}>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [font-family:'Antonio',Helvetica] text-[16px] font-thin leading-none text-black">
						<a href="#de" className="hover:underline">de</a>
						<span className="px-1">|</span>
						<a href="#en" className="hover:underline">en</a>
					</div>
				</div>
			</div>

			{/* Sticky mobile header replaces MobileNavbar */}
			<SiteHeaderMobile />

			<div className="bg-[#d4cdc4] w-[390px] relative">
				{artworks.map((artwork, idx) => (
					<div key={artwork.id}>
						<img
							className={artwork.imageClasses + " cursor-pointer"}
							alt={artwork.alt || "Element web"}
							src={artwork.image}
							loading="lazy"
							onClick={() => openPreview(idx)}
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

				{/* Contact block unified component */}
				<ContactSectionMobile className="absolute top-[3442px] left-0" />

				{/* FooterBarMobile component with mobile-appropriate styling */}
				<FooterBarMobile className="absolute top-[3763px] left-3" />
			</div>

			{/* Lightbox preview overlay */}
			{isPreviewOpen && (
				<div
					role="dialog"
					aria-modal="true"
					className="fixed inset-0 z-[100] bg-[#d4cdc4] flex items-center justify-center"
					onTouchStart={onTouchStart}
					onTouchEnd={onTouchEnd}
					onClick={(e) => {
						// close when clicking the overlay background (but not when clicking inside content)
						if (e.target === e.currentTarget) closePreview();
					}}
				>
					<button ref={closeBtnRef} aria-label="Close preview" onClick={closePreview} className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-3xl text-black">
						×
					</button>

					<button aria-label="Previous image" onClick={showPrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-2xl text-black">{'<'}</button>
					<button aria-label="Next image" onClick={showNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-2xl text-black">{'>'}</button>

					<div className="relative w-full h-full flex items-center justify-center">
						{(() => {
							const cur = artworks[currentIndex] as any;
							const groupIdxs = cur.groupId ? groups.get(cur.groupId) : null;

							if (groupIdxs && groupIdxs.length > 1) {
								const group = groupIdxs.map((i) => artworks[i]);
								const main = group.find((a) => (a.title ?? "").trim().length > 0) ?? group[0];
								return (
									<div className="flex flex-col items-center gap-4">
										<div className="flex gap-2 items-center justify-center">
											{group.map((a) => (
												<img key={a.id} src={a.large} alt={a.alt || a.title || 'Artwork'} className="max-w-[40vw] max-h-[60vh] object-contain mx-auto" />
											))}
										</div>
										<div className="text-center [font-family:'Antonio',Helvetica] text-black text-lg">{(main.title || main.alt) ?? ""}</div>
									</div>
								);
							}

							return (
								<div className="flex flex-col items-center">
									<img src={cur.large} alt={cur.alt || cur.title || 'Artwork'} className="max-w-[92vw] max-h-[82vh] object-contain mx-auto" />
									<div className="mt-3 text-center [font-family:'Antonio',Helvetica] text-black text-lg">{(cur.title || cur.alt) ?? ""}</div>
								</div>
							);
						})()}
					</div>
				</div>
			)}
		</div>
	);
};

export default DesktopDarkMobile;
