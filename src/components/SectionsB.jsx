import React from 'react';
import { t } from '../content';
import { Icon } from './Icons';
import { useReveal, CounterOnScroll } from './Common';

const PORTFOLIO = [
  { id: 'p1', cat: 'av', label: 'Stattoos · Brand Film', art: 'art-1', span: 'tall' },
  { id: 'p2', cat: 'design', label: 'Coruña · Identity', art: 'art-2' },
  { id: 'p3', cat: 'activations', label: 'BAC · Brand Activation', art: 'art-3', span: 'wide' },
  { id: 'p4', cat: 'software', label: 'Innovia HealthCare · Platform', art: 'art-4' },
  { id: 'p5', cat: 'ads', label: 'Pittier · Spark Ads', art: 'art-5', span: 'tall' },
  { id: 'p6', cat: 'av', label: 'Umifem · Reel Series', art: 'art-6' },
  { id: 'p7', cat: 'design', label: 'Coruña · Packaging', art: 'art-7' },
  { id: 'p8', cat: 'ads', label: 'Meta · Q1 Campaign', art: 'art-8' },
  { id: 'p9', cat: 'software', label: 'Pittier · DTC Store', art: 'art-9', span: 'wide' },
  { id: 'p10', cat: 'activations', label: 'Stattoos · Pop-Up', art: 'art-10' }
];

const FILTERS = [
  { id: 'all', key: 'filter_all' },
  { id: 'av', key: 'filter_av' },
  { id: 'design', key: 'filter_design' },
  { id: 'activations', key: 'filter_activations' },
  { id: 'software', key: 'filter_software' },
  { id: 'ads', key: 'filter_ads' }
];

export function Portfolio({ lang, openLightbox }) {
  const [filter, setFilter] = React.useState('all');
  const ref = useReveal();
  return (
    <section className="section portfolio" id="work">
      <div className="container reveal" ref={ref}>
        <div className="portfolio__head">
          <div>
            <div className="eyebrow">{t('portfolio_eyebrow', lang)}</div>
            <h2 className="display">{t('portfolio_h', lang)}</h2>
            <p className="lead">{t('portfolio_lead', lang)}</p>
          </div>
        </div>
        <div className="filters">
          {FILTERS.map((f) =>
          <button
            key={f.id}
            className={"filter-pill" + (filter === f.id ? " active" : "")}
            onClick={() => setFilter(f.id)}>
              {t(f.key, lang)}
            </button>
          )}
        </div>

        <div className="masonry" style={{ marginTop: 32 }}>
          {PORTFOLIO.map((p) => {
            const visible = filter === 'all' || p.cat === filter;
            const cls = "tile" + (p.span === 'tall' ? ' tile--tall' : '') + (p.span === 'wide' ? ' tile--wide' : '') + (visible ? '' : ' hidden');
            return (
              <div key={p.id} className={cls} onClick={() => visible && openLightbox({ kind: 'portfolio', item: p, lang })}>
                <div className={"tile__art " + p.art}>{p.label.split('·')[0].trim()}</div>
                <div className="tile__overlay">
                  <span className="tile__cat">{t('filter_' + p.cat, lang)}</span>
                  <span className="tile__title">{p.label}</span>
                </div>
              </div>);
          })}
        </div>
      </div>
    </section>);
}

export function Stories({ lang }) {
  const ref = useReveal();
  const stories = [
    {
      client: 'story1_client', industry: 'story1_industry', h: 'story1_h', r: 'story1_r',
      metrics: [{ v: 6, suf: 'K+', label: { en: 'leads generated', es: 'leads generados' } }, { v: 17, suf: '%', label: { en: 'conv. rate', es: 'tasa conv.' } }, { v: 30, suf: 'M+', label: { en: 'impressions', es: 'impresiones' } }]
    },
    {
      client: 'story2_client', industry: 'story2_industry', h: 'story2_h', r: 'story2_r',
      metrics: [{ v: 40, suf: '%', label: { en: 'sales increase', es: 'aumento en ventas' } }, { v: 76, suf: '%', label: { en: 'faster load', es: 'carga más rápida' } }, { v: 334, suf: 'K', label: { en: 'viral reach', es: 'alcance viral' } }]
    },
    {
      client: 'story3_client', industry: 'story3_industry', h: 'story3_h', r: 'story3_r',
      metrics: [{ v: 7, suf: '', label: { en: 'total locations', es: 'locales totales' } }, { v: 250, suf: 'K+', label: { en: 'interactions', es: 'interacciones' } }, { v: 12, suf: 'mo', label: { en: 'scaling time', es: 'tiempo escala' } }]
    },
    {
      client: 'story4_client', industry: 'story4_industry', h: 'story4_h', r: 'story4_r',
      metrics: [{ v: 8.9, suf: 'M', label: { en: 'impressions', es: 'impresiones' } }, { v: 532, suf: '%', label: { en: 'reels growth', es: 'crecimiento reels' } }, { v: 212, suf: '%', label: { en: 'CTR increase', es: 'aumento CTR' } }]
    }
  ];

  return (
    <section className="section stories" id="results">
      <div className="container reveal" ref={ref}>
        <div className="eyebrow">{t('stories_eyebrow', lang)}</div>
        <h2 className="display">{t('stories_h', lang)}</h2>
        <p className="lead">{t('stories_lead', lang)}</p>

        <div className="stories__grid">
          {stories.map((s, i) =>
          <article className="story" key={i}>
              <div className="story__head">
                <span className="story__client">{t(s.client, lang)}</span>
                <span className="story__industry">{t(s.industry, lang)}</span>
              </div>
              <h3 className="story__headline">{t(s.h, lang)}</h3>
              <div className="metric-pills">
                {s.metrics.map((m, j) =>
              <span key={j} className="metric-pill">
                    <CounterOnScroll target={m.v} suffix={m.suf} />
                    <span className="label">{m.label[lang]}</span>
                  </span>
              )}
              </div>
              <p className="story__result">"{t(s.r, lang)}"</p>
            </article>
          )}
        </div>
      </div>
    </section>);
}

