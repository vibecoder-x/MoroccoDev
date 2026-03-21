"use client";

import { motion } from "framer-motion";
import StatusBadge from "@/components/StatusBadge";

const newsHeadlines = [
  { time: "14:32", title: "Morocco announces $2B AI investment fund for 2030 strategy" },
  { time: "13:15", title: "GITEX Africa 2026 expected to draw 50,000+ attendees" },
  { time: "12:48", title: "New sovereign cloud initiative launched in Casablanca" },
  { time: "11:22", title: "Moroccan startups raise record $180M in Q1 2026" },
  { time: "10:05", title: "Africa's first agentic AI lab opens in Rabat" },
  { time: "09:30", title: "Digital Morocco 2030: Smart city pilots expand to 12 cities" },
  { time: "08:15", title: "MENA region leads global growth in AI adoption rates" },
];

const btcStats = {
  blockHeight: "892,417",
  hashRate: "724.3 EH/s",
  price: "$97,842",
  txCount: "412,893",
  difficulty: "92.67T",
  mempoolSize: "14.2 MB",
};

const projects = [
  { name: "AgenticMorocco", status: "alpha" as const, progress: 35 },
  { name: "BTCIndexer", status: "development" as const, progress: 62 },
  { name: "WorldNews.day", status: "live" as const, progress: 88 },
  { name: "Superfox", status: "development" as const, progress: 41 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function DashboardPage() {
  return (
    <motion.div
      className="p-6 lg:p-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={item} className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-[family-name:var(--font-mono)] text-slate-500 tracking-widest uppercase">
            Dashboard
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-mono)] text-3xl lg:text-4xl font-bold text-white leading-tight">
          Badr Sakine <span className="text-emerald-400">//</span>
        </h1>
        <p className="text-slate-400 text-sm mt-2 max-w-xl">
          Engineering sovereign AI infrastructure for the Kingdom. High School
          Math Teacher &amp; Vibe Coder building the agentic future of Morocco.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* WorldNews.day Ticker */}
        <motion.div
          variants={item}
          className="card-glow bg-slate-900/60 border border-slate-800 rounded-2xl p-6 overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-mono)] text-xs text-white font-medium">WorldNews.day</span>
            </div>
            <StatusBadge status="live" />
          </div>
          <div className="h-48 overflow-hidden relative">
            <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-slate-900/60 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
            <div className="ticker-scroll space-y-3">
              {[...newsHeadlines, ...newsHeadlines].map((news, i) => (
                <div key={i} className="flex gap-3 text-xs">
                  <span className="font-[family-name:var(--font-mono)] text-emerald-400/60 shrink-0">{news.time}</span>
                  <span className="text-slate-400">{news.title}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* BTCIndexer Stats */}
        <motion.div
          variants={item}
          className="card-glow bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-mono)] text-xs text-white font-medium">BTCIndexer.com</span>
            </div>
            <StatusBadge status="development" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(btcStats).map(([key, value]) => (
              <div key={key}>
                <div className="font-[family-name:var(--font-mono)] text-lg font-bold text-white">{value}</div>
                <div className="text-[10px] font-[family-name:var(--font-mono)] text-slate-500 uppercase tracking-wider mt-0.5">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GITEX Countdown */}
        <motion.div
          variants={item}
          className="card-glow bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-mono)] text-xs text-white font-medium">GITEX Africa 2026</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Marrakech, Morocco. Sovereign AI &amp; Agentic Infrastructure showcase.
            </p>
          </div>
          <a
            href="/gitex"
            className="btn-shine inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-lg font-[family-name:var(--font-mono)] text-xs hover:bg-emerald-500/20 transition-all duration-300"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule Meeting
          </a>
        </motion.div>

        {/* Project Status Overview — spans full width */}
        <motion.div
          variants={item}
          className="md:col-span-2 xl:col-span-3 card-glow bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-500/10 rounded-lg">
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-mono)] text-xs text-white font-medium">Project Status</span>
            </div>
            <a href="/labs" className="text-xs font-[family-name:var(--font-mono)] text-slate-500 hover:text-emerald-400 transition-colors">
              View all →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div key={project.name} className="bg-slate-800/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-[family-name:var(--font-mono)] text-sm text-white font-medium">{project.name}</span>
                  <StatusBadge status={project.status} />
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full transition-all duration-1000 ${
                      project.status === "live"
                        ? "bg-emerald-400"
                        : project.status === "alpha"
                        ? "bg-purple-400"
                        : "bg-amber-400"
                    }`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-[10px] font-[family-name:var(--font-mono)] text-slate-600 mt-1.5 block">
                  {project.progress}% complete
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
