import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan" />

      {/* Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Nombre de la empresa */}
          <div className="mb-6">
            <span className="text-white/90 text-sm font-semibold tracking-widest uppercase">
              Gestión Integral Contable
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-brand-light rounded-full animate-pulse" />
            <span className="text-white/90 text-sm">Más de 20 años de experiencia</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Habilitamos tu negocio
            <span className="block text-brand-light">de principio a fin</span>
          </h1>

          <p className="text-xl text-white/80 mb-10 max-w-2xl">
            Nos ocupamos de todas las gestiones necesarias para habilitar tu comercio o empresa. 
            Vos enfocate en tu proyecto, nosotros nos encargamos del resto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/5493515308726" target="_blank" rel="noopener noreferrer" 
               className="btn bg-white text-brand-navy hover:bg-brand-light hover:text-white px-8 py-4 text-base shadow-xl">
              Solicitar asesoramiento
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#servicios" className="btn border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-base">
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
