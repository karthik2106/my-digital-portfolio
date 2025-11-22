import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import heroMinimal from "@/assets/hero-minimal.jpg";
import { useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: x / 20, y: y / 20 });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container relative z-10 px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-light">
                Software Engineer
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter">
                Your Name
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl">
                Year 4 Computer Science Student crafting elegant digital experiences
              </p>
            </div>
            
            <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
              <Button 
                size="lg" 
                className="group relative overflow-hidden rounded-full px-8 font-light magnetic-hover"
                onMouseMove={handleMouseMove}
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
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
              >
                <Github className="h-4 w-4 mr-2" />
                View work
              </Button>
            </div>
            
            <div className="flex gap-6 justify-center lg:justify-start pt-8">
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

          {/* Right Content - Floating Image */}
          <div className="relative flex items-center justify-center">
            <div className="float-animation">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full blur-3xl" />
                <img
                  src={heroMinimal}
                  alt="Abstract design"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
