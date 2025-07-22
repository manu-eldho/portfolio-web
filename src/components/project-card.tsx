import Image from "next/image";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  githubUrl?: string;
  techStack?: string[];
};

export function ProjectCard({
  title,
  description,
  imageUrl,
  imageHint,
  githubUrl,
  techStack,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 bg-secondary border border-transparent hover:border-primary/30">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
            <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={imageHint}
            />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-2xl font-bold font-headline mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-base mb-4">{description}</p>
        
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto flex justify-between items-center">
        {techStack && (
            <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="font-normal text-muted-foreground border-primary/20">
                    {tech}
                </Badge>
                ))}
            </div>
        )}
        <div className="flex gap-2">
          {githubUrl && (
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
