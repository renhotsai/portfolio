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
