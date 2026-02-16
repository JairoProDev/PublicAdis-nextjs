import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { supabase } from '../../src/utils/supabase';
import {
    businessInfo,
    catalogProducts, // Import the flat list
} from '../../src/data/quival-catalog';

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const fileInputRef = useRef(null);

    // Form State
    const [editingId, setEditingId] = useState(null); // Track if we're editing
    const [productForm, setProductForm] = useState({
        name: '',
        category: '',
        subcategory: '',
        brand: '',
        details: '', // for measure/color
        image_url: '',
        in_stock: true,
    });

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    // Derived lists for dropdowns from current DB data
    const categories = [...new Set(products.map(p => p.category))];
    const brands = [...new Set(products.map(p => p.brand).filter(Boolean))];

    useEffect(() => {
        // Check if previously authenticated (optional)
        const cachedAuth = localStorage.getItem('quival_admin_auth');
        if (cachedAuth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            fetchProducts();
        }
    }, [isAuthenticated]);

    // Search filter effect
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredProducts(products);
        } else {
            const query = searchQuery.toLowerCase();
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query) ||
                (p.brand && p.brand.toLowerCase().includes(query)) ||
                (p.details && p.details.toLowerCase().includes(query))
            );
            setFilteredProducts(filtered);
        }
    }, [searchQuery, products]);

    const fetchProducts = async () => {
        if (!supabase) {
            console.error('Supabase client not initialized.');
            setLoading(false);
            return;
        }
        setLoading(true);
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching products:', error);
            alert('Error cargando productos');
        } else {
            setProducts(data || []);
            setFilteredProducts(data || []);
        }
        setLoading(false);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
            localStorage.setItem('quival_admin_auth', 'true');
        } else {
            alert('Contraseña incorrecta');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('quival_admin_auth');
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

        if (!supabase) {
            alert('Error: Supabase no está configurado.');
            return;
        }

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!supabase) {
            alert('Error: Supabase no está configurado.');
            return;
        }
        setUploading(true);

        try {
            if (editingId) {
                // Update existing product
                const { error } = await supabase
                    .from('products')
                    .update(productForm)
                    .eq('id', editingId);

                if (error) throw error;
                alert('Producto actualizado correctamente');
            } else {
                // Create new product
                const { error } = await supabase
                    .from('products')
                    .insert([productForm]);

                if (error) throw error;
                alert('Producto guardado correctamente');
            }

            // Reset form
            setProductForm({
                name: '',
                category: '',
                subcategory: '',
                brand: '',
                details: '',
                image_url: '',
                in_stock: true,
            });
            setEditingId(null);
            fetchProducts();
        } catch (error) {
            console.error('Error saving:', error);
            alert('Error guardando el producto: ' + error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleEdit = (product) => {
        setEditingId(product.id);
        setProductForm({
            name: product.name,
            category: product.category,
            subcategory: product.subcategory || '',
            brand: product.brand || '',
            details: product.details || '',
            image_url: product.image_url || '',
            in_stock: product.in_stock,
        });
        // Scroll to form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
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

    const handleDelete = async (id) => {
        if (!window.confirm('¿Estás seguro de eliminar este producto?')) return;

        if (!supabase) {
            alert('Error: Supabase no está configurado.');
            return;
        }

        try {
            const { error } = await supabase
                .from('products')
                .delete()
                .eq('id', id);

            if (error) throw error;

            // If we were editing this product, cancel edit mode
            if (editingId === id) {
                handleCancelEdit();
            }

            fetchProducts();
        } catch (error) {
            alert('Error eliminando: ' + error.message);
        }
    };

    const seedDatabase = async () => {
        if (!window.confirm('¿Migrar datos locales a Supabase? Esto agregará todos los productos del catálogo estático.')) return;

        if (!supabase) {
            alert('Error: Supabase no está configurado.');
            return;
        }

        setLoading(true);
        try {
            const dataToInsert = catalogProducts.map(p => ({
                name: p.name,
                category: p.category,
                subcategory: p.subcategory,
                brand: p.brand,
                details: p.details,
                image_url: p.image || '/product-placeholder.svg',
                in_stock: p.inStock,
                featured: p.featured || false
            }));

            // Insert in chunks to avoid payload limits
            const chunkSize = 50;
            for (let i = 0; i < dataToInsert.length; i += chunkSize) {
                const chunk = dataToInsert.slice(i, i + chunkSize);
                const { error } = await supabase.from('products').insert(chunk);
                if (error) throw error;
            }

            alert('¡Migración completada con éxito!');
            fetchProducts();
        } catch (error) {
            console.error('Error seeding:', error);
            alert('Error en la migración: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Head>
                    <title>{`Admin - ${businessInfo.name}`}</title>
                </Head>
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Acceso Administrativo</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Ingrese contraseña..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>{`Panel de Administración - ${businessInfo.name}`}</title>
            </Head>

            <nav className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Link href="/quival" className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-arrow-left"></i> Volver al Catálogo
                    </Link>
                    <h1 className="text-xl font-bold text-gray-800">Panel de Administración</h1>
                </div>
                <div className="flex items-center gap-4">
                    {/* Seed Button */}
                    {products.length === 0 && (
                        <button
                            onClick={seedDatabase}
                            className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 border border-green-300"
                        >
                            <i className="fas fa-database mr-1"></i> Migrar Datos Locales
                        </button>
                    )}

                    <span className="text-sm text-gray-600">Admin</span>
                    <button
                        onClick={handleLogout}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </nav>

            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Formulario de Agregar/Editar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-4">
                            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <i className={`fas ${editingId ? 'fa-edit text-orange-500' : 'fa-plus-circle text-blue-500'}`}></i>
                                {editingId ? 'Editar Producto' : 'Agregar Nuevo Producto'}
                            </h2>


                            <form onSubmit={handleSubmit} className="space-y-4">

                                {/* Imagen Upload */}
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
                                            <p className="text-sm text-gray-500">Toca para subir foto o tomar foto</p>
                                        </div>
                                    )}
                                </div>


                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del Producto</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={productForm.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500"
                                        placeholder="Ej. Tubo de Agua"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                                        <select
                                            name="category"
                                            value={productForm.category}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500"
                                            required
                                        >
                                            <option value="">Seleccionar...</option>
                                            {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                            <option value="Tuberías y Accesorios">Tuberías y Accesorios</option>
                                            <option value="Ferretería">Ferretería</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="category"
                                            placeholder="O escribe nueva..."
                                            className="mt-2 w-full px-2 py-1 text-xs border rounded"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Marca</label>
                                        <select
                                            name="brand"
                                            value={productForm.brand}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500"
                                        >
                                            <option value="">Seleccionar...</option>
                                            {brands.map(b => <option key={b} value={b}>{b}</option>)}
                                        </select>
                                        <input
                                            type="text"
                                            name="brand"
                                            placeholder="O nueva marca..."
                                            className="mt-2 w-full px-2 py-1 text-xs border rounded"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

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

                                <div className="flex items-center gap-2 pt-2">
                                    <input
                                        type="checkbox"
                                        name="in_stock"
                                        id="inStock"
                                        checked={productForm.in_stock}
                                        onChange={handleInputChange}
                                        className="rounded text-blue-600 focus:ring-blue-500"
                                    />
                                    <label htmlFor="inStock" className="text-sm text-gray-700">Disponible en stock</label>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        type="submit"
                                        disabled={uploading}
                                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
                                    >
                                        {uploading ? (
                                            <><i className="fas fa-spinner fa-spin"></i> Guardando...</>
                                        ) : (
                                            <><i className="fas fa-save"></i> {editingId ? 'Actualizar' : 'Guardar'}</>
                                        )}
                                    </button>

                                    {editingId && (
                                        <button
                                            type="button"
                                            onClick={handleCancelEdit}
                                            className="px-4 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                                        >
                                            <i className="fas fa-times"></i>
                                        </button>
                                    )}
                                </div>

                            </form>
                        </div>
                    </div>

                    {/* Lista de Productos Existentes */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                                <h2 className="font-semibold text-gray-700">Inventario Actual ({filteredProducts.length})</h2>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Buscar..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-8 pr-3 py-1.5 border rounded-md text-sm focus:ring-1 focus:ring-blue-500 w-48"
                                    />
                                    <i className="fas fa-search absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs"></i>
                                </div>
                            </div>

                            <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                                <table className="w-full text-sm text-left text-gray-600">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
                                        <tr>
                                            <th className="px-6 py-3">Producto</th>
                                            <th className="px-6 py-3">Categoría</th>
                                            <th className="px-6 py-3">Detalle</th>
                                            <th className="px-6 py-3">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td colSpan="4" className="text-center py-8">
                                                    <i className="fas fa-spinner fa-spin text-2xl text-blue-500"></i>
                                                </td>
                                            </tr>
                                        ) : filteredProducts.length === 0 ? (
                                            <tr>
                                                <td colSpan="4" className="text-center py-8 text-gray-500">
                                                    {searchQuery ? 'No se encontraron productos con ese término.' : 'No hay productos. Usa "Migrar Datos Locales" para importar el catálogo.'}
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredProducts.map(product => (
                                                <tr key={product.id} className={`bg-white border-b hover:bg-gray-50 ${editingId === product.id ? 'bg-blue-50' : ''}`}>
                                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-3">
                                                        <div className="w-8 h-8 bg-gray-100 rounded-full flex-shrink-0 border overflow-hidden">
                                                            {product.image_url ? (
                                                                <img src={product.image_url} className="w-full h-full object-cover" alt={product.name} />
                                                            ) : null}
                                                        </div>
                                                        {product.name}
                                                    </td>
                                                    <td className="px-6 py-4">{product.category}</td>
                                                    <td className="px-6 py-4">{product.details}</td>
                                                    <td className="px-6 py-4 flex gap-3">
                                                        <button
                                                            onClick={() => handleEdit(product)}
                                                            className="text-blue-600 hover:text-blue-800"
                                                            title="Editar producto"
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(product.id)}
                                                            className="text-red-600 hover:text-red-800"
                                                            title="Eliminar producto"
                                                        >
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