export function DashArt({ kind = 'bars' }) {
  if (kind === 'line') {
    return (
      <div className="dash-art dash-art--line">
        <div className="dash-art__chips"><span></span><span></span><span></span><span></span></div>
        <svg className="dash-art__path" viewBox="0 0 400 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#FFBC00" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFBC00" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,150 C 50,140 90,90 140,100 C 200,115 240,40 300,60 C 340,75 380,30 400,20 L 400,200 L 0,200 Z" fill="url(#lg)" />
          <path d="M0,150 C 50,140 90,90 140,100 C 200,115 240,40 300,60 C 340,75 380,30 400,20" fill="none" stroke="#FFBC00" strokeWidth="3" />
          {[[0, 150], [140, 100], [200, 115], [300, 60], [400, 20]].map((p, i) =>
          <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="#FFBC00" />
          )}
        </svg>
      </div>);
  }
  const heights = [40, 60, 35, 78, 52, 88, 64, 92, 70, 96];
  return (
    <div className="dash-art">
      <div className="dash-art__chips"><span></span><span></span><span></span></div>
      <div className="dash-art__bars">
        {heights.map((h, i) => <span key={i} style={{ height: h + '%' }} />)}
      </div>
    </div>);
}

export function Dashboards({ lang, openLightbox }) {
  const ref = useReveal();
  const dashes = [
    { id: 'd1', t: 'd1_title', s: 'd1_sub', kind: 'bars', metric: { v: '8.3×', label: { en: 'ROAS', es: 'ROAS' } } },
    { id: 'd2', t: 'd2_title', s: 'd2_sub', kind: 'line', metric: { v: '+312%', label: { en: 'Conversions', es: 'Conversiones' } } },
    { id: 'd3', t: 'd3_title', s: 'd3_sub', kind: 'line', metric: { v: '47%', label: { en: 'Open rate', es: 'Apertura' } } },
    { id: 'd4', t: 'd4_title', s: 'd4_sub', kind: 'bars', metric: { v: '$0.18', label: { en: 'CPC', es: 'CPC' } } }
  ];

  return (
    <section className="section dashboards">
      <div className="container reveal" ref={ref}>
        <div className="eyebrow">{t('dash_eyebrow', lang)}</div>
        <h2 className="display"><span className="accent">{t('dash_h', lang)}</span></h2>
        <p className="lead">{t('dash_lead', lang)}</p>

        <div className="dashboards__grid">
          {dashes.map((d) =>
          <div key={d.id} className="dashboard" onClick={() => openLightbox({ kind: 'dashboard', item: d, lang })}>
              <DashArt kind={d.kind} />
              <div className="dashboard__metric">
                <span className="small">{d.metric.label[lang]}</span>
                {d.metric.v}
              </div>
              <div className="dashboard__caption">
                <span className="sub">{t(d.s, lang)}</span>
                {t(d.t, lang)}
              </div>
              <div className="dashboard__zoom"><Icon.ZoomIn /></div>
            </div>
          )}
        </div>
      </div>
    </section>);
}

