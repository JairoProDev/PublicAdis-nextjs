import React, { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    service: '',
    message: '',
    preferredContact: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const sectors = [
    { id: 'inmobiliario', name: 'Sector Inmobiliario' },
    { id: 'automotriz', name: 'Sector Automotriz' },
    { id: 'profesional', name: 'Servicios Profesionales' },
    { id: 'retail', name: 'Retail y Comercio' },
    { id: 'turismo', name: 'Turismo y Hostelería' },
    { id: 'educacion', name: 'Educación y Formación' },
    { id: 'otro', name: 'Otro Sector' },
  ];

  const services = [
    { id: 'inmuebles', name: 'Publicidad para Inmuebles' },
    { id: 'vehiculos', name: 'Publicidad para Vehículos' },
    { id: 'empleos', name: 'Publicidad para Empleos' },
    { id: 'servicios', name: 'Publicidad para Servicios' },
    { id: 'productos', name: 'Publicidad para Productos' },
    { id: 'personalizado', name: 'Plan Personalizado Premium' },
  ];

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor ingrese su nombre completo';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingrese su correo electrónico';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Por favor ingrese un correo electrónico válido';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor ingrese su número de teléfono';
    } else if (!/^\+?[0-9]{8,15}$/i.test(formData.phone.replace(/[ -]/g, ''))) {
      newErrors.phone = 'Por favor ingrese un número de teléfono válido';
    }

    // Sector validation
    if (!formData.sector) {
      newErrors.sector = 'Por favor seleccione un sector';
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Por favor seleccione un servicio';
    }

    // Terms validation
    if (!formData.terms) {
      newErrors.terms = 'Debe aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validateForm()) {
      // In a real application, you would send the form data to a server
      console.log('Form submitted with data:', formData);

      // Show success message
      setShowSuccess(true);

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        sector: '',
        service: '',
        message: '',
        preferredContact: '',
        terms: false,
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-b from-blue-950 to-gray-900 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="md:max-w-lg mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Eleve su Negocio al Siguiente Nivel
            </h2>
            <p className="text-lg text-gray-300">
              Contáctenos para iniciar su estrategia publicitaria exclusiva
            </p>
          </div>

          {/* Decorative Element */}
          <div className="relative w-44 h-44 hidden md:block">
            <div className="absolute w-36 h-36 bg-yellow-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute right-0 bottom-0 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 shadow-xl h-full">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-4">Atención Personalizada Premium</h3>
                <div className="relative h-px bg-white/10 my-4">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rotate-45"></span>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 min-w-12 rounded-full bg-white/5 flex items-center justify-center text-yellow-400">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Llámenos</h4>
                    <p className="text-sm text-gray-400 mb-1">
                      Atención inmediata en horario extendido
                    </p>
                    <a
                      href="tel:+51937054328"
                      className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      +51 937 054 328
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 min-w-12 rounded-full bg-white/5 flex items-center justify-center text-yellow-400">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Escríbanos</h4>
                    <p className="text-sm text-gray-400 mb-1">
                      Respuesta garantizada en menos de 2 horas
                    </p>
                    <a
                      href="mailto:publicadiss@gmail.com"
                      className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      publicadiss@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 min-w-12 rounded-full bg-white/5 flex items-center justify-center text-yellow-400">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visítenos</h4>
                    <p className="text-sm text-gray-400 mb-1">
                      Agenda una cita en nuestras oficinas premium
                    </p>
                    <address className="text-gray-300 not-italic">
                      San Sebastián, Cusco - Perú
                    </address>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <h4 className="font-semibold mb-3">Conecte con nosotros</h4>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://wa.me/937054328"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/publicadis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/publicadis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@publicadis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 transition-all duration-300"
                    aria-label="TikTok"
                  >
                    <i className="fab fa-tiktok"></i>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <span className="block text-gray-400 text-xs mb-1">Tiempo de respuesta</span>
                  <span className="block text-yellow-400 font-bold text-xl">45 min</span>
                </div>
                <div className="text-center">
                  <span className="block text-gray-400 text-xs mb-1">Satisfacción</span>
                  <span className="block text-yellow-400 font-bold text-xl">98%</span>
                </div>
                <div className="text-center">
                  <span className="block text-gray-400 text-xs mb-1">Casos resueltos</span>
                  <span className="block text-yellow-400 font-bold text-xl">100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 shadow-xl">
              {showSuccess ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full mx-auto flex items-center justify-center mb-6">
                    <i className="fas fa-check-circle text-4xl text-green-500"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">¡Solicitud Enviada con Éxito!</h3>
                  <p className="text-gray-300 mb-6">
                    Gracias por contactarnos. Un asesor especializado se pondrá en contacto con
                    usted a la brevedad.
                  </p>
                  <button
                    className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                    onClick={() => setShowSuccess(false)}
                  >
                    Enviar Otra Consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold mb-2">Solicite su Estrategia Personalizada</h3>
                    <p className="text-gray-400">
                      Complete el formulario y un asesor especializado se pondrá en contacto con
                      usted
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Name */}
                    <div className="relative">
                      <div className="flex border-b border-white/20 focus-within:border-yellow-400 transition-colors">
                        <div className="text-gray-400 pr-3 py-3">
                          <i className="fas fa-user"></i>
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Nombre Completo"
                          className={`bg-transparent w-full py-3 px-0 text-white placeholder-gray-500 focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <div className="flex border-b border-white/20 focus-within:border-yellow-400 transition-colors">
                          <div className="text-gray-400 pr-3 py-3">
                            <i className="fas fa-envelope"></i>
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Correo Electrónico"
                            className={`bg-transparent w-full py-3 px-0 text-white placeholder-gray-500 focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div className="relative">
                        <div className="flex border-b border-white/20 focus-within:border-yellow-400 transition-colors">
                          <div className="text-gray-400 pr-3 py-3">
                            <i className="fas fa-phone"></i>
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Teléfono"
                            className={`bg-transparent w-full py-3 px-0 text-white placeholder-gray-500 focus:outline-none ${errors.phone ? 'border-red-500' : ''}`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Company */}
                    <div className="relative">
                      <div className="flex border-b border-white/20 focus-within:border-yellow-400 transition-colors">
                        <div className="text-gray-400 pr-3 py-3">
                          <i className="fas fa-building"></i>
                        </div>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Empresa / Negocio"
                          className="bg-transparent w-full py-3 px-0 text-white placeholder-gray-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Sector and Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <div className="flex border-b border-white/20 focus-within:border-yellow-400 transition-colors">
                          <div className="text-gray-400 pr-3 py-3">
                            <i className="fas fa-industry"></i>
                          </div>
                          <select
                            id="sector"
                            name="sector"
                            value={formData.sector}
                            onChange={handleChange}
                            className={`bg-transparent w-full py-3 px-0 text-white appearance-none focus:outline-none ${!formData.sector ? 'text-gray-500' : 'text-white'} ${errors.sector ? 'border-red-500' : ''}`}
                          >
                            <option value="" className="bg-gray-900">
                              Seleccione un sector
                            </option>
                            {sectors.map(sector => (
                              <option key={sector.id} value={sector.id} className="bg-gray-900">
                                {sector.name}
                              </option>
                            ))}
                          </select>
                          <div className="text-gray-400 pl-3 py-3">
                            <i className="fas fa-chevron-down"></i>
                          </div>
                        </div>
                        {errors.sector && (
                          <p className="text-red-500 text-xs mt-1">{errors.sector}</p>
                        )}
                      </div>

                      <div className="relative">
                        <div className="flex border-b border-white/20 focus-within:border-yellow-400 transition-colors">
                          <div className="text-gray-400 pr-3 py-3">
                            <i className="fas fa-cog"></i>
                          </div>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={`bg-transparent w-full py-3 px-0 appearance-none focus:outline-none ${!formData.service ? 'text-gray-500' : 'text-white'} ${errors.service ? 'border-red-500' : ''}`}
                          >
                            <option value="" className="bg-gray-900">
                              Seleccione un servicio
                            </option>
                            {services.map(service => (
                              <option key={service.id} value={service.id} className="bg-gray-900">
                                {service.name}
                              </option>
                            ))}
                          </select>
                          <div className="text-gray-400 pl-3 py-3">
                            <i className="fas fa-chevron-down"></i>
                          </div>
                        </div>
                        {errors.service && (
                          <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <div className="flex border-b border-white/20 focus-within:border-yellow-400 transition-colors">
                        <div className="text-gray-400 pr-3 py-3">
                          <i className="fas fa-comment-alt"></i>
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Mensaje o consulta específica (opcional)"
                          rows="4"
                          className="bg-transparent w-full py-3 px-0 text-white placeholder-gray-500 focus:outline-none resize-none"
                        ></textarea>
                      </div>
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">
                        Método de contacto preferido (opcional)
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {['Email', 'Teléfono', 'WhatsApp'].map(method => (
                          <label key={method} className="flex items-center cursor-pointer group">
                            <input
                              type="radio"
                              name="preferredContact"
                              value={method}
                              checked={formData.preferredContact === method}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <span className="w-4 h-4 rounded-full border border-white/20 inline-block mr-2 group-hover:border-yellow-400 flex-shrink-0 flex items-center justify-center">
                              {formData.preferredContact === method && (
                                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                              )}
                            </span>
                            <span className="text-sm text-gray-300">{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start mt-6">
                      <label className="flex items-start cursor-pointer group">
                        <input
                          type="checkbox"
                          name="terms"
                          checked={formData.terms}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="w-5 h-5 border border-white/20 rounded inline-block mr-3 mt-0.5 group-hover:border-yellow-400 flex-shrink-0 flex items-center justify-center">
                          {formData.terms && (
                            <i className="fas fa-check text-xs text-yellow-400"></i>
                          )}
                        </span>
                        <span className="text-sm text-gray-300">
                          Acepto los{' '}
                          <Link href="/terminos" className="text-yellow-400 hover:underline">
                            términos y condiciones
                          </Link>{' '}
                          y la{' '}
                          <Link href="/privacidad" className="text-yellow-400 hover:underline">
                            política de privacidad
                          </Link>
                        </span>
                      </label>
                    </div>
                    {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}

                    <div className="flex justify-center mt-8">
                      <button
                        type="submit"
                        className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center"
                      >
                        Enviar Solicitud
                        <i className="fas fa-arrow-right ml-2"></i>
                      </button>
                    </div>

                    <div className="flex justify-center items-center gap-3 mt-6">
                      <div className="flex items-center text-gray-400 text-sm">
                        <i className="fas fa-shield-alt mr-1 text-yellow-400"></i>
                        <span>Datos Protegidos</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <i className="fas fa-lock mr-1 text-yellow-400"></i>
                        <span>Conexión Segura</span>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0f172a"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,154.7C672,149,768,139,864,144C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
