import { createContext, useCallback, useEffect, useState } from "react";
import { idText } from "typescript";
import localeService from '../locales/locales.service';

const LANGUAGES: {[key: string]: string} = {
    en: 'en',
    'en-US': 'en',
    pt: 'pt-BR',
    'pt-BR': 'pt-BR',
  };

type LocaleContextType = {
    locale: string;
    setLocale: (locale: string) => void;

};

type WithChildrenProps = {
    children: React.ReactNode;
};

const LOCALE_TOKEN = 'rtdev@locale';


export const LocaleContext = createContext<LocaleContextType>({
    locale: 'en',
    setLocale: () => {},
});

export const LocaleProvider = ({children}: WithChildrenProps) => {
    const [isReady, setIsReady] = useState(false);
    const [locale, setLocale] = useState('en');
    const storageLocale = localStorage.getItem(LOCALE_TOKEN);
    const browserLocale = navigator.language;
    const locales = Object.values(LANGUAGES);

    const setLocaleService = (locale: string) => {
        localeService.setTopLevelLocale(locales, locale);
        setIsReady(!isReady);
    }
    
    const getSystemLocale = (locale: string): string => {
        const DEFAULT_LOCALE = 'en';
        return LANGUAGES[locale] || DEFAULT_LOCALE;
    };

    const setSystemLocale = useCallback(() => {
        let locale;
        if (!storageLocale) {
            locale = getSystemLocale(browserLocale);
            localStorage.setItem(LOCALE_TOKEN, locale);
        } else {
            locale = storageLocale;
        }
        setLocale(locale);
        setLocaleService(locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[browserLocale, storageLocale]);

    useEffect(() => {
        setSystemLocale();
    },[setSystemLocale])

    if(!isReady) return <></>;

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    )
}