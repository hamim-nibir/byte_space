# ByteSpace

A responsive online-learning website built from a Figma design: a full landing page plus login and registration pages.

**Live demo:** [ByteSpace](https://byte-space-sandy-ten.vercel.app/)

## Tech stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/) for routing
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for form validation
- [Lucide](https://lucide.dev/) icons

## Features

- **Landing page:** hero, partner logos, filterable course grid, learning paths, growth and creator sections, testimonials, footer with newsletter form
- **Login and Register pages** sharing one `AuthLayout`, with validation and a show/hide password toggle
- Fully responsive (mobile, tablet, desktop)
- Accessible markup: semantic HTML, labelled inputs, keyboard focus states, ARIA where needed

## Getting started

Requires Node.js 20 or later.

```bash
git clone https://github.com/hamim-nibir/byte_space.git
cd byte_space
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  assets/       Images, icons, logos, fonts
  components/
    auth/       Auth layout, card, forms
    layout/     Navbar, Footer
    sections/   Landing page sections
    ui/         Reusable components (Button, Input, Badge, CourseCard, ...)
  data/         Typed content (courses, categories, testimonials, ...)
  lib/          Helpers (cn class merger)
  pages/        LandingPage, LoginPage, RegisterPage
  schemas/      Zod validation schemas
  services/     Mock auth service
  types/        Shared TypeScript types
```

## Design decisions

- **Reusable components:** UI pieces are small, typed, and accept a `className` that is merged with `tailwind-merge`.
- **Content separated from markup:** sections render typed arrays from `src/data`, so content can change without touching components.
- **Design tokens:** colors and fonts are defined once in `src/index.css` (`@theme`).
- **Fonts:** Satoshi for text and Clash Display for the logo, both self-hosted.

## Notes for reviewers

- Authentication is **mocked** (`src/services/auth.ts`). Nothing is stored or sent anywhere. A real backend would also need server-side validation, HTTPS, rate limiting, and secure session cookies.
- Form validation is client-side only (email format, password rules, length limits).
- Social login buttons, the newsletter form, and several footer links are placeholders.

## Deployment

Deployed on [Vercel](https://vercel.com/) with the Vite preset. `vercel.json` rewrites all routes to `index.html` so direct visits to `/login` and `/register` work:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```

## Git workflow

Each feature was built on its own branch (`feat/...`) and merged into `main` through a pull request.
