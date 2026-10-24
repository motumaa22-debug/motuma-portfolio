// src/components/Footer.jsx
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 py-12 px-4 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* Name and Tagline */}
        <div className="text-center md:text-left space-y-1">
          <div className="font-bold text-white text-base tracking-tight">{profile.name}</div>
          <p className="text-xs text-slate-400">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Links and Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center space-x-5 text-xs font-mono">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors"
              >
                GitHub
              </a>
            )}
            {profile.linkedin && profile.linkedin !== '#' && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors"
              >
                LinkedIn
              </a>
            )}
            <a
              href="#contact"
              className="hover:text-sky-400 transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500 font-mono">
        © {new Date().getFullYear()} {profile.name}. {t('footer.rights')}
      </div>
    </footer>
  );
}
