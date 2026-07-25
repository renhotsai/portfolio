# SEO Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give every route on `https://jeremy-tsai.site` its own accurate title, description, Open Graph/Twitter tags, and canonical URL; add a sitemap, robots.txt, and Person structured data — so the site is properly discoverable by recruiters searching for Jeremy Tsai.

**Architecture:** Every existing page component is a `"use client"` component, which cannot export Next.js `metadata`. The fix is additive: a thin server-only `layout.tsx` next to each `page.tsx` that needs its own metadata, exporting `metadata` (or `generateMetadata` for the dynamic project route) and rendering `{children}`. No existing page component is modified.

**Tech Stack:** Next.js 16 App Router (`MetadataRoute.Sitemap`, `MetadataRoute.Robots`, `generateMetadata`), TypeScript, macOS `sips` for image processing (no ImageMagick/sharp available in this environment).

## Global Constraints

- Site domain is `https://jeremy-tsai.site` (from the approved spec) — use this exact value everywhere a full URL is needed.
- Descriptions must be adapted from real, existing content in `src/data/*.ts` and existing page copy — never invented marketing copy (per spec scope).
- No changes to existing page components' behavior, JSX, or client-side logic — only new files or additive metadata exports.
- `npm install` has already been run in this checkout (node_modules now present) — do not re-run unless a task adds a new dependency (none do).
- **Known pre-existing issue, unrelated to this work:** `npm run build` fails with `Error: Missing API key` from `src/app/api/contact/route.ts` unless `RESEND_API_KEY` is set, because `new Resend(undefined)` throws during page-data collection. Every full-build verification command in this plan therefore sets a dummy value: `RESEND_API_KEY=re_dummy_key_for_build npm run build`. Do not attempt to fix the underlying Resend code — out of scope.

---

## File Structure

```
src/lib/site-config.ts              [NEW] Shared SITE_URL/SITE_NAME/SITE_TITLE/SITE_DESCRIPTION constants
public/og-image.jpg                 [NEW] 1200x630 site-wide Open Graph image (generated from existing headshot)
src/app/layout.tsx                  [MODIFY] metadataBase, title template, OG/Twitter defaults, Person JSON-LD
src/app/robots.ts                   [NEW] robots.txt generator
src/app/sitemap.ts                  [NEW] sitemap.xml generator (static routes + all projects)
src/app/about/layout.tsx            [NEW] metadata for /about
src/app/about/experience/layout.tsx [NEW] metadata for /about/experience
src/app/about/skills/layout.tsx     [NEW] metadata for /about/skills
src/app/about/education/layout.tsx  [NEW] metadata for /about/education
src/app/about/certificates/layout.tsx [NEW] metadata for /about/certificates
src/app/about/pipeline/layout.tsx   [NEW] metadata for /about/pipeline
src/app/projects/layout.tsx         [NEW] metadata for /projects
src/app/projects/[projectId]/layout.tsx [NEW] generateMetadata for each project, pulled from projectsData
src/app/contact/layout.tsx          [NEW] metadata for /contact
```

All new `layout.tsx` files follow the same shape: a `metadata` export (or `generateMetadata` function) plus a default export that renders `{children}` unchanged. None of them add any DOM wrapper elements — they exist purely to carry metadata.

---

### Task 1: Site config constants + Open Graph image asset

**Files:**
- Create: `src/lib/site-config.ts`
- Create: `public/og-image.jpg`

**Interfaces:**
- Produces: `SITE_URL: string`, `SITE_NAME: string`, `SITE_TITLE: string`, `SITE_DESCRIPTION: string` exported from `src/lib/site-config.ts`, imported by Tasks 2 and 3.
- Produces: `public/og-image.jpg`, a 1200×630 JPEG, referenced by Task 2's root layout metadata.

- [ ] **Step 1: Create the shared site config module**

```ts
// src/lib/site-config.ts
export const SITE_URL = "https://jeremy-tsai.site";
export const SITE_NAME = "Jeremy Tsai";
export const SITE_TITLE = "Jeremy Tsai – Full-Stack / Backend Engineer";
export const SITE_DESCRIPTION =
  "Full-Stack / Backend Engineer in the Greater Toronto Area with 3+ years building payment integrations, RESTful APIs, and cloud infrastructure on AWS and Azure.";
```

- [ ] **Step 2: Type-check the new file**

Run: `npx tsc --noEmit -p tsconfig.json`
Expected: no output, exit code 0 (no type errors).

- [ ] **Step 3: Generate the Open Graph image from the existing headshot**

