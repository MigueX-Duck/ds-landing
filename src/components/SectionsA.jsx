import React from 'react';
import { t, INDUSTRIES } from '../content';
import { Icon } from './Icons';
import { useReveal, Counter } from './Common';
import { Tweaks } from './Tweaks';

export function Nav({ lang, setLang, scrolled }) {
  return (
    <nav className={"nav" + (scrolled ? " nav--scrolled" : "")}>
      <a href="#top" className="nav__brand">
        <img src="/assets/logo-isotipo.png" alt="Duck Studios" />
        <span className="nav__wordmark">Duck<span>.</span>Studios</span>
      </a>
      <ul className="nav__links">
        <li><a href="#work">{t('nav_work', lang)}</a></li>
        <li><a href="#results">{t('nav_results', lang)}</a></li>
        <li><a href="#process">{t('nav_process', lang)}</a></li>
        <li><a href="#team">{t('nav_team', lang)}</a></li>
      </ul>
      <div className="lang-toggle" role="group" aria-label="Language">
        <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
        <button onClick={() => setLang('es')} className={lang === 'es' ? 'active' : ''}>ES</button>
      </div>
    </nav>);
}

export function ScrollProgress() {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setW(max > 0 ? h.scrollTop / max * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="scroll-progress">
      <div className="scroll-progress__bar" style={{ width: w + "%" }} />
    </div>);
}

export function Hero({ lang }) {
  const [trig, setTrig] = React.useState(false);
  React.useEffect(() => {const t = setTimeout(() => setTrig(true), 350);return () => clearTimeout(t);}, []);

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__eyebrow">
          <span className="dot"></span>
          {t('hero_eyebrow', lang)}
        </div>

        <h1 className="hero__h1">
          {t('hero_h1_a', lang)}
          <br />
          {t('hero_h1_b', lang)}
          <br />
          <span className="y">{t('hero_h1_c', lang)}</span>
        </h1>

        <p className="hero__lead">{t('hero_lead', lang)}</p>

        <div className="hero__counters">
          <div className="counter">
            <div className="counter__num"><Counter target={6} trigger={trig} /></div>
            <div className="counter__label">{t('counter_years', lang)}</div>
          </div>
          <div className="counter">
            <div className="counter__num"><Counter target={50} trigger={trig} /></div>
            <div className="counter__label">{t('counter_brands', lang)}</div>
          </div>
          <div className="counter">
            <div className="counter__num"><Counter target={100} trigger={trig} /></div>
            <div className="counter__label">{t('counter_projects', lang)}</div>
          </div>
          <div className="counter">
            <div className="counter__num"><Counter target={90} suffix="%+" trigger={trig} /></div>
            <div className="counter__label">{t('counter_retention', lang)}</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>{t('scroll_more', lang)}</span>
        <div className="scroll-indicator__line"></div>
      </div>
    </section>);
}

export function WhoWeAre({ lang }) {
  const ref = useReveal();
  const team = [
  { initials: "RB", img: "/assets/team/rachel-basulto.webp", name: "Rachel Basulto", role: { en: "Founder & CEO", es: "Fundadora & CEO" } },
  { initials: "VL", img: "/assets/team/valeria-leiva.webp", name: "Valeria Leiva", role: { en: "Creative Director", es: "Directora Creativa" } },
  { initials: "FA", img: "/assets/team/fabio-apu.webp", name: "Fabio Apu", role: { en: "Head of Marketing", es: "Director de Marketing" } }];

  return (
    <section className="section who section--black" id="team">
      <div className="container reveal" ref={ref}>
        <div className="eyebrow">{t('who_eyebrow', lang)}</div>
        <h2 className="display">{t('who_h', lang)}</h2>

        <div className="who__grid">
          <div>
            {team.map((m, i) =>
            <div key={i} className="team-card">
                <div className="team-avatar">
                  <img src={m.img} alt="" />
                </div>
                <div className="team-card__meta">
                  <span className="team-card__name">{m.name}</span>
                  <span className="team-card__role">{m.role[lang]}</span>
                </div>
              </div>
            )}
          </div>

          <div className="who__desc">
            <p>{t('who_p1', lang)}</p>
            <p><strong>{t('who_p2', lang)}</strong></p>
            <div className="eyebrow" style={{ marginTop: 32, marginBottom: 12, color: 'var(--ds-blue)' }}>
              {t('who_industries', lang)}
            </div>
            <div className="industry-pills">
              {INDUSTRIES.map((ind, i) => <span key={i} className="industry-pill">{ind[lang]}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>);
}

export function WhatYouGet({ lang }) {
  const ref = useReveal();
  const caps = [
  { Icon: Icon.Camera, t: 'cap_av', d: 'cap_av_desc' },
  { Icon: Icon.TrendingUp, t: 'cap_growth', d: 'cap_growth_desc' },
  { Icon: Icon.Target, t: 'cap_paid', d: 'cap_paid_desc' },
  { Icon: Icon.Code, t: 'cap_tech', d: 'cap_tech_desc' }];

  const phases = [
  { num: "01", t: 'phase1', d: 'phase1_desc' },
  { num: "02", t: 'phase2', d: 'phase2_desc' },
  { num: "03", t: 'phase3', d: 'phase3_desc' }];

  return (
    <section className="section what" id="process">
      <div className="container reveal" ref={ref}>
        <div className="eyebrow">{t('what_eyebrow', lang)}</div>
        <h2 className="display">
          {t('what_h_a', lang)}<br />
          <span className="accent">{t('what_h_b', lang)}</span>
        </h2>
        <p className="lead">{t('what_lead', lang)}</p>

        <div className="capabilities">
          {caps.map((c, i) =>
          <div key={i} className="cap-card">
              <div className="cap-icon"><c.Icon /></div>
              <h3 className="cap-card__title">{t(c.t, lang)}</h3>
              <p className="cap-card__desc">{t(c.d, lang)}</p>
            </div>
          )}
        </div>

        <div className="phases">
          {phases.map((p, i) =>
          <React.Fragment key={i}>
              <div className="phase">
                <div className="phase__num">{p.num} · {lang === 'en' ? 'Phase' : 'Fase'}</div>
                <h3 className="phase__title">{t(p.t, lang)}</h3>
                <p className="phase__desc">{t(p.d, lang)}</p>
              </div>
              {i < phases.length - 1 &&
            <div className="phase-arrow"><Icon.ArrowRight /></div>
            }
            </React.Fragment>
          )}
        </div>

        <div className="what__closing">"{t('what_closing', lang)}"</div>
      </div>
    </section>);
}
