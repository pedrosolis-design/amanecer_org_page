import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, BookOpen, Award } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Amanecer: Educación del Mañana
 * Design Philosophy: Energía Ascendente - Minimalismo Dinámico
 * - Geometría angular y asimétrica sugiere movimiento hacia arriba
 * - Contraste extremo entre espacios en blanco y colores vibrantes
 * - Animaciones sutiles que refuerzan la dirección ascendente
 * - Tipografía audaz (Montserrat) para títulos + Inter para cuerpo
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              AMANECER
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#mision" className="text-sm font-medium hover:text-primary transition">
              Misión
            </a>
            <a href="#impacto" className="text-sm font-medium hover:text-primary transition">
              Impacto
            </a>
            <a href="#programas" className="text-sm font-medium hover:text-primary transition">
              Programas
            </a>
            <Button className="bg-primary hover:bg-orange-600 text-white">
              Únete Ahora
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-1" />

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="animate-slide-up-in">
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">Cada día es un nuevo</span>
                <br />
                <span className="gradient-amanecer bg-clip-text text-transparent">
                  AMANECER
                </span>
              </h1>
            </div>

            <div
              className="animate-slide-up-in"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Empoderamos estudiantes de zonas rurales y vulnerables, conectándolos con becas,
                programas y oportunidades educativas para construir un Perú sin límites.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-up-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-orange-600 text-white gap-2"
              >
                Explorar Oportunidades <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Conocer Más
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div>
                <p className="text-3xl md:text-4xl font-bold text-secondary">14,000+</p>
                <p className="text-white/80 text-sm mt-2">Jóvenes impactados</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-secondary">2023</p>
                <p className="text-white/80 text-sm mt-2">Desde nuestro inicio</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-secondary">∞</p>
                <p className="text-white/80 text-sm mt-2">Oportunidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión Section */}
      <section id="mision" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up-in">
              <div className="inline-block mb-4">
                <span className="bg-secondary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  Nuestra Misión
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Educación sin límites para todos
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Creemos en un Perú donde cada joven pueda soñar en grande y construir su futuro sin
                límites. A través de charlas, webinars y nuestro Calendario Mensual de Oportunidades,
                conectamos a estudiantes con las herramientas que necesitan para triunfar.
              </p>
              <Button className="bg-primary hover:bg-orange-600 text-white gap-2">
                Descubre Cómo Ayudamos <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="relative h-96 md:h-full">
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl animate-scale-up"
                style={{
                  backgroundImage: "url('/images/pattern-accent.png')",
                  backgroundSize: "400px",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impacto Section */}
      <section
        id="impacto"
        className="py-20 md:py-32 bg-black text-white relative overflow-hidden"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/pattern-accent.png')",
            backgroundSize: "300px",
          }}
        />

        <div className="container relative z-10">
          <div className="text-center mb-16 animate-slide-up-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Nuestro Impacto
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Transformando vidas a través de la educación y las oportunidades
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Comunidad",
                description: "14,000+ jóvenes conectados",
                delay: "0s",
              },
              {
                icon: BookOpen,
                title: "Educación",
                description: "Programas y becas accesibles",
                delay: "0.1s",
              },
              {
                icon: Zap,
                title: "Energía",
                description: "Charlas y webinars mensuales",
                delay: "0.2s",
              },
              {
                icon: Award,
                title: "Éxito",
                description: "Historias de transformación",
                delay: "0.3s",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-slide-up-in"
                style={{ animationDelay: item.delay }}
              >
                <item.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programas Section */}
      <section id="programas" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Nuestros Programas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oportunidades diseñadas para empoderar tu futuro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Calendario de Oportunidades",
                description:
                  "Acceso mensual a becas, programas y oportunidades educativas curadas especialmente para ti.",
                icon: "📅",
                delay: "0s",
              },
              {
                title: "Charlas y Webinars",
                description:
                  "Aprende de expertos en educación, emprendimiento y desarrollo personal en sesiones interactivas.",
                icon: "🎤",
                delay: "0.1s",
              },
              {
                title: "Mentoría Personalizada",
                description:
                  "Conecta con mentores que te guiarán en tu camino hacia la excelencia académica y profesional.",
                icon: "🤝",
                delay: "0.2s",
              },
            ].map((program, idx) => (
              <div
                key={idx}
                className="group relative animate-slide-up-in"
                style={{ animationDelay: program.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 border border-border rounded-2xl hover:border-primary transition-colors duration-300">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="font-display text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/opportunity-section-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-1" />

        <div className="container relative z-10 text-center">
          <div className="max-w-2xl mx-auto animate-slide-up-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para tu amanecer?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Únete a miles de jóvenes que ya están transformando sus vidas con Amanecer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-yellow-600 text-black font-semibold gap-2"
              >
                Registrarme Ahora <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="font-display font-bold">AMANECER</span>
              </div>
              <p className="text-white/70 text-sm">
                Educación del Mañana - Empoderando jóvenes peruanos
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Programa</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Oportunidades
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Mentoría
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Síguenos</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-sm text-white/70">
              © 2024 Amanecer: Educación del Mañana. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
