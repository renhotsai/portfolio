// src/app/projects/layout.tsx
import type { Metadata } from "next";
import { SITE_TITLE_TEMPLATE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: "Projects",
    template: SITE_TITLE_TEMPLATE,
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
