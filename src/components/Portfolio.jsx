import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../hooks/useI18n';
import { PROJECTS, LANGUAGES } from '../data';

function PillToggle({ value, onChange, options }) {
  const { t } = useI18n();
  const ref = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current.querySelector(`[data-val="${value}"]`);
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [value, options.map((option) => option.label).join("|")]);

  return (
    <div className="pill-toggle" ref={ref} role="tablist" aria-label={t("portfolioViewLabel")}>
      <div className="indicator" style={{ left: indicator.left, width: indicator.width }} />
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          data-val={option.value}
          role="tab"
          aria-selected={value === option.value}
          className={value === option.value ? "active" : ""}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function Carousel({ slides, projectId, lang }) {
  const { t } = useI18n();
  const [idx, setIdx] = useState(0);
  const n = slides.length;
  const activeLabel = slides[idx].label[lang] || slides[idx].label.en;

  useEffect(() => setIdx(0), [projectId]);

  const go = (step) => setIdx(((idx + step) % n + n) % n);
  
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [idx, n]);

  const classFor = (i) => {
    if (i === idx) return "slide active";
    if (i === (idx + 1) % n) return "slide next";
    return "slide hidden";
  };

  return (
    <div className="carousel" aria-roledescription="carousel" aria-label={activeLabel}>
      <div className="slides-container" aria-live="polite">
        {slides.map((slide, i) => (
          <figure key={slide.src || i} className={classFor(i)} aria-hidden={i !== idx}>
            <img
              src={slide.src}
              alt={slide.label[lang] || slide.label.en}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <figcaption>{slide.label[lang] || slide.label.en}</figcaption>
          </figure>
        ))}
      </div>
      <div className="carousel-controls">
        <div className="dots">
          {slides.map((_, i) => (
            <button
              type="button"
              key={i}
              className={i === idx ? "active" : ""}
              onClick={() => setIdx(i)}
              aria-label={`${t("slideLabel")} ${i + 1}`}
              aria-current={i === idx ? "true" : undefined}
            />
          ))}
        </div>
        <div className="arrows">
          <button type="button" onClick={() => go(-1)} aria-label={t("prevSlide")}>‹</button>
          <button type="button" onClick={() => go(1)} aria-label={t("nextSlide")}>›</button>
        </div>
      </div>
    </div>
  );
}

function tr(field, lang) {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || Object.values(field)[0];
}

function ProjectView() {
  const { lang, t } = useI18n();
  const [projectIdx, setProjectIdx] = useState(0);
  const projects = PROJECTS;
  const project = projects[projectIdx];

  return (
    <div className="project-stage">
      <article className={`project-card ${project.palette}`} aria-labelledby={`project-${project.id}`}>
        <Carousel slides={project.slides} projectId={project.id} lang={lang} />
        <div className="project-meta">
          <div className="tag-row">
            {(project.tags[lang] || project.tags.en).map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
          <h3 id={`project-${project.id}`}>{project.name}</h3>
          <p className="desc">{tr(project.description, lang)}</p>
          <div className="stack">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="actions">
            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn primary">{t("visitSite")}</a>
            ) : (
              <span className="btn ghost">{t("caseStudy")}</span>
            )}
          </div>
          <div className="project-counter">
            {String(projectIdx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} · {tr(project.tagline, lang)}
          </div>
        </div>
      </article>

      <div className="project-switcher" role="tablist" aria-label={t("portfolioViewLabel")}>
        {projects.map((item, i) => (
          <button
            type="button"
            key={item.id}
            role="tab"
            className={i === projectIdx ? "active" : ""}
            onClick={() => setProjectIdx(i)}
            aria-selected={i === projectIdx}
          >
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <span className="ttl">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function LangView() {
  return (
    <div className="lang-grid">
      {LANGUAGES.map((item, i) => (
        <article className="lang-card" key={item.full}>
          <span className="rank">{String(i + 1).padStart(2, "0")}</span>
          <strong>{item.short}</strong>
          <span>{item.full}</span>
          <small>{item.level}</small>
        </article>
      ))}
    </div>
  );
}

export function Portfolio() {
  const { t } = useI18n();
  const [view, setView] = useState("projects");

  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">{t("eyebrowPortfolio")}</span>
            <h2 className="section-title">{t("portfolioTitle")}</h2>
            <p className="section-sub">{t("portfolioSub")}</p>
          </div>
          <PillToggle
            value={view}
            onChange={setView}
            options={[
              { value: "projects", label: t("tabProjects") },
              { value: "languages", label: t("tabLanguages") },
            ]}
          />
        </div>

        {view === "projects" ? <ProjectView /> : <LangView />}
      </div>
    </section>
  );
}
