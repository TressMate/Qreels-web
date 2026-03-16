import React, { useState, useEffect } from 'react';
import {
  Brain, Star, Play, Target, Lightbulb, GraduationCap, Heart, Clock,
  Globe, Atom, ChevronRight, ArrowRight, Trophy, Shield, Sparkles,
  Award, Zap, Menu, X, Mail, Users, Quote, BookOpen, Flame, BarChart3,
  TrendingUp, CheckCircle2, PlayCircle, Lock, Smartphone, MessageCircle,
  ChevronDown, Mic, AlertTriangle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ─── Brand icons ─────────────────────────────────────────────────────────────
const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const XIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const YoutubeIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const LinkedInIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

// ─── Logo SVG ─────────────────────────────────────────────────────────────────
const Logo = ({ size = 34 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="22" fill="#1e40af" />
    <circle cx="46" cy="44" r="26" fill="white" />
    <circle cx="46" cy="44" r="17" fill="#1e40af" />
    <polygon points="54,60 76,74 54,88" fill="white" />
  </svg>
);

// ─── Phone component ──────────────────────────────────────────────────────────
const Phone = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative mx-auto ${className}`} style={{ width: 210 }}>
    <div className="rounded-[2.5rem] border-[6px] border-slate-900 bg-slate-950 overflow-hidden shadow-2xl shadow-slate-900/50" style={{ minHeight: 420 }}>
      {/* dynamic island notch */}
      <div className="flex justify-center pt-2 pb-1 bg-slate-950">
        <div className="w-24 h-6 bg-slate-800 rounded-full mx-auto mt-2" />
      </div>
      <div className="bg-white overflow-hidden" style={{ minHeight: 370 }}>
        {children}
      </div>
    </div>
    {/* home indicator */}
    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-700 rounded-full" />
  </div>
);

// ─── Nav items ────────────────────────────────────────────────────────────────
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about-us' },
];

// ─── Data ──────────────────────────────────────────────────────────────────────
const subjects = [
  { emoji: '🔬', label: 'Science', color: 'bg-blue-100 text-blue-700' },
  { emoji: '🧮', label: 'Maths', color: 'bg-green-100 text-green-700' },
  { emoji: '🌍', label: 'Geography', color: 'bg-amber-100 text-amber-700' },
  { emoji: '📜', label: 'History', color: 'bg-red-100 text-red-700' },
  { emoji: '🎨', label: 'Art', color: 'bg-pink-100 text-pink-700' },
  { emoji: '🎵', label: 'Music', color: 'bg-purple-100 text-purple-700' },
];

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const heroSlides = ['Home', 'Reels', 'AI', 'Explore', 'Profile'];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setHeroSlide(p => (p + 1) % heroSlides.length), 2800);
    return () => clearInterval(t);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-800 overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════════
          HEADER — fixed, glassmorphism on scroll
      ══════════════════════════════════════════════════════════════ */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Logo size={32} />
            <span className="text-xl font-black tracking-tight text-[#1e40af]">QReels</span>
          </a>

          {/* Nav center */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a key={item.label} href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-[#1e40af] transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a href="#cta"
              className="bg-[#1e40af] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
              Join Early Access
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-100 px-6 py-6 flex flex-col gap-5 shadow-xl">
              {navItems.map(item => (
                <a key={item.label} href={item.href} className="text-base font-bold text-slate-900 hover:text-[#1e40af] transition-colors"
                  onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="bg-[#1e40af] text-white px-5 py-3 rounded-full font-bold text-center"
                onClick={() => setIsMenuOpen(false)}>
                Join Early Access
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ══════════════════════════════════════════════════════════════
            SECTION 1 — HERO
        ══════════════════════════════════════════════════════════════ */}
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-28 pb-20 px-6">
          {/* Subtle blue radial glow top-right */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1e40af]/8 rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

            {/* Left — copy */}
            <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-7">
              {/* Label chip */}
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2 bg-[#1e40af]/10 text-[#1e40af] px-4 py-2 rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">AI-Powered Educational Platform</span>
              </motion.div>

              {/* H1 */}
              <motion.h1 variants={fadeUp}
                className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.06] tracking-tight text-slate-900">
                Turn Screen Time{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] to-violet-600">
                  Into Learning Time
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed max-w-lg">
                QReels is an AI-powered short video learning platform helping kids aged 6-16 learn through fun 60-second educational reels and interactive quizzes.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <a href="#solution"
                  className="inline-flex items-center gap-2 bg-[#1e40af] text-white px-7 py-3.5 rounded-full font-bold text-base shadow-lg shadow-blue-900/25 hover:bg-blue-800 transition-colors">
                  <Play className="w-4 h-4 fill-white" /> See How It Works
                </a>
                <a href="#cta"
                  className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-7 py-3.5 rounded-full font-bold text-base hover:border-[#1e40af] hover:text-[#1e40af] transition-colors">
                  Join Early Access <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Trust items */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 pt-1">
                {[
                  { icon: CheckCircle2, text: 'Safe for Kids' },
                  { icon: CheckCircle2, text: 'AI Personalised' },
                  { icon: CheckCircle2, text: 'Curriculum Aligned' },
                ].map(b => (
                  <div key={b.text} className="flex items-center gap-2 text-sm text-slate-500 font-semibold">
                    <b.icon className="w-4 h-4 text-[#1e40af]" />
                    {b.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — phone + floating pills */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              className="relative flex justify-center items-center">

              {/* 3 floating subject pills */}
              {[
                { style: 'top-6 -left-4 lg:-left-10', delay: 0, icon: '🔬', label: 'Science' },
                { style: 'top-8 -right-2 lg:-right-6', delay: 0.2, icon: '🧮', label: 'Maths' },
                { style: 'bottom-20 -left-2 lg:-left-8', delay: 0.4, icon: '📜', label: 'History' },
              ].map(f => (
                <motion.div key={f.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: [0, -6, 0] }}
                  transition={{ delay: f.delay, duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute ${f.style} bg-white border border-slate-100 shadow-md rounded-xl px-3 py-2 flex items-center gap-2 z-10`}>
                  <span className="text-base">{f.icon}</span>
                  <span className="text-xs font-bold text-slate-700">{f.label}</span>
                </motion.div>
              ))}

              {/* Phone */}
              <Phone className="relative z-20">
                {/* Status bar */}
                <div className="bg-[#1e40af] px-4 py-2 flex items-center justify-between">
                  <span className="text-white font-black text-xs tracking-tight">QReels</span>
                  <div className="flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-300 fill-orange-300" />
                    <span className="text-orange-200 text-[10px] font-bold">7-day streak</span>
                  </div>
                </div>

                {/* Slides */}
                <div className="relative overflow-hidden" style={{ height: 330 }}>
                  <AnimatePresence mode="wait" initial={false}>

                    {heroSlide === 0 && (
                      /* HOME slide */
                      <motion.div key="home"
                        initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -60, opacity: 0 }}
                        transition={{ duration: 0.32, ease: 'easeInOut' }}
                        className="absolute inset-0 px-3 py-3 flex flex-col gap-2">
                        <p className="text-xs font-black text-slate-800">Good morning, Aryan! 👋</p>
                        <div className="bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl px-3 py-2 flex items-center gap-2">
                          <Flame className="w-5 h-5 text-white fill-white flex-shrink-0" />
                          <div>
                            <p className="text-white text-xs font-black">7-Day Streak 🔥</p>
                            <p className="text-orange-100 text-[10px]">Keep it up!</p>
                          </div>
                        </div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mt-1">Today's Picks</p>
                        {[
                          { g: 'from-blue-500 to-cyan-500', e: '⚛️', t: 'Atoms & Molecules', s: 'Chemistry' },
                          { g: 'from-green-500 to-teal-500', e: '🌿', t: 'Photosynthesis', s: 'Biology' },
                          { g: 'from-violet-500 to-purple-500', e: '🔢', t: 'Prime Numbers', s: 'Maths' },
                        ].map(r => (
                          <div key={r.t} className="flex items-center gap-2 bg-slate-50 rounded-xl px-2 py-2">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${r.g} flex items-center justify-center text-sm flex-shrink-0`}>{r.e}</div>
                            <div>
                              <p className="text-[11px] font-bold text-slate-800 leading-tight">{r.t}</p>
                              <p className="text-[10px] text-slate-400">{r.s}</p>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {heroSlide === 1 && (
                      /* REELS slide */
                      <motion.div key="reels"
                        initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -60, opacity: 0 }}
                        transition={{ duration: 0.32, ease: 'easeInOut' }}
                        className="absolute inset-0 flex flex-col">
                        <div className="flex-1 relative bg-gradient-to-b from-blue-600 to-indigo-800 flex flex-col items-center justify-center px-4 py-3">
                          <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-2">Science</span>
                          <Atom className="w-14 h-14 text-blue-200 mb-3" />
                          <p className="text-white text-xs font-bold text-center leading-tight">Why is the sky blue? 🌤</p>
                          <p className="text-blue-200 text-[10px] text-center mt-1">Rayleigh scattering explained</p>
                          <div className="absolute right-2 bottom-8 flex flex-col gap-3 items-center">
                            <div className="flex flex-col items-center gap-0.5">
                              <Heart className="w-4 h-4 text-white" />
                              <span className="text-[9px] text-white">2.4k</span>
                            </div>
                            <div className="flex flex-col items-center gap-0.5">
                              <BookOpen className="w-4 h-4 text-white" />
                              <span className="text-[9px] text-white">Quiz</span>
                            </div>
                            <div className="flex flex-col items-center gap-0.5">
                              <Zap className="w-4 h-4 text-white" />
                              <span className="text-[9px] text-white">+10</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white px-3 py-2">
                          <div className="h-1 bg-slate-100 rounded-full">
                            <div className="h-full w-2/5 bg-[#1e40af] rounded-full" />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {heroSlide === 2 && (
                      /* AI slide */
                      <motion.div key="ai"
                        initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -60, opacity: 0 }}
                        transition={{ duration: 0.32, ease: 'easeInOut' }}
                        className="absolute inset-0 flex flex-col px-3 py-3 gap-2">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-7 h-7 bg-gradient-to-br from-[#1e40af] to-violet-600 rounded-xl flex items-center justify-center">
                            <Brain className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-xs font-black text-slate-800">QReels AI</p>
                          <span className="ml-auto text-[10px] bg-green-100 text-green-600 font-bold px-2 py-0.5 rounded-full">Online</span>
                        </div>
                        <div className="bg-slate-100 rounded-xl rounded-tl-none px-3 py-2 self-start max-w-[85%]">
                          <p className="text-[11px] text-slate-700">Why do planets orbit the sun? 🪐</p>
                        </div>
                        <div className="bg-blue-50 rounded-xl rounded-tr-none px-3 py-2 self-end max-w-[85%]">
                          <p className="text-[11px] text-[#1e40af] leading-relaxed">Gravity + speed = orbit! The sun pulls planets in, but their velocity keeps them circling. ✨</p>
                        </div>
                        <div className="bg-slate-100 rounded-xl rounded-tl-none px-3 py-2 self-start max-w-[85%]">
                          <p className="text-[11px] text-slate-700">Cool! What about black holes? 🕳️</p>
                        </div>
                        <div className="flex items-center gap-2 mt-auto bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
                          <Mic className="w-3.5 h-3.5 text-violet-500 flex-shrink-0" />
                          <p className="text-[10px] text-slate-400 flex-1">Ask or speak anything...</p>
                          <ArrowRight className="w-3.5 h-3.5 text-[#1e40af]" />
                        </div>
                      </motion.div>
                    )}

                    {heroSlide === 3 && (
                      /* EXPLORE slide */
                      <motion.div key="explore"
                        initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -60, opacity: 0 }}
                        transition={{ duration: 0.32, ease: 'easeInOut' }}
                        className="absolute inset-0 px-3 py-3 flex flex-col gap-3">
                        <p className="text-xs font-black text-slate-800">Explore Subjects</p>
                        <div className="grid grid-cols-3 gap-2">
                          {subjects.map(s => (
                            <div key={s.label} className={`${s.color} rounded-xl flex flex-col items-center justify-center py-3 gap-1`}>
                              <span className="text-base">{s.emoji}</span>
                              <span className="text-[10px] font-bold">{s.label}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 flex items-center gap-2">
                          <Globe className="w-3.5 h-3.5 text-[#1e40af] flex-shrink-0" />
                          <p className="text-[10px] text-slate-500 font-semibold">500+ topics available</p>
                        </div>
                      </motion.div>
                    )}

                    {heroSlide === 4 && (
                      /* PROFILE slide */
                      <motion.div key="profile"
                        initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -60, opacity: 0 }}
                        transition={{ duration: 0.32, ease: 'easeInOut' }}
                        className="absolute inset-0 px-3 py-3 flex flex-col gap-2 items-center">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1e40af] to-violet-600 flex items-center justify-center mt-1">
                          <span className="text-white font-black text-xl">A</span>
                        </div>
                        <p className="text-sm font-black text-slate-900">Aryan, 11</p>
                        <p className="text-[10px] text-slate-400">Grade 6 · Science lover</p>
                        <div className="grid grid-cols-3 gap-2 w-full mt-1">
                          {[{ label: 'XP', val: '1,240' }, { label: 'Streak', val: '7 🔥' }, { label: 'Badges', val: '4 🏅' }].map(s => (
                            <div key={s.label} className="bg-slate-50 rounded-xl py-2 flex flex-col items-center">
                              <p className="text-xs font-black text-slate-900">{s.val}</p>
                              <p className="text-[10px] text-slate-400">{s.label}</p>
                            </div>
                          ))}
                        </div>
                        <div className="w-full mt-1">
                          {[
                            { subject: 'Science', pct: 80, c: 'bg-blue-400' },
                            { subject: 'Maths', pct: 60, c: 'bg-green-400' },
                            { subject: 'History', pct: 40, c: 'bg-amber-400' },
                          ].map(s => (
                            <div key={s.subject} className="mb-2">
                              <div className="flex justify-between text-[10px] mb-0.5">
                                <span className="text-slate-600 font-semibold">{s.subject}</span>
                                <span className="text-slate-400">{s.pct}%</span>
                              </div>
                              <div className="h-1.5 bg-slate-100 rounded-full">
                                <div className={`h-full ${s.c} rounded-full`} style={{ width: `${s.pct}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Bottom nav */}
                <div className="bg-white border-t border-slate-100 px-1 py-2 grid grid-cols-5">
                  {[
                    { icon: '🏠', label: 'Home', idx: 0 },
                    { icon: '🎬', label: 'Reels', idx: 1 },
                    { icon: '🤖', label: 'AI', idx: 2 },
                    { icon: '🔍', label: 'Explore', idx: 3 },
                    { icon: '👤', label: 'Profile', idx: 4 },
                  ].map(tab => (
                    <button key={tab.label} onClick={() => setHeroSlide(tab.idx)}
                      className={`flex flex-col items-center gap-0.5 py-1 rounded-lg transition-colors ${heroSlide === tab.idx ? 'text-[#1e40af]' : 'text-slate-400'}`}>
                      <span className="text-sm leading-none">{tab.icon}</span>
                      <span className={`text-[9px] font-bold ${heroSlide === tab.idx ? 'text-[#1e40af]' : 'text-slate-400'}`}>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </Phone>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            STATS BAR
        ══════════════════════════════════════════════════════════════ */}
        <div className="border-y border-slate-100 bg-white py-8 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-slate-100">
              {[
                { value: '10,000+', label: 'Early Waitlist' },
                { value: '50+', label: 'Subjects' },
                { value: '60s', label: 'Reels' },
                { value: '100%', label: 'Ad-Free' },
              ].map((stat, i) => (
                <div key={stat.label} className={`flex flex-col items-center justify-center py-4 ${i % 2 === 0 && i < 2 ? 'border-b md:border-b-0' : ''}`}>
                  <span className="text-3xl font-black tracking-tight text-[#1e40af]">{stat.value}</span>
                  <span className="text-sm text-slate-500 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 2 — PROBLEM
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-16">
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2 bg-red-50 text-red-600 border border-red-100 px-4 py-2 rounded-full mb-5 w-fit mx-auto">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">The Problem</span>
              </motion.div>
              <motion.h2 variants={fadeUp}
                className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-4">
                The Screen Time Crisis
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-600 max-w-xl mx-auto text-lg">
                Every minute a child spends scrolling entertainment is a missed learning opportunity.
              </motion.p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: AlertTriangle,
                  iconBg: 'bg-red-50',
                  iconColor: 'text-red-500',
                  title: 'Endless Scrolling, Zero Learning',
                  desc: 'Kids spend hours watching random entertainment videos with no educational value or developmental benefit.',
                },
                {
                  icon: Heart,
                  iconBg: 'bg-amber-50',
                  iconColor: 'text-amber-500',
                  title: 'Parents Feel Helpless',
                  desc: 'Parents worry about unhealthy screen habits but struggle to find genuinely engaging educational alternatives.',
                },
                {
                  icon: TrendingUp,
                  iconBg: 'bg-purple-50',
                  iconColor: 'text-purple-500',
                  title: 'Education Apps Are Boring',
                  desc: 'Most learning apps feel like digital homework — kids abandon them within days of downloading.',
                },
              ].map(p => (
                <motion.div key={p.title} variants={fadeUp}
                  className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                  <div className={`w-10 h-10 ${p.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                    <p.icon className={`w-5 h-5 ${p.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{p.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 3 — SOLUTION
        ══════════════════════════════════════════════════════════════ */}
        <section id="solution" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Phone left */}
              <motion.div variants={fadeUp} className="flex justify-center order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#1e40af]/10 rounded-full blur-3xl scale-75" />
                  <Phone>
                    <div className="bg-[#1e40af] px-4 py-3">
                      <p className="text-white font-black text-xs tracking-tight">Today's Reels</p>
                    </div>
                    {[
                      { color: 'from-blue-500 to-cyan-500', icon: '⚛️', title: 'Atoms & Molecules', subject: 'Chemistry', xp: '+10 XP' },
                      { color: 'from-green-500 to-emerald-500', icon: '🌿', title: 'Photosynthesis', subject: 'Biology', xp: '+10 XP' },
                      { color: 'from-purple-500 to-violet-500', icon: '🔢', title: 'Prime Numbers', subject: 'Maths', xp: '+10 XP' },
                    ].map(item => (
                      <div key={item.title} className="flex items-center gap-3 px-3 py-2.5 border-b border-slate-100">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-base flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-slate-800 truncate">{item.title}</p>
                          <p className="text-xs text-slate-400">{item.subject}</p>
                        </div>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{item.xp}</span>
                      </div>
                    ))}
                    <div className="mx-3 mt-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl p-3 flex items-center gap-3">
                      <Flame className="w-6 h-6 text-white fill-white flex-shrink-0" />
                      <div>
                        <p className="text-white font-black text-xs">7-Day Streak! 🔥</p>
                        <p className="text-orange-100 text-xs">Keep it up!</p>
                      </div>
                    </div>
                    <div className="h-4" />
                  </Phone>
                </div>
              </motion.div>

              {/* Copy right */}
              <motion.div variants={stagger} className="order-1 lg:order-2 flex flex-col gap-7">
                <motion.div variants={fadeUp}
                  className="inline-flex items-center gap-2 bg-[#1e40af]/10 text-[#1e40af] px-4 py-2 rounded-full w-fit">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold uppercase tracking-wider">The Solution</span>
                </motion.div>
                <motion.h2 variants={fadeUp}
                  className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                  Learning Made as{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] to-violet-600">
                    Addictive as Reels
                  </span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed">
                  QReels turns short videos into powerful learning moments. Kids watch 60-second educational reels, answer quick quizzes, and build daily learning streaks that make knowledge stick.
                </motion.p>
                <motion.div variants={stagger} className="flex flex-col gap-3">
                  {[
                    { icon: PlayCircle, text: '60-second curriculum-aligned video reels' },
                    { icon: CheckCircle2, text: 'Instant quiz reinforces every reel watched' },
                    { icon: Trophy, text: 'Points, badges and streaks drive daily habits' },
                  ].map(item => (
                    <motion.div key={item.text} variants={fadeUp}
                      className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl px-5 py-4 shadow-sm">
                      <item.icon className="w-5 h-5 text-[#1e40af] flex-shrink-0" />
                      <span className="font-semibold text-slate-700 text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 4 — PRODUCT EXPERIENCE (dark)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-16">
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2 bg-white/10 text-slate-300 border border-white/10 px-4 py-2 rounded-full mb-5 w-fit mx-auto">
                <Smartphone className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">Product Experience</span>
              </motion.div>
              <motion.h2 variants={fadeUp}
                className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
                Everything Kids and Parents Need
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-400 max-w-xl mx-auto">
                A seamless experience from learning to tracking — all in one app.
              </motion.p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

              {/* Screen 1 — Reels Feed */}
              <motion.div variants={fadeUp} className="flex flex-col items-center gap-5">
                <Phone>
                  <div className="bg-[#1e40af] px-3 py-2">
                    <p className="text-white font-black text-xs">Reels Feed</p>
                  </div>
                  {[
                    { g: 'from-blue-500 to-cyan-500', e: '⚛️', t: 'Atoms', s: 'Chemistry' },
                    { g: 'from-green-500 to-teal-500', e: '🌿', t: 'Plants', s: 'Biology' },
                    { g: 'from-purple-500 to-pink-500', e: '🔢', t: 'Algebra', s: 'Maths' },
                    { g: 'from-orange-400 to-red-400', e: '🌋', t: 'Volcanoes', s: 'Geography' },
                  ].map(r => (
                    <div key={r.t} className="flex items-center gap-2 px-3 py-2 border-b border-slate-50">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${r.g} flex items-center justify-center text-base flex-shrink-0`}>{r.e}</div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">{r.t}</p>
                        <p className="text-xs text-slate-400">{r.s}</p>
                      </div>
                    </div>
                  ))}
                </Phone>
                <div className="text-center">
                  <p className="font-bold text-white text-sm">Reels Learning Feed</p>
                  <p className="text-xs text-slate-400 mt-1">Kids scroll through short educational videos</p>
                </div>
              </motion.div>

              {/* Screen 2 — Quiz */}
              <motion.div variants={fadeUp} className="flex flex-col items-center gap-5">
                <Phone>
                  <div className="bg-violet-600 px-3 py-2">
                    <p className="text-white font-black text-xs">Quick Quiz</p>
                  </div>
                  <div className="px-3 py-4">
                    <div className="bg-violet-50 rounded-2xl p-3 mb-4 text-center">
                      <p className="text-xs font-black text-violet-900">What makes the sky appear blue?</p>
                    </div>
                    {['Water droplets', 'Air molecules', 'Sunlight colour', 'Ozone layer'].map((opt, i) => (
                      <div key={opt}
                        className={`text-xs px-3 py-2 rounded-xl mb-2 font-semibold border ${i === 1 ? 'bg-green-50 border-green-200 text-green-700' : 'bg-slate-50 border-slate-100 text-slate-600'}`}>
                        {i === 1 ? '✓ ' : ''}{opt}
                      </div>
                    ))}
                    <div className="bg-[#1e40af] rounded-xl py-2 text-center mt-3">
                      <p className="text-white text-xs font-black">+10 XP Earned!</p>
                    </div>
                  </div>
                </Phone>
                <div className="text-center">
                  <p className="font-bold text-white text-sm">Interactive Quiz</p>
                  <p className="text-xs text-slate-400 mt-1">Each reel is followed by a quick quiz</p>
                </div>
              </motion.div>

              {/* Screen 3 — Rewards */}
              <motion.div variants={fadeUp} className="flex flex-col items-center gap-5">
                <Phone>
                  <div className="bg-amber-500 px-3 py-2">
                    <p className="text-white font-black text-xs">My Rewards</p>
                  </div>
                  <div className="px-3 py-3">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl p-3 mb-3 flex items-center gap-3">
                      <Flame className="w-7 h-7 text-white fill-white" />
                      <div>
                        <p className="text-white font-black text-sm">12-Day Streak 🔥</p>
                        <p className="text-orange-100 text-xs">Personal best!</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 mb-3">
                      {['🔬', '🧮', '🌍', '📜', '🎨', '⭐'].map((e, i) => (
                        <div key={i} className={`aspect-square rounded-xl flex items-center justify-center text-lg ${i < 4 ? 'bg-amber-50 border border-amber-200' : 'bg-slate-100 border border-slate-200 opacity-40'}`}>{e}</div>
                      ))}
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 font-semibold">Total XP</p>
                      <p className="text-2xl font-black text-[#1e40af]">1,240</p>
                    </div>
                  </div>
                </Phone>
                <div className="text-center">
                  <p className="font-bold text-white text-sm">Learning Rewards</p>
                  <p className="text-xs text-slate-400 mt-1">Kids earn points, badges, and streaks</p>
                </div>
              </motion.div>

              {/* Screen 4 — Parent Dashboard */}
              <motion.div variants={fadeUp} className="flex flex-col items-center gap-5">
                <Phone>
                  <div className="bg-green-600 px-3 py-2">
                    <p className="text-white font-black text-xs">Parent Dashboard</p>
                  </div>
                  <div className="px-3 py-3">
                    <div className="bg-green-50 rounded-xl p-2 mb-2 text-center">
                      <p className="text-xs text-green-700 font-bold">This Week</p>
                      <p className="text-2xl font-black text-green-700">47 min</p>
                      <p className="text-xs text-green-600">learning time +12%</p>
                    </div>
                    {[
                      { subject: 'Science', pct: 80, color: 'bg-blue-400' },
                      { subject: 'Maths', pct: 60, color: 'bg-green-400' },
                      { subject: 'History', pct: 40, color: 'bg-amber-400' },
                    ].map(s => (
                      <div key={s.subject} className="mb-2">
                        <div className="flex justify-between text-xs mb-0.5">
                          <span className="text-slate-600 font-semibold">{s.subject}</span>
                          <span className="text-slate-400">{s.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 rounded-full">
                          <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                        </div>
                      </div>
                    ))}
                    <div className="mt-2 bg-slate-50 rounded-xl p-2 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <p className="text-xs text-slate-500 font-semibold">Daily limit: 30 min</p>
                    </div>
                  </div>
                </Phone>
                <div className="text-center">
                  <p className="font-bold text-white text-sm">Parent Dashboard</p>
                  <p className="text-xs text-slate-400 mt-1">Parents track learning progress and set limits</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 5 — FEATURES
        ══════════════════════════════════════════════════════════════ */}
        <section id="features" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-16">
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2 bg-[#1e40af]/10 text-[#1e40af] px-4 py-2 rounded-full mb-5 w-fit mx-auto">
                <Zap className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">Key Features</span>
              </motion.div>
              <motion.h2 variants={fadeUp}
                className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-4">
                Built for the Way Kids Learn Today
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-600 max-w-xl mx-auto">
                Every feature is designed to maximise engagement and learning outcomes.
              </motion.p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: PlayCircle, label: 'Educational Reels', desc: 'Curated 60-second learning videos across 50+ subjects, curriculum-aligned and expert-reviewed.' },
                { icon: Brain, label: 'AI Personalised Learning', desc: 'Smart engine adapts content to each child\'s learning pace, strengths, and interests.' },
                { icon: CheckCircle2, label: 'Interactive Quizzes', desc: 'A quick quiz after every reel reinforces learning and tracks comprehension over time.' },
                { icon: Flame, label: 'Streaks and Rewards', desc: 'Points, badges, and daily streaks build positive habits and keep kids motivated.' },
                { icon: Shield, label: 'Safe for Kids', desc: 'Fully moderated, ad-free, and age-appropriate content — parents can trust every second.' },
                { icon: BarChart3, label: 'Parent Dashboard', desc: 'Track progress, set screen time limits, and view detailed learning reports in one place.' },
              ].map(f => (
                <motion.div key={f.label} variants={fadeUp}
                  className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 bg-[#1e40af]/10 text-[#1e40af] rounded-xl flex items-center justify-center mb-6">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{f.label}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 6 — HOW IT WORKS
        ══════════════════════════════════════════════════════════════ */}
        <section id="how-it-works" className="py-24 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-16">
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2 bg-[#1e40af]/10 text-[#1e40af] px-4 py-2 rounded-full mb-5 w-fit mx-auto">
                <Target className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">How It Works</span>
              </motion.div>
              <motion.h2 variants={fadeUp}
                className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-4">
                3 Steps to Smart Learning
              </motion.h2>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="relative grid md:grid-cols-3 gap-10">
              {/* dashed connector line */}
              <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0 border-t-2 border-dashed border-slate-200 z-0" />

              {[
                { num: '01', icon: PlayCircle, title: 'Watch a 60-sec Reel', desc: 'Kids pick a subject and watch a fun, curriculum-aligned short video.' },
                { num: '02', icon: CheckCircle2, title: 'Answer a Quick Quiz', desc: 'A 1-question quiz after every reel cements what was just learned.' },
                { num: '03', icon: Trophy, title: 'Earn Rewards', desc: 'Collect XP, unlock badges, and build a daily learning streak.' },
              ].map((step, i) => (
                <motion.div key={step.num} variants={fadeUp} className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm">
                      <step.icon className="w-8 h-8 text-[#1e40af]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1e40af] rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-black text-white">{i + 1}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#1e40af] uppercase tracking-widest mb-1">{step.num}</p>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 7 — AI LEARNING ENGINE (dark)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-slate-950">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* AI orbit diagram */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative flex justify-center">
              <div className="relative w-72 h-72">
                {/* rings */}
                <div className="absolute inset-0 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-8 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '14s', animationDirection: 'reverse' }} />
                {/* center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#1e40af] to-violet-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-900/50">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                </div>
                {/* orbit nodes */}
                {[
                  { style: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2', icon: BarChart3, label: 'Progress' },
                  { style: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2', icon: Target, label: 'Goals' },
                  { style: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2', icon: BookOpen, label: 'Content' },
                  { style: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2', icon: Zap, label: 'Speed' },
                ].map(n => (
                  <div key={n.label}
                    className={`absolute ${n.style} bg-slate-800 border border-white/10 rounded-xl px-3 py-2 flex flex-col items-center gap-1 shadow-xl`}>
                    <n.icon className="w-4 h-4 text-slate-300" />
                    <span className="text-white text-xs font-bold">{n.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col gap-7">
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2 bg-violet-500/20 text-violet-300 border border-violet-500/20 px-4 py-2 rounded-full w-fit">
                <Brain className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">AI Learning Engine</span>
              </motion.div>
              <motion.h2 variants={fadeUp}
                className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Powered by AI
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed">
                Our AI analyses every child's learning patterns and recommends the best content — adapting difficulty, pace, and subjects to maximise growth.
              </motion.p>

              {/* 4 mini pills */}
              <motion.div variants={stagger} className="grid grid-cols-2 gap-3">
                {[
                  { icon: TrendingUp, label: 'Adaptive Difficulty' },
                  { icon: Target, label: 'Personalised Path' },
                  { icon: Lightbulb, label: 'Smart Suggestions' },
                  { icon: BarChart3, label: 'Analytics' },
                ].map(item => (
                  <motion.div key={item.label} variants={fadeUp}
                    className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-white">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* AI Chat + Voice Chat cards */}
              <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4 pt-2">
                {/* AI Chat Tutor */}
                <motion.div variants={fadeUp}
                  className="bg-blue-500/10 border border-blue-400/20 rounded-2xl p-5 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">AI Chat Tutor</p>
                      <p className="text-blue-400 text-xs">Ask anything, anytime</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="bg-white/10 rounded-xl rounded-tl-none px-3 py-2 self-start max-w-[90%]">
                      <p className="text-white text-xs">Why do planets orbit the sun? 🪐</p>
                    </div>
                    <div className="bg-blue-600/40 rounded-xl rounded-tr-none px-3 py-2 self-end max-w-[90%]">
                      <p className="text-blue-100 text-xs leading-relaxed">Gravity + speed = orbit! ✨</p>
                    </div>
                  </div>
                </motion.div>

                {/* AI Voice Chat */}
                <motion.div variants={fadeUp}
                  className="bg-violet-500/10 border border-violet-400/20 rounded-2xl p-5 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-600/30">
                      <Mic className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">AI Voice Chat</p>
                      <p className="text-violet-400 text-xs">Talk and learn naturally</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-center gap-0.5 py-2">
                      {[3, 5, 8, 12, 8, 14, 6, 10, 4, 8, 11, 5, 3].map((h, i) => (
                        <motion.div key={i}
                          animate={{ scaleY: [1, 1.8, 1] }}
                          transition={{ duration: 0.8, delay: i * 0.06, repeat: Infinity, ease: 'easeInOut' }}
                          className="w-1 bg-violet-400 rounded-full origin-bottom"
                          style={{ height: h * 2 }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-violet-500/20 border border-violet-400/20 px-3 py-1 rounded-full flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
                        <span className="text-violet-300 text-xs font-semibold">Listening...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 8 — FOUNDER
        ══════════════════════════════════════════════════════════════ */}
        <section id="about-us" className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-14">
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2 bg-[#1e40af]/10 text-[#1e40af] px-4 py-2 rounded-full mb-5 w-fit mx-auto">
                <Users className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">Our Story</span>
              </motion.div>
              <motion.h2 variants={fadeUp}
                className="text-4xl font-black tracking-tight text-slate-900 mb-4">
                Meet Our Founder
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-600 max-w-lg mx-auto">
                The visionary behind QReels, on a mission to make every minute of screen time count.
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl border border-slate-100 p-10 lg:p-14 shadow-sm">
              {/* Photo */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-52 h-52 lg:w-64 lg:h-64 rounded-2xl bg-gradient-to-br from-[#1e40af] to-blue-900 flex items-center justify-center shadow-2xl shadow-blue-900/20">
                    <span className="text-white font-black text-7xl tracking-tight">V</span>
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-white border border-slate-100 rounded-xl px-4 py-2 shadow-md">
                    <p className="text-xs font-bold text-[#1e40af]">Founder & CEO</p>
                  </div>
                </div>
              </div>
              {/* Quote */}
              <div className="flex flex-col gap-6">
                <Quote className="w-8 h-8 text-slate-200" />
                <p className="text-xl lg:text-2xl font-semibold text-slate-700 leading-relaxed italic">
                  "We started QReels with a simple belief — if kids enjoy short videos, we can transform those moments into powerful learning experiences."
                </p>
                <div>
                  <p className="text-lg font-black text-slate-900">Anshul Patidar</p>
                  <p className="text-sm text-[#1e40af] font-semibold mt-1">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 9 — FINAL CTA
        ══════════════════════════════════════════════════════════════ */}
        <section id="cta" className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-slate-900 to-[#1e40af] rounded-3xl p-12 lg:p-20 text-white text-center overflow-hidden shadow-2xl shadow-slate-900/30">
              {/* decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-900/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center gap-8">
                <div className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/10 px-4 py-2 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Coming Soon</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-2xl">
                  The Future of Learning is Short, Smart, and Fun
                </h2>
                <p className="text-lg text-white/70 max-w-lg">
                  Join thousands of parents who are turning their child's screen time into meaningful learning time.
                </p>
                <a href="https://instagram.com/qreels_01" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#1e40af] px-10 py-4 rounded-full font-black text-base shadow-xl hover:bg-slate-50 transition-colors">
                  Join QReels Early Access <ArrowRight className="w-5 h-5" />
                </a>
                {/* social row */}
                <div className="flex flex-col items-center gap-4 w-full pt-2">
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-widest">Follow us</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      { href: 'https://instagram.com/qreels_01', Icon: InstagramIcon, label: 'Instagram' },
                      { href: 'https://x.com/qreels_01', Icon: XIcon, label: 'X' },
                      { href: 'https://youtube.com/@qreels_01', Icon: YoutubeIcon, label: 'YouTube' },
                      { href: 'https://www.linkedin.com/company/qreels/', Icon: LinkedInIcon, label: 'LinkedIn' },
                    ].map(s => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors">
                        <s.Icon className="w-4 h-4" /> {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ══════════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════════ */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Logo size={30} />
                <span className="text-xl font-black text-white tracking-tight">QReels</span>
              </div>
              <p className="text-slate-500 max-w-xs leading-relaxed text-sm mb-6">
                Building the next generation of AI-powered educational entertainment for kids. Turn screen time into learning time.
              </p>
              <div className="flex gap-2">
                {[
                  { href: 'mailto:qreelsupport@gmail.com', Icon: Mail },
                  { href: 'https://instagram.com/qreels_01', Icon: InstagramIcon },
                  { href: 'https://x.com/qreels_01', Icon: XIcon },
                  { href: 'https://youtube.com/@qreels_01', Icon: YoutubeIcon },
                  { href: 'https://www.linkedin.com/company/qreels/', Icon: LinkedInIcon },
                ].map(({ href, Icon }) => (
                  <a key={href} href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#1e40af] flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product links */}
            <div>
              <h4 className="font-bold mb-5 text-white text-xs uppercase tracking-wider">Product</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: 'About QReels', href: '#about-us' },
                  { label: 'Features', href: '#features' },
                  { label: 'How It Works', href: '#how-it-works' },
                  { label: 'For Parents', href: '#features' },
                  { label: 'For Schools', href: '#about-us' },
                ].map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect links */}
            <div>
              <h4 className="font-bold mb-5 text-white text-xs uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: 'Email Us', href: 'mailto:qreelsupport@gmail.com' },
                  { label: 'Instagram', href: 'https://instagram.com/qreels_01' },
                  { label: 'X (Twitter)', href: 'https://x.com/qreels_01' },
                  { label: 'YouTube', href: 'https://youtube.com/@qreels_01' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/qreels/' },
                ].map(link => (
                  <li key={link.label}>
                    <a href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600">© 2026 QReels Education Inc. All rights reserved.</p>
            <p className="text-xs text-slate-600">Made with ❤️ for kids everywhere</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
