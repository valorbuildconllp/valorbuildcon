# Valor Buildcon Web Experience

Modern marketing site for Valor Buildcon LLP showcasing RCC work, RMC plant capabilities, highlight projects, testimonials, and contact workflows. Built with a focus on bold typography, looping hero video, animated sections, and reusable shadcn-ui components tailored for construction services.

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

## 🔐 CMS Authentication (Vercel)
Decap CMS uses GitHub OAuth via Vercel serverless functions in `api/`.

## 🖼️ Image Source (Supabase)
- Local `public/images` assets have been migrated out of the project.
- Image metadata lives in `public.image_assets` in Supabase.
- Actual binaries are hosted in Supabase Storage bucket `project-images`.
- Frontend image paths are resolved at runtime using the `image_assets.public_path` value.

### 1) Create a GitHub OAuth App
- Homepage URL: your site domain (e.g. https://valorbuildconllp.in)
- Authorization callback URL: https://your-domain.com/api/callback?provider=github

### 2) Configure Vercel Environment Variables
- `GITHUB_OAUTH_ID` = OAuth App Client ID
- `GITHUB_OAUTH_SECRET` = OAuth App Client Secret
- `CMS_REPO_PRIVATE` = `1` if the repo is private (optional)
- `CMS_AUTH_ORIGIN` = https://your-domain.com (optional, locks popup origin)

### 3) Ensure CMS config uses the correct domain
Update `base_url` in [public/admin/config.yml](public/admin/config.yml) to match your deployed domain.
