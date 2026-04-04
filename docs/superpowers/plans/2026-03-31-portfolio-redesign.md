# Portfolio Redesign — Editorial + Tailwind Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Full rebuild of portfolio from MUI to Tailwind CSS v4 with editorial aesthetic, preserving all content and dark mode.

**Architecture:** Single-page React 19 app with Vite. Replace MUI with Tailwind v4 for styling, keep Framer Motion for animations. Extract all hardcoded content into typed data files. ThemeContext toggles `dark` class on `<html>` for Tailwind's dark mode.

**Tech Stack:** React 19, Tailwind CSS v4, Framer Motion, Vite, TypeScript, lucide-react

**Spec:** `docs/superpowers/specs/2026-03-31-portfolio-redesign-design.md`

**Worktree:** `/Users/yogesh.krishnani/src/yogeshkrishnani-portfolio-redesign` (branch: `redesign/editorial-tailwind`)

---

## Task Overview

1. Swap dependencies (remove MUI, add Tailwind + lucide-react)
2. Tailwind config + base CSS + ThemeContext update
3. Data files (personal, experiences, projects, skills, navigation)
4. Common components (SectionHeading, ScrollProgress, BackToTop)
5. Layout: Navigation (sticky top, mobile drawer)
6. Layout: Footer
7. Layout: Sections provider + scrollUtils (preserve)
8. Section: IntroSection (hero split layout)
9. Section: AboutSection (two column)
10. Section: ExperienceSection (vertical timeline)
11. Section: SkillsSection (grouped tags grid)
12. Section: ProjectsSection (hover card grid)
13. Section: ContactSection (centered CTA)
14. App.tsx + main.tsx rebuild
15. Cleanup: remove old MUI files, App.css, theme/

---

### Task 1: Swap Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Uninstall MUI and related packages**

```bash
npm uninstall @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom
```

- [ ] **Step 2: Install Tailwind CSS v4 and lucide-react**

```bash
npm install tailwindcss @tailwindcss/vite lucide-react
```

- [ ] **Step 3: Verify package.json**

Run: `cat package.json | grep -E "tailwindcss|lucide|mui|emotion|react-router"`

Expected: Only `tailwindcss`, `@tailwindcss/vite`, and `lucide-react` present.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: swap MUI for Tailwind v4 and lucide-react"
```

---

### Task 2: Tailwind Config + Base CSS + ThemeContext Update

**Files:**
- Modify: `vite.config.ts`
- Create: `src/index.css`
- Modify: `src/context/ThemeContext.tsx`
- Delete: `src/styles/globals.css`, `src/App.css`, `src/theme/theme.ts`

- [ ] **Step 1: Add Tailwind plugin to Vite config**

Replace `vite.config.ts`:

```ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

- [ ] **Step 2: Create `src/index.css`**

Tailwind base + custom theme variables + dark mode overrides + scrollbar styles + blink keyframe. See spec for full color palette. Use `@import 'tailwindcss'` at top, `@theme` block for CSS variables, `@layer base` for body/scrollbar/keyframes. Dark mode styles use `.dark` selector.

- [ ] **Step 3: Update ThemeContext to toggle `dark` class on `document.documentElement`**

Keep existing localStorage + system preference logic. Add in the `mode` useEffect:
```ts
if (mode === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
```
Remove all MUI imports.

- [ ] **Step 4: Delete old files**

```bash
rm src/styles/globals.css src/App.css src/theme/theme.ts
rmdir src/styles src/theme
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Tailwind v4 config, base CSS, update ThemeContext for dark class"
```

---

### Task 3: Data Files

**Files:**
- Create: `src/data/personal.ts`
- Create: `src/data/experiences.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/skills.ts`
- Create: `src/data/navigation.ts`

- [ ] **Step 1: Create `src/data/personal.ts`**

Export typed object with: name (`"Yogesh Krishnani"`), greeting (`"Hi, I'm"`), tagline (`"I build software for the agentic era."`), bio (the one-liner about full-stack at Alation), resumeUrl (`"/Yogesh_Krishnani_Resume.pdf"`), avatarUrl (`"/yk_avatar.png"`), aboutParagraphs (4 paragraphs from current AboutSection), quickFacts (6 items from current AboutSection), contact object with email, linkedIn, github, phone (URLs and display text from current ContactSection).

