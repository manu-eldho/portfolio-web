import { GraduationCap, Briefcase } from "lucide-react";

const timelineData = [
  {
    icon: <GraduationCap className="h-5 w-5 text-primary" />,
    date: "2022 - Present",
    title: "Bachelor of Technology in AI & ML",
    institution: "Mar Athanasius College of Engineering",
    description:
      "Pursuing a comprehensive curriculum focused on artificial intelligence, machine learning, data science, and computer engineering fundamentals.",
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-primary" />,
    date: "2020 - 2022",
    title: "Senior Secondary Education",
    institution: "Vimalagiri Public School",
    description:
      "Percentage: 93.2 %",
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="w-full py-24 md:py-32 lg:py-40 bg-black/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">My Journey</div>
          <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl text-foreground">
            Education &amp; Experience
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            A timeline of my professional growth and academic achievements.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-primary/30 transform -translate-x-1/2"></div>
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-center mb-12">
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                {index % 2 !== 0 && (
                  <div className="bg-white/5 backdrop-blur-sm border border-primary/20 p-6 rounded-lg shadow-lg">
                    <p className="text-sm text-primary mb-1">{item.date}</p>
                    <h3 className="text-xl font-headline font-bold text-foreground">{item.title}</h3>
                    <p className="text-base font-semibold text-muted-foreground mb-2">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                )}
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-background rounded-full border-2 border-primary flex items-center justify-center z-10">
                {item.icon}
              </div>

              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pl-8 text-left" : "pr-8 text-right"
                }`}
              >
                {index % 2 === 0 && (
                  <div className="bg-white/5 backdrop-blur-sm border border-primary/20 p-6 rounded-lg shadow-lg">
                    <p className="text-sm text-primary mb-1">{item.date}</p>
                    <h3 className="text-xl font-headline font-bold text-foreground">{item.title}</h3>
                    <p className="text-base font-semibold text-muted-foreground mb-2">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}