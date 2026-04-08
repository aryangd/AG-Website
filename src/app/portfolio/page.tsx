"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { MousePointer2, ChevronLeft, Gamepad2, Play, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const prefix = process.env.NODE_ENV === "production" ? "/AG-Website" : "";

// -------------------------------------------------------------
// GRID CATEGORY CARDS
// -------------------------------------------------------------
const categoryCards = [
  {
    id: "games",
    title: "Games",
    color: "#22c55e",
    colorClass: "bg-emerald-500/90",
    shadowClass: "hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]",
    desc: "Check out the games I have worked on.",
    img: `${prefix}/fantasy-anime-style-scene.jpg`
  },
  {
    id: "docs",
    title: "Design Docs & Analysis",
    color: "#ea580c",
    colorClass: "bg-orange-600/90",
    shadowClass: "hover:shadow-[0_0_50px_rgba(234,88,12,0.5)]",
    desc: "Read the design documents along with the analysis of other games.",
    img: "https://itchronicles.com/wp-content/uploads/2021/04/Optimized-Illustration-from-Adobe-Stock-for-ITC-Post-on-AI-in-Game-Development-scaled.jpeg"
  },
  {
    id: "assets",
    title: "Marketplace Assets",
    color: "#6366f1",
    colorClass: "bg-indigo-500/90",
    shadowClass: "hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]",
    desc: "Explore my released assets, tools, and visual scripting blueprints.",
    img: "https://cdn2.unrealengine.com/unreal-engine-free-marketplace-june-2022-share-1200x630-83f303d175a8.jpeg",
    comingSoon: true
  }
];

// -------------------------------------------------------------
// GAMES DATA (For the Horizontal Showcase)
// -------------------------------------------------------------
const gamesData = [
  {
    id: 1,
    title: "WWE Mayhem",
    year: "2023-2025",
    company: "Reliance Games",
    desc: "I am working with the Game Design team in order to define the core mechanics for the game.",
    bullets: [
      "Developing the game from conception to release.",
      "Designing core character mechanics.",
      "Game balance.",
      "Documentation and cooperation with the rest of departments."
    ],
    bgImg: "WWEMayhembg.jpg",
    embedId: "zJG-n22OC5w",
    overlayImg: `${prefix}/JohnCena.png`
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
    overlayImg: `${prefix}/PNG2.png`
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
    overlayImg: `${prefix}/png3.png`
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
    overlayImg: `${prefix}/png4.png`
  }
];

const docsData = [
  {
    id: 1,
    gameName: "WWE MAYHEM",
    developer: "RELIANCE GAMES",
    title: "WWE Mayhem - Character Design",
    description: "Detailed system design for character scaling and data management in WWE Mayhem.",
    hexColor: "30, 64, 175", // RGB Blue
    image: `${prefix}/WWEMayhembg.jpg`,
    pdfUrl: "/docs/5-game-design-theory-and-practice.pdf"
  },
  {
    id: 2,
    gameName: "HOWL OF IRON",
    developer: "16 GEARS",
    title: "Howl of Iron - Data-Driven Character System «EXCEL»",
    description: "Read how the Data-Driven system I designed for Howl of Iron would work through Excel-based datasets.",
    hexColor: "5, 150, 105", // RGB Green
    image: `${prefix}/PNG2.png`,
    pdfUrl: "/docs/excel_system.pdf"
  },
  {
    id: 3,
    gameName: "HOWL OF IRON",
    developer: "16 GEARS",
    title: "Howl of Iron - Gameplay Design",
    description: "Core gameplay mechanics and combat system documentation for the mechanical werewolf project.",
    hexColor: "194, 65, 12", // RGB Orange
    image: `${prefix}/mechanical_werewolf_game_art.png`,
    pdfUrl: "/docs/gameplay_design.pdf"
  },
  {
    id: 4,
    gameName: "THE MASTER THIEF",
    developer: "INDEPENDENT",
    title: "The Master Thief - Level Design & Narrative",
    description: "In-depth analysis of stealth encounters and spatial storytelling within industrial environments.",
    hexColor: "147, 51, 234", // RGB Purple
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80",
    pdfUrl: "/docs/level_design.pdf"
  },
  {
    id: 5,
    gameName: "SCI-FI FPS",
    developer: "INDEPENDENT",
    title: "Sci-Fi FPS - Combat & AI Analysis",
    description: "An evaluation of tactical AI behaviors and weapon feedback loop design for futuristic shooters.",
    hexColor: "225, 29, 72", // RGB Pink/Red
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    pdfUrl: "/docs/combat_analysis.pdf"
  }
];

