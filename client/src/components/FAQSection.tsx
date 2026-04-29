/**
 * FAQ Section Component
 * Preguntas frecuentes sobre la página y la organización Amanecer
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      category: "Sobre la Página",
      question: "¿Cómo puedo buscar oportunidades educativas en la página?",
      answer: "Tenemos distintas categorías con sus respectivos eventos, Concursos, Programas, Cursos, Eventos y más. Puedes acceder a la sección 'Oportunidades' en el menú principal para explorar todas las becas y programas disponibles, con filtros por tipo y región.",
    },
    {
      id: 2,
      category: "Sobre la Página",
      question: "¿Puedo publicar oportunidades en la página?",
      answer: "Por el momento, la publicación de oportunidades está restringida a nuestro equipo editorial. Sin embargo, si conoces alguna oportunidad que pueda ser de interés para nuestra comunidad, puedes enviarla a través de nuestro formulario de contacto o escribirnos a 23.amanecer@gmail.com.",
    },
    {
      id: 3,
      category: "Sobre la Página",
      question: "¿Cómo puedo saber si las oportunidades publicadas en la página son confiables?",
      answer: "Antes de publicar cualquier oportunidad, nuestro equipo de moderación se asegura de verificar la fuente y autenticidad de la misma. Además, te recomendamos siempre revisar los detalles de la convocatoria y contactar directamente a la institución o entidad responsable para obtener más información.",
    },
    {
      id: 4,
      category: "Sobre la Página",
      question: "¿Cómo puedo contactar al equipo de la página en caso de tener dudas o sugerencias?",
      answer: "Puedes contactarnos a través de nuestro formulario de contacto en la página principal, o escribirnos directamente a 23.amanecer@gmail.com. También puedes unirte a nuestra comunidad de WhatsApp para recibir actualizaciones y hacer preguntas. Estaremos encantados de recibir tus preguntas, sugerencias o comentarios.",
    },
    {
      id: 5,
      category: "Sobre Amanecer",
      question: "¿Qué es Organización Amanecer?",
      answer: "Organización Amanecer es una organización juvenil peruana dedicada a empoderar estudiantes de zonas rurales y vulnerables a través de becas, programas educativos y oportunidades de desarrollo. Nuestro objetivo es construir un Perú sin límites donde todos tengan acceso a educación de calidad.",
    },
    {
      id: 6,
      category: "Sobre Amanecer",
      question: "¿Cuál es la misión de Amanecer?",
      answer: "Nuestra misión es conectar a estudiantes de zonas rurales y vulnerables con becas, programas y oportunidades educativas que les permitan transformar sus vidas y contribuir al desarrollo del país. Creemos que la educación es la clave para un futuro mejor.",
    },
    {
      id: 7,
      category: "Sobre Amanecer",
      question: "¿Cómo puedo unirme a la comunidad de Amanecer?",
      answer: "Puedes unirte a nuestra comunidad de WhatsApp para recibir información actualizada sobre becas y oportunidades educativas. También puedes seguirnos en Instagram, TikTok, Facebook y LinkedIn para mantenerte conectado con nuestras iniciativas y historias de impacto.",
    },
    {
      id: 8,
      category: "Sobre Amanecer",
      question: "¿Quién puede beneficiarse de los programas de Amanecer?",
      answer: "Nuestros programas están dirigidos principalmente a estudiantes de zonas rurales y vulnerables del Perú que deseen acceder a becas, programas de desarrollo personal y oportunidades educativas. No hay límite de edad para algunos programas, y cada oportunidad tiene sus propios requisitos específicos.",
    },
  ];

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Encuentra respuestas a las preguntas más comunes sobre Amanecer y nuestra plataforma de oportunidades educativas
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4 animate-slide-up-in">
          {faqs.map((faq, idx) => (
            <div
              key={faq.id}
              className="group animate-slide-up-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <button
                onClick={() => toggleExpanded(faq.id)}
                className="w-full p-6 rounded-2xl border-2 border-orange-200 hover:border-orange-400 bg-white hover:bg-orange-50/50 transition-all duration-300 text-left flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="text-sm font-semibold text-orange-600 mb-2">
                    {faq.category}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white transition-transform duration-300 ${
                    expandedId === faq.id ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Answer */}
              {expandedId === faq.id && (
                <div className="mt-2 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-100 animate-slide-down-in">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center animate-slide-up-in shadow-xl">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Aún tienes dudas?
          </h3>
          <p className="text-lg text-white/95 mb-6 max-w-2xl mx-auto">
            Contáctanos directamente a través de nuestro formulario o escríbenos a 23.amanecer@gmail.com
          </p>
          <a
            href="mailto:23.amanecer@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Enviar Correo
          </a>
        </div>
      </div>
    </section>
  );
}
