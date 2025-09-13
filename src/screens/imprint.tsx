import SiteHeaderMobile from "../components/SiteHeaderMobile";
import { SiteHeader } from "../components/SiteHeader";

export const Imprint = (): JSX.Element => (
  <div className="min-h-screen bg-background text-foreground flex flex-col">
    {/* Responsive headers: mobile/desktop */}
    <div className="block md:hidden">
      <SiteHeaderMobile />
    </div>
    <div className="hidden md:block">
      <SiteHeader />
    </div>

  <main className="flex-1 w-full bg-background flex flex-col">
      <div className="px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-normal [font-family:'Antonio',Helvetica] mb-4">Impressum</h1>
        <p className="text-lg font-thin [font-family:'Antonio',Helvetica]">Angaben gemäß § 5 TMG:</p>
        <p className="mt-4 text-lg font-thin [font-family:'Antonio',Helvetica]">Sabine Hansen<br />Schwentinental, Deutschland</p>
      </div>

      {/* Footer is now global */}
    </main>
  </div>
);

export default Imprint;
