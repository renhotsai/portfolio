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
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import type { EmblaCarouselType } from "embla-carousel";

const sampleProjects: ProjectCardProps[] = [
  {
    id: "car-rent",
    title: "Car Rent Application",
    description: "A responsive mobile app for car rental booking with real-time data synchronization and secure authentication using React Native and Firebase.",
    tags: ["React Native", "Firebase", "Authentication", "Firestore"],
    imageUrl: "/Images/CarRent-ss2ky9BceJc0eS6Qx0NztypyQMPAxE.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/mobile-rental",
  },
  {
    id: "housing-rental",
    title: "Housing Rental App",
    description: "A comprehensive rental platform for finding and managing housing properties with advanced search features built with Kotlin for Android.",
    tags: ["Kotlin", "Android", "Mobile Development", "Rental Platform"],
    imageUrl: "/Images/HousingRentalApp-WQGWs7GMs3OSOaFRUxRQRsMIpxNMi5.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/mobile-rental",
  },
  {
    id: "bookbond",
    title: "BookBond",
    description: "A mobile social platform for book enthusiasts built with React Native, featuring book discovery, sharing, and community discussions with modern UI components.",
    tags: ["React Native", "Mobile App", "JavaScript", "Expo", "Social Platform"],
    imageUrl: "/Images/bookbond-real.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/BookBond/tree/main/bookbond-mobile",
  },
  {
    id: "online-store",
    title: "Online Store",
    description: "An iOS e-commerce application built with Swift featuring product browsing, shopping cart, and secure checkout functionality.",
    tags: ["Swift", "iOS", "E-commerce", "Mobile App"],
    imageUrl: "/Images/Festival-XBg4IYsq0oo5XEaQmepzlAvvwyUT1T.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/OnlineStore",
  },
  {
    id: "handycourse",
    title: "HandyCourse",
    description: "An educational iOS platform offering various courses with progress tracking and interactive learning built with Swift.",
    tags: ["Swift", "iOS", "Education", "Progress Tracking"],
    imageUrl: "/Images/handycourse-KXOO4lFpXUyL1tvsRRJONFABrhlIXx.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/HandyCourse",
  },
  {
    id: "restaurant",
    title: "Restaurant App",
    description: "A restaurant management and ordering system built with JavaScript featuring menu management and order processing.",
    tags: ["JavaScript", "Restaurant", "Order Management", "Frontend"],
    imageUrl: "/Images/PizzaStore-jvVXVkxPEpzVq17sUHJfBM4JQSxAKs.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/Festival",
  },
  {
    id: "ace-my-career",
    title: "Ace My Career",
    description: "A comprehensive job search application built with TypeScript featuring job listings, application tracking, and user profiles.",
    tags: ["TypeScript", "Job Search", "Career Platform", "Web App"],
    imageUrl: "/Images/acemycareer-real.png",
    liveUrl: "https://acemycareer.online/",
    githubUrl: "https://github.com/renhotsai/job-search",
  },
  {
    id: "festival",
    title: "Festival",
    description: "A festival management and event platform featuring event listings, ticket booking, and attendee management built with modern web technologies.",
    tags: ["JavaScript", "Event Management", "Festival Platform", "Web App"],
    imageUrl: "/Images/Festival-XBg4IYsq0oo5XEaQmepzlAvvwyUT1T.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/Festival",
  },
];

const ProjectsPage = () => {
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const searchParams = useSearchParams();

  // Handle initial focus from URL params
  useEffect(() => {
    const focusProject = searchParams.get('focus');
    if (focusProject && api) {
      const projectIndex = sampleProjects.findIndex(p => p.id === focusProject);
      if (projectIndex !== -1) {
        api.scrollTo(projectIndex);
        setIsAutoPlaying(false); // Stop auto-play when manually focused
      }
    }
  }, [searchParams, api]);

  // Auto-rotation timer
  useEffect(() => {
    if (!api || !isAutoPlaying) {
      return;
    }

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        api.scrollNext(); // Will loop automatically due to loop: true option
      }, 4000); // Change every 4 seconds
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [api, isAutoPlaying]);

  // Handle carousel events
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Stop auto-play on user interaction
    api.on("pointerDown", () => {
      setIsAutoPlaying(false);
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
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
                      setIsAutoPlaying(false); // Stop auto-play on manual interaction
                      if (autoPlayRef.current) {
                        clearInterval(autoPlayRef.current);
                      }
                    }
                  }}
                >
                  <div className={`${
                    index === current 
                      ? "transform-none" 
                      : "transform scale-90"
                  } transition-transform duration-300`}>
                    <ProjectCard {...project} isCentered={index === current} />
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
              onClick={() => {
                api?.scrollTo(index);
                setIsAutoPlaying(false); // Stop auto-play on manual interaction
                if (autoPlayRef.current) {
                  clearInterval(autoPlayRef.current);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
