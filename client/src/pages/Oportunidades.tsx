import { Link } from "wouter";
import { useState } from "react";
import { Search, Filter, Calendar, MapPin, Award } from "lucide-react";

/**
 * Página de Oportunidades - Becas y programas con filtros
 * Estilo: Diseño suavizado con gradientes cálidos
 */

export default function Oportunidades() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Todas");
  const [selectedRegion, setSelectedRegion] = useState("Todas");

  const opportunities = [
    {
      id: 1,
      title: "Beca 18 - Convocatoria 2026",
      type: "Beca Integral",
      region: "Nacional",
      deadline: "30 de Junio, 2026",
      description:
        "Becas integrales para estudiantes de zonas rurales y vulnerables. Cobertura de matrícula, pensión y manutención.",
      icon: "🎓",
      status: "Abierta",
    },
    {
      id: 2,
      title: "COAR Huancavelica",
      type: "Programa Académico",
      region: "Huancavelica",
      deadline: "15 de Mayo, 2026",
      description:
        "Colegio de Alto Rendimiento. Educación de excelencia para estudiantes talentosos de zonas rurales.",
      icon: "🏫",
      status: "Abierta",
    },
    {
      id: 3,
      title: "Beca Tec",
      type: "Formación Técnica",
      region: "Nacional",
      deadline: "31 de Julio, 2026",
      description:
        "Becas para programas técnicos y tecnológicos. Formación con salida laboral garantizada.",
      icon: "💻",
      status: "Abierta",
    },
    {
      id: 4,
      title: "Programa de Mentoría Amanecer",
      type: "Mentoría",
      region: "Nacional",
      deadline: "Permanente",
      description:
        "Acompañamiento personalizado de mentores profesionales para guiar tu camino educativo.",
      icon: "🤝",
      status: "Abierta",
    },
    {
      id: 5,
      title: "Beca Académica - Universidad del Pacífico",
      type: "Beca Parcial",
      region: "Lima",
      deadline: "20 de Junio, 2026",
      description:
        "Beca parcial para estudiantes de alto rendimiento académico. Cobertura del 50% de la pensión.",
      icon: "📚",
      status: "Abierta",
    },
    {
      id: 6,
      title: "Programa de Liderazgo Juvenil",
      type: "Programa de Desarrollo",
      region: "Nacional",
      deadline: "10 de Agosto, 2026",
      description:
        "Formación en liderazgo, emprendimiento y desarrollo de competencias para jóvenes.",
      icon: "⭐",
      status: "Abierta",
    },
    {
      id: 7,
      title: "Beca Técnica - SENATI",
      type: "Formación Técnica",
      region: "Nacional",
      deadline: "25 de Julio, 2026",
      description:
        "Formación técnica especializada en sectores de demanda. Prácticas en empresas incluidas.",
      icon: "🔧",
      status: "Abierta",
    },
    {
      id: 8,
      title: "Intercambio Estudiantil Internacional",
      type: "Intercambio",
      region: "Internacional",
      deadline: "15 de Septiembre, 2026",
      description:
        "Oportunidad de estudiar en universidades del extranjero. Experiencia internacional garantizada.",
      icon: "✈️",
      status: "Próximamente",
    },
    {
      id: 9,
      title: "Beca Perú - Pronabec 2026",
      type: "Beca Integral",
      region: "Nacional",
      deadline: "13 de Mayo, 2026",
      description:
        "671 becas para carreras profesionales en universidades e institutos privados. Sin límite de edad. Cobertura hasta finalización de carrera.",
      icon: "🎯",
      status: "Abierta",
      details: {
        vacantes: 671,
        cronograma: [
          "Postulación: 16/4 - 13/5/2026",
          "Subsanación: 28/4 - 20/5/2026",
          "Resultados: 5/6/2026",
          "Aceptación: 6/6 - 12/6/2026"
        ]
      }
    },
  ];

  const types = ["Todas", "Beca Integral", "Beca Parcial", "Programa Académico", "Formación Técnica", "Mentoría", "Intercambio", "Programa de Desarrollo"];
  const regions = ["Todas", "Nacional", "Lima", "Huancavelica", "Internacional"];

  const filtered = opportunities.filter((opp) => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "Todas" || opp.type === selectedType;
    const matchesRegion = selectedRegion === "Todas" || opp.region === selectedRegion;
    return matchesSearch && matchesType && matchesRegion;
  });

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
              <span className="text-sm font-medium hover:text-orange-600 transition-colors duration-300 cursor-pointer">
                Blog
              </span>
            </Link>
            <Link href="/oportunidades">
              <span className="text-sm font-medium text-orange-600 transition-colors duration-300 cursor-pointer">
                Oportunidades
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-12 px-4 text-center">
        <h1 className="text-5xl font-bold text-orange-600 mb-4 font-fredoka animate-fade-in">
          Oportunidades Educativas
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Descubre becas, programas y oportunidades disponibles para tu futuro
        </p>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Search and Filters */}
        <div className="space-y-6 mb-12 animate-slide-up-in">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Busca oportunidades por nombre o descripción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all bg-white"
            />
          </div>

          {/* Filter Row */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Type Filter */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Filter className="w-4 h-4" />
                Tipo de Oportunidad
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all bg-white"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="w-4 h-4" />
                Región
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all bg-white"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            Se encontraron <span className="font-bold text-orange-600">{filtered.length}</span> oportunidades
          </div>
        </div>

        {/* Opportunities Grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((opp, idx) => (
              <div
                key={opp.id}
                className="group animate-slide-up-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:-translate-y-2 border-l-4 border-orange-500">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 border-b border-orange-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-4xl">{opp.icon}</div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          opp.status === "Abierta"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {opp.status}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                      {opp.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Type Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">
                        {opp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      {opp.description}
                    </p>

                    {/* Info */}
                    <div className="space-y-3 border-t border-gray-200 pt-4">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        <span>{opp.region}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        <span>Plazo: {opp.deadline}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="mt-6 w-full py-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg">
                      Más Información
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">
              No se encontraron oportunidades con los filtros seleccionados
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center animate-slide-up-in shadow-xl">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿No encontraste lo que buscas?
          </h3>
          <p className="text-lg text-white/95 mb-6 max-w-2xl mx-auto">
            Únete a nuestra comunidad de WhatsApp para recibir actualizaciones sobre nuevas oportunidades
          </p>
          <a
            href="https://chat.whatsapp.com/Kxtj5DtwLLf8YNRyFpgGfa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Unirse a la Comunidad
          </a>
        </div>
      </div>
    </div>
  );
}
