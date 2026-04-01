"use client";
import { motion } from "framer-motion";

export default function About() {
  const text = "I build interactive, minimal, and highly performant web experiences with a strong focus on design and animations.";
  const words = text.split(" ");

  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-[#0cdba0] tracking-widest">About</h2>
          <div className="w-24 h-[2px] bg-white mt-6" />
        </div>
        <div className="text-3xl md:text-5xl leading-tight font-medium text-zinc-100 flex flex-wrap gap-x-3 gap-y-2">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