The source photo (`public/Images/Jeremy-WFcyBsvIZyLUozH4k7MON7w2tFfIbj.jpg`) is a 3024×4032 portrait. Scale to width 1200 (preserves aspect, giving 1200×1600), then center-crop to 1200×630 — this keeps the full width and takes a vertically-centered horizontal band, which lands on the subject's face/shoulders in this specific photo (already visually verified during planning).

```bash
cp "public/Images/Jeremy-WFcyBsvIZyLUozH4k7MON7w2tFfIbj.jpg" "public/og-image.jpg"
sips --resampleWidth 1200 "public/og-image.jpg"
sips -c 630 1200 "public/og-image.jpg"
```

- [ ] **Step 4: Verify the generated image's dimensions and size**

Run: `sips -g pixelWidth -g pixelHeight public/og-image.jpg`
Expected:
```
  pixelWidth: 1200
  pixelHeight: 630
```

Run: `ls -la public/og-image.jpg`
Expected: file size well under 500KB (source was ~9MB; a 1200×630 JPEG crop should land around 150-250KB).

- [ ] **Step 5: Commit**

```bash
git add src/lib/site-config.ts public/og-image.jpg
git commit -m "Add site config constants and Open Graph image asset"
```

---

### Task 2: Root layout metadata foundation

**Files:**
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `SITE_URL`, `SITE_NAME`, `SITE_TITLE`, `SITE_DESCRIPTION` from `src/lib/site-config.ts` (Task 1); `public/og-image.jpg` (Task 1).
- Produces: root `metadata` export with `title.template: "%s | Jeremy Tsai"` — every later per-route `metadata.title` (Tasks 4-6) is a plain string that gets this suffix appended automatically by Next.js.

