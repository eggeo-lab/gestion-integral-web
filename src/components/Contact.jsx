import { useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(`Hola, soy ${form.name}.\nEmail: ${form.email}\n${form.phone ? `Tel: ${form.phone}\n` : ''}\nConsulta: ${form.message}`)
    window.open(`https://wa.me/5493515308726?text=${msg}`, '_blank')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  const info = [
    { icon: MessageCircle, label: 'WhatsApp', value: '351 530 8726', href: 'https://wa.me/5493515308726' },
    { icon: Phone, label: 'Teléfono', value: '+54 9 3515 308726', href: 'tel:+5493515308726' },
    { icon: Mail, label: 'Email', value: 'info@gestionintegralcontable.com.ar', href: 'mailto:info@gestionintegralcontable.com.ar' },
    { icon: MapPin, label: 'Dirección', value: 'Av. Fuerza Aérea 2170 - Galería Rosedal - 1° Piso Of 24', href: '#' },
  ]

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider">Contacto</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">Dejanos tu mensaje</h2>
            <p className="text-gray-600 mb-8">Para recibir información o iniciar tu trámite, contactanos por cualquiera de estos medios.</p>

            <div className="space-y-4">
              {info.map((i) => (
                <a key={i.label} href={i.href} target={i.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all group">
                  <div className="w-10 h-10 bg-brand-cyan/10 rounded-lg flex items-center justify-center group-hover:bg-brand-cyan/20">
                    <i.icon className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase">{i.label}</span>
                    <span className="font-medium text-brand-navy">{i.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-cyan" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-cyan" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-cyan" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea rows={4} required value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-cyan resize-none" />
              </div>
              <button type="submit" className="btn btn-primary w-full py-4">
                <Send className="w-4 h-4" /> Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
