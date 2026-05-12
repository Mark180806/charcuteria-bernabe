"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ValeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 px-5 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2a1a0e 0%, #3d2010 100%)" }}>

      {/* Warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,151,58,0.12) 0%, transparent 70%)", filter: "blur(30px)" }} />

      <div className="max-w-sm mx-auto flex flex-col items-center text-center">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-3">
          <span className="text-xs tracking-[0.25em] uppercase font-light"
            style={{ color: "rgba(200,151,58,0.8)" }}>Vale regalo</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-playfair)",
            background: "linear-gradient(135deg, #e8be6a, #c8973a)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          ¡Enhorabuena!
        </motion.h2>

        <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="divider mx-auto mb-10" />

        {/* Ticket card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[300px] mb-10">

          {/* Outer glow */}
          <div className="absolute -inset-3 rounded-2xl pointer-events-none glow-gold"
            style={{ background: "linear-gradient(135deg, rgba(200,151,58,0.15), rgba(139,46,26,0.1))",
              filter: "blur(8px)", borderRadius: 20 }} />

          {/* Ticket */}
          <div className="float-anim relative rounded-2xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #fdf6ec 0%, #f5e8d0 100%)",
              border: "1.5px solid rgba(200,151,58,0.5)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.8)" }}>

            {/* Shimmer */}
            <div className="absolute inset-0 shimmer pointer-events-none z-10" />

            {/* Ticket image */}
            <img
              src="/images/bernabe-ticket.png"
              alt="Vale regalo Charcutería Bernabé"
              style={{ width: "100%", objectFit: "contain", display: "block", padding: "16px" }}
            />

            {/* Top strip */}
            <div className="w-full py-3 px-4 flex items-center justify-between"
              style={{ background: "linear-gradient(90deg, #8b2e1a, #c44a2a)" }}>
              <span className="text-xs tracking-widest uppercase font-light text-white opacity-90">
                Charcutería Bernabé
              </span>
              <span className="text-xs text-white opacity-60">Murcia</span>
            </div>

            {/* Perforated line */}
            <div className="w-full flex items-center px-2 py-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="flex-1 h-px" style={{ background: "rgba(200,151,58,0.25)" }} />
              ))}
            </div>

            {/* Main content */}
            <div className="px-6 py-6 flex flex-col items-center">
              <p className="text-xs tracking-[0.2em] uppercase font-light mb-2"
                style={{ color: "#b89a72" }}>Vale Regalo</p>

              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-6xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#2a1a0e" }}>50</span>
                <span className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#c8973a" }}>€</span>
              </div>

              <div className="w-full h-px mb-4" style={{ background: "rgba(200,151,58,0.2)" }} />

              <p className="text-xs font-light text-center leading-relaxed" style={{ color: "#7a5c3e" }}>
                Para gastar en una única compra<br/>en Charcutería Bernabé
              </p>
            </div>

            {/* Bottom perforated */}
            <div className="w-full flex items-center px-2 py-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="flex-1 h-px" style={{ background: "rgba(200,151,58,0.25)" }} />
              ))}
            </div>

            {/* Bottom strip */}
            <div className="w-full py-2 px-4 flex items-center justify-center"
              style={{ background: "rgba(200,151,58,0.08)" }}>
              <span className="text-xs font-light" style={{ color: "#b89a72" }}>
                Mercado Saavedra Fajardo · Murcia
              </span>
            </div>

            {/* Gold corner ribbon */}
            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden" style={{ zIndex: 20 }}>
              <div style={{ position: "absolute", top: 8, right: -14, width: 40, height: 12,
                background: "linear-gradient(90deg, #c8973a, #e8be6a)", transform: "rotate(45deg)", opacity: 0.9 }} />
            </div>
          </div>
        </motion.div>

        {/* Conditions block */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full rounded-2xl p-5 text-left"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,151,58,0.2)" }}>
          <p className="text-sm font-light leading-relaxed mb-3" style={{ color: "rgba(245,239,230,0.85)" }}>
            Has ganado un vale de{" "}
            <span style={{ color: "#e8be6a", fontWeight: 700 }}>50€</span>{" "}
            para gastar en Charcutería Bernabé.
          </p>
          <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-xs font-light leading-relaxed" style={{ color: "rgba(212,196,168,0.65)" }}>
              <span style={{ color: "rgba(200,151,58,0.8)" }}>Condiciones · </span>
              El vale debe canjearse íntegramente en una única compra. No se puede dividir en varios usos ni acumular parcialmente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
