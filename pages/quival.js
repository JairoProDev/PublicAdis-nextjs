import React, { useState, useEffect, useMemo, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '../src/utils/supabase';
import { businessInfo } from '../src/data/quival-catalog';

const ProductCard = ({ product, view, isAdminMode, onEdit }) => {
  // Handle variants if they exist in the data structure, otherwise treat as single product
  // For the flat Supabase structure, we might not have 'variants' array immediately unless we group them.
  // The 'groupedProducts' logic below creates variants.

  const [selectedVariantId, setSelectedVariantId] = useState(product.variants && product.variants.length > 0 ? product.variants[0].id : product.id);

  const selectedVariant = product.variants
    ? (product.variants.find(v => v.id == selectedVariantId) || product.variants[0])
    : product;

  // Use the selected variant's image if it has one, otherwise fall back to the first variant's image
  const displayImage = selectedVariant.image_url || (product.variants && product.variants[0]?.image_url) || product.image_url;

  return (
    <div
      className={
        view === 'grid'
          ? 'bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col relative'
          : 'bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex relative'
      }
    >
      {/* Admin Edit Button */}
      {isAdminMode && (
        <button
          onClick={() => onEdit(selectedVariant)}
          className="absolute top-2 right-2 z-10 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          title="Editar producto"
        >
          <i className="fas fa-edit"></i>
        </button>
      )}

      <div
        className={
          view === 'grid'
            ? 'aspect-square relative'
            : 'w-28 h-28 relative flex-shrink-0'
        }
      >
        <div className="relative w-full h-full">
          {/* Using standard img for simplicity with external Supabase URLs or fallbacks */}
          {displayImage ? (
            <img
              src={displayImage}
              alt={product.name}
              className="w-full h-full object-cover absolute inset-0"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
              <i className="fas fa-image text-3xl"></i>
            </div>
          )}
        </div>

        {product.featured && (
          <span className="absolute top-1 right-1 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            Destacado
          </span>
        )}
      </div>

      <div className="p-2 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-1">
            <span className="text-xs text-orange-600 font-medium">
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
            {product.brand && <span className="font-medium mr-1">{product.brand}</span>}

            {product.variants && product.variants.length > 1 ? (
              <select
                value={selectedVariantId}
                onChange={(e) => setSelectedVariantId(Number(e.target.value))}
                className="mt-1 block w-full text-xs py-1 px-2 border border-gray-300 rounded focus:ring-orange-500 focus:border-orange-500"
                onClick={(e) => e.stopPropagation()}
              >
                {product.variants.map(v => (
                  <option key={v.id} value={v.id}>{v.details || 'Estándar'}</option>
                ))}
              </select>
            ) : (
              product.details && <span>• {product.details}</span>
            )}
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
            )}${selectedVariant.details ? encodeURIComponent(' - ' + selectedVariant.details) : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition-colors text-xs flex items-center"
          >
            <i className="fab fa-whatsapp mr-1"></i>
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
};

export default function QuivalCatalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef(null);

  // Admin Mode
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  // Edit Modal
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    name: '',
    category: '',
    subcategory: '',
    brand: '',
    details: '',
    image_url: '',
    in_stock: true,
  });
  const [uploading, setUploading] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedMeasure, setSelectedMeasure] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState('grid');

  const itemsPerPage = 12;

  // 1. Fetch Products from Supabase on Load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('in_stock', true); // Only fetch in-stock items

    if (error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  // Admin Mode Handlers
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === 'admin123') {
      setIsAdminMode(true);
      setShowAdminLogin(false);
      setAdminPassword('');
      localStorage.setItem('quival_catalog_admin', 'true');
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminMode(false);
    localStorage.removeItem('quival_catalog_admin');
  };

  // Check for cached admin session
  useEffect(() => {
    const cachedAdmin = localStorage.getItem('quival_catalog_admin');
    if (cachedAdmin === 'true') {
      setIsAdminMode(true);
    }
  }, []);

  // Edit Product Handlers
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      category: product.category,
      subcategory: product.subcategory || '',
      brand: product.brand || '',
      details: product.details || '',
      image_url: product.image_url || '',
      in_stock: product.in_stock,
    });
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditingProduct(null);
    setProductForm({
      name: '',
      category: '',
      subcategory: '',
      brand: '',
      details: '',
      image_url: '',
      in_stock: true,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('products')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage.from('products').getPublicUrl(filePath);

      setProductForm(prev => ({
        ...prev,
        image_url: data.publicUrl
      }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error subiendo imagen. Asegúrate de haber creado el bucket "products" en Supabase.');
    } finally {
      setUploading(false);
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const { error } = await supabase
        .from('products')
        .update(productForm)
        .eq('id', editingProduct.id);

      if (error) throw error;

      alert('Producto actualizado correctamente');
      handleCloseModal();
      fetchProducts();
    } catch (error) {
      console.error('Error updating:', error);
      alert('Error actualizando el producto: ' + error.message);
    } finally {
      setUploading(false);
    }
  };


  // 2. Filter Products based on search and filters
  const filteredProducts = useMemo(() => {
    let results = products;

    // Text Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (p.brand && p.brand.toLowerCase().includes(query)) ||
        (p.details && p.details.toLowerCase().includes(query))
      );
    }

    // Category Filter
    if (selectedCategory) {
      results = results.filter(p => p.category === selectedCategory);
    }

    // Brand Filter
    if (selectedBrand) {
      results = results.filter(p => p.brand === selectedBrand);
    }

    // Measure/Details Filter
    if (selectedMeasure) {
      results = results.filter(p => p.details === selectedMeasure);
    }

    return results;
  }, [products, searchQuery, selectedCategory, selectedBrand, selectedMeasure]);

  // 3. Group variants
  const groupedProducts = useMemo(() => {
    const groups = {};
    filteredProducts.forEach(product => {
      // Group by Name + Category + Brand
      const key = `${product.name}-${product.category}-${product.brand || ''}`;

      if (!groups[key]) {
        groups[key] = {
          ...product,
          variants: [product]
        };
      } else {
        groups[key].variants.push(product);
      }
    });

    return Object.values(groups);
  }, [filteredProducts]);

  // 4. Derived Data for Filters (Categories, Brands, Measures)
  const categories = useMemo(() => {
    const cats = [...new Set(products.map(p => p.category))];
    return cats.map(c => ({
      name: c,
      count: products.filter(p => p.category === c).length
    })).sort((a, b) => b.count - a.count);
  }, [products]);

  // Dynamic Brands (based on current filtered category if selected)
  const availableBrands = useMemo(() => {
    let subset = products;
    if (selectedCategory) {
      subset = subset.filter(p => p.category === selectedCategory);
    }
    return [...new Set(subset.map(p => p.brand).filter(Boolean))].sort();
  }, [products, selectedCategory]);

  // Dynamic Measures
  const availableMeasures = useMemo(() => {
    let subset = products;
    if (selectedCategory) {
      subset = subset.filter(p => p.category === selectedCategory);
    }
    if (selectedBrand) {
      subset = subset.filter(p => p.brand === selectedBrand);
    }
    return [...new Set(subset.map(p => p.details).filter(Boolean))].sort();
  }, [products, selectedCategory, selectedBrand]);


  // Pagination
  const totalPages = Math.ceil(groupedProducts.length / itemsPerPage);
  const currentProducts = groupedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset pagination on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedBrand, selectedMeasure]);

  // Reset dependent filters
  useEffect(() => {
    if (selectedCategory === '') {
      setSelectedBrand('');
      setSelectedMeasure('');
    } else if (!availableBrands.includes(selectedBrand)) {
      setSelectedBrand('');
    }
  }, [selectedCategory, availableBrands]);


  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedBrand('');
    setSelectedMeasure('');
  };

  const getCategoryIcon = category => {
    const iconMap = {
      'Tuberías y Accesorios': 'fas fa-pipe',
      'Mangueras y Riego': 'fas fa-water',
      'Herramientas': 'fas fa-tools',
      'Ferretería': 'fas fa-hammer',
      'Plásticos': 'fas fa-spray-can',
      'Electricidad': 'fas fa-bolt',
      'Accesorios': 'fas fa-cogs',
      'Grifería': 'fas fa-faucet',
      'Iluminación': 'fas fa-lightbulb',
      'Plásticos, Mallas y Arpilleras': 'fas fa-layer-group',
      'Pinturas y Accesorios': 'fas fa-paint-roller',
      'Accesorios Eléctricos': 'fas fa-plug',
      'Ferretería Varios': 'fas fa-box-open',
    };
    return iconMap[category] || 'fas fa-box';
  };

  return (
    <>
      <Head>
        <title>{businessInfo.fullName} - Catálogo Digital | PublicAdis</title>
        <meta name="description" content={businessInfo.description} />

        <link rel="icon" href="/logo-quival.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Header del Negocio */}
        <header className="bg-black text-white shadow-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo y Título */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-auto bg-white rounded p-1">
                  <img
                    src={businessInfo.logo}
                    alt={businessInfo.name}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h1 className="text-xl font-bold text-white">{businessInfo.name}</h1>
              </div>

              {/* Contacto Rápido */}
              <div className="flex items-center gap-2">
                {isAdminMode ? (
                  <button
                    onClick={handleAdminLogout}
                    className="flex items-center gap-1 bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition-colors text-sm"
                  >
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hidden sm:inline">Salir Admin</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setShowAdminLogin(true)}
                    className="flex items-center gap-1 bg-gray-700 text-white px-3 py-1.5 rounded-lg hover:bg-gray-600 transition-colors text-sm"
                  >
                    <i className="fas fa-lock"></i>
                    <span className="hidden sm:inline">Admin</span>
                  </button>
                )}
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
                  className="flex items-center gap-1 bg-orange-500 text-white px-3 py-1.5 rounded-lg hover:bg-orange-600 transition-colors"
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
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Filtros Avanzados */}
        <section className="bg-gray-100 py-3 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-sm font-medium text-gray-700">Filtros:</h3>
              {(selectedCategory || selectedBrand || selectedMeasure || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="px-2 py-1 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600 transition-colors flex items-center"
                >
                  <i className="fas fa-times mr-1"></i>
                  Limpiar
                </button>
              )}
            </div>

            <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <div className="flex space-x-3 min-w-max">
                {/* Categorías */}
                <div className="min-w-[230px]">
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    <option value="">Todas las categorías</option>
                    {categories.map(category => (
                      <option key={category.name} value={category.name}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Marcas */}
                <div className="min-w-[200px]">
                  <select
                    value={selectedBrand}
                    onChange={e => setSelectedBrand(e.target.value)}
                    disabled={!selectedCategory}
                    className={`px-3 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-orange-500 ${!selectedCategory ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
                      }`}
                  >
                    <option value="">Todas las marcas</option>
                    {availableBrands.map(brand => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Medidas */}
                <div className="min-w-[200px]">
                  <select
                    value={selectedMeasure}
                    onChange={e => setSelectedMeasure(e.target.value)}
                    disabled={!selectedCategory}
                    className={`px-3 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-orange-500 ${!selectedCategory ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
                      }`}
                  >
                    <option value="">Todas las medidas</option>
                    {availableMeasures.map(measure => (
                      <option key={measure} value={measure}>
                        {measure}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Vista */}
                <div className="flex items-center gap-2 ml-auto">
                  <button
                    onClick={() => setView('grid')}
                    className={`p-2 rounded ${view === 'grid' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                  >
                    <i className="fas fa-th-large"></i>
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`p-2 rounded ${view === 'list' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                  >
                    <i className="fas fa-list"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categorías con Iconos */}
        {!searchQuery && !selectedCategory && !selectedBrand && !selectedMeasure && (
          <section className="py-4 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-lg font-semibold mb-3 text-gray-800 px-1">Categorías</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {categories.slice(0, 12).map(category => (
                  <button
                    key={category.name}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setCurrentPage(1);
                    }}
                    className="flex flex-col items-center justify-center bg-white hover:bg-orange-50 border border-gray-200 rounded-lg p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full mb-2">
                      <i className={getCategoryIcon(category.name) + ' text-xl'}></i>
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">
                      {category.name}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">({category.count})</span>
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
                  {groupedProducts.length}{' '}
                  {groupedProducts.length === 1 ? 'producto' : 'productos'}
                  {selectedCategory && ` en ${selectedCategory}`}
                </h2>
                {selectedBrand && (
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    Marca: {selectedBrand}
                  </span>
                )}
                {selectedMeasure && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Medida: {selectedMeasure}
                  </span>
                )}
              </div>
            </div>

            {/* Grid de Productos */}
            {loading ? (
              <div className="flex justify-center py-20">
                <i className="fas fa-spinner fa-spin text-4xl text-orange-500"></i>
              </div>
            ) : currentProducts.length > 0 ? (
              <div
                className={
                  view === 'grid'
                    ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4'
                    : 'space-y-3'
                }
              >
                {currentProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    view={view}
                    isAdminMode={isAdminMode}
                    onEdit={handleEditProduct}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <i className="fas fa-search text-gray-400 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-500 mb-4">
                  {products.length === 0
                    ? 'El catálogo está vacío. Utiliza el panel de administración para agregar productos.'
                    : 'Intenta con otros términos de búsqueda o ajusta los filtros'}
                </p>
                <div className="flex justify-center gap-2">
                  <button
                    onClick={clearFilters}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Ver todos los productos
                  </button>

                  {/* Link Temporal al Admin para facilitar tu prueba */}
                  <Link href="/quival/admin" className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                    Ir al Admin
                  </Link>
                </div>
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
                      className={`px-3 py-1 border rounded-lg ${currentPage === index + 1
                        ? 'bg-orange-500 text-white border-orange-500'
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
                    <i className="fas fa-phone mr-2 text-orange-500"></i>
                    {businessInfo.contact.phone}
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-phone mr-2 text-orange-500"></i>
                    {businessInfo.contact.phone2}
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-envelope mr-2 text-orange-500"></i>
                    {businessInfo.contact.email}
                  </p>
                  <p className="flex items-center">
                    <i className="fab fa-whatsapp mr-2 text-green-500"></i>
                    {businessInfo.contact.whatsapp}
                  </p>
                  <p className="flex items-center">
                    <i className="fab fa-whatsapp mr-2 text-green-500"></i>
                    {businessInfo.contact.whatsapp2}
                  </p>
                </div>
              </div>

              {/* Ubicación */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Ubicación</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-start">
                    <i className="fas fa-map-marker-alt mr-2 text-orange-500 mt-1"></i>
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
        <footer className="bg-black text-white py-6">
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

        {/* Admin Login Modal */}
        {showAdminLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-sm">
              <h2 className="text-xl font-bold mb-4">Acceso Administrativo</h2>
              <form onSubmit={handleAdminLogin}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingrese contraseña..."
                    autoFocus
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Ingresar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAdminLogin(false);
                      setAdminPassword('');
                    }}
                    className="px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit Product Modal */}
        {showEditModal && editingProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl my-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Editar Producto</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <form onSubmit={handleUpdateProduct} className="space-y-4">
                {/* Image Upload */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  {productForm.image_url ? (
                    <div className="relative h-48 w-full">
                      <img
                        src={productForm.image_url}
                        alt="Preview"
                        className="h-full w-full object-contain rounded-md"
                      />
                      <p className="text-xs text-blue-500 mt-2">Click para cambiar imagen</p>
                    </div>
                  ) : (
                    <div className="py-8">
                      {uploading ? (
                        <i className="fas fa-spinner fa-spin text-3xl text-blue-500 mb-2"></i>
                      ) : (
                        <i className="fas fa-camera text-3xl text-gray-400 mb-2"></i>
                      )}
                      <p className="text-sm text-gray-500">Toca para subir foto</p>
                    </div>
                  )}
                </div>

                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del Producto</label>
                  <input
                    type="text"
                    name="name"
                    value={productForm.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Category and Brand */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                    <input
                      type="text"
                      name="category"
                      value={productForm.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Marca</label>
                    <input
                      type="text"
                      name="brand"
                      value={productForm.brand}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Detalles (Medida/Color)</label>
                  <input
                    type="text"
                    name="details"
                    value={productForm.details}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500"
                    placeholder="Ej. 1/2 pulgada"
                  />
                </div>

                {/* In Stock */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="in_stock"
                    id="inStockEdit"
                    checked={productForm.in_stock}
                    onChange={handleInputChange}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="inStockEdit" className="text-sm text-gray-700">Disponible en stock</label>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-4">
                  <button
                    type="submit"
                    disabled={uploading}
                    className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    {uploading ? (
                      <><i className="fas fa-spinner fa-spin mr-2"></i> Guardando...</>
                    ) : (
                      <><i className="fas fa-save mr-2"></i> Actualizar Producto</>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-6 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
