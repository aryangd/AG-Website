"use client";
import { MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full flex flex-col z-20 relative">
      
      {/* Pre-Footer Action Block */}
      <div className="w-full bg-[#f9f9f9] text-black py-20 md:py-24 flex flex-col md:flex-row justify-center items-center gap-16 lg:gap-32 border-t border-zinc-200">
        
        <a href="https://www.google.com/maps/place/India" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
          <MapPin className="w-12 h-12 stroke-[1.5] mb-5 text-black group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="uppercase text-[13px] tracking-[0.2em] font-bold text-zinc-600 group-hover:text-black transition-colors duration-300">INDIA</span>
        </a>

        <a href="mailto:aryangollagd@gmail.com" className="flex flex-col items-center group">
          <Mail className="w-12 h-12 stroke-[1.5] mb-5 text-black group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="uppercase text-[13px] tracking-[0.2em] font-bold text-zinc-600 group-hover:text-black transition-colors duration-300">ARYANGOLLAGD@GMAIL.COM</span>
        </a>

        <a href="https://www.linkedin.com/in/aryan-golla/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-5 text-black group-hover:-translate-y-1 transition-transform duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          <span className="uppercase text-[13px] tracking-[0.2em] font-bold text-zinc-600 group-hover:text-black transition-colors duration-300">LINKEDIN</span>
        </a>

      </div>

      {/* Main Footer */}
      <footer className="w-full py-12 px-6 bg-black border-t border-zinc-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-3xl font-black tracking-tighter">ARYAN GOLLA</h2>
          <div className="flex gap-8 text-zinc-500 text-[15px] font-mono">
            <a href="#" className="flex items-center gap-2.5 hover:text-white transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-y-1"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
          </div>
          <p className="text-zinc-600 text-sm">© 2026 All Rights Reserved</p>
        </div>
      </footer>

    </div>
  );
}
