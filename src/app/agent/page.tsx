"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/* ─── Animation ─── */
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

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
    <div className="flex flex-col h-full min-h-[500px]">
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
            <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
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
          className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/40 font-[family-name:var(--font-mono)] disabled:opacity-50"
        />
        <button type="submit" disabled={!input.trim() || busy}
          className="px-4 rounded-xl bg-emerald-500 text-slate-950 text-sm font-bold hover:bg-emerald-400 disabled:opacity-30 transition-colors">
          ↑
        </button>
      </form>
    </div>
  );
}

/* ─── Page ─── */
export default function AgentPage() {
  return (
    <motion.div className="p-6 lg:p-8 min-h-screen flex flex-col items-center justify-center text-center" variants={stagger} initial="hidden" animate="show">
      <motion.div variants={fade} className="mb-6 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-[family-name:var(--font-mono)] text-slate-500 tracking-widest uppercase">
            Badr Agent
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-mono)] text-2xl lg:text-3xl font-bold text-white">
          Talk to my Digital Twin
        </h1>
        <p className="text-slate-500 text-sm mt-2 max-w-lg">
          Ask anything about my projects, Morocco AI 2030 vision, blockchain ventures, or GITEX Africa 2026.
        </p>
      </motion.div>

      <motion.div variants={fade} className="backdrop-blur-xl bg-white/5 border border-white/[0.06] rounded-3xl p-6 w-full max-w-2xl text-left">
        <TwinConsole />
      </motion.div>
    </motion.div>
  );
}
