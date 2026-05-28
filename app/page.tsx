import React from 'react';
import { CheckCircle, Zap, Shield, Sparkles, ArrowRight, Github, Twitter } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-8 mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">AI Content Master</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="https://gumroad.com" className="px-5 py-2.5 bg-white text-black rounded-full hover:bg-slate-200 transition-all">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 mx-auto max-w-7xl text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent -z-10" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          New: AI Video Script Generation
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
          Master Your Content <br /> with Artificial Intelligence
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          The all-in-one SaaS platform to generate high-converting copy, social media posts, and blog articles in seconds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 rounded-2xl font-semibold hover:bg-indigo-500 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/25">
            Start Creating Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="px-8 py-4 bg-slate-900 border border-slate-800 rounded-2xl font-semibold hover:bg-slate-800 transition-all">
            View Live Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 bg-slate-900/50 border-y border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-slate-400">Stop staring at a blank page and let AI do the heavy lifting.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-6 h-6" />, title: 'Lightning Fast', desc: 'Generate 1000+ words in under 30 seconds with GPT-4 Turbo.' },
              { icon: <Shield className="w-6 h-6" />, title: 'SEO Optimized', desc: 'Built-in SEO tools to ensure your content ranks on the first page.' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'Plagiarism Free', desc: '100% original content that passes all AI detection tools.' }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-colors group">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-24 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-400">Choose the plan that fits your content needs.</p>
        </div>

        <div className="max-w-md mx-auto p-8 rounded-3xl bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 px-4 py-1 bg-indigo-500 text-xs font-bold rounded-bl-xl">POPULAR</div>
          <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-5xl font-extrabold">$29</span>
            <span className="text-slate-400">/month</span>
          </div>
          
          <ul className="space-y-4 mb-8">
            {['Unlimited AI Generations', 'Advanced SEO Tools', 'Custom Brand Voice', 'Priority Support'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                {item}
              </li>
            ))}
          </ul>

          <a 
            href="YOUR_GUMROAD_LINK_HERE" 
            className="block w-full py-4 bg-white text-black text-center font-bold rounded-2xl hover:bg-slate-200 transition-all shadow-lg"
          >
            Buy Now via Gumroad
          </a>
          <p className="text-center text-xs text-slate-500 mt-4 italic">Secure payment via Gumroad</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-900 text-center text-slate-500 text-sm">
        <div className="flex justify-center gap-6 mb-6">
          <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
          <Github className="w-5 h-5 hover:text-white cursor-pointer" />
        </div>
        <p>© 2024 AI Content Master SaaS. All rights reserved.</p>
      </footer>
    </div>
  );
}
