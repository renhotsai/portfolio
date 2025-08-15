"use client";

import ProjectCard, { type ProjectCardProps } from "@/components/ProjectCard";
import MotionWrap from "@/components/MotionWrap";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

const sampleProjects: ProjectCardProps[] = [
  {
    title: "Car Rent Application",
    description: "A responsive mobile app for car rental booking with real-time data synchronization and secure authentication using React Native and Firebase.",
    tags: ["React Native", "Firebase", "Authentication", "Firestore"],
    imageUrl: "/Images/CarRent-ss2ky9BceJc0eS6Qx0NztypyQMPAxE.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/mobile-rental",
  },
  {
    title: "Housing Rental App",
    description: "A comprehensive rental platform for finding and managing housing properties with advanced search features built with Kotlin for Android.",
    tags: ["Kotlin", "Android", "Mobile Development", "Rental Platform"],
    imageUrl: "/Images/HousingRentalApp-WQGWs7GMs3OSOaFRUxRQRsMIpxNMi5.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/mobile-rental",
  },
  {
    title: "BookBond",
    description: "A social platform for book enthusiasts to discover, share, and discuss their favorite reads with JavaScript-based frontend.",
    tags: ["JavaScript", "Social Platform", "Books", "Frontend"],
    imageUrl: "/Images/bookbond-knRRSHEYMXvomWRSx1bY9NFlpmxido.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/BookBond",
  },
  {
    title: "Online Store",
    description: "An iOS e-commerce application built with Swift featuring product browsing, shopping cart, and secure checkout functionality.",
    tags: ["Swift", "iOS", "E-commerce", "Mobile App"],
    imageUrl: "/Images/PizzaStore-jvVXVkxPEpzVq17sUHJfBM4JQSxAKs.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/OnlineStore",
  },
  {
    title: "HandyCourse",
    description: "An educational iOS platform offering various courses with progress tracking and interactive learning built with Swift.",
    tags: ["Swift", "iOS", "Education", "Progress Tracking"],
    imageUrl: "/Images/handycourse-KXOO4lFpXUyL1tvsRRJONFABrhlIXx.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/HandyCourse",
  },
  {
    title: "Restaurant App",
    description: "A restaurant management and ordering system built with JavaScript featuring menu management and order processing.",
    tags: ["JavaScript", "Restaurant", "Order Management", "Frontend"],
    imageUrl: "/Images/Festival-XBg4IYsq0oo5XEaQmepzlAvvwyUT1T.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/Restaurant",
  },
  {
    title: "Job Search Platform",
    description: "A comprehensive job search application built with TypeScript featuring job listings, application tracking, and user profiles.",
    tags: ["TypeScript", "Job Search", "Career Platform", "Web App"],
    imageUrl: "/Images/Jeremy-WFcyBsvIZyLUozH4k7MON7w2tFfIbj.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/job-search",
  },
];

const ProjectsPage = () => {
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="container py-8">
      <MotionWrap>
        <h1 className="text-4xl font-bold mb-2">My Projects</h1>
        <p className="text-lg text-muted-foreground mb-8">
          A showcase of my development work including mobile apps, web applications, and full-stack projects.
        </p>
      </MotionWrap>
      
      <div className="relative">
        <Carousel
          setApi={(api) => setApi(api || null)}
          className="w-full max-w-7xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {sampleProjects.map((project, index) => (
              <CarouselItem key={project.title} className="pl-4 md:basis-1/3">
                <div 
                  className={`transition-all duration-300 cursor-pointer ${
                    index === current 
                      ? "scale-100 opacity-100" 
                      : "scale-90 opacity-70 hover:opacity-85 hover:scale-95"
                  }`}
                  onClick={() => {
                    if (api && index !== current) {
                      api.scrollTo(index);
                    }
                  }}
                >
                  <div className={`${
                    index === current 
                      ? "transform-none" 
                      : "transform scale-90"
                  } transition-transform duration-300`}>
                    <ProjectCard {...project} />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>
        
        <div className="flex justify-center mt-8 space-x-2">
          {sampleProjects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
