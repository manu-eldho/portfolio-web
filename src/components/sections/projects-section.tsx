import { ProjectCard } from "../project-card";

const projects = [
  {
    title: "AI-Powered Cancer Prediction using Evolutionary Algorithms",
    description:
      "A predictive AI framework using bioinspired algorithms and deep learning for early cancer diagnosis combines nature-inspired optimization techniques with advanced neural networks to detect cancer at its earliest, most treatable stages through intelligent analysis of gene expression data",
    imageUrl: "/images/cancer.png",
    imageHint: "abstract ai",
    githubUrl:
      "https://github.com/manu-eldho/AI_powered_predictive_approach_for_early_pan_cancer_assessment",
    techStack: ["Python", "TensorFlow", "HTML"],
  },
  {
    title: "SymptoMate Healthcare Assistant",
    description:
      "A virtual healthcare assistant powered by Gemini AI, providing symptom checking and self-care guidance through advanced natural language processing and medical knowledge integration.",
    imageUrl: "/images/chatbot.png",
    imageHint: "healthcare technology",
    githubUrl: "https://github.com/manu-eldho/symptomate",
    techStack: ["Python", "Streamlit", "Gemini"],
  },
  {
    title: "Sign Language Translator",
    description:
      "A sign language translator that converts American Sign Language (ASL) gestures into spoken English and vice versa, enabling real-time communication between deaf individuals and hearing people through computer vision and machine learning algorithms.",
    imageUrl: "/images/sign_language.png",
    imageHint: "portfolio website",
    githubUrl: "https://github.com/manu-eldho/ASL_Classifier",
    techStack: ["Keras", "Python"],
  },
  {
    title: "Travel Companion System",
    description:
      "A travel companion system that provides personalized planning, real-time navigation, showing destinations and subdestinations while offering safety monitoring and features for seamless and secure travel experiences.",
    imageUrl: "/images/travel.png",
    imageHint: "portfolio website",
    githubUrl: "#",
    techStack: ["MySQL", "HTML", "CSS", "JavaSwing"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 md:py-32 lg:py-40 bg-black/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Featured Work
            </div>
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              Case Studies
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              A selection of projects that demonstrate my passion for creating
              elegant and effective digital solutions.
            </p>
          </div>
        </div>

        {/* Grid of projects */}
        <div className="grid gap-8 mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
