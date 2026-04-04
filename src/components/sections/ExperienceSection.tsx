import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { SectionHeading } from '@/components/common/SectionHeading';
import { experiences } from '@/data/experiences';

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-20 py-24 md:py-32 max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12"
    >
      <SectionHeading title="Experience" />

      <div className="mt-8">
        <VerticalTimeline
          lineColor="var(--color-accent-primary)"
          layout="1-column-left"
          animate={false}
        >
          {experiences.map(experience => (
            <VerticalTimelineElement
              key={experience.company}
              contentStyle={{
                background: 'var(--color-bg-paper)',
                border: '1px solid var(--color-divider)',
                borderRadius: '16px',
                boxShadow: 'none',
                padding: '1.5rem',
              }}
              contentArrowStyle={{
                borderRight: '7px solid var(--color-divider)',
              }}
              iconStyle={{
                background: experience.isCurrent ? 'var(--color-accent-primary)' : '#9ca3af',
                width: '16px',
                height: '16px',
                marginLeft: '12px',
                marginTop: '12px',
                boxShadow: `0 0 0 3px var(--color-bg-default), 0 0 0 5px ${experience.isCurrent ? 'var(--color-accent-primary)' : '#d1d5db'}`,
              }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <div>
                  <h3 className="text-lg font-bold text-[--color-text-primary] m-0">
                    {experience.title}
                  </h3>
                  <span className="text-[--color-accent-primary] font-medium">
                    @ {experience.company}
                  </span>
                </div>
                <span className="text-sm text-[--color-text-secondary] mt-1 md:mt-0">
                  {experience.period}
                </span>
              </div>

              <ul className="mt-3 space-y-2 list-disc list-inside text-[--color-text-secondary] text-sm leading-relaxed pl-0">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
