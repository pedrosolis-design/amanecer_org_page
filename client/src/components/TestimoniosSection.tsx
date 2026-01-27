/**
 * Testimonios Section Component
 * Displays impact stories and testimonials from Amanecer's work
 */

export default function TestimoniosSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-16 animate-slide-up-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Historias de Impacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conoce las historias reales de comunidades que han sido transformadas por Amanecer
          </p>
        </div>

        {/* Featured Story - Chaynabamba */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16 animate-slide-up-in">
          <div className="relative h-96 md:h-full overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/images/chaynabamba-story.png"
              alt="Visita a Chaynabamba, Huancavelica"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-6 animate-slide-up-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="font-display text-3xl font-bold mb-2 text-foreground">
                Chaynabamba, Huancavelica
              </h3>
              <p className="text-orange-600 font-semibold text-lg">Oportunidades Cerca De Ti</p>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Visitamos la I.E. José Olaya en Chaynabamba, donde compartimos información clave sobre
                el COAR Huancavelica, Beca 18 y Beca Tec con estudiantes de 2do, 4to y 5to de
                secundaria.
              </p>
              <p className="font-semibold text-foreground">
                El director nos compartió un dato que nos moviliza: solo 2 estudiantes de la promoción
                pasada postularon a Beca 18.
              </p>
              <p>
                Esta realidad reafirma nuestro compromiso con cerrar las brechas de acceso a la
                información y llevar estas oportunidades a donde más se necesitan.
              </p>
              <p>
                En muchas zonas rurales, la falta de conectividad hace que los directores sean quienes
                apoyan directamente a los estudiantes en el proceso de postulación. Por eso, en AMANECER,
                creemos en la presencia activa, el acompañamiento cercano y la generación de confianza en
                cada visita.
              </p>
            </div>
            <div className="pt-4 border-t border-orange-200">
              <p className="text-sm text-muted-foreground italic">
                Gracias, Chaynabamba, por recibirnos con tanto cariño, apertura y energía. ¡Seguimos
                construyendo un futuro con más acceso, más oportunidades y más esperanza para todas y
                todos!
              </p>
            </div>
          </div>
        </div>

        {/* More Stories Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Conectando Oportunidades",
              description:
                "Llevamos información sobre becas y programas educativos a estudiantes de zonas rurales.",
              icon: "🌍",
              delay: "0s",
            },
            {
              title: "Acompañamiento Cercano",
              description:
                "Nuestro equipo visita comunidades para brindar apoyo directo en el proceso de postulación.",
              icon: "🤝",
              delay: "0.1s",
            },
            {
              title: "Transformando Vidas",
              description:
                "Cada estudiante que accede a una beca es una vida transformada y una comunidad fortalecida.",
              icon: "✨",
              delay: "0.2s",
            },
          ].map((story, idx) => (
            <div
              key={idx}
              className="group relative animate-slide-up-in"
              style={{ animationDelay: story.delay }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <div className="relative p-6 border-2 border-orange-200 rounded-2xl hover:border-orange-400 transition-all duration-300 bg-white/80 backdrop-blur-sm h-full">
                <div className="text-4xl mb-3">{story.icon}</div>
                <h4 className="font-display text-xl font-bold mb-2 text-foreground">
                  {story.title}
                </h4>
                <p className="text-muted-foreground">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
