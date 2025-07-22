import Link from "next/link";
import { Button } from "./ui/button";
import { Aperture } from "lucide-react";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-white/10">
      <Link href="#" className="flex items-center justify-center gap-2" prefetch={false}>
        <Aperture className="h-7 w-7 text-primary" />
        <span className="font-headline font-bold text-2xl tracking-wider">ApertureFlow</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link
          href="#about"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#projects"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          Projects
        </Link>
        <Link
          href="#education"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          Education
        </Link>
        <Button asChild variant="outline" className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 text-primary">
            <Link href="#contact">Contact Me</Link>
        </Button>
      </nav>
    </header>
  );
}
