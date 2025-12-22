import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [active, setActive] = useState(null)

  const faqs = [
    { q: '¿Necesito contratar profesionales por mi cuenta?', a: 'No. Contamos con un equipo multidisciplinario para cubrir todos los requisitos según la actividad y el nivel de riesgo de tu empresa.' },
    { q: '¿Cuánto tarda una habilitación?', a: 'El tiempo depende del tipo de actividad y documentación requerida. Nuestro trabajo es agilizar cada etapa y evitar demoras innecesarias.' },
    { q: '¿En qué rubros trabajan?', a: 'Comercios minoristas y mayoristas, industrias, depósitos, talleres, deportivos, gastronómicos, servicios y cualquier actividad que requiera habilitación municipal o provincial.' },
    { q: '¿Puedo consultar sin costo?', a: 'Sí. Te asesoramos sobre requisitos, costos y pasos a seguir antes de comenzar el trámite, sin compromiso.' },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Preguntas frecuentes</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <button className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setActive(active === i ? null : i)}>
                <span className="font-semibold text-brand-navy pr-4">{f.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-cyan transition-transform ${active === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${active === i ? 'max-h-40' : 'max-h-0'}`}>
                <p className="px-5 pb-5 text-gray-600">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
