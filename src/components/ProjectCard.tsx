import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, tags, imageUrl, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col h-full transition-transform duration-300 ease-in-out hover:scale-105">
      <CardHeader>
        <div className="aspect-video relative mb-4">
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground flex-grow mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-4">
        {githubUrl && (
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">GitHub</Button>
          </Link>
        )}
        {liveUrl && (
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button>Live Demo</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
