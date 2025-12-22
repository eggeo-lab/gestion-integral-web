const Footer = () => {
  const links = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <footer className="py-12 bg-brand-navy text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src="./logo.png" alt="Gestión Integral Contable" className="h-10 w-auto" />
          </div>

          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">{l.label}</a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Gestión Integral Contable. Todos los derechos reservados.</p>
          <p>Córdoba, Argentina</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
