import { Link } from "wouter";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

/**
 * Página de Artículo Individual del Blog
 * Artículo: Cómo escribir una carta de motivación efectiva para becas
 */

export default function BlogArticle() {
  const article = {
    id: 7,
    title: "Cómo escribir una carta de motivación efectiva para becas",
    author: "Equipo Amanecer",
    date: "25 de Abril, 2026",
    category: "Becas",
    readTime: "8 min",
    image: "✍️",
  };

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
              <span className="text-sm font-medium hover:text-orange-600 transition-colors duration-300 cursor-pointer">
                Oportunidades
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="pt-24 pb-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
              Volver al Blog
            </button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-6">
          <span className="px-4 py-2 bg-orange-100 text-orange-600 text-sm font-bold rounded-full inline-block">
            {article.category}
          </span>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap gap-6 text-gray-600 mb-8 pb-8 border-b-2 border-orange-200">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-orange-600" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange-600" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">{article.readTime} de lectura</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 pb-20">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12 p-8 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-200">
            <p className="text-xl text-gray-800 leading-relaxed font-semibold">
              La carta de motivación es uno de los documentos más importantes en tu postulación a una beca. No es solo un requisito administrativo, sino tu oportunidad de contar tu historia, mostrar tus aspiraciones y convencer al comité de selección de que eres el candidato ideal. En este artículo, te enseñaremos cómo escribir una carta de motivación que destaque y aumente significativamente tus probabilidades de éxito.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              1. Entiende el Propósito de la Carta de Motivación
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Antes de empezar a escribir, es crucial entender qué busca el comité de selección. Una carta de motivación no es un resumen de tu CV, sino una ventana a tu personalidad, valores y visión de futuro.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <p className="text-gray-800 font-semibold mb-2">El comité quiere saber:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>¿Por qué deseas esta beca específicamente?</li>
                <li>¿Cuáles son tus metas académicas y profesionales?</li>
                <li>¿Cómo la beca te ayudará a alcanzar esas metas?</li>
                <li>¿Qué valores personales te definen?</li>
                <li>¿Cómo contribuirás a tu comunidad después de graduarte?</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2. Estructura Básica de una Carta Efectiva
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Una buena carta de motivación debe tener una estructura clara y coherente. Aquí te presentamos la estructura recomendada:
            </p>

            <div className="space-y-6">
              {/* Intro */}
              <div className="bg-white border-2 border-orange-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-600 mb-3">📌 Introducción (2-3 párrafos)</h3>
                <p className="text-gray-700 mb-3">
                  Presenta quién eres de manera breve y cautivadora. Menciona la beca específica a la que postulas y por qué te interesa.
                </p>
                <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-400">
                  <p className="text-sm text-gray-800 italic">
                    <strong>Ejemplo:</strong> "Mi nombre es María García, soy estudiante de 4to año de secundaria en la provincia de Huancavelica. Postulo a la Beca 18 porque creo que la educación superior es la llave para transformar no solo mi vida, sino la de mi comunidad..."
                  </p>
                </div>
              </div>

              {/* Development */}
              <div className="bg-white border-2 border-orange-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-600 mb-3">📌 Desarrollo (3-4 párrafos)</h3>
                <p className="text-gray-700 mb-3">
                  Aquí es donde cuentas tu historia. Explica tus motivaciones, tus logros académicos, tus desafíos y cómo los has superado.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                  <li><strong>Párrafo 1:</strong> Tu contexto y motivación personal</li>
                  <li><strong>Párrafo 2:</strong> Tus logros académicos y extracurriculares</li>
                  <li><strong>Párrafo 3:</strong> Tus metas profesionales y cómo la beca te ayudará</li>
                  <li><strong>Párrafo 4:</strong> Tu compromiso con tu comunidad</li>
                </ul>
              </div>

              {/* Conclusion */}
              <div className="bg-white border-2 border-orange-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-600 mb-3">📌 Conclusión (1-2 párrafos)</h3>
                <p className="text-gray-700 mb-3">
                  Cierra con una reflexión poderosa que refuerce tu determinación y gratitud.
                </p>
                <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-400">
                  <p className="text-sm text-gray-800 italic">
                    <strong>Ejemplo:</strong> "Estoy convencida de que esta beca no es solo una oportunidad personal, sino una inversión en el futuro de mi región. Agradezco sinceramente la consideración de mi candidatura..."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              3. Consejos Clave para Escribir una Carta Impactante
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Sé auténtico</h4>
                  <p className="text-gray-700">No intentes ser alguien que no eres. Los comités valoran la honestidad y la autenticidad. Cuenta tu verdadera historia.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Sé específico</h4>
                  <p className="text-gray-700">Evita frases genéricas. En lugar de "quiero estudiar para mejorar mi futuro", di "deseo estudiar Ingeniería Civil para diseñar sistemas de agua potable en zonas rurales".</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Muestra tu impacto potencial</h4>
                  <p className="text-gray-700">Explica cómo tu educación beneficiará no solo a ti, sino a tu comunidad. Los becarios son líderes del cambio.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Usa un lenguaje claro y formal</h4>
                  <p className="text-gray-700">Evita jerga, lenguaje muy coloquial o demasiado técnico. Escribe como si estuvieras hablando con un profesor respetado.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Respeta los límites de extensión</h4>
                  <p className="text-gray-700">Si piden 500 palabras, no escribas 1000. La concisión demuestra respeto por el tiempo del lector.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Revisa y corrige</h4>
                  <p className="text-gray-700">Los errores de ortografía y gramática pueden arruinar una excelente carta. Revisa múltiples veces y pide a alguien que la lea.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              4. Errores Comunes a Evitar
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <span className="text-2xl">✗</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Copiar y pegar</h4>
                  <p className="text-gray-700">Cada beca es diferente. Personaliza tu carta para cada postulación. Los comités lo notan.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <span className="text-2xl">✗</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Ser demasiado dramático</h4>
                  <p className="text-gray-700">Cuenta tu historia con emoción, pero sin exagerar. La credibilidad es más importante que la dramatización.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <span className="text-2xl">✗</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Enfocarse solo en lo negativo</h4>
                  <p className="text-gray-700">Mientras reconoces tus desafíos, enfatiza cómo los has superado y qué has aprendido.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <span className="text-2xl">✗</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Olvidar la estructura</h4>
                  <p className="text-gray-700">Una carta desorganizada es difícil de leer. Mantén párrafos claros y bien definidos.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              5. Ejemplo de Párrafo Efectivo
            </h2>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl border-2 border-orange-300">
              <p className="text-gray-800 leading-relaxed mb-4">
                <strong className="text-orange-600">"Crecí en Chaynabamba, un pueblo donde la educación superior es un lujo que pocos pueden permitirse. Mi madre es agricultora y mi padre trabajador de construcción. A pesar de las limitaciones económicas, siempre me inculcaron el valor de la educación. Hoy, como estudiante destacado en mi colegio, sueño con estudiar Ingeniería de Sistemas para crear soluciones tecnológicas que mejoren la vida de comunidades rurales como la mía. La Beca 18 no es solo una oportunidad para mí, sino una inversión en el futuro de mi región. Estoy comprometida a retornar a Chaynabamba como profesional y contribuir al desarrollo de mi comunidad."</strong>
              </p>
              <p className="text-sm text-gray-600 italic">
                Este párrafo es efectivo porque: (1) establece contexto, (2) muestra determinación, (3) es específico en metas, (4) conecta aspiraciones personales con impacto comunitario.
              </p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
            <h2 className="text-3xl font-bold mb-4">¿Listo para escribir tu carta?</h2>
            <p className="text-lg text-white/95 mb-6">
              Recuerda: tu carta de motivación es tu voz. Úsala para contar tu historia, mostrar tu determinación y convencer al comité de que mereces esa beca.
            </p>
            <a
              href="https://chat.whatsapp.com/Kxtj5DtwLLf8YNRyFpgGfa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Únete a Nuestra Comunidad
            </a>
          </section>
        </article>
      </div>

      {/* Related Articles */}
      <div className="bg-white py-16 mt-12">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Artículos Relacionados</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog">
              <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-3">🎓</div>
                <h4 className="font-bold text-gray-900 mb-2">Beca 18: Cómo postular y no fracasar</h4>
                <p className="text-sm text-gray-600">Aprende los pasos esenciales para postular a Beca 18 con éxito.</p>
              </div>
            </Link>
            <Link href="/blog">
              <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-bold text-gray-900 mb-2">Mentoría: Tu guía en el camino educativo</h4>
                <p className="text-sm text-gray-600">Descubre cómo nuestro programa de mentoría puede ayudarte.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
