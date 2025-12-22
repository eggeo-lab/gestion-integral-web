import { Store, Factory, Package, Wrench, UtensilsCrossed, Dumbbell, ShoppingCart, Briefcase } from 'lucide-react'

const Rubros = () => {
  const rubros = [
    { icon: Store, name: 'Comercios Minoristas' },
    { icon: Factory, name: 'Industrias' },
    { icon: Package, name: 'Depósitos' },
    { icon: Wrench, name: 'Talleres' },
    { icon: UtensilsCrossed, name: 'Gastronómicos' },
    { icon: Dumbbell, name: 'Deportivos' },
    { icon: ShoppingCart, name: 'Mayoristas' },
    { icon: Briefcase, name: 'Servicios' },
  ]

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider">Rubros</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Rubros a los que servimos</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rubros.map((r) => (
            <div key={r.name} className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg hover:border-brand-cyan/30 transition-all group">
              <div className="w-12 h-12 bg-brand-pale/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-cyan/10">
                <r.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-cyan" />
              </div>
              <span className="text-gray-700 font-medium text-sm">{r.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave hacia About - solo desktop */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:block">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 33.3C840 37 960 43 1080 45C1200 47 1320 45 1380 44L1440 43V60H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Rubros
