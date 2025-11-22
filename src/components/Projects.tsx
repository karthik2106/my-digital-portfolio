import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "Project Name 1",
    description: "A full-stack web application built with modern technologies. Clean architecture and intuitive user experience.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
    image: project1,
  },
  {
    title: "Project Name 2",
    description: "Mobile-first e-commerce platform with seamless payment integration and real-time inventory management.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
    image: project2,
  },
  {
    title: "Project Name 3",
    description: "Machine learning project for intelligent image classification with high accuracy and performance.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "Flask"],
    github: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com",
    image: project3,
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 bg-muted/30">
      <div 
        ref={ref}
        className={`container px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Portfolio</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-6">Selected Work</h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              A collection of projects that showcase technical excellence and creative problem-solving
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-700 delay-${index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card className="group relative overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <CardHeader className="p-0 mb-6">
                        <div className="text-sm text-muted-foreground mb-2 font-light">
                          0{index + 1}
                        </div>
                        <CardTitle className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base text-muted-foreground font-light leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 space-y-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="rounded-full px-4 py-1 font-light text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex gap-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 font-light"
                          >
                            <Github className="h-4 w-4" />
                            View Code
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 font-light"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </div>
                      </CardContent>
                    </div>
                    
                    {/* Image Preview */}
                    <div className="relative h-64 lg:h-full overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                          hoveredProject === index ? "scale-105 opacity-100" : "scale-100 opacity-80"
                        }`}
                      />
                      <div className={`absolute inset-0 bg-background/20 transition-opacity duration-500 ${
                        hoveredProject === index ? "opacity-0" : "opacity-100"
                      }`} />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
