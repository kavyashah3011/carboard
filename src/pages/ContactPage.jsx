import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, Upload, FileText, 
  HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageSquare, Building2 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage({ showToast }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    boxType: 'RSC Shipping Container',
    annualQuantity: '5,000 - 25,000 units',
    notes: '',
    fileName: null
  });

  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'What is the CAD sample turnaround time for enterprise procurement?',
      a: 'We generate CAD vector dielines within 4 hours and dispatch physical unprinted test samples via express air freight within 48 hours.'
    },
    {
      q: 'What is the difference between 32 ECT and 44 ECT corrugated paperboard?',
      a: '32 ECT (Edge Crush Test) supports up to 65 lbs for parcel delivery. 44 ECT supports up to 95 lbs and is recommended for heavy pallet stacking and intermodal shipping.'
    },
    {
      q: 'Do your printing presses use 100% water-based eco inks?',
      a: 'Yes! All 6-pass flexographic presses across our 50+ mega-plants use zero-VOC water-based soy and vegetable inks safe for organic produce and food contact.'
    },
    {
      q: 'What are PakCorp minimum order quantities (MOQ)?',
      a: 'Standard RSC corrugated shipping containers have an MOQ of 500 units. Custom die-cut printed mailer boxes start at 250 units.'
    }
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, fileName: file.name });
      showToast(`Uploaded CAD Specimen: ${file.name}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 font-sans">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider font-mono">
          Global Enterprise Procurement
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Request Corporate RFQ Quote
        </h1>
        <p className="text-slate-600 text-base">
          Our senior packaging engineers respond within 2 hours with formal PDF pricing, CAD dieline drawings, and sample delivery options.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Form (lg:col-span-7) */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-corporate space-y-6">
          
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-extrabold text-navy-900">RFQ Inquiry Assigned!</h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you {form.name}! Enterprise procurement ticket <span className="font-mono font-bold text-navy-900">#PKC-9824</span> has been assigned to your senior corporate account director. Check {form.email} for status.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-xl bg-navy-900 text-white font-bold text-xs"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Step Indicators */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center">
                    {step}
                  </div>
                  <span className="text-xs font-bold text-navy-900">
                    {step === 1 ? '1. Account & Corporate Contact' : '2. Packaging Specifications & CAD'}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Step {step} of 2</span>
              </div>

              {step === 1 ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy-900 focus:outline-none focus:border-cobalt-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="s.jenkins@enterprise.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy-900 focus:outline-none focus:border-cobalt-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        placeholder="Global Supply Chain Inc"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy-900 focus:outline-none focus:border-cobalt-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700">Direct Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (800) 555-0192"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy-900 focus:outline-none focus:border-cobalt-500"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-3.5 rounded-xl bg-navy-900 hover:bg-cobalt-600 text-white font-bold text-xs transition-colors shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>Proceed to Product Specifications</span>
                    <Sparkles className="w-4 h-4 text-cobalt-400" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700">Target Box Category</label>
                      <select
                        value={form.boxType}
                        onChange={(e) => setForm({ ...form, boxType: e.target.value })}
                        className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy-900 font-bold focus:outline-none focus:border-cobalt-500"
                      >
                        <option>RSC Shipping Container</option>
                        <option>Custom Printed Die-Cut Mailer</option>
                        <option>Titan-Wall Heavy Duty Cargo</option>
                        <option>FDA Food Grade Bakery Box</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700">Estimated Annual Volume</label>
                      <select
                        value={form.annualQuantity}
                        onChange={(e) => setForm({ ...form, annualQuantity: e.target.value })}
                        className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy-900 font-bold focus:outline-none focus:border-cobalt-500"
                      >
                        <option>1,000 - 5,000 units</option>
                        <option>5,000 - 25,000 units</option>
                        <option>25,000 - 100,000 units</option>
                        <option>100,000+ Enterprise Tier</option>
                      </select>
                    </div>
                  </div>

                  {/* Artwork Upload */}
                  <div>
                    <label className="text-xs font-bold text-slate-700">Upload CAD File or Vector Artwork (Optional)</label>
                    <label className="mt-1 flex flex-col items-center justify-center p-6 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
                      <Upload className="w-8 h-8 text-slate-400 mb-2" />
                      <span className="text-xs font-bold text-navy-900">
                        {form.fileName ? form.fileName : 'Drop AI, PDF, DXF, or CAD dieline here'}
                      </span>
                      <span className="text-[10px] text-slate-500 mt-1">Up to 50MB vector files</span>
                      <input type="file" onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700">Special Freight Requirements</label>
                    <textarea
                      rows="3"
                      placeholder="e.g. Requires water-resistant coating, cold storage humidity compliance, express air delivery..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy-900 focus:outline-none focus:border-cobalt-500"
                    />
                  </div>

                  <div className="flex items-center space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3.5 px-5 rounded-xl bg-slate-100 text-navy-900 font-bold text-xs hover:bg-slate-200"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3.5 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-extrabold text-xs transition-colors shadow-md flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Master RFQ Quote</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>

        {/* Right Column: Global Hotlines & FAQ */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-navy-900 text-white p-6 rounded-3xl border border-navy-800 shadow-xl space-y-4">
            <h3 className="text-base font-bold flex items-center space-x-2">
              <Phone className="w-5 h-5 text-cobalt-400" />
              <span>Global Enterprise Hotlines</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-navy-950 rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">North America HQ</div>
                  <div className="text-slate-400">+1 (800) 555-PAKCORP</div>
                </div>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] rounded">Mon-Fri 24/5 Operations</span>
              </div>

              <div className="p-3 bg-navy-950 rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">European Hub</div>
                  <div className="text-slate-400">+49 69 900 1200</div>
                </div>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] rounded">Mon-Fri 8am-6pm CET</span>
              </div>

              <div className="p-3 bg-navy-950 rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">Corporate Procurement Email</div>
                  <div className="text-slate-400">rfq@pakcorpglobal.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-navy-900 flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-cobalt-600" />
              <span>Procurement FAQ</span>
            </h3>

            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full p-3.5 text-left text-xs font-bold text-navy-900 bg-slate-50 flex items-center justify-between"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp className="w-4 h-4 text-cobalt-600" /> : <ChevronDown className="w-4 h-4 text-cobalt-600" />}
                  </button>
                  {openFaq === idx && (
                    <div className="p-3.5 text-xs text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
