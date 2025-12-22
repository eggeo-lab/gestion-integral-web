import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-r from-brand-cyan to-brand-light">
      {/* Wave arriba - viene de FAQ blanco - solo desktop */}
      <div className="absolute -top-1 left-0 right-0 rotate-180 hidden md:block">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full block">
          <path d="M0 80L48 69.3C96 59 192 37 288 32C384 27 480 37 576 42.7C672 48 768 48 864 48C960 48 1056 48 1152 50.7C1248 53 1344 59 1392 61.3L1440 64V80H0Z" fill="white"/>
        </svg>
      </div>

      <div className="container-custom text-center py-20 md:pt-28">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">¿Listo para habilitar tu negocio?</h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Contactanos hoy y recibí asesoramiento personalizado sin cargo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/5493515308726" target="_blank" rel="noopener noreferrer"
             className="btn bg-white text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-4 text-base">
            Solicitar asesoramiento <ArrowRight className="w-5 h-5" />
          </a>
          <a href="tel:+5493515308726" className="btn border-2 border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4 text-base">
            Llamar al 351 530 8726
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
