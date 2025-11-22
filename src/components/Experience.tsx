import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Company Name",
    period: "Summer 2024",
    description: "Developed and maintained web applications using React and TypeScript. Collaborated with cross-functional teams in Agile environment and implemented automated testing procedures.",
  },
  {
    title: "Research Assistant",
    company: "University Computer Science Department",
    period: "Jan 2024 - Present",
    description: "Conducted research on machine learning algorithms for data analysis. Published findings in university research symposium and assisted in developing educational materials.",
  },
  {
    title: "Student Developer",
    company: "Campus Technology Solutions",
    period: "Sep 2023 - Dec 2023",
    description: "Built internal tools to streamline administrative processes. Reduced processing time by 40% through automation and provided technical support to staff members.",
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-32 bg-background">
      <div 
        ref={ref}
        className={`container px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Journey</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-6">Experience</h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Professional milestones and contributions that shaped my technical expertise
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Bar */}
            <div className="absolute left-0 md:left-12 top-0 bottom-0 w-px bg-border" />
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-8 md:pl-24 transition-all duration-700 delay-${index * 150} ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-12 top-2 w-3 h-3 rounded-full bg-primary -translate-x-[5px]" />
                  
                  {/* Content */}
                  <div className="group">
                    <div className="mb-2">
                      <span className="text-sm text-muted-foreground font-light">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4 font-light">
                      {exp.company}
                    </p>
                    <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
