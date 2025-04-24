import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({
  children,
  title = 'PublicAdis',
  description = 'La plataforma publicitaria más completa de Cusco',
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main className="flex-grow pt-16">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
