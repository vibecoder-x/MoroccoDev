"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MeetingModal({ isOpen, onClose }: MeetingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formsubmit.co/ajax/sakinebadr@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity"
          />

          {/* Modal Overlay */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 pointer-events-auto overflow-hidden"
            >
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h3 className="font-[family-name:var(--font-mono)] text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Strategic Meeting Request
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="text-center py-10"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mb-5 relative">
                      <span className="absolute inset-0 rounded-full border border-emerald-200 animate-ping opacity-50" />
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="font-[family-name:var(--font-mono)] text-2xl font-bold text-slate-900 mb-2">Request Submitted!</h4>
                    <p className="text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. Your strategic meeting request has been securely delivered, and I will be in touch shortly.
                    </p>
                    <button 
                      onClick={onClose} 
                      className="px-8 py-3 bg-slate-900 text-white font-[family-name:var(--font-mono)] font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-md shadow-slate-900/10"
                    >
                      Return to Dashboard
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                      Submit this form to schedule a direct strategic meeting regarding sovereign infrastructure, AI startups, or premium domain acquisitions.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* FormSubmit Configuration */}
                      <input type="hidden" name="_subject" value="New Strategic Meeting Request!" />
                      <input type="hidden" name="_template" value="table" />
                      <input type="hidden" name="_captcha" value="false" />

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-[family-name:var(--font-mono)]">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-[family-name:var(--font-mono)]">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-[family-name:var(--font-mono)]">
                          Organization / Project
                        </label>
                        <input
                          type="text"
                          name="organization"
                          required
                          placeholder="Your Company or Project Name"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-[family-name:var(--font-mono)]">
                          Purpose of Meeting
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={3}
                          placeholder="Briefly describe what you would like to discuss..."
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-medium resize-none"
                        ></textarea>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-6 py-4 bg-emerald-600 text-white font-[family-name:var(--font-mono)] text-sm font-bold rounded-xl hover:bg-emerald-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Request"}
                          {!isSubmitting && (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
