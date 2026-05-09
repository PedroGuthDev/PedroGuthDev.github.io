import React from "react";
import { useI18n } from "../hooks/useI18n";
import { PROJECTS, LANGUAGES, STATS } from "../data";

export function Hero() {
  const { t, lang } = useI18n();
  const featured = PROJECTS[0];
  const tags = LANGUAGES.slice(0, 5);

  return (
    <section id="overview" className="hero">
      <div className="hero-inner container">
        {/* 1. Narrative (Headline + Stack) */}
        <div className="hero-copy">
          <span className="eyebrow">{t("eyebrowHero")}</span>
          <figure className="portrait-frame">
            <img src="/assets/pedro-hero.webp" alt="Pedro Guth" />
            <figcaption>{t("portraitCaption")}</figcaption>
          </figure>
          <p
            className="lead"
            dangerouslySetInnerHTML={{ __html: t("heroLead") }}
          />
          <div className="stack-rail" aria-label={t("stackLabel")}>
            {tags.map((item) => (
              <span key={item.full}>{item.short}</span>
            ))}{" "}
            <div className="hero-actions hero-actions--rail">
              <a href="#portfolio" className="btn primary">
                {t("ctaPortfolio")}
              </a>
              <a href="#contact" className="btn ghost">
                {t("ctaContact")}
              </a>
            </div>
          </div>
        </div>

        {/* 2. Shipped Log (The Spine) */}
        <div className="proof-log" aria-label={t("proofLabel")}>
          {STATS.map((stat) => (
            <div key={stat.key} className="log-entry">
              <span className="log-val">{stat.val}</span>
              <span className="log-label">{t(stat.label)}</span>
            </div>
          ))}
        </div>

        {/* 3. Visual Proof (Feature + Actions) */}
        <div className="hero-board" aria-label={t("heroBoardLabel")}>
          <div className="board-top">
            <h1>{t("heroTitle")}</h1>
            <a
              className="featured-work"
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("featuredWork")}: ${featured.name}`}
            >
              <span className="work-kicker">{t("featuredWork")}</span>
              <strong>{featured.name}</strong>
              <span>{featured.tagline[lang] || featured.tagline.en}</span>
              <img
                src={featured.slides[0].src}
                alt={
                  featured.slides[0].label[lang] || featured.slides[0].label.en
                }
                width="640"
                height="400"
              />
            </a>
          </div>
          <div className="hero-actions hero-actions--board">
            <a href="#portfolio" className="btn primary">
              {t("ctaPortfolio")}
            </a>
            <a href="#contact" className="btn ghost">
              {t("ctaContact")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
