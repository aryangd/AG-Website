"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 bg-black/70 backdrop-blur-[0.5px]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mt-10">

        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-[0.3em] font-medium mb-6"
        >
        </motion.span>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-14 leading-[1.1] uppercase tracking-wide"
        >
          MY NAME IS ARYAN GOLLA,<br />GAME DESIGNER.
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: 0.2 }}
          className="text-zinc-300 text-[17px] md:text-lg font-light leading-loose mb-6 max-w-[900px]"
        >
          Specializing in <strong className="font-bold text-white">Game Systems Design</strong>, <strong className="font-bold text-white">Game Balancing</strong> and <strong className="font-bold text-white">LiveOps Design</strong>, focused on creating <strong className="font-bold text-white">engaging</strong>, <strong className="font-bold text-white">scalable</strong> player experiences. I have been working on different video games and tools in both <strong className="font-bold text-white">Unreal Engine</strong> and <strong className="font-bold text-white">Unity</strong>, Worked on <strong className="font-bold text-white">Global IP's</strong> like <strong className="font-bold text-white">WWE Mayhem</strong>, <strong className="font-bold text-white">WRB (World Robot Boxing)</strong> and <strong className="font-bold text-white">Meta Horizon Games</strong>.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: 0.3 }}
          className="text-zinc-300 text-[17px] md:text-lg font-light leading-loose mb-20 max-w-[900px]"
        >
          <strong className="font-bold text-white">Core gameplay systems</strong> that are both <strong className="font-bold text-white">Intuitive</strong> and <strong className="font-bold text-white">Deep</strong>, ensuring long-term player retention through thoughtful <strong className="font-bold text-white">Progression</strong>, <strong className="font-bold text-white">Economy design</strong>, and reward structures. My goal is to craft systems that not only entertain but evolve with the <strong className="font-bold text-white">community</strong>, driving both <strong className="font-bold text-white">player satisfaction</strong> and <strong className="font-bold text-white">game longevity</strong>.
        </motion.p>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <span className="text-zinc-300 md:text-lg font-light mb-8">Let's Connect</span>

          <a href="mailto:aryangollagd@gmail.com" className="group relative overflow-hidden flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white w-[220px] h-[56px] rounded-none hover:bg-white hover:text-black transition-colors duration-300">
            <Mail className="w-5 h-5 transition-colors duration-300" strokeWidth={1.5} />
            <span className="font-medium text-[15px]">Contact me!</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
