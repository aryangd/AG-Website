"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const technical = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"];
  const design = ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "Webflow"];

  return (
    <section id="skills" className="min-h-screen w-full flex items-center justify-center px-6 py-24 bg-black">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-[#0cdba0] tracking-widest">Skills</h2>
          <div className="w-24 h-[2px] bg-white mt-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl font-bold text-white border-b border-zinc-800 pb-4">Technical Skills</h3>
            <ul className="flex flex-col gap-4">
              {technical.map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-xl text-zinc-400 font-light flex items-center gap-4"
                >
                  <span className="w-2 h-2 rounded-full bg-white block" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-3xl font-bold text-white border-b border-zinc-800 pb-4">Design Skills</h3>
            <ul className="flex flex-col gap-4">
              {design.map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-xl text-zinc-400 font-light flex items-center gap-4"
                >
                  <span className="w-2 h-2 rounded-full bg-white block" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
