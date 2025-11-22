import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* BackgroundPaths Component */}
      <div className="absolute inset-0">
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 pointer-events-none">
              <svg
                className="w-full h-full text-foreground/10"
                viewBox="0 0 696 316"
                fill="none"
              >
                <title>Background Paths</title>
                {Array.from({ length: 36 }, (_, i) => ({
                  id: i,
                  d: `M-${380 - i * 5} -${189 + i * 6}C-${380 - i * 5} -${189 + i * 6} -${312 - i * 5} ${216 - i * 6} ${152 - i * 5} ${343 - i * 6}C${616 - i * 5} ${470 - i * 6} ${684 - i * 5} ${875 - i * 6} ${684 - i * 5} ${875 - i * 6}`,
                  width: 0.5 + i * 0.03,
                })).map((path) => (
                  <path
                    key={path.id}
                    d={path.d}
                    stroke="currentColor"
                    strokeWidth={path.width}
                    strokeOpacity={0.1 + path.id * 0.03}
                  />
                ))}
              </svg>
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Profile Photo */}
              <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-border/20 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Animated Name */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                {["Your", "Name"].map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                    {word.split("").map((letter, letterIndex) => (
                      <span
                        key={`${wordIndex}-${letterIndex}`}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/80"
                        style={{
                          animation: 'fade-in 0.5s ease-out forwards',
                          animationDelay: `${1 + wordIndex * 0.1 + letterIndex * 0.03}s`,
                          opacity: 0
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>

              {/* Subtitle */}
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-light">
                  Software Engineer
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl mx-auto">
                  Year 4 Computer Science Student crafting elegant digital experiences
                </p>
              </div>
          
          <div className="flex gap-3 justify-center flex-wrap animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'both' }}>
            <Button 
              size="lg" 
              className="group relative overflow-hidden rounded-full px-8 font-light"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Mail className="h-4 w-4 mr-2" />
              Get in touch
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="rounded-full px-6 font-light hover:bg-muted"
              onClick={() => {
                const projectsSection = document.querySelector('#projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Github className="h-4 w-4 mr-2" />
              View work
            </Button>
          </div>
          
              <div className="flex gap-6 justify-center pt-8 animate-fade-in" style={{ animationDelay: '2.2s', animationFillMode: 'both' }}>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
