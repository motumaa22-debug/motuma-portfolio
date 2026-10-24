// src/components/SkillGroup.jsx
export default function SkillGroup({ category, items }) {
  return (
    <div className="glass-card p-6 rounded-2xl text-left">
      <h3 className="text-xl font-semibold mb-4 text-sky-400 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-sky-400 inline-block"></span>
        {category}
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {items.map((skill) => {
          const name = typeof skill === 'string' ? skill : skill.name;
          return (
            <span
              key={name}
              className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-sm font-medium bg-slate-800/80 text-slate-200 border border-slate-700 hover:border-sky-500/60 hover:text-white hover:bg-slate-800 transition-all shadow-sm"
            >
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
