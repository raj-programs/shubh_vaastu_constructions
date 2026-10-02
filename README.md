# Shubh Vaastu Constructions

A polished, responsive website for **Shubh Vaastu Constructions**, built to present construction services, showcase completed work, and turn visitor interest into project enquiries.

The site pairs a fast React front end with Sanity CMS content so the team can add projects and testimonials without changing application code.

## What this project demonstrates

- A production-oriented React single-page application built with Vite
- Responsive, brand-led UI for a construction and real-estate audience
- Dynamic project gallery with category filters and individual project pages
- Sanity CMS integration for editable projects, galleries, and client testimonials
- Lead-generation flow through a validated enquiry form, EmailJS, and WhatsApp
- Lazy-loaded routes, image loading optimisations, scroll animations, sitemap generation, and Vercel Analytics
- SPA-friendly Vercel deployment configuration

## Key features

| Area | Included functionality |
| --- | --- |
| Home page | Hero, company story, services, featured projects, testimonials, and contact CTA |
| Project portfolio | Filterable gallery for residential, commercial, industrial, interior, and renovation work |
| Project detail pages | CMS-driven project name, description, location, main image, and image gallery |
| Content management | Sanity Studio schemas for projects and testimonials |
| Enquiries | Client-side validation, EmailJS submission, Indian phone-number input, and WhatsApp consultation links |
| Performance & UX | Lazy-loaded gallery routes, loading skeletons, responsive layouts, AOS scroll effects, and web fonts |

## Tech stack

- **Frontend:** React 19, Vite, React Router
- **CMS:** Sanity
- **Styling:** CSS by component/page, Fontsource fonts
- **Integrations:** EmailJS, WhatsApp, Vercel Analytics
- **UI utilities:** AOS, Swiper, React Icons, React Phone Number Input
- **Deployment:** Vercel

## Project structure

```text
frontend/
├── public/                 # Static files, sitemap, robots.txt, logo
├── scripts/                # Sitemap generator
├── src/
│   ├── assets/             # Brand and hero imagery
│   ├── components/         # Navigation, contact form, testimonials, skeleton UI
│   ├── pages/              # Home, projects, project-detail, and content sections
│   ├── sanity-setup/       # Sanity client configuration
│   ├── Util/               # Email, image URL, validation, and WhatsApp helpers
│   ├── App.jsx             # Route definitions and app-level setup
│   └── main.jsx            # React entry point
├── vercel.json             # SPA rewrite configuration for production
└── package.json
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Main marketing site with section navigation |
| `/projects-gallery` | Complete, filterable project portfolio |
| `/projects/:slug` | Detail page for a single Sanity project |

## Run locally

### Prerequisites

- Node.js 18 or later
- npm
- EmailJS credentials if you want contact-form submissions to work locally

### Installation

```bash
git clone <your-repository-url>
cd frontend
npm install
```

Create a `.env` file in `frontend/` for the contact-form integration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then start the development server:

```bash
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

## Available commands

```bash
npm run dev              # Start the local development server
npm run lint             # Run ESLint
npm run generate-sitemap # Rebuild public/sitemap.xml
npm run build            # Generate sitemap and create a production build
npm run preview          # Serve the production build locally
```

## Content management

The front end reads project and testimonial data from a Sanity dataset. The accompanying Studio lives at `../sanity/construction-cms` in this workspace.

```bash
cd ../sanity/construction-cms
npm install
npm run dev
```

The Studio provides these document types:

- **Projects:** name, slug, description, location, category, main image, and gallery
- **Testimonials:** client name, project name, location, review, and a 1–5 rating

The client connection is configured in `src/sanity-setup/sanity.js`. Anyone using a different Sanity project should update that configuration and ensure their dataset contains the same schema fields.

## Deployment notes

The application is configured for Vercel. The build command is `npm run build`, which regenerates the sitemap before producing the Vite build. `vercel.json` rewrites all paths to `index.html`, allowing direct visits to client-side routes such as `/projects/:slug`.

Set the three `VITE_EMAILJS_*` environment variables in the deployment provider for the enquiry form to send emails in production.

## Contributor notes

- Keep reusable UI in `src/components/` and page-level composition in `src/pages/`.
- Project categories in the gallery must match the values defined in the Sanity `project` schema.
- The repository intentionally ignores `.env` files; never commit EmailJS credentials.
- Run `npm run lint` and `npm run build` before opening a pull request.

## Author

Built as a complete web presence for **Shubh Vaastu Constructions**, combining brand storytelling, a manageable project portfolio, and enquiry-focused user journeys.
