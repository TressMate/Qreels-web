import React, { useState, useEffect } from 'react';
import {
  PlayCircle,
  Trophy,
  Shield,
  Timer,
  Settings,
  TrendingUp,
  ChevronDown,
  CheckCircle2,
  Upload,
  BarChart3,
  CircleDollarSign,
  Sparkles,
  Award,
  Zap,
  Search,
  Menu,
  X,
  Mail,
  VideoOff,
  AlertTriangle,
  Verified,
  Users,
  ChevronLeft,
  ChevronRight,
  Quote,
  BookOpen,
  Flame,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { i } from 'motion/react-client';

// Brand icons (inline SVGs — lucide-react deprecated brand icons in v0.5+)
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

// Custom components for cleaner code
const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-10 px-6 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Card = ({ children, className = "", ...props }: { children: React.ReactNode, className?: string, [key: string]: any }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-100 rounded-2xl bg-white overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left font-bold hover:bg-slate-50 transition-colors"
      >
        <span className="text-slate-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-slate-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const founders = [
  {
    name: "Vijay",
    role: "Founder & CEO",
    quote: "We started QReels with a simple belief — if kids enjoy short videos, we can transform those moments into powerful learning experiences.",
    avatar: "V",
  },
  {
    name: "Rahul",
    role: "Co-Founder & Head of Backend Engineering",
    quote: "Designing powerful backend architecture, APIs, and AI-driven data systems that make QReels scalable and intelligent.",
    avatar: "R",
  },
  {
    name: "Yogita",
    role: "Co-Founder & UI/UX Designer",
    quote: "Crafting intuitive user experiences and beautiful interfaces that make learning fun and accessible for children.",
    avatar: "Y",
  },
  {
    name: "Varun",
    role: "Co-Founder & Frontend Lead",
    quote: "Building high-performance frontend architecture with React to ensure a smooth and engaging user experience.",
    avatar: "V",
  },
  {
    name: "Chandra",
    role: "Co-Founder & Frontend Manager",
    quote: "Coordinating frontend development and ensuring high-quality UI implementation across the platform.",
    avatar: "C",
  }
];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Parents', href: '#parents' },
  { label: 'Creators', href: '#creators' },
  { label: 'About Us', href: '#about-us' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prevSlide = () => setCurrentSlide((p) => (p - 1 + founders.length) % founders.length);
  const nextSlide = () => setCurrentSlide((p) => (p + 1) % founders.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % founders.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background-light selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="shadow-lg shadow-primary/20">
              <rect width="100" height="100" rx="22" fill="#1e40af" />
              <circle cx="46" cy="44" r="26" fill="white" />
              <circle cx="46" cy="44" r="17" fill="#1e40af" />
              <polygon points="54,60 76,74 54,88" fill="white" />
            </svg>
            <h1 className="text-2xl font-black tracking-tight text-primary">QReels</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold cursor-default select-none">
              Coming Soon
            </span>
          </div>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-bold text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <span className="bg-primary/10 text-primary px-4 py-2.5 rounded-full text-sm font-bold cursor-default select-none text-center mt-2">
                Coming Soon
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <Section id="home" className="pt-32 lg:pt-44 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <span className="text-xs font-bold uppercase tracking-wider">🚀 Launching Soon</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
              Turn Screen Time Into <span className="text-primary">Learning Time</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-xl">
              Short curiosity-driven learning reels designed for kids.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <a
                href="https://instagram.com/qreels_01"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 hover:scale-105 transition-all duration-300 active:scale-95"
              >
                Follow Updates
              </a>
              <a
                href="#features"
                className="bg-white border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-all duration-300 active:scale-95"
              >
                See How It Works
              </a>
            </div>
          </motion.div>
        </Section>

        {/* Problem Section */}
        <Section className="bg-slate-50/50">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black mb-4 text-slate-900">The Problem With Today's Screen Time</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Traditional social media isn't built for young, developing minds.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: AlertTriangle, title: "Random Content", desc: "Kids spend hours watching short videos with no clear purpose or benefit." },
              { icon: VideoOff, title: "Pure Entertainment", desc: "Most content is pure entertainment — very little learning actually happens." },
              { icon: Timer, title: "No Knowledge Gained", desc: "Hours of scrolling result in zero new skills or knowledge retained." },
              { icon: Shield, title: "Parents Lack Control", desc: "It's nearly impossible to monitor every second of your child's scrolling." }
            ].map((item, i) => (
              <Card key={i}>
                <item.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Solution Section */}
        <Section>
          <div className="flex flex-col items-center">
            <div className="text-center max-w-3xl mb-8">
              <h2 className="text-4xl font-black mb-6 text-slate-900">Meet QReels</h2>
              <p className="text-xl text-slate-600">QReels converts short video sessions into short learning experiences — one reel, one topic, one new thing learned.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 w-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex gap-6 items-start p-8 bg-primary/5 rounded-2xl border border-primary/10"
              >
                <div className="bg-primary text-white p-4 rounded-xl shrink-0 shadow-lg shadow-primary/20">
                  <Verified className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900">Expert Curated Topics</h4>
                  <p className="text-slate-600">Science, math, history, and life skills, all vetted by educational experts for safety and accuracy.</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex gap-6 items-start p-8 bg-primary/5 rounded-2xl border border-primary/10"
              >
                <div className="bg-primary text-white p-4 rounded-xl shrink-0 shadow-lg shadow-primary/20">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900">Safe for Children</h4>
                  <p className="text-slate-600">No public comments, no private messaging, and strict moderation ensures a bully-free environment.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* How It Works */}
        <Section id="features" className="bg-white">
          <h2 className="text-4xl font-black mb-10 text-center text-slate-900">How QReels Works</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-primary/10 -z-10"></div>
            {[
              { icon: Search, title: "1. Discover", desc: "Browse topics that spark curiosity — from science and space to history and life skills." },
              { icon: PlayCircle, title: "2. Watch", desc: "Watch engaging 60-second reels crafted to make learning fun and memorable." },
              { icon: Trophy, title: "3. Achieve", desc: "Build daily streaks and earn achievements that celebrate your learning journey." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center max-w-sm"
              >
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white mb-8 border-[8px] border-background-light shadow-xl shadow-primary/20">
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Features Coming Soon */}
        <Section id="coming-soon" className="bg-slate-50/50">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black mb-4 text-slate-900">Features Coming Soon</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We're building something special. Here's a peek at what's on the way.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Topic Based Learning", desc: "Deep-dive into subjects you love. Choose from science, space, history, maths, and more." },
              { icon: Flame, title: "Daily Learning Streak", desc: "Build consistent habits by keeping your daily learning streak alive." },
              { icon: Award, title: "Achievements & Badges", desc: "Unlock badges and earn rewards as you complete topics and hit milestones." },
              { icon: Search, title: "Skill Discovery", desc: "Let the app guide you toward new skills based on your interests and curiosity." },
              { icon: Sparkles, title: "Curiosity Based Recommendations", desc: "A personalised feed that adapts to what sparks your child's imagination." },
              { icon: BarChart3, title: "Smart Parental Insights", desc: "Parents can track their child's learning activity and progress through simple insights and learning summaries." },
            ].map((feature, i) => (
              <Card key={i} className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">Coming Soon</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Parent Benefits Section */}
        <Section id="parents">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                  <Timer className="w-6 h-6 text-primary mb-4" />
                  <h4 className="font-bold mb-2 text-slate-900">Time Limits</h4>
                  <p className="text-xs text-slate-600">Set daily usage caps and bedtime locks.</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                  <Settings className="w-6 h-6 text-primary mb-4" />
                  <h4 className="font-bold mb-2 text-slate-900">Age Filtering</h4>
                  <p className="text-xs text-slate-600">Content that grows with your child's grade level.</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20 col-span-2">
                  <TrendingUp className="w-6 h-6 text-primary mb-4" />
                  <h4 className="font-bold mb-2 text-slate-900">Progress Dashboard</h4>
                  <p className="text-xs text-slate-600">See exactly what topics they are mastering and where they spend their time.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <h2 className="text-4xl font-black leading-tight text-slate-900">Screen Time Parents Can Feel Good About</h2>
              <p className="text-lg text-slate-600">QReels is designed to be a partner in your parenting journey. We provide all the tools you need to ensure their digital life is healthy and productive.</p>
              <ul className="space-y-4">
                {[
                  "Educational content, every single reel",
                  "Kid-safe environment, no public comments",
                  "Curiosity-driven learning, not addictive loops",
                  "No behavioral advertising"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* AI & Gamification */}
        <Section className="bg-background-light">
          <div className="bg-gradient-to-br from-primary to-blue-900 rounded-[3rem] p-12 lg:p-20 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-900/20 rounded-full blur-3xl"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">AI-Powered Personalized Learning</h2>
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Zap className="w-6 h-6" />
                      Adaptive Algorithm
                    </h4>
                    <p className="text-white/80">Our AI identifies a child's strengths and curiosity gaps, serving them reels that challenge and inspire them just right.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Award className="w-6 h-6" />
                      Q-Coins & Streaks
                    </h4>
                    <p className="text-white/80">Earn Q-Coins for every quiz passed. Use them to customize your avatar. Keep the streak alive to reach the top of the monthly leaderboard!</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square bg-white rounded-2xl flex flex-col items-center justify-center text-primary p-6 text-center shadow-2xl"
                >
                  <Award className="w-12 h-12 mb-4" />
                  <p className="font-black text-4xl">500+</p>
                  <p className="text-xs uppercase font-bold opacity-70 tracking-widest mt-2">Badges</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white p-6 text-center shadow-2xl"
                >
                  <Zap className="w-12 h-12 mb-4 text-primary" />
                  <p className="font-black text-4xl">12k+</p>
                  <p className="text-xs uppercase font-bold opacity-70 tracking-widest mt-2">Active Streaks</p>
                </motion.div>
              </div>
            </div>
          </div>
        </Section>

        {/* Creator Platform Section */}
        <Section id="creators" className="text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
            <h2 className="text-4xl font-black text-slate-900">Built for Educators and Creators</h2>
            <p className="text-xl text-slate-600">Join a community of scientists, teachers, and creative experts sharing knowledge with the next generation.</p>
            <div className="grid md:grid-cols-3 gap-6 w-full text-left">
              {[
                { icon: Upload, title: "One-Click Upload", desc: "Easily upload and tag your 60-second educational content." },
                { icon: BarChart3, title: "Insights", desc: "Track engagement and see how many children you've inspired." },
                { icon: CircleDollarSign, title: "Monetize", desc: "Earn from our Creator Fund based on the educational value you provide." }
              ].map((item, i) => (
                <Card key={i}>
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-bold mb-2 text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all mt-6 shadow-xl shadow-primary/30 active:scale-95">
              Start Creating
            </button>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-slate-50/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-center text-slate-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <FAQItem
                question="Is QReels really safe for my 6-year-old?"
                answer="Yes! QReels is designed specifically for children aged 5-13. We have no public comments, no direct messaging, and every single video is reviewed by a human moderator before it goes live."
              />
              <FAQItem
                question="How do the mini-quizzes work?"
                answer="At the end of a video, an interactive card appears with 3 simple multiple-choice questions. Answering them correctly earns Q-Coins and helps our AI understand the child's learning progress."
              />
              <FAQItem
                question="Can I limit my child's daily usage?"
                answer="Absolutely. The QReels Parent Dashboard allows you to set precise daily time limits, scheduled downtime, and filter specific topics you'd like your child to focus on more."
              />
            </div>
          </div>
        </Section>

        {/* About Us / Founding Team */}
        <Section id="about-us" className="bg-white">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit mb-6 mx-auto">
              <Users className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Our Story</span>
            </div>
            <h2 className="text-4xl font-black mb-4 text-slate-900">Meet Our Visionaries</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The passionate team behind QReels, on a mission to make every minute of screen time count.</p>
          </div>

          {/* Slider */}
          <div className="relative max-w-5xl mx-auto overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.45 }}
                className="grid md:grid-cols-2 gap-10 items-center bg-primary/5 rounded-3xl border border-primary/10 p-10 lg:p-14"
              >
                {/* Portrait */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-52 h-52 lg:w-64 lg:h-64 rounded-2xl bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center shadow-2xl shadow-primary/30">
                      <span className="text-white font-black text-7xl tracking-tight">
                        {founders[currentSlide].avatar}
                      </span>
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-white border-2 border-primary/20 rounded-xl px-4 py-2 shadow-lg">
                      <p className="text-xs font-bold text-primary">{founders[currentSlide].role}</p>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-6">
                  <Quote className="w-10 h-10 text-primary/20" />
                  <p className="text-xl lg:text-2xl font-semibold text-slate-700 leading-relaxed italic">
                    "{founders[currentSlide].quote}"
                  </p>
                  <div>
                    <p className="text-xl font-black text-slate-900">{founders[currentSlide].name}</p>
                    <p className="text-sm text-primary font-semibold mt-1">{founders[currentSlide].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {founders.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-primary' : 'w-2.5 bg-slate-200 hover:bg-slate-300'}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Section>

        {/* Final CTA Section */}
        <Section className="bg-background-light">
          <div className="bg-gradient-to-br from-primary to-blue-900 rounded-[3rem] p-12 lg:p-20 text-white text-center overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Coming Soon</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                Be Among The First To Discover QReels
              </h2>
              <p className="text-xl text-white/80 max-w-xl">
                The app is coming soon. Follow us to get early access and stay updated on our launch.
              </p>
              <div className="flex flex-col items-center gap-3 w-full">
                <p className="text-sm font-semibold text-white/60 uppercase tracking-widest">Follow us on</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-2xl lg:max-w-none">
                  <a
                    href="https://instagram.com/qreels_01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-white/90 transition-all active:scale-95 shadow-lg"
                  >
                    <InstagramIcon className="w-5 h-5" />
                    Instagram
                  </a>
                  <a
                    href="https://x.com/qreels_01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-all active:scale-95"
                  >
                    <XIcon className="w-5 h-5" />
                    X (Twitter)
                  </a>
                  <a
                    href="https://youtube.com/@qreels_01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-all active:scale-95"
                  >
                    <YoutubeIcon className="w-5 h-5" />
                    YouTube
                  </a>
                  <a
                    href="https://www.linkedin.com/company/qreels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-all active:scale-95"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-10 pb-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="shadow-lg shadow-primary/20">
                  <rect width="100" height="100" rx="22" fill="#1e40af" />
                  <circle cx="46" cy="44" r="22" fill="none" stroke="white" strokeWidth="9" />
                  <polygon points="54,60 76,74 54,88" fill="white" />
                </svg>
                <h2 className="text-2xl font-black text-primary">QReels</h2>
              </div>
              <p className="text-slate-600 max-w-sm mb-8">
                The educational short-video platform built for the curious minds of tomorrow.
              </p>
              <div className="flex gap-3">
                <a href="mailto:qreelsupport@gmail.com" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/qreels_01" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="https://x.com/qreels_01" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <XIcon className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@qreels_01" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <YoutubeIcon className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/qreels/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-900">Platform</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#about-us" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#creators" className="hover:text-primary transition-colors">Creator Program</a></li>
                <li><a href="#parents" className="hover:text-primary transition-colors">Safety Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-900">Connect</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="mailto:qreelsupport@gmail.com" className="hover:text-primary transition-colors">Email Us</a></li>
                <li><a href="https://instagram.com/qreels_01" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="https://x.com/qreels_01" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">X (Twitter)</a></li>
                <li><a href="https://youtube.com/@qreels_01" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">YouTube</a></li>
                <li><a href="https://www.linkedin.com/company/qreels/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-10">
            <p className="text-xs text-slate-500 text-center md:text-left">© 2026 QReels Education Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
