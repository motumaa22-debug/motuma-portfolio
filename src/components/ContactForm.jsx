// src/components/ContactForm.jsx
import { useState } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please provide your name.';
    if (!form.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) errs.subject = 'Please provide a subject.';
    if (!form.message.trim()) {
      errs.message = 'Please write your message.';
    } else if (form.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const emailRecipient = profile.email && profile.email !== '#' ? profile.email : 'motumaa22@gmail.com';
    const mailtoUrl = `mailto:${emailRecipient}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `From: ${form.name} (${form.email})\n\nMessage:\n${form.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
          {t('contact.nameLabel')} <span className="text-rose-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={t('contact.namePlaceholder')}
          className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/80 text-white placeholder-slate-500 border transition-all text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 ${
            errors.name ? 'border-rose-500' : 'border-slate-700/80 focus:border-sky-500'
          }`}
        />
        {errors.name && <p className="text-rose-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
          {t('contact.emailFieldLabel')} <span className="text-rose-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={t('contact.emailPlaceholder')}
          className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/80 text-white placeholder-slate-500 border transition-all text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 ${
            errors.email ? 'border-rose-500' : 'border-slate-700/80 focus:border-sky-500'
          }`}
        />
        {errors.email && <p className="text-rose-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
          {t('contact.subjectLabel')} <span className="text-rose-400">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder={t('contact.subjectPlaceholder')}
          className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/80 text-white placeholder-slate-500 border transition-all text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 ${
            errors.subject ? 'border-rose-500' : 'border-slate-700/80 focus:border-sky-500'
          }`}
        />
        {errors.subject && <p className="text-rose-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
          {t('contact.messageLabel')} <span className="text-rose-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder={t('contact.messagePlaceholder')}
          className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/80 text-white placeholder-slate-500 border transition-all text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 ${
            errors.message ? 'border-rose-500' : 'border-slate-700/80 focus:border-sky-500'
          }`}
        />
        {errors.message && <p className="text-rose-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 text-slate-950 font-semibold rounded-lg hover:bg-sky-400 transition-all text-sm shadow-md shadow-sky-500/20"
      >
        <Send size={15} /> {t('contact.sendButton')}
      </button>

      {submitted && (
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-start gap-2">
          <CheckCircle size={16} className="mt-0.5 shrink-0" />
          <span>{t('contact.sentNotice')}</span>
        </div>
      )}
    </form>
  );
}
