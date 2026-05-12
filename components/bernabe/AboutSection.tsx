"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 px-5 overflow-hidden"
      style={{ background: "#f5efe6" }}>

      <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,151,58,0.08) 0%, transparent 70%)",
          filter: "blur(20px)", transform: "translate(30%, -30%)" }} />

      <div className="max-w-sm mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-8">
          <span className="text-xs tracking-[0.25em] uppercase font-light"
            style={{ color: "#c8973a" }}>Quiénes somos</span>
          <h2 className="text-3xl font-bold mt-2 mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#2a1a0e" }}>
            Sobre Nosotros
          </h2>
          <div className="divider" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-sm font-light leading-relaxed mb-8"
          style={{ color: "#7a5c3e", lineHeight: 1.9 }}>
          Charcutería Bernabé es un referente en Murcia, con años de historia en el
          corazón del Mercado Saavedra Fajardo. Especializada en embutidos ibéricos,
          jamones, quesos curados y productos gourmet de la más alta calidad.
          <br /><br />
          Nuestro equipo, altamente profesional, ofrece atención cercana, rápida y
          personalizada — con corte al momento para que cada compra sea una experiencia.
        </motion.p>

        {/* Pillars */}
        {[
          { icon: "🥩", label: "Producto ibérico", desc: "Selección de la mejor calidad" },
          { icon: "🔪", label: "Corte al momento", desc: "Atención personalizada" },
          { icon: "⭐", label: "Años de tradición", desc: "Referente en Murcia" },
        ].map((item, i) => (
          <motion.div key={item.label}
            initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
            className="flex items-center gap-4 rounded-xl px-4 py-3 mb-3"
            style={{ background: "rgba(200,151,58,0.07)", border: "1px solid rgba(200,151,58,0.18)" }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
              style={{ background: "rgba(200,151,58,0.1)", border: "1px solid rgba(200,151,58,0.2)" }}>
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#2a1a0e" }}>{item.label}</p>
              <p className="text-xs font-light" style={{ color: "#b89a72" }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
