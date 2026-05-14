import React from 'react';
import { useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio } from './TweaksPanel';

export const PALETTES = [
  { name: 'yellow', colors: ['#FFBC00', '#FFD86B', '#F0AE00'] },
  { name: 'blue',   colors: ['#009EFF', '#6FC8FF', '#0080D4'] },
  { name: 'mint',   colors: ['#2DD4A6', '#6FE5C4', '#1FB890'] },
  { name: 'coral',  colors: ['#FF6B5C', '#FFAA9F', '#E85A4D'] },
];

const HEADLINES = ['shout', 'editorial', 'stencil'];
const AMBIENCES = ['theatre', 'constellation', 'quiet'];

function paletteNameFor(colors) {
  if (!colors || !colors.length) return 'yellow';
  const first = String(colors[0]).toUpperCase();
  const hit = PALETTES.find(p => p.colors[0].toUpperCase() === first);
  return hit ? hit.name : 'yellow';
}

export function applyTweaks(tw) {
  const root = document.documentElement;
  const body = document.body;
  const colors = tw.palette && tw.palette.length ? tw.palette : PALETTES[0].colors;
  root.style.setProperty('--ds-yellow', colors[0]);
  root.style.setProperty('--ds-yellow-soft', colors[1] || colors[0]);
  root.style.setProperty('--ds-yellow-hover', colors[2] || colors[0]);
  root.style.setProperty('--ds-gradient-yellow-cta',
    `linear-gradient(135deg, ${colors[1] || colors[0]} 0%, ${colors[0]} 100%)`);
  body.setAttribute('data-accent', paletteNameFor(colors));
  body.setAttribute('data-headline', tw.headline || 'shout');
  body.setAttribute('data-ambience', tw.ambience || 'theatre');
}

export function Tweaks() {
  const defaults = window.TWEAK_DEFAULTS || {
    palette: PALETTES[0].colors,
    headline: 'editorial',
    ambience: 'theatre',
  };
  const [t, setTweak] = useTweaks(defaults);

  React.useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Accent palette">
        <TweakColor
          label="Brand color"
          value={t.palette}
          options={PALETTES.map(p => p.colors)}
          onChange={v => setTweak('palette', v)}
        />
      </TweakSection>

      <TweakSection label="Headline character">
        <TweakRadio
          label="Voice"
          value={t.headline}
          options={HEADLINES}
          onChange={v => setTweak('headline', v)}
        />
        <div style={{
          marginTop: 8, padding: '10px 12px', borderRadius: 10,
          background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.6)',
          fontSize: 11, lineHeight: 1.45, letterSpacing: 0.01,
        }}>
          {t.headline === 'shout' && 'Black weight · ALL CAPS · tight tracking. Agency swagger.'}
          {t.headline === 'editorial' && 'Sentence case · ExtraBold · slightly smaller. Magazine cover.'}
          {t.headline === 'stencil' && 'Light weight · UPPERCASE · tracked out. Architectural.'}
        </div>
      </TweakSection>

      <TweakSection label="Ambience">
        <TweakRadio
          label="Stage"
          value={t.ambience}
          options={AMBIENCES}
          onChange={v => setTweak('ambience', v)}
        />
        <div style={{
          marginTop: 8, padding: '10px 12px', borderRadius: 10,
          background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.6)',
          fontSize: 11, lineHeight: 1.45,
        }}>
          {t.ambience === 'theatre' && 'Signature gradient with floating blobs and particles. Full Duck mood.'}
          {t.ambience === 'constellation' && 'Near-black sky, dot grid, glowing accent stars. Premium tech.'}
          {t.ambience === 'quiet' && 'Solid near-black, blobs dimmed, no theatrics. Boardroom-ready.'}
        </div>
      </TweakSection>
    </TweaksPanel>
  );
}
