# SEO Improvements — Design Spec

**Date:** 2026-07-25
**Status:** Approved, pending implementation plan

## Problem

The site currently has a single, generic `<title>`/description (set once in `src/app/layout.tsx`) shared across every route. There is no sitemap, no `robots.txt`, no Open Graph/Twitter card tags, no structured data, and no canonical domain configured. As a result, every page — home, about, projects, contact, and each project detail page — looks identical to search engines and to social link previews.

The primary goal is discoverability by **recruiters and hiring managers**: ranking for "Jeremy Tsai" + role/skill searches, and having a clean, informative preview when a link to the site is shared or clicked from search results.

Live domain: `https://jeremy-tsai.site`

## Scope

**In scope:** technical SEO only — per-page metadata, Open Graph/Twitter tags, sitemap, robots.txt, structured data (JSON-LD), canonical URLs, and a static Open Graph image.

**Out of scope for this round:**
- Content/copy rewrites for keyword optimization (descriptions are adapted from existing content, not newly written marketing copy)
- Google Search Console verification/submission (account-level, done post-deploy by Jeremy)
- Analytics/tracking changes

## Architectural Constraint

Every existing page component (`src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/projects/page.tsx`, `src/app/contact/page.tsx`, and all `about/*` subpages) is a **Client Component** (`"use client"`). Next.js's `metadata` export (and `generateMetadata`) only works in Server Components, so none of these pages can currently declare their own metadata — everything falls back to the single root layout default.

**Solution:** add a thin, server-only `layout.tsx` next to each existing `page.tsx` that needs distinct metadata. Each new layout's only job is to export `metadata` (or `generateMetadata` for the dynamic project route) and render `{children}`. This requires zero changes to existing page components — it's a pure addition, no risk of breaking existing client-side behavior (state, interactivity, hooks).

## Per-Route Metadata

Root layout (`src/app/layout.tsx`) becomes the site-wide default and defines a title template so child pages only need to set their own short title:

```ts
title: {
  default: "Jeremy Tsai – Full-Stack / Backend Engineer",
  template: "%s | Jeremy Tsai",
}
```

New `layout.tsx` files, one per route, each exporting `metadata` with a page-specific `title` and `description` adapted from that page's existing content:

| Route | New file | Title | Description source |
|---|---|---|---|
| `/about` | `src/app/about/layout.tsx` | "About" | About/bio summary |
| `/about/experience` | `src/app/about/experience/layout.tsx` | "Work Experience" | `src/data/experiences.ts` |
| `/about/skills` | `src/app/about/skills/layout.tsx` | "Skills" | `src/data/skills.ts` |
| `/about/education` | `src/app/about/education/layout.tsx` | "Education" | `src/data/education.ts` |
| `/about/certificates` | `src/app/about/certificates/layout.tsx` | "Certificates" | `src/data/certificates.ts` |
| `/about/pipeline` | `src/app/about/pipeline/layout.tsx` | "Pipeline" | `src/data/pipeline.ts` |
| `/projects` | `src/app/projects/layout.tsx` | "Projects" | Static summary of the project showcase |
| `/projects/[projectId]` | `src/app/projects/[projectId]/layout.tsx` | project's own title | `generateMetadata({ params })` pulling `title`, `description`, `imageUrl` from `projectsData` in `src/data/projects.ts`; falls back gracefully if `projectId` isn't found |
| `/contact` | `src/app/contact/layout.tsx` | "Contact" | Static summary |

Each layout's metadata also sets `alternates.canonical` to its own path and `openGraph`/`twitter` title+description (inherits the site-wide OG image, except project pages which use their own `imageUrl`).

## Site-Wide Technical SEO

- **`metadataBase`**: `new URL("https://jeremy-tsai.site")` in root layout metadata, so relative OG/canonical URLs resolve correctly.
- **`src/app/robots.ts`**: new file, allows all crawlers, references the sitemap.
- **`src/app/sitemap.ts`**: new file, lists all static routes above plus one entry per project pulled dynamically from `projectsData`, each with a `lastModified` date.
- **JSON-LD structured data**: a `Person` schema (`name`, `jobTitle`, `url`, `sameAs`: `https://github.com/renhotsai`, `https://www.linkedin.com/in/renho-tsai/`) injected via `<script type="application/ld+json">` in the root layout.
- **Open Graph image**: crop/resize the existing headshot (`public/Images/Jeremy-....jpg`, currently ~9MB) down to a proper `public/og-image.jpg` at 1200×630, used as the site-wide default `openGraph.images`. Project detail pages override this with their own project image.
- **Favicon**: already present (`src/app/favicon.ico`) — no change.

## Verification

- `npm run build` succeeds — confirms no Server/Client Component conflicts from the new layout files.
- Manually inspect rendered `<head>` (view-source or devtools) for each route — confirm unique title/description per page and correct canonical URL.
- Load `/sitemap.xml` and `/robots.txt` directly in the browser — confirm valid output listing all routes.
- Post-deploy: spot-check Open Graph rendering using a social preview debugger (e.g. LinkedIn Post Inspector) — this requires the live URL to be crawlable, so full OG validation happens after shipping, not locally.
