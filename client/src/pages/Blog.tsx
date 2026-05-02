import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";

/**
 * Página de Blogs - Artículos sobre oportunidades y historias de éxito
 * Estilo: Diseño suavizado con gradientes cálidos
 */

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Beca 18: Cómo postular y no fracasar en el intento",
      excerpt:
        "Aprende los pasos esenciales para postular a Beca 18 con éxito. Desde la preparación del expediente hasta los exámenes finales.",
      author: "Equipo Amanecer",
      date: "20 de Abril, 2026",
      category: "Becas",
      image: "🎓",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Historias de Éxito: De Chaynabamba al Mundo",
      excerpt:
        "Conoce la historia de estudiantes de Chaynabamba que lograron acceder a becas y hoy estudian en universidades de prestigio.",
      author: "Testimonios Amanecer",
      date: "18 de Abril, 2026",
      category: "Historias",
      image: "🌟",
      readTime: "7 min",
    },
    {
      id: 3,
      title: "COAR Huancavelica: Oportunidad de excelencia académica",
      excerpt:
        "Descubre qué es COAR, cómo funciona y por qué es una excelente oportunidad para estudiantes de zonas rurales.",
      author: "Equipo Amanecer",
      date: "15 de Abril, 2026",
      category: "Programas",
      image: "🏫",
      readTime: "6 min",
    },
    {
      id: 4,
      title: "Beca Tec: Formación técnica de calidad",
      excerpt:
        "Explora las opciones de formación técnica y tecnológica disponibles a través de Beca Tec. Carreras con futuro laboral garantizado.",
      author: "Equipo Amanecer",
      date: "12 de Abril, 2026",
      category: "Becas",
      image: "💻",
      readTime: "5 min",
    },
    {
      id: 5,
      title: "Conectividad Rural: Un reto, una oportunidad",
      excerpt:
        "Cómo Amanecer está cerrando la brecha de acceso a información en zonas rurales del Perú.",
      author: "Equipo Amanecer",
      date: "10 de Abril, 2026",
      category: "Impacto",
      image: "🌍",
      readTime: "8 min",
    },
    {
      id: 6,
      title: "Mentoría: Tu guía en el camino educativo",
      excerpt:
        "Descubre cómo nuestro programa de mentoría puede ayudarte a alcanzar tus metas académicas y profesionales.",
      author: "Equipo Amanecer",
      date: "8 de Abril, 2026",
      category: "Programas",
      image: "🤝",
      readTime: "6 min",
    },
    {
      id: 7,
      title: "Cómo escribir una carta de motivación efectiva para becas",
      excerpt:
        "Aprende los secretos para escribir una carta de motivación que destaque tu perfil y aumente tus probabilidades de obtener la beca que deseas.",
      author: "Equipo Amanecer",
      date: "25 de Abril, 2026",
      category: "Becas",
      image: "✍️",
      readTime: "8 min",
    },
  ];

  const categories = ["Todos", "Becas", "Programas", "Historias", "Impacto"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
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
            <Link href="/blog">
              <span className="text-sm font-medium text-orange-600 transition-colors duration-300 cursor-pointer">
                Blog
              </span>
            </Link>
            <Link href="/oportunidades">
              <span className="text-sm font-medium hover:text-orange-600 transition-colors duration-300 cursor-pointer">
                Oportunidades
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-12 px-4 text-center">
        <h1 className="text-5xl font-bold text-orange-600 mb-4 font-fredoka animate-fade-in">
          Blog Amanecer
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Historias de éxito, consejos sobre becas y actualizaciones sobre oportunidades educativas
        </p>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-slide-up-in">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: cat === "Todos" ? "#f97316" : "#fff",
                color: cat === "Todos" ? "#fff" : "#f97316",
                border: `2px solid ${cat === "Todos" ? "#f97316" : "#fed7aa"}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <div
              key={article.id}
              className="group animate-slide-up-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:-translate-y-2">
                {/* Image Area */}
                <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {article.image}
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="border-t border-gray-200 pt-4 space-y-2 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <Link href={article.id === 7 ? "/blog/carta-motivacion" : "/blog"}>
                      <button className="text-orange-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300 group/btn cursor-pointer">
                        Leer más
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center animate-slide-up-in shadow-xl">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Quieres compartir tu historia?
          </h3>
          <p className="text-lg text-white/95 mb-6 max-w-2xl mx-auto">
            Si tienes una historia de éxito o experiencia con becas, nos gustaría que la compartas
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Contáctanos
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
