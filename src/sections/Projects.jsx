// src/sections/Projects.jsx
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import { useLanguage } from '../context/LanguageContext';
import { Search, X, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = [
    { key: 'All', label: t('projects.cats.all') },
    { key: 'In progress', label: t('projects.cats.inProgress') },
    { key: 'Completed', label: t('projects.cats.completed') },
    { key: 'Academic', label: t('projects.cats.academic') },
    { key: 'Internship experience', label: t('projects.cats.internship') },
  ];

  const filteredProjects = projects.filter((project) => {
    // Category match
    const categoryMatch =
      filter === 'All'
        ? true
        : filter === 'Academic'
        ? project.status.toLowerCase().includes('academic') || project.description.toLowerCase().includes('academic')
        : project.status.toLowerCase() === filter.toLowerCase();

    // Search query match (title, description, or technologies)
    const q = search.trim().toLowerCase();
    const searchMatch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(q));

    return categoryMatch && searchMatch;
  });

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading
        id="projects"
        subtitle={t('projects.subtitle')}
      >
        {t('projects.title')}
      </SectionHeading>

      {/* Search Bar & Category Filters Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('projects.searchPlaceholder')}
            className="w-full pl-9 pr-9 py-2 text-xs sm:text-sm rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all font-mono"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filter === cat.key
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-sm shadow-sky-500/20'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white border border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Counter */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6 px-1">
        <span>
          {t('projects.showing')} <strong className="text-slate-300">{filteredProjects.length}</strong> {t('projects.of')}{' '}
          <strong className="text-slate-300">{projects.length}</strong> {t('projects.projectsCount')}
        </span>
        {(search || filter !== 'All') && (
          <button
            onClick={() => {
              setSearch('');
              setFilter('All');
            }}
            className="text-sky-400 hover:underline flex items-center gap-1"
          >
            {t('projects.resetFilters')}
          </button>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-slate-800 bg-slate-900/30">
          <FolderGit2 size={36} className="mx-auto text-slate-600 mb-3" />
          <h4 className="text-base font-semibold text-white mb-1">{t('projects.noProjectsTitle')}</h4>
          <p className="text-xs sm:text-sm text-slate-400 mb-4 max-w-sm mx-auto">
            {t('projects.noProjectsDesc')}
          </p>
          <button
            onClick={() => {
              setSearch('');
              setFilter('All');
            }}
            className="px-4 py-2 rounded-lg text-xs font-mono bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400 transition-colors"
          >
            {t('projects.resetFilters')}
          </button>
        </div>
      )}
    </section>
  );
}
