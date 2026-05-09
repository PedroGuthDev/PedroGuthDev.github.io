import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useI18n } from './hooks/useI18n';
import { NAV_SECTIONS } from './data';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About, Contact } from './components/AboutContact';

function Navbar() {
  const [active, setActive] = useState("overview");
  const [scrolled, setScrolled] = useState(false);
  const { lang, t, setLang } = useI18n();

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-42% 0px -52% 0px" });

    NAV_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const labels = {
    overview: t("navOverview"),
    portfolio: t("navPortfolio"),
    about: t("navAbout"),
    contact: t("navContact"),
  };

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar" aria-label={t("primaryNav")}>
        <a className="brand" href="#overview" aria-label="Pedro Guth Dev">Pedro Guth</a>
        <div className="nav-links">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={active === section.id ? "page" : undefined}
            >
              {labels[section.id]}
            </a>
          ))}
        </div>
        <div className="lang-toggle" aria-label={t("languageLabel")}>
          <button type="button" className={lang === "pt" ? "active" : ""} aria-pressed={lang === "pt"} onClick={() => setLang("pt")}>PT</button>
          <button type="button" className={lang === "en" ? "active" : ""} aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
        </div>
      </nav>
    </header>
  );
}

export default function App() {
  const { t } = useI18n();

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("motion-ready");

    const revealTargets = [
      ...document.querySelectorAll(
        "section:not(.hero) .section-head, .project-card, .project-switcher, .lang-card, .about-photo, .about-copy, .fact, .contact-info, .contact-form"
      ),
    ];

    revealTargets.forEach((el, index) => {
      el.classList.add("reveal");
      el.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });

    if (reduceMotion) {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.14 });

    revealTargets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">{t("skipToContent")}</a>
      <div className="site-backdrop" aria-hidden="true" />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Pedro Guth · {t("footer")}
        </div>
      </footer>
    </>
  );
}
