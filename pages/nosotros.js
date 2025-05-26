import React from 'react';
import Layout from '../src/components/Layout'; // Asegúrate que la ruta sea correcta
import Image from 'next/image';
// Podrías importar íconos si los usas para los valores o secciones
// import { RocketLaunchIcon, TargetIcon, EyeIcon, UsersIcon, HandshakeIcon, SparklesIcon } from '@heroicons/react/24/outline'; // Ejemplo

export default function AboutUs() {
  return (
    <Layout
      title="Nosotros: Reimaginando la Publicidad en Latinoamérica | PublicAdis"
      description="Conoce la historia, misión y visión de PublicAdis, el ecosistema publicitario creado para impulsar a los negocios de LATAM hacia un crecimiento sin precedentes."
    >
      {/* Hero Section - Impacto Visual y Mensaje Central */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-down">
            Nacimos para <span className="block md:inline">Revolucionar tu Alcance.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up">
            En un mundo saturado de ruido, creamos el ecosistema que da voz y poder a los negocios
            de Latinoamérica. Somos PublicAdis, y estamos aquí para llevar tu mensaje más lejos, más
            alto, más fuerte.
          </p>
        </div>
      </section>

      {/* Nuestra Historia - El Origen de una Revolución */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestra Historia: El Sueño de Nivelar el Campo de Juego
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Todo gran cambio comienza con una pregunta audaz. La nuestra fue: ¿Y si la publicidad
              de alto impacto no fuera un privilegio, sino un derecho para cada emprendedor en
              Latinoamérica?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Surgimos de la misma trinchera que muchos negocios en Cusco y LATAM. Vimos de
                primera mano cómo ideas brillantes luchaban por ser vistas, cómo el potencial se
                ahogaba en la complejidad de las herramientas digitales o en los costos prohibitivos
                de la publicidad tradicional. El mercado estaba fragmentado, las soluciones eran
                genéricas y la frustración, palpable.
              </p>
              <p>
                Como fundadores de Buscadis, nuestro marketplace de clasificados, sentimos ese mismo
                dolor. Necesitábamos promocionarnos, pero nos encontramos con un muro. Fue entonces,
                entre finales de 2022 y principios de 2023, que la chispa de PublicAdis se encendió:
                no solo como una solución para nosotros, sino como una{' '}
                <span className="font-semibold text-purple-600">
                  promesa para miles de negocios
                </span>
                .
              </p>
              <p>
                Decidimos dejar de ser espectadores y convertirnos en arquitectos del cambio. Así
                nació PublicAdis, no como una simple plataforma, sino como un{' '}
                <span className="font-semibold text-purple-600">
                  ecosistema publicitario integral
                </span>
                , diseñado desde Latinoamérica, para Latinoamérica. Un lugar donde la tecnología de
                vanguardia se encuentra con el entendimiento profundo de nuestras realidades
                locales.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl relative h-[400px]">
              <Image
                src="/images/about-us-placeholder.jpg"
                alt="El equipo de PublicAdis o una imagen inspiradora"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión - Nuestro Norte y Nuestro Legado */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nuestra Misión: <span className="text-pink-500">Empoderar tu Presente</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Democratizar el acceso a publicidad de clase mundial para cada negocio en
                Latinoamérica, desde la PYME cusqueña más aguerrida hasta la startup emergente con
                sueños de grandeza.
              </p>
              <p className="text-lg text-gray-700">
                Lo hacemos a través de un ecosistema{' '}
                <span className="font-semibold">innovador, efectivo y accesible</span>, que integra
                múltiples canales online y offline, generando resultados medibles y transformando la
                inversión publicitaria en crecimiento exponencial. Queremos ser el aliado
                estratégico que convierte tu potencial en dominio del mercado.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nuestra Visión:{' '}
                <span className="text-red-500">Construir el Futuro Publicitario de LATAM</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Ser la plataforma publicitaria{' '}
                <span className="font-semibold">líder y más amada</span> en Latinoamérica,
                reconocida por nuestra capacidad para catalizar el éxito de millones de negocios,
                desafiando a los gigantes globales con soluciones hiperlocales, tecnología
                disruptiva y un compromiso inquebrantable con el desarrollo económico y social de
                nuestra región.
              </p>
              <p className="text-lg text-gray-700">
                Aspiramos a un futuro donde PublicAdis, junto a Buscadis y Noticiadis, sea sinónimo
                de oportunidad, innovación y crecimiento para cada rincón de Latinoamérica, desde
                Cusco para el mundo. Queremos ser la prueba de que el ingenio latinoamericano puede
                construir el futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* El Corazón de PublicAdis: Los Fundadores */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">El Corazón de PublicAdis</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detrás de la tecnología y la estrategia, hay una pasión compartida y una visión
              unificada.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {/* Jairo Salas Quiñones */}
            <div className="max-w-sm bg-gray-50 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              {/* <img className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-500" src="/images/jairo-profile.jpg" alt="Jairo Salas Quiñones" /> */}
              <div className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-500 bg-gray-300 flex items-center justify-center text-gray-500">
                Foto
              </div>{' '}
              {/* Placeholder */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">Jairo Salas Quiñones</h3>
              <p className="text-purple-600 font-medium mb-3">
                CEO / CTO / Ingeniero en Ciencias de la Computación
              </p>
              <p className="text-gray-700 text-sm">
                Apasionado por construir soluciones disruptivas que resuelvan problemas reales a
                gran escala. Jairo lidera la estrategia tecnológica de PublicAdis, asegurando que
                nuestra plataforma esté a la vanguardia y sea capaz de cumplir nuestra ambiciosa
                visión.
              </p>
            </div>
            {/* Shantall Ascue Valdez */}
            <div className="max-w-sm bg-gray-50 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              {/* <img className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-pink-500" src="/images/shantall-profile.jpg" alt="Shantall Ascue Valdez" /> */}
              <div className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-pink-500 bg-gray-300 flex items-center justify-center text-gray-500">
                Foto
              </div>{' '}
              {/* Placeholder */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">Shantall Ascue Valdez</h3>
              <p className="text-pink-500 font-medium mb-3">
                COO / CMO / Licenciada en Ciencias de la Comunicación
              </p>
              <p className="text-gray-700 text-sm">
                Comunicadora con una habilidad innata para conectar con audiencias y crear mensajes
                impactantes. Shantall lidera la visión de marketing y la construcción de comunidad,
                asegurando que la voz de PublicAdis resuene con fuerza.
              </p>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-12 text-lg max-w-2xl mx-auto">
            Juntos, combinamos la{' '}
            <span className="font-semibold text-purple-600">excelencia técnica</span> con la{' '}
            <span className="font-semibold text-pink-500">maestría en comunicación</span>, forjando
            un equipo con la visión y la capacidad de ejecución para hacer de PublicAdis un
            referente global.
          </p>
        </div>
      </section>

      {/* Nuestros Valores - Los Pilares de Nuestra Identidad */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Valores: El ADN de PublicAdis</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Estos no son solo palabras en una pared; son los principios que guían cada decisión,
              cada línea de código, cada interacción. Son la brújula que nos dirige hacia la
              excelencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Excelencia Implacable',
                description:
                  "Aspiramos a la perfección en todo. No nos conformamos con 'bueno', buscamos ser extraordinarios, mejorando continuamente para ofrecer lo mejor.",
                color: 'purple',
              },
              {
                title: 'Innovación Disruptiva',
                description:
                  'Desafiamos el status quo. Creamos, experimentamos y aplicamos nuevas ideas para revolucionar la publicidad y dar ventajas únicas a nuestros clientes.',
                color: 'pink',
              },
              {
                title: 'Resultados Obsesivos',
                description:
                  'Nuestra meta es tu crecimiento. Nos enfocamos en resultados tangibles, medibles y que transformen tu negocio. Tu éxito es nuestra métrica definitiva.',
                color: 'red',
              },
              {
                title: 'Transparencia Radical',
                description:
                  'Operamos con honestidad y claridad total. Sabrás cómo se invierte tu dinero y qué resultados obtienes. La confianza es nuestro cimiento.',
                color: 'indigo',
              },
              {
                title: 'Compromiso Absoluto',
                description:
                  'Somos tus socios estratégicos. Nos involucramos profundamente con tus objetivos, considerando tu éxito como el nuestro.',
                color: 'green',
              },
              {
                title: 'Adaptabilidad Inteligente',
                description:
                  'Cada negocio es único. Escuchamos, analizamos y personalizamos soluciones flexibles que se ajustan a tus necesidades y metas específicas.',
                color: 'yellow',
              },
              {
                title: 'Mentalidad de Crecimiento Exponencial',
                description:
                  'Pensamos en grande, actuamos con audacia. Buscamos la escala y el impacto masivo, para nuestros clientes y para PublicAdis.',
                color: 'blue',
              },
              {
                title: 'Integridad Inquebrantable',
                description:
                  'Hacemos lo correcto, siempre. La ética y la responsabilidad guían cada una de nuestras acciones.',
                color: 'teal',
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 rounded-lg shadow-xl border-l-4 border-${value.color}-500`}
              >
                {/* Icono podría ir aquí */}
                <h3 className={`text-2xl font-semibold mb-3 text-${value.color}-400`}>
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la Acción Implícita / Conclusión Inspiradora */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Únete a la Revolución Publicitaria.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            PublicAdis es más que una plataforma; es un movimiento. Un movimiento para empoderar a
            los visionarios, a los constructores, a los soñadores de Latinoamérica. Si crees en el
            poder de las grandes ideas y en la publicidad que inspira acción, estás en el lugar
            correcto.
          </p>
          {/* Podrías añadir botones aquí si es pertinente, ej: "Conoce nuestros servicios" o "Contacta con nosotros" */}
          {/* Ejemplo de botón:
          <a
            href="/servicios" // Cambiar a la ruta correcta
            className="inline-block bg-purple-600 text-white font-semibold px-10 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg"
          >
            Descubre Cómo Podemos Impulsarte
          </a>
          */}
        </div>
      </section>
    </Layout>
  );
}
