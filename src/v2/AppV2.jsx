import React, { useRef } from 'react';
import './v2.css';
import { Ambient, WhatsAppFloat } from './UI';
import {
  Header,
  Hero,
  LogoTicker,
  Pillars,
  Process,
  WhatMakesUsDifferent,
  SuccessStories,
  ContactForm,
  Footer
} from './SectionsV2';

function AppV2() {
  const contactRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="ds-app" data-screen-label="Duck Studios Homepage V2">
      <Ambient />
      <Header currentPage="home" onCtaClick={scrollToContact} />
      <main>
        <Hero onBookClick={scrollToContact} onExploreClick={() => {}} />
        <LogoTicker />
        <Pillars />
        <Process />
        <WhatMakesUsDifferent />
        <SuccessStories />
        <div ref={contactRef}>
          <ContactForm />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default AppV2;
