import type { CSSProperties, HTMLAttributes } from "react";

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
      <a href="#impressum">Impressum</a>
      <a href="#datenschutz">Datenschutz</a>
    </footer>
  );
};
