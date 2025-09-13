import { useLanguage } from "../lib/LanguageContext";

export const TopLanguageBar = (): JSX.Element => {
  const { lang, setLang } = useLanguage();
  return (
    // Desktop-only spacer/language bar that scrolls away (not fixed).
    <div className="hidden md:block w-full h-[41px] bg-white">
      <div className="container mx-auto h-full px-4 flex items-center justify-center">
        <div className="[font-family:'Antonio',Helvetica] text-[16px] font-thin leading-none text-black">
          <button onClick={() => setLang('de')} className={`px-1 ${lang === 'de' ? 'underline' : ''}`}>de</button>
          <span className="px-1">|</span>
          <button onClick={() => setLang('en')} className={`px-1 ${lang === 'en' ? 'underline' : ''}`}>en</button>
        </div>
      </div>
    </div>
  );
};

