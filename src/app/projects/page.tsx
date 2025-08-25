"use client";

import ProjectCard from "@/components/ProjectCard";
import MotionWrap from "@/components/MotionWrap";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { sampleProjects } from "@/data/projects";
import { useState, useMemo } from "react";


const PROJECTS_PER_PAGE = 9;

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination data
  const { currentProjects, totalPages } = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    const currentProjects = sampleProjects.slice(startIndex, endIndex);
    const totalPages = Math.ceil(sampleProjects.length / PROJECTS_PER_PAGE);
    
    return { currentProjects, totalPages };
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container py-8">
      <MotionWrap>
        <h1 className="text-4xl font-bold mb-2">My Projects</h1>
        <p className="text-lg text-muted-foreground mb-8">
          A showcase of my development work including mobile apps, web applications, and full-stack projects.
        </p>
      </MotionWrap>
      
      {/* 3x3 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentProjects.map((project, index) => (
          <MotionWrap key={project.id} delay={index * 0.1}>
            <ProjectCard {...project} />
          </MotionWrap>
        ))}
      </div>

      {/* Show pagination only if there are multiple pages */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) {
                      handlePageChange(currentPage - 1);
                    }
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page);
                    }}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                      handlePageChange(currentPage + 1);
                    }
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
