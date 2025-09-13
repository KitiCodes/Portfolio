export function PageTopSpacer(): JSX.Element {
  // On mobile, reserve space for the fixed mobile header (12 or 14 depending on screen size used).
  // On md+ (desktop), reserve for the 41px language bar + 96px header = 137px.
  return (
    <div aria-hidden="true" className="w-full">
      {/* mobile header height */}
      <div className="block md:hidden h-5" />
      {/* desktop language bar + header */}
      <div className="hidden md:block" style={{ height: 10 }} />
    </div>
  );
}

export default PageTopSpacer;