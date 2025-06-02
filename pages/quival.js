import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  businessInfo,
  searchProducts,
  getCategories,
  getBrands,
  getFeaturedProducts,
} from '../src/data/quival-catalog';

export default function QuivalCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState('grid'); // 'grid' or 'list'

  const itemsPerPage = 12;

  const categories = getCategories();
  const brands = getBrands();
  const featuredProducts = getFeaturedProducts();

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    return searchProducts(searchQuery, {
      category: selectedCategory,
      brand: selectedBrand,
      inStock: true,
    });
  }, [searchQuery, selectedCategory, selectedBrand]);

  // Paginación
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset página al cambiar filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedBrand]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedBrand('');
  };

  return (
    <>
      <Head>
        <title>{businessInfo.fullName} - Catálogo Digital | PublicAdis</title>
        <meta name="description" content={businessInfo.description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header del Negocio */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo y Título */}
              <div className="flex items-center gap-3">
                <Image
                  src={businessInfo.logo}
                  alt={businessInfo.name}
                  width={100}
                  height={40}
                  className="h-10 w-auto"
                />
                <h1 className="text-xl font-bold text-gray-800">{businessInfo.name}</h1>
              </div>

              {/* Contacto Rápido */}
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${businessInfo.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-green-500 text-white px-3 py-1.5 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span className="hidden sm:inline text-sm">WhatsApp</span>
                </a>
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <i className="fas fa-phone"></i>
                  <span className="hidden sm:inline text-sm">Llamar</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Barra de Búsqueda y Filtros */}
        <section className="bg-white border-b sticky top-0 z-40">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col lg:flex-row gap-3">
              {/* Búsqueda */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Buscar productos, marcas, categorías..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>

              {/* Filtros Rápidos */}
              <div className="flex items-center gap-3">
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Todas las categorías</option>
                  {categories.map(category => (
                    <option key={category.name} value={category.name}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>

                <select
                  value={selectedBrand}
                  onChange={e => setSelectedBrand(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Todas las marcas</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>

                {(selectedCategory || selectedBrand || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <i className="fas fa-times mr-2"></i>
                    Limpiar
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Categorías */}
        {!searchQuery && !selectedCategory && !selectedBrand && (
          <section className="py-4 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-lg font-semibold mb-3 text-gray-700 px-1">Categorías</h2>
              <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {categories.map(category => (
                  <button
                    key={category.name}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setCurrentPage(1); // Reset page when category changes
                    }}
                    className="whitespace-nowrap bg-white text-sm text-gray-700 px-4 py-2 rounded-full shadow-sm hover:bg-blue-500 hover:text-white transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}
        {/* Resultados */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            {/* Barra de Resultados */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {filteredProducts.length}{' '}
                  {filteredProducts.length === 1 ? 'producto' : 'productos'}
                  {selectedCategory && ` en ${selectedCategory}`}
                </h2>
                {selectedBrand && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Marca: {selectedBrand}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setView('grid')}
                  className={`p-2 rounded ${
                    view === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  <i className="fas fa-th-large"></i>
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-2 rounded ${
                    view === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>

            {/* Grid de Productos */}
            {currentProducts.length > 0 ? (
              <div
                className={
                  view === 'grid'
                    ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4'
                    : 'space-y-3'
                }
              >
                {currentProducts.map(product => (
                  <div
                    key={product.id}
                    className={
                      view === 'grid'
                        ? 'bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col'
                        : 'bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex'
                    }
                  >
                    <div
                      className={
                        view === 'grid'
                          ? 'aspect-square relative'
                          : 'w-28 h-28 relative flex-shrink-0'
                      }
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                      />
                      {product.featured && (
                        <span className="absolute top-1 right-1 bg-yellow-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                          Destacado
                        </span>
                      )}
                    </div>

                    <div className="p-2 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="mb-1">
                          <span className="text-xs text-blue-600 font-medium">
                            {product.category}
                          </span>
                          {product.subcategory && (
                            <span className="text-xs text-gray-500 ml-1">
                              • {product.subcategory}
                            </span>
                          )}
                        </div>

                        <h3 className="font-semibold text-gray-800 mb-0.5 text-xs md:text-sm">
                          {product.name}
                        </h3>

                        <div className="text-xs text-gray-600 mb-2">
                          {product.brand && <span className="font-medium">{product.brand}</span>}
                          {product.details && <span className="ml-1">• {product.details}</span>}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-1">
                        <span className="flex items-center text-green-600 text-xs">
                          <i className="fas fa-check-circle mr-1"></i>
                          <span className="hidden md:inline">Disponible</span>
                        </span>

                        <a
                          href={`https://wa.me/${businessInfo.contact.whatsapp.replace(
                            /[^0-9]/g,
                            ''
                          )}?text=Hola, estoy interesado en el producto: ${encodeURIComponent(
                            product.name
                          )}${product.details ? encodeURIComponent(' - ' + product.details) : ''}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition-colors text-xs flex items-center"
                        >
                          <i className="fab fa-whatsapp mr-1"></i>
                          Hacer Pedido
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <i className="fas fa-search text-gray-400 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-500 mb-4">
                  Intenta con otros términos de búsqueda o ajusta los filtros
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Ver todos los productos
                </button>
              </div>
            )}

            {/* Paginación */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-3 py-1 border rounded-lg ${
                        currentPage === index + 1
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Información del Negocio */}
        <section className="bg-white py-8 border-t">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Contacto */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Contacto</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <i className="fas fa-phone mr-2 text-blue-500"></i>
                    {businessInfo.contact.phone}
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-envelope mr-2 text-blue-500"></i>
                    {businessInfo.contact.email}
                  </p>
                  <p className="flex items-center">
                    <i className="fab fa-whatsapp mr-2 text-green-500"></i>
                    {businessInfo.contact.whatsapp}
                  </p>
                </div>
              </div>

              {/* Ubicación */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Ubicación</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-start">
                    <i className="fas fa-map-marker-alt mr-2 text-red-500 mt-1"></i>
                    {businessInfo.location.address}
                  </p>
                  <p className="ml-5">
                    {businessInfo.location.district}, {businessInfo.location.city}
                  </p>
                </div>
              </div>

              {/* Horarios */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Horarios</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <i className="fas fa-clock mr-2 text-orange-500"></i>
                    {businessInfo.schedule.weekdays}
                  </p>
                  <p className="ml-5">{businessInfo.schedule.saturday}</p>
                  <p className="ml-5">{businessInfo.schedule.sunday}</p>
                </div>
              </div>

              {/* Servicios */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Servicios</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  {businessInfo.services.map((service, index) => (
                    <p key={index} className="flex items-center">
                      <i className="fas fa-check-circle mr-2 text-green-500"></i>
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-bold">{businessInfo.name}</h3>
                <p className="text-gray-400 text-sm">Catálogo Digital Powered by PublicAdis</p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={businessInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  href={businessInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href={businessInfo.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-tiktok text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
