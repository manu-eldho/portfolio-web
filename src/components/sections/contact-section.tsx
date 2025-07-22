import { ContactForm } from "../contact-form";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-24 md:py-32 lg:py-40 bg-background">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
        <div className="space-y-3 text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Get in Touch</div>
          <h2 className="text-4xl font-bold tracking-tighter font-headline md:text-5xl/tight text-foreground">
            Let's Create Together
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Have a project in mind, or just want to connect? I'm always open to discussing new opportunities and collaborations.
          </p>
        </div>
        <div className="mx-auto w-full max-w-lg space-y-8 p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-primary/20 shadow-2xl shadow-primary/10">
          <ContactForm />
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 text-primary transition-colors hover:text-white" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-primary transition-colors hover:text-white" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-primary transition-colors hover:text-white" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
