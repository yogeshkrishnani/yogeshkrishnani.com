import { SectionId } from '../components/layout/Sections';

/**
 * Determines which section is most visible in the viewport
 * @param sections Array of section IDs
 * @returns The ID of the most visible section
 */
export const getMostVisibleSection = (sections: SectionId[]): SectionId => {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const viewportBottom = scrollPosition + viewportHeight;

  // Get all section elements
  const sectionElements = sections.map(id => document.getElementById(id));

  // Find which section is most visible in the viewport
  let maxVisibleSection = sections[0];
  let maxVisiblePercentage = 0;

  for (let i = 0; i < sectionElements.length; i++) {
    const section = sectionElements[i];
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      // Calculate how much of the section is visible
      const visibleTop = Math.max(scrollPosition, sectionTop);
      const visibleBottom = Math.min(viewportBottom, sectionBottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      // Calculate percentage of section that's visible
      const visiblePercentage = visibleHeight / sectionHeight;

      if (visiblePercentage > maxVisiblePercentage) {
        maxVisiblePercentage = visiblePercentage;
        maxVisibleSection = sections[i];
      }
    }
  }

  return maxVisibleSection;
};
