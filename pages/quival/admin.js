import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// NOTE: In a real implementation, this should come from a database.
// Initially importing to show structure, but this page will eventually write to a DB.
import {
    businessInfo,
    getCategories,
    getBrands,
} from '../../src/data/quival-catalog';

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Simple protection for now
    const [password, setPassword] = useState('');

    // Form State
    const [productForm, setProductForm] = useState({
        name: '',
        category: '',
        subcategory: '',
        brand: '',
        details: '', // for measure/color
        image: null,
        inStock: true,
    });

    const [products, setProducts] = useState([]); // Will fetch from DB
    const [loading, setLoading] = useState(false);

    // Mock Categories and Brands for dropdowns
    const categories = getCategories();
    const brands = getBrands();

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') { // Temporary hardcoded password
            setIsAuthenticated(true);
        } else {
            alert('Contraseña incorrecta');
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProductForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // In real app: Upload to Supabase Storage and get URL
            // Here: Create local URL for preview
            const url = URL.createObjectURL(file);
            setProductForm(prev => ({ ...prev, image: url, imageFile: file }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // TODO: Implement Database Upload (Supabase)
        console.log('Product to save:', productForm);

        // Simulating API call
        setTimeout(() => {
            alert('Funcionalidad de base de datos pendiente de configuración. Se requiren credenciales de Supabase.');
            setLoading(false);
        }, 1000);
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Head>
                    <title>Admin - {businessInfo.name}</title>
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
                <title>Panel de Administración - {businessInfo.name}</title>

            </Head>

            <nav className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Link href="/quival" className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-arrow-left"></i> Volver al Catálogo
                    </Link>
                    <h1 className="text-xl font-bold text-gray-800">Panel de Administración</h1>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">Admin</span>
                    <button
                        onClick={() => setIsAuthenticated(false)}
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
                                <i className="fas fa-plus-circle text-blue-500"></i>
                                Agregar Nuevo Producto
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">

                                {/* Imagen Upload */}
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    {productForm.image ? (
                                        <div className="relative h-48 w-full">
                                            <img
                                                src={productForm.image}
                                                alt="Preview"
                                                className="h-full w-full object-contain rounded-md"
                                            />
                                            <p className="text-xs text-blue-500 mt-2">Click para cambiar imagen</p>
                                        </div>
                                    ) : (
                                        <div className="py-8">
                                            <i className="fas fa-camera text-3xl text-gray-400 mb-2"></i>
                                            <p className="text-sm text-gray-500">Toca para subir foto o tomar foto</p>
                                            <p className="text-xs text-gray-400 mt-1">Soporta JPG, PNG, WEBP</p>
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
                                        className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                                        >
                                            <option value="">Seleccionar...</option>
                                            {categories.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                                            <option value="new">+ Nueva Categoría</option>
                                        </select>
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
                                            <option value="new">+ Nueva Marca</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Detalles (Medida/Color)</label>
                                    <input
                                        type="text"
                                        name="details"
                                        value={productForm.details}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Ej. 1/2 pulgada, Rojo, 50ml"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Este campo ayuda a crear variantes del mismo producto.</p>
                                </div>

                                <div className="flex items-center gap-2 pt-2">
                                    <input
                                        type="checkbox"
                                        name="inStock"
                                        id="inStock"
                                        checked={productForm.inStock}
                                        onChange={handleInputChange}
                                        className="rounded text-blue-600 focus:ring-blue-500"
                                    />
                                    <label htmlFor="inStock" className="text-sm text-gray-700">Disponible en stock</label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-4 shadow-sm"
                                >
                                    {loading ? (
                                        <><i className="fas fa-spinner fa-spin"></i> Guardando...</>
                                    ) : (
                                        <><i className="fas fa-save"></i> Guardar Producto</>
                                    )}
                                </button>

                            </form>
                        </div>
                    </div>

                    {/* Lista de Productos Existentes */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                                <h2 className="font-semibold text-gray-700">Inventario Actual</h2>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Buscar..."
                                        className="pl-8 pr-3 py-1.5 border rounded-md text-sm focus:ring-1 focus:ring-blue-500 w-48"
                                    />
                                    <i className="fas fa-search absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs"></i>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-600">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3">Producto</th>
                                            <th className="px-6 py-3">Categoría</th>
                                            <th className="px-6 py-3">Detalle</th>
                                            <th className="px-6 py-3">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Placeholder content - will be replaced by API data */}
                                        <tr className="bg-white border-b hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-3">
                                                <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>
                                                Tubo de Desagüe
                                            </td>
                                            <td className="px-6 py-4">Tuberías</td>
                                            <td className="px-6 py-4">2"</td>
                                            <td className="px-6 py-4 flex gap-3">
                                                <button className="text-blue-600 hover:text-blue-800"><i className="fas fa-edit"></i></button>
                                                <button className="text-red-600 hover:text-red-800"><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-3">
                                                <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>
                                                Tubo de Agua
                                            </td>
                                            <td className="px-6 py-4">Tuberías</td>
                                            <td className="px-6 py-4">1/2"</td>
                                            <td className="px-6 py-4 flex gap-3">
                                                <button className="text-blue-600 hover:text-blue-800"><i className="fas fa-edit"></i></button>
                                                <button className="text-red-600 hover:text-red-800"><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="p-8 text-center text-gray-500">
                                    <p>Conecte Supabase para cargar el inventario real.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
