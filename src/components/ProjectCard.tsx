import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectCardProps } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

interface ExtendedProjectCardProps extends ProjectCardProps {
  isCentered?: boolean;
}

const ProjectCard = ({ id, title, description, tags, imageUrl, liveUrl, githubUrl, isCentered = false }: ExtendedProjectCardProps) => {
  const cardContent = (
    <>
      <CardHeader className="p-4 md:p-6">
        <div className="aspect-video relative mb-3 md:mb-4">
          <Image src={imageUrl} alt={title} fill className="object-cover rounded-t-lg" />
        </div>
        <CardTitle className={`text-lg md:text-xl ${isCentered ? "hover:text-primary transition-colors" : ""}`}>{title}</CardTitle>
        <CardDescription className="text-sm md:text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col p-4 md:p-6 pt-0">
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs md:text-sm">{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </>
  );

  return (
    <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-lg md:hover:scale-105">
      <Link href={`/projects/${id}`} className="flex flex-col flex-grow">
        {cardContent}
      </Link>
      <CardFooter className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 p-4 md:p-6">
        {githubUrl && (
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <Button variant="outline" className="w-full sm:w-auto min-h-[44px]">GitHub</Button>
          </Link>
        )}
        {liveUrl && liveUrl !== "#" && (
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <Button className="w-full sm:w-auto min-h-[44px]">Live Demo</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
