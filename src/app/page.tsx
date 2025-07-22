import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsEducationSection } from "@/components/sections/skills-experience-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <AboutSection />
        <ProjectsSection />
        <SkillsEducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
