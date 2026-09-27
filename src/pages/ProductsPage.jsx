import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Box, ShieldCheck, Leaf, Sparkles, CheckCircle2, ArrowRight, X, Info } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';

export default function ProductsPage({ setActiveTab, onAddSample }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductModal, setSelectedProductModal] = useState(null);

  const categories = [
    { id: 'all', label: 'All Packaging Solutions' },
    { id: 'shipping', label: 'RSC Shipping Containers' },
    { id: 'custom-printed', label: 'Die-Cut Tuck Mailers' },
    { id: 'heavy-duty', label: 'Heavy Duty Triple-Wall' },
    { id: 'food-grade', label: 'FDA Food Grade' },
    { id: 'eco-accessories', label: 'Paper Honeycomb & Void Fill' },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.ectRating.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider font-mono">
          Industrial Product Catalog
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Enterprise Packaging Directory
        </h1>
        <p className="text-slate-600 text-base">
          Browse certified structural container models or request CAD sample kits for warehouse compression testing.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search ECT rating, PSI strength, box type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-cobalt-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-corporate transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Product Image */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-navy-900/90 text-white text-xs font-bold rounded-full border border-white/20">
                  {product.badge}
                </span>
                <button
                  onClick={() => setSelectedProductModal(product)}
                  className="absolute top-4 right-4 p-2 bg-white/90 text-navy-900 hover:text-cobalt-600 rounded-full shadow-md"
                  title="Technical Spec Sheet"
                >
                  <Info className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 bg-white/95 text-navy-900 text-xs font-extrabold rounded-lg shadow-sm font-mono">
                    ${product.basePrice.toFixed(2)} / unit
                  </span>
                  <span className="px-2.5 py-1 bg-navy-900/90 text-slate-300 text-[10px] font-mono rounded-lg">
                    MOQ: {product.minOrder}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold font-mono">
                  <span>ECT: {product.ectRating}</span>
                  <span className="text-emerald-600 font-bold">{product.recycledContent}</span>
                </div>

                <h3 className="text-lg font-bold text-navy-900">{product.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Specs List */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Bursting Strength:</span>
                    <span className="font-mono font-bold">{product.burstStrength}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Standard Flute:</span>
                    <span className="font-semibold text-navy-900">{product.fluteOptions[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Actions */}
            <div className="p-6 pt-0 flex items-center space-x-3">
              <button
                onClick={() => onAddSample(product)}
                className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold text-xs transition-colors border border-slate-200 flex items-center justify-center space-x-1"
              >
                <span>Request Sample</span>
              </button>
              <button
                onClick={() => { setActiveTab('configurator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="py-3 px-4 rounded-xl bg-navy-900 hover:bg-cobalt-600 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-1"
                title="Configure Box Dimensions"
              >
                <Sparkles className="w-4 h-4 text-cobalt-400" />
                <span>3D Studio</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Technical Spec Modal */}
      <AnimatePresence>
        {selectedProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProductModal(null)}
              className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 space-y-6"
            >
              {/* Modal Header */}
              <div className="p-6 bg-navy-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-cobalt-400 uppercase tracking-widest">
                    Corporate Technical Spec Sheet
                  </span>
                  <h3 className="text-xl font-bold">{selectedProductModal.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedProductModal(null)}
                  className="p-2 rounded-full hover:bg-navy-800 text-slate-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Specs Grid */}
              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-xs font-bold text-slate-500">Material Grade</span>
                    <p className="text-sm font-semibold text-navy-900">{selectedProductModal.specifications.material}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-xs font-bold text-slate-500">Max Weight Capacity</span>
                    <p className="text-sm font-semibold text-navy-900">{selectedProductModal.specifications.maxWeight}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-xs font-bold text-slate-500">Edge Crush Test (ECT)</span>
                    <p className="text-sm font-semibold text-navy-900">{selectedProductModal.ectRating}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-xs font-bold text-slate-500">Mullen Bursting Strength</span>
                    <p className="text-sm font-semibold text-navy-900">{selectedProductModal.burstStrength}</p>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
                  <span className="text-xs font-bold text-emerald-800 flex items-center space-x-1">
                    <Leaf className="w-4 h-4 text-emerald-600" />
                    <span>FSC-C14029 Environmental Compliance</span>
                  </span>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    100% Biodegradable under natural composting conditions within 90 days. Zero-plastic starch adhesives used during flute corrugation.
                  </p>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => {
                    onAddSample(selectedProductModal);
                    setSelectedProductModal(null);
                  }}
                  className="py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-colors"
                >
                  Add Sample to Kit
                </button>
                <button
                  onClick={() => {
                    setSelectedProductModal(null);
                    setActiveTab('configurator');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-3 px-6 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-bold text-xs transition-colors"
                >
                  Configure Custom Sizes
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
