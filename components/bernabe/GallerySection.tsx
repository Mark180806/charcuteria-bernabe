"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const photos = [
  { src: "/images/bernabe-galeria-1.jpg", alt: "Mostrador de jamones y embutidos" },
  { src: "/images/bernabe-galeria-2.jpg", alt: "Quesos curados artesanos" },
  { src: "/images/bernabe-galeria-3.jpg", alt: "La charcutería Bernabé" },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 px-5 overflow-hidden"
      style={{ background: "#f5efe6" }}>

      <div className="max-w-sm mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-8">
          <span className="text-xs tracking-[0.25em] uppercase font-light"
            style={{ color: "#c8973a" }}>Nuestra tienda</span>
          <h2 className="text-3xl font-bold mt-2 mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#2a1a0e" }}>
            Galería
          </h2>
          <div className="divider" />
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(200,151,58,0.2)", boxShadow: "0 8px 24px rgba(42,26,14,0.12)" }}>
            <img src={photos[0].src} alt={photos[0].alt}
              style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }} />
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {photos.slice(1).map((p, i) => (
              <motion.div key={p.src}
                initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(200,151,58,0.2)", boxShadow: "0 8px 24px rgba(42,26,14,0.1)" }}>
                <img src={p.src} alt={p.alt}
                  style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
