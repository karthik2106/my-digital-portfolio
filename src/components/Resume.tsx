import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <section id="resume" className="relative bg-background">
      <ContainerScroll
        titleComponent={
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-foreground">
              My Resume
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Software Engineer specializing in full-stack development with experience in React, Python, and cloud technologies
            </p>
            <Button 
              size="lg" 
              className="rounded-full px-8 font-light"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>
        }
      >
        <iframe
          src="/resume.pdf"
          className="w-full h-full rounded-lg"
          title="Resume"
        />
      </ContainerScroll>
    </section>
  );
};

export default Resume;
