// src/sections/Experience.jsx
import SectionHeading from '../components/SectionHeading.jsx';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, CheckCircle2, Eye } from 'lucide-react';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto">
      <SectionHeading id="experience" subtitle={t('experience.subtitle')}>
        {t('experience.title')}
      </SectionHeading>

      <div className="space-y-8">
        {/* Internship Experience */}
        <div className="glass-card p-8 rounded-2xl text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-2">
                {t('experience.internBadge')}
              </div>
              <h3 className="text-2xl font-bold text-white">{t('experience.role')}</h3>
              <p className="text-lg text-sky-400 font-medium">{t('experience.company')}</p>
            </div>
            <div className="text-sm font-mono text-slate-400">
              {t('experience.type')}
            </div>
          </div>

          <div className="pt-6 space-y-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t('experience.intro')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hands-on Tasks */}
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <CheckCircle2 size={16} />
                  <span>{t('experience.handsOnTitle')}</span>
                </div>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>Assisted in physical Ethernet cabling, patch panel crimping, and termination (Cat6).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>Mounted and configured IP cameras with Power-over-Ethernet (PoE) switches.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>Diagnosed localized connection dropouts using ping, traceroute, and cable testers.</span>
                  </li>
                </ul>
              </div>

              {/* Observed & Shadowed Activities */}
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-3">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                  <Eye size={16} />
                  <span>{t('experience.observedTitle')}</span>
                </div>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>Observed Windows Server domain controllers, Active Directory, DNS, and DHCP setups.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>Gained insight into enterprise network segmentation and industrial CCTV NVR recording.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>Learned organizational protocols for resolving IT support tickets.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Future Track & Self-Directed Learning */}
        <div className="p-6 rounded-xl border border-dashed border-slate-700/70 bg-slate-900/30 text-left flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 mt-1">
            <Briefcase size={20} />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white mb-1">{t('experience.ongoingTitle')}</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t('experience.ongoingDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
