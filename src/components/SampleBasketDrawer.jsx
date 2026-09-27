import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, CheckCircle2, Box, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SampleBasketDrawer({ isOpen, onClose, samples, onRemoveSample, onClearSamples }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    address: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (samples.length === 0) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClearSamples();
      onClose();
    }, 3500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 bg-navy-900 text-white flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-cobalt-600 flex items-center justify-center text-white">
                    <Box className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">CAD Sample Kit Request</h2>
                    <p className="text-xs text-slate-400">Test material compression strength</p>
                  </div>
                </div>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-navy-800 text-slate-300">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900">Sample Dispatch En Route!</h3>
                    <p className="text-sm text-slate-600 max-w-xs mx-auto">
                      Your CAD sample kit has been queued for Express Air freight dispatch. Confirmation sent to {formData.email}.
                    </p>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono text-slate-800">
                      Estimated Delivery: 48 Hours
                    </div>
                  </motion.div>
                ) : (
                  <>
                    {/* Selected Samples List */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between font-mono">
                        <span>Selected CAD Samples ({samples.length})</span>
                        {samples.length > 0 && (
                          <button onClick={onClearSamples} className="text-red-600 hover:underline text-[11px] font-sans">
                            Clear All
                          </button>
                        )}
                      </h3>

                      {samples.length === 0 ? (
                        <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-2">
                          <Box className="w-10 h-10 text-slate-400 mx-auto" />
                          <p className="text-sm font-semibold text-navy-900">Sample kit basket is empty</p>
                          <p className="text-xs text-slate-500">
                            Browse products or use the 3D Box Studio to add sample specimens to test.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {samples.map((item, index) => (
                            <div
                              key={index}
                              className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between"
                            >
                              <div className="flex items-center space-x-3">
                                {item.image ? (
                                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                                ) : (
                                  <div className="w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center text-white">
                                    <Box className="w-6 h-6" />
                                  </div>
                                )}
                                <div>
                                  <h4 className="text-xs font-bold text-navy-900">{item.name}</h4>
                                  <p className="text-[11px] text-slate-500 font-mono">{item.ectRating || 'Custom CAD Spec'}</p>
                                </div>
                              </div>

                              <button
                                onClick={() => onRemoveSample(index)}
                                className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Shipping Address Form */}
                    {samples.length > 0 && (
                      <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-slate-200">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
                          Corporate Delivery Address (Free Air Freight)
                        </h3>

                        <div>
                          <label className="text-xs font-semibold text-slate-700">Contact Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Sarah Jenkins"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full mt-1 px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-cobalt-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-slate-700">Company Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Acme Global Freight"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full mt-1 px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-cobalt-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-slate-700">Corporate Email</label>
                          <input
                            type="email"
                            required
                            placeholder="s.jenkins@acme.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full mt-1 px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-cobalt-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-slate-700">Facility / Office Address</label>
                          <textarea
                            required
                            rows="2"
                            placeholder="100 Enterprise Boulevard, Suite 500"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="w-full mt-1 px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-cobalt-500"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-bold text-xs transition-colors shadow-md flex items-center justify-center space-x-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>Dispatch CAD Sample Kit</span>
                        </button>
                      </form>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
