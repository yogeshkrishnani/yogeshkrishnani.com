# Portfolio Redesign — Editorial + Tailwind Full Rebuild

## Overview

Full rebuild of yogeshkrishnani.com portfolio from MUI to Tailwind CSS v4 with an editorial aesthetic. Clean typography, generous whitespace, moderate Framer Motion animations, light/dark mode. The site should feel like a well-designed magazine — confident, readable, and fast.

## Goals

1. **Stand out to recruiters/hiring managers** — scannable, clear career narrative, immediate impact stats
2. **Showcase technical craft** — the portfolio itself demonstrates frontend skill through thoughtful animations and polish
3. **Personal brand** — position as a full-stack + AI-native senior engineer

## Tech Stack Changes

### Remove
- `@mui/material`
- `@mui/icons-material`
- `@emotion/react`
- `@emotion/styled`

### Add
- `tailwindcss` + `@tailwindcss/vite` (Tailwind v4)
- `lucide-react` (icon library)

### Remove (also)
- `react-router-dom` (unused — site is single-page scroll with no routing)

### Keep
- `framer-motion` (animations)
- `react` + `react-dom` (React 19)
- `@vercel/analytics` (included in `main.tsx` as `<Analytics />` alongside `<App />`)
- `vite` + `typescript` + `eslint` + `prettier`

## Color Palette (Preserved from current site)

### Light Mode
- Background: `#f5f5f5`
- Paper/Card: `#ffffff`
- Text primary: `#222222`
- Text secondary: `#555555`
- Primary accent: `#007acc`
- Secondary accent: `#6d28d9`
- Divider: `rgba(0, 0, 0, 0.1)`

### Dark Mode
- Background: `#121212`
- Paper/Card: `#1e1e1e`
- Text primary: `#e0e0e0`
- Text secondary: `#a0a0a0`
- Primary accent: `#4dabf5`
- Secondary accent: `#9d71ea`
- Divider: `rgba(255, 255, 255, 0.1)`

## Typography

- **Headings:** Inter (self-hosted via `@fontsource/inter` for performance, or Google Fonts with `font-display: swap` + preconnect)
- **Body:** System sans-serif stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)
- **Monospace (logo + code accents):** `"JetBrains Mono", "Fira Code", "SF Mono", monospace`
- **Scale:** Large headings (48-64px hero name), generous line-height (1.7-1.8 body)
- **Letter spacing:** Tight on headings (`-0.02em`), default on body

## Spacing

- Between sections: 120-160px vertical padding
- Internal section padding: 32-48px
- Content max-width: 1200px, centered
- Responsive horizontal padding: 16px (mobile) → 32px (tablet) → 48px (desktop)

## Data Architecture

Extract all hardcoded content into `src/data/` files:

- `src/data/personal.ts` — name, tagline, bio, quick facts, contact info (email, LinkedIn, GitHub, phone), resumeUrl
- `src/data/experiences.ts` — job entries (company, role, dates, bullets)
- `src/data/projects.ts` — project entries (title, description, impact, tech, link) and section intro text
- `src/data/skills.ts` — skill categories, items, and section intro text
- `src/data/navigation.ts` — nav link definitions

Each file exports typed arrays/objects. All components import from these files instead of hardcoding content.

## Sections

### 1. Navigation (Sticky Top)

- Fixed top bar, full-width
- Logo `<YK/>` (monospace) left, nav links right: About, Experience, Skills, Projects, Contact
- Theme toggle icon (sun/moon from lucide-react) + "Resume" outlined button
- Transparent at page top, gains `backdrop-filter: blur(10px)` + thin bottom border on scroll
- Active section indicator: underline that slides between links via Framer Motion `layoutId`
- "Resume" button opens `/Yogesh_Krishnani_Resume.pdf` in new tab (`target="_blank"`)
- Mobile: hamburger → slide-in drawer from right with same links + toggle + resume
- All section containers include `scroll-mt-20` (80px) to offset for the fixed nav bar height

### 2. Hero / Intro (Split Layout)

- **Left side (~55%):**
  - Small label: "Hi, I'm" (text-secondary, uppercase, letterspaced)
  - Name: massive bold (48-64px): "Yogesh Krishnani"
  - Tagline: "I build software for the agentic era" (24-28px, text-secondary)
  - One-liner bio (14-16px, text-secondary)
  - Two CTAs: "Get In Touch" (filled primary button) + "View Resume" (outlined button)
