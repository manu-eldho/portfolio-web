import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const skills = {
  "Languages": [
    { name: "Python", level: 95, description: "Expert in Python for AI/ML and web development." },
    { name: "JavaScript", level: 90, description: "Proficient in modern JavaScript (ES6+)." },
    { name: "C", level: 80, description: "Strong understanding of C for systems programming." },
    { name: "R", level: 75, description: "Experienced in R for statistical analysis." },
  ],
  "Frameworks & Libraries": [
    { name: "TensorFlow", level: 90, description: "Building and training deep learning models." },
    { name: "Flask", level: 85, description: "Creating web APIs and microservices." },
    { name: "Pandas", level: 95, description: "Data manipulation and analysis expert." },
    { name: "React/Next.js", level: 80, description: "Building modern, server-rendered web apps." },
  ],
  "Databases": [
      { name: "SQL", level: 85, description: "Advanced querying and database design." },
      { name: "MongoDB", level: 75, description: "Working with NoSQL databases." },
  ],
  "Tools & Platforms": [ 
    { name: "Git & GitHub", level: 90, description: "Proficient in version control workflows." },
    { name: "Docker", level: 70, description: "Containerizing applications for deployment." },
  ]
};

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-24 md:py-32 lg:py-40 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Technical Skills</div>
          <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl text-foreground">
            My Expertise
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            A curated list of my technical abilities and tools I use to bring ideas to life.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="bg-background/50 border-primary/20 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-foreground">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillList.map((skill) => (
                  <TooltipProvider key={skill.name}>
                    <Tooltip>
                      <TooltipTrigger className="w-full text-left" suppressHydrationWarning>
                         <div className="relative h-10 w-full">
                            <div className="absolute top-1/2 left-4 -translate-y-1/2 text-sm font-medium text-foreground">
                                {skill.name}
                            </div>
                            <svg className="w-full h-full" viewBox="0 0 36 36">
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    className="stroke-current text-primary/20"
                                    strokeWidth="2"
                                    fill="none"
                                ></path>
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    className="stroke-current text-primary transition-all duration-1000"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray={`${skill.level}, 100`}
                                    strokeLinecap="round"
                                ></path>
                                <text x="18" y="22" className="fill-current text-primary text-[10px]" textAnchor="middle">{`${skill.level}%`}</text>
                            </svg>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
