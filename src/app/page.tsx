"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ─── Animation ─── */
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

/* ─── Domain Marquee Data ─── */
const domainNames = [
  "SymbolicGPT.com", "ServyAI.com", "VectorDbs.com",
  "AutoMorocco.com", "AgenticMena.com", "AgentPerception.com", "RCPagent.com",
  "SmartMarrakech.com", "Marrakechtourism.com", "idhub.xyz", "MoroccoDev.com",
  "BTCIndexer.com", "WorldNews.day", "DIDdomains.com", "WantedAgent.com",
  "ArificialEra.com", "3Ddraft.com", "AgentsLTD.com", "AutoObject.com",
  "CalculatorRobot.com", "USDcalculator.com", "CanadaDesk.com", "ColleagueAgent.com",
  "DownTownAbudhabi.com", "EndingGame.com", "Leurai.com", "Nowvi.com",
  "majorID.com", "MarrakechCulture.com", "MoroccoEdu.com", "MarrakechMap.com",
  "MoroccoBook.com", "OpenModality.com", "Robotike.com", "Sablor.com",
];

/* ─── Venture Stack Data ─── */
const ventures = [
  {
    name: "Agentic Morocco",
    domain: "AgenticMorocco.com",
    value: "Sovereign AI infrastructure for the Kingdom. Building the backbone of Morocco AI 2030.",
    color: "emerald",
  },
  {
    name: "BTCIndexer",
    domain: "BTCIndexer.com",
    value: "Real-time Bitcoin block scanner, transaction indexer & wallet analytics engine.",
    color: "orange",
  },
  {
    name: "WorldNews.day",
    domain: "WorldNews.day",
    value: "Fully autonomous, AI-curated global news — zero human editors, 24/7 coverage.",
    color: "cyan",
  },
];

/* ─── Card Style ─── */
const card = "backdrop-blur-xl bg-white/5 border border-white/[0.06] rounded-3xl";

/* ─── Page ─── */
export default function DashboardPage() {
  return (
    <motion.div className="p-4 lg:p-6" variants={stagger} initial="hidden" animate="show">

      {/* ── Bento Grid (4-col) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">

        {/* ── 1. Profile Box + Domain Marquee (spans full width) ── */}
        <motion.div variants={fade} className={`${card} md:col-span-2 xl:col-span-4 p-8`}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Photo */}
            <div className="shrink-0">
              <Image
                src="/me.jpg"
                alt="Badr Sakine"
                width={180}
                height={180}
                className="rounded-3xl border-2 border-emerald-500/20 object-cover shadow-lg shadow-emerald-500/5"
              />
            </div>

            {/* Bio */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-[family-name:var(--font-mono)] text-4xl lg:text-5xl font-black text-white tracking-tight">
                Badr Sakine
              </h1>
              <p className="text-emerald-400 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] mt-2">
                Solopreneur & Venture Builder
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mt-4 max-w-lg">
                Buying, building, and scaling the <span className="text-white font-semibold">Agentic Web</span> for Morocco.
                10+ years in Mathematics education, now engineering sovereign AI infrastructure, blockchain indexers, and automated media platforms for the Kingdom and the MENA region.
              </p>
              <div className="flex items-center gap-4 mt-5 justify-center md:justify-start">
                <a href="https://x.com/vibecoder_x" target="_blank" className="text-slate-500 hover:text-emerald-400 transition-colors text-xs font-[family-name:var(--font-mono)]">𝕏 @vibecoder_x</a>
                <span className="text-slate-800">·</span>
                <a href="https://linkedin.com/in/badrs" target="_blank" className="text-slate-500 hover:text-emerald-400 transition-colors text-xs font-[family-name:var(--font-mono)]">LinkedIn</a>
                <span className="text-slate-800">·</span>
                <span className="text-slate-600 text-xs font-[family-name:var(--font-mono)]">Marrakech 🇲🇦</span>
              </div>
            </div>

            {/* Stats */}
            <div className="shrink-0 text-center md:text-right space-y-4">
              <div>
                <div className="font-[family-name:var(--font-mono)] text-4xl font-black text-white">2,500<span className="text-emerald-400">+</span></div>
                <div className="text-[10px] font-[family-name:var(--font-mono)] text-slate-500 uppercase tracking-wider mt-0.5">Managed Domains</div>
              </div>
              <div className="h-px bg-white/[0.06] w-24 mx-auto md:ml-auto md:mr-0" />
              <div>
                <div className="font-[family-name:var(--font-mono)] text-4xl font-black text-white">10<span className="text-emerald-400">+</span></div>
                <div className="text-[10px] font-[family-name:var(--font-mono)] text-slate-500 uppercase tracking-wider mt-0.5">AI Projects Acquired</div>
              </div>
            </div>
          </div>

          {/* Domain Marquee — seamless infinite scroll */}
          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <div className="relative overflow-hidden h-6">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/80 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/80 to-transparent z-10" />
              <div className="marquee-track">
                <div className="marquee-content">
                  {domainNames.map((d, i) => (
                    <span key={`a-${i}`} className="text-xs font-[family-name:var(--font-mono)] text-slate-400 mx-4">{d}</span>
                  ))}
                </div>
                <div className="marquee-content" aria-hidden="true">
                  {domainNames.map((d, i) => (
                    <span key={`b-${i}`} className="text-xs font-[family-name:var(--font-mono)] text-slate-400 mx-4">{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 2. Venture Cards ── */}
        {ventures.map((v) => (
          <motion.div key={v.name} variants={fade}
            className={`${card} p-5 flex flex-col justify-between group hover:border-emerald-500/15 transition-colors`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-[family-name:var(--font-mono)] text-xs text-white font-semibold">{v.name}</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-[family-name:var(--font-mono)] text-emerald-400/70 uppercase tracking-wider">Live</span>
                </div>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">{v.value}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.04]">
              <span className="text-[10px] font-[family-name:var(--font-mono)] text-slate-600">{v.domain}</span>
            </div>
          </motion.div>
        ))}

        {/* ── 3. GITEX 2026 — Buyer Card (glowing, spans remaining col) ── */}
        <motion.div variants={fade}
          className={`${card} md:col-span-2 xl:col-span-1 p-6 relative overflow-hidden border-emerald-500/10`}
        >
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/[0.07] rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-[family-name:var(--font-mono)] text-sm text-white font-semibold mb-1">
              Strategic Buyer
            </h2>
            <p className="text-[10px] font-[family-name:var(--font-mono)] text-emerald-400/60 uppercase tracking-wider mb-5">
              GITEX Africa 2026
            </p>
            <div className="space-y-3">
              {[
                { icon: "⚡", label: "GPU Infrastructure" },
                { icon: "🧠", label: "Sovereign AI" },
                { icon: "🔗", label: "Web3" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-3 bg-white/[0.03] rounded-xl px-3 py-2.5 border border-white/[0.04]">
                  <span className="text-base">{b.icon}</span>
                  <span className="font-[family-name:var(--font-mono)] text-[11px] text-white">{b.label}</span>
                </div>
              ))}
            </div>
            <a href="/gitex"
              className="mt-5 w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider hover:bg-emerald-500/20 transition-colors">
              Book Meeting →
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
