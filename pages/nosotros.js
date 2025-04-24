import React from 'react';
import Layout from '../src/components/Layout';

export default function AboutUs() {
  return (
    <Layout
      title="Sobre Nosotros | PublicAdis"
      description="Conozca más sobre PublicAdis, la plataforma publicitaria premium en Cusco"
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Conoce más sobre PublicAdis, la plataforma publicitaria líder en Cusco
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
              <p className="text-gray-700 mb-4">
                PublicAdis nació en 2020 con la visión de transformar la manera en que las empresas
                de Cusco acceden a servicios publicitarios. Identificamos que muchos negocios
                locales enfrentaban dificultades para promocionarse efectivamente en el entorno
                digital y tradicional.
              </p>
              <p className="text-gray-700 mb-4">
                Con un equipo de profesionales especializados en marketing, tecnología y medios
                publicitarios, creamos una plataforma integral que ofrece soluciones publicitarias
                adaptadas a las necesidades específicas del mercado cusqueño.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
              <p className="text-gray-700">
                Potenciar el crecimiento de los negocios en Cusco proporcionando servicios
                publicitarios innovadores, efectivos y accesibles que generen resultados medibles y
                contribuyan al desarrollo empresarial de la región.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Nuestra Visión</h2>
              <p className="text-gray-700">
                Convertirnos en la plataforma publicitaria líder en el sur del Perú, reconocida por
                su innovación, calidad de servicio y capacidad para impulsar el éxito comercial de
                nuestros clientes, contribuyendo al desarrollo económico y social de la región.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Nuestros Valores</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <span className="font-medium">Innovación:</span> Buscamos constantemente nuevas
                  formas de mejorar nuestros servicios y adaptarnos a las tendencias del mercado.
                </li>
                <li>
                  <span className="font-medium">Efectividad:</span> Nos enfocamos en generar
                  resultados tangibles y medibles para nuestros clientes.
                </li>
                <li>
                  <span className="font-medium">Transparencia:</span> Mantenemos una comunicación
                  clara y honesta sobre nuestros procesos y resultados.
                </li>
                <li>
                  <span className="font-medium">Compromiso:</span> Nos involucramos profundamente
                  con los objetivos de nuestros clientes, considerándolos como propios.
                </li>
                <li>
                  <span className="font-medium">Adaptabilidad:</span> Personalizamos nuestras
                  soluciones según las necesidades específicas de cada cliente.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
