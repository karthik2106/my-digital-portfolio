import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20">
      <div 
        ref={ref}
        className={`container px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        
        <Card className="max-w-2xl mx-auto border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Let's Connect</CardTitle>
            <CardDescription>
              Choose your preferred way to contact me
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full justify-start gap-4 h-auto py-4"
              onClick={() => window.location.href = 'mailto:your.email@example.com'}
            >
              <Mail className="h-6 w-6 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Email</div>
                <div className="text-sm text-muted-foreground">your.email@example.com</div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full justify-start gap-4 h-auto py-4"
              onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
            >
              <Linkedin className="h-6 w-6 text-primary" />
              <div className="text-left">
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm text-muted-foreground">Connect with me professionally</div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full justify-start gap-4 h-auto py-4"
              onClick={() => window.open('https://github.com/yourusername', '_blank')}
            >
              <Github className="h-6 w-6 text-primary" />
              <div className="text-left">
                <div className="font-semibold">GitHub</div>
                <div className="text-sm text-muted-foreground">Check out my code repositories</div>
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
