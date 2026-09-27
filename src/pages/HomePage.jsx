import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, ShieldCheck, Leaf, ArrowRight, Truck, Award, Layers, 
  Sparkles, CheckCircle2, ChevronRight, Recycle, Waves, Printer, Scissors, Flame, Scale, Globe, Building2, BarChart3
} from 'lucide-react';
import Box3DCanvas from '../components/Box3DCanvas';
import { PRODUCTS_DATA, MANUFACTURING_STEPS, CORPORATE_CLIENTS } from '../data/productsData';

export default function HomePage({ setActiveTab, onAddSample }) {
  const [heroDimensions, setHeroDimensions] = useState({ length: 18, width: 12, height: 10 });
  const [heroColor, setHeroColor] = useState('kraft');
  const [activeStep, setActiveStep] = useState(0);

  const stats = [
    { label: 'Global Revenue', value: '$1.4B', sub: 'NYSE Listed Enterprise' },
    { label: 'On-Time Freight', value: '99.98%', sub: 'Global Dispatch Reliability' },
    { label: 'Mega-Plants', value: '50+', sub: 'Facilities Worldwide' },
    { label: 'Recycled Fiber Source', value: '100%', sub: 'FSC Certified Operations' },
  ];

  const industrySolutions = [
    {
      title: 'Automotive & Heavy Industry',
      desc: 'Heavy-duty tri-wall corrugated shippers replacing wood crates with up to 71 ECT rating.',
      badge: 'Industrial Grade'
    },
    {
      title: 'E-Commerce & High-Volume D2C',
      desc: 'Automated high-speed die-cut mailers optimized for robotic fulfillment centers.',
      badge: 'High Automation'
    },
    {
      title: 'Cold-Chain & Pharmaceuticals',
      desc: 'FDA 21 CFR food-contact certified moisture barrier paperboard containers.',
      badge: 'FDA Certified'
    },
    {
      title: 'FMCG & Consumer Goods',
      desc: '6-color water-based flexographic retail display packaging with zero VOC emissions.',
      badge: 'Zero VOC'
    }
  ];

  return (
    <div className="space-y-20 pb-16 font-sans">
      
      {/* CORPORATE HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-corporate-grid border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Corporate Hero Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 border border-slate-300 text-slate-800 text-xs font-bold shadow-sm">
                <Building2 className="w-4 h-4 text-cobalt-600" />
                <span>Global Enterprise Packaging & Supply Chain</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.15]">
                Sustainable Corrugated <br />
                <span className="text-cobalt-600">Packaging Infrastructure</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                PakCorp International operates over 50 zero-waste manufacturing plants globally, delivering certified high-performance corrugated shipping containers to Fortune 500 supply chains.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => { setActiveTab('configurator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-7 py-4 rounded-xl bg-navy-900 hover:bg-cobalt-600 text-white font-bold text-sm shadow-corporate hover:shadow-corporate-hover transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-5 h-5 text-cobalt-400" />
                  <span>Enterprise 3D Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-7 py-4 rounded-xl bg-white text-navy-900 font-bold text-sm border border-slate-300 hover:bg-slate-100 transition-colors shadow-sm flex items-center justify-center space-x-2"
                >
                  <span>Explore Solutions</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>

              {/* Corporate Compliance Badges */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>FSC-C14029 Certified</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>FDA Food Safe Board</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: 3D CAD Preview Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="bg-white p-5 rounded-3xl shadow-corporate border border-slate-200 space-y-4">
                
                {/* 3D Box Viewer */}
                <div className="h-[380px] w-full">
                  <Box3DCanvas
                    length={heroDimensions.length}
                    width={heroDimensions.width}
                    height={heroDimensions.height}
                    color={heroColor}
                  />
                </div>

                {/* Tweak Bar */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-navy-900 font-mono">
                    <span>Interactive 3D CAD Specimen</span>
                    <span className="text-cobalt-600">{heroDimensions.length}"L × {heroDimensions.width}"W × {heroDimensions.height}"H</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-600">Length: {heroDimensions.length}"</label>
                      <input
                        type="range"
                        min="8"
                        max="30"
                        value={heroDimensions.length}
                        onChange={(e) => setHeroDimensions({ ...heroDimensions, length: Number(e.target.value) })}
                        className="w-full accent-navy-900"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-600">Width: {heroDimensions.width}"</label>
                      <input
                        type="range"
                        min="6"
                        max="24"
                        value={heroDimensions.width}
                        onChange={(e) => setHeroDimensions({ ...heroDimensions, width: Number(e.target.value) })}
                        className="w-full accent-navy-900"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-600">Height: {heroDimensions.height}"</label>
                      <input
                        type="range"
                        min="4"
                        max="20"
                        value={heroDimensions.height}
                        onChange={(e) => setHeroDimensions({ ...heroDimensions, height: Number(e.target.value) })}
                        className="w-full accent-navy-900"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="font-semibold text-slate-700">Finish Option:</span>
                    <div className="flex space-x-2">
                      {[
                        { id: 'kraft', label: 'Natural Kraft', bg: '#B8864E' },
                        { id: 'white', label: 'Coated White', bg: '#ffffff' },
                        { id: 'navy', label: 'Corporate Onyx', bg: '#1E293B' },
                        { id: 'emerald', label: 'Eco Forest', bg: '#047857' }
                      ].map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setHeroColor(c.id)}
                          className={`w-6 h-6 rounded-full border-2 transition-transform ${
                            heroColor === c.id ? 'scale-125 border-navy-900 shadow-md' : 'border-slate-300'
                          }`}
                          style={{ backgroundColor: c.bg }}
                          title={c.label}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CORPORATE FORTUNE 500 CLIENT MARQUEE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">
            Trusted Packaging Infrastructure Partner to Global Industry Leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center pt-2">
            {CORPORATE_CLIENTS.map((client, i) => (
              <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono font-bold text-slate-700 hover:text-navy-900 hover:border-slate-300 transition-colors">
                {client.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-navy-800 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-navy-800">
          {stats.map((stat, i) => (
            <div key={i} className={`pt-4 lg:pt-0 ${i !== 0 ? 'lg:pl-8' : ''} space-y-1`}>
              <div className="text-3xl sm:text-4xl font-extrabold text-cobalt-400 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-100">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cobalt-600 bg-cobalt-50 px-3 py-1 rounded-full border border-cobalt-200">
              Sector Specialization
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900 mt-2">
              Packaging Infrastructure by Industry
            </h2>
          </div>
          <button
            onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center space-x-1 text-sm font-bold text-cobalt-600 hover:text-navy-900 transition-colors"
          >
            <span>View Full Product Directory</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industrySolutions.map((sol, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-corporate transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold uppercase font-mono rounded">
                  {sol.badge}
                </span>
                <h3 className="text-lg font-bold text-navy-900">{sol.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{sol.desc}</p>
              </div>

              <button
                onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="pt-2 text-xs font-bold text-cobalt-600 flex items-center space-x-1 hover:underline"
              >
                <span>View Specifications</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200 px-3 py-1 rounded-full">
            Flagship Product Lines
          </span>
          <h2 className="text-3xl font-extrabold text-navy-900">
            Certified Enterprise Packaging Models
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-corporate transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-navy-900/90 text-white text-xs font-bold rounded-full border border-white/20">
                    {product.badge}
                  </span>
                  <span className="absolute bottom-4 right-4 px-3 py-1 bg-white/95 text-navy-900 text-xs font-extrabold rounded-lg shadow-sm font-mono">
                    From ${product.basePrice.toFixed(2)} / unit
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold font-mono">
                    <span>{product.ectRating}</span>
                    <span className="text-emerald-600 font-bold">{product.recycledContent}</span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900">{product.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center space-x-3">
                <button
                  onClick={() => onAddSample(product)}
                  className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold text-xs transition-colors border border-slate-200 flex items-center justify-center space-x-1"
                >
                  <span>Request CAD Sample</span>
                </button>
                <button
                  onClick={() => { setActiveTab('configurator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="py-3 px-4 rounded-xl bg-navy-900 hover:bg-cobalt-600 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-1"
                >
                  <Sparkles className="w-4 h-4 text-cobalt-400" />
                  <span>3D Studio</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MANUFACTURING INFRASTRUCTURE WORKFLOW */}
      <section className="bg-navy-950 text-white py-20 border-y border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-cobalt-600/20 text-cobalt-400 font-bold text-xs rounded-full uppercase tracking-wider border border-cobalt-500/30">
              Manufacturing Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Automated Zero-Waste Production Line
            </h2>
            <p className="text-sm text-slate-400">
              Our 5-stage automated corrugation pipeline ensures maximum compressive burst strength and sub-millimeter fold accuracy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {MANUFACTURING_STEPS.map((stepItem, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeStep === idx
                    ? 'bg-cobalt-600 border-cobalt-400 text-white shadow-xl scale-105'
                    : 'bg-navy-900/60 border-navy-800 text-slate-400 hover:bg-navy-900'
                }`}
              >
                <div className="text-xs font-mono font-bold text-cobalt-300 mb-1">{stepItem.step}</div>
                <div className="text-xs font-extrabold line-clamp-1">{stepItem.title}</div>
              </button>
            ))}
          </div>

          <div className="bg-navy-900 p-8 rounded-3xl border border-navy-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-cobalt-600/30 text-cobalt-300 font-mono text-xs font-bold border border-cobalt-500/30">
                STAGE {MANUFACTURING_STEPS[activeStep].step} OF 05
              </div>
              <h3 className="text-2xl font-bold text-white">{MANUFACTURING_STEPS[activeStep].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {MANUFACTURING_STEPS[activeStep].detail}
              </p>
            </div>

            <div className="md:col-span-4 bg-navy-950 p-6 rounded-2xl border border-navy-800 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-cobalt-600 text-white flex items-center justify-center mx-auto shadow-lg">
                <Layers className="w-7 h-7" />
              </div>
              <div className="text-xs font-mono text-slate-400">Automated Capacity</div>
              <div className="text-sm font-bold text-white font-mono">12,000 Sheets / Hour</div>
            </div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 text-white rounded-3xl p-10 sm:p-14 shadow-2xl border border-navy-800 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl z-10 text-center md:text-left">
            <span className="px-3 py-1 bg-cobalt-500 text-white font-bold text-xs rounded-full">
              Enterprise Procurement
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Need Custom Box Dimensions or High-Volume Master RFQ?
            </h2>
            <p className="text-sm text-slate-300">
              Use our Enterprise 3D Studio to input custom measurements, choose flute grades, and generate instant corporate quote sheets.
            </p>
          </div>

          <div className="z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => { setActiveTab('configurator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-4 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-extrabold text-sm transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-5 h-5 text-cobalt-200" />
              <span>Launch 3D Studio</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
