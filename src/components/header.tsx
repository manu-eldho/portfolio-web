import Link from "next/link";
import { Button } from "./ui/button";
import { Aperture } from "lucide-react";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <Link href="#" className="flex items-center justify-center gap-2" prefetch={false}>
        <Aperture className="h-6 w-6 text-primary" />
        <span className="font-headline font-semibold text-lg">ApertureFlow</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#about"
          className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition-colors"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#projects"
          className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition-colors"
          prefetch={false}
        >
          Projects
        </Link>
        <Link
          href="#experience"
          className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition-colors"
          prefetch={false}
        >
          Experience
        </Link>
        <Link
          href="#contact"
          className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition-colors"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
