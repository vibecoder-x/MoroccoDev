"use client";

import { motion } from "framer-motion";

const topics = [
  "Sovereign AI Infrastructure for Morocco",
  "Morocco AI 2030 National Strategy",
  "Agentic Systems & Autonomous Agents",
  "Digital Identity & Web3 in MENA",
  "Bitcoin Indexing & Blockchain Data",
  "No-Code AI Automation for SMEs",
  "Open-Source AI for the Kingdom",
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function GitexPage() {
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
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-[family-name:var(--font-mono)] text-slate-500 tracking-widest uppercase">
            // Live Event
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-mono)] text-3xl lg:text-4xl font-bold text-white">
          GITEX Africa 2026
        </h1>
        <p className="text-slate-400 text-sm mt-3 max-w-xl leading-relaxed">
          Connect with Badr Sakine at GITEX Africa 2026 in Marrakech. Let&apos;s
          explore partnerships in agentic AI, digital identity, and Morocco&apos;s
          sovereign tech future.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main CTA Card */}
        <motion.div variants={item} className="lg:col-span-2">
          <div className="gitex-glow rounded-2xl">
            <div className="bg-slate-900/90 rounded-2xl p-8 lg:p-12 relative z-10">
              <h2 className="font-[family-name:var(--font-mono)] text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                Attending GITEX Africa?
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Let&apos;s discuss Sovereign AI
                  <br />
                  and Morocco AI 2030 strategy.
                </span>
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
                Book a 1-on-1 meeting to discuss how we can build sovereign AI
                infrastructure together for the Kingdom.
              </p>

              <a
                href="mailto:badr@moroccodev.com?subject=GITEX%20Africa%202026%20Meeting"
                className="btn-shine inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-indigo-500 text-white font-[family-name:var(--font-mono)] font-semibold text-sm rounded-xl hover:from-emerald-400 hover:to-indigo-400 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Meeting
              </a>
            </div>
          </div>
        </motion.div>

        {/* Event Details */}
        <motion.div
          variants={item}
          className="card-glow bg-slate-900/60 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-mono)] text-sm text-white font-medium">Event Info</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="font-[family-name:var(--font-mono)] text-xs text-slate-500 uppercase tracking-wider mb-1">Location</div>
                <div className="font-[family-name:var(--font-mono)] text-sm text-white">Marrakech, Morocco</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-mono)] text-xs text-slate-500 uppercase tracking-wider mb-1">Event</div>
                <div className="font-[family-name:var(--font-mono)] text-sm text-white">GITEX Africa 2026</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-mono)] text-xs text-slate-500 uppercase tracking-wider mb-1">Focus</div>
                <div className="font-[family-name:var(--font-mono)] text-sm text-emerald-400">Sovereign AI &amp; Agentic Systems</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-mono)] text-xs text-slate-500 uppercase tracking-wider mb-1">Availability</div>
                <div className="flex items-center gap-2">
                  <div className="status-dot" />
                  <span className="font-[family-name:var(--font-mono)] text-sm text-white">Open for meetings</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Discussion Topics */}
        <motion.div
          variants={item}
          className="lg:col-span-3 card-glow bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <span className="font-[family-name:var(--font-mono)] text-sm text-white font-medium">Discussion Topics</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topics.map((topic, i) => (
              <div
                key={topic}
                className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-xl"
              >
                <span className="font-[family-name:var(--font-mono)] text-xs text-emerald-400/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-slate-300">{topic}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
