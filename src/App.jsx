import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import { profile } from './data/profile'

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} {profile.name} · Software Engineer
      </footer>
    </div>
  )
}
