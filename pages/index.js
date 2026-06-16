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
      title="PublicAdis | Plataforma Publicitaria Multicanal en Perú"
      description="Plataforma publicitaria con presencia en Perú y Latinoamérica que impulsa tus ventas a través de una estrategia multicanal integrada"
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
