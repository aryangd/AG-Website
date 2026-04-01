"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <section id="home" className="h-screen w-full flex flex-col justify-center items-center relative gap-6 overflow-hidden">
      <motion.div
        style={{ opacity, scale }}
        className="w-full flex flex-col items-center justify-center gap-6 z-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-center px-4"
        >
          ARYAN GOLLA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-3xl md:text-4xl text-zinc-400 font-light"
        >
          Game Designer
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 flex flex-col items-center cursor-pointer z-10"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-[30px] h-[50px] border-2 border-white/60 rounded-full flex justify-center py-2 hover:border-white transition-opacity text-center items-start">
          <motion.div
            animate={{ y: [0, 16], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
            className="w-1.5 h-3 bg-[#00d8ff] rounded-full drop-shadow-[0_0_10px_rgba(0,216,255,1)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
