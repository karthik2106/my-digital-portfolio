import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactWords = [
    {
      text: "Let's",
    },
    {
      text: "work",
    },
    {
      text: "together",
    },
  ];

  return (
    <section id="contact" className="pt-32 pb-16 bg-background">
      <div
        ref={ref}
        className={`container px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Connect</p>
          <TypewriterEffect
            words={contactWords}
            className="text-5xl md:text-7xl font-light tracking-tighter mb-6"
            cursorClassName="bg-primary"
          />
          <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group rounded-full px-8 font-light text-base"
              onClick={() => window.location.href = 'mailto:karthikadharsh.work@gmail.com'}
            >
              <Mail className="h-4 w-4 mr-2" />
              karthikadharsh.work@gmail.com
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex gap-8 justify-center pt-8 border-t border-border/50">
            <a 
              href="https://github.com/karthik2106" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-light">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/karthik-adharsh-selvakumar-85ba5b230" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-light">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
