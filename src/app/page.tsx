import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Blog from "@/components/sections/Blog";
import Footer from "@/components/sections/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen relative overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Blog />
      <Footer />
    </main>
  );
}
