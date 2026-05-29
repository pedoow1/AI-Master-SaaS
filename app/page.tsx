"use client";
import React, { useState } from 'react';
import { Sparkles, Zap, Shield, BarChart3, ChevronRight, CheckCircle2, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                AI Master
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <Link href="/dashboard" className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition-all">
                Go to Dashboard
              </Link>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300 font-medium">Next Generation AI Platform</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Master Your Content with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Artificial Intelligence
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
            Generate high-quality articles, social media posts, and code in seconds. 
            The only tool you need to scale your digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105">
              Start Building Free <ChevronRight className="w-5 h-5" />
            </Link>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400">Everything you need to dominate the AI era.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="text-yellow-400" />, title: "Ultra Fast", desc: "Get results in milliseconds with our optimized AI engine." },
              { icon: <Shield className="text-green-400" />, title: "Secure & Private", desc: "Your data is encrypted and never used for training." },
              { icon: <BarChart3 className="text-blue-400" />, title: "Advanced Analytics", desc: "Track your AI usage and performance in real-time." }
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all group">
                <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-md mx-auto p-8 rounded-3xl bg-gradient-to-b from-indigo-600/20 to-transparent border border-indigo-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-indigo-500 text-[10px] font-bold uppercase px-2 py-1 rounded">Popular</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Unlimited Generations', 'Priority Support', 'Custom AI Models', 'API Access'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500" /> {item}
                </li>
              ))}
            </ul>
            <Link 
              href="/dashboard" 
              className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2024 AI Master SaaS. All rights reserved.</p>
      </footer>
    </div>
  );
}
