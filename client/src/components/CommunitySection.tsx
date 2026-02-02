/**
 * Community Section Component
 * Displays community links, social media, and active convocations
 */

import { MessageCircle, Instagram, Megaphone } from "lucide-react";

export default function CommunitySection() {
  const convocations = [
    {
      title: "Beca 18 - Convocatoria 2026",
      description: "Becas integrales para estudiantes de zonas rurales",
      deadline: "Próximamente",
      icon: "🎓",
    },
    {
      title: "COAR Huancavelica",
      description: "Colegio de Alto Rendimiento - Inscripciones abiertas",
      deadline: "Enero 2026",
      icon: "🏫",
    },
    {
      title: "Beca Tec",
      description: "Becas para programas técnicos y tecnológicos",
      deadline: "Febrero 2026",
      icon: "💻",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-orange-50 via-white to-orange-50 relative overflow-hidden">
      <div className="container">
        {/* Community Hub */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 items-center">
          <div className="animate-slide-up-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Únete a Nuestra Comunidad
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Conecta con miles de estudiantes peruanos que están transformando sus vidas. Recibe
              información actualizada sobre becas, programas y oportunidades educativas.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              {/* WhatsApp Community */}
              <a
                href="https://chat.whatsapp.com/Kxtj5DtwLLf8YNRyFpgGfa"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border-2 border-green-200 hover:border-green-400 bg-green-50/50 hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-lg">
                    Amanecer de Oportunidades
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Únete a nuestra comunidad de WhatsApp
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/amanecer.edu.ong?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border-2 border-pink-200 hover:border-pink-400 bg-pink-50/50 hover:bg-pink-50 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 via-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-lg">
                    @amanecer.edu.ong
                  </h4>
                  <p className="text-sm text-muted-foreground">Síguenos en Instagram</p>
                </div>
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-slide-up-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-300 opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌅</div>
                <h3 className="font-display text-3xl font-bold text-white drop-shadow-lg mb-2">
                  Conecta con Amanecer
                </h3>
                <p className="text-white/90 text-lg drop-shadow">
                  Juntos construimos un futuro sin límites
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Active Convocations */}
        <div className="animate-slide-up-in">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Megaphone className="w-6 h-6 text-orange-600" />
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Convocatorias Activas
              </h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estas son las oportunidades disponibles en este momento. ¡No te las pierdas!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {convocations.map((conv, idx) => (
              <div
                key={idx}
                className="group relative animate-slide-up-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                <div className="relative p-6 border-2 border-orange-200 rounded-2xl hover:border-orange-400 transition-all duration-300 bg-white/90 backdrop-blur-sm h-full flex flex-col">
                  <div className="text-5xl mb-3">{conv.icon}</div>
                  <h4 className="font-display text-xl font-bold mb-2 text-foreground">
                    {conv.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 flex-grow">{conv.description}</p>
                  <div className="pt-4 border-t border-orange-200">
                    <p className="text-sm font-semibold text-orange-600">
                      Plazo: {conv.deadline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center animate-slide-up-in shadow-xl">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Quieres recibir actualizaciones sobre nuevas oportunidades?
          </h3>
          <p className="text-lg text-white/95 mb-6 max-w-2xl mx-auto">
            Únete a nuestra comunidad de WhatsApp y no te pierdas ninguna convocatoria
          </p>
          <a
            href="https://chat.whatsapp.com/Kxtj5DtwLLf8YNRyFpgGfa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Unirse a la Comunidad
          </a>
        </div>
      </div>
    </section>
  );
}
