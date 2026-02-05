import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Initialize AOS if needed
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 100,
        });
      });
    }
  }, []);

  return (
    <>
      <Preloader onComplete={() => setShowContent(true)} />
      {showContent && (
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
