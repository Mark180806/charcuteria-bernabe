"use client";

export default function Footer() {
  return (
    <footer className="relative py-10 px-5 overflow-hidden"
      style={{ background: "#2a1a0e" }}>
      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: 40 }}>
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" style={{ width: "100%", height: 40 }}>
          <path d="M0,20 C200,40 400,0 600,20 C800,40 1000,0 1200,20 L1200,0 L0,0 Z" fill="#f5efe6"/>
        </svg>
      </div>

      <div className="max-w-sm mx-auto text-center pt-8">
        <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "rgba(200,151,58,0.1)", border: "1px solid rgba(200,151,58,0.25)" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 4v5c0 1.5 1 2.5 2.5 2.5V18" stroke="#c8973a" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M4 4v3M8 4v3" stroke="#c8973a" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M14 4c0 0 2 2 2 5s-2 3.5-2 3.5V18" stroke="#c8973a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <p className="text-sm font-semibold mb-1"
          style={{ fontFamily: "var(--font-playfair)", color: "#f5efe6" }}>
          Charcutería Bernabé
        </p>
        <p className="text-xs font-light mb-1" style={{ color: "rgba(212,196,168,0.5)" }}>
          Mercado Saavedra Fajardo · Murcia
        </p>
        <p className="text-xs font-light" style={{ color: "rgba(212,196,168,0.35)" }}>
          +34 615 05 12 07
        </p>

        <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(200,151,58,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(212,196,168,0.25)" }}>
            © {new Date().getFullYear()} Charcutería Bernabé
          </p>
        </div>
      </div>
    </footer>
  );
}
