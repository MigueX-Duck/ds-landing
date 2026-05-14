import React, { useState, useEffect, useRef } from 'react';
import { Button, Pill, Icon, AnimatedWave } from './UI';

export function Header({ currentPage = 'home', onCtaClick }) {
  const nav = [
    { href: '#home', label: 'Home', key: 'home' },
    { href: '#audiovisual', label: 'Audiovisual/Graphics', key: 'audiovisual' },
    { href: '#marketing', label: 'Marketing', key: 'marketing' },
    { href: '#software', label: 'Software', key: 'software' },
    { href: '#career', label: 'Career', key: 'career' },
  ];
  return (
    <header className="ds-header">
      <div className="ds-header__inner">
        <a href="#home" className="ds-header__brand">
          <div className="ds-header__logo">
            <img src="/assets/logo-isologo.png" alt="Duck Studios" />
          </div>
        </a>
        <nav className="ds-nav">
          {nav.map(item => (
            <a key={item.key} href={item.href} className={currentPage === item.key ? 'is-active' : ''}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button onClick={onCtaClick} size="md">Get Started</Button>
      </div>
    </header>
  );
}

export function Hero({ onBookClick, onExploreClick }) {
  return (
    <section className="ds-hero" id="home">
      <div className="ds-hero__badge-row">
        <Pill icon={<Icon.Sparkles />} iconRight={<Icon.Sparkles />}>
          Bring your business to the best scale
        </Pill>
      </div>

      <h1 className="ds-hero__h1">
        <span>We hack the norm to</span>
        <span>build brands that</span>
        <span>actually get noticed.</span>
      </h1>

      <div className="ds-hero__wave-center">
        <AnimatedWave gradientId="hero-wave" width={320} height={28} strokeWidth={6} withGlow />
      </div>

      <p className="ds-hero__lead">
        360 marketing, software development, and audiovisual production for brands that want to be seen,
        remembered, and chosen.
      </p>

      <div className="ds-hero__ctas">
        <Button variant="primary" onClick={onBookClick}>Book a meeting</Button>
        <Button variant="outline" onClick={onExploreClick}>Explore our work</Button>
      </div>

      <div className="ds-hero__phones">
        <div className="ds-floating ds-floating--left">
          <div className="ds-floating__spin" />
          <span>Brand impression</span>
        </div>

        <div className="ds-phone ds-phone--left">
          <div className="ds-phone__screen">
            <div className="ds-phone__placeholder">
              <small>Reel</small>
              Coruña
            </div>
          </div>
        </div>
        <div className="ds-phone ds-phone--center">
          <div className="ds-phone__screen">
            <div className="ds-phone__placeholder">
              <small>Featured</small>
              Stattoos
            </div>
          </div>
        </div>
        <div className="ds-phone ds-phone--right">
          <div className="ds-phone__screen">
            <div className="ds-phone__placeholder">
              <small>Reel</small>
              Hi-Tec
            </div>
          </div>
        </div>

        <div className="ds-floating ds-floating--top">
          <div className="ds-floating__spin" />
          <span>Engagement</span>
        </div>
        <div className="ds-floating ds-floating--bottom">
          <div className="ds-floating__spin" />
          <span>Growth</span>
        </div>
      </div>
    </section>
  );
}

export function LogoTicker() {
  const clients = [
    '/assets/clients/bac.png',
    '/assets/clients/conuna.png',
    '/assets/clients/innova.png',
    '/assets/clients/pittier.png',
    '/assets/clients/stattoos.png',
    '/assets/clients/umifem.png',
  ];
  const all = [...clients, ...clients, ...clients];
  return (
    <section className="ds-logos">
      <div className="ds-logos__track">
        {all.map((src, i) => <img key={i} src={src} alt="" />)}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, subtitle, gradientId, align = 'center' }) {
  return (
    <div className={`ds-section-title ${align === 'left' ? 'ds-section-title--left' : ''}`} style={align === 'left' ? { textAlign: 'left' } : null}>
      {eyebrow && <div style={{ marginBottom: 18 }}><Pill>{eyebrow}</Pill></div>}
      <h2>{title}</h2>
      <div className="ds-wave-wrap" style={align === 'left' ? { justifyContent: 'flex-start' } : null}>
        <AnimatedWave gradientId={gradientId} />
      </div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export function Pillars() {
  const pillars = [
    {
      icon: <Icon.Megaphone />,
      title: 'Growth Marketing',
      desc: 'Data-driven strategies, creative content, activations, UGC, influencers, high-converting paid media, and more.',
      color: 'blue',
    },
    {
      icon: <Icon.Code />,
      title: 'Software Development',
      desc: 'Websites, platforms, and systems that automate, scale, and sell.',
      color: 'neutral',
    },
    {
      icon: <Icon.Camera />,
      title: 'Audiovisual Production',
      desc: 'Reels, campaigns, and visual pieces that connect, move, and position your brand.',
      color: 'purple',
    },
  ];
  return (
    <section className="ds-section ds-section--padded">
      <div className="ds-container">
        <SectionTitle
          title={<>Three pillars. One strategy<br/>helping your brand grow.</>}
          subtitle="We have a process, but we use judgment too. Here's what to expect when working with us."
          gradientId="pillars-wave"
        />
        <div className="ds-pillar-grid">
          {pillars.map((p, i) => (
            <div key={i} className={`ds-pillar ds-pillar--${p.color}`}>
              <div className="ds-pillar__icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { num: '01', emoji: '🎯', title: 'We get your reality', desc: 'We analyze your context, team, resources, and goals — no assumptions.' },
    { num: '02', emoji: '📊', title: 'Data-based strategy',  desc: 'We define hypotheses, goals, and actions with intention.' },
    { num: '03', emoji: '🎨', title: 'Measured, creative execution', desc: 'We launch campaigns, activations, & content, all aligned with the bigger picture.' },
    { num: '04', emoji: '📈', title: 'Testing and analysis', desc: "Nothing runs on autopilot. If it works, we scale it. If it doesn't, we fix it." },
    { num: '05', emoji: '🤝', title: "And yes — we'll need you", desc: 'Without feedback and real commitment, no process will work.' },
  ];
  return (
    <section className="ds-section ds-section--padded">
      <div className="ds-container">
        <div className="ds-process">
          <div className="ds-process__left">
            <div style={{ marginBottom: 24 }}>
              <Pill>How It Works</Pill>
            </div>
            <h2 className="ds-process__h2">
              We have a <em>process</em>, but we use judgment too.
            </h2>
            <AnimatedWave gradientId="process-wave" width={240} height={20} strokeWidth={4} variant="compact" />
            <p style={{ color: '#D1D5DB', fontSize: 18, lineHeight: 1.65, fontWeight: 300, marginTop: 28 }}>
              We have a process, but we use judgment too.<br/>
              Here's what to expect when working with us.
            </p>
          </div>

          <div className="ds-process__right">
            <div className="ds-process__line" />
            <div className="ds-process__steps">
              {steps.map((s, i) => (
                <div key={i} className="ds-step">
                  <div className="ds-step__badge">{s.num}</div>
                  <div className="ds-step__body">
                    <div className="ds-step__title">
                      <span className="emoji">{s.emoji}</span>
                      <h3>{s.title}</h3>
                    </div>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ds-stats">
          {[
            { num: '100', suf: '+', label: 'Projects Completed' },
            { num: '50', suf: '+', label: 'Brands served' },
            { num: '6', suf: '+', label: 'Years in the industry' },
            { num: '90', suf: '%+', label: 'Our proud retention ratio' },
          ].map((s, i) => (
            <div key={i} className="ds-stat">
              <div className="ds-stat__num">{s.num}<em>{s.suf}</em></div>
              <div className="ds-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatMakesUsDifferent() {
  const topRow = [
    { color: 'yellow', icon: <Icon.Check />, title: <>We don't guess.<br/>We test.</>, desc: 'Everything starts with data. We create, test, analyze, and improve. Always.' },
    { color: 'blue',   icon: <Icon.Target />, title: 'We think before we execute', desc: 'Clear, open communication to build trust within our community.' },
    { color: 'purple', icon: <Icon.Palette />, title: 'We infuse creativity + technology', desc: "We dive in. We ask questions. We challenge what's obvious. That's what drives real results." },
  ];
  const bottomRow = [
    { color: 'green', icon: <Icon.Check />, title: "No fluff. No smoke. And we don't take on just any project.", desc: "We don't take on just any project. If we don't believe we can deliver real value, we won't take the job." },
    { color: 'pink',  icon: <Icon.Handshake />, title: "We don't work for brands. We work with people.", desc: "We dive in. We ask questions. We challenge what's obvious. That's what drives real results." },
  ];
  return (
    <section className="ds-section ds-section--padded">
      <div className="ds-container">
        <SectionTitle
          title="what makes us different"
          gradientId="diff-wave"
        />
        <div className="ds-diff-grid-3">
          {topRow.map((c, i) => (
            <div key={i} className={`ds-diff ds-diff--${c.color}`}>
              <div className="ds-diff__icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="ds-diff-grid-2">
          {bottomRow.map((c, i) => (
            <div key={i} className={`ds-diff ds-diff--${c.color}`}>
              <div className="ds-diff__icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SuccessStories() {
  const [index, setIndex] = useState(0);
  const stories = [
    {
      tag: 'Case study · UMIFEM',
      title: 'A women-led health brand turned recognizable, scalable, and lovable.',
      quote: "Duck Studios doesn't just deliver creative — they're a real partner. They've moved our brand from quiet to consistently in front of the people we wanted to reach.",
      kpis: [{ v: '+342%', l: 'Reach' }, { v: '4.6x', l: 'Leads/mo' }, { v: '18mo', l: 'Partnership' }],
      bg: 'UMIFEM',
    },
    {
      tag: 'Case study · Hi-Tec',
      title: 'Built the launch playbook for a category-defining tech brand.',
      quote: 'They challenged the obvious and built a launch that actually landed. No fluff. Real outcomes.',
      kpis: [{ v: '+212%', l: 'CTR' }, { v: '3.1x', l: 'Pipeline' }, { v: '$0.34', l: 'CPC' }],
      bg: 'Hi-Tec',
    },
    {
      tag: 'Case study · JBS',
      title: 'A retail wheel-of-fortune that quadrupled foot traffic.',
      quote: 'Strategy, design, software, and content under one roof. That made all the difference for us.',
      kpis: [{ v: '+418%', l: 'Foot Traffic' }, { v: '92k', l: 'Plays' }, { v: '4.8★', l: 'Brand NPS' }],
      bg: 'JBS',
    },
    {
      tag: 'Case study · FIB',
      title: 'A B2B platform reimagined for clarity, conversion, and speed.',
      quote: 'They get the brief on day one and ship what you actually need. Rare.',
      kpis: [{ v: '+76%', l: 'Conversion' }, { v: '-44%', l: 'Bounce' }, { v: '2.1s', l: 'TTI' }],
      bg: 'FIB',
    },
  ];

  const prev = () => setIndex(i => (i === 0 ? stories.length - 1 : i - 1));
  const next = () => setIndex(i => (i === stories.length - 1 ? 0 : i + 1));

  const story = stories[index];

  return (
    <section className="ds-stories ds-section">
      <div className="ds-container">
        <div className="ds-stories__head">
          <div>
            <h2 className="ds-stories__h2">SUCCESS STORIES</h2>
            <div style={{ marginTop: 18, marginBottom: 18 }}>
              <AnimatedWave gradientId="stories-wave" />
            </div>
            <p className="ds-stories__sub">
              What we've achieved with other brands. Real results. No empty promises.
            </p>
          </div>
          <div className="ds-stories__nav">
            <button className="ds-stories__btn" onClick={prev} aria-label="Previous"><Icon.ChevronLeft /></button>
            <button className="ds-stories__btn" onClick={next} aria-label="Next"><Icon.ChevronRight /></button>
          </div>
        </div>

        <div className="ds-stories__progress">
          <div className="ds-stories__progress-bar" style={{ width: `${((index + 1) / stories.length) * 100}%` }} />
        </div>

        <div className="ds-story-card" key={index}>
          <div className="ds-story-card__img">{story.bg}</div>
          <div className="ds-story-card__body">
            <div className="ds-story-card__tag">{story.tag}</div>
            <h3>{story.title}</h3>
            <p className="ds-story-card__quote">"{story.quote}"</p>
            <div className="ds-story-card__metrics">
              {story.kpis.map((k, i) => (
                <div className="ds-story-card__metric" key={i}>
                  <strong>{k.v}</strong>
                  <span>{k.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', service: 'Marketing' });

  const update = key => e => setForm(f => ({ ...f, [key]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="ds-contact" id="contact">
      <div className="ds-container">
        <div className="ds-contact__wrap">
          <h2>Let's build something worth noticing.</h2>
          <p className="subtitle">Tell us about your brand. We'll come back within one business day.</p>

          <form className="ds-form" onSubmit={submit}>
            <div className="ds-form__row">
              <div className="ds-field">
                <label htmlFor="name">Your name</label>
                <input id="name" className="ds-input" value={form.name} onChange={update('name')} placeholder="Jane Doe" required />
              </div>
              <div className="ds-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" className="ds-input" value={form.email} onChange={update('email')} placeholder="jane@brand.com" required />
              </div>
            </div>
            <div className="ds-form__row">
              <div className="ds-field">
                <label htmlFor="company">Company</label>
                <input id="company" className="ds-input" value={form.company} onChange={update('company')} placeholder="Brand name" />
              </div>
              <div className="ds-field">
                <label htmlFor="service">What can we help with?</label>
                <select id="service" className="ds-input" value={form.service} onChange={update('service')}>
                  <option>Marketing</option>
                  <option>Software</option>
                  <option>Audiovisual/Graphics</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div className="ds-field">
              <label htmlFor="message">Tell us about your project</label>
              <textarea id="message" className="ds-textarea" rows="4" value={form.message} onChange={update('message')} placeholder="What are you building? What's the goal?" />
            </div>
            <Button variant="primary" className="ds-form__submit" as="button" type="submit">
              Send it over
            </Button>
            {submitted && (
              <div className="ds-form__success">
                <Icon.Check />
                <span>Got it. We'll be in touch within one business day.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ds-footer">
      <div className="ds-container">
        <div className="ds-footer__grid">
          <div>
            <div className="ds-footer__brand-row">
              <div className="ds-header__logo">
                <img src="/assets/logo-isologo.png" alt="Duck Studios" />
              </div>
            </div>
            <div className="ds-footer__socials">
              <a href="#" aria-label="Instagram"><Icon.Instagram /></a>
              <a href="#" aria-label="Facebook"><Icon.Facebook /></a>
              <a href="#" aria-label="LinkedIn"><Icon.Linkedin /></a>
              <a href="#" aria-label="Threads" style={{ fontWeight: 800, fontSize: 16 }}>@</a>
            </div>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li><Icon.Phone /><span>+506 7104 9909</span></li>
              <li><Icon.Mail /><span>info@duckstudios.net</span></li>
              <li><Icon.MapPin /><span>San Jose, Costa Rica</span></li>
              <li><Icon.MapPin /><span>Florida, United States</span></li>
            </ul>
          </div>
          <div>
            <h4>About us</h4>
            <ul>
              <li><a href="#audiovisual">Audiovisual/Graphics</a></li>
              <li><a href="#marketing">Marketing</a></li>
              <li><a href="#software">Software</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="ds-footer__copy">Copyright © 2026 Duck Studios</div>
      </div>
    </footer>
  );
}
