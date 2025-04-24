import React from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';

export default function Team() {
  const teamMembers = [
    {
      name: 'Carlos Ramírez',
      role: 'CEO & Fundador',
      bio: 'Con más de 10 años de experiencia en marketing digital y publicidad, Carlos fundó PublicAdis con la visión de transformar la publicidad regional.',
      image: '/placeholder/team-member-1.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/carlosramirez',
        twitter: 'https://twitter.com/carlosramirez',
      },
    },
    {
      name: 'Ana Morales',
      role: 'Directora de Marketing',
      bio: 'Especialista en estrategias de marketing digital y análisis de datos, con experiencia en grandes empresas nacionales e internacionales.',
      image: '/placeholder/team-member-2.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/anamorales',
      },
    },
    {
      name: 'Miguel Sánchez',
      role: 'Director de Tecnología',
      bio: 'Ingeniero de software con especialización en desarrollo web y aplicaciones móviles. Experto en implementación de soluciones tecnológicas.',
      image: '/placeholder/team-member-3.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/miguelsanchez',
        github: 'https://github.com/miguelsanchez',
      },
    },
    {
      name: 'Lucía Herrera',
      role: 'Directora de Ventas',
      bio: 'Con amplia experiencia en ventas B2B y desarrollo de negocios, Lucía ha liderado el crecimiento de clientes empresariales de PublicAdis.',
      image: '/placeholder/team-member-4.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/luciaherrera',
      },
    },
    {
      name: 'Jorge Torres',
      role: 'Director Creativo',
      bio: 'Diseñador gráfico y creativo con experiencia en agencias de publicidad internacionales. Experto en branding y diseño de campañas.',
      image: '/placeholder/team-member-5.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/jorgetorres',
        behance: 'https://behance.net/jorgetorres',
      },
    },
    {
      name: 'Patricia Luna',
      role: 'Especialista en Atención al Cliente',
      bio: 'Dedicada a garantizar la mejor experiencia para nuestros clientes, Patricia se asegura de que cada negocio reciba un servicio personalizado.',
      image: '/placeholder/team-member-6.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/patricialuna',
      },
    },
  ];

  return (
    <Layout
      title="Nuestro Equipo | PublicAdis"
      description="Conozca al equipo detrás de PublicAdis, la plataforma publicitaria premium en Cusco"
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Nuestro Equipo</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Un grupo de profesionales apasionados por el marketing, la tecnología y el crecimiento
              empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-60 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-amber-400">{member.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a
                        href={member.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-gray-600"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {member.socialLinks.behance && (
                      <a
                        href={member.socialLinks.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:text-blue-700"
                      >
                        <i className="fab fa-behance"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Únete a Nuestro Equipo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Estamos siempre en busca de talentos apasionados por la innovación y el marketing
              digital. Revisa nuestras vacantes disponibles y forma parte de la revolución
              publicitaria en Cusco.
            </p>
            <Link
              href="/carreras"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Ver Oportunidades Laborales
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
