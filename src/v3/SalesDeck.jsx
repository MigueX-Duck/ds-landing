import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './SalesDeck.css';
import { Ambient, Icon, Button, Pill, AnimatedWave } from '../v2/UI';
import { LogoTicker, SuccessStories } from '../v2/SectionsV2';

const Slide = ({ children, className = '', id }) => (
  <section className={`slide ${className}`} id={id}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="slide-content"
    >
      {children}
    </motion.div>
  </section>
);

const SalesDeck = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Example: ?client=AwesomeBrand
  const [clientName, setClientName] = useState('Your Brand');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const client = params.get('client');
    if (client) setClientName(client);
  }, []);

  return (
    <div className="deck-container">
      <div className="deck-progress" style={{ scaleX }} />
      <Ambient />

      {/* Slide 1: Welcome */}
      <Slide className="slide--intro" id="welcome">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src="/assets/logo-isologo.png" alt="Duck Studios" style={{ height: 100, marginBottom: 40 }} />
          </motion.div>
          <Pill icon={<Icon.Sparkles />}>Tailored Strategic Proposal</Pill>
          <h2 className="ds-hero__h1" style={{ marginTop: 24 }}>
            <span>Hacking the norm</span>
            <span style={{ color: 'var(--ds-yellow)' }}>for {clientName}.</span>
          </h2>
          <p className="ds-hero__lead">
            A digital ecosystem built to scale your business through data-driven creativity.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ marginTop: 60, opacity: 0.5 }}
          >
            <Icon.ArrowRight style={{ transform: 'rotate(90deg)', width: 32 }} />
            <p className="ds-label">Scroll to begin</p>
          </motion.div>
        </div>
      </Slide>

      {/* Slide 2: The Why */}
      <Slide id="why">
        <div className="ds-section-title">
          <Pill>Our Vision</Pill>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 72px)', textAlign: 'center' }}>We don't just build brands.<br/>We build <span style={{ color: 'var(--ds-blue)' }}>attention ecosystems.</span></h2>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '32px 0' }}>
            <AnimatedWave width={400} gradientId="why-wave" />
          </div>
          <p className="ds-lead" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            In a world of noise, being generic is the fastest way to become invisible.
            At Duck Studios, we merge **Marketing**, **Technology**, and **Visual Arts** to create unfair advantages.
          </p>
        </div>
      </Slide>

      {/* Slide 3: The Pillars */}
      <Slide className="slide--pillars" id="pillars">
        <div className="ds-section-title--left">
          <Pill>The Core</Pill>
          <h2>The Duck Ecosystem</h2>
        </div>
        <div className="pillars-grid-presentation">
          {[
            {
              icon: <Icon.Megaphone />,
              title: 'Growth Marketing',
              desc: 'Beyond social media. We create conversion engines using paid media, UGC, and high-impact activations.',
              color: 'blue'
            },
            {
              icon: <Icon.Code />,
              title: 'Custom Software',
              desc: 'We build the tools you need to automate your growth and simplify your operations.',
              color: 'yellow'
            },
            {
              icon: <Icon.Camera />,
              title: 'Visual Arts',
              desc: 'High-end audiovisual production that positions your brand as a leader in your industry.',
              color: 'purple'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="deck-card"
              style={{ borderTop: `4px solid var(--ds-${item.color === 'yellow' ? 'yellow' : item.color})` }}
            >
              <div className="ds-pillar__icon" style={{ background: `var(--ds-${item.color === 'yellow' ? 'yellow' : item.color})` }}>
                {item.icon}
              </div>
              <h3 style={{ marginTop: 24, fontSize: 28, fontWeight: 800 }}>{item.title}</h3>
              <p style={{ marginTop: 16, fontSize: 18, color: 'var(--ds-gray-200)', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Slide>

      {/* Slide 4: Case Studies (Reuse V2 carousel but in a full slide) */}
      <Slide id="proof" className="slide--proof">
        <div className="ds-section-title">
          <Pill>Proof of Concept</Pill>
          <h2>Real Brands. Real Growth.</h2>
        </div>
        <div style={{ width: '100%', marginTop: 40 }}>
           <SuccessStories />
        </div>
      </Slide>

      {/* Slide 5: The Numbers */}
      <Slide className="slide--stats" id="stats">
        <div className="ds-section-title">
          <Pill>By The Numbers</Pill>
          <h2>Efficiency you can measure.</h2>
        </div>
        <div className="ds-stats" style={{ marginTop: 60, border: 'none' }}>
           {[
            { num: '4.6', suf: 'x', label: 'Average Lead Increase' },
            { num: '342', suf: '%', label: 'Growth in Reach' },
            { num: '100', suf: '+', label: 'Projects Shipped' },
            { num: '90', suf: '%', label: 'Client Retention' },
          ].map((s, i) => (
            <div key={i} className="ds-stat">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="ds-stat__num"
                style={{ fontSize: 'clamp(48px, 6vw, 100px)' }}
              >
                {s.num}<em style={{ color: 'var(--ds-yellow)' }}>{s.suf}</em>
              </motion.div>
              <div className="ds-stat__label" style={{ fontSize: 18, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </Slide>

      {/* Slide 6: Closing */}
      <Slide id="closing">
        <div className="deck-card text-center" style={{ maxWidth: 900, margin: '0 auto', padding: '80px 40px' }}>
          <Pill>Next Steps</Pill>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 64px)', margin: '24px 0' }}>Ready to <span style={{ color: 'var(--ds-yellow)' }}>hack the norm</span>?</h2>
          <p className="ds-lead">
            This proposal is designed to evolve with your brand. Let's schedule a session to refine the roadmap and begin execution.
          </p>
          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center', gap: 20 }}>
            <Button variant="primary" size="lg">Accept Proposal</Button>
            <Button variant="outline" size="lg">Download PDF</Button>
          </div>
        </div>
        <div style={{ marginTop: 80, textAlign: 'center' }}>
          <LogoTicker />
        </div>
      </Slide>

      <footer className="ds-footer" style={{ scrollSnapAlign: 'end', minHeight: 'auto', padding: '40px 0' }}>
         <div className="ds-container text-center">
            <p className="ds-label">Duck Studios — Private & Confidential — 2026</p>
         </div>
      </footer>
    </div>
  );
};

export default SalesDeck;
