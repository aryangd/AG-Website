"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 bg-black/70 backdrop-blur-sm">
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
          Specialized in <strong className="font-bold text-white">gameplay</strong> and <strong className="font-bold text-white">systems</strong>. Since 2017, I have been working on different video games and tools in both <strong className="font-bold text-white">Unreal Engine</strong> and <strong className="font-bold text-white">Unity</strong>, some of them launched in platforms like <strong className="font-bold text-white">UE Marketplace</strong>, <strong className="font-bold text-white">Google Play Store</strong> or <strong className="font-bold text-white">Steam</strong> and consoles such as <strong className="font-bold text-white">PlayStation</strong>, <strong className="font-bold text-white">Xbox</strong> and <strong className="font-bold text-white">Nintendo Switch</strong>, enhancing my skills as a <strong className="font-bold text-white">Game Designer</strong>.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: 0.3 }}
          className="text-zinc-300 text-[17px] md:text-lg font-light leading-loose mb-20 max-w-[900px]"
        >
          Nowadays, I am working at <strong className="font-bold text-white">Crema</strong> as a <strong className="font-bold text-white">Game Designer</strong> in charge of the <strong className="font-bold text-white">Combat Design</strong> for the next big project and also working at <strong className="font-bold text-white">U-tad</strong> as a <strong className="font-bold text-white">University Professor</strong> teaching the next generation of developers.
        </motion.p>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <span className="text-zinc-300 md:text-lg font-light mb-8">Are you interested in my work?</span>

          <a href="mailto:aryangollagd@gmail.com" className="group relative overflow-hidden flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white w-[220px] h-[56px] rounded-none hover:bg-white hover:text-black transition-colors duration-300">
            <Mail className="w-5 h-5 transition-colors duration-300" strokeWidth={1.5} />
            <span className="font-medium text-[15px]">Contact me!</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
