"use client";
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    { title: "Building Fluid UI with Framer Motion", date: "Oct 12, 2023", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60" },
    { title: "The Future of Web Design in 2024", date: "Sep 28, 2023", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60" },
    { title: "Optimizing Next.js Applications", date: "Aug 15, 2023", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60" },
  ];

  return (
    <section id="blog" className="min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-[#0cdba0] tracking-widest">Blogs</h2>
          <div className="w-24 h-[2px] bg-white mt-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-sm">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img src={post.img} alt={post.title} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
              </div>
              <div className="flex flex-col gap-2">
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
