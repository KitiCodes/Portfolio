//
import { ContactSection } from "../components/ContactSection";
import { useEffect, useState, useRef } from "react";
import ContactSectionMobile from "../components/ContactSectionMobile";
import UMtopImg from "../assets/optimized/lg/calendar_front.webp";

interface Address {
	name: string;
	street: string;
	city: string;
	zipCode: string;
	coordinates: { lat: number; lng: number };
}

const addresses: Address[] = [
	{
		name: "Giesecke Licht+Design",
		street: "Zum See 1-3",
		city: "Schwentinental-Raisdorf",
		zipCode: "24223",
		coordinates: { lat: 54.3167, lng: 10.3667 },
	},
	{
		name: "auroraprint",
		street: "Preetzer Chaussee 144",
		city: "Kiel-Elmschenhagen",
		zipCode: "24146",
		coordinates: { lat: 54.35, lng: 10.1833 },
	},
	{
		name: "Hafensinne",
		street: "Kleiner Kuhberg 36",
		city: "Kiel (Exerzierplatz)",
		zipCode: "24103",
		coordinates: { lat: 54.3236, lng: 10.1319 },
	},
	{
		name: "Mercedes-Autohaus Klenk",
		street: "Suchskrug 6",
		city: "Kiel",
		zipCode: "24107",
		coordinates: { lat: 54.3333, lng: 10.15 },
	},
	{
		name: "Buchhandlung am Markt",
		street: "Lange Brückstr. 1a",
		city: "Preetz",
		zipCode: "24211",
		coordinates: { lat: 54.3267, lng: 10.3633 },
	},
	{
		name: "Sparkasse Lütjenburg",
		street: "Markt 15",
		city: "Lütjenburg",
		zipCode: "24321",
		coordinates: { lat: 54.3533, lng: 10.7833 },
	},
];

// Map center coordinates (center of all locations)
const MAP_CENTER = { lat: 54.33, lng: 10.35 };
const MAP_ZOOM = 11;

// Leaflet CDN URLs
const LEAFLET_CSS_URL = "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css";
const LEAFLET_JS_URL = "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.js";

function MapComponent() {
	const mapContainer = useRef<HTMLDivElement>(null);
	const map = useRef<any>(null);

	useEffect(() => {
		if (!mapContainer.current) return;

		// Load Leaflet CSS and JS dynamically
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = LEAFLET_CSS_URL;
		document.head.appendChild(link);

		// Load Leaflet script
		const script = document.createElement("script");
		script.src = LEAFLET_JS_URL;
		script.async = true;
		script.onload = () => {
			const L = (window as any).L;

			// Initialize map
			if (mapContainer.current && !map.current) {
				map.current = L.map(mapContainer.current).setView(
					[MAP_CENTER.lat, MAP_CENTER.lng],
					MAP_ZOOM
				);

				// Add tile layer from OpenStreetMap
				L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
					attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
					maxZoom: 19,
				}).addTo(map.current);

				// Add markers for each address
				addresses.forEach((addr) => {
					const marker = L.marker([addr.coordinates.lat, addr.coordinates.lng], {
						title: addr.name,
					}).addTo(map.current);

					// Create popup content
					const popupContent = `
						<div class="p-2 font-sans">
							<strong class="text-sm block text-gray-900">${addr.name}</strong>
							<p class="text-xs text-gray-700 mt-1">${addr.street}</p>
							<p class="text-xs text-gray-700">${addr.zipCode} ${addr.city}</p>
						</div>
					`;

					marker.bindPopup(popupContent);
				});
			}
		};
		document.head.appendChild(script);

		// Cleanup
		return () => {
			if (map.current) {
				map.current.remove();
				map.current = null;
			}
		};
	}, []);

	return (
		<div
			ref={mapContainer}
			className="w-full h-[500px] rounded-lg shadow-lg border border-gray-300"
		/>
	);
}

export function Aktuelles(): JSX.Element {
	const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth <= 768 : false));

	useEffect(() => {
		if (typeof window === "undefined") return;
		const onResize = () => setIsMobile(window.innerWidth <= 768);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	if (isMobile) {
		// Inline mobile markup
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

		return (
			<div className="bg-[#d4cdc4] grid justify-items-center [align-items:start] w-screen">
				{/* header is rendered globally */}

				<div className="bg-[#d4cdc4] w-[390px] relative pt-5">
					<div ref={stackingRef} className="relative w-full pt-6" style={{ minHeight: stackHeight }}>
						<img className="absolute w-[199px] h-[257px] top-[83px] left-2.5" alt="Kunstkalender" src={UMtopImg} />

						<div className="absolute w-[162px] top-[78px] left-[218px] [font-family:'Antonio',Helvetica] font-thin text-black text-base text-left tracking-[0] leading-6">
							Der Kunstkalender 2026 ist da!<br />
							<br />
							In zwei Varianten gibt es ihn: im A3-Format als Wandkalender (29 Euro) oder als kleinen Tischkalender in einer Box 15 Euro. <br />
							Für jeden verkauften Kalender gehen 5 Euro als Spende an das Frauenhaus Kreis Plön.<br />
							<br />
							Zu erwerben gibt es die Kalender an folgenden Verkaufsstellen oder online über Etsy:
						</div>

						<div className="absolute w-[333px] top-[369px] left-[11px]">
							<div className="mt-4">
								<MapComponent />
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

	// Desktop markup preserved below
	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col">
			{/* header is rendered globally */}
			{/* Main content */}
			<main className="flex-1 w-full">
				<div className="w-full max-w-[1440px] mx-auto" style={{ marginTop: 0, paddingTop: 0 }}>
					<img className="w-96 h-[524px] object-cover mx-auto" src={UMtopImg} alt="Kunstkalender 2026" loading="lazy" />
					
					<div className="w-full max-w-4xl mx-auto px-6 py-12">
						<h1 className="text-4xl font-thin font-['Antonio'] text-black mb-6 text-center">Der Kunstkalender 2026 ist da!</h1>
						
						<p className="text-lg font-thin text-black mb-6 text-center">
							In zwei Varianten gibt es ihn: im A3-Format als Wandkalender (29 Euro) oder als kleinen Tischkalender in einer Box 15 Euro. <br />
							Für jeden verkauften Kalender gehen 5 Euro als Spende an das Frauenhaus Kreis Plön.
						</p>

						<h2 className="text-2xl font-thin font-['Antonio'] text-black mb-8 text-center">Verkaufsstellen</h2>
						
						{/* Map Section */}
						<div className="mb-12">
							<MapComponent />
						</div>

						<p className="text-center text-sm text-gray-600 mb-12">
							Oder online verfügbar auf <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Etsy</a>
						</p>

						{/* Address List */}
						<div className="mb-12">
							<h3 className="text-xl font-thin font-['Antonio'] text-black mb-6 text-center">Alle Verkaufsstellen</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{addresses.map((addr, idx) => (
									<div
										key={idx}
										className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
									>
										<p className="font-medium text-sm text-black">{addr.name}</p>
										<p className="text-sm text-gray-700 mt-2">{addr.street}</p>
										<p className="text-sm text-gray-700">{addr.zipCode} {addr.city}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<ContactSection className="relative w-full max-w-2xl mx-auto px-6" />
				</div>
			</main>
		</div>
	);
}