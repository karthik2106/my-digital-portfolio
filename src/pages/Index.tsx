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
      
      <footer className="bg-muted py-8 text-center">
        <div className="container px-4">
          <p className="text-muted-foreground">
            © 2024 Your Name. Built with passion and code.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
