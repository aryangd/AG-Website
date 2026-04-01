"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [active, setActive] = useState("home");

  const tabs = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "My Backstory" },
    { id: "projects", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "blog", label: "Blog" },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
    );

    const navTabs = [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "experience", label: "My Backstory" },
      { id: "projects", label: "Work" },
      { id: "skills", label: "Skills" },
      { id: "blog", label: "Blog" },
    ];

    navTabs.forEach((tab) => {
      const el = document.getElementById(tab.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10"
    >
      <div className="flex items-center gap-1 md:gap-2 px-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleScroll(tab.id)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === tab.id ? "text-black" : "text-zinc-400 hover:text-white"
            }`}
          >
            {active === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white rounded-full z-[0]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
