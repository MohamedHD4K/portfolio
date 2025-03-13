import About from "./components/AboutSection";
import Hero from "./components/HeroSection";
import Project from "./components/ProjectSection";
import Contact from "./components/ContactSection";
import Services from "./components/ServicesSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <div data-theme={theme ? "forest" : "dark"}>
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="relative z-10">
        <Navbar theme={theme} onClick={() => setTheme((prev) => !prev)} />
        <div className="flex gap-30 flex-col m-auto max-w-6xl">
          <Hero />
          <About />
          <Services />
          <Project />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
