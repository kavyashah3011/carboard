import React from 'react';
import { Factory, ShieldCheck, Award, Globe, Users, Clock, Box, CheckCircle2, MapPin, Building2, BarChart } from 'lucide-react';

export default function AboutPage({ setActiveTab }) {
  const factoryLocations = [
    { name: 'North America Mega Plant & HQ', city: 'Chicago, IL, USA', size: '650,000 sq ft', capacity: '350M boxes/year' },
    { name: 'European Logistics Infrastructure', city: 'Frankfurt, Germany', size: '450,000 sq ft', capacity: '250M boxes/year' },
    { name: 'Asia-Pacific Manufacturing Hub', city: 'Singapore Hub', size: '400,000 sq ft', capacity: '200M boxes/year' },
    { name: 'Latin America Operations', city: 'São Paulo, Brazil', size: '300,000 sq ft', capacity: '150M boxes/year' },
  ];

  const machinery = [
    { name: 'Fosber 2.8m Heavy Corrugator', speed: '350 meters/min', type: 'Single, Double & Triple Wall' },
    { name: 'BOBST 6-Color Flexographic Press', speed: '12,000 sheets/hour', type: 'Water-based Soy Inks' },
    { name: 'Martin Rotary CNC Die-Cutter', speed: '15,000 sheets/hour', type: 'High-Precision Creasing' },
    { name: 'Bahmüller Auto Folder-Gluer', speed: '30,000 boxes/hour', type: 'Cold Glue & Hot Melt Sealing' }
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 font-sans">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider font-mono">
          Global Enterprise Infrastructure
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Over 50 Manufacturing Plants Worldwide
        </h1>
        <p className="text-slate-600 text-base">
          PakCorp International (NYSE: PKC) is a vertically integrated enterprise manufacturer of heavy-duty corrugated shipping containers, serving Fortune 500 supply chains.
        </p>
      </div>

      {/* Global Manufacturing Hubs */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-extrabold text-navy-900 flex items-center space-x-2">
            <Globe className="w-6 h-6 text-cobalt-600" />
            <span>Primary Regional Facilities</span>
          </h2>
          <span className="text-xs text-slate-500 font-mono">Total Floor Area: 1,800,000+ sq ft</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {factoryLocations.map((loc, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-navy-900 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cobalt-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-900">{loc.name}</h3>
                  <p className="text-xs text-slate-500">{loc.city}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Floor Area:</span>
                  <span className="font-mono font-bold text-navy-900">{loc.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Annual Capacity:</span>
                  <span className="font-mono font-bold text-cobalt-600">{loc.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Production Infrastructure */}
      <section className="bg-navy-900 text-white p-8 sm:p-12 rounded-3xl border border-navy-800 shadow-2xl space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono text-cobalt-400 uppercase tracking-widest">
            Plant Infrastructure & Automation
          </span>
          <h2 className="text-3xl font-extrabold">Next-Gen Production Machinery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {machinery.map((m, i) => (
            <div key={i} className="p-5 bg-navy-950 rounded-2xl border border-navy-800 space-y-2">
              <div className="text-xs font-mono text-cobalt-400 font-bold">{m.speed}</div>
              <h3 className="text-sm font-bold text-white">{m.name}</h3>
              <p className="text-xs text-slate-400">{m.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Standards & Governance */}
      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center space-y-6">
        <h3 className="text-xl font-bold text-navy-900">Certified Quality Management & Corporate Governance</h3>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-700">
          <div className="px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>ISO 9001:2015 Quality Certification</span>
          </div>
          <div className="px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>FSC Chain of Custody (FSC-C14029)</span>
          </div>
          <div className="px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>FDA 21 CFR 176.170 Food Contact Compliant</span>
          </div>
          <div className="px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>OSHA & EcoVadis Gold ESG Rating</span>
          </div>
        </div>
      </section>

    </div>
  );
}
