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
