import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charcutería Bernabé · Murcia",
  description:
    "Charcutería tradicional en el Mercado Saavedra Fajardo de Murcia. Jamones ibéricos, embutidos, quesos curados y productos gourmet de alta calidad.",
  openGraph: {
    title: "Charcutería Bernabé",
    description: "Tradición, calidad y el mejor producto ibérico de Murcia.",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
