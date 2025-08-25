"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MotionWrap from "@/components/MotionWrap";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useState, useEffect } from "react";
import type { EmblaCarouselType } from "embla-carousel";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.projectId as string;
  const project = projectsData[projectId];
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());
    
    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  if (!project) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link href="/projects">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <MotionWrap delay={0.1}>
        <Link href={`/projects?focus=${projectId}`}>
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </MotionWrap>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <MotionWrap delay={0.2}>
          <div className="space-y-4">
            {project.images && project.images.length > 1 ? (
              /* Multi-image Carousel */
              <div>
                <Carousel className="w-full" setApi={(api) => setApi(api || null)}>
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video relative">
                          <Image
                            src={image.url}
                            alt={image.title}
                            fill
                            className="object-contain rounded-lg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                
                {/* Image Previews */}
                <div className="grid grid-cols-5 gap-2 mt-4">
                  {project.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`aspect-video relative cursor-pointer transition-opacity border-2 rounded ${
                        currentSlide === index 
                          ? "opacity-100 border-primary" 
                          : "opacity-70 border-transparent hover:opacity-100"
                      }`}
                      onClick={() => api?.scrollTo(index)}
                    >
                      <Image
                        src={image.url}
                        alt={image.title}
                        fill
                        className="object-contain rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Single Image */
              <div className="aspect-video relative">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            )}
          </div>
        </MotionWrap>

        <MotionWrap delay={0.3}>
          <div>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4">
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              )}
              {project.liveUrl && project.liveUrl !== "#" && (
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </MotionWrap>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MotionWrap delay={0.4}>
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </MotionWrap>

        <MotionWrap delay={0.5}>
          <Card>
            <CardHeader>
              <CardTitle>Tech Stack</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {project.techStack.frontend && (
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.frontend.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.backend && (
                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.backend.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.database && (
                <div>
                  <h4 className="font-semibold mb-2">Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.database.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.containerization && (
                <div>
                  <h4 className="font-semibold mb-2">Containerization</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.containerization.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.networking && (
                <div>
                  <h4 className="font-semibold mb-2">Networking & CDN</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.networking.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.infrastructure && (
                <div>
                  <h4 className="font-semibold mb-2">Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.infrastructure.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.services && (
                <div>
                  <h4 className="font-semibold mb-2">AWS Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.services.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.tools && (
                <div>
                  <h4 className="font-semibold mb-2">Development Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.tools.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </MotionWrap>

        {project.challenges && (
          <MotionWrap delay={0.6}>
            <Card>
              <CardHeader>
                <CardTitle>Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </MotionWrap>
        )}

        {project.learnings && (
          <MotionWrap delay={0.7}>
            <Card>
              <CardHeader>
                <CardTitle>Key Learnings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {learning}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </MotionWrap>
        )}
      </div>
    </div>
  );
}