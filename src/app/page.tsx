"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ─── Animation Variants ─── */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

/* ─── Data ─── */
const projects = [
  {
    name: "AgenticMorocco.com",
    desc: "Sovereign AI infrastructure for the Kingdom of Morocco.",
    tag: "Sovereign AI",
    tagColor: "emerald",
    progress: 35,
  },
  {
    name: "BTCIndexer.com",
    desc: "Bitcoin block scanner, transaction indexer & wallet tracker.",
    tag: "Web3",
    tagColor: "orange",
    progress: 62,
  },
  {
    name: "WorldNews.day",
    desc: "Fully automated, AI-curated global news feed.",
    tag: "Sovereign AI",
    tagColor: "emerald",
    progress: 88,
  },
];

const buyerInterests = [
  { label: "GPU Compute", icon: "⚡", detail: "Securing GPU compute partners for sovereign LLM training in Africa." },
  { label: "Sovereign LLMs", icon: "🧠", detail: "Fine-tuned multilingual models (Arabic, French, Darija) for Morocco." },
  { label: "Data Sovereignty", icon: "🔒", detail: "On-premise data pipelines — full compliance with Morocco's 09-08 law." },
];

/* ─── Inline Agentic Console ─── */
type Msg = { role: "user" | "assistant"; content: string };

function AgenticConsole() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Marhaba! 👋 Ask me anything about Badr's projects or the Morocco AI 2030 vision." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "API error");
      const reply = data.choices?.[0]?.message?.content || "…";
      setMessages((p) => [...p, { role: "assistant", content: reply }]);
    } catch (e: any) {
      setMessages((p) => [...p, { role: "assistant", content: e.message }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Console Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-red-500/60" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
        </div>
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-slate-500 uppercase tracking-widest">
          badr_agent // live
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1 custom-scrollbar min-h-0">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[88%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
              m.role === "user"
                ? "bg-emerald-500 text-slate-950 font-medium"
                : "bg-slate-800/70 text-slate-300 font-[family-name:var(--font-mono)] border border-slate-700/40"
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-800/70 border border-slate-700/40 rounded-xl px-3 py-2.5 flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2 mt-3 pt-3 border-t border-slate-800">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask the twin..."
          disabled={loading}
          className="flex-1 bg-slate-800/40 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 font-[family-name:var(--font-mono)] disabled:opacity-50"
        />
        <button type="submit" disabled={!input.trim() || loading} className="px-3 py-2 rounded-lg bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 disabled:opacity-40 transition-colors">
          ›
        </button>
      </form>
    </div>
  );
}

/* ─── Main Dashboard ─── */
export default function DashboardPage() {
  return (
    <motion.div className="p-6 lg:p-8" variants={container} initial="hidden" animate="show">

      {/* Header */}
      <motion.div variants={item} className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-[family-name:var(--font-mono)] text-slate-500 tracking-widest uppercase">
            Executive Dashboard
          </span>
        </div>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* ── 1. Profile Box (spans 2 cols) ── */}
        <motion.div
          variants={item}
          className="lg:col-span-2 card-glow bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="shrink-0">
            <Image
              src="/me.jpg"
              alt="Badr Sakine"
              width={120}
              height={120}
              className="rounded-2xl border-2 border-emerald-500/30 object-cover"
            />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-mono)] text-2xl lg:text-3xl font-bold text-white">
              Badr Sakine
            </h1>
            <p className="text-emerald-400 font-[family-name:var(--font-mono)] text-sm mt-1">
              Solopreneur
            </p>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-md">
              I build, buy, and sell <span className="text-white font-medium">AI &amp; Blockchain startups</span>. Building sovereign infrastructure for the Kingdom of Morocco and the MENA region.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://x.com/vibecoder_x" target="_blank" className="text-slate-500 hover:text-emerald-400 transition-colors text-xs font-[family-name:var(--font-mono)]">@vibecoder_x</a>
              <span className="text-slate-700">|</span>
              <a href="https://linkedin.com/in/badrs" target="_blank" className="text-slate-500 hover:text-emerald-400 transition-colors text-xs font-[family-name:var(--font-mono)]">LinkedIn</a>
            </div>
          </div>
        </motion.div>

        {/* ── 2. Portfolio Stats ── */}
        <motion.div
          variants={item}
          className="card-glow bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 flex flex-col justify-center"
        >
          <div className="space-y-6">
            <div>
              <div className="font-[family-name:var(--font-mono)] text-4xl font-black text-white">2,000<span className="text-emerald-400">+</span></div>
              <div className="text-[11px] font-[family-name:var(--font-mono)] text-slate-500 uppercase tracking-wider mt-1">Managed Domains</div>
            </div>
            <div className="h-px bg-slate-800" />
            <div>
              <div className="font-[family-name:var(--font-mono)] text-4xl font-black text-white">5<span className="text-emerald-400">+</span></div>
              <div className="text-[11px] font-[family-name:var(--font-mono)] text-slate-500 uppercase tracking-wider mt-1">Active AI Projects</div>
            </div>
          </div>
        </motion.div>

        {/* ── 3. Project Grid (spans 2 cols) ── */}
        <motion.div
          variants={item}
          className="lg:col-span-2 card-glow bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-[family-name:var(--font-mono)] text-sm text-white font-semibold">Active Projects</h2>
            <a href="/labs" className="text-xs font-[family-name:var(--font-mono)] text-slate-500 hover:text-emerald-400 transition-colors">View all →</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {projects.map((p) => (
              <div key={p.name} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-emerald-500/20 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-white font-medium">{p.name}</span>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-[family-name:var(--font-mono)] uppercase tracking-wider ${
                    p.tagColor === "emerald"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                  }`}>
                    {p.tag}
                  </span>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed mb-3">{p.desc}</p>
                <div className="w-full bg-slate-800 rounded-full h-1">
                  <div
                    className={`h-1 rounded-full ${p.tagColor === "emerald" ? "bg-emerald-400" : "bg-orange-400"}`}
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
                <span className="text-[9px] font-[family-name:var(--font-mono)] text-slate-600 mt-1 block">{p.progress}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── 4. Agentic Console (1 col, tall) ── */}
        <motion.div
          variants={item}
          className="lg:row-span-2 card-glow bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-5 flex flex-col"
          style={{ minHeight: "420px" }}
        >
          <AgenticConsole />
        </motion.div>

        {/* ── 5. GITEX 2026 Strategy / Buyer Interests (spans 2 cols) ── */}
        <motion.div
          variants={item}
          className="lg:col-span-2 card-glow bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-[family-name:var(--font-mono)] text-sm text-white font-semibold">GITEX Africa 2026 — Buyer Interests</h2>
              <p className="text-slate-500 text-[11px] font-[family-name:var(--font-mono)] mt-1">Strategic acquisitions aligned with Morocco AI 2030</p>
            </div>
            <a href="/gitex" className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider hover:bg-emerald-500/20 transition-colors">
              Book Meeting
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {buyerInterests.map((b) => (
              <div key={b.label} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-emerald-500/20 transition-colors">
                <div className="text-2xl mb-2">{b.icon}</div>
                <h3 className="font-[family-name:var(--font-mono)] text-xs text-white font-semibold mb-1">{b.label}</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">{b.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
