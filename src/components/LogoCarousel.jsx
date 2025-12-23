const LogoCarousel = () => {
  const logos = [
    { src: './logos/dexter.png', alt: 'Dexter' },
    { src: './logos/azafran.png', alt: 'Azafrán' },
    { src: './logos/montironi.png', alt: 'Grupo Montironi' },
    { src: './logos/merlino.png', alt: 'Merlino' },
    { src: './logos/bancor.png', alt: 'Bancor' },
    { src: './logos/bogamac.png', alt: 'Bogamac' },
    { src: './logos/tutu.png', alt: 'Tutu' },
  ]

  // Duplicamos para el efecto infinito
  const allLogos = [...logos, ...logos, ...logos]

  return (
    <section className="bg-gradient-to-br from-brand-blue to-brand-cyan py-12 overflow-hidden">
      <div className="container-custom mb-6">
        <h1 className="text-[1.5rem] sm:text-2l lg:text-3xl font-bold text-white leading-tight mb-6 text-center uppercase">
            Empresas que confían en nosotros
          </h1>
       
      </div>
      
      <div className="relative">
        
        
        {/* Carousel */}
        <div className="flex animate-scroll">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-[100px] w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoCarousel
