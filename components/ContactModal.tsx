"use client";
import { useState, useEffect, useRef } from "react";
import {
  X,
  Send,
  CheckCircle,
  User,
  Mail,
  MessageSquare,
  Tag,
  Loader2,
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUBJECTS = [
  "Early Access / Waitlist",
  "Product Demo Request",
  "Partnership / Investment",
  "Press Inquiry",
  "Technical Question",
  "Other",
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.subject) errs.subject = "Please select a subject";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 20)
      errs.message = "Message must be at least 20 characters";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1600));
    setLoading(false);
    setSent(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="modal-panel w-full max-w-lg bg-[#111113] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/60">
        {/* Header */}
        <div className="relative px-8 pt-8 pb-6 border-b border-white/8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5c800]/5 to-transparent pointer-events-none" />
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-lg bg-[#f5c800] flex items-center justify-center">
                  <span className="text-black font-black text-xs">T</span>
                </div>
                <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">
                  Thrive
                </span>
              </div>
              <h2 className="text-2xl font-black text-white">Get in Touch</h2>
              <p className="text-white/40 text-sm mt-1">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-7 max-h-[70vh] overflow-y-auto">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
              <div className="relative">
                <div className="pulse-ring absolute inset-0 rounded-full bg-[#f5c800]/20" />
                <div className="w-16 h-16 rounded-full bg-[#f5c800]/15 border border-[#f5c800]/30 flex items-center justify-center relative">
                  <CheckCircle size={28} className="text-[#f5c800]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                  Thanks, <span className="text-white/80">{form.name}</span>.
                  We&apos;ve received your message and will reply to{" "}
                  <span className="text-[#f5c800]">{form.email}</span> shortly.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="mt-4 bg-[#f5c800] text-black font-bold px-8 py-3 rounded-xl hover:brightness-110 transition-all text-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/50 text-xs font-semibold tracking-wider uppercase mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      size={14}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                    />
                    <input
                      ref={firstInputRef}
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Jane Smith"
                      className={`w-full bg-white/5 border ${
                        errors.name ? "border-red-500/50" : "border-white/10"
                      } rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#f5c800]/40 focus:bg-white/8 transition-all`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-white/50 text-xs font-semibold tracking-wider uppercase mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={14}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                    />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="jane@example.com"
                      className={`w-full bg-white/5 border ${
                        errors.email ? "border-red-500/50" : "border-white/10"
                      } rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#f5c800]/40 focus:bg-white/8 transition-all`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white/50 text-xs font-semibold tracking-wider uppercase mb-2">
                  Subject
                </label>
                <div className="relative">
                  <Tag
                    size={14}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none"
                  />
                  <select
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className={`w-full bg-white/5 border ${
                      errors.subject ? "border-red-500/50" : "border-white/10"
                    } rounded-xl pl-9 pr-4 py-3 text-sm outline-none focus:border-[#f5c800]/40 focus:bg-white/8 transition-all appearance-none cursor-pointer ${
                      form.subject ? "text-white" : "text-white/30"
                    }`}
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <option
                      value=""
                      disabled
                      style={{
                        background: "#111113",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      Select a subject…
                    </option>
                    {SUBJECTS.map((s) => (
                      <option
                        key={s}
                        value={s}
                        style={{ background: "#111113", color: "#fff" }}
                      >
                        {s}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path
                        d="M1 1l4 4 4-4"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/50 text-xs font-semibold tracking-wider uppercase mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare
                    size={14}
                    className="absolute left-3.5 top-3.5 text-white/25"
                  />
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your interest in Thrive, any questions, or how we can help…"
                    rows={5}
                    className={`w-full bg-white/5 border ${
                      errors.message ? "border-red-500/50" : "border-white/10"
                    } rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#f5c800]/40 focus:bg-white/8 transition-all resize-none`}
                  />
                </div>
                <div className="flex items-center justify-between mt-1">
                  {errors.message ? (
                    <p className="text-red-400 text-xs">{errors.message}</p>
                  ) : (
                    <span />
                  )}
                  <span
                    className={`text-xs ${
                      form.message.length > 0
                        ? "text-white/30"
                        : "text-transparent"
                    }`}
                  >
                    {form.message.length} chars
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#f5c800] text-black font-bold py-4 rounded-xl hover:brightness-110 hover:scale-[1.01] transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:scale-100"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </button>

              <p className="text-white/20 text-xs text-center">
                We&apos;ll reply to your email within 24 hours. Your info is
                never shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
