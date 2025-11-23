import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import profilePic from "@/assets/ProfilePic.jpeg";
import { useState, useEffect, useRef } from "react";
import { TextScramble } from "@/components/ui/text-scramble";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: x / 20, y: y / 20 });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggerAnimation((prev) => !prev);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative flex items-center justify-center overflow-hidden bg-background pt-32">
      <div className="container relative z-10 px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-light">
                Software Engineer
              </p>
              <TextScramble
                as="h1"
                className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter"
                duration={1.2}
                speed={0.05}
                trigger={triggerAnimation}
              >
                Karthik Adharsh
              </TextScramble>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl">
                Year 4 Computer Engineering @ NTU
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
                onClick={() => window.location.href = 'mailto:karthikadharsh.work@gmail.com'}
              >
                <Mail className="h-4 w-4 mr-2" />
                Get in touch
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="rounded-full px-6 font-light hover:bg-muted"
                onClick={() => window.open('https://github.com/karthik2106', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                View work
              </Button>
            </div>
            
            <div className="flex gap-6 justify-center lg:justify-start pt-8">
              <a 
                href="https://github.com/karthik2106" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/karthik-adharsh-selvakumar-85ba5b230" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:karthikadharsh.work@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Floating Image */}
          <div className="relative flex items-center justify-center">
            <div className="float-animation">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full blur-3xl" />
                <img
                  src={profilePic}
                  alt="Karthik Adharsh"
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
