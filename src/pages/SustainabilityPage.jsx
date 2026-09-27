import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, ShieldCheck, Award, Droplets, TreePine, CloudLightning, Factory, CheckCircle2, ArrowRight } from 'lucide-react';
import { SUSTAINABILITY_METRICS } from '../data/productsData';

export default function SustainabilityPage({ setActiveTab }) {
  const [monthlyBoxes, setMonthlyBoxes] = useState(25000);

  const tonsEquivalent = (monthlyBoxes * 12) / 2000;
  const treesSaved = Math.round(tonsEquivalent * SUSTAINABILITY_METRICS.treesSavedPerTon);
  const waterSavedGallons = Math.round(tonsEquivalent * SUSTAINABILITY_METRICS.waterSavedGallonsPerTon);
  const co2SavedKg = Math.round(tonsEquivalent * SUSTAINABILITY_METRICS.co2SavedKgPerTon);

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 font-sans">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider font-mono">
          <Leaf className="w-4 h-4 text-emerald-600" />
          <span>2026 ESG & Circular Economy Report</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Net-Zero Environmental Infrastructure
        </h1>
        <p className="text-slate-600 text-base">
          PakCorp International operates closed-loop paper recycling systems across all 50+ mega-plants to eliminate single-use plastics from global supply chains.
        </p>
      </div>

      {/* ESG IMPACT ESTIMATOR */}
      <section className="bg-navy-900 text-white p-8 sm:p-12 rounded-3xl border border-navy-800 shadow-2xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-navy-800 pb-6">
          <div>
            <span className="text-xs font-mono text-cobalt-400 uppercase tracking-widest">
              Enterprise Sustainability Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Calculate Corporate Carbon & Water Offset
            </h2>
          </div>
          <div className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold font-mono">
            Zero Plastic ESG Rating
          </div>
        </div>

        {/* Input slider */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex justify-between text-xs font-bold text-slate-300 font-mono">
            <span>Annual Enterprise Consumption:</span>
            <span className="text-cobalt-400 text-base font-extrabold">
              {(monthlyBoxes * 12).toLocaleString()} boxes / year
            </span>
          </div>
          <input
            type="range"
            min="5000"
            max="500000"
            step="5000"
            value={monthlyBoxes}
            onChange={(e) => setMonthlyBoxes(Number(e.target.value))}
            className="w-full accent-cobalt-500 h-2.5 bg-navy-950 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>60,000 units/yr</span>
            <span>600,000 units/yr</span>
            <span>6,000,000 units/yr</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="p-6 bg-navy-950 rounded-2xl border border-navy-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <TreePine className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">{treesSaved.toLocaleString()}</div>
            <div className="text-xs font-bold text-slate-300">Trees Preserved</div>
            <p className="text-[11px] text-slate-400">Diverted from virgin timber logging.</p>
          </div>

          <div className="p-6 bg-navy-950 rounded-2xl border border-navy-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">{waterSavedGallons.toLocaleString()}</div>
            <div className="text-xs font-bold text-slate-300">Gallons Water Saved</div>
            <p className="text-[11px] text-slate-400">Conserved in hydrapulping circuits.</p>
          </div>

          <div className="p-6 bg-navy-950 rounded-2xl border border-navy-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <CloudLightning className="w-6 h-6 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">{co2SavedKg.toLocaleString()} kg</div>
            <div className="text-xs font-bold text-slate-300">CO2 Emissions Reduced</div>
            <p className="text-[11px] text-slate-400">Offset vs virgin paperboard.</p>
          </div>
        </div>
      </section>

      {/* QUALITY TESTING LAB */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200 px-3 py-1 rounded-full font-mono">
            ISO 9001 Testing Standard
          </span>
          <h2 className="text-3xl font-extrabold text-navy-900">
            Certified Quality & Compression Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-navy-900 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-cobalt-600" />
            </div>
            <h3 className="text-lg font-bold text-navy-900">Edge Crush Test (ECT)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Measures compressive strength along the fluting axis. Guaranteed 32 ECT to 71 ECT ratings to ensure vertical stack stability on ocean freight containers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-navy-900 flex items-center justify-center">
              <Factory className="w-6 h-6 text-cobalt-600" />
            </div>
            <h3 className="text-lg font-bold text-navy-900">Mullen Bursting Strength</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tests force required to puncture box sidewalls (200 to 600 PSI resistance). Critical for shipping dense automotive and industrial machinery parts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-navy-900 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-cobalt-600" />
            </div>
            <h3 className="text-lg font-bold text-navy-900">Humidity & Moisture Chamber</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Exposes test specimens to 95% relative humidity and sub-zero cold storage to simulate long-distance cold-chain marine logistics.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-navy-900">Download PakCorp's 2026 ESG Compliance Audit Sheet</h3>
          <p className="text-xs text-slate-600">Access official FSC certificates, carbon offset metrics, and ISO compliance documentations.</p>
        </div>
        <button
          onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="px-6 py-3 rounded-xl bg-navy-900 hover:bg-cobalt-600 text-white font-bold text-xs transition-colors shadow-md whitespace-nowrap"
        >
          Request ESG Audit Package
        </button>
      </div>

    </div>
  );
}
