import React from 'react';
import { t } from '../content';
import { Icon } from './Icons';
import { useReveal, CounterOnScroll } from './Common';

const PORTFOLIO = [
  { id: 'p2', cat: 'design', label: 'Pho · Social Media', img: '/assets/portfolio/diseno/design-1.jpg' },
  { id: 'p7', cat: 'design', label: 'Pho · Social Media', img: '/assets/portfolio/diseno/design-2.jpg' },
  { id: 'p11', cat: 'activations', label: 'JB\'s Burgers · Event Branding', img: '/assets/portfolio/jb-golf-1.jpg' },
  { id: 'p12', cat: 'activations', label: 'JB\'s Burgers · Event Branding', img: '/assets/portfolio/jb-golf-2.jpg', span: 'wide', hideFromAll: true },
  { id: 'p13', cat: 'activations', label: 'JB\'s Burgers · Event Branding', img: '/assets/portfolio/jb-golf-3.jpg', hideFromAll: true },
  { id: 'p14', cat: 'design', label: 'JB\'s Burgers · Social Media', img: '/assets/portfolio/diseno/design-3.jpg', span: 'tall', hideFromAll: true },
  { id: 'p15', cat: 'design', label: 'Hi-Tec · Packaging', img: '/assets/portfolio/diseno/design-7.jpg', hideFromAll: true },
  { id: 'p16', cat: 'design', label: 'Hi-Tec · Variety', img: '/assets/portfolio/diseno/design-9.jpg', span: 'tall', hideFromAll: true },
  { id: 'p17', cat: 'design', label: 'JB\'s Burgers · Super Bowl Promo', img: '/assets/portfolio/diseno/design-8.jpg', span: 'wide', hideFromAll: true },
  { id: 'p18', cat: 'design', label: 'Hi-Tec · Features', img: '/assets/portfolio/diseno/design-6.jpg', span: 'wide', hideFromAll: true },
  { id: 'p19', cat: 'design', label: 'Tacos El Güero · Social Graphics', img: '/assets/portfolio/diseno/design-4.jpg', hideFromAll: true },
  { id: 'p20', cat: 'design', label: 'Duck Studios · Mother\'s Day', img: '/assets/portfolio/diseno/design-5.jpg', hideFromAll: true },
  { id: 'p21', cat: 'design', label: 'Pepperoni\'s · Campaign', img: '/assets/portfolio/diseno/design-10.jpg', hideFromAll: true },
  { id: 'p22', cat: 'design', label: 'Pepperoni\'s · Visuals', img: '/assets/portfolio/diseno/design-11.jpg', span: 'tall', hideFromAll: true },
  { id: 'p23', cat: 'design', label: 'Pepperoni\'s · Content', img: '/assets/portfolio/diseno/design-12.jpg', hideFromAll: true },
  { id: 'p24', cat: 'design', label: 'Pepperoni\'s · Lifestyle', img: '/assets/portfolio/diseno/design-13.jpg', span: 'wide', hideFromAll: true },
  { id: 'p25', cat: 'design', label: 'Pepperoni\'s · Promo', img: '/assets/portfolio/diseno/design-14.jpg', hideFromAll: true },
  { id: 'p26', cat: 'av', label: 'Rest Zone · Reel', video: '/assets/portfolio/audiovisual/suite-ingles.mp4', img: '/assets/portfolio/audiovisual/suite-ingles-preview.png', span: 'tall' },
  { id: 'p27', cat: 'av', label: 'Pepperoni\'s · World Pizza Day', video: '/assets/portfolio/audiovisual/pepperoni-pizza-reel.mp4', img: '/assets/portfolio/audiovisual/pepperoni-pizza-preview.png', span: 'tall' },
  { id: 'p28', cat: 'av', label: 'Stattoos · Promo Video', driveUrl: 'https://drive.google.com/file/d/19qD-HcMx_eFPqn4mPr02tjRfSQDK19kg/preview', img: '/assets/portfolio/audiovisual/statto2-preview.png', span: 'wide' },
  { id: 'p30', cat: 'av', label: 'INNOVIA · Success Stories', driveUrl: 'https://drive.google.com/file/d/1oAL1LLmDG8C41KBUJrrr4cRXWRMWd0Pg/preview', img: '/assets/portfolio/audiovisual/TestimoniosMMA-preview.jpeg', span: 'tall' },
  { id: 'p31', cat: 'av', label: 'UMIFEM · Expert Reel', driveUrl: 'https://drive.google.com/file/d/1s8E_81rwAABlejrJaHQEzHUIATRw8D-0/preview', img: '/assets/portfolio/audiovisual/medico-preview.png', span: 'tall' },
  { id: 'p32', cat: 'av', label: 'Stattoos · Brand Reel', driveUrl: 'https://drive.google.com/file/d/1iRQkoAu6JSQ8QxeiMrxw26nay-zukDoA/preview', img: '/assets/portfolio/audiovisual/statoo1-preview.png', span: 'tall' },
  { id: 'p33', cat: 'av', label: '1949 · Brand Reel', driveUrl: 'https://drive.google.com/file/d/1mhtF-c7NgTAMuvrBk1vKcWz7o0VCZqgF/preview', img: '/assets/portfolio/audiovisual/1949-preview.png', span: 'tall' },
  { id: 'p34', cat: 'av', label: 'Pepperoni\'s · Brand Video', driveUrl: 'https://drive.google.com/file/d/1kbnjBZenLYAYVonJbi8h2x284paaFq80/preview', img: '/assets/portfolio/audiovisual/peperoni1-preview.png', span: 'wide' },
  { id: 'p35', cat: 'design', label: 'Fun In A Box · Social Media', img: '/assets/portfolio/diseno/design-15.png', span: 'tall', hideFromAll: true },
  { id: 'p36', cat: 'av', label: 'Pepperoni\'s · Promo Spot', driveUrl: 'https://drive.google.com/file/d/111qAa2pTqUZ1BArpFQuh5npWgaGIS-Xf/preview', img: '/assets/portfolio/audiovisual/peperoni1-preview.png' },
  { id: 'p37', cat: 'activations', label: 'BAC · Workshop', img: '/assets/portfolio/activaciones/561993576_18064815938587648_4610743671301470364_n.webp' },
  { id: 'p38', cat: 'activations', label: 'BAC · Workshop', img: '/assets/portfolio/activaciones/562030872_18064815902587648_3642112007552418815_n.webp', span: 'tall', hideFromAll: true },
  { id: 'p39', cat: 'activations', label: 'BAC · Workshop', img: '/assets/portfolio/activaciones/562445077_18064815947587648_5667741104672476160_n.webp', hideFromAll: true },
  { id: 'p40', cat: 'activations', label: 'BAC · Workshop', img: '/assets/portfolio/activaciones/562795433_18064815920587648_3872430261450459819_n.webp', span: 'wide', hideFromAll: true },
  { id: 'p41', cat: 'activations', label: 'BAC · Workshop', img: '/assets/portfolio/activaciones/562860414_18064815911587648_1403026327103440349_n.webp', hideFromAll: true },
  { id: 'p42', cat: 'activations', label: 'BAC · Workshop', img: '/assets/portfolio/activaciones/563751639_18064815929587648_1441748058425124453_n.webp', hideFromAll: true },
  { id: 'p45', cat: 'activations', label: 'Hi-Tec · Lanzamiento Guatemala', driveUrl: 'https://drive.google.com/file/d/1NTfvXmIXRuIksngQslPLHfbhTteyR4RC/preview', img: '/assets/portfolio/activaciones/hitec1-preview.png', span: 'tall' }
];

