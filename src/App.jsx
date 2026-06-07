import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import Results from './components/Results'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Courses />
      <WhyChoose />
      <Testimonials />
      <Results />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
