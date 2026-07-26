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
