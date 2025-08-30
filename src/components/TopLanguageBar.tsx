export const TopLanguageBar = (): JSX.Element => (
  <div className="w-full">
    <div className="container mx-auto h-7 px-4 flex items-center justify-center">
      <div className="[font-family:'Antonio',Helvetica] text-[16px] font-thin leading-none text-black">
        <a href="#de" className="hover:underline">de</a>
        <span className="px-1">|</span>
        <a href="#en" className="hover:underline">en</a>
      </div>
    </div>
  </div>
);
