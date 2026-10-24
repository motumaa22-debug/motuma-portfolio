// src/components/ProjectCard.jsx
import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Layers, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectCard({ project }) {
  const { t } = useLanguage();
  const { title, description, technologies, status, github, demo, highlights } = project;
  const [showDetails, setShowDetails] = useState(false);

  const getStatusColor = (st) => {
    switch (st.toLowerCase()) {
      case 'in progress':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'completed':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'internship experience':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
    }
  };

  return (
    <div className="glass-card flex flex-col justify-between rounded-2xl p-6 group text-left">
      <div>
        {/* Status Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${getStatusColor(status)}`}>
            {status}
          </span>
          {github && github !== '#' && (
            <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> {t('projects.publicRepo')}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-sky-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Technologies Pills */}
        <div className="mb-4">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Technologies:</div>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Collapsible Architecture & Engineering Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="pt-2 border-t border-slate-800/70">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center justify-between w-full text-xs font-mono text-sky-400 hover:text-sky-300 py-1.5 transition-colors focus:outline-none"
            >
              <span className="flex items-center gap-1.5 font-medium">
                <Layers size={13} />
                {showDetails ? t('projects.hideNotes') : t('projects.viewNotes')}
              </span>
              {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {showDetails && (
              <div className="mt-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2 text-xs text-slate-300 leading-relaxed animate-fadeIn">
                <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase tracking-wider mb-1">
                  {t('projects.keyEngineering')}
                </div>
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle size={13} className="text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Links */}
      <div className="flex items-center gap-4 pt-5 mt-4 border-t border-slate-800/80">
        {github && github !== '#' ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-400 hover:text-sky-300 hover:underline"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.5.12-3.13 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99.005 1.99.135 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.64 1.63.24 2.83.12 3.13.75.8 1.2 1.82 1.2 3.08 0 4.44-2.69 5.42-5.25 5.71.42.36.8 1.07.8 2.15v3.18c0 .31.21.66.8.55A10.51 10.51 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
            <span>{t('projects.viewGitHub')}</span>
          </a>
        ) : (
          <span className="text-xs font-mono text-slate-500 italic">
            {t('projects.repoOnRequest')}
          </span>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 hover:underline ml-auto"
          >
            <ExternalLink size={13} />
            <span>{t('projects.liveDemo')}</span>
          </a>
        )}
      </div>
    </div>
  );
}
