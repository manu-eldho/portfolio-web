import { ProjectCard } from "../project-card";

const projects = [
  {
    title: "AI-Powered Cancer Prediction",
    description:
      "A predictive AI framework using bioinspired algorithms and deep learning for early cancer diagnosis.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "abstract ai",
    githubUrl: "https://github.com/manu-eldho/AI_powered_predictive_approach_for_early_pan_cancer_assessment",
    techStack: ["Python", "TensorFlow", "HTML"],
  },
  {
    title: "SymptoMate Healthcare Assistant",
    description:
      "A virtual healthcare assistant powered by Gemini AI, providing symptom checking and self-care guidance.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "healthcare technology",
    githubUrl: "https://github.com/manu-eldho/symptomate",
    techStack: ["Python", "Streamlit", "Gemini"],
  },
    {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and styled with Tailwind CSS, showcasing my projects and skills.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "portfolio website",
    githubUrl: "#",
    techStack: ["Next.js", "React", "Tailwind CSS"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 md:py-32 lg:py-40 bg-black/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Featured Work</div>
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              Case Studies
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              A selection of projects that demonstrate my passion for creating elegant and effective digital solutions.
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
