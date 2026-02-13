import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#0a1626] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logo-white.png"
              alt="PublicAdis Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-2xl font-bold text-white">PublicAdis</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            <Link
              href="/servicios"
              className="text-white hover:text-amber-300 transition-colors px-3 py-2"
            >
              <i className="fas fa-bullhorn mr-1"></i> Servicios
            </Link>
            <Link
              href="/sectores"
              className="text-white hover:text-amber-300 transition-colors px-3 py-2"
            >
              <i className="fas fa-building mr-1"></i> Sectores
            </Link>
            <Link
              href="/beneficios"
              className="text-white hover:text-amber-300 transition-colors px-3 py-2"
            >
              <i className="fas fa-star mr-1"></i> Beneficios
            </Link>
            <Link
              href="/herramientas"
              className="text-white hover:text-amber-300 transition-colors px-3 py-2"
            >
              <i className="fas fa-tools mr-1"></i> Herramientas
            </Link>
            <Link
              href="/testimonios"
              className="text-white hover:text-amber-300 transition-colors px-3 py-2"
            >
              <i className="fas fa-comment mr-1"></i> Testimonios
            </Link>
            <Link
              href="https://adis.com"
              className="ml-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-search mr-1"></i> Ir a Buscadis
            </Link>
            <Link
              href="/contacto"
              className="ml-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black px-4 py-2 rounded-lg hover:from-amber-600 hover:to-yellow-500 transition-colors flex items-center"
            >
              <i className="fas fa-envelope mr-1"></i> Contáctanos
            </Link>
          </nav>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-3">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/servicios"
                className="text-white hover:text-amber-300 transition-colors px-3 py-2 flex items-center"
              >
                <i className="fas fa-bullhorn mr-2"></i> Servicios
              </Link>
              <Link
                href="/sectores"
                className="text-white hover:text-amber-300 transition-colors px-3 py-2 flex items-center"
              >
                <i className="fas fa-building mr-2"></i> Sectores
              </Link>
              <Link
                href="/beneficios"
                className="text-white hover:text-amber-300 transition-colors px-3 py-2 flex items-center"
              >
                <i className="fas fa-star mr-2"></i> Beneficios
              </Link>
              <Link
                href="/herramientas"
                className="text-white hover:text-amber-300 transition-colors px-3 py-2 flex items-center"
              >
                <i className="fas fa-tools mr-2"></i> Herramientas
              </Link>
              <Link
                href="/testimonios"
                className="text-white hover:text-amber-300 transition-colors px-3 py-2 flex items-center"
              >
                <i className="fas fa-comment mr-2"></i> Testimonios
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link
                  href="https://adis.com"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-search mr-2"></i> Ir a Buscadis
                </Link>
                <Link
                  href="/contacto"
                  className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black px-4 py-2 rounded-lg hover:from-amber-600 hover:to-yellow-500 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-envelope mr-2"></i> Contáctanos
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
