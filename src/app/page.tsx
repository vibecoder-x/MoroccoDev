"use client";

import { useState, useRef, useEffect } from "react";
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
  "SelfAim.com", "SymbolicGPT.com", "ServyAI.com", "VectorDbs.com",
  "AutoMorocco.com", "AgenticMena.com", "AgentPerception.com", "RCPagent.com",
  "SmartMarrakech.com", "Marrakechtourism.com", "idhub.xyz", "MoroccoDev.com",
  "BTCIndexer.com", "WorldNews.day", "DIDdomains.com", "WantedAgent.com",
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

/* ─── Inline Twin Agent ─── */
type Msg = { role: "user" | "assistant"; content: string };

function TwinConsole() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", content: "Marhaba! 👋 I'm Badr's AI twin. Ask about our ventures or Morocco AI 2030." },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, busy]);

  const send = async (t: string) => {
    if (!t.trim() || busy) return;
    const next = [...msgs, { role: "user" as const, content: t }];
    setMsgs(next); setInput(""); setBusy(true);
    try {
      const r = await fetch("/api/chat", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "API error");
      setMsgs(p => [...p, { role: "assistant", content: d.choices?.[0]?.message?.content || "…" }]);
    } catch (e: any) {
      setMsgs(p => [...p, { role: "assistant", content: e.message }]);
    } finally { setBusy(false); }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Terminal dots */}
      <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06]">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-red-400/70" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
        </div>
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-slate-500 uppercase tracking-[0.2em]">
          badr_agent · live
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-2.5 py-3 custom-scrollbar min-h-0">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[88%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
              m.role === "user"
                ? "bg-emerald-500 text-slate-950 font-medium rounded-br-sm"
                : "bg-white/[0.04] text-slate-300 font-[family-name:var(--font-mono)] border border-white/[0.06] rounded-bl-sm"
            }`}>{m.content}</div>
          </div>
        ))}
        {busy && (
          <div className="flex justify-start">
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl px-3 py-2.5 flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <form onSubmit={e => { e.preventDefault(); send(input); }} className="flex gap-2 pt-3 border-t border-white/[0.06]">
        <input
          value={input} onChange={e => setInput(e.target.value)} disabled={busy}
          placeholder="Message the twin..."
          className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/40 font-[family-name:var(--font-mono)] disabled:opacity-50"
        />
        <button type="submit" disabled={!input.trim() || busy}
          className="px-3 rounded-xl bg-emerald-500 text-slate-950 text-sm font-bold hover:bg-emerald-400 disabled:opacity-30 transition-colors">
          ↑
        </button>
      </form>
    </div>
  );
}

/* ─── Page ─── */
export default function DashboardPage() {
  return (
    <motion.div className="p-4 lg:p-6" variants={stagger} initial="hidden" animate="show">

      {/* ── Bento Grid (4-col) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">

        {/* 1 ▸ Identity Box — 2×2 */}
        <motion.div variants={fade} className={`${card} md:col-span-2 xl:col-span-2 xl:row-span-2 p-8 flex flex-col justify-between`}>
          <div>
            <div className="flex items-start gap-5 mb-6">
              <Image src="/me.jpg" alt="Badr Sakine" width={100} height={100}
                className="rounded-2xl border border-white/10 object-cover shrink-0" />
              <div>
                <h1 className="font-[family-name:var(--font-mono)] text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Badr Sakine
                </h1>
                <p className="text-emerald-400 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.25em] mt-1">
                  Solopreneur & Venture Builder
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Buying, building, and scaling the <span className="text-white font-medium">Agentic Web</span> for Morocco.
              From sovereign LLMs to blockchain indexers — engineering the future of the Kingdom.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.06]">
            <a href="https://x.com/vibecoder_x" target="_blank" className="text-slate-500 hover:text-emerald-400 transition-colors text-xs font-[family-name:var(--font-mono)]">𝕏 @vibecoder_x</a>
            <span className="text-slate-800">·</span>
            <a href="https://linkedin.com/in/badrs" target="_blank" className="text-slate-500 hover:text-emerald-400 transition-colors text-xs font-[family-name:var(--font-mono)]">LinkedIn</a>
            <span className="text-slate-800">·</span>
            <span className="text-slate-600 text-xs font-[family-name:var(--font-mono)]">Marrakech 🇲🇦</span>
          </div>
        </motion.div>

        {/* 2 ▸ Venture Cards (stack in right col) */}
        {ventures.map((v) => (
          <motion.div key={v.name} variants={fade}
            className={`${card} p-5 flex flex-col justify-between group hover:border-${v.color}-500/20 transition-colors`}
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

        {/* 3 ▸ Digital Assets — Domain Marquee */}
        <motion.div variants={fade} className={`${card} md:col-span-2 p-6 overflow-hidden`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-[family-name:var(--font-mono)] text-sm text-white font-semibold">Digital Assets</h2>
            <div className="font-[family-name:var(--font-mono)] text-3xl font-black text-white">
              2,000<span className="text-emerald-400">+</span>
              <span className="text-[10px] font-normal text-slate-500 uppercase tracking-wider ml-2">domains</span>
            </div>
          </div>
          <div className="relative overflow-hidden h-8">
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-950 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-950 to-transparent z-10" />
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...domainNames, ...domainNames].map((d, i) => (
                <span key={i} className="text-xs font-[family-name:var(--font-mono)] text-slate-500">{d}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 4 ▸ GITEX 2026 — Buyer Card */}
        <motion.div variants={fade}
          className={`${card} md:col-span-2 p-6 relative overflow-hidden border-emerald-500/10`}
        >
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/[0.07] rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="font-[family-name:var(--font-mono)] text-sm text-white font-semibold">
                  Strategic Buyer @ GITEX Africa
                </h2>
                <p className="text-slate-500 text-[10px] font-[family-name:var(--font-mono)] mt-0.5 uppercase tracking-wider">
                  Marrakech 2026 · Morocco AI 2030
                </p>
              </div>
              <a href="/gitex"
                className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider hover:bg-emerald-500/20 transition-colors whitespace-nowrap">
                Book Meeting
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "⚡", label: "GPU Infrastructure", sub: "Compute for sovereign LLM training" },
                { icon: "🧠", label: "Sovereign AI", sub: "Multilingual models (AR/FR/Darija)" },
                { icon: "🔗", label: "Web3 & Data", sub: "On-chain indexers & data sovereignty" },
              ].map((b) => (
                <div key={b.label} className="bg-white/[0.03] rounded-2xl p-3 border border-white/[0.04]">
                  <div className="text-lg mb-1">{b.icon}</div>
                  <div className="font-[family-name:var(--font-mono)] text-[11px] text-white font-medium">{b.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">{b.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 5 ▸ Twin Agent Console — 2 cols */}
        <motion.div variants={fade}
          className={`${card} md:col-span-2 p-5 flex flex-col`}
          style={{ minHeight: "380px" }}
        >
          <TwinConsole />
        </motion.div>
      </div>
    </motion.div>
  );
}
