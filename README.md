# Valor Buildcon Web Experience

Modern marketing site for Valor Buildcon LLP showcasing RCC work, RMC plant capabilities, highlight projects, testimonials, and contact workflows. Built with a focus on bold typography, looping hero video, animated sections, and reusable shadcn-ui components tailored for construction services.

## ✨ Highlights
- Immersive hero with background video, dual service callouts, and CTA bar.
- Detailed RCC and RMC service pages with capability grids, timelines, and contact CTAs.
- Component-driven layout (`Header`, `Footer`, `Layout`) plus rich home sections (services, projects, testimonials, contact form, map embed).
- GSAP-triggered scroll animations via `use-gsap-animations` hook for staggered reveals.
- Fully responsive design using Tailwind CSS, custom palettes, and shadcn-ui primitives.

## 🧱 Tech Stack
- React 18 + TypeScript
- Vite 5 (dev server & bundler)
- Tailwind CSS 3 with shadcn-ui component library
- React Router 6 (multi-page navigation)
- GSAP for scroll-triggered motion
- Lucide-react icon set
- React Hook Form + Zod for form handling/validation

## 📁 Project Structure
```
├── public/                # Static assets (logos, video)
├── src/
│   ├── assets/            # Hero photography, misc media
│   ├── components/
│   │   ├── layout/        # Header, Footer, Layout shell
│   │   ├── home/          # Home page sections (Hero, Services, etc.)
│   │   └── ui/            # shadcn-ui wrappers (Button, Card, etc.)
│   ├── hooks/             # Custom hooks (GSAP animation, mobile detection, toast)
│   ├── pages/             # Route-level pages (Home, About, Projects, RCC, RMC)
│   ├── lib/               # Utility helpers (e.g., `cn`)
│   └── App.tsx            # Router + layout wiring
└── vite.config.ts         # Vite + TS path aliases
```

## 🚀 Getting Started
### Prerequisites
- Node.js **18+** (recommend via [nvm](https://github.com/nvm-sh/nvm))
- npm (ships with Node)

### Installation & Development
```bash
git clone <REPO_URL>
cd valorbuildcon
npm install
npm run dev
```
The dev server prints a local URL (default http://localhost:5173). Vite offers instant HMR so edits under `src/` refresh automatically.

### Available Scripts
| Command           | Description |
|-------------------|-------------|
| `npm run dev`     | Start Vite dev server with HMR |
| `npm run build`   | Production build (`dist/`) |
| `npm run build:dev` | Development-mode bundle, handy for debugging hosted builds |
| `npm run preview` | Preview the `dist/` output locally |
| `npm run lint`    | ESLint check using the shared config |

## 🧩 Customization Tips
- **Branding:** Replace `public/valor_logo.png` and update brand colors via `tailwind.config.ts`.
- **Contact Info:** Update phone/email copy inside `src/components/layout/Header.tsx`, `Footer.tsx`, and `src/components/home/ContactSection.tsx` (plus schema block in `index.html`).
- **GSAP Animations:** Modify defaults in `src/hooks/use-gsap-animations.ts` to tune scroll timing or disable on mobile.
- **Content Blocks:** Each home section lives in its own file under `src/components/home/` for easy swapping or reordering.

## 📦 Deployment
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, S3, etc.).
3. For SSR or edge hosting, configure the adapter per platform documentation.

## 🤝 Collaboration
- Use feature branches + PRs for meaningful changes.
- Run `npm run lint` before opening a PR to catch style issues early.
- When editing shared components (buttons, layout), search for downstream references to avoid regressions.

## 📮 Support
For content or CMS updates, reach out to the Valor Buildcon team at **info@valorbuildcon.com** or **+91 88558 60707**. For technical issues, open a GitHub issue with steps to reproduce and environment details.
