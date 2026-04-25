// Portfolio section — pill toggle between Projects and Languages
const { useEffect: useEffectP, useState: useStateP, useRef: useRefP } = React;

function PillToggle({ value, onChange, options }) {
  const ref = useRefP(null);
  const [indicator, setIndicator] = useStateP({ left: 0, width: 0 });

  useEffectP(() => {
    if (!ref.current) return;
    const el = ref.current.querySelector(`[data-val="${value}"]`);
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [value, options.map(o => o.label).join('|')]);

  return (
    <div className="pill-toggle" ref={ref}>
      <div className="indicator" style={{ left: indicator.left, width: indicator.width }} />
      {options.map(o => (
        <button key={o.value} data-val={o.value}
                className={value === o.value ? "active" : ""}
                onClick={() => onChange(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Carousel({ slides, projectId, lang }) {
  const [idx, setIdx] = useStateP(0);
  const n = slides.length;
  useEffectP(() => { setIdx(0); }, [projectId]);

  const go = (d) => setIdx(((idx + d) % n + n) % n);
  const set = (i) => setIdx(i);
  const classFor = (i) => {
    if (i === idx) return "slide active";
    if (i === (idx + 1) % n) return "slide next";
    if (i === (idx - 1 + n) % n) return "slide prev";
    return "slide hidden";
  };

  return (
    <div className="carousel">
      {slides.map((s, i) => (
        <div key={i} className={classFor(i)}>
          <div className="frame">
            {s.kind === "img" ? (
              <img src={s.src} alt={typeof s.label === 'object' ? s.label[lang] || s.label.en : s.label} style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#05070a' }} />
            ) : (
              <div className={`ph ${s.cls}`}>{typeof s.label === 'object' ? s.label[lang] || s.label.en : s.label}</div>
            )}
          </div>
        </div>
      ))}
      <div className="carousel-controls">
        <div className="dots">
          {slides.map((_, i) => (
            <button key={i} className={i === idx ? "active" : ""} onClick={() => set(i)} aria-label={`Slide ${i+1}`}/>
          ))}
        </div>
        <div className="arrows">
          <button onClick={() => go(-1)} aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={() => go(1)} aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function tr(field, lang) {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || Object.values(field)[0];
}

function ProjectView() {
  const { lang, t } = window.useI18n();
  const [projectIdx, setProjectIdx] = useStateP(0);
  const projects = window.PROJECTS;
  const project = projects[projectIdx];

  return (
    <div>
      <div className="project-card">
        <div className={`bleed ${project.palette}`} />
        <Carousel slides={project.slides} projectId={project.id} lang={lang} />
        <div className="project-meta">
          <div className="tag-row">
            {tr(project.tags, lang).map(x => <span className="tag" key={x}>{x}</span>)}
          </div>
          <h3>{project.name}</h3>
          <p className="desc">{tr(project.description, lang)}</p>
          <div className="stack">
            {project.stack.map(s => <span key={s}>{s}</span>)}
          </div>
          <div className="actions">
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer" className="btn primary">
                {t('visitSite')}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>
            )}
            {!project.url && !project.code && (
              <span className="btn" style={{cursor:'default', opacity:.7}}>{t('caseStudy')}</span>
            )}
          </div>
          <div className="project-counter">
            {String(projectIdx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} · {tr(project.tagline, lang)}
          </div>
        </div>
      </div>

      <div className="project-switcher">
        {projects.map((p, i) => (
          <button key={p.id} className={i === projectIdx ? "active" : ""} onClick={() => setProjectIdx(i)}>
            <span className="num">{lang === 'pt' ? 'PROJETO' : 'PROJECT'} {String(i+1).padStart(2,'0')}</span>
            <span className="ttl">{p.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function LangView() {
  const langs = window.LANGUAGES;
  return (
    <div className="lang-grid">
      {langs.map((l, i) => (
        <div className="lang-card" key={l.full}
             style={{ "--lc-color": l.color, "--lc-tint": l.tint, "--lc-border": `${l.color}55` }}>
          <div className="bloom"/>
          <div className="rank">{String(i+1).padStart(2,'0')}</div>
          <div className="short">{l.short}</div>
          <div className="full">{l.full}</div>
        </div>
      ))}
    </div>
  );
}

function Portfolio() {
  const { t } = window.useI18n();
  const [view, setView] = useStateP("projects");

  return (
    <section id="portfolio">
      <div className="container">
        <div className="portfolio-head">
          <div>
            <span className="eyebrow">{t('eyebrowPortfolio')}</span>
            <h2 className="section-title">{t('portfolioTitle')}</h2>
            <p className="section-sub">{t('portfolioSub')}</p>
          </div>
          <PillToggle
            value={view}
            onChange={setView}
            options={[
              { value: "projects",  label: t('tabProjects') },
              { value: "languages", label: t('tabLanguages') },
            ]}
          />
        </div>

        {view === "projects" ? <ProjectView /> : <LangView />}
      </div>
    </section>
  );
}

window.Portfolio = Portfolio;
