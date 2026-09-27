import React, { useState, useEffect } from 'react';
import { 
  Building2, Box, ShieldCheck, Leaf, PhoneCall, Menu, X, ShoppingBag, Sparkles, 
  ChevronRight, Globe, Lock, Search, ArrowRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeTab, setActiveTab, sampleCount = 0, onOpenSampleDrawer }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Solutions & Products' },
    { id: 'configurator', label: '3D Box Studio', badge: 'Interactive' },
    { id: 'sustainability', label: 'ESG & Sustainability' },
    { id: 'about', label: 'Global Facilities' },
    { id: 'contact', label: 'Contact Sales' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Corporate Utility Bar */}
      <div className="bg-navy-950 text-slate-300 text-[11px] py-1.5 px-4 border-b border-navy-900 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-400">
              <Globe className="w-3.5 h-3.5 text-cobalt-500" />
              <span>Global Enterprise Infrastructure</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-emerald-400 font-semibold flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All 50+ Mega-Plants Operational (99.98% Uptime)</span>
            </span>
          </div>

          <div className="flex items-center space-x-5 font-semibold">
            <a href="#portal" onClick={(e) => { e.preventDefault(); alert("Corporate Customer Portal: SSO Auth Active"); }} className="hover:text-white flex items-center space-x-1 transition-colors">
              <Lock className="w-3 h-3 text-cobalt-400" />
              <span>Client Portal SSO</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-mono">Sales Freight: +1 (800) 555-PAKCORP</span>
          </div>
        </div>
      </div>

      {/* Main Corporate Header */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-corporate border-b border-slate-200/80 py-3'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Corporate Logo */}
            <div
              onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-white shadow-md group-hover:bg-cobalt-600 transition-colors duration-300">
                <Box className="w-6 h-6 text-cobalt-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-navy-900 flex items-center font-mono">
                  PAK<span className="text-cobalt-600">CORP</span>
                  <span className="ml-2 px-1.5 py-0.5 text-[9px] uppercase font-bold tracking-wider bg-navy-100 text-navy-900 rounded border border-navy-200">
                    GLOBAL
                  </span>
                </span>
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest -mt-1">
                  Enterprise Packaging Co.
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/80 px-3 py-1 rounded-full border border-slate-200/80">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      setActiveTab(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`relative px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-navy-900 shadow-sm'
                        : 'text-slate-700 hover:text-navy-900 hover:bg-slate-200/70'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="ml-1.5 px-1.5 py-0.2 text-[9px] font-extrabold uppercase bg-cobalt-500 text-white rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              
              {/* Sample Kit Drawer Button */}
              <button
                onClick={onOpenSampleDrawer}
                className="relative p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors shadow-sm"
                title="View Sample Kit"
              >
                <ShoppingBag className="w-5 h-5 text-navy-900" />
                {sampleCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-cobalt-600 text-white font-bold text-[11px] flex items-center justify-center shadow-md">
                    {sampleCount}
                  </span>
                )}
              </button>

              {/* Enterprise RFQ CTA */}
              <button
                onClick={() => {
                  setActiveTab('configurator');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-navy-900 hover:bg-cobalt-600 shadow-sm transition-all duration-200 space-x-2"
              >
                <span>3D Box Studio</span>
                <ChevronRight className="w-3.5 h-3.5 text-cobalt-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={onOpenSampleDrawer}
                className="relative p-2 rounded-xl bg-slate-100 text-slate-800"
              >
                <ShoppingBag className="w-5 h-5 text-navy-900" />
                {sampleCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cobalt-600 text-white font-bold text-[10px] flex items-center justify-center">
                    {sampleCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 text-navy-900 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold ${
                  activeTab === link.id
                    ? 'bg-navy-900 text-white'
                    : 'text-slate-800 bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-cobalt-500 text-white rounded-full">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveTab('configurator');
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-navy-900 text-white font-bold text-sm text-center flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Launch Enterprise 3D Box Studio</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
