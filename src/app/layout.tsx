import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import DigitalTwinChat from "@/components/DigitalTwinChat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "MoroccoDev — Badr Sakine | Agentic AI Hub",
  description:
    "Badr Sakine — Engineering sovereign AI infrastructure for the Kingdom of Morocco. Building agentic tools for the MENA ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-slate-950 text-slate-300 font-[family-name:var(--font-inter)] antialiased min-h-screen">
        <Sidebar />
        <main className="lg:ml-64 min-h-screen pt-14 lg:pt-0">
          {children}
        </main>
        <DigitalTwinChat />
      </body>
    </html>
  );
}
