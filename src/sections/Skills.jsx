// src/sections/Skills.jsx
import SectionHeading from '../components/SectionHeading.jsx';
import SkillGroup from '../components/SkillGroup.jsx';
import { skills } from '../data/skills.js';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading
        id="skills"
        subtitle={t('skills.subtitle')}
      >
        {t('skills.title')}
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group) => (
          <SkillGroup key={group.category} category={group.category} items={group.items} />
        ))}
      </div>
    </section>
  );
}
