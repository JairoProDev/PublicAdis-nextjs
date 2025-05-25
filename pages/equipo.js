import React from 'react';
import Layout from '../src/components/Layout'; // Asegúrate que la ruta sea correcta
import Link from 'next/link'; // Necesario para el botón de "Ver Oportunidades"

export default function Team() {
  const founders = [
    {
      name: 'Jairo Salas Quiñones',
      role: 'CEO / CTO / Ingeniero en Ciencias de la Computación',
      bio: 'Visionario tecnológico y arquitecto de la disrupción en PublicAdis. Jairo impulsa la innovación constante, liderando el desarrollo de nuestra plataforma de vanguardia con la misión de resolver problemas reales a gran escala y transformar la industria publicitaria en Latinoamérica. Su pasión es construir el futuro, hoy.',
      image: '/images/jairo-profile.jpg', // Reemplazar con tu foto real
      socialLinks: {
        linkedin: 'https://linkedin.com/in/JairoSaulProDev',
        github: 'https://github.com/JairoProDev',
        tiktok: 'https://tiktok.com/@JairoProDev',
        instagram: 'https://instagram.com/JairoProDev',
        facebook: 'https://facebook.com/JairoProDev',
        whatsapp: 'https://wa.me/51937054328', // Asegúrate que el número esté en formato internacional correcto para wa.me
      },
      bgColor: 'from-purple-600 to-pink-500', // Gradiente para Jairo
    },
    {
      name: 'Shantall Ascue Valdez',
      role: 'COO / CMO / Licenciada en Ciencias de la Comunicación',
      bio: 'Estratega de la comunicación y arquitecta de la experiencia en PublicAdis. Shantall tiene una habilidad innata para conectar con las audiencias, construir comunidades sólidas y asegurar que la voz de nuestra marca resuene con impacto. Lidera las operaciones y el marketing con una visión centrada en el cliente y la excelencia.',
      image: '/images/shantall-profile.jpg', // Reemplazar con foto real de Shantall
      socialLinks: {
        linkedin: 'https://linkedin.com/in/ShantallZaraii',
        tiktok: 'https://tiktok.com/@ShantallZaraii',
        instagram: 'https://instagram.com/ShantallZaraii',
        facebook: 'https://facebook.com/ShantallZaraii',
        whatsapp: 'https://wa.me/51990551461', // Asegúrate que el número esté en formato internacional correcto para wa.me
      },
      bgColor: 'from-pink-500 to-red-500', // Gradiente para Shantall
    },
  ];

  // SVGs para los iconos de redes sociales
  const icons = {
    linkedin: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
      </svg>
    ),
    github: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    tiktok: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.28-1.1-.63-1.58-1.04-.3-.26-.56-.57-.79-.91-.09-.13-.18-.27-.28-.42V19.5c0 .99.21 1.97.62 2.88.48 1.09 1.24 2.03 2.23 2.78.28.21.57.42.88.62 1.18.77 2.53 1.26 3.94 1.41V22.4c-1.31.02-2.61.01-3.91.02-.08-1.53-.63-3.09-1.75-4.17-1.12-1.11-2.7-1.62-4.24-1.79V4.03C8.68 4.08 7.23 4.38 5.93 5c.57.28 1.1.63 1.58 1.04.3.26.56.57.79.91.09.13.18.27.28.42V0H12.525z" />
      </svg>
    ),
    instagram: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.305-1.487.74-2.173 1.425-.686.685-1.12 1.39-1.425 2.173-.298.765-.498 1.635-.56 2.913-.056 1.28-.072 1.687-.072 4.947s.016 3.667.072 4.947c.062 1.278.262 2.148.56 2.913.305.784.74 1.487 1.425 2.173.685.686 1.39 1.12 2.173 1.425.765.298 1.635.498 2.913.56 1.28.056 1.687.072 4.947.072s3.667-.016 4.947-.072c1.278-.062 2.148-.262 2.913-.56.784-.305 1.487-.74 2.173-1.425.686-.685 1.12-1.39 1.425-2.173.298-.765.498-1.635.56-2.913.056-1.28.072-1.687.072-4.947s-.016-3.667-.072-4.947c-.062-1.278-.262-2.148-.56-2.913-.305-.784-.74-1.487-1.425-2.173-.685-.686-1.39-1.12-2.173-1.425C16.947.333 16.077.132 14.797.072 13.517.015 13.11 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.053 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.381-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.053-1.805-.249-2.227-.413-.562-.217-.96-.477-1.381-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.053-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.381.42-.419.819-.679-1.381-.896.422-.164 1.057-.36 2.227-.413C8.415 2.176 8.797 2.16 12 2.16zm0 5.185c-1.925 0-3.487 1.562-3.487 3.487s1.562 3.487 3.487 3.487 3.487-1.562 3.487-3.487S13.925 7.345 12 7.345zm0 5.814c-1.284 0-2.328-1.044-2.328-2.328s1.044-2.328 2.328-2.328 2.328 1.044 2.328 2.328-1.044 2.328-2.328 2.328zM18.305 5.757a1.437 1.437 0 100 2.874 1.437 1.437 0 000-2.874z" clipRule="evenodd"/>
      </svg>
    ),
    facebook: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
    whatsapp: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.04 2.01A9.99 9.99 0 002.05 12a9.99 9.99 0 0010.63 9.91c1.99 0 3.89-.58 5.51-1.61l1.61.49-.5-1.57c.94-1.56 1.48-3.42 1.48-5.33a9.99 9.99 0 00-9.7-9.88zM12.04 4.01c4.41 0 7.98 3.57 7.98 7.98 0 1.8-.6 3.49-1.62 4.84l.34 1.07-.92-.3c-1.26.81-2.76 1.29-4.36 1.29-4.41 0-7.98-3.57-7.98-7.98s3.57-7.98 7.98-7.98zm0 0"/>
        <path d="M17.36 14.82c-.18-.1-.92-.46-1.06-.51s-.26-.08-.37.08c-.11.16-.4.51-.49.61s-.18.11-.34.03c-.16-.07-.66-.24-1.26-.77-.47-.41-.78-.92-.87-1.09s-.09-.26 0-.34c.08-.08.18-.21.26-.31.09-.1.11-.16.16-.26s.03-.21-.01-.29c-.05-.08-.37-.9-.51-1.23s-.26-.29-.37-.29h-.3c-.11 0-.26.03-.39.16s-.51.49-.51 1.2c0 .7.51 1.39.59 1.49.08.1.95 1.46 2.3 2.03.32.16.57.21.77.26.36.08.54.05.7-.05.19-.11.29-.21.39-.42.1-.21.1-.39.08-.47z"/>
      </svg>
    ),
  };

  return (
    <Layout
      title="Nuestro Equipo Fundador | PublicAdis"
      description="Conoce a los visionarios Jairo Salas y Shantall Ascue, el equipo fundador que está revolucionando la publicidad en Latinoamérica con PublicAdis."
    >
      {/* Hero Section del Equipo */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-down">
            El Dúo Dinámico <span className="block md:inline">Detrás de la Revolución.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up">
            Somos Jairo y Shantall, los fundadores de PublicAdis. Unidos por una visión y pasión inquebrantable por el futuro de los negocios locales.
          </p>
        </div>
      </section>

      {/* Sección de Fundadores */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Conoce a Nuestros Fundadores</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La fuerza motriz de PublicAdis: una combinación de visión tecnológica y maestría en comunicación, dedicados a construir el futuro de la publicidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {founders.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-xl shadow-2xl overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300"
              >
                <div className={`h-80 md:h-96 w-full bg-gradient-to-br ${member.bgColor} relative overflow-hidden`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
                  />
                   <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className={`text-lg font-semibold mb-4 ${member.name.includes('Jairo') ? 'text-purple-600' : 'text-pink-600'}`}>{member.role}</p>
                  <p className="text-gray-700 leading-relaxed mb-6 text-md flex-grow">{member.bio}</p>
                  <div className="mt-auto">
                    {Object.entries(member.socialLinks).length > 0 && (
                      <div className="flex space-x-4 justify-center flex-wrap">
                        {Object.entries(member.socialLinks).map(([key, link]) => (
                          link && icons[key] && ( // Verifica que el link y el icono existan
                            <a
                              key={key}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${member.name} en ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                              className="text-gray-500 hover:text-purple-600 transition-colors p-1" // Añadido p-1 para mejor área de click
                            >
                              {icons[key]}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Únete a Nuestro Equipo / Visión de Crecimiento */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Forjando el Futuro: <span className="text-purple-600">Buscamos Constructores de Sueños</span></h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            PublicAdis está en una trayectoria de crecimiento exponencial, y el corazón de nuestra expansión será un equipo de individuos extraordinarios. Aunque hoy somos un núcleo fundador ágil, estamos sentando las bases para atraer al talento más brillante y apasionado de Latinoamérica.
          </p>
          <div className="max-w-4xl mx-auto text-left space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-gray-800">Lo Que Buscaremos:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
              <li><span className="font-semibold text-pink-500">Innovadores Audaces:</span> Desarrolladores, ingenieros de IA, y tecnólogos que no teman desafiar lo convencional y construir soluciones que marquen la diferencia.</li>
              <li><span className="font-semibold text-pink-500">Estrategas de Crecimiento:</span> Expertos en marketing digital, data scientists y especialistas en ventas que vivan para generar resultados medibles y exponenciales.</li>
              <li><span className="font-semibold text-pink-500">Creadores de Conexiones:</span> Comunicadores, diseñadores y especialistas en experiencia del cliente que sepan cómo construir marcas amadas y comunidades comprometidas.</li>
              <li><span className="font-semibold text-pink-500">Líderes con Propósito:</span> Individuos con una mentalidad de excelencia, que busquen no solo un trabajo, sino una misión para transformar nuestra región.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8">Nuestra Promesa Como Equipo:</h3>
            <p className="text-lg text-gray-700">
              En PublicAdis, aspiramos a construir una cultura donde la <span className="font-semibold">excelencia</span> sea la norma, la <span className="font-semibold">innovación</span> una práctica diaria, y el <span className="font-semibold">crecimiento</span> (personal y profesional) una garantía. Ofreceremos la oportunidad de:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
              <li>Ser pionero en la construcción de un gigante tecnológico latinoamericano.</li>
              <li>Trabajar en proyectos desafiantes con impacto real y masivo.</li>
              <li>Aprender y crecer junto a un equipo de alto rendimiento en un ambiente colaborativo y dinámico.</li>
              <li>Dejar tu huella y ser parte de una historia de éxito que recién comienza.</li>
            </ul>
          </div>
          <Link
            href="/carreras" // Asegúrate que esta página exista o esté planificada
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold px-10 py-4 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Mantente Conectado: Futuras Oportunidades
          </Link>
          <p className="text-md text-gray-600 mt-6 max-w-2xl mx-auto">
            Pronto abriremos nuestras puertas a nuevos talentos. Si resuenas con nuestra visión y quieres ser parte de la próxima gran revolución publicitaria, ¡queremos saber de ti!
          </p>
        </div>
      </section>
    </Layout>
  );
}