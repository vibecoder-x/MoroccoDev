"use client";

import { motion } from "framer-motion";

const domains = [
  { name: "idhub.xyz", category: "Web3 Identity", color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10" },
  { name: "ServyAI.com", category: "AI Services", color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10" },
  { name: "VectorDbs.com", category: "Database/AI", color: "text-purple-400 border-purple-500/20 bg-purple-500/10" },
  { name: "AutoMorocco.com", category: "Autonomous Morocco", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  { name: "AgenticMena.com", category: "Agentic AI", color: "text-rose-400 border-rose-500/20 bg-rose-500/10" },
  { name: "AgentPerception.com", category: "AI Vision", color: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
  { name: "RCPagent.com", category: "AI Agents", color: "text-amber-400 border-amber-500/20 bg-amber-500/10" },
  { name: "AgenticMorocco.com", category: "Sovereign AI", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  { name: "MoroccoDev.com", category: "Personal Brand", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
];

const techStack = [
  "TypeScript", "Next.js", "Python", "Solidity", "Rust",
  "TensorFlow", "LangChain", "Web3.js", "Node.js", "PostgreSQL",
  "Docker", "Tailwind CSS",
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function IdentityPage() {
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
            // Identity
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-mono)] text-3xl lg:text-4xl font-bold text-white">
          Web3 Profile
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Bio Card */}
        <motion.div
          variants={item}
          className="card-glow bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-800 shrink-0">
              <img src="/me.jpg" alt="Badr Sakine" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-mono)] text-lg font-semibold text-white">
                Badr Sakine
              </h2>
              <p className="text-xs font-[family-name:var(--font-mono)] text-emerald-400/70">
                vibecoder.x
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Math Teacher &amp; Vibe Coder</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Casablanca, Morocco</span>
            </div>
          </div>

          {/* Social */}
          <div className="mt-6 pt-6 border-t border-slate-800 flex items-center gap-4">
            <a href="https://www.linkedin.com/in/badrs/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://x.com/vibecoder_x" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </motion.div>

        {/* Domain Portfolio */}
        <motion.div
          variants={item}
          className="lg:col-span-2 card-glow bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <span className="font-[family-name:var(--font-mono)] text-sm text-white font-medium">Domain Portfolio</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {domains.map((domain) => (
              <div
                key={domain.name}
                className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors"
              >
                <div>
                  <span className="font-[family-name:var(--font-mono)] text-sm text-white">{domain.name}</span>
                </div>
                <span className={`text-[10px] font-[family-name:var(--font-mono)] px-2.5 py-1 rounded-full border ${domain.color}`}>
                  {domain.category}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={item}
          className="lg:col-span-3 card-glow bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="font-[family-name:var(--font-mono)] text-sm text-white font-medium">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800/50 text-slate-400 rounded-lg text-xs font-[family-name:var(--font-mono)] hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/20 border border-transparent transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Startup Ideas */}
        <motion.div
          variants={item}
          className="lg:col-span-3 card-glow bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-[family-name:var(--font-mono)] text-sm text-white font-medium">Startup Ideas &amp; Incubation Roadmap</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-800/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <h3 className="font-[family-name:var(--font-mono)] text-white text-base">SmartMarrakech.com</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                An intelligent urban ecosystem framework. Connecting autonomous agents to city infrastructure for optimized traffic, clean energy grids, and predictive public services.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-800/60 text-slate-500 rounded text-[10px] font-[family-name:var(--font-mono)] tracking-wider uppercase">IoT</span>
                <span className="px-2 py-1 bg-slate-800/60 text-slate-500 rounded text-[10px] font-[family-name:var(--font-mono)] tracking-wider uppercase">Smart City Ecosystem</span>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-800/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <h3 className="font-[family-name:var(--font-mono)] text-white text-base">MarrakechTourism.com</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Next-gen tourism portal for the Red City. AI-curated itineraries, real-time cultural event indexing, and immersive digital twins for Moroccan heritage sites.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-800/60 text-slate-500 rounded text-[10px] font-[family-name:var(--font-mono)] tracking-wider uppercase">TravelTech</span>
                <span className="px-2 py-1 bg-slate-800/60 text-slate-500 rounded text-[10px] font-[family-name:var(--font-mono)] tracking-wider uppercase">Ecosystem Roadmap</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
