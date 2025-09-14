import { ReactNode } from "react";
import PageTopSpacer from './PageTopSpacer';

export type LegalPageProps = {
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
};

export function LegalPage({ title, intro, children }: LegalPageProps): JSX.Element {
  return (
    <div className="px-6 py-10 md:py-12 max-w-4xl mx-auto">
          <PageTopSpacer />
        <h1 className="text-3xl md:text-4xl font-normal [font-family:'Antonio',Helvetica] mb-8 md:mb-10">{title}</h1>
      {intro ? (
        <div className="text-base md:text-lg font-thin [font-family:'Antonio',Helvetica] leading-relaxed mb-4">
          {intro}
        </div>
      ) : null}
      <div className="text-base md:text-lg font-thin [font-family:'Antonio',Helvetica] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
