// i18n React hook — subscribes to window.__lang changes
function useI18n() {
  const [lang, setLangState] = React.useState(window.__lang || "pt");
  React.useEffect(() => {
    const fn = (l) => setLangState(l);
    window.__langListeners.push(fn);
    return () => {
      window.__langListeners = window.__langListeners.filter(f => f !== fn);
    };
  }, []);
  const t = (k) => window.t(k);
  return { lang, t, setLang: window.setLang };
}
window.useI18n = useI18n;
