// src/sections/Education.jsx
import SectionHeading from '../components/SectionHeading.jsx';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 px-4 max-w-4xl mx-auto">
      <SectionHeading id="education" subtitle={t('education.subtitle')}>
        {t('education.title')}
      </SectionHeading>

      <div className="glass-card p-8 rounded-2xl text-left relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 mt-1">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{t('education.degree')}</h3>
              <p className="text-lg text-sky-400 font-medium">{profile.institution}</p>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end text-sm text-slate-400 gap-1 font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-slate-500" />
              {profile.graduation}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-slate-500" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="pt-6 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            {t('education.pursuing')}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-400 pt-2 font-mono">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Data Structures & Algorithms
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Database Management Systems (SQL)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Object-Oriented Programming (Java/C++)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Computer Networks & Security
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Software Engineering & Requirements
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Web Systems Architecture
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
