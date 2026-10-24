// src/sections/About.jsx
import SectionHeading from '../components/SectionHeading.jsx';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { Code2, Layers, Sparkles } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 max-w-5xl mx-auto">
      <SectionHeading id="about" subtitle={t('about.subtitle')}>
        {t('about.title')}
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7 space-y-4 text-base sm:text-lg leading-relaxed text-slate-300 text-left">
          <p>
            {t('about.p1')}
          </p>
          <p>
            {t('about.p2')}
          </p>
          <p className="text-slate-400">
            {t('about.p3')}
          </p>
        </div>

        <div className="md:col-span-5 grid grid-cols-1 gap-4 text-left">
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2 text-sky-400 font-semibold">
              <Code2 size={20} />
              <h4>{t('about.card1Title')}</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              {t('about.card1Desc')}
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2 text-amber-400 font-semibold">
              <Sparkles size={20} />
              <h4>{t('about.card2Title')}</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              {t('about.card2Desc')}
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2 text-emerald-400 font-semibold">
              <Layers size={20} />
              <h4>{t('about.card3Title')}</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              {t('about.card3Desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
