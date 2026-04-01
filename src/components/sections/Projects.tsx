"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Briefcase } from "lucide-react";
import Link from "next/link";

// Custom hook to create a typing effect that infinitely cycles through a given array of words
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timeout = setTimeout(() => setText(currentWord.substring(0, text.length - 1)), 50);
      }
    } else {
      if (text === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), 2500); // Wait longer before deleting
      } else {
        timeout = setTimeout(() => setText(currentWord.substring(0, text.length + 1)), 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return text;
}

export default function Projects() {
  const typewrittenText = useTypewriter(["Experience", "Work"]);

  const projects = [
    { title: "Project Downbelow", company: "Crema", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80" },
    { title: "Vigor", company: "Bohemia Interactive", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
    { title: "Howl of Iron", company: "16 Gears", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" },
    { title: "Into the Cave", company: "Gold Pillow Games", img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80" },
  ];

  return (
    <section id="projects" className="min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between items-start">

        {/* Left Side: Title & Description */}
        <div className="w-full lg:w-[40%] flex flex-col items-start sticky top-32">
          <h2 className="text-6xl md:text-7xl xl:text-[5.5rem] font-black text-white tracking-tight mb-2 leading-tight">
            My <br />
            <span className="text-[#0cdba0]">{typewrittenText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-[#0cdba0] font-light"
            >
              |
            </motion.span>
          </h2>

          <p className="text-zinc-300 mt-6 text-lg md:text-xl font-light leading-relaxed max-w-md">
            Check out the games I have worked on!
          </p>

          <Link href="/portfolio">
            <button className="mt-10 flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors">
              <Briefcase className="w-5 h-5 fill-black" stroke="none" /> View Portfolio
            </button>
          </Link>
        </div>

        {/* Right Side: Grid of Projects */}
        <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group flex flex-col gap-4 bg-[#111111] rounded-lg overflow-hidden pb-6 hover:bg-[#1a1a1a] transition-colors cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <img src={proj.img} alt={proj.title} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
              </div>
              <div className="flex flex-col gap-1 px-6 mt-1">
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#0cdba0] transition-colors">{proj.title}</h3>
                <span className="text-zinc-500 text-sm font-light">{proj.company}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
