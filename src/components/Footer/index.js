import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Company links
  const companyLinks = [
    { href: '/nosotros', label: 'Sobre Nosotros' },
    { href: '/equipo', label: 'Nuestro Equipo' },
    { href: '/carreras', label: 'Trabaja con Nosotros' },
    { href: '/blog', label: 'Blog' },
  ];

  // Services links
  const serviceLinks = [
    { href: '#servicesSection', target: 'inmuebles', label: 'Inmuebles' },
    { href: '#servicesSection', target: 'vehiculos', label: 'Vehículos' },
    { href: '#servicesSection', target: 'empleos', label: 'Empleos' },
    { href: '#servicesSection', target: 'servicios', label: 'Servicios Profesionales' },
    { href: '#servicesSection', target: 'productos', label: 'Productos' },
  ];

  // Resources links
  const resourceLinks = [
    { href: '/recursos/guias', label: 'Guías y Tutoriales' },
    { href: '/recursos/webinars', label: 'Webinars' },
    { href: '/recursos/casos', label: 'Casos de Éxito' },
    { href: '/recursos/documentacion', label: 'Documentación API' },
  ];

  // Tools links
  const toolLinks = [
    {
      href: '#businessToolsSection',
      tool: 'property-valuation',
      icon: 'fa-home',
      label: 'Calculadora Inmobiliaria',
    },
    {
      href: '#businessToolsSection',
      tool: 'roi-calculator',
      icon: 'fa-chart-line',
      label: 'Calculadora ROI',
    },
    {
      href: '#businessToolsSection',
      tool: 'vehicle-price',
      icon: 'fa-car',
      label: 'Precio de Vehículos',
    },
    {
      href: '#businessToolsSection',
      tool: 'salary-compare',
      icon: 'fa-sack-dollar',
      label: 'Comparador Salarial',
    },
    {
      href: '#businessToolsSection',
      tool: 'social-media',
      icon: 'fa-share-nodes',
      label: 'Alcance en Redes',
    },
  ];

  // Social media links
  const socialLinks = [
    { href: 'https://wa.me/937054328', icon: 'fa-whatsapp', label: 'WhatsApp' },
    { href: 'https://www.facebook.com/publicadis', icon: 'fa-facebook-f', label: 'Facebook' },
    { href: 'https://www.instagram.com/publicadis', icon: 'fa-instagram', label: 'Instagram' },
    { href: 'https://www.tiktok.com/@publicadis', icon: 'fa-tiktok', label: 'TikTok' },
    { href: 'https://linkedin.com/company/publicadis', icon: 'fa-linkedin-in', label: 'LinkedIn' },
  ];

  // Scroll to section with specific target
  const scrollToSection = (e, sectionId, targetId = null) => {
    e.preventDefault();

    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

      if (targetId) {
        setTimeout(() => {
          const targetElement = document.querySelector(`[data-target="${targetId}"]`);
          if (targetElement) {
            targetElement.click();
          }
        }, 800);
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/Logo.svg"
              alt="PublicAdis Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-2xl font-bold text-white">PublicAdis</h2>
          </div>

          <div className="text-lg font-medium text-gray-300">
            La plataforma publicitaria líder en Cusco
          </div>

          <div className="md:justify-self-end">
            <h4 className="text-lg font-medium mb-3">Síguenos</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Middle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Empresa</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-xs"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Servicios</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors flex items-center gap-2"
                    onClick={e => scrollToSection(e, link.href, link.target)}
                  >
                    <i className="fas fa-chevron-right text-xs"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Recursos</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-xs"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Herramientas</h3>
            <ul className="space-y-2">
              {toolLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors flex items-center gap-2"
                    onClick={e => scrollToSection(e, link.href, link.tool)}
                  >
                    <i className={`fas ${link.icon} w-5 text-center`}></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <i className="fas fa-location-dot mt-1 text-amber-500"></i>
                <span>Local físico en San Sebastián, Cusco</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <i className="fas fa-phone mt-1 text-amber-500"></i>
                <a href="tel:+51937054328" className="hover:text-white transition-colors">
                  +51 937 054 328
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <i className="fas fa-envelope mt-1 text-primary-orange"></i>
                <a
                  href="mailto:publicadiss@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  publicadiss@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-4">
              <h5 className="font-medium text-gray-300 mb-2">Descarga nuestra app:</h5>
              <a
                href="https://play.google.com/store/apps/details?id=buscadis.publicadis&pli=1"
                className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-google-play"></i>
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} PublicAdis - BuscAdis. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/terminos" className="text-gray-400 hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
