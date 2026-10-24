// src/components/SectionHeading.jsx
export default function SectionHeading({ id, children, subtitle }) {
  return (
    <div className="text-center mb-12 scroll-mt-24">
      <h2 id={id} className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
        {children}
      </h2>
      <div className="w-12 h-1 bg-sky-400 mx-auto rounded-full mb-3"></div>
      {subtitle && <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}