- [ ] **Step 2: Create `src/data/experiences.ts`**

Export typed array. Copy the exact 3 experience objects from current `ExperienceSection.tsx` (Alation, Infor, Streebo) with fields: `company`, `title`, `period`, `responsibilities` (string array). Add `isCurrent: boolean` field (true for Alation).

- [ ] **Step 3: Create `src/data/projects.ts`**

Export typed array + `projectsIntro` string (`"Things I built outside of work — for people who needed them."`). Copy the exact 2 project objects with fields: `title`, `description`, `impact`, `tech` (string array), `link`.

- [ ] **Step 4: Create `src/data/skills.ts`**

Export typed array + `skillsIntro` string (`"Here are some technologies and skills I've been working with recently:"`). Copy the exact 6 skill category objects with fields: `title`, `skills` (string array).

- [ ] **Step 5: Create `src/data/navigation.ts`**

Export typed array of 5 nav links: `{ name: string; id: SectionId }`. Import `SectionId` from `@/components/layout/Sections`.

- [ ] **Step 6: Commit**

```bash
git add src/data/
git commit -m "feat: extract hardcoded content into typed data files"
```

---

### Task 4: Common Components (SectionHeading, ScrollProgress, BackToTop)

**Files:**
- Create: `src/components/common/SectionHeading.tsx`
- Create: `src/components/common/ScrollProgress.tsx`
- Modify: `src/components/common/BackToTop.tsx`

- [ ] **Step 1: Create `SectionHeading.tsx`**

Reusable component. Props: `title: string`. Renders:
- `<h2>` with Tailwind classes: `text-3xl font-bold tracking-tight text-[--color-text-primary]`
- Below it: accent underline bar `<div>` with classes: `w-[50px] h-[3px] bg-[--color-accent-primary] mt-2`
- Wrap in `motion.div` with `whileInView` fade-up animation, `viewport: { once: true, margin: '-100px' }`.

- [ ] **Step 2: Create `ScrollProgress.tsx`**

Uses Framer Motion `useScroll` + `useSpring`. Renders a `motion.div` fixed at top of viewport (`fixed top-0 left-0 right-0 z-50 h-[3px] bg-[--color-accent-primary] origin-left`). Style `scaleX` bound to `scrollYProgress` spring value.

- [ ] **Step 3: Rebuild `BackToTop.tsx`**

Replace MUI `Fab`/`Zoom` with Tailwind + Framer Motion. Show/hide based on scroll > 300px (existing logic). Render a `motion.button` with `ChevronUp` icon from lucide-react. Tailwind classes: `fixed bottom-4 right-4 z-50 p-3 rounded-full bg-[--color-accent-primary] text-white shadow-lg`. Use `AnimatePresence` + `motion.button` with opacity/scale animation for show/hide.

- [ ] **Step 4: Add `prefers-reduced-motion` support**

In `ScrollProgress.tsx` and all section components that use `whileInView`, import `useReducedMotion` from `framer-motion`. When `prefersReducedMotion` is true, skip animations (set `initial` to `false` or use `transition: { duration: 0 }`). The `ScrollProgress` bar should still render but without the spring animation.

- [ ] **Step 5: Verify build compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 6: Commit**

```bash
git add src/components/common/
git commit -m "feat: add SectionHeading, ScrollProgress, rebuild BackToTop with Tailwind"
```

---

### Task 5: Navigation (Sticky Top + Mobile Drawer)

**Files:**
- Modify: `src/components/layout/Navigation.tsx`

- [ ] **Step 1: Rebuild Navigation with Tailwind**

Replace all MUI imports (`AppBar`, `Drawer`, `Toolbar`, etc.) with native HTML + Tailwind classes. Import `Sun`, `Moon`, `Menu`, `X` from `lucide-react`. Import `motion`, `AnimatePresence` from `framer-motion`. Import `navigationLinks` from `@/data/navigation`. Import `personalInfo` from `@/data/personal` (for resumeUrl).

