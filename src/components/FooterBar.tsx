import type { CSSProperties, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

type FooterBarProps = HTMLAttributes<HTMLElement> & {
  style?: CSSProperties;
};

export const FooterBar = ({ className, style, ...rest }: FooterBarProps): JSX.Element => {
  const year = new Date().getFullYear();
  return (
    <footer
      className={[
        "flex items-center gap-6 text-base text-black [font-family:'Antonio',Helvetica]",
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
