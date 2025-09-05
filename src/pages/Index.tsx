import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">LG</span>
              </div>
              <span className="text-muted-foreground">
                © 2024 Lovish Garg. All rights reserved.
              </span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                Built with ❤️ using React, TypeScript & Tailwind CSS
              </p>
              <p className="text-primary text-sm font-medium">
                Passionate about AI • Ready for Innovation
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;