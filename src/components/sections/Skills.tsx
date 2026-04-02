"use client";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="w-full flex flex-col pt-24 bg-transparent text-white transition-colors duration-500">
      
      {/* Master Section Header */}
      <div className="w-full max-w-[1400px] mx-auto px-6 mb-8 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase text-[#0cdba0] tracking-widest text-center">Skills</h2>
        <div className="w-24 h-[1px] bg-white mt-6" />
      </div>

      {/* Row 1: Technical Skills */}
      <div className="w-full flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
            alt="Gameplay screenshot" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Text Context */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-transparent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-[#0cdba0]">TECHNICAL SKILLS</h2>
            <div className="w-24 h-[1px] bg-white mt-6 mb-10" />

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
              {/* Col 1 */}
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-6 text-white">Software & Languages</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-zinc-300 font-light leading-relaxed">Blueprints Visual Scripting & C++</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-zinc-300 font-light leading-relaxed">Unity C# (HDRP & URP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-zinc-300 font-light leading-relaxed">Microsoft Office & Google Docs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-zinc-300 font-light leading-relaxed">Adobe Photoshop, Premiere & AE</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-zinc-300 font-light leading-relaxed">Visual Studio, Eclipse, Rider, VS Code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-zinc-300 font-light leading-relaxed">Excel & Spreadsheets</span>
                  </li>
                </ul>
              </div>

              {/* Col 2 */}
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-6 text-white">Engines</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-zinc-300 font-light leading-relaxed">Unreal Engine 4/5</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-zinc-300 font-light leading-relaxed">Unity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-zinc-300 font-light leading-relaxed mb-1 block">Other</span>
                  </li>
                  {/* Nested List */}
                  <ul className="pl-6 space-y-2 mt-[-8px]">
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-zinc-400 mt-2.5 flex-shrink-0" />
                      <span className="text-zinc-400 font-light italic leading-relaxed text-sm">GameMaker Studio</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-zinc-400 mt-2.5 flex-shrink-0" />
                      <span className="text-zinc-400 font-light italic leading-relaxed text-sm">Phaser 3</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-zinc-400 mt-2.5 flex-shrink-0" />
                      <span className="text-zinc-400 font-light italic leading-relaxed text-sm">Android Studio</span>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Row 2: Design Skills */}
      <div className="w-full flex flex-col lg:flex-row-reverse min-h-[600px]">
        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          <img 
            src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop" 
            alt="Keyboard workspace" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Left Side: Text Context */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-transparent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-[#0cdba0]">DESIGN SKILLS</h2>
            <div className="w-24 h-[1px] bg-white mt-6 mb-10" />

            <div className="flex flex-col max-w-[400px]">
              <h3 className="font-bold text-lg mb-6 text-white">Game Design</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span className="text-zinc-300 font-light leading-relaxed">Mechanics and gameplay design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span className="text-zinc-300 font-light leading-relaxed">Level design, dialogue systems, enemy encounters, and cinematics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span className="text-zinc-300 font-light leading-relaxed">Menu layout, design and implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span className="text-zinc-300 font-light leading-relaxed">Game Balance & Progression</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span className="text-zinc-300 font-light leading-relaxed">UX Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span className="text-zinc-300 font-light leading-relaxed">Combat systems</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
