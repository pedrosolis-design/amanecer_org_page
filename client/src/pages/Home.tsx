import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, BookOpen, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import AnimatedSun from "@/components/AnimatedSun";
import TestimoniosSection from "@/components/TestimoniosSection";
import GallerySection from "@/components/GallerySection";
import CommunitySection from "@/components/CommunitySection";
import RegistrationForm from "@/components/RegistrationForm";

/**
 * Amanecer: Educación del Mañana
 * Design Philosophy: Energía Suavizada - Atardecer Animado
 * - Capas suavizadas que evocan el amanecer/atardecer
 * - Animaciones fluidas y orgánicas
 * - Sol animado como elemento central
 * - Transiciones suaves entre secciones
 * - Colores cálidos y tonos pasteles
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
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-white text-foreground overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo-amanecer.png"
              alt="Amanecer Logo"
              className="h-12 w-auto drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#mision"
              className="text-sm font-medium hover:text-primary transition-colors duration-300"
            >
              Misión
            </a>
            <a
              href="#impacto"
              className="text-sm font-medium hover:text-primary transition-colors duration-300"
            >
              Impacto
            </a>
            <a
              href="#programas"
              className="text-sm font-medium hover:text-primary transition-colors duration-300"
            >
              Programas
            </a>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Únete Ahora
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Sunset Layers */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Image - Sunset Layers */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-sunset-layers.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 z-1" />

        {/* Content */}
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-slide-up-in">
                <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
                  <span>Cada día es un nuevo</span>
                  <br />
                  <span className="text-yellow-300">AMANECER</span>
                </h1>
              </div>

              <div
                className="animate-slide-up-in"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl drop-shadow leading-relaxed">
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
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explorar Oportunidades <ArrowRight className="w-5 h-5" />
                </Button>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-semibold cursor-pointer"
                  >
                    Conocer Más
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                {[
                  { number: "14,000+", label: "Jóvenes impactados" },
                  { number: "2023", label: "Desde nuestro inicio" },
                  { number: "∞", label: "Oportunidades" },
                ].map((stat, idx) => (
                  <div key={idx} className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                    <p className="text-2xl md:text-3xl font-bold text-yellow-300 drop-shadow">
                      {stat.number}
                    </p>
                    <p className="text-white/90 text-sm mt-2 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated Sun */}
            <div className="hidden md:flex justify-center items-center animate-float-soft">
              <AnimatedSun />
            </div>
          </div>
        </div>
      </section>

      {/* Misión Section */}
      <section id="mision" className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Wavy background */}
        <div
          className="absolute inset-0 opacity-30 z-0"
          style={{
            backgroundImage: "url('/images/wavy-layers-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up-in">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-orange-200 to-yellow-200 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  Nuestra Misión
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Educación sin límites para todos
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Creemos en un Perú donde cada joven pueda soñar en grande y construir su futuro sin
                límites. A través de charlas, webinars y nuestro Calendario Mensual de Oportunidades,
                conectamos a estudiantes con las herramientas que necesitan para triunfar.
              </p>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white gap-2 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                Descubre Cómo Ayudamos <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="relative h-96 md:h-full animate-scale-up">
              <div
                className="absolute inset-0 bg-gradient-to-br from-orange-100/40 to-yellow-100/40 rounded-3xl backdrop-blur-sm border border-orange-200/50 shadow-xl"
                style={{
                  backgroundImage: "url('/images/wavy-layers-bg.png')",
                  backgroundSize: "300px",
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
        className="py-20 md:py-32 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container relative z-10">
          <div className="text-center mb-16 animate-slide-up-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Nuestro Impacto
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                color: "from-orange-400 to-orange-500",
              },
              {
                icon: BookOpen,
                title: "Educación",
                description: "Programas y becas accesibles",
                delay: "0.1s",
                color: "from-yellow-400 to-orange-400",
              },
              {
                icon: Zap,
                title: "Energía",
                description: "Charlas y webinars mensuales",
                delay: "0.2s",
                color: "from-orange-400 to-red-400",
              },
              {
                icon: Award,
                title: "Éxito",
                description: "Historias de transformación",
                delay: "0.3s",
                color: "from-yellow-300 to-orange-400",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group animate-slide-up-in"
                style={{ animationDelay: item.delay }}
              >
                <div className={`bg-gradient-to-br ${item.color} p-0.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="bg-white p-6 rounded-2xl h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-2.5 mb-4 flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programas Section */}
      <section id="programas" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
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
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                <div className="relative p-8 border-2 border-orange-200 rounded-2xl hover:border-orange-400 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <button className="text-orange-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 group-hover:text-orange-700">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <TestimoniosSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Community Section */}
      <CommunitySection />

      {/* Registration Form Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/sun-animation-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 z-1" />

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto animate-slide-up-in">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                ¿Listo para tu amanecer?
              </h2>
              <p className="text-xl text-white/95 drop-shadow leading-relaxed">
                Completa el formulario y te conectaremos con oportunidades educativas
              </p>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 border-t border-orange-500/20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/images/logo-amanecer.png"
                  alt="Amanecer Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Educación del Mañana - Empoderando jóvenes peruanos
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Programa</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                    Oportunidades
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                    Mentoría
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Síguenos</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="https://www.instagram.com/amanecer.edu.ong?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-300">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://chat.whatsapp.com/Kxtj5DtwLLf8YNRyFpgGfa" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-300">
                    WhatsApp Comunidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                    Contacto
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
