// Hero / Overview section
const { useEffect, useState, useRef } = React;

function CyclingOrb() {
  const langs = window.LANGUAGES;
  const frames = [{ short: "PG.", full: "Pedro Guth", color: "#a9b6ff", tint: "rgba(107,140,255,.85)", deep: "#2a3aa0" }, ...langs];
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState("in");

  useEffect(() => {
    const t = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setIdx(i => (i + 1) % frames.length);
        setPhase("in");
        setTimeout(() => setPhase("ok"), 20);
      }, 350);
    }, 2200);
    return () => clearInterval(t);
  }, [frames.length]);

  const f = frames[idx];
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--orb-tint-a', f.deep);
    root.style.setProperty('--orb-tint-b', f.tint);
    root.style.setProperty('--orb-tint-c', f.color);
    root.style.setProperty('--orb-glow', f.tint);
  }, [idx]);

  const cls = phase === "out" ? "orb-label swap-out" : phase === "in" ? "orb-label swap-in" : "orb-label";
  const scale = f.short.length <= 4 ? 1 : f.short.length <= 6 ? 0.72 : 0.55;

  return (
    <div className="orb">
      <span className={cls} style={{ color: "#fff", fontSize: `calc(clamp(46px, 6vw, 78px) * ${scale})` }}>{f.short}</span>
    </div>
  );
}

function Hero() {
  const { t } = window.useI18n();
  return (
    <section id="overview" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">{t('eyebrowHero')}</span>
            <h1>
              Pedro<br/>
              <span className="shine">Guth.</span>
            </h1>
            <p className="lead" dangerouslySetInnerHTML={{__html: t('heroLead')}} />
            <div className="hero-cta">
              <a href="#portfolio" className="btn primary">
                {t('ctaPortfolio')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="#contact" className="btn">{t('ctaContact')}</a>
            </div>

            <div className="stats">
              <div className="stat"><div className="k">4+</div><div className="v">{t('statYears')}</div></div>
              <div className="stat"><div className="k">{t('statFullK')}</div><div className="v">{t('statFull')}</div></div>
              <div className="stat"><div className="k">{t('statLocK')}</div><div className="v">{t('statLocation')}</div></div>
            </div>
          </div>

          <div className="hero-visual">
            <CyclingOrb />
            <div className="chip-ring">
              <span className="chip c-ts"><span className="dot"></span>TypeScript</span>
              <span className="chip c-react"><span className="dot"></span>React</span>
              <span className="chip c-next"><span className="dot"></span>Next.js</span>
              <span className="chip c-node"><span className="dot"></span>Node.js</span>
              <span className="chip c-pg"><span className="dot"></span>PostgreSQL</span>
              <span className="chip c-html"><span className="dot"></span>HTML</span>
              <span className="chip c-css"><span className="dot"></span>CSS</span>
              <span className="chip c-vitest"><span className="dot"></span>Vitest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
