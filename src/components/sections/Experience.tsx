"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Info, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useLenis } from "lenis/react";

export default function Experience() {
  const experiences = [
    {
      role: "Game Designer",
      company: "Crema",
      duration: "2024 - Present",
      desc: [
        "Working with the developers of Temtem in a new project from conception to the release.",
        "Specialized in Combat & AI."
      ],
      side: "right" as const,
      details: {
        intro: "Working with the developers of Temtem in a new project from conception to the release.",
        bullets1: [],
        bullets: [
          "Specialized in Combat & AI.",
          "System design and implementation.",
          "Prototyping new mechanics and driving character iteration."
        ]
      }
    },
    {
      role: "Technical Designer",
      company: "Bohemia Interactive",
      duration: "2023 - 2024",
      desc: [
        "Worked with the developers of DayZ and Arma.",
        "Developed Vigor, a Third-Person Looter Shooter for PS, Xbox One Series S/X and Nintendo Switch."
      ],
      side: "left" as const,
      details: {
        intro: "Worked with the developers of DayZ and Arma franchise.",
        bullets1: [
          "Game Developed: Vigor",
          "Available on: PS4/5, Xbox One Series S/X, Nintendo Switch, Steam"
        ],
        bullets: [
          "Worked with Unreal Engine upgrading multiplayer systems.",
          "Testing & Analytics.",
          "Data gathering for weapon analytics: Spread, recoil, damage, bullet drop, damage falloff, etc.",
          "Test maps & tools: Shooting ranges, obstacle courses, etc.",
          "Prototyped new map events.",
          "Added new UI elements: Rewards screen, Lobby, Crosshair Configuration, etc.",
          "Prototyped new game modes and gameplay mechanics.",
          "Designed & implemented seven premium packs (preview scenes and menus).",
          "Weapons & Items design + implementation through data-driven systems.",
          "Shooting range visual icons implementation.",
          "System documentation.",
          "Communication between design team and programming department.",
          "Tools for Level Designers.",
          "Onboarding and supervising new colleagues in the design department.",
          "Materials and VFX fixes and optimization for the UI, weapons and items.",
          "Utility widgets to streamline the team's workflow.",
          "PC Port: Fixes and Implementations.",
          "Bug fixing & Optimization."
        ]
      }
    },
    {
      role: "Tools Development for UE & Unity",
      company: "UF Marketplace",
      duration: "2022 - Present",
      desc: [
        "Releasing assets and plugins for the Unreal Engine Marketplace and Unity Asset Store using C++, C# and Blueprints Visual Scripting."
      ],
      side: "right" as const,
      details: {
        intro: "Releasing assets and plugins for the Unreal Engine Marketplace and Unity Asset Store.",
        bullets1: [],
        bullets: [
          "C++, C# and Blueprints Visual Scripting.",
          "Marketplace asset maintenance.",
          "Community support and continuous deployment."
        ]
      }
    }
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);
  const [selectedExp, setSelectedExp] = useState<number | null>(null);
  const lenis = useLenis();

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedExp !== null) {
      document.body.style.overflow = "hidden";
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = "auto";
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = "auto";
      if (lenis) lenis.start();
    };
  }, [selectedExp, lenis]);

  return (
    <section id="experience" className="min-h-screen w-full flex flex-col justify-center px-6 py-24 bg-transparent">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-[#0cdba0] tracking-widest text-center">My Backstory</h2>
          <div className="w-32 h-[2px] bg-white mt-6" />
        </div>

        <div ref={ref} className="relative w-full flex flex-col">
          {/* Main vertical line background */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/20 md:-translate-x-1/2" />

          {/* Animated vertical line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-white md:-translate-x-1/2 origin-top"
          />

          <div className="flex flex-col gap-24 md:gap-32 w-full py-24">
            {experiences.map((exp, i) => (
              <div key={i} className={`relative flex w-full flex-col md:flex-row items-start md:items-center ${exp.side === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
                {/* Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 mt-2 md:mt-0 z-10"
                />

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`w-full md:w-1/2 pl-16 md:pl-0 ${exp.side === 'left' ? 'md:pr-16 md:text-right flex flex-col md:items-end' : 'md:pl-16 md:text-left flex flex-col md:items-start'}`}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-zinc-400 mb-6 font-light">{exp.company} ({exp.duration})</p>

                  <div className={`flex flex-col gap-4 text-zinc-300 mb-8 ${exp.side === 'left' ? 'md:items-end' : 'md:items-start'}`}>
                    {exp.desc.map((p, j) => <p key={j} className="max-w-md">{p}</p>)}
                  </div>

                  <button
                    onClick={() => setSelectedExp(i)}
                    className="flex items-center gap-3 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold tracking-widest hover:bg-zinc-200 transition-colors"
                  >
                    <Info className="w-5 h-5" fill="black" stroke="white" /> VIEW DETAILS
                  </button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedExp !== null && (
          <div className="fixed inset-0 z-[100]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            <div className="absolute inset-0 overflow-y-auto px-4 py-8 sm:px-6 sm:py-16">
              <div className="min-h-full flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl p-6 sm:p-10 z-10 flex flex-col pointer-events-auto"
                >
                  <button
                    onClick={() => setSelectedExp(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-[#333] hover:bg-black transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>

                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 pr-10">
                    {experiences[selectedExp].role} at {experiences[selectedExp].company}
                  </h2>

                  <div className="w-full border-b border-dashed border-zinc-400 mb-8" />

                  <div className="text-zinc-800 text-base md:text-[0.95rem] flex flex-col gap-4">
                    <p>{experiences[selectedExp].details.intro}</p>

                    {experiences[selectedExp].details.bullets1.length > 0 && (
                      <ul className="list-disc pl-6 flex flex-col gap-2">
                        {experiences[selectedExp].details.bullets1.map((b, idx) => (
                          <li key={idx} dangerouslySetInnerHTML={{ __html: b.replace(/(Game Developed:|Available on:)/g, '<strong>$1</strong>') }} />
                        ))}
                      </ul>
                    )}

                    <h4 className="font-bold text-black text-xl mt-4">Details</h4>
                    <ul className="list-disc pl-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 marker:text-zinc-400">
                      {experiences[selectedExp].details.bullets.map((b, idx) => {
                        const highlightWords = ["multiplayer systems.", "Analytics.", "Data gathering", "Test maps & tools:", "new map events.", "new UI elements:", "new game modes", "gameplay mechanics.", "seven premium packs", "Weapons & Items design", "implementation", "visual icons implementation.", "documentation.", "Communication", "Tools", "Onboarding", "supervising new colleagues", "optimization for the UI,", "Utility widgets", "PC Port:", "fixing & Optimization."];
                        let formatted = b;
                        highlightWords.forEach(w => {
                          if (formatted.includes(w)) {
                            formatted = formatted.split(w).join(`<strong>${w}</strong>`);
                          }
                        });
                        return <li key={idx} dangerouslySetInnerHTML={{ __html: formatted }} />;
                      })}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
