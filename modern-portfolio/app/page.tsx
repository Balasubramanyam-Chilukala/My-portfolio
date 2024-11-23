import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