- **Right side (~45%):**
  - Circular profile avatar (`/yk_avatar.png`, 80-96px) with subtle border/shadow, positioned above the code editor visual.
  - Below avatar: a minimal card styled like a code editor window (title bar with 3 dots, dark background regardless of theme). Inside, a few lines of styled text representing code-like content with syntax-colored keywords from the tech stack (React, TypeScript, Python, Go). A CSS `@keyframes` blinking cursor gives a subtle "typing" feel. No actual code execution — purely decorative.
- **Animation:** Left side staggers in (fade-up, 0.2s incremental delays). Right side fades in after (0.4s delay).
- **Mobile:** Stacks vertically — text on top, visual element below (or hidden on very small screens).

### 3. About (Two Column)

- **Left (~60%):** Section heading "About Me" with accent underline bar (50px wide, 3px, primary color). Narrative paragraphs with generous line-height.
- **Right (~40%):** Quick Facts card with subtle border, rounded corners. Lists: location, experience years, tech stack, AI tools, role, education.
- **Animation:** Heading + underline fade-up, paragraphs stagger in, Quick Facts card slides in from right. All `whileInView`, `once: true`.
- **Mobile:** Stacks — narrative on top, Quick Facts card below.

### 4. Experience (Vertical Timeline)

- Section heading "Experience" with accent underline bar
- Reverse chronological: Alation (current) → Infor → Streebo
- Vertical line on the left (2px, border color), dots at each entry
  - Current role dot: primary accent color
  - Past role dots: gray
- Each entry: role title (bold) + "@ Company" (primary color) + date range (right-aligned, muted). Bullet points below.
- **Animation:** Timeline line draws downward on scroll via Framer Motion. Dots pulse in. Entry content fades up as each comes into view.
- **Mobile:** Same layout, slightly less left padding. Dates move below role title instead of right-aligned.

### 5. Skills (Grouped Tags — 3x2 Grid)

- Section heading "Skills" with accent underline bar
- Intro text below heading (from `skills.ts`)
- 6 categories in a 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Each category: bold category name + flex-wrap container of pill-shaped tags
- Tags: rounded-full, subtle background (`#f0f0f0` light / `rgba(255,255,255,0.08)` dark), small text
- **Animation:** Categories stagger in on scroll. Tags within each category stagger-animate (fast, 0.05s delay per tag).

### 6. Projects (Hover Card Grid)

- Section heading "Projects" with accent underline bar
- Intro text below heading (from `projects.ts`)
- 2-column grid (desktop), 1-column (mobile). Scales naturally to 6+ projects.
- Each card: border, rounded-xl, padding. Contains:
  - Project title (bold) + impact badge (pill, primary/secondary bg, white text)
  - Description paragraph
  - Tech tags (small, accent-tinted background)
  - External link icon (top-right corner)
- **Hover:** `y: -4`, increased `boxShadow`, border color shifts to primary. Via Framer Motion `whileHover`.
- **Animation:** Cards stagger in on scroll entry.

### 7. Contact (Centered CTA)

- Centered layout (intentional contrast from left-aligned sections above — acts as visual full-stop)
- Bold heading: "Let's Work Together" (28-32px)
- One-liner subtitle
- Primary CTA button: "Say Hello" (links to mailto)
- Structured contact details below the CTA — each as visible text with icon, recruiter-friendly (copyable):
  - Email: yogesh.h.krishnani@gmail.com
  - LinkedIn: linkedin.com/in/yogeshkrishnani
  - GitHub: github.com/yogeshkrishnani
  - Phone: +91 9898619162
- Each line: lucide icon + label + clickable link. Muted color, hover to primary.
- **Animation:** Fade-up on scroll entry.

### 8. Footer

- Centered layout. Small, muted text.
- Social icon links: GitHub, LinkedIn, Email (lucide-react icons, muted, hover to primary)
- Attribution: "Built by Yogesh Krishnani"
- Copyright: "© {currentYear} Yogesh Krishnani. All rights reserved." (year rendered dynamically via `new Date().getFullYear()`)

## Animations (Framer Motion — Moderate)

