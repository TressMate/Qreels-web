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
  Smartphone,
  Sparkles,
  Award,
  Zap,
  Search,
  Menu,
  X,
  Globe,
  Mail,
  VideoOff,
  AlertTriangle,
  Verified,
  Users,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Custom components for cleaner code
const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-6 ${className}`}>
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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background-light selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-white p-2 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <PlayCircle className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-primary">QReels</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Features', 'Parents', 'Creators'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
              Download App
            </button>
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
              {['About', 'Features', 'Parents', 'Creators'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-bold text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/20 mt-2">
                Download App
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <Section id="about" className="pt-32 lg:pt-48 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Education Evolved</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
                Transform Screen Time Into <span className="text-primary">Learning</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
                QReels is a safe and engaging short-video platform where children discover science, creativity, logic, and life skills through 60-second educational reels.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/40 hover:scale-105 transition-all duration-300 active:scale-95">
                  Download the App
                </button>
                <button className="bg-white border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-all duration-300 active:scale-95">
                  Become a Creator
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl"></div>
              <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19.5] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzfJOpDIyJf0QNZeSY4xqoJm0w1wAPRayqd70hhyOSy1W7657MVWpFSjE53IPeu0bzuL6pTHBqPINCM4pfAduoOj1fNW2ioEJgz8Id4k72tExc7D8BwG484ZsfqDVVyhWeYF1kFo39vS9BxE0mSCNXaPLR8kJKpeS4nUc4hhj3q6Dxd3i7KEEGXYW8RLgo3DwaBezDdvC9jhAtKSnXTq3_VGQY2qVEZqbpYYTQYOL0XhpgnRk3_ZZv3ZOwAJuhtcz8BPwSoEnQ5tQ')" }}
                ></div>
                
                {/* Floating UI Elements */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-10 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Mini-Quiz Active</p>
                      <p className="text-[10px] text-slate-500">What makes the sky blue?</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="absolute top-20 right-4 bg-primary text-white p-3 rounded-xl shadow-lg"
                >
                  <Trophy className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Problem Section */}
        <Section className="bg-slate-50/50">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-slate-900">The Problem With Kids’ Screen Time</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Traditional social media isn't built for young, developing minds.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: AlertTriangle, title: "Random Content", desc: "Kids watch uncurated, often inappropriate videos through algorithms built for adults." },
              { icon: VideoOff, title: "Low Educational Value", desc: "Hours of scrolling result in zero new skills or knowledge gained." },
              { icon: Timer, title: "Too Much Screen Time", desc: "Addictive loops lead to excessive usage without clear stopping points." },
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
            <div className="text-center max-w-3xl mb-16">
              <h2 className="text-4xl font-black mb-6 text-slate-900">Introducing QReels</h2>
              <p className="text-xl text-slate-600">We convert addictive scrolling into active learning through curated, short-form educational content.</p>
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
          <h2 className="text-4xl font-black mb-20 text-center text-slate-900">How It Works</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-primary/10 -z-10"></div>
            {[
              { icon: PlayCircle, title: "1. Watch", desc: "Engage with high-quality, 60-second reels that make learning fun and quick." },
              { icon: HelpCircle, title: "2. Interact", desc: "Complete a mini 3-question quiz after every video to reinforce knowledge." },
              { icon: Trophy, title: "3. Grow", desc: "Earn badges, XP, and build your knowledge streak to unlock new topics." }
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

        {/* Parent Control Section */}
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
              <h2 className="text-4xl font-black leading-tight text-slate-900">Parents Stay in Control</h2>
              <p className="text-lg text-slate-600">QReels is designed to be a partner in your parenting journey. We provide all the tools you need to ensure their digital life is healthy and productive.</p>
              <ul className="space-y-4">
                {[
                  "COPPA & GDPR Compliant",
                  "No behavioral advertising",
                  "Real-time alerts via Parent App"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
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
      </main>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary text-white p-2 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-primary">QReels</h2>
              </div>
              <p className="text-slate-600 max-w-sm mb-8">
                The educational short-video platform built for the curious minds of tomorrow.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-900">Platform</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Creator Program</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Safety Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-900">Resources</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary transition-colors">Parent Guide</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-slate-500">© 2024 QReels Education Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <div className="h-10 w-32 bg-slate-900 rounded-lg flex items-center justify-center border border-white/10 cursor-pointer hover:bg-slate-800 transition-colors">
                <div className="flex items-center gap-2 px-3">
                  <Smartphone className="w-4 h-4 text-white" />
                  <span className="text-[10px] text-white leading-tight">Download on the <br/><span className="font-bold text-sm">App Store</span></span>
                </div>
              </div>
              <div className="h-10 w-32 bg-slate-900 rounded-lg flex items-center justify-center border border-white/10 cursor-pointer hover:bg-slate-800 transition-colors">
                <div className="flex items-center gap-2 px-3">
                  <PlayCircle className="w-4 h-4 text-white" />
                  <span className="text-[10px] text-white leading-tight">GET IT ON <br/><span className="font-bold text-sm">Google Play</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
