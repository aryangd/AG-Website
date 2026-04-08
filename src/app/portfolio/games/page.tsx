"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const games = [
  {
    id: 1,
    title: "WWE Mayhem",
    year: "2023 - 2025",
    company: "Reliance Games",
    desc: "I am working with the Game Design team in order to define the core mechanics for the game.",
    bullets: [
      "Developing the game from conception to release.",
      "Designing core character mechanics.",
      "Game balance.",
      "Documentation and cooperation with the rest of departments."
    ],
    bgImg: "WWEMayhembg.jpg",
    embedId: "QYhZcwDgEaw", // Placeholder temtem trailer or similar
    align: "left"
  },
  {
    id: 2,
    title: "Vigor",
    year: "2022 - 2024",
    company: "Bohemia Interactive",
    desc: "Participated in the development of Vigor, a Third-Person Looter Shooter. Focusing on weapon mechanics, analytics, and multiplayer systems.",
    bullets: [
      "Weapon mechanics design and balance.",
      "Loot distribution and economy balancing.",
      "Analytics data parsing and design tweaks.",
      "Improving core gameplay loops."
    ],
    bgImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
    embedId: "Z6yX-J1r274",
    align: "right"
  },
  {
    id: 3,
    title: "Howl of Iron",
    year: "2021 - 2022",
    company: "16 Gears",
    desc: "This project stands out for being a Prove of Concept as a TFM of the Master's Degree in Game Design. A Third-Person combat game starring a Mechanical Werewolf.",
    bullets: [
      "Combat system design and prototyping.",
      "Enemy AI behavior trees.",
      "Level design and basic greyboxing.",
      "Player progression and tuning."
    ],
    bgImg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80",
    embedId: "J2j-9P8Y-lQ",
    align: "left"
  },
  {
    id: 4,
    title: "Into the Cave",
    year: "2020 - 2021",
    company: "Gold Pillow Games",
    desc: "An indie project focused on unique level design and core loops. Involved in system design and prototyping.",
    bullets: [
      "Core mechanic conceptualization.",
      "Puzzle and combat encounter design.",
      "Playtesting and iteration.",
      "UI/UX functional flows."
    ],
    bgImg: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=1920&q=80",
    embedId: "dQw4w9WgXcQ",
    align: "right"
  }
];

function GameSlide({ game }: { game: typeof games[0] }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-screen h-screen flex-shrink-0 snap-center relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={game.bgImg} alt={game.title} className="w-full h-full object-cover opacity-30 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-20 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="flex flex-col">
            <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none mb-2">
              {game.title}
            </h1>
            <h2 className="text-3xl text-zinc-300 font-light tracking-wide mb-6">
              {game.year}
            </h2>
          </div>

          <p className="text-zinc-200 text-lg leading-relaxed">
            The latest project from <strong className="font-bold text-white">{game.company}</strong>.
            <br /><br />
            {game.desc}
          </p>

          <ul className="list-disc list-inside text-zinc-300 flex flex-col gap-2 mt-4 ml-2">
            {game.bullets.map((b, i) => (
              <li key={i} className="text-[15px]">{b}</li>
            ))}
          </ul>
        </div>

        {/* Video Column */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[600px] aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 group cursor-pointer">
            {!isPlaying ? (
              <div
                className="absolute inset-0 flex items-center justify-center bg-zinc-900/50 hover:bg-black/20 transition-colors"
                onClick={() => setIsPlaying(true)}
              >
                <img src={`https://img.youtube.com/vi/${game.embedId}/maxresdefault.jpg`} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" alt="Video Thumbnail" />
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center z-10 group-hover:scale-110 group-hover:bg-[#0cdba0] transition-all duration-300">
                  <Play className="w-8 h-8 text-white ml-2 fill-white" />
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${game.embedId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default function GamesShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Monitor scroll to update pagination and handle wheel to horizontal
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollX = el.scrollLeft;
      const width = document.body.clientWidth;
      const index = Math.round(scrollX / width);
      setActiveIndex(index);
    };

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 0) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY * 1.5, behavior: "auto" });
      }
    };

    el.addEventListener("scroll", handleScroll);
    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("scroll", handleScroll);
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const width = document.body.clientWidth;
    scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col relative overflow-hidden font-sans">

      {/* Back Button */}
      <div className="absolute top-8 left-8 z-50 mix-blend-difference">
        <Link href="/portfolio">
          <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
            <ChevronLeft className="w-5 h-5" /> Back
          </button>
        </Link>
      </div>

      {/* Pagination Line on Left */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6 mix-blend-difference">
        {games.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${activeIndex === i ? 'bg-white text-black scale-110 shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'bg-transparent text-white border border-white/30 hover:border-white'}`}
          >
            {i + 1}
          </button>
        ))}
        {/* Connecting line visually behind */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/20 -z-10" />
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex h-screen w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide smooth-scroll"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
          .scrollbar-hide::-webkit-scrollbar { display: none; }
        `}} />

        {games.map((game, i) => (
          <GameSlide key={i} game={game} />
        ))}

      </div>
    </div>
  );
}
