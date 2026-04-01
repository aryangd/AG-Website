"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MousePointer2, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const cards = [
  {
    title: "Games",
    color: "#22c55e", // green-500
    colorClass: "bg-emerald-500/90",
    shadowClass: "hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]",
    desc: "Check out the games I have worked on.",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80"
  },
  {
    title: "Design Docs & Analysis",
    color: "#ea580c", // orange-600
    colorClass: "bg-orange-600/90",
    shadowClass: "hover:shadow-[0_0_50px_rgba(234,88,12,0.5)]",
    desc: "Read the design documents I have published along with the analysis of other games.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
    title: "Marketplace Assets",
    color: "#6366f1", // indigo-500
    colorClass: "bg-indigo-500/90",
    shadowClass: "hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]",
    desc: "Explore my released assets, tools, and visual scripting blueprints.",
    img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80"
  }
];

function TiltCard({ card }: { card: typeof cards[0] }) {
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
      className={`group relative w-full aspect-[3/4] rounded-lg overflow-hidden cursor-pointer transition-shadow duration-500 ${card.shadowClass}`}
    >
      {/* Background Image with slight scale purely on hover to add parallax */}
      <div className="absolute inset-0 z-0">
        <img 
          src={card.img} 
          alt={card.title} 
          className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      {/* The animated bottom tab expanding cleanly from content height */}
      <div className={`absolute bottom-0 w-full px-5 py-4 md:px-6 md:py-5 z-10 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${card.colorClass}`}>
        <h3 className="text-white text-[26px] md:text-3xl font-bold tracking-tight leading-tight transform group-hover:-translate-y-1 transition-transform duration-500">
          {card.title}
        </h3>
        
        {/* Hidden description expanding naturally via max-height */}
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
      if (displayed === "") {
        setIsDeleting(false);
      } else {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
      }
    } else {
      if (displayed === text) {
        timer = setTimeout(() => setIsDeleting(true), 2500); // Wait before clearing
      } else {
        timer = setTimeout(() => setDisplayed(text.substring(0, displayed.length + 1)), 100);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, text]);

  return (
    <span className="tracking-[0.3em] font-medium text-white/80">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="text-white ml-1"
      >|</motion.span>
    </span>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen w-full bg-[#04080f] flex flex-col relative overflow-hidden font-sans">
      
      {/* Navigation aid */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/">
          <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" /> Back to Home
          </button>
        </Link>
      </div>

      {/* Huge Vertical Portfolio Text */}
      <div className="absolute left-8 lg:left-14 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:flex flex-col items-center gap-0">
        {"PORTFOLIO".split('').map((char, i) => (
          <span key={i} className="text-[90px] xl:text-[110px] font-black text-white/[0.04] leading-[0.85]">
            {char}
          </span>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 lg:px-32 py-20 w-full max-w-[1600px] mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full place-items-center">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 + 0.3, duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-sm"
              style={{ perspective: 1000 }}
            >
              <TiltCard card={card} />
            </motion.div>
          ))}
        </div>
        
        {/* Typing category text below */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 uppercase text-sm"
        >
          <TypewriterStatic text="SELECT A CATEGORY" />
        </motion.div>
      </div>
      
    </div>
  );
}
