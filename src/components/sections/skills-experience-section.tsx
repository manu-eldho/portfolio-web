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
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
            Skills &amp; Experience
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My technical expertise and professional journey.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-2xl font-bold font-headline mb-6 text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="text-lg font-headline flex items-center gap-2">
                      {skillIcons[category]}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-headline mb-6 text-center lg:text-left">
              Work Experience
            </h3>
            <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 after:left-0">
              {experiences.map((exp, index) => (
                <div key={index} className="grid gap-1.5 mb-8 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[30.5px] top-1.5 z-10 border-2 border-background" />
                  <h4 className="font-bold font-headline">{exp.role}</h4>
                  <p className="text-sm font-semibold text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">
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
