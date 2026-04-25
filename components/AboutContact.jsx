// About + Contact
function About() {
  const { t } = window.useI18n();
  return (
    <section id="about">
      <div className="container">
        <span className="eyebrow">{t('eyebrowAbout')}</span>
        <h2 className="section-title">{t('aboutTitle')}</h2>
        <p className="section-sub">{t('aboutSub')}</p>

        <div className="about-grid" style={{marginTop: 56}}>
          <div className="about-photo">
            <div className="glare"/>
            <img src="assets/pedro.jpeg" alt="Pedro Guth" />
          </div>
          <div className="about-card">
            <div className="about-copy">
              <p dangerouslySetInnerHTML={{__html: t('aboutP1')}} />
              <p dangerouslySetInnerHTML={{__html: t('aboutP2')}} />
              <p dangerouslySetInnerHTML={{__html: t('aboutP3')}} />
            </div>
          </div>
        </div>

        <div className="about-facts-row">
          <div className="fact">
            <div className="l">{t('factBasedL')}</div>
            <div className="v">{t('factBasedV')}</div>
          </div>
          <div className="fact">
            <div className="l">{t('factFocusL')}</div>
            <div className="v">{t('factFocusV')}</div>
          </div>
          <div className="fact">
            <div className="l">{t('factStackL')}</div>
            <div className="v">TS · React · Next · Node</div>
          </div>
          <div className="fact">
            <div className="l">Status</div>
            <div className="v">{t('factStatusV')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconMail(){return(<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>);}
function IconLinkedin(){return(<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.25h4.5V22H.25V8.25zM8 8.25h4.31v1.89h.06c.6-1.14 2.07-2.33 4.27-2.33 4.56 0 5.4 3 5.4 6.9V22h-4.5v-6.16c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.37 1.6-2.37 3.26V22H8V8.25z"/></svg>);}
function IconGithub(){return(<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.99 3.24 9.22 7.73 10.71.57.1.78-.25.78-.55 0-.27-.01-.98-.02-1.93-3.15.68-3.82-1.52-3.82-1.52-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.39.97 0 1.95.13 2.86.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.81 1.17 3.05 0 4.36-2.66 5.31-5.19 5.59.41.35.77 1.05.77 2.11 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55 4.48-1.49 7.72-5.72 7.72-10.71C23.25 5.48 18.27.5 12 .5z"/></svg>);}
function IconPhone(){return(<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>);}

function CustomSelect({ value, onChange, options, disabled, label }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  
  React.useEffect(() => {
    const clickOut = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", clickOut);
    return () => document.removeEventListener("mousedown", clickOut);
  }, []);

  const selectedOption = options.find(o => o.value === value);

  return (
    <div className={`custom-select-container ${disabled ? 'disabled' : ''}`} ref={ref}>
      <label>{label}</label>
      <div 
        className={`custom-select-trigger ${open ? 'open' : ''}`} 
        onClick={() => !disabled && setOpen(!open)}
      >
        <span>{selectedOption ? selectedOption.label : ''}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      
      {open && (
        <div className="custom-select-dropdown">
          {options.map(opt => (
            <div 
              key={opt.value}
              className={`custom-option ${value === opt.value ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onChange({ target: { value: opt.value } });
                setOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy} title="Copy to clipboard">
      {copied ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      )}
    </button>
  );
}

function Contact() {
  const { t } = window.useI18n();
  const [state, setState] = React.useState({ name:"", email:"", phone:"", topic:"project", message:"" });
  const [status, setStatus] = React.useState(null); // null, 'loading', 'success', 'error'

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');

    try {
      const FORMSPREE_ID = "xyklvggp"; 
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(state)
      });

      if (response.ok) {
        setStatus('success');
        setState({ name:"", email:"", phone:"", topic:"project", message:"" });
        setTimeout(() => setStatus(null), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(null), 6000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus(null), 6000);
    }
  };

  const upd = (k) => (e) => setState({ ...state, [k]: e.target.value });

  const topicOptions = [
    { value: "project", label: t('optProject') },
    { value: "job", label: t('optJob') },
    { value: "freelance", label: t('optFreelance') },
    { value: "collab", label: t('optCollab') },
    { value: "other", label: t('optOther') }
  ];

  return (
    <section id="contact">
      <div className="container">
        <span className="eyebrow">{t('eyebrowContact')}</span>
        <h2 className="section-title" dangerouslySetInnerHTML={{__html: t('contactTitle')}} />
        <p className="section-sub">{t('contactSub')}</p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>{t('directTitle')}</h3>
            <p className="lede">{t('directSub')}</p>

            <a className="contact-row" href="mailto:pedrohaguth943@gmail.com">
              <span className="ic"><IconMail/></span>
              <div><div className="l">{t('lEmail')}</div><div className="v">pedrohaguth943@gmail.com</div></div>
              <CopyButton text="pedrohaguth943@gmail.com" />
            </a>
            <a className="contact-row" href="https://wa.me/5548996894967" target="_blank" rel="noreferrer">
              <span className="ic"><IconPhone/></span>
              <div><div className="l">{t('lPhone')}</div><div className="v">+55 48 99689 4967</div></div>
              <CopyButton text="+5548996894967" />
            </a>
            <a className="contact-row" href="https://www.linkedin.com/in/pedroguthdev/" target="_blank" rel="noreferrer">
              <span className="ic"><IconLinkedin/></span>
              <div><div className="l">{t('lLinkedIn')}</div><div className="v">in/pedroguthdev</div></div>
            </a>
            <a className="contact-row" href="https://www.github.com/pedroguthdev" target="_blank" rel="noreferrer">
              <span className="ic"><IconGithub/></span>
              <div><div className="l">{t('lGithub')}</div><div className="v">github.com/pedroguthdev</div></div>
            </a>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <h3>{t('formTitle')}</h3>
            <p className="lede">{t('formSub')}</p>

            <div className="form-row">
              <div className="field">
                <label>{t('fName')}</label>
                <input type="text" name="name" required value={state.name} onChange={upd('name')} placeholder={t('phName')} disabled={status === 'loading'} />
              </div>
              <div className="field">
                <label>{t('fEmail')}</label>
                <input type="email" name="email" required value={state.email} onChange={upd('email')} placeholder={t('phEmail')} disabled={status === 'loading'} />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label>{t('fPhone')}</label>
                <input type="tel" name="phone" value={state.phone} onChange={upd('phone')} placeholder={t('phPhone')} disabled={status === 'loading'} />
              </div>
              <div className="field">
                <CustomSelect 
                  label={t('fTopic')}
                  value={state.topic}
                  onChange={upd('topic')}
                  options={topicOptions}
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field full">
                <label>{t('fMsg')}</label>
                <textarea name="message" required value={state.message} onChange={upd('message')} placeholder={t('phMsg')} disabled={status === 'loading'} />
              </div>
            </div>

            <div className="submit-row">
              <button type="submit" className={`btn primary ${status === 'loading' ? 'loading' : ''}`} disabled={status === 'loading'}>
                {status === 'loading' ? t('sendingBtn') : t('sendBtn')}
                {status !== 'loading' && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                )}
              </button>
            </div>

            <div className={`form-success ${status === 'success' ? 'show' : ''}`}>{t('sentMsg')}</div>
            <div className={`form-error ${status === 'error' ? 'show' : ''}`}>{t('errorMsg')}</div>
          </form>
        </div>
      </div>
    </section>
  );
}

window.About = About;
window.Contact = Contact;
