import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "Vercel"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillsWords = [
    {
      text: "Skills",
      className: "text-5xl md:text-6xl font-light tracking-tighter",
    },
  ];

  return (
    <section id="skills" className="py-32 bg-muted/30">
      <div
        ref={ref}
        className={`container px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Expertise</p>
            <TypewriterEffect
              words={skillsWords}
              className="text-5xl md:text-6xl font-light tracking-tighter mb-6"
              cursorClassName="bg-primary"
            />
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Technical capabilities and tools I work with
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${categoryIndex * 150}ms` : '0ms'
                }}
                onMouseEnter={() => setHoveredCategory(categoryIndex)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="relative">
                  <div className={`absolute -inset-4 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-2xl blur-xl transition-opacity duration-500 ${
                    hoveredCategory === categoryIndex ? "opacity-100" : "opacity-0"
                  }`} />

                  <div className="relative">
                    <h3 className="text-xl font-light tracking-tight mb-6 transition-colors duration-300 group-hover:text-primary">
                      {category.title}
                    </h3>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skill}
                          className={`text-sm text-muted-foreground font-light py-2 px-4 bg-background/50 rounded-full border border-border/50 hover:border-primary/50 hover:bg-background/80 hover:text-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                            isVisible
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-4"
                          }`}
                          style={{
                            transitionDelay: isVisible
                              ? `${categoryIndex * 150 + skillIndex * 50}ms`
                              : '0ms'
                          }}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
