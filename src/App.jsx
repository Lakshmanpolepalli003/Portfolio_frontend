import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import SectionDivider from "./components/SectionDivider";

import Hero from "./sections/Hero";
import About from "./sections/About";
import SkillsMarquee from "./components/SkillsMarquee";
import Projects from "./sections/Projects";
import Gallery from "./sections/Gallery";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import WhatsAppWidget from "./components/WhatsAppWidget";
import LoadingScreen from "./components/LoadingScreen";

import "./App.css";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app ${theme}`}>
      <LoadingScreen />
      <ParticleBackground />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero theme={theme} toggleTheme={toggleTheme} />
        <SectionDivider />

        <About theme={theme} />
        <SectionDivider />

        <SkillsMarquee theme={theme} />
        <SectionDivider />

        <Projects theme={theme} />
        <SectionDivider />

        <Gallery theme={theme} />
        <SectionDivider />

        <Skills theme={theme} />
        <SectionDivider />

        <Resume theme={theme} />
        <SectionDivider />
        {/* 
        <Blog theme={theme} />
        <SectionDivider /> */}

        <Contact theme={theme} />
      </main>

      <Footer theme={theme} />
      <WhatsAppWidget />
    </div>
  );
}
