import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

/**
 * Componente de formulario de registro
 * Recopila información de estudiantes interesados en Amanecer
 * Envía datos a 23.amanecer@gmail.com
 * Estilo: Diseño suavizado con gradientes cálidos y animaciones fluidas
 */

const DEPARTAMENTOS = [
  "Selecciona tu departamento",
  "Áncash",
  "Apurímac",
  "Arequipa",
  "Ayacucho",
  "Cajamarca",
  "Cusco",
  "Huancavelica",
  "Huánuco",
  "Ica",
  "Junín",
  "La Libertad",
  "Lambayeque",
  "Lima",
  "Loreto",
  "Madre de Dios",
  "Moquegua",
  "Pasco",
  "Piura",
  "Puno",
  "San Martín",
  "Tacna",
  "Tumbes",
  "Ucayali",
  "Callao",
];

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    departamento: "",
    grado: "",
    mensaje: "",
    tipo: "inscripcion", // inscripcion o mensaje
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
      !formData.departamento ||
      !formData.grado
    ) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar email usando FormSubmit o similar servicio
      const emailBody = `
Nuevo ${formData.tipo === "inscripcion" ? "Registro" : "Mensaje"} en Amanecer

Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Departamento: ${formData.departamento}
Grado: ${formData.grado}
${formData.mensaje ? `\nMensaje:\n${formData.mensaje}` : ""}
      `;

      // Usar FormSubmit.co para enviar el email
      const response = await fetch("https://formsubmit.co/ajax/23.amanecer@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          departamento: formData.departamento,
          grado: formData.grado,
          tipo: formData.tipo,
          mensaje: formData.mensaje,
          _subject: `${formData.tipo === "inscripcion" ? "Nuevo Registro" : "Nuevo Mensaje"} - Amanecer`,
        }),
      });

      if (response.ok) {
        toast.success(
          formData.tipo === "inscripcion"
            ? "¡Registro completado! Nos pondremos en contacto pronto."
            : "¡Mensaje enviado! Gracias por contactarnos."
        );
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          departamento: "",
          grado: "",
          mensaje: "",
          tipo: "inscripcion",
        });
      } else {
        toast.error("Hubo un error al enviar. Por favor intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error de conexión. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Tipo de solicitud */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center gap-3 p-4 rounded-lg border-2 border-transparent cursor-pointer hover:border-orange-300 transition-all"
            style={{ backgroundColor: formData.tipo === "inscripcion" ? "rgba(255,140,0,0.1)" : "transparent" }}>
            <input
              type="radio"
              name="tipo"
              value="inscripcion"
              checked={formData.tipo === "inscripcion"}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="font-medium">Inscribirse</span>
          </label>
          <label className="flex items-center gap-3 p-4 rounded-lg border-2 border-transparent cursor-pointer hover:border-orange-300 transition-all"
            style={{ backgroundColor: formData.tipo === "mensaje" ? "rgba(255,140,0,0.1)" : "transparent" }}>
            <input
              type="radio"
              name="tipo"
              value="mensaje"
              checked={formData.tipo === "mensaje"}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="font-medium">Enviar Mensaje</span>
          </label>
        </div>

        {/* Nombre */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">
            Nombre Completo *
          </label>
          <Input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">
            Email *
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">
            Teléfono *
          </label>
          <Input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+51 9XX XXX XXX"
            className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
          />
        </div>

        {/* Departamento */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">
            Departamento *
          </label>
          <select
            name="departamento"
            value={formData.departamento}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all bg-white"
          >
            {DEPARTAMENTOS.map((dept) => (
              <option key={dept} value={dept === "Selecciona tu departamento" ? "" : dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Grado */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">
            Grado de Estudios *
          </label>
          <select
            name="grado"
            value={formData.grado}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all bg-white"
          >
            <option value="">Selecciona tu grado</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria-1-2">Secundaria (1-2)</option>
            <option value="secundaria-3-5">Secundaria (3-5)</option>
            <option value="tecnico">Técnico</option>
            <option value="universitario">Universitario</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        {/* Mensaje (opcional, solo si es mensaje) */}
        {formData.tipo === "mensaje" && (
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">
              Tu Mensaje
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos tu pregunta o comentario..."
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
            />
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting
            ? "Enviando..."
            : formData.tipo === "inscripcion"
              ? "Registrarme"
              : "Enviar Mensaje"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          * Campos requeridos. Tus datos serán enviados a 23.amanecer@gmail.com
        </p>
      </form>
    </div>
  );
}
