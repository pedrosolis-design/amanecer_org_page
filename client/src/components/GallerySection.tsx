/**
 * Gallery Section Component
 * Galería interactiva de impacto con imágenes de visitas y eventos
 */

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  date: string;
}

interface GallerySectionProps {
  images?: GalleryImage[];
}

export default function GallerySection({ images = [] }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default images if none provided
  const defaultImages: GalleryImage[] = [
    {
      id: 1,
      src: "/images/gallery-1.jpg",
      title: "Visita a Chaynabamba",
      description: "Compartiendo oportunidades educativas con estudiantes de Chaynabamba",
      date: "Abril 2026",
    },
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Galería de Impacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Momentos que definen nuestro compromiso con la educación. Visitas a comunidades, eventos y
            celebraciones de logros estudiantiles.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="mb-12 animate-slide-up-in">
          {/* Large Image Display */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 group">
            <div className="aspect-video bg-gradient-to-br from-orange-200 to-yellow-200 overflow-hidden">
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Navigation Arrows */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-orange-600 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-orange-600 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
              <h3 className="font-display text-2xl font-bold mb-2">
                {galleryImages[currentIndex].title}
              </h3>
              <p className="text-white/90">{galleryImages[currentIndex].description}</p>
              <p className="text-sm text-white/70 mt-2">{galleryImages[currentIndex].date}</p>
            </div>
          </div>

          {/* Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => handleImageClick(idx)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    currentIndex === idx
                      ? "border-orange-500 ring-2 ring-orange-300 scale-105"
                      : "border-gray-300 hover:border-orange-300"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Image Counter */}
        {galleryImages.length > 1 && (
          <div className="text-center text-sm text-muted-foreground mb-12">
            <span className="font-semibold text-orange-600">{currentIndex + 1}</span> de{" "}
            <span className="font-semibold text-orange-600">{galleryImages.length}</span>
          </div>
        )}

        {/* Grid View */}
        {galleryImages.length > 4 && (
          <div className="mt-16">
            <h3 className="font-display text-2xl font-bold mb-8 text-center text-foreground">
              Más Momentos
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, idx) => (
                <div
                  key={img.id}
                  onClick={() => handleImageClick(idx)}
                  className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-40 hover:scale-105"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="text-white text-sm font-semibold line-clamp-2">{img.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center animate-slide-up-in shadow-xl">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Quieres ser parte de nuestro impacto?
          </h3>
          <p className="text-lg text-white/95 mb-6 max-w-2xl mx-auto">
            Únete a Amanecer y sé parte de historias de éxito en educación
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Únete Ahora
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto"
              />
              <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {galleryImages[selectedImage].description}
                </p>
                <p className="text-sm text-muted-foreground">{galleryImages[selectedImage].date}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
