import type { CSSProperties, HTMLAttributes } from "react";

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
      <a href="#impressum" className="hover:underline">Impressum</a>
      <a href="#datenschutz" className="hover:underline">Datenschutz</a>
    </footer>
  );
};
