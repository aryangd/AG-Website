"use client";
import React, { useState } from "react";
import { ChevronLeft, FileText, Download } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const documents = [
  {
    id: 1,
    title: "Howl of Iron - Data-Driven Character System",
    shortTitle: "Data-Driven Character System",
    description: "Detailed system design for character scaling and data management in Howl of Iron.",
    bgColor: "bg-[#1e40af]",
    hexColor: "#1e40af",
    accentColor: "border-blue-400",
    image: "/Png1.png",
    pdfUrl: "/docs/5-Character-System-Design.pdf"
  },
  {
    id: 2,
    title: "Howl of Iron - Data-Driven Character System",
    shortTitle: "Data-Driven Character System",
    description: "Read how the Data-Driven system I designed for Howl of Iron would work through Excel-based datasets.",
    bgColor: "bg-[#059669]",
    hexColor: "#059669",
    accentColor: "border-emerald-400",
    image: "/PNG2.png",
    pdfUrl: "/docs/excel_system.pdf",
    isRecommended: true
  },
  {
    id: 3,
    title: "Howl of Iron - Gameplay Design",
    shortTitle: "Gameplay Design",
    description: "Core gameplay mechanics and combat system documentation for the mechanical werewolf project.",
    bgColor: "bg-[#c2410c]",
    hexColor: "#c2410c",
    accentColor: "border-orange-400",
    image: "/mechanical_werewolf_game_art.png",
    pdfUrl: "/docs/gameplay_design.pdf"
  }
];

function DocCard({ doc, isHovered, onHover, onLeave }: {
  doc: typeof documents[0],
  isHovered: boolean,
  onHover: () => void,
  onLeave: () => void
}) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isHovered ? 1.05 : 1,
        zIndex: isHovered ? 20 : 10
      }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="relative w-full aspect-[1/1.2] rounded-xl overflow-hidden cursor-pointer group shadow-3xl border border-white/5"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={doc.image}
          alt={doc.title}
          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-60'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Main Game Logo Overlay */}
      <div className="absolute inset-x-0 top-1/4 flex items-center justify-center p-8 z-10 pointer-events-none">
        <div className="text-center group-hover:scale-105 transition-transform duration-500">
          <h2 className="text-white font-black text-5xl tracking-widest opacity-80 flex flex-col items-center">
            <span className="text-sm tracking-[0.5em] mb-4">A GAME BY 16 GEARS</span>
            HOWL OF IRON
          </h2>
        </div>
      </div>

      {/* Bottom Color Footer & Content */}
      <motion.div
        animate={{
          height: isHovered ? "45%" : "20%",
        }}
        className="absolute inset-x-0 bottom-0 z-20 overflow-hidden flex flex-col"
      >
        <motion.div
          animate={{
            backgroundColor: isHovered ? "rgba(0,0,0,0.95)" : doc.hexColor
          }}
          className="absolute inset-0 z-0"
        />

        <div className={`flex-1 p-6 relative flex flex-col ${isHovered ? '' : 'justify-center border-t border-white/10'}`}>
          <div className="relative z-10">
            <h3 className={`text-white transition-all duration-300 ${isHovered ? 'text-3xl font-bold mb-4' : 'text-[22px] font-bold'} tracking-tight leading-tight`}>
              {doc.title}
            </h3>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-white/90 text-sm mb-6 leading-relaxed font-medium">
                    {doc.description}
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href={doc.pdfUrl}
                      target="_blank"
                      className="bg-white text-black px-10 py-3 rounded-full flex items-center gap-3 font-medium text-xs uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                    >
                      <FileText className="w-5 h-5" />
                      READ
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Edge Glow */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          boxShadow: isHovered ? `inset 0 0 40px rgba(255,255,255,0.1), 0 0 30px ${doc.bgColor.includes('blue') ? 'rgba(59,130,246,0.3)' : doc.bgColor.includes('emerald') ? 'rgba(16,185,129,0.3)' : 'rgba(234,88,12,0.3)'}` : 'none'
        }}
        className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none z-30"
      />
    </motion.div>
  );
}

export default function GameDocsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="min-h-screen w-full bg-transparent text-white flex flex-col items-center pt-20 px-8 pb-32 font-sans overflow-x-hidden relative">

      {/* Fixed background video (Same as Home) */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-40">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/website-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Subtle Background Glows (Layered over video) */}
      <div className="fixed inset-0 pointer-events-none z-1">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[150px]" />
      </div>

      {/* Back Button (Fixed relative to main to avoid snapping) */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/portfolio">
          <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
            <ChevronLeft className="w-5 h-5" /> Back
          </button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        className="w-full flex flex-col items-center z-10"
      >
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 mb-20">
          <h1 className="text-4xl md:text-5xl font-black tracking-[0.2em] text-center uppercase">
            DESIGN DOCS & ANALYSIS
          </h1>
          <div className="w-24 h-0.5 bg-white/20" />
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-[1400px]">
          {documents.map((doc) => (
            <DocCard
              key={doc.id}
              doc={doc}
              isHovered={hoveredId === doc.id}
              onHover={() => setHoveredId(doc.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </motion.div>
    </main>
  );
}
