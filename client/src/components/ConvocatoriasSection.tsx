/**
 * Convocatorias Section Component
 * Muestra las convocatorias activas con estructura de LinkedIn
 */

import { ExternalLink, Calendar, Zap } from "lucide-react";

interface Convocatoria {
  id: number;
  title: string;
  emoji: string;
  description: string;
  deadline: string;
  postulationLink: string;
  image?: string;
}

interface ConvocatoriasSectionProps {
  convocatorias?: Convocatoria[];
}

export default function ConvocatoriasSection({ convocatorias = [] }: ConvocatoriasSectionProps) {
  const defaultConvocatorias: Convocatoria[] = [
    {
      id: 1,
      title: "¡Ya están abiertas las postulaciones a Amanecer 2025!",
      emoji: "🚀",
      description:
        "Si tienes entre 14 y 29 años, esta es tu oportunidad para impactar en tu comunidad a través de la educación y el liderazgo. ✨",
      deadline: "6 de septiembre",
      postulationLink: "https://lnkd.in/eU_vwDUM",
      image: "/images/linkedin-banner.jpg",
    },
  ];

  const displayConvocatorias = convocatorias.length > 0 ? convocatorias : defaultConvocatorias;

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-orange-50 via-white to-orange-50 relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-orange-600" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Convocatorias Activas
            </h2>
            <Zap className="w-6 h-6 text-orange-600" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ¡No dejes pasar esta oportunidad de transformar tu futuro y el de los demás!
          </p>
        </div>

        {/* Convocatorias Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {displayConvocatorias.map((conv, idx) => (
            <div
              key={conv.id}
              className="group animate-slide-up-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:-translate-y-2 border-l-4 border-orange-500">
                {/* Image if provided */}
                {conv.image && (
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-orange-200 to-yellow-200">
                    <img
                      src={conv.image}
                      alt={conv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  {/* Title with Emoji */}
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-4xl flex-shrink-0">{conv.emoji}</span>
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-orange-600 transition-colors">
                      {conv.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg mb-6 flex-grow leading-relaxed">
                    {conv.description}
                  </p>

                  {/* Deadline */}
                  <div className="flex items-center gap-3 mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <Calendar className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Deadline</p>
                      <p className="font-bold text-orange-600">{conv.deadline}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={conv.postulationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                  >
                    Postula Aquí
                    <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-black to-gray-900 text-white text-center animate-slide-up-in shadow-xl">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para tu amanecer?
          </h3>
          <p className="text-lg text-white/95 mb-6 max-w-2xl mx-auto">
            Únete a miles de jóvenes que están transformando sus vidas a través de la educación y el liderazgo
          </p>
          <a
            href="https://chat.whatsapp.com/Kxtj5DtwLLf8YNRyFpgGfa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Únete a la Comunidad
          </a>
        </div>
      </div>
    </section>
  );
}
