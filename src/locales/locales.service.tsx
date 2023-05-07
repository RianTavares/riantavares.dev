/* eslint-disable import/no-anonymous-default-export */
import { I18n } from 'i18n-js';
import en from './en';
import pt from './pt-BR';

const i18n = new I18n({
    en,
    pt,
    'pt-BR': pt,
});

i18n.enableFallback = true;

let _locales: any;
let _locale: any;

const setTopLevelLocale = (locales: any, locale: any) => {
    _locales = locales;
    _locale = locale;
}

const translate = (scope: string, options = {}) => {
    return i18n.t(scope, {locale: _locale, ...options});
}

const getLocale = () => _locale;

const getLocales = () => _locales;

export default {
    translate,
    setTopLevelLocale,
    getLocale,
    getLocales
}
