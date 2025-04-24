import React from 'react';
import Layout from '../src/components/Layout';
import Hero from '../src/components/Hero';
import Benefits from '../src/components/Benefits';
import Sectors from '../src/components/Sectors';
import Services from '../src/components/Services';
import BusinessTools from '../src/components/BusinessTools';
import Contact from '../src/components/Contact';

export default function Home() {
  return (
    <Layout
      title="PublicAdis | Plataforma Publicitaria Premium en Cusco"
      description="La plataforma publicitaria más completa de Cusco que impulsa tus ventas en todos los canales de forma efectiva"
    >
      <Hero />
      <Benefits />
      <Sectors />
      <Services />
      <BusinessTools />
      <Contact />
    </Layout>
  );
}
