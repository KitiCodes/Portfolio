import type { CSSProperties, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

type FooterBarMobileProps = HTMLAttributes<HTMLElement> & {
  style?: CSSProperties;
};

export const FooterBarMobile = ({ className, style, ...rest }: FooterBarMobileProps): JSX.Element => {
  const year = new Date().getFullYear();
  return (
    <footer
      className={[
        "flex items-center gap-2 text-[11px] text-black [font-family:'Antonio',Helvetica] font-normal tracking-[-0.22px] leading-[13.2px] mb-8",
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
