export function PageTopSpacer(): JSX.Element {
  // On mobile, reserve space for the fixed mobile header (48px base, 56px on small screens).
  // On md+ (desktop), reserve space for the 41px language bar + 96px header = 137px.
  return (
    <div aria-hidden="true" className="w-full">
      {/* mobile header height: fixed header occupies the top */}
      <div className="block md:hidden h-12 sm:h-14" />
      {/* desktop language bar + header total height */}
      <div className="hidden md:block" style={{ height: 137 }} />
    </div>
  );
}

export default PageTopSpacer;