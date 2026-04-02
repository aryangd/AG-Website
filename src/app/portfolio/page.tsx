"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { MousePointer2, ChevronLeft, Gamepad2, Play } from "lucide-react";
import Link from "next/link";

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
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80"
  },
  {
    id: "docs",
    title: "Design Docs & Analysis",
    color: "#ea580c",
    colorClass: "bg-orange-600/90",
    shadowClass: "hover:shadow-[0_0_50px_rgba(234,88,12,0.5)]",
    desc: "Read the design documents I have published along with the analysis of other games.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
    id: "assets",
    title: "Marketplace Assets",
    color: "#6366f1",
    colorClass: "bg-indigo-500/90",
    shadowClass: "hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]",
    desc: "Explore my released assets, tools, and visual scripting blueprints.",
    img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80"
  }
];

// -------------------------------------------------------------
// GAMES DATA (For the Horizontal Showcase)
// -------------------------------------------------------------
const gamesData = [
  {
    id: 1,
    title: "Project Downbelow",
    year: "2024 - Present",
    company: "Crema",
    desc: "I am working with the Game Design team in order to define the core mechanics for the game.",
    bullets: [
      "Developing the game from conception to release.",
      "Designing core character mechanics.",
      "Game balance.",
      "Documentation and cooperation with the rest of departments."
    ],
    bgImg: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80",
    embedId: "QYhZcwDgEaw"
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
    embedId: "Z6yX-J1r274"
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
    embedId: "J2j-9P8Y-lQ"
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
    embedId: "dQw4w9WgXcQ"
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
        {/* Seamless edge blending gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04080f] via-transparent to-[#04080f]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-2 drop-shadow-lg">
              {game.title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-zinc-400 font-light tracking-wide mb-6">
              {game.year}
            </h2>
          </div>

          <p className="text-zinc-200 text-lg leading-relaxed drop-shadow-md">
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
          <div className="relative w-full max-w-[600px] aspect-video bg-black/50 rounded-lg overflow-hidden shadow-2xl border border-white/10 group cursor-pointer">
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

// -------------------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------------------
export default function PortfolioPage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Horizontal scroll state
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    if (activeCategory !== 'games') return;

    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollX = el.scrollLeft;
      const width = document.body.clientWidth;
      const index = Math.round(scrollX / width);
      setActiveIndex(index);
    };

    let targetScroll = el.scrollLeft;
    let isScrolling = false;

    const renderSmoothScroll = () => {
      if (!el) return;
      
      // Lerp (easing factor of 0.1 for buttery smoothness)
      el.scrollLeft += (targetScroll - el.scrollLeft) * 0.1;
      
      if (Math.abs(targetScroll - el.scrollLeft) > 1) {
        requestAnimationFrame(renderSmoothScroll);
      } else {
        isScrolling = false;
        el.scrollLeft = targetScroll;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Prevent vertical page scroll default
      e.preventDefault();
      
      // Support both vertical wheel and horizontal trackpad swipe
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      
      if (!isScrolling) {
        targetScroll = el.scrollLeft;
      }

      // Add scroll intent
      targetScroll += delta * 1.5;

      // Clamp target within bounds
      targetScroll = Math.max(0, Math.min(targetScroll, el.scrollWidth - el.clientWidth));
      
      // Ignite 60fps render loop
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(renderSmoothScroll);
      }
    };
    
    el.addEventListener("scroll", handleScroll);
    el.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      el.removeEventListener("scroll", handleScroll);
      el.removeEventListener("wheel", handleWheel);
    };
  }, [activeCategory]);

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const width = document.body.clientWidth;
    scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
  };

  return (
    <div onMouseMove={handleMouseMove} className="min-h-screen w-full bg-[#04080f] flex flex-col relative overflow-hidden font-sans">

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
              <Link href="/">
                <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                  <ChevronLeft className="w-5 h-5" /> Back to Home
                </button>
              </Link>
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
            className="absolute inset-0 z-50 bg-[#04080f]"
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
              <style dangerouslySetInnerHTML={{__html: `
                .scrollbar-hide::-webkit-scrollbar { display: none; }
              `}} />
              
              {gamesData.map((game) => (
                <GameSlide key={game.id} game={game} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
