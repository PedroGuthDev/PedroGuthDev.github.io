// Main app shell — nav, spotlight, tweaks, section orchestration
const { useEffect: useEffectA, useState: useStateA, useRef: useRefA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 228,
  "glassBlur": 22,
  "bgDarkness": 0,
  "grain": 0.07,
  "bleedStyle": "soft",
  "animSpeed": 1
}/*EDITMODE-END*/;

function useSpotlight() {
  useEffectA(() => {
    const el = document.querySelector('.spotlight');
    if (!el) return;
    const on = (e) => {
      el.style.setProperty('--mx', e.clientX + 'px');
      el.style.setProperty('--my', e.clientY + 'px');
    };
    window.addEventListener('pointermove', on);
    return () => window.removeEventListener('pointermove', on);
  }, []);
}

function Navbar() {
  const [active, setActive] = useStateA('overview');
  const { lang, t, setLang } = window.useI18n();
  useEffectA(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    window.NAV_SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const labels = {
    overview: t('navOverview'),
    portfolio: t('navPortfolio'),
    about: t('navAbout'),
    contact: t('navContact'),
  };

  return (
    <nav className="navbar">
      <span className="brand">PG.</span>
      {window.NAV_SECTIONS.map(s => (
        <a key={s.id} href={`#${s.id}`}
           style={active === s.id ? { color: 'var(--ink)', background: 'rgba(255,255,255,.06)' } : {}}>
          {labels[s.id]}
        </a>
      ))}
      <div className="lang-toggle">
        <button className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
      </div>
    </nav>
  );
}

function applyTweaks(t) {
  const root = document.documentElement;
  const h = t.accentHue;
  root.style.setProperty('--accent-1', `hsl(${h}, 100%, 71%)`);
  root.style.setProperty('--accent-2', `hsl(${(h + 30) % 360}, 92%, 74%)`);
  root.style.setProperty('--accent-3', `hsl(${(h - 30 + 360) % 360}, 100%, 66%)`);
  root.style.setProperty('--glass-blur', `${t.glassBlur}px`);
  root.style.setProperty('--grain', String(t.grain));

  // darkness: range -2 (lighter) to 1.5 (deeper near-black). Push a wider visible range.
  const d = t.bgDarkness;
  // Lightness for bg-0 (outer) and bg-1 (center bloom)
  const l0 = Math.max(0, 4 - d * 4);   // 4% default; d=1 -> 0%; d=-2 -> 12%
  const l1 = Math.max(1, 10 - d * 5);  // 10% default; d=1 -> 5%; d=-2 -> 20%
  root.style.setProperty('--bg-0', `hsl(228, 60%, ${l0}%)`);
  root.style.setProperty('--bg-1', `hsl(228, 55%, ${l1}%)`);

  // animation speed
  document.querySelectorAll('.orb').forEach(o => {
    o.style.animationDuration = `${9 / t.animSpeed}s`;
  });

  // bleed style — adjust card bleed blur/opacity
  document.querySelectorAll('.project-card .bleed').forEach(b => {
    if (t.bleedStyle === "hard") {
      b.style.filter = 'blur(40px)';
      b.style.opacity = '.95';
    } else if (t.bleedStyle === "wide") {
      b.style.filter = 'blur(140px)';
      b.style.opacity = '.6';
    } else {
      b.style.filter = 'blur(90px)';
      b.style.opacity = '.75';
    }
  });
}

function TweaksWrap() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  useEffectA(() => { applyTweaks(tweaks); }, [tweaks]);

  return (
    <window.TweaksPanel>
      <window.TweakSection label="Color" />
      <window.TweakSlider label="Accent hue" value={tweaks.accentHue}
        onChange={(v) => setTweak('accentHue', v)} min={180} max={320} step={2} unit="°" />
      <window.TweakSlider label="Background darkness" value={tweaks.bgDarkness}
        onChange={(v) => setTweak('bgDarkness', v)} min={-2} max={1.5} step={0.1} />

      <window.TweakSection label="Glass & grain" />
      <window.TweakSlider label="Glass blur" value={tweaks.glassBlur}
        onChange={(v) => setTweak('glassBlur', v)} min={0} max={60} step={1} unit="px" />
      <window.TweakSlider label="Grain amount" value={tweaks.grain}
        onChange={(v) => setTweak('grain', v)} min={0} max={0.5} step={0.01} />

      <window.TweakSection label="Motion & bleed" />
      <window.TweakRadio label="Color bleed"
        value={tweaks.bleedStyle}
        onChange={(v) => setTweak('bleedStyle', v)}
        options={['soft', 'wide', 'hard']} />
      <window.TweakSlider label="Animation speed" value={tweaks.animSpeed}
        onChange={(v) => setTweak('animSpeed', v)} min={0.3} max={2.5} step={0.1} unit="×" />
    </window.TweaksPanel>
  );
}

function App() {
  useSpotlight();
  return (
    <>
      <div className="bg-stack"/>
      <div className="spotlight"/>
      <div className="bg-grain"/>
      <Navbar />
      <window.Hero />
      <window.Portfolio />
      <window.About />
      <window.Contact />
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Pedro Guth · {window.t('footer')}
        </div>
      </footer>
      <TweaksWrap />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
