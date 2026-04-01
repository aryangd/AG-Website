"use client";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-3xl font-black tracking-tighter">ARYAN GOLLA</h2>
        <div className="flex gap-8 text-zinc-500 text-sm font-mono">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
        <p className="text-zinc-600 text-sm">© 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
}
