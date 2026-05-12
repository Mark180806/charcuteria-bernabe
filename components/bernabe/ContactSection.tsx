"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const socials = [
  {
    name: "Instagram", href: "https://www.instagram.com/charcuteria_bernabe/",
    color: "#E1306C", bg: "rgba(225,48,108,0.08)", border: "rgba(225,48,108,0.2)",
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="2" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="16" cy="6" r="1" fill="currentColor"/>
    </svg>
  },
  {
    name: "Facebook", href: "https://www.facebook.com/charcuteriabernabe/?locale=es_ES",
    color: "#1877F2", bg: "rgba(24,119,242,0.08)", border: "rgba(24,119,242,0.2)",
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M13.5 7H12a1 1 0 00-1 1v2H9l.5 2.5H11V17h2v-4.5h2L15 10h-2V8.5a.5.5 0 01.5-.5h1V7z"
        stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 px-5" style={{ background: "#f5efe6" }}>
      <div className="max-w-sm mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-8">
          <span className="text-xs tracking-[0.25em] uppercase font-light" style={{ color: "#c8973a" }}>
            Contacta con nosotros
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#2a1a0e" }}>Contacto</h2>
          <div className="divider" />
        </motion.div>

        {/* Call button */}
        <motion.a href="tel:+34615051207"
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl mb-8 no-underline"
          style={{ background: "linear-gradient(135deg, rgba(139,46,26,0.08), rgba(139,46,26,0.04))",
            border: "1px solid rgba(139,46,26,0.2)", textDecoration: "none" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #8b2e1a, #c44a2a)",
              boxShadow: "0 4px 12px rgba(139,46,26,0.35)" }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a1 1 0 01-1 1C7.72 20 2 14.28 2 7a1 1 0 011-1h1z"
                stroke="white" strokeWidth="1.4" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-light tracking-wider uppercase" style={{ color: "#c8973a" }}>Llámanos</p>
            <p className="text-lg font-semibold mt-0.5" style={{ color: "#2a1a0e" }}>+34 615 05 12 07</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.3 }}>
            <path d="M4 8h8M9 5l3 3-3 3" stroke="#7a4e2d" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>

        {/* Divider */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }} className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px" style={{ background: "rgba(200,151,58,0.2)" }} />
          <span className="text-xs tracking-widest uppercase font-light" style={{ color: "rgba(184,154,114,0.7)" }}>
            Síguenos
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(200,151,58,0.2)" }} />
        </motion.div>

        {/* Socials */}
        <div className="flex flex-col gap-3">
          {socials.map((s, i) => (
            <motion.a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 px-4 py-3 rounded-xl no-underline"
              style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color, textDecoration: "none" }}>
              <div className="flex-shrink-0">{s.icon}</div>
              <span className="text-sm font-medium" style={{ color: "#2a1a0e" }}>{s.name}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-auto" style={{ opacity: 0.3 }}>
                <path d="M2 7h10M8 4l3 3-3 3" stroke="#7a4e2d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
