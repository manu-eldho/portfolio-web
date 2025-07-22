"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Aperture, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-primary/20">
      <div className="flex items-center gap-2">
        <Aperture className="h-5 w-5 text-primary" />
        <p className="text-sm text-muted-foreground">
          &copy; 2024 ApertureFlow. All rights reserved.
        </p>
      </div>
      <nav className="sm:ml-auto flex gap-2 sm:gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" prefetch={false} target="_blank">
            <Twitter className="h-5 w-5 text-primary transition-colors hover:text-white" />
            <span className="sr-only">Twitter</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" prefetch={false} target="_blank">
            <Github className="h-5 w-5 text-primary transition-colors hover:text-white" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" prefetch={false} target="_blank">
            <Linkedin className="h-5 w-5 text-primary transition-colors hover:text-white" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </Button>
      </nav>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-8 right-8 rounded-full bg-primary/20 border-primary text-primary hover:bg-primary hover:text-background"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-5 w-5" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </footer>
  );
}
