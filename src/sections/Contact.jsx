// src/sections/Contact.jsx
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MapPin, MessageSquare, Copy, Check } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading
        id="contact"
        subtitle={t('contact.subtitle')}
      >
        {t('contact.title')}
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MessageSquare size={20} className="text-sky-400" />
              <span>{t('contact.connectHeader')}</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t('contact.connectText')}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between gap-3 text-sm text-slate-300 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">{t('contact.emailLabel')}</div>
                    {profile.email && profile.email !== '#' ? (
                      <a href={`mailto:${profile.email}`} className="text-white hover:text-sky-400 font-medium">
                        {profile.email}
                      </a>
                    ) : (
                      <span className="text-slate-400 italic">[Email placeholder]</span>
                    )}
                  </div>
                </div>
                {profile.email && profile.email !== '#' && (
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors shrink-0"
                    title="Copy email address"
                  >
                    {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">{t('contact.locationLabel')}</div>
                  <span className="text-white font-medium">{profile.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.5.12-3.13 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99.005 1.99.135 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.64 1.63.24 2.83.12 3.13.75.8 1.2 1.82 1.2 3.08 0 4.44-2.69 5.42-5.25 5.71.42.36.8 1.07.8 2.15v3.18c0 .31.21.66.8.55A10.51 10.51 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400">{t('contact.githubLabel')}</div>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline font-medium">
                    github.com/motumaa22-debug
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-left">
            <h3 className="text-lg font-semibold text-white mb-6">{t('contact.formTitle')}</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