// -------------------------------------------------------------
// COMPONENTS
// -------------------------------------------------------------

function TiltCard({ card, onClick }: { card: typeof categoryCards[0], onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`group relative w-full aspect-[3/4] rounded-lg overflow-hidden cursor-pointer transition-shadow duration-500 ${card.shadowClass}`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      {(card as any).comingSoon && (
        <div className="absolute top-5 right-5 z-20 bg-black/70 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 shadow-xl">
          <span className="text-xs font-normal text-white uppercase tracking-[0.2em]">Coming Soon</span>
        </div>
      )}

      <div className={`absolute bottom-0 w-full px-5 py-4 md:px-6 md:py-5 z-10 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${card.colorClass}`}>
        <h3 className="text-white text-[26px] md:text-3xl font-bold tracking-tight leading-tight transform group-hover:-translate-y-1 transition-transform duration-500">
          {card.title}
        </h3>

        <div className="max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 delay-[50ms] overflow-hidden">
          <div className="flex flex-col gap-4 pt-4">
            <p className="text-white/95 text-[15px] leading-relaxed font-medium">
              {card.desc}
            </p>
            <MousePointer2 className="w-5 h-5 text-white animate-bounce" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TypewriterStatic({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isDeleting) {
      if (displayed === "") setIsDeleting(false);
      else timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
    } else {
      if (displayed === text) timer = setTimeout(() => setIsDeleting(true), 2500);
      else timer = setTimeout(() => setDisplayed(text.substring(0, displayed.length + 1)), 100);
    }
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, text]);

  return (
    <span className="tracking-[0.3em] font-medium text-white/80">
      {displayed}
      <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-white ml-1">|</motion.span>
    </span>
  );
}

function GameSlide({ game }: { game: typeof gamesData[0] }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-screen h-screen flex-shrink-0 relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={game.bgImg} alt={game.title} className="w-full h-full object-cover opacity-[0.15] scale-105 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04080f] via-transparent to-[#04080f]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-10 md:px-20 flex flex-col md:flex-row items-start justify-between gap-12 -translate-y-16">
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-2 drop-shadow-lg">{game.title}</h1>
            <h2 className="text-2xl md:text-3xl text-zinc-400 font-light tracking-wide mb-6">{game.year}</h2>
          </div>
          <p className="text-zinc-200 text-lg leading-relaxed drop-shadow-md">
            The latest project from <strong className="font-bold text-white">{game.company}</strong>.<br /><br />
            {game.desc}
          </p>
          <ul className="list-disc list-inside text-zinc-300 flex flex-col gap-2 mt-4 ml-2">
            {game.bullets.map((b, i) => <li key={i} className="text-[15px]">{b}</li>)}
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="absolute top-[210px] right-[-150px] w-[400px] h-[500px] z-20 pointer-events-none hidden lg:block">
            <img src={game.overlayImg} alt={`${game.title} Character Overlay`} className="w-full h-full object-contain opacity-100" />
          </div>
          <div className="relative w-full max-w-[1000px] aspect-video bg-black/50 rounded-lg overflow-hidden shadow-2xl border border-white/10 group cursor-pointer z-10">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50 hover:bg-black/20 transition-colors" onClick={() => setIsPlaying(true)}>
                <img src={`https://img.youtube.com/vi/${game.embedId}/maxresdefault.jpg`} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" alt="Video Thumbnail" />
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center z-10 group-hover:scale-110 group-hover:bg-[#0cdba0] transition-all duration-300">
                  <Play className="w-8 h-8 text-white ml-2 fill-white" />
                </div>
              </div>
            ) : (
              <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${game.embedId}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DocCard({ doc, isHovered, onHover, onLeave }: { doc: typeof docsData[0], isHovered: boolean, onHover: () => void, onLeave: () => void }) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, scale: isHovered ? 1.05 : 1, zIndex: isHovered ? 20 : 10 }}
      transition={{ duration: 0.4 }}
      className="relative w-full aspect-[1/1.2] rounded-xl overflow-hidden cursor-pointer group shadow-2xl border border-white/5 bg-black/40"
    >
      <div className="absolute inset-0 z-0">
        <img src={doc.image} alt={doc.title} className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-60'}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>
      <div className="absolute inset-x-0 top-1/4 flex items-center justify-center p-8 z-10 pointer-events-none">
        <div className="text-center group-hover:scale-105 transition-transform duration-500">
          <h2 className="text-white font-black text-5xl tracking-widest opacity-80 flex flex-col items-center uppercase">
            <span className="text-xs tracking-[0.5em] mb-4">A GAME BY {(doc as any).developer}</span>
            {(doc as any).gameName}
          </h2>
        </div>
      </div>
      <motion.div animate={{ height: isHovered ? "50%" : "25%" }} className="absolute inset-x-0 bottom-0 z-20 overflow-hidden flex flex-col">
        <motion.div animate={{ backgroundColor: isHovered ? "rgba(0,0,0,0.95)" : `rgba(${doc.hexColor}, 0.4)` }} className="absolute inset-0 z-0 backdrop-blur-sm" />
        <div className={`flex-1 p-6 relative flex flex-col ${isHovered ? '' : 'justify-center border-t border-white/10'}`}>
          <div className="relative z-10">
            <h3 className={`text-white transition-all duration-300 ${isHovered ? 'text-2xl font-bold mb-4' : 'text-lg font-bold'} tracking-tight leading-tight uppercase`}>{doc.title}</h3>
            <AnimatePresence>
              {isHovered && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ delay: 0.1 }}>
                  <p className="text-white/90 text-sm mb-6 leading-relaxed font-medium">{doc.description}</p>
                  <div className="flex items-center justify-center">
                    <Link
                      href={doc.pdfUrl}
                      target="_blank"
                      className="group/btn relative overflow-hidden flex items-center justify-center bg-white hover:bg-[#0cdba0] rounded-full transition-colors duration-500 w-[220px] h-[56px] shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                    >
                      <div className="absolute inset-0 flex items-center justify-center gap-3 transition-transform duration-500 ease-in-out group-hover/btn:-translate-y-full">
                        <FileText className="w-5 h-5 text-black" />
                        <span className="text-black text-[15px] font-bold uppercase tracking-wider">READ</span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-in-out group-hover/btn:translate-y-0">
                        <ArrowRight className="w-8 h-8 text-white" />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// -------------------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------------------
