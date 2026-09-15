# Atland Oaks Website

Marketing website for Atland Oaks LLC, an AI and technology consultancy. Version 1 of the
site: eight pages (Home, Services, Solutions, About, Insights, Contact, Privacy, Terms)
built as a static, client-rendered single-page app.

## Technology Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for tooling and bundling
- [React Router](https://reactrouter.com/) for client-side routing
- Plain CSS (custom properties for theming, no UI framework)

No backend, no database, no state management library — the site is fully static.

## Local Development

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

This starts a local dev server (default: http://localhost:5173) with hot module reloading.

## Production Build

```bash
npm run build
```

Type-checks the project (`tsc -b`) and outputs a static production build to `dist/`.

Use `npm run preview` to serve the production build locally for a final check.

## Configuration

Site-wide settings live in one place: `src/config/site.ts`.

```ts
export const siteConfig = {
  companyName: "Atland Oaks",
  legalName: "Atland Oaks LLC",
  domain: "atlandoaks.com",
  bookingUrl: "", // e.g. a Google Calendar booking link
  email: "",
}
```

- **`bookingUrl`** — every "Book a Consultation" button/link on the site reads from this
  single value (see `src/components/BookConsultationButton.tsx`). Until it's set, those
  buttons link to the Contact page instead of a dead URL. Set it once here and every
  instance across the site updates.
- **`email`** — shown as placeholder contact info on the Contact, Privacy, and Terms pages
  until set.

The contact form (`src/components/ContactForm.tsx`) currently only validates and logs
submissions to the console — no backend is wired up yet. Its submit handler is abstracted
(`src/lib/contactSubmission.ts`) so a real integration (Formspree, a DigitalOcean serverless
function, a custom API, etc.) can be dropped in later without touching the form UI.

## Deployment

This project is prepared for static-site deployment to
[DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform), but has not
been deployed.

- **Build command:** `npm run build`
- **Output directory:** `dist`

No DNS, domain, or hosting has been configured or purchased for `atlandoaks.com`.

## Project Structure

```
src/
  components/   Reusable UI: Header, Footer, Layout, Button, Section, ServiceCard,
                SolutionCard, CTA, ContactForm, BookConsultationButton
  pages/        One file per route (Home, Services, Solutions, About, Insights,
                Contact, Privacy, Terms, NotFound)
  config/       site.ts — single source of truth for company name, domain,
                booking URL, and contact email
  hooks/        usePageMeta — sets per-page <title> and meta description
  lib/          contactSubmission.ts — abstracted, backend-agnostic form submit handler
  styles/       global.css — CSS custom properties and base styles
public/         robots.txt, sitemap.xml, favicon
```

## Legal Pages

The Privacy Policy and Terms of Use pages (`src/pages/Privacy.tsx`, `src/pages/Terms.tsx`)
contain placeholder text only, flagged with a source comment. Both should be reviewed and
replaced with formal legal language by counsel before this site is used in production.
