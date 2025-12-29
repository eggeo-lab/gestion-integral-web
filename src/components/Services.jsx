import { useState } from 'react'
import { Check } from 'lucide-react'

const Services = () => {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      title: 'Habilitación comercial',
      subtitle: 'Habilitación municipal',
      desc: 'Habilitación Online (HOL - VU)',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
      items: [
        'Definición de Riesgo (Bajo, Intermedio, Alto) y sus requisitos',
        'Relevamiento de documentación y actividades',
        'Certificado Apto Eléctrico',
        'Informe de las Condiciones de Higiene y Seguridad',
        'Certificado de Bomberos',
        'Gestión y coordinación de trámites municipales y provinciales hasta la obtención del Certificado de Habilitación',
      ],
    },
    {
      title: 'Localización',
      subtitle: 'Localización de Obras Privadas',
      desc: 'Resolución de Localización · Uso del Suelo',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      items: [
        'Consulta de zonificación y uso del suelo (Ordenanza 8133/85)',
        'Verificación de patrón industrial permitido para la actividad',
        'Análisis de compatibilidad de la actividad con la zona',
        'Estudio de factibilidad de localización',
        'Gestión del expediente ante Obras Privadas y Uso del Suelo',
        'Obtención de la Resolución de Localización',
        'Coordinación con trámites de Habilitación de Negocios',
        'Asesoramiento para industrias, depósitos, talleres y actividades especiales',
      ],
    },
    {
      title: 'Gestión ambiental',
      subtitle: 'Gestión ambiental',
      desc: 'Peligrosos · Patógenos · Residuos Sólidos Urbanos',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
      items: [
        'Autorización Ambiental Municipal',
        'Estudios de Impacto Ambiental',
        'Desarrollo e implementación de Planes de Gestión Ambiental',
        'Servicios de asesoramiento en Gestión Ambiental con visitas mensuales',
        'Desarrollo e implementación de Sistemas de Gestión Ambientales (SGAs) (ISO 14001/15)',
        'Capacitaciones',
        'Residuos Peligrosos',
        'Residuos Patógenos',
      ],
    },
    {
      title: 'Grandes generadores',
      subtitle: 'Grandes generadores',
      desc: 'Plan de Gestión de Residuos · Inscripción en IPAA',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      items: [
        'Relevamiento del establecimiento',
        'Verificación de sistema de gestión de residuos y propuesta de mejoras',
        'Confección de Plan de Gestión de Residuos',
        'Implementación del Plan de Gestión de Residuos',
        'Capacitaciones',
        'Tramitación del Certificado de Grandes Generadores de Residuos Sólidos Urbanos ante el IPAA (Instituto de Protección Ambiental y Animal)',
      ],
    },
    {
      title: 'Higiene y seguridad',
      subtitle: 'Higiene y seguridad',
      desc: 'En industrias, empresas y obras',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      items: [
        'Relevamiento de agentes de riesgo',
        'Servicios de asesoramiento en Higiene y Seguridad con visitas mensuales',
        'Informes técnicos de Higiene y Seguridad',
        'Mediciones laborales',
        'Capacitaciones',
        'Seguridad contra incendios',
        'Representación en visitas oficiales (ART, Ministerio de Trabajo, SRT, Municipalidad)',
        'Elaboración de Programas de Seguridad',
        'Visitas técnicas a obra y permanencia',
      ],
    },
  ]

  return (
    <section id="servicios" className="relative py-24 bg-brand-navy overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center'
      }} />
      <div className="absolute inset-0 bg-brand-navy/90" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">¿Qué brindamos?</h2>
          <div className="h-px bg-gradient-to-r from-brand-cyan to-transparent" />
        </div>

        {/* Tabs */}
       {/* Tabs - scroll horizontal en mobile */}
        <div className="relative mb-10">
          {/* Botón scroll derecha */}
          <button 
            onClick={() => {
              const container = document.getElementById('tabs-container');
              container.scrollBy({ left: 150, behavior: 'smooth' });
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 md:hidden z-10"
          >
            <svg className="w-6 h-6 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
          
          <div 
            id="tabs-container"
            className="flex md:flex-wrap md:justify-center gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0 pr-10 md:pr-0"
          >
            {services.map((s, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                className={`px-5 py-3 text-sm font-medium rounded transition-all whitespace-nowrap flex-shrink-0 ${activeTab === i ? 'text-brand-cyan bg-white/10 border-b-2 border-brand-cyan' : 'text-white/70 hover:text-white'}`}>
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto min-h-[300px]">
              <img src={services[activeTab].image} alt={services[activeTab].title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-navy/90 via-brand-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white uppercase">{services[activeTab].title}</h3>
                <p className="text-white/60 text-sm mt-1">{services[activeTab].desc}</p>
              </div>
            </div>

            {/* Items */}
            <div className="p-8">
              <h4 className="text-brand-cyan font-semibold underline mb-6">{services[activeTab].subtitle}</h4>
              <ul className="space-y-3">
                {services[activeTab].items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Wave hacia Rubros - solo desktop */}
      <div className="absolute -bottom-1 left-0 right-0 hidden md:block">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full block">
          <path d="M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 53.3C672 59 768 69 864 69.3C960 69 1056 59 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H0Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>
  )
}

export default Services
