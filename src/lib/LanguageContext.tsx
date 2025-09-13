import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'de' | 'en';
type LangContext = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (de: string, en?: string) => string;
};

const ctx = createContext<LangContext | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('de');

  const t = (de: string, en?: string) => (lang === 'de' ? de : en ?? de);

  return <ctx.Provider value={{ lang, setLang, t }}>{children}</ctx.Provider>;
};

export const useLanguage = (): LangContext => {
  const v = useContext(ctx);
  if (!v) throw new Error('useLanguage must be used within LanguageProvider');
  return v;
};

export default LanguageProvider;
