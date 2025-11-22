import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Company Name",
    period: "Summer 2024",
    description: [
      "Developed and maintained web applications using React and TypeScript",
      "Collaborated with cross-functional teams in Agile environment",
      "Implemented automated testing procedures improving code quality by 30%",
    ],
  },
  {
    title: "Research Assistant",
    company: "University Computer Science Department",
    period: "Jan 2024 - Present",
    description: [
      "Conducted research on machine learning algorithms for data analysis",
      "Published findings in university research symposium",
      "Assisted in developing educational materials for undergraduate courses",
    ],
  },
  {
    title: "Student Developer",
    company: "Campus Technology Solutions",
    period: "Sep 2023 - Dec 2023",
    description: [
      "Built internal tools to streamline administrative processes",
      "Reduced processing time by 40% through automation",
      "Provided technical support and training to staff members",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Work Experience</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional experience and contributions that shaped my technical journey
        </p>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 ml-14">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
