import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <img src="./logo.png" alt="Gestión Integral Contable" className="h-16 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-brand-cyan transition-colors">
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/5493515308726" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Contactar
            </a>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block py-2 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/5493515308726" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full mt-4">
              Contactar
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
