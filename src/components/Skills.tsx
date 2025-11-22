import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "HTML/CSS", "Tailwind CSS", "Next.js", "Express"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Agile", "Critical Thinking"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical abilities and professional competencies
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>Core competencies and expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