const FILTERS = [
  { id: 'all', key: 'filter_all' },
  { id: 'av', key: 'filter_av' },
  { id: 'design', key: 'filter_design' },
  { id: 'activations', key: 'filter_activations' }
];

export function Portfolio({ lang, openLightbox }) {
  const [filter, setFilter] = React.useState('all');
  const ref = useReveal();

  const randomAllProjects = React.useMemo(() => {
    const allFiltered = PORTFOLIO.filter(p => !p.hideFromAll);
    return [...allFiltered].sort(() => 0.5 - Math.random()).slice(0, 9);
  }, []);

  const displayItems = React.useMemo(() => {
    if (filter === 'all') {
      return randomAllProjects;
    }
    return PORTFOLIO.filter(p => p.cat === filter);
  }, [filter, randomAllProjects]);

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
          {displayItems.map((p) => {
            const cls = "tile" + (p.span === 'tall' ? ' tile--tall' : '') + (p.span === 'wide' ? ' tile--wide' : '');
            return (
              <div key={p.id} className={cls} onClick={() => openLightbox({ kind: 'portfolio', item: p, lang })}>
                <div className={"tile__art " + (p.art || (p.video || p.driveUrl ? "art-av" : ""))}>
                  {p.img && <img src={p.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                  {!p.img && <span>{p.label.split('·')[0].trim()}</span>}
                  {(p.video || p.driveUrl) && <Icon.Play style={{ position: 'absolute', width: 48, height: 48, color: 'white', opacity: 0.8, zIndex: 2 }} />}
                </div>
                <div className="tile__overlay">
                  <span className="tile__cat">{t('filter_' + p.cat, lang)}</span>
                  <span className="tile__title">{p.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
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
    { id: 'd5', tRaw: 'Masividad', sRaw: 'Meta Ads', kind: 'img', img: '/assets/portfolio/meta/meta1.jpeg', metric: { v: '2,095', label: { en: 'CONVERSACIONES INICIADAS', es: 'CONVERSACIONES INICIADAS' } } },
    { id: 'd6', tRaw: 'Conversiones · High Ticket', sRaw: 'Meta Ads', kind: 'img', img: '/assets/portfolio/meta/meta2.jpeg', metric: { v: '$12.37', label: { en: 'COSTO POR LEAD', es: 'COSTO POR LEAD' } } },
    { id: 'd7', tRaw: 'Conversiones · High Ticket', sRaw: 'Google Ads', kind: 'img', img: '/assets/portfolio/meta/meta3.png', metric: { v: '52 CONVERSIONES', label: { en: '· $185 CPL', es: '· $185 CPL' } } }
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
              {d.img ? <img src={d.img} alt="" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}} /> : <DashArt kind={d.kind} />}
              <div className="dashboard__metric">
                <span className="small">{d.metric.label[lang]}</span>
                {d.metric.v}
              </div>
              <div className="dashboard__caption" style={{ background: 'rgba(11, 14, 23, 0.85)', padding: '10px 15px', borderRadius: '8px' }}>
                {d.sRaw && <span className="sub">{d.sRaw}</span>}
                {!d.sRaw && d.s && <span className="sub">{t(d.s, lang)}</span>}
                {d.tRaw || t(d.t, lang)}
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
  const [showAll, setShowAll] = React.useState(false);
  const ts = [
    { q: 't1_quote', n: 't1_name', r: 't1_role', s: 't1_stat', link: 'https://www.instagram.com/peperonnisexpresscr/' },
    { q: 't2_quote', n: 't2_name', r: 't2_role', s: 't2_stat', link: 'https://www.instagram.com/pradalabcr/' },
    { q: 't3_quote', n: 't3_name', r: 't3_role', s: 't3_stat', link: 'https://www.instagram.com/pradadent/' },
    { q: 't4_quote', n: 't4_name', r: 't4_role', s: 't4_stat', link: 'https://www.instagram.com/allanghm/' },
    { q: 't5_quote', n: 't5_name', r: 't5_role', s: 't5_stat', link: 'https://www.instagram.com/innoviahealthcare/' },
    { q: 't6_quote', n: 't6_name', r: 't6_role', s: 't6_stat', link: 'https://www.instagram.com/hitec_cr/' },
    { q: 't7_quote', n: 't7_name', r: 't7_role', s: 't7_stat', link: 'https://www.instagram.com/funinaboxcr/' },
    {
      q: 't8_quote', n: 't8_name', r: 't8_role', s: 't8_stat',
      links: [
        { label: 'Prada Lab', url: 'https://www.instagram.com/pradalabcr/' },
        { label: 'Prada Dent', url: 'https://www.instagram.com/pradadent/' }
      ]
    },
    { q: 't9_quote', n: 't9_name', r: 't9_role', s: 't9_stat', link: 'https://www.instagram.com/umifemcr/' },
    { q: 't10_quote', n: 't10_name', r: 't10_role', s: 't10_stat', link: 'https://www.instagram.com/drope2886/' },
    { q: 't11_quote', n: 't11_name', r: 't11_role', s: 't11_stat', link: 'https://www.instagram.com/wmonge01/' },
    { q: 't12_quote', n: 't12_name', r: 't12_role', s: 't12_stat', link: 'https://www.instagram.com/figuerana/' }
  ];
  const visibleTs = showAll ? ts : ts.slice(0, 4);

  const logos = [
    { src: '/assets/clients/dds.png' },
    { src: '/assets/clients/jbs_new.png', large: true },
    { src: '/assets/clients/hitec_new.png', large: true },
    { src: '/assets/clients/fib_new.png', large: true },
    { src: '/assets/clients/pepes4.png' },
    { src: '/assets/clients/pittier.png' },
    { src: '/assets/clients/prada1.png' },
    { src: '/assets/clients/prada2.png' },
    { src: '/assets/clients/stattoos.png' },
    { src: '/assets/clients/umifem.png' },
    { src: '/assets/clients/bac_new.png' },
    { src: '/assets/clients/va_new.png' },
    { src: '/assets/clients/conuna.png' },
    { src: '/assets/clients/lumin.avif' },
    { src: '/assets/clients/rest_new.png' }
  ];

  return (
    <section className="section social">
      <div className="container reveal" ref={ref}>
        <div className="eyebrow">{t('social_eyebrow', lang)}</div>
        <h2 className="display">{t('social_h', lang)}</h2>
        <p className="lead">{t('social_lead', lang)}</p>

        <div className="testimonials">
          {visibleTs.map((x, i) => {
            const stat = t(x.s, lang);
            const parts = stat.split(' ');
            return (
              <article className="testimonial" key={i}>
                <p className="testimonial__quote">"{t(x.q, lang)}"</p>
                <div className="testimonial__author">
                  {x.links ? (
                    <>
                      <span>{t(x.n, lang)}</span>
                      <span className="testimonial__author-sep"> · </span>
                      <span className="testimonial__author-links">
                        {x.links.map((lnk, idx) => (
                          <React.Fragment key={idx}>
                            {idx > 0 && " & "}
                            <a href={lnk.url} target="_blank" rel="noopener noreferrer" className="testimonial__link">
                              {lnk.label}
                            </a>
                          </React.Fragment>
                        ))}
                      </span>
                    </>
                  ) : x.link ? (
                    <a href={x.link} target="_blank" rel="noopener noreferrer" className="testimonial__link">
                      {t(x.n, lang)}
                    </a>
                  ) : (
                    t(x.n, lang)
                  )}
                </div>
                <div className="testimonial__role">{t(x.r, lang)}</div>
                <div className="testimonial__stat"><span className="y">{parts[0]}</span> {parts.slice(1).join(' ')}</div>
              </article>);
          })}
        </div>

        {ts.length > 4 && (
          <div className="testimonials__actions">
            <button className={`btn-more ${!showAll ? 'btn-more--pulse' : ''}`} onClick={() => setShowAll(!showAll)}>
              {showAll ? (
                <>
                  {t('social_show_less', lang)}
                  <Icon.ChevronUp />
                </>
              ) : (
                <>
                  {t('social_show_more', lang)}
                  <Icon.ChevronDown />
                </>
              )}
            </button>
          </div>
        )}

        <div className="logo-wall">
          {logos.map((l, i) =>
            <div key={i} className={"logo-cell" + (l.large ? " logo-cell--large" : "")}>
              <img src={l.src} alt="" />
            </div>
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
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  if (!data) return null;
  const { kind, item, lang } = data;
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label="Close"><Icon.X /></button>
        <div className="lightbox__body">
          {kind === 'portfolio' ?
            (item.driveUrl ?
              <iframe src={item.driveUrl} width="100%" height="100%" frameBorder="0" allow="autoplay" style={{ border: 'none', minHeight: '60vh', flexGrow: 1 }} allowFullScreen></iframe> :
              item.video ?
                <video src={item.video} controls autoPlay className="lightbox__video" style={{ maxWidth: '100%', maxHeight: '100%' }} /> :
                (item.img ?
                  <img src={item.img} alt="" className="lightbox__img" /> :
                  <div className={"tile__art " + (item.art || "")}>{item.label.split('·')[0].trim()}</div>
                )
            ) :
            (item.img ? <img src={item.img} alt="" className="lightbox__img" style={{maxHeight: '70vh'}} /> : <DashArt kind={item.kind} />)
          }
          {kind === 'portfolio' && <span className="lightbox__cat">{t('filter_' + item.cat, lang)}</span>}
        </div>
        <div className="lightbox__caption">
          {kind === 'portfolio' ?
            <>
              <h4>{item.label}</h4>
              <p>{lang === 'en' ? 'Project preview — click outside to close.' : 'Vista previa — haz clic fuera para cerrar.'}</p>
            </> :
            <>
              <h4>{item.tRaw || t(item.t, lang)}</h4>
              <p>
                {item.sRaw || t(item.s, lang)} · {item.metric.label[lang]}: <strong style={{ color: 'var(--ds-yellow)' }}>{item.metric.v}</strong>
                {item.extra && item.extra.map((ex, i) => (
                  <React.Fragment key={i}>
                    {" · "}{ex.label[lang]}: <strong style={{ color: 'var(--ds-yellow)' }}>{ex.v}</strong>
                  </React.Fragment>
                ))}
              </p>
            </>
          }
        </div>
      </div>
    </div>);
}
