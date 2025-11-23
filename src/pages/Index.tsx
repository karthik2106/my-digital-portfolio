import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Resume />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-12 border-t border-border/50">
        <div className="container px-4 text-center">
          <p className="text-sm text-muted-foreground font-light">
            © 2024 Karthik Adharsh. Designed with care.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
