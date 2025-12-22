import Header from './components/Header'
import Hero from './components/Hero'
import LogoCarousel from './components/LogoCarousel'
import Services from './components/Services'
import Rubros from './components/Rubros'
import About from './components/About'
import Team from './components/Team'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <Services />
        <Rubros />
        <About />
        <Team />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
