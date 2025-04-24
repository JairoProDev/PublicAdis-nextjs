import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // When menu state changes, toggle body overflow to prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      href: '#services',
      icon: 'fa-rocket',
      label: 'Servicios',
    },
    {
      href: '#sectors',
      icon: 'fa-building',
      label: 'Sectores',
    },
    {
      href: '#benefits',
      icon: 'fa-star',
      label: 'Beneficios',
    },
    {
      href: '#businessTools',
      icon: 'fa-tools',
      label: 'Herramientas',
    },
    {
      href: '#testimonials',
      icon: 'fa-comment-alt',
      label: 'Testimonios',
    },
  ];

  const socialLinks = [
    { icon: 'fa-whatsapp', href: 'https://wa.me/937054328', label: 'WhatsApp' },
    {
      icon: 'fa-facebook-f',
      href: 'https://www.facebook.com/publicadis',
      label: 'Facebook',
    },
    {
      icon: 'fa-instagram',
      href: 'https://www.instagram.com/publicadis',
      label: 'Instagram',
    },
    { icon: 'fa-tiktok', href: 'https://www.tiktok.com/@publicadis', label: 'TikTok' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white">
                <span className="font-bold">P</span>
              </div>
              <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                PublicAdis
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 px-2 py-1 rounded-md transition-colors ${
                      isScrolled
                        ? 'text-gray-700 hover:text-blue-600'
                        : 'text-white hover:text-amber-500'
                    }`}
                  >
                    <i className={`fas ${item.icon} text-sm`}></i>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://buscadis.com"
              className={`px-3 py-1.5 rounded-md border transition-colors ${
                isScrolled
                  ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-blue-600'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-search mr-1.5"></i>
              Ir a Buscadis
            </a>
            <Link
              href="/contacto"
              className="px-3 py-1.5 rounded-md bg-gradient-to-r from-yellow-500 to-amber-600 text-white hover:shadow-md transition-shadow"
            >
              <i className="fas fa-envelope mr-1.5"></i>
              Contáctanos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-xl"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <div
              className={`w-6 h-5 relative flex flex-col justify-between ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              <span
                className={`w-full h-0.5 rounded-full transform transition-transform duration-300 ${isMenuOpen ? 'bg-gray-800 rotate-45 translate-y-2' : isScrolled ? 'bg-gray-800' : 'bg-white'}`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full transition-opacity duration-300 ${isMenuOpen ? 'bg-gray-800 opacity-0' : isScrolled ? 'bg-gray-800' : 'bg-white'}`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full transform transition-transform duration-300 ${isMenuOpen ? 'bg-gray-800 -rotate-45 -translate-y-2' : isScrolled ? 'bg-gray-800' : 'bg-white'}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <div className="container mx-auto px-4 py-6">
          <nav className="mb-8">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center text-lg py-2 text-gray-800 border-b border-gray-100"
                    onClick={closeMenu}
                  >
                    <i className={`fas ${item.icon} w-8 text-blue-600`}></i>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contacto"
                  className="flex items-center text-lg py-2 text-amber-500 border-b border-gray-100"
                  onClick={closeMenu}
                >
                  <i className="fas fa-envelope w-8"></i>
                  <span>Contáctanos</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <i className={`fab ${social.icon}`}></i>
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full shadow-md mx-auto w-max">
            <i className="fas fa-crown"></i>
            <span className="font-medium">Publicidad Premium</span>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://buscadis.com"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-search mr-1.5"></i>
              Ir a Buscadis
            </a>
          </div>
        </div>
      </div>

      {/* Overlay - only shown when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Header;
