import type { Metadata } from "next";
import ProjectsClientPage from "./_ClientPage";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Jeremy Tsai's projects: Fly Panner (Next.js + PostgreSQL), Ace My Career (AWS ECS + Lambda), BOS Stock Tracker (Claude AI integration), and more.",
};

export default function ProjectsPage() {
  return <ProjectsClientPage />;
}
