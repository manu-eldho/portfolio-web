import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Server, Users, GraduationCap } from "lucide-react";

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

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    period: "2015 - 2017",
    description:
      "Focused on artificial intelligence and machine learning, culminating in a thesis on neural network optimization.",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of California, Berkeley",
    period: "2011 - 2015",
    description:
      "Graduated with honors. Key coursework in data structures, algorithms, and software design principles.",
  },
];

export function SkillsEducationSection() {
  return (
    <section id="education" className="w-full py-24 md:py-32 lg:py-40 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">My Journey</div>
          <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl text-foreground">
            Skills &amp; Education
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A timeline of my academic growth and the technologies I command.
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
              Education
            </h3>
            <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-primary/20 after:left-0">
              {education.map((edu, index) => (
                <div key={index} className="grid gap-1.5 mb-8 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[30.5px] top-1.5 z-10 border-4 border-secondary" />
                  <p className="text-sm text-primary">{edu.period}</p>
                  <h4 className="font-bold font-headline text-xl text-foreground">{edu.degree}</h4>
                  <p className="text-sm font-semibold text-muted-foreground">{edu.institution}</p>
                  <p className="text-base text-muted-foreground mt-2">
                    {edu.description}
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
