"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import StatusBadge from "@/components/StatusBadge";

const projects = [
  {
    name: "BTCIndexer.com",
    tagline: "Advanced Blockchain Data Extraction",
    description:
      "High-performance Bitcoin block scanner and transaction indexer. Real-time tracking of blocks, transactions, and wallet activity with advanced analytics.",
    status: "development" as const,
    color: "orange",
    icon: (
      <Image src="/btcindexerLOGO.png" alt="BTCIndexer logo" width={24} height={24} className="object-contain rounded" />
    ),
    iconBg: "bg-orange-50",
    tags: ["Bitcoin", "Indexer", "Blockchain", "Wallets"],
  },
  {
    name: "WorldNews.day",
    tagline: "AI-Curated Global News Automation",
    description:
      "Fully automated, AI-curated news platform delivering real-time global headlines. Intelligent summarization and multi-source aggregation running 24/7.",
    status: "live" as const,
    color: "cyan",
    icon: (
      <Image src="/WorldNewsLogo.png" alt="WorldNews.day logo" width={24} height={24} className="object-contain rounded" />
    ),
    iconBg: "bg-cyan-50",
    tags: ["AI News", "Automation", "NLP", "24/7"],
  },
  {
    name: "Superfox",
    tagline: "Interactive Education Platform",
    description:
      "Gamified learning platform for children across Morocco. AI-driven content, interactive lessons, and creative tools designed for young minds.",
    status: "development" as const,
    color: "purple",
    icon: (
      <Image src="/superfoxLOGO.webp" alt="Superfox logo" width={24} height={24} className="object-contain rounded" />
    ),
    iconBg: "bg-purple-50",
    tags: ["EdTech", "Kids", "AI", "Gamification"],
  },
  {
    name: "CalculatorRobot",
    tagline: "AI-powered multi-purpose calculator",
    description:
      "Advanced multi-purpose calculator handling math, finance, science, and conversion tools with AI-powered insights.",
    status: "live" as const,
    color: "emerald",
    icon: (
      <Image src="/calculatorrobotlogo.png" alt="CalculatorRobot logo" width={24} height={24} className="object-contain rounded" />
    ),
    iconBg: "bg-emerald-50",
    tags: ["Calculator", "AI Tools", "Finance", "Science"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function LabsPage() {
  return (
    <motion.div
      className="p-6 lg:p-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={item} className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white mb-4 shadow-sm shadow-slate-200/50">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-[family-name:var(--font-mono)] text-slate-500 tracking-widest uppercase">
            // Projects
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-mono)] text-3xl lg:text-4xl font-black text-slate-900 cursor-blink">
          The Agentic Lab
        </h1>
        <p className="text-slate-600 text-sm mt-3 max-w-xl leading-relaxed">
          A suite of sovereign, agentic tools being built for the Moroccan and MENA
          ecosystem. Each project is designed to operate autonomously and serve the
          Kingdom&apos;s digital future.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            variants={item}
            className="bg-white border border-slate-200 shadow-sm shadow-slate-200/50 rounded-2xl p-8 transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-6">
              <div className={`p-3 ${project.iconBg} rounded-xl`}>
                {project.icon}
              </div>
              <StatusBadge status={project.status} />
            </div>

            <h3 className="font-[family-name:var(--font-mono)] text-xl font-bold text-slate-900 mb-1">
              {project.name}
            </h3>
            <p className="font-[family-name:var(--font-mono)] text-xs text-emerald-600 mb-4 font-semibold">
              {project.tagline}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-md text-[10px] font-[family-name:var(--font-mono)] tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
