const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl">
          <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider">Nuestra Historia</span>
          
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-8 leading-tight">
            Más de 20 años construyendo confianza
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Nuestra historia comenzó en <strong className="text-brand-navy">2004</strong>, cuando coincidimos trabajando en una empresa tercerizadora del Banco de Córdoba. En ese ambiente dinámico descubrimos que compartíamos valores esenciales: la responsabilidad, el compromiso con las personas y la ética profesional.
            </p>
            <p>
              Con el tiempo, esa relación laboral se transformó en amistad y en una visión compartida: crear un servicio donde las personas y empresas pudieran encontrar soluciones reales, claras y confiables.
            </p>
            <p className="text-xl text-brand-navy font-medium">
              Así nació Gestión Integral Contable, una sociedad construida sobre años de experiencia, trabajo y confianza mutua.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-200">
            <div>
              <div className="text-4xl font-bold text-brand-cyan">20+</div>
              <div className="text-sm text-gray-500 mt-1">Años de experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-cyan">500+</div>
              <div className="text-sm text-gray-500 mt-1">Negocios habilitados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-cyan">100%</div>
              <div className="text-sm text-gray-500 mt-1">Compromiso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
