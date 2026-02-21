import React from 'react';
import Layout from '@/components/Layout';

const DeckPage = () => {
    return (
        <Layout
            title="Investment Pitch Deck | PublicAdis"
            description="Presentación de PublicAdis para UTEC Ventures. Visión, tracción y futuro de la plataforma publicitaria líder en Cusco."
        >
            <div className="bg-[#0a1626] text-white min-h-screen py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Investment Pitch Deck
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Transformando la presencia digital de los negocios en Cusco y el Perú.
                            Una oportunidad de inversión en tecnología y publicidad.
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <span className="px-4 py-1.5 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 text-sm font-semibold uppercase tracking-wider">
                                Exclusivo para UTEC Ventures
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Video Pitch Column */}
                        <div className="space-y-6">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#1a56db] to-[#d4af37] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="aspect-[9/16] w-full max-w-[320px] mx-auto">
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
                            </div>
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-[#d4af37]">
                                    <i className="fas fa-play-circle text-[#d4af37]"></i> Video Pitch
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Una breve introducción a nuestra visión y cómo estamos resolviendo los problemas de visibilidad digital para las PyMEs en regiones.
                                </p>
                            </div>
                        </div>

                        {/* Deck Column */}
                        <div className="space-y-6">
                            <div className="relative group h-full">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-[#f59e0b] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-[#0d1b2e] rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center min-h-[500px] lg:h-[570px] border border-white/10">
                                    <iframe
                                        src="/deck/pitch-deck.pdf#toolbar=0&navpanes=0"
                                        className="w-full h-full border-none"
                                        title="Pitch Deck PDF"
                                    ></iframe>

                                    {/* Fallback component - will show if file is missing */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a1626]/95 p-8 text-center pointer-events-none group-data-[pdf-loaded=true]:hidden" id="pdf-fallback">
                                        <div className="w-20 h-20 bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-6">
                                            <i className="fas fa-file-pdf text-4xl text-[#d4af37]"></i>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Pitch Deck Completo</h3>
                                        <p className="text-gray-300 mb-8 max-w-sm">Para una mejor experiencia, asegúrese de que el archivo 'pitch-deck.pdf' esté en su carpeta '/public/deck/'.</p>
                                        <div className="pointer-events-auto">
                                            <a
                                                href="/deck/pitch-deck.pdf"
                                                target="_blank"
                                                className="px-8 py-3 bg-[#d4af37] text-[#0a1626] font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105 inline-block"
                                            >
                                                Ver PDF en pantalla completa
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-[#f59e0b]">
                                    <i className="fas fa-chart-line text-[#f59e0b]"></i> Deck de Inversión
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Contiene nuestra propuesta de valor, análisis de mercado, modelo de negocio y el roadmap de PublicAdis para los próximos 2026-2027.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-24 text-center bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10">
                        <h2 className="text-3xl font-bold mb-4">¿Preparado para el siguiente paso?</h2>
                        <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
                            Estamos listos para escalar PublicAdis y transformar la publicidad digital en el Perú.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="mailto:jairo@publicadis.com" className="px-10 py-4 bg-white text-[#0a1626] font-bold rounded-xl hover:bg-[#d4af37] transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                                <i className="fas fa-calendar-check"></i> Agendar reunión
                            </a>
                            <a href="https://wa.me/51937054328" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <i className="fab fa-whatsapp text-green-500"></i> Contacto Directo
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Script to handle PDF loading state */}
            <script dangerouslySetInnerHTML={{
                __html: `
        // Simple script to hide the fallback if the PDF loads successfully
        // Note: Due to security restrictions (CORS/Frame-busting), this is a best-effort approach.
        // For local files in /public, it usually works within the same domain.
        window.addEventListener('DOMContentLoaded', () => {
          const iframe = document.querySelector('iframe[title="Pitch Deck PDF"]');
          const fallback = document.getElementById('pdf-fallback');
          
          if (iframe) {
            iframe.addEventListener('load', () => {
              try {
                // If we can access the content, verify it's not a 404
                if (iframe.contentDocument && iframe.contentDocument.body.innerHTML.length > 0) {
                  fallback.style.opacity = '0';
                  setTimeout(() => fallback.style.display = 'none', 500);
                }
              } catch (e) {
                // If cross-origin prevented access, we assume it loaded (PDFs often are cross-origin or restricted)
                // But since it's local /public path, we can also try a fetch check
                fetch('/deck/pitch-deck.pdf', { method: 'HEAD' })
                  .then(res => {
                    if(res.ok) {
                      fallback.style.opacity = '0';
                      setTimeout(() => fallback.style.display = 'none', 500);
                    }
                  });
              }
            });
          }
        });
      `}} />
        </Layout>
    );
};

export default DeckPage;