- [ ] **Step 1: Replace the root layout's metadata and add Person JSON-LD**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import { PageSkeleton } from "@/components/SkeletonFallback";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Jeremy Tsai",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE_NAME }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: "Full-Stack / Backend Engineer",
  url: SITE_URL,
  sameAs: [
    "https://github.com/renhotsai",
    "https://www.linkedin.com/in/renho-tsai/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased p-5",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <Suspense fallback={<PageSkeleton />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit -p tsconfig.json`
Expected: no output, exit code 0.

- [ ] **Step 3: Verify rendered head on the home page via the dev server**

```bash
npm run dev -- -p 4310 > /tmp/seo-task2.log 2>&1 &
SERVER_PID=$!
for i in $(seq 1 20); do
  curl -s -o /dev/null -w "%{http_code}" http://localhost:4310/ 2>/dev/null | grep -q 200 && break
  sleep 1
done
curl -s http://localhost:4310/ | grep -o '<title>[^<]*</title>'
curl -s http://localhost:4310/ | grep -o '"@type":"Person"'
curl -s http://localhost:4310/ | grep -o 'property="og:image" content="[^"]*"'
kill $SERVER_PID 2>/dev/null
wait $SERVER_PID 2>/dev/null
```

Expected output (three lines):
```
<title>Jeremy Tsai – Full-Stack / Backend Engineer</title>
"@type":"Person"
property="og:image" content="https://jeremy-tsai.site/og-image.jpg"
```

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx
git commit -m "Add metadataBase, title template, OG/Twitter defaults, and Person JSON-LD to root layout"
```

---

### Task 3: robots.txt and sitemap.xml

**Files:**
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`

**Interfaces:**
- Consumes: `SITE_URL` from `src/lib/site-config.ts` (Task 1); `projectsData` from `src/data/projects.ts` (existing, keys are project IDs used in `/projects/[projectId]`).
- Produces: `/robots.txt` and `/sitemap.xml` routes, no exports consumed by later tasks.

- [ ] **Step 1: Create robots.ts**

```ts
// src/app/robots.ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
```

- [ ] **Step 2: Create sitemap.ts**

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { projectsData } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/about/experience",
    "/about/skills",
    "/about/education",
    "/about/certificates",
    "/about/pipeline",
    "/projects",
    "/contact",
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes: MetadataRoute.Sitemap = Object.keys(projectsData).map(
    (projectId) => ({
      url: `${SITE_URL}/projects/${projectId}`,
      lastModified: new Date(),
    })
  );

  return [...staticRoutes, ...projectRoutes];
}
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit -p tsconfig.json`
Expected: no output, exit code 0.

- [ ] **Step 4: Verify robots.txt and sitemap.xml render correctly**

```bash
npm run dev -- -p 4310 > /tmp/seo-task3.log 2>&1 &
SERVER_PID=$!
for i in $(seq 1 20); do
  curl -s -o /dev/null -w "%{http_code}" http://localhost:4310/robots.txt 2>/dev/null | grep -q 200 && break
  sleep 1
done
curl -s http://localhost:4310/robots.txt
echo "---"
curl -s http://localhost:4310/sitemap.xml | grep -c "<url>"
curl -s http://localhost:4310/sitemap.xml | grep -o "https://jeremy-tsai.site/projects/trading-bot"
kill $SERVER_PID 2>/dev/null
wait $SERVER_PID 2>/dev/null
```

Expected output:
```
User-Agent: *
Allow: /

Sitemap: https://jeremy-tsai.site/sitemap.xml
---
20
https://jeremy-tsai.site/projects/trading-bot
```
(9 static routes + 11 project routes = 20 `<url>` entries. If `projectsData` gains or loses entries later, this count will differ — that's expected.)

- [ ] **Step 5: Commit**

```bash
git add src/app/robots.ts src/app/sitemap.ts
git commit -m "Add robots.txt and sitemap.xml generation"
```

---

### Task 4: About section per-route metadata

**Files:**
- Create: `src/app/about/layout.tsx`
- Create: `src/app/about/experience/layout.tsx`
- Create: `src/app/about/skills/layout.tsx`
- Create: `src/app/about/education/layout.tsx`
- Create: `src/app/about/certificates/layout.tsx`
- Create: `src/app/about/pipeline/layout.tsx`

**Interfaces:**
- Consumes: nothing from other tasks (static metadata only).
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Create src/app/about/layout.tsx**

```tsx
// src/app/about/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Jeremy Tsai — Full-Stack / Backend Engineer with 3+ years of professional experience in payment integrations, banking applications, and RESTful APIs, cloud-certified in AWS and Azure.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 2: Create src/app/about/experience/layout.tsx**

```tsx
// src/app/about/experience/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Backend Engineer at Collaborate Technology building payment system APIs in C# and MSSQL, plus experience at Harmonation Inc. on banking applications.",
  alternates: {
    canonical: "/about/experience",
  },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 3: Create src/app/about/skills/layout.tsx**

```tsx
// src/app/about/skills/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills: TypeScript, Node.js, Next.js, React, C#, MSSQL, PostgreSQL, AWS, Docker, and AI-assisted development with Claude Code.",
  alternates: {
    canonical: "/about/skills",
  },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 4: Create src/app/about/education/layout.tsx**

```tsx
// src/app/about/education/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Ontario College Graduate Certificates in Cloud Computing Technologies and Mobile Application Development from George Brown College, plus a Bachelor's in Information Technology.",
  alternates: {
    canonical: "/about/education",
  },
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 5: Create src/app/about/certificates/layout.tsx**

```tsx
// src/app/about/certificates/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Cloud Computing Technologies and Mobile Application Development and Strategy certificates from George Brown College (Ontario College Graduate Certificate).",
  alternates: {
    canonical: "/about/certificates",
  },
};

export default function CertificatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 6: Create src/app/about/pipeline/layout.tsx**

```tsx
// src/app/about/pipeline/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipeline",
  description:
    "Full timeline of Jeremy Tsai's work experience and education, from military service through backend engineering roles to cloud computing certification.",
  alternates: {
    canonical: "/about/pipeline",
  },
};

export default function PipelineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 7: Type-check**

Run: `npx tsc --noEmit -p tsconfig.json`
Expected: no output, exit code 0.

- [ ] **Step 8: Verify each route's rendered title and canonical tag**

```bash
npm run dev -- -p 4310 > /tmp/seo-task4.log 2>&1 &
SERVER_PID=$!
for i in $(seq 1 20); do
  curl -s -o /dev/null -w "%{http_code}" http://localhost:4310/about 2>/dev/null | grep -q 200 && break
  sleep 1
done
for route in about about/experience about/skills about/education about/certificates about/pipeline; do
  echo "=== /$route ==="
  curl -s "http://localhost:4310/$route" | grep -o '<title>[^<]*</title>'
  curl -s "http://localhost:4310/$route" | grep -o 'rel="canonical" href="[^"]*"'
done
kill $SERVER_PID 2>/dev/null
wait $SERVER_PID 2>/dev/null
```

Expected output (6 sections, one per route), e.g.:
```
=== /about ===
<title>About | Jeremy Tsai</title>
rel="canonical" href="https://jeremy-tsai.site/about"
=== /about/experience ===
<title>Work Experience | Jeremy Tsai</title>
rel="canonical" href="https://jeremy-tsai.site/about/experience"
=== /about/skills ===
<title>Skills | Jeremy Tsai</title>
rel="canonical" href="https://jeremy-tsai.site/about/skills"
=== /about/education ===
<title>Education | Jeremy Tsai</title>
rel="canonical" href="https://jeremy-tsai.site/about/education"
=== /about/certificates ===
<title>Certificates | Jeremy Tsai</title>
rel="canonical" href="https://jeremy-tsai.site/about/certificates"
=== /about/pipeline ===
<title>Pipeline | Jeremy Tsai</title>
rel="canonical" href="https://jeremy-tsai.site/about/pipeline"
```

- [ ] **Step 9: Commit**

```bash
git add src/app/about/layout.tsx src/app/about/experience/layout.tsx src/app/about/skills/layout.tsx src/app/about/education/layout.tsx src/app/about/certificates/layout.tsx src/app/about/pipeline/layout.tsx
git commit -m "Add per-route metadata for /about and its subpages"
```

---

### Task 5: Projects section metadata (static + dynamic)

**Files:**
- Create: `src/app/projects/layout.tsx`
- Create: `src/app/projects/[projectId]/layout.tsx`

**Interfaces:**
- Consumes: `projectsData: Record<string, ProjectDetail>` from `src/data/projects.ts` (existing), specifically each project's `title: string`, `description: string`, `imageUrl: string`, `id: string` fields.
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Create src/app/projects/layout.tsx**

```tsx
// src/app/projects/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Projects",
    template: "%s | Jeremy Tsai",
  },
  description:
    "A showcase of full-stack and backend projects by Jeremy Tsai, including a serverless algorithmic trading system, mobile apps, and RESTful API integrations.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 2: Create src/app/projects/[projectId]/layout.tsx**

```tsx
// src/app/projects/[projectId]/layout.tsx
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> {
  const { projectId } = await params;
  const project = projectsData[projectId];

  if (!project) {
    return {
      title: "Project Not Found",
      description: "This project could not be found.",
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.imageUrl],
    },
  };
}

export default function ProjectDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit -p tsconfig.json`
Expected: no output, exit code 0.

- [ ] **Step 4: Verify /projects and one project detail route**

```bash
npm run dev -- -p 4310 > /tmp/seo-task5.log 2>&1 &
SERVER_PID=$!
for i in $(seq 1 20); do
  curl -s -o /dev/null -w "%{http_code}" http://localhost:4310/projects 2>/dev/null | grep -q 200 && break
  sleep 1
done
echo "=== /projects ==="
curl -s http://localhost:4310/projects | grep -o '<title>[^<]*</title>'
echo "=== /projects/trading-bot ==="
curl -s http://localhost:4310/projects/trading-bot | grep -o '<title>[^<]*</title>'
curl -s http://localhost:4310/projects/trading-bot | grep -o 'rel="canonical" href="[^"]*"'
echo "=== /projects/does-not-exist ==="
curl -s http://localhost:4310/projects/does-not-exist | grep -o '<title>[^<]*</title>'
kill $SERVER_PID 2>/dev/null
wait $SERVER_PID 2>/dev/null
```

Expected output:
```
=== /projects ===
<title>Projects | Jeremy Tsai</title>
=== /projects/trading-bot ===
<title>TradingBot - Automated Multi-Strategy Trading System | Jeremy Tsai</title>
rel="canonical" href="https://jeremy-tsai.site/projects/trading-bot"
=== /projects/does-not-exist ===
<title>Project Not Found | Jeremy Tsai</title>
```

- [ ] **Step 5: Commit**

```bash
git add src/app/projects/layout.tsx "src/app/projects/[projectId]/layout.tsx"
git commit -m "Add per-project metadata to /projects and /projects/[projectId]"
```

---

### Task 6: Contact section metadata

**Files:**
- Create: `src/app/contact/layout.tsx`

**Interfaces:**
- Consumes: nothing from other tasks (static metadata only).
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Create src/app/contact/layout.tsx**

```tsx
// src/app/contact/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jeremy Tsai — Full-Stack / Backend Engineer based in the Greater Toronto Area, available for new opportunities.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit -p tsconfig.json`
Expected: no output, exit code 0.

- [ ] **Step 3: Verify rendered title and canonical tag**

```bash
npm run dev -- -p 4310 > /tmp/seo-task6.log 2>&1 &
SERVER_PID=$!
for i in $(seq 1 20); do
  curl -s -o /dev/null -w "%{http_code}" http://localhost:4310/contact 2>/dev/null | grep -q 200 && break
  sleep 1
done
curl -s http://localhost:4310/contact | grep -o '<title>[^<]*</title>'
curl -s http://localhost:4310/contact | grep -o 'rel="canonical" href="[^"]*"'
kill $SERVER_PID 2>/dev/null
wait $SERVER_PID 2>/dev/null
```

Expected output:
```
<title>Contact | Jeremy Tsai</title>
rel="canonical" href="https://jeremy-tsai.site/contact"
```

- [ ] **Step 4: Commit**

```bash
git add src/app/contact/layout.tsx
git commit -m "Add per-route metadata for /contact"
```

---

### Task 7: Full-site production build verification

**Files:** none (verification only, no new files).

**Interfaces:**
- Consumes: everything from Tasks 1-6.
- Produces: nothing (this is the final gate confirming the whole feature works together in a production build).

- [ ] **Step 1: Run a full production build**

Run: `RESEND_API_KEY=re_dummy_key_for_build npm run build`
Expected: ends with `✓ Compiled successfully` and a route table listing all of `/`, `/about`, `/about/certificates`, `/about/education`, `/about/experience`, `/about/pipeline`, `/about/skills`, `/contact`, `/projects`, `/projects/[projectId]` with no errors.

- [ ] **Step 2: Start the production server and confirm unique titles across all routes**

```bash
RESEND_API_KEY=re_dummy_key_for_build npm run start -- -p 4310 > /tmp/seo-task7.log 2>&1 &
SERVER_PID=$!
for i in $(seq 1 20); do
  curl -s -o /dev/null -w "%{http_code}" http://localhost:4310/ 2>/dev/null | grep -q 200 && break
  sleep 1
done
for route in "" about about/experience about/skills about/education about/certificates about/pipeline projects projects/trading-bot contact; do
  title=$(curl -s "http://localhost:4310/$route" | grep -o '<title>[^<]*</title>')
  echo "/$route -> $title"
done
kill $SERVER_PID 2>/dev/null
wait $SERVER_PID 2>/dev/null
```

Expected: 10 lines, each with a **different** title (the home page title has no ` | Jeremy Tsai` suffix since it's the template's `default`; every other route's title ends in ` | Jeremy Tsai`). No two lines should show the same title text — if any two match, one of the Task 2-6 layout files is missing or mistyped.

- [ ] **Step 3: Confirm sitemap.xml and robots.txt still work under production build**

```bash
RESEND_API_KEY=re_dummy_key_for_build npm run start -- -p 4310 > /tmp/seo-task7b.log 2>&1 &
SERVER_PID=$!
for i in $(seq 1 20); do
  curl -s -o /dev/null -w "%{http_code}" http://localhost:4310/sitemap.xml 2>/dev/null | grep -q 200 && break
  sleep 1
done
curl -s http://localhost:4310/sitemap.xml | grep -c "<url>"
curl -s http://localhost:4310/robots.txt
kill $SERVER_PID 2>/dev/null
wait $SERVER_PID 2>/dev/null
```

Expected: `20` (9 static + 11 project routes), followed by the same robots.txt output as Task 3 Step 4.

- [ ] **Step 4: Note manual post-deploy check (not automatable locally)**

No command to run here — record for the user: after deploying, paste `https://jeremy-tsai.site` and a project URL into a social preview debugger (e.g. LinkedIn Post Inspector) to confirm the Open Graph image and description render correctly. OG crawlers require a publicly reachable URL, so this cannot be verified from localhost.

- [ ] **Step 5: Final commit (only if any fixes were needed in Steps 1-3)**

If Steps 1-3 passed with no code changes, there is nothing to commit — this task is verification-only. If a title collision or build error was found and fixed, commit that fix:

```bash
git add -A
git commit -m "Fix SEO metadata issue found in full-site verification"
```

---

## Self-Review Notes

- **Spec coverage:** per-route metadata (Tasks 4-6), sitemap/robots (Task 3), JSON-LD (Task 2), canonical URLs (Tasks 2, 4-6), OG image (Task 1) — all spec sections have a task. Verification section of the spec is covered by Task 7 plus the per-task checks.
- **Type consistency:** `SITE_URL`/`SITE_NAME`/`SITE_TITLE`/`SITE_DESCRIPTION` (Task 1) are consumed with identical names in Tasks 2 and 3. `projectsData` field names (`title`, `description`, `imageUrl`, `id`) match the existing `ProjectDetail` interface in `src/data/projects.ts` exactly — verified against the real file, not assumed.
- **No placeholders:** every metadata description is real, concrete text grounded in existing `src/data/*.ts` content or existing page copy, not a TBD.
