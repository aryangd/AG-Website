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
    { 
      title: "Project Downbelow", 
      company: "Crema", 
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      details1: "An upcoming project currently in development.",
      details2: "Contributing to core design and mechanics."
    },
    { 
      title: "Vigor", 
      company: "Bohemia Interactive", 
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      details1: "Participated in the development of <strong>Vigor</strong>, a Third-Person Looter Shooter.",
      details2: "Focusing on weapon mechanics, analytics, and multiplayer systems."
    },
    { 
      title: "Howl of Iron", 
      company: "16 Gears", 
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      details1: "This project stands out for being a <strong>Prove of Concept</strong> as a TFM of the Master's Degree in Game Design.",
      details2: "Howl of Iron is a <strong>Third-Person combat game</strong> starring a Mechanical Werewolf."
    },
    { 
      title: "Into the Cave", 
      company: "Gold Pillow Games", 
      img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80",
      details1: "An indie project focused on unique level design and core loops.",
      details2: "Involved in system design and prototyping."
    },
  ];

  return (
    <section id="projects" className="min-h-screen w-full flex items-center justify-center px-6 py-24 bg-black/70 backdrop-blur-sm">
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
            <button className="group relative overflow-hidden flex items-center justify-center mt-10 bg-white hover:bg-[#0cdba0] rounded-full transition-colors duration-500 w-[220px] h-[56px]">
              <div className="absolute inset-0 flex items-center justify-center gap-3 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                <Briefcase className="w-5 h-5 fill-black" stroke="none" /> 
                <span className="text-black text-[15px] font-bold">View Portfolio</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                <span className="text-white text-lg font-medium tracking-widest">GO</span>
              </div>
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
              className="group relative block bg-[#222725] rounded-lg overflow-hidden cursor-pointer h-[460px] shadow-lg"
            >
              {/* Full height image container */}
              <div className="absolute inset-0 z-0 bg-black">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img src={proj.img} alt={proj.title} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100" />
              </div>
              
              {/* Sliding Text Container */}
              <div className="absolute left-0 right-0 bottom-0 z-10 bg-[#222725] pt-6 px-6 transition-transform duration-500 ease-in-out translate-y-[calc(100%-90px)] group-hover:translate-y-0 flex flex-col rounded-t-lg md:rounded-t-none">
                <div className="h-[90px] flex flex-col justify-start">
                  <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-white transition-colors">{proj.title}</h3>
                  <span className="text-zinc-400 text-sm font-light mt-1">{proj.company}</span>
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col pb-8">
                  <div className="w-1/2 border-t border-dashed border-zinc-500 mb-4" />
                  <p 
                    className="text-zinc-300 text-[0.9rem] font-light mb-4 leading-relaxed [&>strong]:font-bold [&>strong]:text-white"
                    dangerouslySetInnerHTML={{ __html: proj.details1 }}
                  />
                  <p 
                    className="text-zinc-300 text-[0.9rem] font-light leading-relaxed [&>strong]:font-bold [&>strong]:text-white"
                    dangerouslySetInnerHTML={{ __html: proj.details2 }}
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
