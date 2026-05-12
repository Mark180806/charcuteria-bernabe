"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 px-5" style={{ background: "#ede3d4" }}>
      <div className="max-w-sm mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-8">
          <span className="text-xs tracking-[0.25em] uppercase font-light" style={{ color: "#c8973a" }}>
            Dónde estamos
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#2a1a0e" }}>Ubicación</h2>
          <div className="divider" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full rounded-2xl overflow-hidden mb-5"
          style={{ border: "1px solid rgba(200,151,58,0.25)", boxShadow: "0 12px 40px rgba(42,26,14,0.15)", height: 220 }}>
          <iframe
            title="Charcutería Bernabé - Mercado Saavedra Fajardo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.9!2d-1.1285!3d37.9838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6381f4ef4f1437%3A0x4bed0b8b4af25f50!2sMercado%20Saavedra%20Fajardo!5e0!3m2!1ses!2ses!4v1700000000000"
            width="100%" height="220" style={{ border: 0 }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 mb-5 px-4 py-3 rounded-xl"
          style={{ background: "rgba(200,151,58,0.08)", border: "1px solid rgba(200,151,58,0.2)" }}>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(200,151,58,0.1)", border: "1px solid rgba(200,151,58,0.25)" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2C6.24 2 4 4.24 4 7c0 4.5 5 9 5 9s5-4.5 5-9c0-2.76-2.24-5-5-5z"
                stroke="#c8973a" strokeWidth="1.2" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="1.5" stroke="#c8973a" strokeWidth="1.2"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium" style={{ color: "#2a1a0e" }}>Mercado Saavedra Fajardo</p>
            <p className="text-xs font-light" style={{ color: "#b89a72" }}>Murcia</p>
          </div>
        </motion.div>

        <motion.a
          href="https://maps.app.goo.gl/wWtceupRVWfuDvLa8"
          target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-sm font-semibold no-underline"
          style={{ background: "linear-gradient(135deg, #8b2e1a, #c44a2a)", color: "#ffffff",
            border: "1px solid rgba(139,46,26,0.3)",
            boxShadow: "0 8px 24px rgba(139,46,26,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            textDecoration: "none" }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1C5.69 1 3 3.69 3 7c0 5.25 6 10 6 10s6-4.75 6-10c0-3.31-2.69-6-6-6z"
              stroke="white" strokeWidth="1.3"/>
            <circle cx="9" cy="7" r="2" stroke="white" strokeWidth="1.3"/>
          </svg>
          Cómo llegar
        </motion.a>
      </div>
    </section>
  );
}
