// src/App.jsx
import { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Education from './sections/Education.jsx';
import Experience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';
import './index.css';

function PortfolioApp() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="relative flex flex-col min-h-screen bg-[#080e1e] text-slate-100 transition-colors duration-300 bg-grid-pattern selection:bg-sky-500/30 selection:text-sky-200">
      {/* Luminous ambient background lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-64 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
