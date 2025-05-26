import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import DistributionChannelsSidebar from './DistributionChannelsSidebar';
import { distributionChannels } from '@/data/distribution-channels';

const Layout = ({
  children,
  title = 'PublicAdis - Publicidad Digital Efectiva en Cusco',
  description = 'La plataforma publicitaria más completa de Cusco',
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main className="flex-grow pt-12">{children}</main>

      <DistributionChannelsSidebar distributionChannels={distributionChannels} />

      <Footer />
    </div>
  );
};

export default Layout;
