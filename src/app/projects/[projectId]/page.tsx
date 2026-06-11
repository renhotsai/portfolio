import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import ProjectDetailClientPage from "./_ClientPage";

export async function generateMetadata(
  { params }: { params: Promise<{ projectId: string }> }
): Promise<Metadata> {
  const { projectId } = await params;
  const project = projectsData[projectId];
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.description };
}

export default function ProjectDetailPage() {
  return <ProjectDetailClientPage />;
}
