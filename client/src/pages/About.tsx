import { Link } from "wouter";

/**
 * Página About - Información sobre Amanecer
 * Estilo: Diseño suavizado con gradientes cálidos, animaciones fluidas y tipografía Fredoka/Poppins
 */

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
          <Link href="/">
            <img
              src="/images/logo-amanecer.png"
              alt="Amanecer Logo"
              className="h-12 w-auto drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 cursor-pointer"
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/">
              <span className="text-sm font-medium hover:text-orange-600 transition-colors duration-300 cursor-pointer">
                Inicio
              </span>
            </Link>
            <Link href="/about">
              <span className="text-sm font-medium text-orange-600 transition-colors duration-300 cursor-pointer">
                Sobre Nosotros
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-12 px-4 text-center">
        <h1 className="text-5xl font-bold text-orange-600 mb-4 font-fredoka animate-fade-in">
          Sobre Amanecer
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Conoce nuestra misión, visión y el impacto que generamos en la
          educación peruana
        </p>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        {/* Sección Misión */}
        <section className="mb-12 animate-slide-up">
          <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-orange-600 mb-4 font-fredoka">
              🎯 Nuestra Misión
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Amanecer: Educación del Mañana empodera estudiantes de zonas
              rurales y vulnerables, conectándolos con becas, programas y
              oportunidades educativas. Creemos que cada joven peruano merece
              acceso a información de calidad y la oportunidad de construir un
              futuro sin límites.
            </p>
          </div>
        </section>

        {/* Sección Visión */}
        <section className="mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-yellow-600 mb-4 font-fredoka">
              ✨ Nuestra Visión
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Un Perú donde cada joven pueda soñar en grande y construir su
              futuro sin límites. Visualizamos una sociedad donde la educación
              de calidad sea accesible para todos, independientemente de su
              ubicación geográfica o situación económica.
            </p>
          </div>
        </section>

        {/* Sección Impacto */}
        <section className="mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-8 shadow-lg border-2 border-orange-300">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 font-fredoka">
              📊 Nuestro Impacto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  14,000+
                </div>
                <p className="text-gray-700 font-semibold">Jóvenes Impactados</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-yellow-500 mb-2">2023</div>
                <p className="text-gray-700 font-semibold">Desde Nuestro Inicio</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-orange-600 mb-2">∞</div>
                <p className="text-gray-700 font-semibold">Oportunidades Compartidas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Servicios */}
        <section className="mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 font-fredoka">
              🚀 Qué Ofrecemos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                <div className="text-3xl">📚</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Charlas y Webinars</h3>
                  <p className="text-gray-600">
                    Sesiones informativas sobre becas, oportunidades y desarrollo
                    profesional
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                <div className="text-3xl">📅</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Calendario de Oportunidades
                  </h3>
                  <p className="text-gray-600">
                    Actualización mensual de becas, convocatorias y programas
                    educativos
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Comunidad Activa</h3>
                  <p className="text-gray-600">
                    Red de estudiantes y mentores compartiendo experiencias y
                    aprendizajes
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                <div className="text-3xl">🌍</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Presencia en Zonas Rurales
                  </h3>
                  <p className="text-gray-600">
                    Visitas directas a instituciones educativas en comunidades
                    vulnerables
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Valores */}
        <section className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-8 shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-6 font-fredoka">💡 Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Equidad</h3>
                <p>
                  Creemos que todos merecen oportunidades iguales de acceso a
                  educación de calidad
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Empoderamiento</h3>
                <p>
                  Buscamos fortalecer a los jóvenes para que sean protagonistas
                  de su propio futuro
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparencia</h3>
                <p>
                  Operamos con honestidad y claridad en todas nuestras acciones
                  y comunicaciones
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Impacto</h3>
                <p>
                  Medimos nuestro éxito por las vidas transformadas y los
                  sueños alcanzados
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
