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
    <main className="flex flex-col w-full min-h-screen relative overflow-hidden text-white">
      {/* Fixed background video for alternate sections */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Website%20v3.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay globally */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col w-full">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Footer />
      </div>
    </main>
  );
}
