import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';

const DeckPage = () => {
    const metrics = [
        { label: 'Gasto Papel Cusco', value: 'S/ 165K', sub: 'semanales', icon: 'fa-file-invoice-dollar' },
        { label: 'Ventas (6 meses)', value: '+S/ 10K', sub: 'tracción inicial', icon: 'fa-chart-line' },
        { label: 'Clientes de Pago', value: '+330', sub: 'pymes activas', icon: 'fa-users' },
        { label: 'Retención (LTV)', value: '18x', sub: 'recompras anuales', icon: 'fa-sync' },
    ];

    return (
        <Layout
            title="Investment Pitch | PublicAdis - Democratizando la Publicidad"
            description="Oportunidad de inversión en PublicAdis para UTEC Ventures. Escalando la tecnología publicitaria hiperlocal en el Perú."
        >
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
            </Head>

            <div className="bg-[#0a1626] text-white min-h-screen font-sans selection:bg-[#d4af37] selection:text-[#0a1626]">

                {/* Hero Section - High Impact */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10"></div>

                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-sm font-bold mb-8 animate-fade-in-up">
                            <i className="fas fa-crown"></i>
                            <span>EXCLUSIVO: UTEC VENTURES PITCH</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent leading-[1.1]">
                            Democratizamos la Publicidad <br className="hidden md:block" /> con Inteligencia Artificial
                        </h1>

                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            <div className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] md:text-xs font-bold flex flex-col items-center gap-1">
                                <div className="flex items-center gap-2">
                                    <i className="fas fa-check-circle"></i>
                                    <span>STARTUP PERÚ 13G (PROINNOVATE)</span>
                                </div>
                                <span className="opacity-80 font-medium">Aprobado en Evaluación Externa, Comité Técnico y Acreditación Legal</span>
                            </div>
                            <div className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-bold flex items-center gap-2">
                                <i className="fas fa-award"></i>
                                <span>TOP 5% STARTUPS REGIONALES</span>
                            </div>
                        </div>

                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Digitalizamos lo tradicional para evitar 25 millones de páginas impresas en 2026.
                            Tecnología publicitaria de élite, simplificada para la PYME.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <a href="#deck-video" className="px-8 py-4 bg-[#1a56db] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2">
                                <i className="fas fa-play"></i> Ver Video Pitch
                            </a>
                            <a href="#deck-pdf" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all flex items-center gap-2">
                                <i className="fas fa-file-pdf"></i> Revisar Pitch Deck
                            </a>
                        </div>
                    </div>
                </section>

                {/* Recognition Icons Grid */}
                <section className="py-12 bg-white/[0.03] border-b border-white/5">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-3">
                                    <i className="fas fa-medal text-yellow-500 text-xl"></i>
                                </div>
                                <h4 className="font-bold text-sm mb-1 uppercase tracking-tighter">1er Lugar</h4>
                                <p className="text-[10px] text-gray-400">Hackathon Paqarina Wasi (Cusco)</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="w-12 h-12 rounded-full bg-gray-300/20 flex items-center justify-center mb-3">
                                    <i className="fas fa-trophy text-gray-300 text-xl"></i>
                                </div>
                                <h4 className="font-bold text-sm mb-1 uppercase tracking-tighter">2do Lugar</h4>
                                <p className="text-[10px] text-gray-400">Incubación Paqarina Wasi & Idealab (Cusco)</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-3">
                                    <i className="fas fa-star text-orange-500 text-xl"></i>
                                </div>
                                <h4 className="font-bold text-sm mb-1 uppercase tracking-tighter">3er Lugar (E)</h4>
                                <p className="text-[10px] text-gray-400">Incubadora Kaman UCSP (Arequipa)</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 border-green-500/30">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                                    <i className="fas fa-rocket text-green-500 text-xl"></i>
                                </div>
                                <h4 className="font-bold text-sm mb-1 uppercase tracking-tighter">Acreditados</h4>
                                <p className="text-[10px] text-gray-400">Startup Perú 13G ProInnovate</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Metrics Bar */}
                <section className="py-12 border-b border-white/5 bg-white/[0.02]">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {metrics.map((m, i) => (
                                <div key={i} className="text-center group">
                                    <i className={`fas ${m.icon} text-[#d4af37] text-2xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity`}></i>
                                    <div className="text-3xl font-bold text-white mb-1">{m.value}</div>
                                    <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">{m.label}</div>
                                    <div className="text-gray-500 text-xs mt-1">{m.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Problem & Solution Grid */}
                <section className="py-24 max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-[#f59e0b] flex items-center gap-3">
                                <span className="w-12 h-[2px] bg-[#f59e0b]"></span>
                                EL PROBLEMA
                            </h2>
                            <h3 className="text-4xl font-bold leading-tight">
                                El 85% de las pymes tiene miedo de perder dinero en Google o Meta Ads.
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Siguen gastando S/ 165,000 semanales en papel porque lo gratis (FB Marketplace/WhatsApp) solo le funciona al 3%.
                                El modelo impreso muere, pero no tienen una alternativa que les dé confianza.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <i className="fas fa-times-circle text-red-500 mt-1"></i>
                                    <span>700,000 páginas mensuales terminan en la basura.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <i className="fas fa-times-circle text-red-500 mt-1"></i>
                                    <span>Big Tech: Demasiado complejas y no personalizables regionalmente.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[#d4af37]/10 rounded-3xl blur-2xl group-hover:bg-[#d4af37]/20 transition-all"></div>
                            <div className="relative bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-xl">
                                <h2 className="text-3xl font-bold text-[#1a56db] mb-6 flex items-center gap-3">
                                    NUESTRA IA (ADIS)
                                </h2>
                                <p className="text-xl font-medium mb-6">
                                    Publicidad físico-digital hiperlocalizada y personalizada.
                                </p>
                                <div className="space-y-6 text-gray-300">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-[#1a56db]/20 flex items-center justify-center shrink-0">
                                            <i className="fas fa-robot text-[#1a56db]"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">No es solo ChatGPT</h4>
                                            <p className="text-sm">Redes neuronales propias entrenadas con ofertas locales reales.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                                            <i className="fas fa-bolt text-green-500"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">3 Clics</h4>
                                            <p className="text-sm">Nuestra IA crea, edita y publica avisos en segundos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video & Deck Section - The "Evidence" */}
                <section id="pitch-files" className="py-24 bg-black/40">
                    <div className="max-w-6xl mx-auto px-4 text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">El Pitch en Acción</h2>
                        <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
                    </div>

                    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Video */}
                        <div id="deck-video" className="space-y-6 scroll-mt-32">
                            <div className="bg-[#0d1b2e] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <div className="aspect-[9/16] max-w-[340px] mx-auto">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/ji2Eo2d40Zs"
                                        title="Pitch Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="p-4 text-center">
                                <h4 className="font-bold text-xl mb-1">Video Pitch (60s)</h4>
                                <p className="text-gray-500 text-sm">Visión rápida del problema y tracción actual.</p>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div id="deck-pdf" className="space-y-6 flex flex-col h-full scroll-mt-32">
                            <div className="bg-[#0d1b2e] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative w-full h-full flex-grow group">
                                <div className="w-full h-full overflow-x-auto overflow-y-hidden custom-scrollbar">
                                    <iframe
                                        src="/deck/pitch-deck.pdf#view=FitH&toolbar=0&navpanes=0"
                                        className="w-[200%] md:w-full h-full min-h-[500px] md:min-h-[600px] border-none"
                                        title="Pitch Deck PDF"
                                        style={{ border: 'none' }}
                                    ></iframe>
                                </div>
                                <div className="absolute top-4 right-4 group-hover:opacity-100 opacity-0 transition-opacity z-10">
                                    <a href="/deck/pitch-deck.pdf" target="_blank" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#d4af37]">
                                        <i className="fas fa-expand"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="p-4 text-center">
                                <h4 className="font-bold text-xl mb-1">Pitch Deck Completo</h4>
                                <p className="text-gray-500 text-sm">Full roadmap, unit economics y estrategia comercial.</p>
                                <a href="/deck/pitch-deck.pdf" download className="mt-4 inline-flex items-center gap-2 text-[#d4af37] font-bold hover:underline">
                                    <i className="fas fa-file-pdf"></i> Descargar copia para revisión offline
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24 max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">El Equipo Ejecutor</h2>
                        <p className="text-gray-400">Trabajando juntos por 4 años, ganadores de 3 hackathones.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Shantall */}
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#f59e0b]/30 transition-all group">
                            <div className="flex gap-6 items-center mb-6">
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#d4af37] flex items-center justify-center text-3xl font-bold">SZ</div>
                                <div>
                                    <h3 className="text-2xl font-bold">Shantall Zarai Ascue Valdez</h3>
                                    <p className="text-[#f59e0b] font-bold">CEO & CMO</p>
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Comunicadora y especialista en SEO/Growth. Seleccionada **Femlab de UTEC Ventures**.
                                Captó más de 300 clientes en solo 6 meses. Experiencia en TV, Radio y Sector Público.
                            </p>
                            <div className="flex gap-4 opacity-50">
                                <i className="fab fa-linkedin text-xl"></i>
                                <i className="fas fa-envelope text-xl"></i>
                            </div>
                        </div>

                        {/* Jairo */}
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#1a56db]/30 transition-all group">
                            <div className="flex gap-6 items-center mb-6">
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1a56db] to-[#2563eb] flex items-center justify-center text-3xl font-bold">JS</div>
                                <div>
                                    <h3 className="text-2xl font-bold">Jairo Saul Salas Quiñones</h3>
                                    <p className="text-[#1a56db] font-bold">CTO & COO</p>
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Sénior Full Stack con 5 años como CTO en 3 startups (EdTech/Logística).
                                Diseñó toda la arquitectura de IA y redes neuronales de personalización de PublicAdis.
                            </p>
                            <div className="flex gap-4 opacity-50">
                                <i className="fab fa-github text-xl"></i>
                                <i className="fab fa-linkedin text-xl"></i>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-4">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1a56db] to-[#0a1626] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/40">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Escalamos PublicAdis?</h2>
                        <p className="text-xl text-blue-100 mb-12 opacity-80">
                            Estamos listos para replicar este modelo en todo el Perú y LATAM.
                            Nuestra plataforma ya es multi-idioma.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="mailto:publicadiss@gmail.com" className="px-10 py-5 bg-white text-[#0a1626] font-bold rounded-2xl hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3">
                                <i className="fas fa-calendar-check"></i> Agendar reunión
                            </a>
                            <a href="https://wa.me/51937054328" className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                                <i className="fab fa-whatsapp"></i> WhatsApp Directo
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer info */}
                <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5">
                    <p>© 2026 ADIS TECHNOLOGICAL PLATFORMS S.A.C. | Cusco, Perú | Built for UTEC Ventures</p>
                </footer>

            </div>
        </Layout>
    );
};

export default DeckPage;

