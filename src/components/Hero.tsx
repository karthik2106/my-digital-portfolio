import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      <div className="container relative z-10 px-4 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Year 4 Computer Science Student
        </p>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Aspiring Software Engineer passionate about building innovative solutions
          and creating impactful applications
        </p>
        
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Button size="lg" className="gap-2">
            <Mail className="h-5 w-5" />
            Contact Me
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="h-5 w-5" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
