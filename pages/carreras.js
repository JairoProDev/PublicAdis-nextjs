import React from 'react';
import Layout from '../src/components/Layout';

export default function Careers() {
  const jobOpenings = [
    {
      title: 'Especialista en Marketing Digital',
      department: 'Marketing',
      location: 'Cusco',
      type: 'Tiempo Completo',
      description:
        'Buscamos un especialista en marketing digital con experiencia en gestión de campañas publicitarias en redes sociales, SEM y marketing de contenidos.',
      requirements: [
        'Experiencia mínima de 2 años en marketing digital',
        'Conocimiento avanzado de Google Ads, Facebook Ads y LinkedIn Ads',
        'Experiencia en análisis de datos y métricas de marketing',
        'Habilidades de redacción y creación de contenido',
        'Conocimiento de herramientas de diseño gráfico (nivel básico)',
      ],
      benefits: [
        'Salario competitivo',
        'Horario flexible',
        'Capacitación continua',
        'Bono por desempeño',
        'Ambiente laboral dinámico',
      ],
    },
    {
      title: 'Desarrollador Full Stack',
      department: 'Tecnología',
      location: 'Remoto',
      type: 'Tiempo Completo',
      description:
        'Estamos en busca de un desarrollador Full Stack con experiencia en React y Node.js para fortalecer nuestro equipo de desarrollo.',
      requirements: [
        'Experiencia mínima de 3 años como desarrollador Full Stack',
        'Conocimiento avanzado de React, Next.js, Node.js',
        'Experiencia con bases de datos SQL y NoSQL',
        'Conocimientos de desarrollo de APIs RESTful',
        'Experiencia en implementación de arquitecturas serverless',
      ],
      benefits: [
        'Salario competitivo',
        'Trabajo 100% remoto',
        'Equipamiento proporcionado por la empresa',
        'Horario flexible',
        'Oportunidades de crecimiento profesional',
      ],
    },
    {
      title: 'Ejecutivo de Ventas',
      department: 'Ventas',
      location: 'Cusco',
      type: 'Tiempo Completo',
      description:
        'Buscamos ejecutivos de ventas con experiencia en B2B para ampliar nuestra cartera de clientes corporativos.',
      requirements: [
        'Experiencia mínima de 2 años en ventas B2B',
        'Habilidades de negociación y cierre de ventas',
        'Conocimiento del mercado publicitario (deseable)',
        'Capacidad para trabajar por objetivos',
        'Excelentes habilidades de comunicación',
      ],
      benefits: [
        'Sueldo base + comisiones atractivas',
        'Capacitación en técnicas de venta avanzadas',
        'Plan de carrera definido',
        'Bonos por cumplimiento de metas',
        'Ambiente laboral orientado a resultados',
      ],
    },
  ];

  const values = [
    {
      icon: 'fa-lightbulb',
      title: 'Innovación',
      description:
        'Valoramos el pensamiento creativo y la búsqueda constante de nuevas soluciones.',
    },
    {
      icon: 'fa-handshake',
      title: 'Colaboración',
      description: 'Trabajamos juntos para lograr objetivos comunes, apoyándonos mutuamente.',
    },
    {
      icon: 'fa-chart-line',
      title: 'Crecimiento',
      description: 'Fomentamos el desarrollo personal y profesional de cada miembro del equipo.',
    },
    {
      icon: 'fa-bullseye',
      title: 'Resultados',
      description:
        'Nos enfocamos en lograr resultados tangibles para nuestros clientes y la empresa.',
    },
  ];

  return (
    <Layout
      title="Carreras | PublicAdis"
      description="Oportunidades laborales en PublicAdis, la plataforma publicitaria premium en Cusco"
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Trabaja con Nosotros</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Únete a nuestro equipo de profesionales apasionados por la innovación en publicidad y
              marketing digital
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              ¿Por qué trabajar en PublicAdis?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${value.icon} text-blue-600 text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Current Openings */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">Vacantes Disponibles</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-5 border-b border-gray-200">
                    <h3 className="text-xl font-bold text-blue-600">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <span className="inline-flex items-center text-sm text-gray-600">
                        <i className="fas fa-building mr-2"></i> {job.department}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-600">
                        <i className="fas fa-map-marker-alt mr-2"></i> {job.location}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-600">
                        <i className="fas fa-clock mr-2"></i> {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-700 mb-4">{job.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Requisitos:</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Beneficios:</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`mailto:carreras@publicadis.com?subject=Aplicación para ${job.title}`}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors"
                    >
                      Aplicar
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* No Current Openings */}
          {jobOpenings.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <div className="mb-4">
                <i className="fas fa-inbox text-5xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                No hay vacantes disponibles actualmente
              </h3>
              <p className="text-gray-600 mb-6">
                Aunque no tenemos posiciones abiertas en este momento, siempre estamos interesados
                en conocer profesionales talentosos.
              </p>
              <a
                href="mailto:carreras@publicadis.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
              >
                Enviar CV espontáneo
              </a>
            </div>
          )}

          {/* Contact for More Info */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">¿Tienes preguntas?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Si tienes alguna consulta sobre nuestros procesos de selección o las posiciones
              disponibles, no dudes en contactarnos. Estaremos encantados de ayudarte.
            </p>
            <a
              href="mailto:carreras@publicadis.com"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <i className="fas fa-envelope"></i>
              carreras@publicadis.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
