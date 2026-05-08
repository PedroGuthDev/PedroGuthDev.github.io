import { useState, useEffect } from 'react';
import { I18N } from '../data';

let currentLang = localStorage.getItem('lang') || 'pt';
let listeners = [];

const setLang = (lang) => {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  listeners.forEach((fn) => fn(lang));
};

const t = (key) => {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
};

export function useI18n() {
  const [lang, setLangState] = useState(currentLang);

  useEffect(() => {
    const fn = (l) => setLangState(l);
    listeners.push(fn);
    return () => {
      listeners = listeners.filter((f) => f !== fn);
    };
  }, []);

  return { lang, t, setLang };
}