### Global
- **Scroll progress bar:** Thin line (2-3px) at very top of viewport, primary color, width maps to `scrollYProgress` via `useScroll`.

### Per-element
| Element | Trigger | Animation | Performance |
|---|---|---|---|
| Hero left content | Page load | Staggered fade-up (0.2s delays) | GPU: opacity + translateY |
| Hero right visual | Page load | Fade-in (0.4s delay) + subtle loop | GPU: opacity + translateY |
| Section headings | `whileInView` (once) | Fade-up | GPU: opacity + translateY |
| About paragraphs | `whileInView` (once) | Stagger fade-up | GPU: opacity + translateY |
| Quick Facts card | `whileInView` (once) | Slide-in from right | GPU: opacity + translateX |
| Timeline line | Scroll-linked | Draw downward via `scaleY` | GPU: transform |
| Timeline entries | `whileInView` (once) | Fade-up per entry | GPU: opacity + translateY |
| Skill categories | `whileInView` (once) | Stagger per category | GPU: opacity + translateY |
| Skill tags | `whileInView` (once) | Stagger within category (0.05s) | GPU: opacity + translateY |
| Project cards | `whileInView` (once) | Stagger fade-up | GPU: opacity + translateY |
| Project cards | `whileHover` | Lift + shadow | GPU: translateY + boxShadow |
| Hero visual | Scroll-linked | Subtle parallax via `useTransform` | GPU: translateY |
| Nav active indicator | Section change | `layoutId` slide | GPU: layout animation |
| Contact section | `whileInView` (once) | Fade-up | GPU: opacity + translateY |

### Performance Rules
- Only animate `transform` and `opacity` for scroll-triggered animations (GPU-composited, no layout repaints). Exception: `boxShadow` is allowed on hover-only interactions (not scroll-linked) as the paint cost is negligible for single elements.
- Use `LazyMotion` + `domAnimation` for code-splitting animation features
- `viewport: { once: true }` on all scroll-triggered animations (no re-triggers)
- `viewport: { margin: "-100px" }` for early trigger (content visible before animation starts)
- Use `MotionValue` and `useTransform` for scroll-linked animations to avoid React re-renders
- No CSS variable animations
- Hero code editor animation: CSS-only typing effect or lightweight Framer Motion loop — no heavy JS intervals
- Respect `prefers-reduced-motion`: use Framer Motion's `useReducedMotion` hook to disable or minimize all animations when user prefers reduced motion

## Responsive Breakpoints

Using Tailwind's defaults:
- `sm`: 640px (large phone)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (wide desktop)

Key responsive changes:
- Nav: hamburger menu below `md`
- Hero: split → stacked below `md`
- About: two-column → stacked below `md`
- Skills: 3-col → 2-col at `md`, 1-col below `sm`
- Projects: 2-col → 1-col below `md`
- Experience dates: inline (right) on desktop, below title on mobile
- Section padding: reduces at each breakpoint

## Dark Mode

- Implemented via Tailwind's `dark:` variant with class strategy
- Theme state managed in `src/context/ThemeContext.tsx` (preserved from current)
- Persisted to `localStorage` (preserved from current)
- Falls back to `prefers-color-scheme` system preference (preserved from current)
- ThemeContext must add/remove `dark` class on `document.documentElement` when mode changes (in addition to storing state). This replaces the MUI ThemeProvider integration.

## File Structure (After Rebuild)

```
src/
├── data/
│   ├── personal.ts
│   ├── experiences.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── navigation.ts
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── Sections.tsx (SectionsProvider + scroll tracking)
│   ├── sections/
│   │   ├── IntroSection.tsx (hero split layout)
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx (vertical timeline)
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx (hover card grid)
│   │   └── ContactSection.tsx (centered CTA)
│   └── common/
│       ├── BackToTop.tsx
│       ├── ScrollProgress.tsx (new — top progress bar)
│       └── SectionHeading.tsx (new — reusable heading + underline)
├── context/
│   └── ThemeContext.tsx
├── utils/
│   └── scrollUtils.ts
├── App.tsx
├── main.tsx
└── index.css (Tailwind base + custom styles)
```

## Out of Scope

- No CMS or external data source — static data files are sufficient
- No blog section
- No 3D/WebGL effects
- No contact form (mailto CTA is sufficient)
- No page routing — remains single-page scroll
