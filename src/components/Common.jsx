import React from 'react';

// useReveal — fade-in/slide-up on enter viewport.
export function useReveal() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add('in');
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -80px 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// Counter — animates value 0 → target over `dur` ms when activated.
export function Counter({ target, suffix = "+", trigger = true, dur = 1800 }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!trigger) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, dur]);
  return <span>{val}<span className="suffix">{suffix}</span></span>;
}

// CounterOnScroll — counter that triggers when its container scrolls in
export function CounterOnScroll({ target, suffix = "+" }) {
  const [trig, setTrig] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setTrig(true); obs.unobserve(el); } });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <span ref={ref}><Counter target={target} suffix={suffix} trigger={trig}/></span>;
}

export function Ambient() {
  const particles = [
    { top: '12%', left: '18%', delay: 0 },
    { top: '22%', left: '78%', delay: 0.8 },
    { top: '48%', left: '34%', delay: 1.6 },
    { top: '62%', left: '88%', delay: 0.4 },
    { top: '78%', left: '12%', delay: 2.2 },
    { top: '36%', left: '54%', delay: 1.2 },
    { top: '88%', left: '64%', delay: 1.9 },
    { top: '14%', left: '46%', delay: 2.8 },
  ];
  return (
    <div className="ds-ambient" aria-hidden="true">
      <div className="ds-ambient__base" />
      <div className="ds-blob ds-blob--yellow" />
      <div className="ds-blob ds-blob--blue" />
      <div className="ds-blob ds-blob--green" />
      <div className="ds-blob ds-blob--purple" />
      {particles.map((p, i) => (
        <span key={i} className="ds-particle" style={{ top: p.top, left: p.left, animationDelay: `${p.delay}s` }} />
      ))}
    </div>
  );
}
