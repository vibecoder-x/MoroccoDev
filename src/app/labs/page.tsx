"use client";

import { motion } from "framer-motion";
import StatusBadge from "@/components/StatusBadge";

const projects = [
  {
    name: "AgenticMorocco.com",
    tagline: "Sovereign AI Infrastructure",
    description:
      "Building Morocco's sovereign AI backbone. Agentic systems, local LLMs, and autonomous infrastructure aligned with the Morocco AI 2030 strategy.",
    status: "alpha" as const,
    color: "emerald",
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: "bg-emerald-500/10",
    tags: ["Sovereign AI", "LLM", "Morocco 2030", "Agentic"],
  },
  {
    name: "BTCIndexer.com",
    tagline: "Advanced Blockchain Data Extraction",
    description:
      "High-performance Bitcoin block scanner and transaction indexer. Real-time tracking of blocks, transactions, and wallet activity with advanced analytics.",
    status: "development" as const,
    color: "orange",
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    iconBg: "bg-orange-500/10",
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
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    iconBg: "bg-cyan-500/10",
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
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: "bg-purple-500/10",
    tags: ["EdTech", "Kids", "AI", "Gamification"],
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
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-[family-name:var(--font-mono)] text-slate-500 tracking-widest uppercase">
            // Projects
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-mono)] text-3xl lg:text-4xl font-bold text-white cursor-blink">
          The Agentic Lab
        </h1>
        <p className="text-slate-400 text-sm mt-3 max-w-xl leading-relaxed">
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
            className="card-glow bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
          >
            <div className="flex items-start justify-between mb-6">
              <div className={`p-3 ${project.iconBg} rounded-xl`}>
                {project.icon}
              </div>
              <StatusBadge status={project.status} />
            </div>

            <h3 className="font-[family-name:var(--font-mono)] text-xl font-semibold text-white mb-1">
              {project.name}
            </h3>
            <p className="font-[family-name:var(--font-mono)] text-xs text-emerald-400/70 mb-4">
              {project.tagline}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-slate-800/60 text-slate-500 rounded-md text-[10px] font-[family-name:var(--font-mono)] tracking-wider"
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
