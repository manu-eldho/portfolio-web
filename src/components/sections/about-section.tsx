import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Download, Send } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col items-start space-y-6">
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">
              Full-Stack Developer & Creative Technologist
            </div>
            <h1 className="font-headline tracking-tighter text-4xl font-bold sm:text-5xl md:text-6xl xl:text-7xl/none text-foreground">
              Crafting Digital Elegance
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              I specialize in building bespoke, high-performance web applications that are as beautiful as they are functional. My passion lies at the intersection of minimalist design and powerful technology, creating seamless digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="rounded-full">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button variant="secondary" size="lg" asChild className="rounded-full">
                <Link href="#contact">
                    <Send className="mr-2 h-5 w-5" />
                    Contact Me
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative group">
                 <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Image
                src="https://placehold.co/400x400.png"
                alt="Profile Photo"
                width={400}
                height={400}
                className="relative rounded-full object-cover aspect-square w-80 h-80 lg:w-96 lg:h-96 border-4 border-secondary shadow-2xl"
                data-ai-hint="professional headshot"
                priority
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
