import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* BackgroundPaths Component with Your Name */}
      <div className="absolute inset-0">
        <BackgroundPaths title="Your Name" />
      </div>

      {/* Additional Content Overlay */}
      <div className="container relative z-20 px-4 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
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
    </section>
  );
};

export default Hero;
