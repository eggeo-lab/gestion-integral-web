import { Ruler, ShieldCheck, FlaskConical, Zap } from 'lucide-react'

const Team = () => {
  const team = [
    { initial: 'C', name: 'Cristian Javier Leon', role: 'Gestoría - Habilitación de Negocios', desc: 'A cargo de la gestoría integral, desde el armado de expedientes hasta la coordinación de profesionales.' },
    { initial: 'P', name: 'Pablo', role: 'Área Tributaria y Contable', desc: 'Encargado de la parte tributaria y contable, acompañando en obligaciones fiscales y administrativas.' },
  ]

  const pros = [
    { icon: Ruler, name: 'Arquitectos' },
    { icon: ShieldCheck, name: 'Ing. en Seguridad e Higiene' },
    { icon: FlaskConical, name: 'Bromatólogos' },
    { icon: Zap, name: 'Electricistas Matriculados' },
  ]

  return (
    <section id="equipo" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider">Nuestro Equipo</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Profesionales a tu servicio</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {team.map((m) => (
            <div key={m.name} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-cyan to-brand-light rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{m.initial}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy">{m.name}</h3>
                  <span className="text-brand-cyan text-sm">{m.role}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-center font-semibold text-gray-700 mb-6">Equipo de profesionales satélites</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pros.map((p) => (
              <div key={p.name} className="text-center">
                <div className="w-12 h-12 bg-brand-pale/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <p.icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <span className="text-gray-600 text-sm font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
