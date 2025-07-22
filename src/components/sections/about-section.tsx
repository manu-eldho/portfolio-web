import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col items-start space-y-4">
            <h1 className="font-headline tracking-tighter text-3xl font-bold sm:text-4xl md:text-5xl xl:text-[3.8rem]/none text-foreground">
              Hi, I&apos;m Jane Doe
            </h1>
            <p className="font-headline text-xl md:text-2xl text-primary">
              A Passionate Full-Stack Developer
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I build beautiful and functional web applications. My journey in
              tech is driven by a love for problem-solving and a desire to
              create impactful digital experiences. I thrive on turning complex
              ideas into simple, elegant, and user-friendly products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg">Download CV</Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Profile Photo"
              width={400}
              height={400}
              className="rounded-full object-cover aspect-square w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-primary/10 shadow-lg"
              data-ai-hint="professional headshot"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
