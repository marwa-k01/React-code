// import ThemeToggle from '../componets/ThemeToggle'
// import StarBackground from '../componets/StarBackground'
// import Navbar from '../componets/Navbar'
// import HeroSection from '../componets/HeroSection'
// import AboutSection from '../componets/AboutSection'
// import { SkilsSection } from '../componets/SkilsSection'
// import { ContactSection } from '../componets/ContactSection'
// import { Footer } from '../componets/Footer'

import { AboutSection } from "../Compoets/AboutSection";
import { ContactSection } from "../Compoets/ContactSectoin";
import { Footer } from "../Compoets/Footer";
import { HeroSection } from "../Compoets/HeroSection";
import { Navbar } from "../Compoets/Navbar";
import { ProjectSection } from "../Compoets/ProjectSection";
import { SkilsSection } from "../Compoets/SkilsSection";
import ThemeToggle from "../Compoets/ThemeToggle";
import {StarBackground} from "@/Compoets/StarBackground"

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-hidden'>
      {/* Theme toggle */}
        <ThemeToggle/>
      {/* Background Effect */}
      <StarBackground/>

      {/* Navbar */}
      <Navbar/>
      {/* Main Contact */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkilsSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

