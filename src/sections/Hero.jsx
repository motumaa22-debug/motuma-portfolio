// src/sections/Hero.jsx
import { useState } from 'react';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Mail, Terminal, Sparkles, MapPin, Copy, Check, Code, FileText } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'stack' | 'contact'
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyCode = () => {
    let textToCopy = '';
    if (activeTab === 'profile') {
      textToCopy = JSON.stringify(
        {
          name: profile.name,
          title: profile.title,
          institution: profile.institution,
          location: profile.location,
          focusAreas: ['Full-Stack Web', 'Backend Engineering', 'AI Applications'],
          status: 'Open for internships',
        },
        null,
        2
      );
    } else if (activeTab === 'stack') {
      textToCopy = `#!/bin/bash\n# Motuma's Primary Stack\necho "Languages: Java, C++, Python, JavaScript, PHP"\necho "Web: React, Vite, Tailwind CSS, HTML/CSS"\necho "Databases: MySQL, SQL Relational Architecture"\necho "Networking: IP Addressing, Cat6, PoE, Subnetting"`;
    } else {
      textToCopy = `Email: ${profile.email}\nGitHub: ${profile.github}\nLinkedIn: ${profile.linkedin}`;
    }

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2200);
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center py-16 sm:py-24 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
        {/* Left column: Profile Image + Introduction */}
        <div className="lg:col-span-7 text-left space-y-6">
          
          {/* Top Left Profile Row: Large Glowing Avatar + Primary Identity */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-2">
            {/* Large Blueprint-style Profile Avatar with Cyan-Purple Glowing Ring */}
            <div className="relative group shrink-0">
              {/* Glowing soft blur behind */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 via-cyan-400 to-sky-400 opacity-75 blur-md group-hover:opacity-100 transition duration-500"></div>
              
              {/* Outer Gradient Border matching the user's blueprint */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-to-tr from-purple-500 via-cyan-300 to-sky-400 shadow-2xl shadow-sky-500/30">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-950">
                  <img
                    src={profile.avatar || '/images/profile.jpg'}
                    alt={profile.name}
                    onError={(e) => { e.currentTarget.src = '/images/avatar-default.svg'; }}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Active indicator dot */}
                <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-950 shadow-md shadow-emerald-400/50" title="Online / Open to opportunities"></span>
              </div>
            </div>

            {/* Profile Intro next to Image */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Sparkles size={13} /> {t('hero.badge')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {profile.name}
              </h2>
              <p className="text-base sm:text-lg text-sky-400 font-medium">
                {t('hero.title')}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-mono flex items-center gap-1.5">
                <MapPin size={13} className="text-slate-500" />
                {profile.institution} · {profile.location}
              </p>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {t('hero.headline1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300">{t('hero.headlineAccent')}</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-sky-500 text-slate-950 font-semibold rounded-lg hover:bg-sky-400 transition-all shadow-md shadow-sky-500/20 text-sm"
            >
              {t('hero.viewProjects')} <ArrowRight className="ml-2" size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-3 border border-slate-700 bg-slate-900/60 text-slate-200 font-semibold rounded-lg hover:border-sky-500 hover:text-sky-400 transition-all text-sm"
            >
              {t('hero.contactMe')} <Mail className="ml-2" size={16} />
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-white hover:border-slate-700 transition-all text-xs font-mono relative"
              title="Copy email to clipboard"
            >
              {emailCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{emailCopied ? t('hero.emailCopied') : t('hero.copyEmail')}</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 pt-1">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">{t('hero.connect')}</span>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.5.12-3.13 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99.005 1.99.135 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.64 1.63.24 2.83.12 3.13.75.8 1.2 1.82 1.2 3.08 0 4.44-2.69 5.42-5.25 5.71.42.36.8 1.07.8 2.15v3.18c0 .31.21.66.8.55A10.51 10.51 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                </svg>
              </a>
            )}
            {profile.linkedin && profile.linkedin !== '#' && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.452 20.452h-3.554v-5.569c0-1.329-.025-3.039-1.852-3.039-1.853 0-2.136 1.447-2.136 2.941v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.267 2.37 4.267 5.452v6.291zM5.337 7.433c-1.144 0-2.07-.926-2.07-2.07s.926-2.069 2.07-2.069c1.143 0 2.069.925 2.069 2.069s-.926 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .792 0 1.771v20.452C0 23.208.792 24 1.771 24h20.452c.979 0 1.771-.792 1.771-1.771V1.771C24 .792 23.208 0 22.225 0z" />
                </svg>
              </a>
            )}
            <a
              href="#contact"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Engineering Telemetry Strip */}
          <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-lg border-t border-slate-800/80">
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left backdrop-blur-sm">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Degree Track</div>
              <div className="text-xs sm:text-sm font-bold text-slate-200">BSc CompSci '27</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left backdrop-blur-sm">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Code Portfolio</div>
              <div className="text-xs sm:text-sm font-bold text-sky-400">5 Practical Projects</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left backdrop-blur-sm col-span-2 sm:col-span-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Industry Exposure</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-400">Dangote IT Intern</div>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Multi-Tab Developer Terminal Card */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/85 p-5 shadow-2xl backdrop-blur-md text-left font-mono text-xs sm:text-sm relative overflow-hidden group">
            
            {/* Window title bar & tabs */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 gap-2">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto text-[11px] sm:text-xs">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                    activeTab === 'profile'
                      ? 'bg-slate-800 text-sky-400 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Code size={12} /> profile.json
                </button>
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                    activeTab === 'stack'
                      ? 'bg-slate-800 text-sky-400 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Terminal size={12} /> stack.sh
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                    activeTab === 'contact'
                      ? 'bg-slate-800 text-sky-400 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText size={12} /> contact.txt
                </button>
              </div>

              {/* Copy Snippet Button */}
              <button
                onClick={handleCopyCode}
                className="text-slate-400 hover:text-white p-1 rounded transition-colors shrink-0"
                title="Copy code snippet"
                aria-label="Copy code snippet"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Tab 1: profile.json */}
            {activeTab === 'profile' && (
              <div className="space-y-1.5 leading-relaxed text-slate-300 animate-fadeIn">
                <p><span className="text-purple-400">const</span> <span className="text-sky-300">developer</span> = &#123;</p>
                <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-amber-300">"{profile.name}"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">degree:</span> <span className="text-amber-300">"BSc Computer Science"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">institution:</span> <span className="text-amber-300">"JiT, Ethiopia"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">focusAreas:</span> [</p>
                <p className="pl-8 text-emerald-400">"Full-Stack Web",</p>
                <p className="pl-8 text-emerald-400">"Backend Engineering",</p>
                <p className="pl-8 text-emerald-400">"AI Applications"</p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-sky-400">"Preparing for internships"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">readyToBuild:</span> <span className="text-amber-400">true</span></p>
                <p>&#125;;</p>
              </div>
            )}

            {/* Tab 2: stack.sh */}
            {activeTab === 'stack' && (
              <div className="space-y-2 leading-relaxed text-slate-300 animate-fadeIn font-mono">
                <p className="text-slate-500"># System diagnostic: Primary Tech Stack</p>
                <p><span className="text-sky-400">$</span> motuma --languages</p>
                <p className="text-emerald-400 pl-4">Java, C++, Python (Basic), JavaScript, PHP</p>
                <p><span className="text-sky-400">$</span> motuma --frontend</p>
                <p className="text-emerald-400 pl-4">React, Vite, Tailwind CSS, HTML5, CSS3</p>
                <p><span className="text-sky-400">$</span> motuma --backend-db</p>
                <p className="text-emerald-400 pl-4">PHP, MySQL, REST APIs, XAMPP</p>
                <p><span className="text-sky-400">$</span> motuma --networks</p>
                <p className="text-emerald-400 pl-4">IP Subnetting, Cat6, PoE, IP Cameras</p>
              </div>
            )}

            {/* Tab 3: contact.txt */}
            {activeTab === 'contact' && (
              <div className="space-y-2 leading-relaxed text-slate-300 animate-fadeIn font-mono">
                <p className="text-slate-500"># Direct Developer Contact</p>
                <p><span className="text-slate-400">EMAIL:</span> <span className="text-sky-300">{profile.email}</span></p>
                <p><span className="text-slate-400">GITHUB:</span> <a href={profile.github} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">github.com/motumaa22-debug</a></p>
                <p><span className="text-slate-400">LINKEDIN:</span> <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-amber-300 hover:underline">Motuma Abebe</a></p>
                <p><span className="text-slate-400">LOCATION:</span> <span className="text-slate-300">Ethiopia (UTC+3)</span></p>
                <p className="text-xs text-sky-400 pt-1">Feel free to reach out anytime!</p>
              </div>
            )}

            {/* Quick terminal footer */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Terminal Ready
              </span>
              <span className="text-slate-500 font-mono text-[11px]">{copied ? 'Copied!' : 'UTF-8'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
