import React, { useState } from 'react';
import { Box, Mail, Phone, MapPin, ShieldCheck, Leaf, ArrowRight, CheckCircle2, Globe, Lock, FileText } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Section: Corporate CTA Banner */}
        <div className="bg-gradient-to-r from-navy-900 via-slate-900 to-navy-950 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="inline-block px-3 py-1 bg-cobalt-500/20 text-cobalt-400 font-semibold text-xs rounded-full border border-cobalt-500/30">
              🌐 Fortune 500 Enterprise Packaging Infrastructure
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Optimize Your Global Freight & Packaging Costs
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Request a comprehensive corporate supply chain packaging audit, CAD dielines, and high-volume wholesale contracts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={() => { setActiveTab('configurator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-6 py-3.5 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-bold text-xs transition-colors shadow-md flex items-center justify-center space-x-2"
            >
              <span>Launch 3D Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors border border-slate-700 flex items-center justify-center space-x-2"
            >
              <span>Contact Global Sales Team</span>
            </button>
          </div>
        </div>

        {/* Main Corporate Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-cobalt-600 flex items-center justify-center text-white shadow-md">
                <Box className="w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white font-mono">
                PAK<span className="text-cobalt-500">CORP</span>
                <span className="ml-2 text-xs text-slate-400 font-sans font-normal uppercase">Global Inc.</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Global leader in industrial corrugated container manufacturing, heavy-duty cargo shipping systems, and zero-plastic eco packaging solutions for Fortune 500 supply chains.
            </p>

            <div className="flex items-center space-x-2 text-xs text-emerald-400 pt-2 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Net-Zero Carbon Operations by 2030</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-3">
              <span className="px-2.5 py-1 rounded bg-navy-900 border border-navy-800 text-[10px] font-mono text-slate-300">
                NYSE: PKC (Financials)
              </span>
              <span className="px-2.5 py-1 rounded bg-navy-900 border border-navy-800 text-[10px] font-mono text-slate-300">
                ISO 9001:2015
              </span>
              <span className="px-2.5 py-1 rounded bg-navy-900 border border-navy-800 text-[10px] font-mono text-slate-300">
                FSC-C14029
              </span>
            </div>
          </div>

          {/* Product Solutions */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">Solutions</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  RSC Corrugated Shippers
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Die-Cut Tuck Mailers
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Titan-Wall Heavy Cargo
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  FDA Food-Grade Containers
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Paper Honeycomb Cushioning
                </button>
              </li>
            </ul>
          </div>

          {/* Governance & Corporate */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">Corporate</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Global Manufacturing Hubs
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('sustainability'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  2026 ESG Impact Report
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Quality Assurance Lab
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Enterprise Procurement
                </button>
              </li>
              <li>
                <button onClick={() => alert("PakCorp Investor Relations: Q3 Earnings Report Available")} className="hover:text-white transition-colors flex items-center space-x-1">
                  <FileText className="w-3 h-3 text-cobalt-400" />
                  <span>Investor Relations</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Industry Report Digest */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">Market Intelligence</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Subscribe to PakCorp's monthly Paper Pulp Index & Freight Packaging Briefings.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-500/20 text-emerald-300 text-xs rounded-xl border border-emerald-500/30 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed to Global Briefings.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="corporate@domain.com"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-navy-900 border border-navy-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cobalt-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-bold text-xs transition-colors"
                >
                  Join Pulp Briefing
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} PakCorp International Inc. All Rights Reserved. NYSE: PKC.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-300 cursor-pointer">Global Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Supply Chain Code of Conduct</span>
            <span className="hover:text-slate-300 cursor-pointer">OSHA & ESG Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