export function Social({ lang }) {
  const ref = useReveal();
  const ts = [
    { q: 't1_quote', n: 't1_name', r: 't1_role', s: 't1_stat' },
    { q: 't2_quote', n: 't2_name', r: 't2_role', s: 't2_stat' },
    { q: 't3_quote', n: 't3_name', r: 't3_role', s: 't3_stat' }
  ];

  const logos = [
    { src: '/assets/clients/bac.png' }, { src: '/assets/clients/conuna.png' },
    { src: '/assets/clients/innova.png' }, { src: '/assets/clients/pittier.png' },
    { src: '/assets/clients/stattoos.png' }, { src: '/assets/clients/umifem.png' },
    { src: '/assets/clients/hitec.webp' }, { src: '/assets/clients/FIB.png' },
    { src: '/assets/clients/prada.png' }, { src: '/assets/clients/frutinsa.webp' },
    { src: '/assets/clients/lumin.avif' }, { src: '/assets/clients/pepes4.png' },
    { src: '/assets/clients/logo-claro-transparencia.png' }, { src: '/assets/clients/dds.png' },
    { text: "Nordica" }
  ];

  return (
    <section className="section social">
      <div className="container reveal" ref={ref}>
        <div className="eyebrow">{t('social_eyebrow', lang)}</div>
        <h2 className="display">{t('social_h', lang)}</h2>
        <p className="lead">{t('social_lead', lang)}</p>

        <div className="testimonials">
          {ts.map((x, i) => {
            const stat = t(x.s, lang);
            const parts = stat.split(' ');
            return (
              <article className="testimonial" key={i}>
                <p className="testimonial__quote">"{t(x.q, lang)}"</p>
                <div className="testimonial__author">{t(x.n, lang)}</div>
                <div className="testimonial__role">{t(x.r, lang)}</div>
                <div className="testimonial__stat"><span className="y">{parts[0]}</span> {parts.slice(1).join(' ')}</div>
              </article>);
          })}
        </div>

        <div className="logo-wall">
          {logos.map((l, i) =>
          l.src ?
          <div key={i} className="logo-cell"><img src={l.src} alt="" /></div> :
          <div key={i} className="logo-cell logo-cell--text">{l.text}</div>
          )}
        </div>
      </div>
    </section>);
}

export function Risk({ lang }) {
  const ref = useReveal();
  const qa = [
    { q: 'q1_q', a: 'q1_a' },
    { q: 'q2_q', a: 'q2_a' },
    { q: 'q3_q', a: 'q3_a' },
    { q: 'q4_q', a: 'q4_a' }
  ];

  return (
    <section className="section risk">
      <div className="container reveal" ref={ref}>
        <div className="eyebrow">{t('risk_eyebrow', lang)}</div>
        <h2 className="display">{t('risk_h', lang)}</h2>

        <div className="risk__grid">
          {qa.map((x, i) =>
          <div key={i} className="qa">
              <p className="qa__q">{t(x.q, lang)}</p>
              <p className="qa__a">{t(x.a, lang)}</p>
            </div>
          )}
        </div>

        <p className="risk__closing">"{t('risk_closing', lang)}"</p>
      </div>
    </section>);
}

export function Closing({ lang }) {
  const ref = useReveal();
  return (
    <section className="section closing">
      <div className="container reveal" ref={ref}>
        <h2 className="closing__h">
          {t('closing_h_a', lang)}<br />
          {t('closing_h_b', lang)}<br />
          <span className="y">{t('closing_h_c', lang)}</span>
        </h2>

        <div className="closing__card">
          <div className="closing__photo">
            <img src="/assets/team/rachel-basulto.webp" alt="Rachel Basulto" />
          </div>
          <div>
            <h3 className="closing__name">Rachel Basulto</h3>
            <div className="closing__role">{t('closing_role', lang)}</div>
            <div className="closing__contacts">
              <a className="closing__btn closing__btn--primary" href="mailto:rachel.basulto@duckstudios.net">
                <Icon.Mail /> {t('btn_email', lang)}
              </a>
              <a className="closing__btn" href="https://wa.me/50671049909">
                <Icon.Phone /> {t('btn_whatsapp', lang)}
              </a>
              <a className="closing__btn" href="https://calendly.com/duckstudios">
                <Icon.Calendar /> {t('btn_book', lang)}
              </a>
            </div>
          </div>
        </div>

        <div className="closing__signoff">{t('signoff', lang)}</div>
      </div>
    </section>);
}

export function Lightbox({ data, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => {if (e.key === 'Escape') onClose();};
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {window.removeEventListener('keydown', onKey);document.body.style.overflow = '';};
  }, [onClose]);

  if (!data) return null;
  const { kind, item, lang } = data;
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label="Close"><Icon.X /></button>
        <div className="lightbox__body">
          {kind === 'portfolio' ?
          <>
              <div className={"tile__art " + item.art} style={{ position: 'absolute', inset: 0, fontSize: 96 }}>
                {item.label.split('·')[0].trim()}
              </div>
              <span className="lightbox__cat">{t('filter_' + item.cat, lang)}</span>
            </> :
          <DashArt kind={item.kind} />
          }
        </div>
        <div className="lightbox__caption">
          {kind === 'portfolio' ?
          <>
              <h4>{item.label}</h4>
              <p>{lang === 'en' ? 'Project preview — click outside to close.' : 'Vista previa — haz clic fuera para cerrar.'}</p>
            </> :
          <>
              <h4>{t(item.t, lang)}</h4>
              <p>{t(item.s, lang)} · {item.metric.label[lang]}: <strong style={{ color: 'var(--ds-yellow)' }}>{item.metric.v}</strong></p>
            </>
          }
        </div>
      </div>
    </div>);
}
