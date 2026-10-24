// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X, FileDown, Globe, ChevronDown, Check } from 'lucide-react';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ toggleTheme, currentTheme }) {
  const { language, setLanguage, t, languages } = useLanguage();
  const [open, setOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const langRef = useRef(null);

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'education', label: t('nav.education') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'contact', label: t('nav.contact') },
  ];

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      const scrollPos = window.scrollY + 200;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      {/* Real-time reading progress bar */}
      <div
        className="h-[2px] bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>

      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Developer Wordmark */}
        <button
          onClick={() => scrollTo('home')}
          className="text-left font-bold text-lg tracking-tight text-white hover:text-sky-400 transition-colors flex items-center gap-2.5 group"
          aria-label="Navigate to Home"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform shadow-sm shadow-sky-400"></span>
          <span className="tracking-tight">{profile.name}</span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeSection === link.id
                  ? 'text-sky-400 bg-sky-500/10 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Actions: Language Dropdown, Resume, Theme */}
        <div className="hidden sm:flex items-center space-x-2.5">
          {/* Language Selector Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
              aria-expanded={langDropdownOpen}
              aria-label="Select Language"
            >
              <Globe size={14} className="text-sky-400" />
              <span>{currentLangObj.label}</span>
              <ChevronDown size={13} className={`text-slate-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-44 rounded-xl border border-slate-800 bg-slate-900/95 backdrop-blur-xl shadow-2xl py-1 z-50 text-xs font-mono animate-fadeIn">
                <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-slate-500 border-b border-slate-800/80">
                  Select Language
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`flex items-center justify-between w-full px-3 py-2 text-left hover:bg-slate-800/80 transition-colors ${
                      language === lang.code ? 'text-sky-400 font-semibold bg-sky-500/10' : 'text-slate-300'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </span>
                    {language === lang.code && <Check size={13} className="text-sky-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Resume Download Button */}
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-all shadow-sm"
          >
            <FileDown size={14} />
            <span>{t('nav.resume')}</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            aria-label="Toggle theme"
          >
            {currentTheme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-sky-400" />}
          </button>
        </div>

        {/* Mobile top buttons */}
        <div className="flex sm:hidden items-center space-x-1.5">
          {/* Mobile Language Toggle */}
          <button
            onClick={() => {
              const nextIndex = (languages.findIndex((l) => l.code === language) + 1) % languages.length;
              setLanguage(languages[nextIndex].code);
            }}
            className="px-2 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono text-sky-400 flex items-center gap-1"
            title="Switch Language"
          >
            <Globe size={13} />
            <span>{currentLangObj.short}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white"
            aria-label="Toggle theme"
          >
            {currentTheme === 'dark' ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-sky-400" />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60"
            aria-label="Toggle Navigation Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 py-4 space-y-2">
          {/* Mobile Language Selection List */}
          <div className="flex items-center gap-2 pb-2 border-b border-slate-800/80">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Globe size={13} className="text-sky-400" /> Lang:
            </span>
            <div className="flex gap-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                    language === lang.code
                      ? 'bg-sky-500 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-400 border border-slate-800'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-sky-400 bg-sky-500/10 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="pt-2">
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-xs font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-colors"
            >
              <FileDown size={14} />
              <span>{t('nav.downloadResume')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
