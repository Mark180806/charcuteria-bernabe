"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  { emoji: "🍖", name: "Jamones Ibéricos", desc: "Pata negra y serrano de alta selección" },
  { emoji: "🌶️", name: "Embutidos", desc: "Chorizo, salchichón, lomo, morcilla..." },
  { emoji: "🧀", name: "Quesos Curados", desc: "Curados, semicurados y frescos artesanos" },
  { emoji: "✨", name: "Productos Gourmet", desc: "Selección premium de delicatessen" },
  { emoji: "👨‍🍳", name: "Corte al Momento", desc: "Atención personalizada y profesional" },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 px-5 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ede3d4 0%, #e8dcc8 100%)" }}>

      <div className="max-w-sm mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-8">
          <span className="text-xs tracking-[0.25em] uppercase font-light"
            style={{ color: "#c8973a" }}>Lo que ofrecemos</span>
          <h2 className="text-3xl font-bold mt-2 mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#2a1a0e" }}>
            Nuestros Productos
          </h2>
          <div className="divider" />
        </motion.div>

        <div className="flex flex-col gap-3">
          {products.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 rounded-2xl px-4 py-4"
              style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(200,151,58,0.2)",
                boxShadow: "0 2px 12px rgba(42,26,14,0.06)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                style={{ background: "linear-gradient(135deg, rgba(200,151,58,0.15), rgba(200,151,58,0.05))",
                  border: "1px solid rgba(200,151,58,0.25)" }}>
                {p.emoji}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold" style={{ color: "#2a1a0e" }}>{p.name}</p>
                <p className="text-xs font-light mt-0.5" style={{ color: "#b89a72" }}>{p.desc}</p>
              </div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.3 }}>
                <path d="M4 7h6M7 4l3 3-3 3" stroke="#7a4e2d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
