/**
 * Convocatoria Amanecer Page
 * Página dedicada a la Convocatoria Amanecer 2025
 */

import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Calendar, Users, Zap } from "lucide-react";

export default function Convocatoria() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Header with Back Button */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-orange-200 shadow-sm">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver</span>
            </button>
          </Link>
          <div className="flex-grow" />
          <img src="/images/amanecer-logo.png" alt="Amanecer" className="h-10" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Convocatoria Amanecer
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              ¡Impulsa Tu Futuro!
            </p>
            <p className="text-lg text-white/80">
              Una oportunidad para jóvenes líderes que quieren transformar sus comunidades a través de la educación
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="animate-slide-up-in">
              <img
                src="/images/convocatoria-amanecer.jpg"
                alt="Convocatoria Amanecer"
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>

            {/* Content */}
            <div className="animate-slide-up-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="font-display text-4xl font-bold mb-6 text-foreground">
                ¡Ya están abiertas las postulaciones!
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Si tienes entre 14 y 29 años, esta es tu oportunidad para impactar en tu comunidad a través de la educación y el liderazgo. ✨
              </p>

              {/* Key Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-orange-50 border border-orange-200">
                  <Users className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Para quién es</p>
                    <p className="text-muted-foreground">Jóvenes de 14 a 29 años con pasión por la educación</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                  <Zap className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Tu rol</p>
                    <p className="text-muted-foreground">Ser agente de cambio en tu comunidad educativa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-purple-50 border border-purple-200">
                  <Calendar className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Deadline</p>
                    <p className="text-muted-foreground font-bold text-lg">6 de septiembre</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://lnkd.in/eU_vwDUM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Postula Aquí
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Why Join Section */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-16 animate-slide-up-in">
            <h3 className="font-display text-3xl font-bold mb-8 text-foreground text-center">
              ¿Por qué unirse a Amanecer?
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🌅</div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Impacto Real</h4>
                <p className="text-muted-foreground">
                  Transforma vidas conectando jóvenes con oportunidades educativas
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Comunidad</h4>
                <p className="text-muted-foreground">
                  Únete a una red de líderes comprometidos con la educación
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">📚</div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Crecimiento</h4>
                <p className="text-muted-foreground">
                  Desarrolla habilidades de liderazgo y educación
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16 animate-slide-up-in">
            <h3 className="font-display text-3xl font-bold mb-8 text-foreground text-center">
              Proceso de Selección
            </h3>

            <div className="space-y-6">
              {[
                { step: 1, title: "Postulación", desc: "Completa el formulario antes del 6 de septiembre" },
                { step: 2, title: "Revisión", desc: "Nuestro equipo evalúa tu perfil y motivación" },
                { step: 3, title: "Entrevista", desc: "Conversamos sobre tu visión y compromiso" },
                { step: 4, title: "¡Bienvenido!", desc: "Inicia tu viaje como agente de cambio" },
              ].map((item, idx) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute left-6 top-full h-6 w-0.5 bg-gradient-to-b from-orange-300 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white text-center animate-slide-up-in">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para tu amanecer?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              No dejes pasar esta oportunidad de transformar tu futuro y el de los demás
            </p>
            <a
              href="https://lnkd.in/eU_vwDUM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Postula Ahora
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <div className="container text-center">
          <p className="text-lg mb-6">¿Preguntas? Únete a nuestra comunidad</p>
          <a
            href="https://chat.whatsapp.com/Kxtj5DtwLLf8YNRyFpgGfa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            Únete a WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
