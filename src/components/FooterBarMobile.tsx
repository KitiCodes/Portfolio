// Backward-compatible wrapper reusing the unified FooterBar
import type { CSSProperties, HTMLAttributes } from "react";
import { FooterBar } from "./FooterBar";

type FooterBarMobileProps = HTMLAttributes<HTMLElement> & {
  style?: CSSProperties;
};

export const FooterBarMobile = ({ className, style, ...rest }: FooterBarMobileProps): JSX.Element => {
  return <FooterBar className={className} style={style} {...rest} />;
};
