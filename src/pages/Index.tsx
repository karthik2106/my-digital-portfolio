import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-12 border-t border-border/50">
        <div className="container px-4 text-center">
          <p className="text-sm text-muted-foreground font-light">
            © 2024 Your Name. Designed with care.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
