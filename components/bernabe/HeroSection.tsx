"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #2a1a0e 0%, #4a2c14 40%, #3d2010 100%)" }}>

      {/* Warm radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 30%, rgba(200,151,58,0.18) 0%, transparent 65%)"
      }} />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 340, height: 340, border: "1px solid rgba(200,151,58,0.12)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 240, height: 240, border: "1px solid rgba(200,151,58,0.2)" }} />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-10 max-w-sm mx-auto w-full">

        {/* Brand mark */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }} className="mb-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
            style={{ background: "linear-gradient(135deg, rgba(200,151,58,0.2), rgba(200,151,58,0.05))",
              border: "1.5px solid rgba(200,151,58,0.45)", boxShadow: "0 0 30px rgba(200,151,58,0.15)" }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M10 6v8c0 2 1.5 3.5 3.5 3.5V30" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round"/>
              <path d="M7 6v5M13 6v5" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round"/>
              <path d="M24 6c0 0 3 3 3 7s-3 5-3 5V30" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-xs tracking-[0.3em] uppercase mb-3 font-light"
          style={{ color: "rgba(200,151,58,0.8)" }}>Desde Murcia</motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl font-bold leading-tight mb-1"
          style={{ fontFamily: "var(--font-playfair)", color: "#f5efe6" }}>
          Charcutería
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="text-5xl font-bold italic"
          style={{ fontFamily: "var(--font-playfair)",
            background: "linear-gradient(135deg, #e8be6a, #c8973a)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Bernabé
        </motion.h1>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9 }}
          className="divider mx-auto my-5" />

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="text-sm font-light leading-relaxed"
          style={{ color: "rgba(212,196,168,0.85)" }}>
          Jamones ibéricos · Embutidos · Quesos<br/>
          <span style={{ color: "rgba(212,196,168,0.5)" }}>Mercado Saavedra Fajardo, Murcia</span>
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.1 }}
          className="mt-8 w-full rounded-2xl overflow-hidden relative"
          style={{ border: "1px solid rgba(200,151,58,0.25)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
          <img src="/images/bernabe-hero.jpg" alt="Charcutería Bernabé"
            style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} />
          <div className="absolute bottom-0 left-0 right-0 h-16"
            style={{ background: "linear-gradient(to top, #2a1a0e, transparent)" }} />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: 50 }}>
        <svg viewBox="0 0 1200 50" preserveAspectRatio="none" style={{ width: "100%", height: 50 }}>
          <path d="M0,25 C300,50 600,0 900,25 C1050,37 1150,20 1200,25 L1200,50 L0,50 Z" fill="#f5efe6"/>
        </svg>
      </div>
    </section>
  );
}
