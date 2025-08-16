import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  isCentered?: boolean;
}

const ProjectCard = ({ id, title, description, tags, imageUrl, liveUrl, githubUrl, isCentered = false }: ProjectCardProps) => {
  const cardContent = (
    <>
      <CardHeader>
        <div className="aspect-video relative mb-4">
          <Image src={imageUrl} alt={title} fill className="object-cover rounded-t-lg" />
        </div>
        <CardTitle className={isCentered ? "hover:text-primary transition-colors" : ""}>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </>
  );

  return (
    <Card className="flex flex-col h-full transition-transform duration-300 ease-in-out hover:scale-105">
      {isCentered ? (
        <Link href={`/projects/${id}`} className="flex flex-col h-full">
          {cardContent}
        </Link>
      ) : (
        <div className="flex flex-col h-full">
          {cardContent}
        </div>
      )}
      <CardFooter className="flex justify-end gap-4">
        {githubUrl && (
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <Button variant="outline">GitHub</Button>
          </Link>
        )}
        {liveUrl && liveUrl !== "#" && (
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <Button>Live Demo</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
