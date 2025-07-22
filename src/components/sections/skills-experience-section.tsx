import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Server, Users } from "lucide-react";

const skills = {
  "Languages & Frameworks": [
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Express",
  ],
  Databases: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
  "Tools & Platforms": ["Docker", "Git", "GitHub", "Vercel", "AWS", "Figma"],
  "Soft Skills": [
    "Agile Methodologies",
    "Team Collaboration",
    "Problem Solving",
    "UI/UX Principles",
  ],
};

const skillIcons: { [key: string]: React.ReactNode } = {
    "Languages & Frameworks": <Code className="h-6 w-6 text-primary" />,
    "Databases": <Database className="h-6 w-6 text-primary" />,
    "Tools & Platforms": <Server className="h-6 w-6 text-primary" />,
    "Soft Skills": <Users className="h-6 w-6 text-primary" />,
}

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description:
      "Leading the development of high-traffic, client-facing web applications using React and Node.js. Mentoring junior developers and conducting code reviews to maintain high-quality standards.",
  },
  {
    role: "Software Engineer",
    company: "Innovate Co.",
    period: "2019 - 2021",
    description:
      "Developed and maintained features for a large-scale SaaS platform. Collaborated in an agile team to ship new features and fix bugs, improving application performance by 20%.",
  },
  {
    role: "Junior Developer",
    company: "Digital Creations",
    period: "2017 - 2019",
    description:
      "Assisted in building and maintaining websites for various clients. Gained foundational experience in HTML, CSS, JavaScript, and version control with Git.",
  },
];

export function SkillsExperienceSection() {
  return (
    <section id="experience" className="w-full py-24 md:py-32 lg:py-40 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">My Journey</div>
          <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl text-foreground">
            Skills &amp; Experience
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A timeline of my professional growth and the technologies I command.
          </p>
        </div>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold font-headline mb-8 text-center lg:text-left text-foreground">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-background/50 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-headline flex items-center gap-3 text-foreground">
                      {skillIcons[category]}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-base font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold font-headline mb-8 text-center lg:text-left text-foreground">
              Career Path
            </h3>
            <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-primary/20 after:left-0">
              {experiences.map((exp, index) => (
                <div key={index} className="grid gap-1.5 mb-8 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[30.5px] top-1.5 z-10 border-4 border-secondary" />
                  <p className="text-sm text-primary">{exp.period}</p>
                  <h4 className="font-bold font-headline text-xl text-foreground">{exp.role}</h4>
                  <p className="text-sm font-semibold text-muted-foreground">{exp.company}</p>
                  <p className="text-base text-muted-foreground mt-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
