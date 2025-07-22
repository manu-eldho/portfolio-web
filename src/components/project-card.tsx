import Image from "next/image";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack?: string[];
};

export function ProjectCard({
  title,
  description,
  imageUrl,
  imageHint,
  githubUrl,
  liveUrl,
  techStack,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
            <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="object-cover w-full h-full"
            data-ai-hint={imageHint}
            />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold font-headline mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        {techStack && (
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <div className="flex gap-4">
          {githubUrl && (
            <Button variant="outline" asChild>
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          )}
          {liveUrl && (
            <Button asChild>
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
