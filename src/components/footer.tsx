import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 ApertureFlow. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-2 sm:gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" prefetch={false} target="_blank">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" prefetch={false} target="_blank">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" prefetch={false} target="_blank">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </Button>
      </nav>
    </footer>
  );
}
