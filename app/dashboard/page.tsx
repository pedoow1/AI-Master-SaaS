"use client";
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut, 
  PlusCircle, 
  History,
  Wand2,
  Copy,
  Check
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('generate');
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    // محاكاة طلب الذكاء الاصطناعي
    setTimeout(() => {
      setResult(`هذا نص تجريبي تم توليده بناءً على طلبك: "${prompt}". \n\nيمكنك استخدام هذا المحتوى في مقالاتك أو منشورات التواصل الاجتماعي. يتميز AI Master بقدرته على فهم السياق وتقديم نتائج احترافية.`);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6 flex flex-col gap-8">
        <div className="flex items-center gap-2 px-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Wand2 className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl">AI Master</span>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          <button 
            onClick={() => setActiveTab('generate')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'generate' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <PlusCircle className="w-5 h-5" /> Generate
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'history' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <History className="w-5 h-5" /> History
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Settings className="w-5 h-5" /> Settings
          </button>
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 transition-colors mt-auto">
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Welcome back, Master</h1>
          <p className="text-gray-400">What would you like to create today?</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">Your Prompt</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Write a professional blog post about the future of AI..."
                className="w-full h-40 bg-slate-900 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
              />
              <button 
                onClick={handleGenerate}
                disabled={isGenerating || !prompt}
                className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                {isGenerating ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <><Wand2 className="w-5 h-5" /> Generate Content</>
                )}
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col min-h-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Result</h2>
              {result && (
                <button 
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                >
                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </button>
              )}
            </div>
            
            <div className="flex-1 bg-slate-900/50 rounded-xl p-6 text-gray-300 leading-relaxed whitespace-pre-wrap border border-white/5">
              {result || (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-4">
                  <FileText className="w-12 h-12 opacity-20" />
                  <p>Your generated content will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