export default function PortfolioPage() {
  const router = useRouter();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Horizontal scroll state
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredDocId, setHoveredDocId] = useState<number | null>(null);
  const docsScrollRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight } = currentTarget;
    mouseX.set((clientX / clientWidth) - 0.5);
    mouseY.set((clientY / clientHeight) - 0.5);
  }

  const parallaxX = useTransform(mouseX, [-0.5, 0.5], [60, -60]);
  const parallaxY = useTransform(mouseY, [-0.5, 0.5], [60, -60]);

  // Handle horizontal scrolling and wheel logic
  useEffect(() => {
    if (activeCategory !== 'games' && activeCategory !== 'docs') return;

    const el = activeCategory === 'games' ? scrollRef.current : docsScrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (activeCategory === 'games') {
        const scrollX = el.scrollLeft;
        const width = document.body.clientWidth;
        const index = Math.round(scrollX / width);
        setActiveIndex(index);
      }
    };

    let targetPos = activeCategory === 'games' ? el.scrollLeft : el.scrollTop;
    let isScrolling = false;

    const renderSmoothScroll = () => {
      if (!el) return;
      if (activeCategory === 'games') {
        el.scrollLeft += (targetPos - el.scrollLeft) * 0.1;
      } else {
        el.scrollTop += (targetPos - el.scrollTop) * 0.15;
      }

      const currentPos = activeCategory === 'games' ? el.scrollLeft : el.scrollTop;
      if (Math.abs(targetPos - currentPos) > 1) {
        requestAnimationFrame(renderSmoothScroll);
      } else {
        isScrolling = false;
        if (activeCategory === 'games') el.scrollLeft = targetPos;
        else el.scrollTop = targetPos;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = activeCategory === 'games'
        ? (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY)
        : e.deltaY;

      if (!isScrolling) {
        targetPos = activeCategory === 'games' ? el.scrollLeft : el.scrollTop;
      }

      targetPos += delta * 1.5;
      const maxScroll = activeCategory === 'games' ? el.scrollWidth - el.clientWidth : el.scrollHeight - el.clientHeight;
      targetPos = Math.max(0, Math.min(targetPos, maxScroll));

      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(renderSmoothScroll);
      }
    };

    if (activeCategory === 'games') el.addEventListener("scroll", handleScroll);
    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      if (activeCategory === 'games') el.removeEventListener("scroll", handleScroll);
      el.removeEventListener("wheel", handleWheel);
    };
  }, [activeCategory]);

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const width = document.body.clientWidth;
    scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
  };

  return (
    <div onMouseMove={handleMouseMove} className="min-h-screen w-full bg-transparent flex flex-col relative overflow-hidden font-sans">

      {/* Dynamic atmospheric video background (same as home) */}
      <div className={`fixed inset-0 w-full h-full z-0 pointer-events-none transition-opacity duration-1000 ${activeCategory === 'games' ? 'opacity-0' : 'opacity-40'}`}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={`${prefix}/website-bg.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Base Portfolio Elements (only visible when NO category is active) */}
      <AnimatePresence>
        {!activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 flex flex-col"
          >
            {/* Navigation aid */}
            <div className="absolute top-8 left-8 z-50">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
            </div>

            {/* Huge Vertical Portfolio Text */}
            <div className="absolute left-8 lg:left-14 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0 hidden lg:block">
              <motion.div
                style={{ x: parallaxX, y: parallaxY }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                className="flex flex-col items-center gap-0"
              >
                {"PORTFOLIO".split('').map((char, i) => (
                  <span key={i} className="text-[65px] xl:text-[85px] font-black text-white/[0.04] leading-[0.85]">
                    {char}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Massive Gaming Controller Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0 hidden md:block">
              <motion.div
                style={{ x: parallaxX, y: parallaxY }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
              >
                <Gamepad2 className="w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] text-white/[0.08] -rotate-12" strokeWidth={1} />
              </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="flex-1 flex flex-col justify-center items-center px-6 lg:px-32 py-20 w-full max-w-[1600px] mx-auto z-10 pointer-events-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full place-items-center pointer-events-auto">
                {categoryCards.map((card, i) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 + 0.3, duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-sm"
                    style={{ perspective: 1000 }}
                  >
                    <TiltCard card={card} onClick={() => {
                      if (card.id === 'games') setActiveCategory('games');
                      if (card.id === 'docs') setActiveCategory('docs');
                    }} />
                  </motion.div>
                ))}
              </div>

              {/* Typing category text below */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-24 uppercase text-sm pointer-events-auto"
              >
                <TypewriterStatic text="MY WORK" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GAMES SHOWCASE (Visible when activeCategory is 'games') */}
      <AnimatePresence>
        {activeCategory === 'games' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 z-50 bg-black"
          >
            {/* Back Button */}
            <div className="absolute top-8 left-8 z-50">
              <button
                onClick={() => setActiveCategory(null)}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold"
              >
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
            </div>

            {/* Pagination Line on Bottom */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 mix-blend-difference hidden md:flex">
              {/* Connecting line visually behind */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/20 -z-10" />
              {gamesData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 relative z-10 ${activeIndex === i ? 'bg-white text-black scale-110 shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'bg-[#04080f] text-white border border-white/30 hover:border-white'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Horizontal Scroll Container */}
            <div
              ref={scrollRef}
              className="flex h-screen w-full overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style dangerouslySetInnerHTML={{
                __html: `
                .scrollbar-hide::-webkit-scrollbar { display: none; }
              `}} />

              {gamesData.map((game) => (
                <GameSlide key={game.id} game={game} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DOCS SHOWCASE (Seamless transition) */}
      <AnimatePresence>
        {activeCategory === 'docs' && (
          <motion.div
            ref={docsScrollRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 z-50 bg-black/30 backdrop-blur-md overflow-y-hidden px-6 py-20 flex flex-col items-center scrollbar-hide"
          >
            <style dangerouslySetInnerHTML={{
              __html: `
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `
            }} />
            <div className="absolute top-8 left-8 z-50">
              <button
                onClick={() => setActiveCategory(null)}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold"
              >
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-[0.2em] text-center uppercase mb-16 mt-10">DESIGN DOCS & ANALYSIS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-[1400px]">
              {docsData.map((doc) => (
                <DocCard key={doc.id} doc={doc} isHovered={hoveredDocId === doc.id} onHover={() => setHoveredDocId(doc.id)} onLeave={() => setHoveredDocId(null)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
