"use client";
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    { title: "How Casual RPG mobile games are more Fun to Play", date: "-", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60" },
    { title: "Mobile games Gacha System Evolution", date: "-", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60" },
    { title: "Player Hook Loop", date: "-", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60" },
  ];

  return (
    <section id="blog" className="min-h-screen w-full flex items-center justify-center px-6 py-24 bg-black/70 backdrop-blur-[0.5px]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-[#0cdba0] tracking-widest">Blogs</h2>
          <div className="w-24 h-[1px] bg-white mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer flex flex-col gap-6 p-5 rounded-xl border border-transparent hover:shadow-[0_0_35px_rgba(12,219,160,0.4)] transition-all duration-75"
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-lg">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />

                {/* Coming Soon Tag */}
                <div className="absolute top-3 right-3 z-20 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-lg pointer-events-none">
                  <span className="text-[10px] font-normal text-white uppercase tracking-[0.2em]">Coming Soon</span>
                </div>

                <img src={post.img} alt={post.title} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-150 ease-in-out" />
              </div>
              <div className="flex flex-col gap-2 px-1">
                <span className="text-zinc-500 font-mono text-sm">{post.date}</span>
                <h3 className="text-2xl font-bold group-hover:text-white text-zinc-300 transition-colors">{post.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
