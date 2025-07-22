import { Button } from "../ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="w-full h-[100vh] flex items-center justify-center text-center bg-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container px-4 md:px-6 z-10">
            <div className="flex flex-col items-center space-y-6">
            <h1 className="font-headline tracking-tighter text-5xl font-bold sm:text-7xl md:text-8xl xl:text-9xl/none text-foreground">
                Manu Eldho
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed text-primary">
                AI & Machine Learning Developer
            </p>
            <Button size="lg" asChild className="rounded-full border border-primary bg-transparent text-primary hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.primary)]">
                <Link href="#contact">
                    Get In Touch
                </Link>
            </Button>
            </div>
      </div>
    </section>
  );
}