Structure:
- `<header>` with `fixed top-0 w-full z-40 transition-all duration-300`
- On scroll: add `backdrop-blur-md border-b border-[--color-divider]` classes (use `useState` + scroll listener, same as current)
- Inner `<nav>` with `max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-16`
- Left: `<YK/>` button in monospace font
- Right (desktop, `hidden md:flex`): nav links as `<button>` elements. Active link gets `text-[--color-accent-primary]`. Below active link: `motion.div` with `layoutId="nav-underline"` for sliding indicator.
- Theme toggle: `Sun`/`Moon` icon button
- Resume: `<a>` styled as outlined button, `target="_blank"`, href from `personalInfo.resumeUrl`
- Mobile (`md:hidden`): `Menu` icon button toggles drawer state

- [ ] **Step 2: Build mobile drawer**

Use `AnimatePresence` + `motion.div` for slide-in from right. Fixed overlay + panel (w-60). Contains: name header, nav links list, theme toggle, resume link. `X` icon to close.

- [ ] **Step 3: Add dark mode classes**

All text/bg colors need `dark:` variants. E.g., `text-[--color-text-primary]` stays (CSS vars handle it in index.css), but any hardcoded colors need dark variants.

- [ ] **Step 4: Verify build**

```bash
npx tsc --noEmit
```

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Navigation.tsx
git commit -m "feat: rebuild Navigation with Tailwind, Framer Motion layoutId indicator"
```

---

### Task 6: Footer

**Files:**
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Rebuild Footer with Tailwind**

Replace all MUI imports. Import `Github`, `Linkedin`, `Mail` from `lucide-react`. Import `personalInfo` from `@/data/personal`.

Structure:
- `<footer>` with `py-8 border-t border-[--color-divider]`
- Centered content: social icon links row (GitHub, LinkedIn, Email) as `<a>` elements with `text-[--color-text-secondary] hover:text-[--color-accent-primary] transition-colors`
- Attribution: `"Designed & Built by Yogesh Krishnani"` in small muted text
- Copyright: `© ${new Date().getFullYear()} Yogesh Krishnani. All rights reserved.` in small muted text

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: rebuild Footer with Tailwind and lucide-react icons"
```

---

### Task 7: Sections Provider + scrollUtils (Preserve)

**Files:**
- Modify: `src/components/layout/Sections.tsx`
- Keep: `src/utils/scrollUtils.ts` (no changes needed)

- [ ] **Step 1: Update Sections.tsx**

This file has no MUI imports — it's pure React context. Verify it compiles as-is. The `SectionId` type and `SectionsProvider` remain unchanged. The `@/utils/scrollUtils.ts` import via path alias should still work.

- [ ] **Step 2: Verify**

```bash
npx tsc --noEmit 2>&1 | grep -i "Sections\|scrollUtils" || echo "No errors"
```

- [ ] **Step 3: Commit (if changes needed)**

Only commit if modifications were required.

---

### Task 8: IntroSection (Hero Split Layout)

**Files:**
- Modify: `src/components/sections/IntroSection.tsx`

- [ ] **Step 1: Rebuild hero with Tailwind + Framer Motion**

Replace all MUI imports. Import `motion` from `framer-motion`. Import `ArrowRight` from `lucide-react`. Import `personalInfo` from `@/data/personal`.

Structure — outer `<section id="intro">` with `scroll-mt-20 min-h-screen flex items-center py-20 md:py-32`:
- Inner flex container: `flex flex-col md:flex-row items-center gap-12 max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12`

**Left side (~55%)** — `motion.div` with staggered children:
- "Hi, I'm" — `text-sm uppercase tracking-[0.2em] text-[--color-text-secondary] mb-2`
- Name — `text-5xl md:text-6xl font-bold tracking-tight text-[--color-text-primary] mb-4` (use `font-[--font-heading]`)
- Tagline — `text-xl md:text-2xl text-[--color-text-secondary] mb-4`
- Bio one-liner — `text-base text-[--color-text-secondary] mb-8 max-w-lg leading-relaxed`
- CTAs — flex row with "Get In Touch" (filled button: `bg-[--color-accent-primary] text-white px-6 py-3 rounded-lg font-medium`) and "View Resume" (outlined: `border border-[--color-accent-primary] text-[--color-accent-primary] px-6 py-3 rounded-lg font-medium`)

**Right side (~45%)** — `motion.div` with 0.4s delay:
- Circular avatar: `<img>` with `w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[--color-divider] shadow-md mx-auto mb-6`
- Code editor card: dark bg div (`bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xl max-w-sm mx-auto`). Title bar with 3 colored dots. Body with monospace styled text lines showing keywords. CSS `animation: blink 1s step-end infinite` on cursor span.

