import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project Name 1",
    description: "A full-stack web application built with React and Node.js. Implemented user authentication, real-time data synchronization, and responsive design.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
  },
  {
    title: "Project Name 2",
    description: "Mobile-first e-commerce platform with payment integration. Features include shopping cart, product search, and order management system.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
  },
  {
    title: "Project Name 3",
    description: "Machine learning project for image classification using Python and TensorFlow. Achieved 95% accuracy on test dataset.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "Flask"],
    github: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my recent work and personal projects showcasing my technical skills
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button size="sm" className="flex-1 gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
