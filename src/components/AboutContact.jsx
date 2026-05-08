import React, { useState } from 'react';
import { useI18n } from '../hooks/useI18n';

export function About() {
  const { t } = useI18n();

  return (
    <section id="about">
      <div className="container">
        <div className="section-head compact">
          <div>
            <span className="eyebrow">{t("eyebrowAbout")}</span>
            <h2 className="section-title">{t("aboutTitle")}</h2>
            <p className="section-sub">{t("aboutSub")}</p>
          </div>
        </div>

        <div className="about-grid">
          <figure className="about-photo">
            <img src="/assets/pedro.jpeg" alt="Pedro Guth" />
          </figure>
          <div className="about-copy">
            <p dangerouslySetInnerHTML={{ __html: t("aboutP1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("aboutP2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("aboutP3") }} />
          </div>
          <div className="about-facts-row">
            <div className="fact">
              <span>{t("factBasedL")}</span>
              <strong>{t("factBasedV")}</strong>
            </div>
            <div className="fact">
              <span>{t("factFocusL")}</span>
              <strong>{t("factFocusV")}</strong>
            </div>
            <div className="fact">
              <span>{t("factStackL")}</span>
              <strong>TS · React · Next · Node</strong>
            </div>
            <div className="fact">
              <span>{t("factStatusL")}</span>
              <strong>{t("factStatusV")}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const { t } = useI18n();

  const handleCopy = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <button type="button" className="copy-btn" onClick={handleCopy} aria-live="polite">
      {copied ? t("copiedBtn") : t("copyBtn")}
    </button>
  );
}

function CustomSelect({ value, onChange, options, disabled, label }) {
  return (
    <label className="field">
      <span>{label}</span>
      <select value={value} onChange={onChange} disabled={disabled} aria-label={label}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}

export function Contact() {
  const { t } = useI18n();
  const [state, setState] = useState({ name: "", email: "", phone: "", topic: "project", message: "" });
  const [status, setStatus] = useState(null);
  const loading = status === "loading";

  const submit = async (event) => {
    event.preventDefault();
    if (loading) return;
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xyklvggp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(state),
      });

      if (!response.ok) throw new Error("Formspree request failed");
      setStatus("success");
      setState({ name: "", email: "", phone: "", topic: "project", message: "" });
    } catch (err) {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(null), 6000);
    }
  };

  const update = (key) => (event) => setState({ ...state, [key]: event.target.value });
  const topicOptions = [
    { value: "project", label: t("optProject") },
    { value: "job", label: t("optJob") },
    { value: "freelance", label: t("optFreelance") },
    { value: "collab", label: t("optCollab") },
    { value: "other", label: t("optOther") },
  ];

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-intro">
            <span className="eyebrow">{t("eyebrowContact")}</span>
            <h2 className="section-title">{t("contactTitle")}</h2>
            <p className="section-sub">{t("contactSub")}</p>

            <div className="contact-info">
              <h3>{t("directTitle")}</h3>
              <p>{t("directSub")}</p>
              <a className="contact-row" href="mailto:pedrohaguth943@gmail.com" aria-label={`${t("lEmail")}: pedrohaguth943@gmail.com`}>
                <span>{t("lEmail")}</span>
                <strong>pedrohaguth943@gmail.com</strong>
                <CopyButton text="pedrohaguth943@gmail.com" />
              </a>
              <a className="contact-row" href="https://wa.me/5548996894967" target="_blank" rel="noopener noreferrer" aria-label={`${t("lPhone")}: +55 48 99689 4967`}>
                <span>{t("lPhone")}</span>
                <strong>+55 48 99689 4967</strong>
                <CopyButton text="+5548996894967" />
              </a>
              <a className="contact-row" href="https://www.linkedin.com/in/pedroguthdev/" target="_blank" rel="noopener noreferrer" aria-label={`${t("lLinkedIn")}: pedroguthdev`}>
                <span>{t("lLinkedIn")}</span>
                <strong>in/pedroguthdev</strong>
              </a>
              <a className="contact-row" href="https://www.github.com/pedroguthdev" target="_blank" rel="noopener noreferrer" aria-label={`${t("lGithub")}: pedroguthdev`}>
                <span>{t("lGithub")}</span>
                <strong>github.com/pedroguthdev</strong>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <h3>{t("formTitle")}</h3>
            <p>{t("formSub")}</p>

            <div className="form-row">
              <label className="field">
                <span>{t("fName")}</span>
                <input type="text" name="name" autocomplete="name" required value={state.name} onChange={update("name")} placeholder={t("phName")} disabled={loading} />
              </label>
              <label className="field">
                <span>{t("fEmail")}</span>
                <input type="email" name="email" autocomplete="email" required value={state.email} onChange={update("email")} placeholder={t("phEmail")} disabled={loading} />
              </label>
            </div>
 
            <div className="form-row">
              <label className="field">
                <span>{t("fPhone")}</span>
                <input type="tel" name="phone" autocomplete="tel" value={state.phone} onChange={update("phone")} placeholder={t("phPhone")} disabled={loading} />
              </label>
              <CustomSelect label={t("fTopic")} value={state.topic} onChange={update("topic")} options={topicOptions} disabled={loading} />
            </div>
 
            <label className="field">
              <span>{t("fMsg")}</span>
              <textarea name="message" required value={state.message} onChange={update("message")} placeholder={t("phMsg")} disabled={loading} autocomplete="off" />
            </label>

            <button type="submit" className="btn primary submit-btn" disabled={loading}>
              {loading ? t("sendingBtn") : t("sendBtn")}
            </button>

            <div className={`form-success ${status === "success" ? "show" : ""}`} role="status" aria-live="polite">{t("sentMsg")}</div>
            <div className={`form-error ${status === "error" ? "show" : ""}`} role="alert">{t("errorMsg")}</div>
          </form>
        </div>
      </div>
    </section>
  );
}
