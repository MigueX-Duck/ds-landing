import React from 'react';
import { Nav, ScrollProgress, Hero, WhoWeAre, WhatYouGet } from './components/SectionsA';
import { Ambient } from './components/Common';
import { Portfolio, Stories, Dashboards, Social, Risk, Closing, Lightbox } from './components/SectionsB';
import { Tweaks } from './components/Tweaks';

function App() {
  const [lang, setLang] = React.useState('en');
  const [scrolled, setScrolled] = React.useState(false);
  const [lightbox, setLightbox] = React.useState(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openLightbox = (data) => setLightbox(data);
  const closeLightbox = () => setLightbox(null);

  return (
    <>
      <Ambient />
      <ScrollProgress/>
      <Nav lang={lang} setLang={setLang} scrolled={scrolled}/>
      <Hero lang={lang}/>
      <WhoWeAre lang={lang}/>
      <WhatYouGet lang={lang}/>
      <Portfolio lang={lang} openLightbox={openLightbox}/>
      <Stories lang={lang}/>
      <Dashboards lang={lang} openLightbox={openLightbox}/>
      <Social lang={lang}/>
      <Risk lang={lang}/>
      <Closing lang={lang}/>
      {lightbox && <Lightbox data={lightbox} onClose={closeLightbox}/>}
      <Tweaks/>
    </>
  );
}

export default App;
