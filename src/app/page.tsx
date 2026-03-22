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
  "SmartMarrakech.com", "MarrakechTourism.com", "idhub.xyz", "MoroccoDev.com",
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
    name: "BTCIndexer",
    domain: "BTCIndexer.com",
    url: "https://btcindexer.com",
    thumb: "/btcindexer.png",
    value: "High-performance Bitcoin block scanner, transaction indexer & wallet analytics engine.",
  },
  {
    name: "WorldNews.day",
    domain: "WorldNews.day",
    url: "https://worldnews.day",
    thumb: "/worldnews.png",
    value: "Fully autonomous, AI-curated global news — zero human editors, 24/7 coverage.",
  },
  {
    name: "Superfox",
    domain: "Superfox.net",
    url: "https://superfox.net",
    thumb: "/superfox.png",
    value: "Interactive children's education platform — learning through play and creativity.",
  },
  {
    name: "CalculatorRobot",
    domain: "CalculatorRobot.com",
    url: "https://calculatorrobot.com",
    thumb: "/calculatorrobot.png",
    value: "AI-powered multi-purpose calculator — math, finance, science & conversion tools.",
  },
];

/* ─── Card Style ─── */
const card = "backdrop-blur-xl bg-white border border-slate-200 shadow-sm shadow-slate-200/50 rounded-3xl";

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
                className="rounded-3xl border border-slate-200 object-cover shadow-md shadow-slate-200"
              />
            </div>

            {/* Bio */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-[family-name:var(--font-mono)] text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Badr Sakine
              </h1>
              <p className="text-emerald-600 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] mt-2">
                Solopreneur & Venture Builder
              </p>
              <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-emerald-500 text-white font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider font-bold shadow-sm shadow-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Verified Digital Transformation Leader
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mt-4 max-w-lg">
                Buying, building, and scaling the <span className="text-slate-900 font-semibold">Agentic Web</span> for Morocco.
                10+ years in Mathematics education, now engineering sovereign AI infrastructure, blockchain indexers, and automated media platforms for the Kingdom and the MENA region.
              </p>
              <div className="flex items-center gap-2 mt-5 justify-center md:justify-start">
                <span className="text-slate-500 text-xs font-[family-name:var(--font-mono)]">📍 Marrakech, Morocco</span>
              </div>
            </div>

            {/* Stats */}
            <div className="shrink-0 text-center md:text-right space-y-4">
              <div>
                <div className="font-[family-name:var(--font-mono)] text-4xl font-black text-slate-900">2,500<span className="text-emerald-500">+</span></div>
                <div className="text-[10px] font-[family-name:var(--font-mono)] text-slate-400 uppercase tracking-wider mt-0.5">Managed Domains</div>
              </div>
              <div className="h-px bg-slate-200 w-24 mx-auto md:ml-auto md:mr-0" />
              <div>
                <div className="font-[family-name:var(--font-mono)] text-4xl font-black text-slate-900">10<span className="text-emerald-500">+</span></div>
                <div className="text-[10px] font-[family-name:var(--font-mono)] text-slate-400 uppercase tracking-wider mt-0.5">Strategic Assets Managed</div>
              </div>
            </div>
          </div>

          {/* Domain Marquee — seamless infinite scroll */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="relative overflow-hidden h-6">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
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

        {/* ── Section Title ── */}
        <div className="md:col-span-2 xl:col-span-4 mt-8 mb-2 px-2">
          <h2 className="font-[family-name:var(--font-mono)] text-xl font-black text-slate-900 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Acquired Live Projects
          </h2>
        </div>

        {/* ── 2. Project Cards with Website Previews ── */}
        {ventures.map((v) => (
          <motion.div key={v.name} variants={fade}
            className={`${card} p-0 flex flex-col overflow-hidden group hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-100 transition-all`}
          >
            {/* Website Preview Thumbnail */}
            <a href={v.url} target="_blank" rel="noopener noreferrer" className="block relative border-b border-slate-100">
              <div className="relative w-full h-44 overflow-hidden bg-slate-100 cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.thumb}
                  alt={`${v.name} homepage`}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </a>

            {/* Info */}
            <div className="p-5 flex-1 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-slate-900 font-bold">{v.name}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-[family-name:var(--font-mono)] text-emerald-600 uppercase tracking-wider font-semibold">Live</span>
                  </div>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed">{v.value}</p>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-[family-name:var(--font-mono)] text-slate-400">{v.domain}</span>
                <a href={v.url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-[family-name:var(--font-mono)] text-emerald-600 font-semibold hover:text-emerald-500 transition-colors">
                  Visit →
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* ── 3. IDHUB Premium Domains Promo ── */}
        <motion.div variants={fade} className={`${card} md:col-span-2 xl:col-span-4 p-8 mt-4 flex flex-col md:flex-row items-center gap-8 group`} >
           <div className="shrink-0 bg-white p-2 rounded-3xl border border-slate-100 shadow-sm">
             <Image src="/idhub.png" alt="idhub.xyz logo" width={120} height={120} className="rounded-2xl object-cover" />
           </div>
           <div className="flex-1 text-center md:text-left">
             <h3 className="font-[family-name:var(--font-mono)] text-3xl font-black text-slate-900 tracking-tight">idhub.xyz</h3>
             <p className="text-emerald-600 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest mt-1 mb-3 font-semibold">Home of Premium Domains shown as future objects</p>
             <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
               idhub.xyz is the exclusive home of my premium domain portfolio. Every domain is positioned not just as a web address, but as a high-value future digital asset and sovereign identity object ready for incubation.
             </p>
           </div>
           <div className="shrink-0 mt-4 md:mt-0">
             <a href="https://idhub.xyz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white font-[family-name:var(--font-mono)] text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-md shadow-slate-900/10">
               Explore idhub.xyz →
             </a>
           </div>
        </motion.div>

        {/* ── 4. Agentic Morocco Hub (Full Width) ── */}
        <motion.div variants={fade} className={`${card} md:col-span-2 xl:col-span-4 p-8 flex flex-col md:flex-row gap-8 bg-white relative overflow-hidden group`}>
          <div className="flex-1 z-10">
            <h2 className="font-[family-name:var(--font-mono)] text-3xl font-black text-slate-900 mb-2">AgenticMorocco.com</h2>
            <p className="text-emerald-600 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest font-bold mb-6">
              Primary Ecosystem
            </p>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mb-8">
              Building the Sovereign AI Operating System for the Kingdom. Our hub unifies specialized sectors to accelerate Morocco's digital transformation via sovereign, autonomous protocols.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 gap-4 z-10 w-full mb-4 md:mb-0">
            {/* Sub-vertical 1 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm transition-shadow hover:shadow-md hover:border-emerald-100">
              <div className="p-2.5 bg-emerald-100/50 text-emerald-600 rounded-lg shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-mono)] text-sm font-bold text-slate-900">AgenticMena.com</h4>
                <p className="text-slate-500 text-xs mt-1">Regional Scaling & Deployment</p>
              </div>
            </div>
            {/* Sub-vertical 2 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm transition-shadow hover:shadow-md hover:border-blue-100">
              <div className="p-2.5 bg-blue-100/50 text-blue-600 rounded-lg shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-mono)] text-sm font-bold text-slate-900">MoroccoEdu.com</h4>
                <p className="text-slate-500 text-xs mt-1">Education & AI Literacy</p>
              </div>
            </div>
            {/* Sub-vertical 3 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm transition-shadow hover:shadow-md hover:border-orange-100">
              <div className="p-2.5 bg-orange-100/50 text-orange-600 rounded-lg shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-mono)] text-sm font-bold text-slate-900">AutoMorocco.com</h4>
                <p className="text-slate-500 text-xs mt-1">Industrial & Logistics Automation</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 5. Marrakech Pilot (Half Width md) ── */}
        <motion.div variants={fade} className={`${card} md:col-span-1 xl:col-span-2 p-8 flex flex-col justify-between group`}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-emerald-50 rounded-xl">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-mono)] text-xl font-bold text-slate-900">Marrakech:<br/>The Pilot Smart City</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Our 2026 roadmap begins with Marrakech. We are deploying a localized smart-city ecosystem designed for high-density tourism and urban efficiency.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Once validated, this Agentic model will scale natively to Casablanca, Rabat, and Tangier.
            </p>
          </div>
        </motion.div>

        {/* ── 6. Follow & Connect (Half Width md) ── */}
        <motion.div variants={fade} className={`${card} md:col-span-1 xl:col-span-2 p-8 flex flex-col justify-between`}>
          <div>
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-50 rounded-xl border border-blue-100">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-mono)] text-xl font-bold text-slate-900">Follow &amp; Connect</h3>
            </div>
            
            <p className="text-slate-600 text-sm mb-6 max-w-sm">
              Ready to discuss sovereign infrastructure, AI startups, or premium domain acquisitions? Get in touch.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="https://x.com/vibecoder_x" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors text-slate-900 text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                @vibecoder_x
              </a>
              <a href="https://linkedin.com/in/badrs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors text-slate-900 text-sm font-medium">
                <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>

            <a href="mailto:badr@moroccodev.com?subject=Strategic%20Meeting%20Request" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-emerald-600 text-white font-[family-name:var(--font-mono)] text-sm font-bold rounded-xl hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-600/20">
              Request Strategic Meeting →
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
