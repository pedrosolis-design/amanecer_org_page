import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

/**
 * Componente de formulario de registro
 * Recopila información de estudiantes interesados en Amanecer
 * Estilo: Diseño suavizado con gradientes cálidos y animaciones fluidas
 */
export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    zona: "",
    grado: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (
      !formData.nombre ||
      !formData.email ||
      !formData.telefono ||
      !formData.zona ||
      !formData.grado
    ) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envío de datos (en producción, conectar a backend)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mostrar éxito
      toast.success(
        `¡Bienvenido ${formData.nombre}! Te hemos agregado a nuestra comunidad.`
      );

      // Limpiar formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        zona: "",
        grado: "",
      });

      // Log para desarrollo
      console.log("Datos del formulario:", formData);
    } catch (error) {
      toast.error("Hubo un error. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-orange-600 mb-2 font-fredoka">
        Únete a Amanecer
      </h2>
      <p className="text-gray-600 mb-6 text-sm">
        Completa el formulario y te conectaremos con oportunidades educativas
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre Completo
          </label>
          <Input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full px-4 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Correo Electrónico
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="w-full px-4 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono
          </label>
          <Input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+51 9XX XXX XXX"
            className="w-full px-4 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
          />
        </div>

        {/* Zona */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zona / Región
          </label>
          <select
            name="zona"
            value={formData.zona}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all bg-white"
          >
            <option value="">Selecciona tu zona</option>
            <option value="sierra">Sierra</option>
            <option value="costa">Costa</option>
            <option value="selva">Selva</option>
            <option value="lima">Lima</option>
            <option value="otra">Otra</option>
          </select>
        </div>

        {/* Grado */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Grado de Estudios
          </label>
          <select
            name="grado"
            value={formData.grado}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all bg-white"
          >
            <option value="">Selecciona tu grado</option>
            <option value="1">1er año de secundaria</option>
            <option value="2">2do año de secundaria</option>
            <option value="3">3er año de secundaria</option>
            <option value="4">4to año de secundaria</option>
            <option value="5">5to año de secundaria</option>
            <option value="egresado">Egresado</option>
          </select>
        </div>

        {/* Botón de envío */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
        >
          {isSubmitting ? "Registrando..." : "Registrarme Ahora"}
        </Button>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Tus datos son seguros y solo serán usados para conectarte con
        oportunidades educativas.
      </p>
    </div>
  );
}
