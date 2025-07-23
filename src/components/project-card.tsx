import Image from "next/image";
import { Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

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
    <div className="w-full [perspective:2000px]">
      <div className="relative w-full h-[600px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group card-flip">

        {/* Front: Image */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden border border-primary/20 shadow-lg">
          <Image
            src={imageUrl}
            alt={title}
            width={1024}
            height={1536}
            className="w-full h-full object-cover"
            data-ai-hint={imageHint}
          />
        </div>

        {/* Back: Text */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-black/90 text-white rounded-xl px-6 py-8 flex flex-col justify-center items-center text-center border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-base text-gray-300 mb-6">{description}</p>

          {techStack && (
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="font-normal text-muted-foreground border-primary/30"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          {githubUrl && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-primary hover:text-white" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