- [ ] **Step 2: Add stagger animation variants**

```ts
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
```

Apply `variants={container}` on left wrapper, `variants={item}` on each child.

- [ ] **Step 3: Add parallax on right side**

Use `useScroll` + `useTransform` to give the right side subtle `translateY` parallax on scroll.

- [ ] **Step 4: Mobile responsiveness**

Below `md`: stack vertically (text on top via `flex-col`), hide or shrink the code editor visual on `sm` screens.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/IntroSection.tsx
git commit -m "feat: rebuild IntroSection as editorial split hero with Tailwind"
```

---

### Task 9: AboutSection (Two Column)

**Files:**
- Modify: `src/components/sections/AboutSection.tsx`

- [ ] **Step 1: Rebuild with Tailwind**

Replace MUI imports. Import `motion` from `framer-motion`. Import `personalInfo` from `@/data/personal`. Import `SectionHeading` from `@/components/common/SectionHeading`.

Structure — `<section id="about">` with `scroll-mt-20 py-24 md:py-32 max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12`:
- `SectionHeading` with title "About Me"
- Two-column flex: `flex flex-col md:flex-row gap-12 mt-8`

**Left (~60%)** — `md:w-3/5`:
- Map `personalInfo.aboutParagraphs` to `<p>` elements with `text-[--color-text-secondary] leading-[1.8] mb-6`
- Wrap each in `motion.p` with staggered `whileInView` fade-up

**Right (~40%)** — `md:w-2/5`:
- `motion.div` with slide-in-from-right animation (`whileInView`, `once: true`)
- Card: `border border-[--color-divider] rounded-xl p-6 bg-[--color-bg-paper]`
- "Quick Facts" heading: `text-lg font-semibold mb-4`
- Map `personalInfo.quickFacts` to list items with `text-[--color-text-secondary] py-1`

- [ ] **Step 2: Dark mode**

CSS variables handle most of it. Ensure card bg uses `dark:bg-[#1e1e1e]` and border uses `dark:border-[rgba(255,255,255,0.1)]`.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/AboutSection.tsx
git commit -m "feat: rebuild AboutSection as two-column editorial layout"
```

---

### Task 10: ExperienceSection (Vertical Timeline)

**Files:**
- Modify: `src/components/sections/ExperienceSection.tsx`

- [ ] **Step 1: Rebuild as vertical timeline**

Replace all MUI imports (Tabs, Tab, Paper, etc.). Import `motion`, `useScroll`, `useTransform` from `framer-motion`. Import `experiences` from `@/data/experiences`. Import `SectionHeading`.

Structure — `<section id="experience">` with `scroll-mt-20 py-24 md:py-32 max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12`:
- `SectionHeading` with title "Experience"
- Timeline container: `relative pl-8 mt-8`
- Vertical line: `absolute left-0 top-0 bottom-0 w-0.5 bg-[--color-divider]` — use a `motion.div` with `scaleY` animated from 0 to 1 via scroll-linked `useScroll` targeting the timeline container ref + `useTransform`
- Map `experiences` array to timeline entries

**Each entry** — `motion.div` with `whileInView` fade-up, `relative mb-10 last:mb-0`:
- Dot: `absolute -left-[33px] top-1.5 w-3 h-3 rounded-full border-2 border-white` + `bg-[--color-accent-primary]` for current, `bg-gray-400` for past (use `experience.isCurrent`)
- Header row: `flex flex-col md:flex-row md:justify-between md:items-baseline`
  - Left: `<span class="text-lg font-bold">` title + `<span class="text-[--color-accent-primary] ml-2">` @ company
  - Right: `<span class="text-sm text-[--color-text-secondary]">` period
- Bullet list: `<ul class="mt-3 space-y-2 list-disc list-inside text-[--color-text-secondary] text-sm leading-relaxed">`

- [ ] **Step 2: Mobile adjustments**

Below `md`: dates render below role title (already handled by `flex-col`). Reduce `pl-6`.

- [ ] **Step 3: Remove old TabPanel component**

Delete the `TabPanel` helper function that existed for the tab-based layout.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/ExperienceSection.tsx
git commit -m "feat: rebuild ExperienceSection as vertical timeline with scroll animation"
```

---

### Task 11: SkillsSection (Grouped Tags Grid)

**Files:**
- Modify: `src/components/sections/SkillsSection.tsx`
- Delete: `src/components/skills/SkillCategory.tsx`

- [ ] **Step 1: Rebuild with Tailwind**

Replace MUI imports. Import `motion` from `framer-motion`. Import `skillCategories`, `skillsIntro` from `@/data/skills`. Import `SectionHeading`.

Structure — `<section id="skills">` with `scroll-mt-20 py-24 md:py-32 max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12`:
- `SectionHeading` with title "Skills"
- Intro text: `<p class="text-[--color-text-secondary] mt-4 mb-8">`
- Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`

**Each category** — `motion.div` with staggered `whileInView`:
- Category title: `text-base font-semibold text-[--color-text-primary] mb-3`
- Tags container: `flex flex-wrap gap-2`
- Each tag: `motion.span` with stagger (0.05s delay), classes: `px-3 py-1 text-xs rounded-full bg-[#f0f0f0] dark:bg-[rgba(255,255,255,0.08)] text-[--color-text-primary]`

- [ ] **Step 2: Delete unused SkillCategory component**

```bash
rm src/components/skills/SkillCategory.tsx
rmdir src/components/skills
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/SkillsSection.tsx
git add -A  # capture deletion
git commit -m "feat: rebuild SkillsSection as 3-column tag grid with stagger animation"
```

---

### Task 12: ProjectsSection (Hover Card Grid)

**Files:**
- Modify: `src/components/sections/ProjectsSection.tsx`

- [ ] **Step 1: Rebuild with Tailwind + Framer Motion hover**

Replace MUI imports. Import `motion` from `framer-motion`. Import `ExternalLink` from `lucide-react`. Import `projects`, `projectsIntro` from `@/data/projects`. Import `SectionHeading`.

Structure — `<section id="projects">` with `scroll-mt-20 py-24 md:py-32 max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12`:
- `SectionHeading` with title "Projects"
- Intro text: `<p class="text-[--color-text-secondary] mt-4 mb-8">`
- Grid: `grid grid-cols-1 md:grid-cols-2 gap-6`

**Each card** — `motion.div` with `whileInView` stagger + `whileHover={{ y: -4 }}`:
- Outer: `border border-[--color-divider] rounded-xl p-6 bg-[--color-bg-paper] dark:bg-[#1e1e1e] transition-shadow hover:shadow-lg hover:border-[--color-accent-primary]`
- Header row: flex with title (`text-lg font-semibold`) + impact badge (`px-3 py-0.5 text-xs rounded-full bg-[--color-accent-primary] text-white`) + external link icon (top right, `text-[--color-text-secondary] hover:text-[--color-accent-primary]`)
- Description: `text-sm text-[--color-text-secondary] leading-relaxed mt-3 mb-4`
- Tech tags: `flex flex-wrap gap-2` with each tag: `text-xs px-2 py-0.5 rounded bg-[--color-accent-primary]/10 text-[--color-accent-primary]`

- [ ] **Step 2: Wrap card in `<a>` linking to project**

Entire card is clickable via wrapping `<a href={project.link} target="_blank" rel="noopener noreferrer">`.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ProjectsSection.tsx
git commit -m "feat: rebuild ProjectsSection as hover card grid with impact badges"
```

---

### Task 13: ContactSection (Centered CTA)

**Files:**
- Modify: `src/components/sections/ContactSection.tsx`

- [ ] **Step 1: Rebuild as centered CTA with visible contact details**

Replace MUI imports. Import `motion` from `framer-motion`. Import `Mail`, `Linkedin`, `Github`, `Phone` from `lucide-react`. Import `personalInfo` from `@/data/personal`. Import `SectionHeading`.

Structure — `<section id="contact">` with `scroll-mt-20 py-24 md:py-32 max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12`:
- `motion.div` with `whileInView` fade-up, `text-center max-w-xl mx-auto`
- Heading: `text-3xl font-bold tracking-tight mb-4` — "Let's Work Together"
- Subtitle: `text-[--color-text-secondary] mb-8` — intro text from personalInfo
- CTA button: `<a href="mailto:...">` styled as `inline-block bg-[--color-accent-primary] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity` — "Say Hello"
- Contact details below: `mt-10 space-y-3 text-left inline-block`
  - Each row: `flex items-center gap-3` with lucide icon (size 18, `text-[--color-text-secondary]`) + label + clickable link (`text-[--color-text-secondary] hover:text-[--color-accent-primary] transition-colors`)
  - Email: `Mail` icon + "yogesh.h.krishnani@gmail.com"
  - LinkedIn: `Linkedin` icon + "linkedin.com/in/yogeshkrishnani"
  - GitHub: `Github` icon + "github.com/yogeshkrishnani"
  - Phone: `Phone` icon + "+91 9898619162"

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/ContactSection.tsx
git commit -m "feat: rebuild ContactSection as centered CTA with recruiter-friendly details"
```

---

### Task 14: App.tsx + main.tsx Rebuild

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

- [ ] **Step 1: Rebuild App.tsx**

Remove all MUI imports (`MuiThemeProvider`, `CssBaseline`, `Box`, `Container`, `Toolbar`, `createAppTheme`). Remove the `useEffect` for background color (Tailwind handles this now).

```tsx
import { LazyMotion, domAnimation } from 'framer-motion';

import { BackToTop } from './components/common/BackToTop';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Footer } from './components/layout/Footer';
import { Navigation } from './components/layout/Navigation';
import { SectionsProvider } from './components/layout/Sections';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { IntroSection } from './components/sections/IntroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ThemeProvider } from './context/ThemeContext';

export const App = () => (
  <ThemeProvider>
    <LazyMotion features={domAnimation}>
      <SectionsProvider>
        <ScrollProgress />
        <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-[--color-bg-default]">
          <Navigation />
          <div className="h-16" /> {/* Spacer for fixed nav */}
          <main className="flex-grow">
            <IntroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </SectionsProvider>
    </LazyMotion>
  </ThemeProvider>
);
```

- [ ] **Step 2: Update main.tsx**

Change CSS import from `'./styles/globals.css'` to `'./index.css'`. Everything else stays (StrictMode, Analytics, createRoot).

```tsx
import { StrictMode } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';

import './index.css';

createRoot(window.document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);
```

- [ ] **Step 3: Verify full build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx src/main.tsx
git commit -m "feat: rebuild App.tsx with LazyMotion, remove MUI providers"
```

---

### Task 15: Cleanup + Final Verification

**Files:**
- Delete: `src/components/skills/` (if not already deleted in Task 11)
- Delete: `src/vite-env.d.ts` (only if unused — check first)
- Verify: no MUI imports remain anywhere

- [ ] **Step 1: Search for any remaining MUI imports**

```bash
grep -r "@mui" src/ || echo "No MUI imports found"
grep -r "@emotion" src/ || echo "No Emotion imports found"
grep -r "react-router" src/ || echo "No react-router imports found"
```

Expected: All three report "not found".

- [ ] **Step 2: Run full build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Run lint**

```bash
npm run lint
```

Fix any lint errors. Update eslint config if needed (remove MUI-specific rules if any).

- [ ] **Step 4: Run dev server and visually verify**

```bash
npm run dev
```

Manually check:
- All 6 sections render with correct content
- Light/dark mode toggle works
- Scroll animations fire once on entry
- Nav active indicator slides between sections
- Mobile drawer opens/closes
- Resume button opens PDF in new tab
- Back-to-top button appears on scroll
- Scroll progress bar at top works
- All contact details are visible and clickable
- Footer has social links + dynamic year

- [ ] **Step 5: Format code**

```bash
npm run format
```

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "chore: cleanup MUI remnants, lint fixes, final verification"
```

---

## Execution Notes

- Tasks 1-2 must be sequential (dependency swap before config).
- Task 3 (data files) has no dependency on Tasks 1-2 and can run in parallel.
- Tasks 4-7 (common components + layout) depend on Tasks 1-3.
- Tasks 8-13 (sections) depend on Tasks 3-4 and can run in parallel with each other.
- Task 14 (App.tsx) depends on all section tasks being complete.
- Task 15 (cleanup) is the final task.

**Recommended parallel batches:**
- Batch 1: Tasks 1-3 (deps + config + data)
- Batch 2: Tasks 4-7 (common + layout)
- Batch 3: Tasks 8-13 (all sections — can be parallelized across agents)
- Batch 4: Tasks 14-15 (app rebuild + cleanup)
