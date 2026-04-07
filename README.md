# Yogesh Krishnani - Portfolio

Personal portfolio website — [yogeshkrishnani.com](https://yogeshkrishnani.com)

## Tech Stack

- **React 19** + **TypeScript** — UI framework
- **Tailwind CSS v4** — styling via utility classes + CSS variables
- **Framer Motion** — scroll-linked animations, section reveals, nav indicator
- **Vite** — build tooling with `@tailwindcss/vite` plugin
- **Vercel** — hosting + analytics

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
npm run lint       # eslint
npm run format     # prettier
```

Requires Node >= 20.

## Project Structure

```
src/
├── data/           # Typed content (personal, experiences, projects, skills, navigation)
├── components/
│   ├── layout/     # Navigation, Footer, Sections provider
│   ├── sections/   # IntroSection, About, Experience, Skills, Projects, Contact
│   └── common/     # SectionHeading, ScrollProgress, BackToTop
├── context/        # ThemeContext (light/dark toggle)
├── utils/          # scrollUtils
├── App.tsx
├── main.tsx
└── index.css       # Tailwind base + theme variables + dark mode overrides
```

## Features

- Light/dark mode with system preference detection
- Letter-by-letter hero name reveal animation
- Vertical timeline (experience) with scroll-linked progress
- Responsive: mobile drawer nav with scroll lock, stacked layouts
- `prefers-reduced-motion` support across all animated components
- Inter font via Google Fonts

## Contact

- Email: yogesh.h.krishnani@gmail.com
- LinkedIn: [linkedin.com/in/yogeshkrishnani](https://linkedin.com/in/yogeshkrishnani)
- GitHub: [github.com/yogeshkrishnani](https://github.com/yogeshkrishnani)

---

© 2026 Yogesh Krishnani
