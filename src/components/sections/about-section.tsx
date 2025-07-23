import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex justify-center items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src="/images/profile.jpg"
                alt="Profile Photo"
                width={500}
                height={600}
                className="relative rounded-lg object-cover aspect-[4/5] w-full max-w-md border-4 border-background shadow-2xl"
                data-ai-hint="professional headshot"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col items-start space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              About Me
            </div>
            <h2 className="font-headline tracking-tighter text-4xl font-bold sm:text-5xl text-foreground">
              Manu Eldho
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              A dedicated B.Tech student with a deep passion for building intelligent systems that tackle real-world challenges. From developing NLP-powered projects and visual reasoning apps to experimenting with cutting-edge deep learning techniques in computer vision, I thrive at the intersection of AI and practical problem-solving. I’m trying to explore new ways to apply machine learning, neural networks, and human-centric design to make a real-world impact.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "The best way to predict the future is to create it."
            </blockquote>
            <Button asChild variant="outline" className="rounded-full border-primary hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.primary)]">
                <Link href="/MANU ELDHO UPDATED (1).pdf" target="_blank" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}