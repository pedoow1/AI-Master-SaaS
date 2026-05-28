import React from 'react';
import { Sparkles, Zap, Shield, CreditCard } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Sparkles className="text-indigo-600" /> AI Master
        </h1>
        <a href="#pricing" className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition">Get Started</a>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
        <h2 className="text-6xl font-extrabold tracking-tight mb-6">
          Master Your Content with <span className="text-indigo-600">AI Intelligence</span>
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          The all-in-one SaaS platform to generate high-quality content, images, and code in seconds.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <Zap className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-slate-500">Generate content in milliseconds using GPT-4 technology.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <Shield className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-slate-500">Your data is encrypted and never used for training.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <CreditCard className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Gumroad Payments</h3>
            <p className="text-slate-500">Simple, secure checkout handled by Gumroad.</p>
          </div>
        </div>

        <section id="pricing" className="mt-32">
          <h2 className="text-4xl font-bold mb-12">Simple Pricing</h2>
          <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-xl border-2 border-indigo-600 relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
            <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
            <div className="text-5xl font-bold mb-6">$19<span className="text-lg text-slate-400">/mo</span></div>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center gap-2">✅ Unlimited Generations</li>
              <li className="flex items-center gap-2">✅ Priority Support</li>
              <li className="flex items-center gap-2">✅ Early Access Features</li>
            </ul>
            <a href="YOUR_GUMROAD_LINK_HERE" className="block w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition">Buy Now via Gumroad</a>
          </div>
        </section>
      </main>
    </div>
  );
}
