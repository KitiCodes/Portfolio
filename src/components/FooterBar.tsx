import type { CSSProperties, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

type FooterBarProps = HTMLAttributes<HTMLElement> & {
  style?: CSSProperties;
};

// Unified responsive footer: small type on mobile, larger spacing/size on desktop
export const FooterBar = ({ className, style, ...rest }: FooterBarProps): JSX.Element => {
  const year = new Date().getFullYear();
  return (
    <footer
      className={[
        // mobile styles (from FooterBarMobile) and desktop styles merged via responsive utilities
        "flex items-center text-black [font-family:'Antonio',Helvetica]",
        "gap-2 text-[11px] tracking-[-0.22px] leading-[13.2px] mb-8",
        "md:gap-6 md:text-base md:tracking-normal md:leading-normal md:mb-0",
        className || "",
      ].join(" ")}
      style={style}
      {...rest}
    >
      <span>Sabine Hansen</span>
      <span>© {year}</span>
      <Link to="/imprint" className="hover:text-[#854686]">Impressum</Link>
      <Link to="/privacy-policy" className="hover:text-[#854686]">Datenschutz</Link>
    </footer>
  );
};
