import { ProjectCard } from "../project-card";

const projects = [
  {
    title: "ApertureFlow",
    description:
      "A personal portfolio website to showcase my projects and skills, built with Next.js and Tailwind CSS.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "portfolio website",
    githubUrl: "#",
    techStack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store with product listings, shopping cart, and a secure checkout process.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    githubUrl: "#",
    techStack: ["TypeScript", "Node.js", "Stripe", "GraphQL"],
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "An analytics dashboard for visualizing complex datasets with interactive charts and graphs.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dashboard charts",
    githubUrl: "#",
    techStack: ["React", "D3.js", "Firebase"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              My Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of my work, from professional web apps to personal
              experiments.
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
