import { createContext, useState, useEffect, type ReactNode } from 'react';
import en from './en.json';
import pt from './pt.json';

type Lang = 'en' | 'pt';

type I18nContextType = {
    lang: Lang;
    t: typeof en;
    setLang: (lang: Lang) => void;
};

export const I18nContext = createContext<I18nContextType | undefined>(
    undefined
);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>(() => {
        const saved = localStorage.getItem('lang') as Lang | null;
        return saved || 'en';
    });
    const [translations, setTranslations] = useState<typeof en>(en);

    useEffect(() => {
        localStorage.setItem('lang', lang);

        switch (lang) {
            case 'pt':
                setTranslations(pt);
                break;

            default:
                setTranslations(en);
        }
    }, [lang]);

    return (
        <I18nContext.Provider value={{ lang, t: translations, setLang }}>
            {children}
        </I18nContext.Provider>
    );
};
