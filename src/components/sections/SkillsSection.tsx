import { SectionHeading } from '@/components/common/SectionHeading';
import { skillCategories, skillsIntro } from '@/data/skills';

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-20 py-24 md:py-32 max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12"
    >
      <SectionHeading title="Skills" />

      <p className="text-[--color-text-secondary] mt-4 mb-8">{skillsIntro}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map(category => (
          <div
            key={category.title}
            className="rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            style={{
              backgroundColor: 'var(--color-bg-paper)',
              border: '1px solid var(--color-divider)',
            }}
          >
            <h3 className="text-sm font-semibold text-[--color-accent-primary] uppercase tracking-wider mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg cursor-default"
                  style={{
                    backgroundColor:
                      'color-mix(in srgb, var(--color-accent-primary) 10%, transparent)',
                    color: 'var(--color-accent-primary)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
