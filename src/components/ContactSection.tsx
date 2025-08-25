import type { CSSProperties, HTMLAttributes } from "react";

type ContactSectionProps = HTMLAttributes<HTMLElement> & {
	style?: CSSProperties;
	showName?: boolean;
	showLocation?: boolean;
};

export const ContactSection = ({ className, style, showName = true, showLocation = true, ...rest }: ContactSectionProps): JSX.Element => {
	return (
			<section className={className} style={style} {...rest}>
				<div className="flex flex-col items-center gap-2.5 w-full text-center">
				{showName && (
					<div className="[font-family:'Antonio',Helvetica] font-normal text-black text-5xl tracking-[-0.96px] leading-[57.6px]">
						<span className="tracking-[-0.46px]">Sabine Hansen</span>
					</div>
				)}
				{showLocation && (
					<div className="[font-family:'Antonio',Helvetica] font-normal text-black text-4xl tracking-[-0.26px] leading-[43.2px]">
						Schwentinental, Deutschland
					</div>
				)}
				<div className="[font-family:'Antonio',Helvetica] font-normal text-black text-4xl tracking-[-0.26px] leading-[43.2px]">
					<a
						href="mailto:kontakt@sabinehansen.art"
						className="no-underline text-black hover:text-[#854686] transition-colors"
					>
						kontakt@sabinehansen.art
					</a>
				</div>
				<div className="mt-[44px]">
					<a
						href="https://www.instagram.com/sabinehansen.art/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram – sabinehansen.art"
						className="inline-flex items-center justify-center text-black hover:text-[#854686] transition-colors"
						title="Instagram"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="60"
							height="60"
							viewBox="0 0 24 24"
							role="img"
						>
							<rect x="3" y="3" width="18" height="18" rx="4" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
							<circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
							<circle cx="17" cy="7" r="1.2" fill="currentColor" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};
