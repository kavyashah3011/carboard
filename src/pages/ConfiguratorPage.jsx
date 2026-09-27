import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Box, Sliders, DollarSign, Layers, ShieldCheck, Download, 
  Send, Copy, CheckCircle2, RefreshCw, Info, HelpCircle
} from 'lucide-react';
import Box3DCanvas from '../components/Box3DCanvas';
import confetti from 'canvas-confetti';

export default function ConfiguratorPage({ onAddSample, showToast }) {
  // Configurator state
  const [dimensions, setDimensions] = useState({ length: 18, width: 12, height: 10 });
  const [boxType, setBoxType] = useState('rsc');
  const [fluteGrade, setFluteGrade] = useState('c-flute-44');
  const [colorFinish, setColorFinish] = useState('kraft');
  const [printingType, setPrintingType] = useState('none');
  const [quantity, setQuantity] = useState(2500);
  const [isQuotationSubmitted, setIsQuotationSubmitted] = useState(false);

  // Box types metadata
  const boxTypes = [
    { id: 'rsc', name: 'Regular Slotted Container (RSC)', desc: 'Standard 4-flap intermodal shipping box' },
    { id: 'tuck-mailer', name: 'PakCorp Shield-Tuck™ Die-Cut Mailer', desc: 'No tape required, elegant D2C unboxing' },
    { id: 'heavy-cargo', name: 'Titan-Wall™ Heavy Freight Shipper', desc: 'Triple wall for machinery export' },
    { id: 'tray-lid', name: 'Telescopic Tray & Lid Container', desc: 'Two-piece rigid packaging for heavy parts' }
  ];

  // Flute strength options
  const fluteOptions = [
    { id: 'b-flute-32', name: 'Single Wall B-Flute (32 ECT)', multiplier: 1.0, strength: 'Lightweight Retail' },
    { id: 'c-flute-44', name: 'Standard C-Flute (44 ECT)', multiplier: 1.25, strength: 'Standard Logistics' },
    { id: 'bc-double-51', name: 'Double Wall BC-Flute (51 ECT)', multiplier: 1.75, strength: 'Heavy Stacking Pallets' },
    { id: 'tri-wall-71', name: 'Titan Tri-Wall Heavy Duty (71 ECT)', multiplier: 2.4, strength: 'Export Cargo Crating' }
  ];

  // Calculate pricing dynamically
  const pricing = useMemo(() => {
    const surfaceAreaSqInches = 2 * (dimensions.length * dimensions.width + dimensions.length * dimensions.height + dimensions.width * dimensions.height);
    const surfaceAreaSqFt = surfaceAreaSqInches / 144;

    const basePaperCostPerSqFt = 0.32;
    const fluteMultiplier = fluteOptions.find(f => f.id === fluteGrade)?.multiplier || 1.25;

    let finishMultiplier = 1.0;
    if (colorFinish === 'white') finishMultiplier = 1.12;
    if (colorFinish === 'navy') finishMultiplier = 1.18;
    if (colorFinish === 'emerald') finishMultiplier = 1.10;

    let printCostPerUnit = 0;
    if (printingType === '1-color') printCostPerUnit = 0.12;
    if (printingType === 'full-color') printCostPerUnit = 0.38;

    let unitPrice = (surfaceAreaSqFt * basePaperCostPerSqFt * fluteMultiplier * finishMultiplier) + printCostPerUnit;

    // Volume discount curve
    let discount = 0;
    if (quantity >= 1000) discount = 0.20;
    if (quantity >= 5000) discount = 0.35;
    if (quantity >= 10000) discount = 0.48;
    if (quantity >= 25000) discount = 0.58;

    unitPrice = unitPrice * (1 - discount);
    unitPrice = Math.max(unitPrice, 0.22);

    const totalPrice = unitPrice * quantity;
    const estWeightLbsPerBox = (surfaceAreaSqFt * 0.18).toFixed(2);
    const totalFreightWeightLbs = Math.round(estWeightLbsPerBox * quantity);

    return {
      unitPrice: unitPrice.toFixed(2),
      totalPrice: totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      discountPercent: Math.round(discount * 100),
      estWeightLbsPerBox,
      totalFreightWeightLbs
    };
  }, [dimensions, fluteGrade, colorFinish, printingType, quantity]);

  const handleCopyConfig = () => {
    const text = `PakCorp CAD Spec:\nDimensions: ${dimensions.length}" x ${dimensions.width}" x ${dimensions.height}"\nType: ${boxType}\nFlute: ${fluteGrade}\nFinish: ${colorFinish}\nQuantity: ${quantity}\nEst. Unit Price: $${pricing.unitPrice}`;
    navigator.clipboard.writeText(text);
    showToast('PakCorp CAD Specifications copied to clipboard!');
  };

  const handleRequestOfficialQuote = (e) => {
    e.preventDefault();
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setIsQuotationSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-900 text-white font-mono font-extrabold text-xs uppercase tracking-wider shadow-sm">
          <Sparkles className="w-4 h-4 text-cobalt-400" />
          <span>PakCorp Enterprise 3D CAD Engine</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Configure Custom Dimensions & B2B Pricing
        </h1>
        <p className="text-slate-600 text-base">
          Input exact measurements, choose flute compression grades, and generate instant corporate wholesale quotes.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 3D CAD Preview (lg:col-span-5) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-corporate space-y-4">
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center space-x-1.5 font-mono">
                <Box className="w-4 h-4 text-cobalt-600" />
                <span>3D CAD Model Specimen</span>
              </span>
              <button
                onClick={handleCopyConfig}
                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold text-xs rounded-lg flex items-center space-x-1"
                title="Copy specs"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Spec</span>
              </button>
            </div>

            {/* Canvas Render */}
            <div className="h-[400px] w-full">
              <Box3DCanvas
                length={dimensions.length}
                width={dimensions.width}
                height={dimensions.height}
                color={colorFinish}
                boxType={boxType}
              />
            </div>

            {/* Quick Specs summary */}
            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-100">
              <div className="p-2 bg-slate-50 rounded-xl">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">Volume</span>
                <span className="text-xs font-bold text-navy-900 font-mono">
                  {((dimensions.length * dimensions.width * dimensions.height) / 1728).toFixed(2)} cu ft
                </span>
              </div>
              <div className="p-2 bg-slate-50 rounded-xl">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">Est. Weight</span>
                <span className="text-xs font-bold text-navy-900 font-mono">
                  {pricing.estWeightLbsPerBox} lbs/box
                </span>
              </div>
              <div className="p-2 bg-slate-50 rounded-xl">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">FSC Certified</span>
                <span className="text-xs font-bold text-emerald-600">100% Eco</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Customization Controls (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Section 1: Dimensions Sliders */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-base font-bold text-navy-900 flex items-center space-x-2">
              <Sliders className="w-5 h-5 text-cobalt-600" />
              <span>1. Enter Internal Box Dimensions (Inches)</span>
            </h3>

            <div className="space-y-4">
              {/* Length */}
              <div>
                <div className="flex justify-between text-xs font-bold text-navy-900 mb-1 font-mono">
                  <span>Length (L)</span>
                  <span className="text-cobalt-600">{dimensions.length} inches</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="36"
                  value={dimensions.length}
                  onChange={(e) => setDimensions({ ...dimensions, length: Number(e.target.value) })}
                  className="w-full accent-navy-900 h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>

              {/* Width */}
              <div>
                <div className="flex justify-between text-xs font-bold text-navy-900 mb-1 font-mono">
                  <span>Width (W)</span>
                  <span className="text-cobalt-600">{dimensions.width} inches</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="30"
                  value={dimensions.width}
                  onChange={(e) => setDimensions({ ...dimensions, width: Number(e.target.value) })}
                  className="w-full accent-navy-900 h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>

              {/* Height */}
              <div>
                <div className="flex justify-between text-xs font-bold text-navy-900 mb-1 font-mono">
                  <span>Height (H)</span>
                  <span className="text-cobalt-600">{dimensions.height} inches</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="24"
                  value={dimensions.height}
                  onChange={(e) => setDimensions({ ...dimensions, height: Number(e.target.value) })}
                  className="w-full accent-navy-900 h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Box Style & Material Strength */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-base font-bold text-navy-900 flex items-center space-x-2">
              <Layers className="w-5 h-5 text-cobalt-600" />
              <span>2. Select Box Structure & Compression ECT</span>
            </h3>

            {/* Box Type Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {boxTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setBoxType(type.id)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    boxType === type.id
                      ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                      : 'bg-slate-50 text-navy-900 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="text-xs font-bold">{type.name}</div>
                  <div className={`text-[11px] mt-1 ${boxType === type.id ? 'text-slate-300' : 'text-slate-500'}`}>
                    {type.desc}
                  </div>
                </button>
              ))}
            </div>

            {/* Flute / ECT Rating */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-navy-900">Flute Grade & Edge Crush Test (ECT)</label>
              <select
                value={fluteGrade}
                onChange={(e) => setFluteGrade(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-navy-900 focus:outline-none focus:border-cobalt-500 font-mono"
              >
                {fluteOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.name} — {opt.strength}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Section 3: Paper Finish & Printing */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-base font-bold text-navy-900 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-cobalt-600" />
              <span>3. Exterior Linerboard & Flexo Print</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'kraft', label: 'Unbleached Kraft', color: '#B8864E' },
                { id: 'white', label: 'Coated White', color: '#ffffff' },
                { id: 'navy', label: 'Corporate Onyx', color: '#1E293B' },
                { id: 'emerald', label: 'Eco Forest Green', color: '#047857' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setColorFinish(f.id)}
                  className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center space-y-2 ${
                    colorFinish === f.id
                      ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                      : 'bg-slate-50 text-navy-900 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full border border-slate-300" style={{ backgroundColor: f.color }} />
                  <span className="text-[11px] font-bold">{f.label}</span>
                </button>
              ))}
            </div>

            <div>
              <label className="text-xs font-bold text-navy-900">Flexo Eco-Ink Printing Options</label>
              <select
                value={printingType}
                onChange={(e) => setPrintingType(e.target.value)}
                className="w-full mt-1.5 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-navy-900 focus:outline-none focus:border-cobalt-500 font-mono"
              >
                <option value="none">Plain Container (Zero Ink)</option>
                <option value="1-color">1-Color Water-Based Soy Ink (Exterior Logo)</option>
                <option value="full-color">Full-Color 6-Pass Water-Based Flexo (Interior & Exterior)</option>
              </select>
            </div>
          </div>

          {/* Section 4: Volume & Instant Quote Breakdown */}
          <div className="bg-navy-900 text-white p-8 rounded-3xl border border-navy-800 shadow-2xl space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-800 pb-6">
              <div>
                <span className="text-xs font-mono text-cobalt-400 uppercase tracking-widest">
                  Wholesale Price Engine
                </span>
                <h3 className="text-2xl font-bold">Corporate Quote Summary</h3>
              </div>

              {pricing.discountPercent > 0 && (
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full">
                  🔥 {pricing.discountPercent}% Enterprise Volume Discount Applied
                </span>
              )}
            </div>

            {/* Quantity Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                <span>Production Quantity:</span>
                <span className="font-mono text-cobalt-400 text-sm font-extrabold">
                  {quantity.toLocaleString()} units
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-cobalt-500 h-2.5 bg-navy-950 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>500 (Min)</span>
                <span>5,000 (Tier 1)</span>
                <span>25,000 (Tier 2)</span>
                <span>50,000+ Enterprise</span>
              </div>
            </div>

            {/* Output Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-navy-950 rounded-2xl border border-navy-800">
                <span className="text-xs text-slate-400 font-mono">Unit Price:</span>
                <div className="text-3xl font-extrabold text-white font-mono mt-1">
                  ${pricing.unitPrice} <span className="text-xs text-slate-400 font-sans font-normal">/ unit</span>
                </div>
              </div>

              <div className="p-4 bg-navy-950 rounded-2xl border border-navy-800">
                <span className="text-xs text-slate-400 font-mono">Estimated Order Total:</span>
                <div className="text-3xl font-extrabold text-cobalt-400 font-mono mt-1">
                  ${pricing.totalPrice}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleRequestOfficialQuote}
                className="flex-1 py-4 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-extrabold text-sm transition-colors shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Master RFQ Quote</span>
              </button>

              <button
                onClick={() => {
                  onAddSample({
                    id: `custom-${Date.now()}`,
                    name: `PakCorp Custom ${dimensions.length}"x${dimensions.width}"x${dimensions.height}" Box`,
                    ectRating: fluteGrade,
                    image: null
                  });
                }}
                className="px-6 py-4 rounded-xl bg-navy-950 hover:bg-navy-800 text-white font-bold text-xs border border-navy-800 flex items-center justify-center space-x-1"
              >
                <span>Request CAD Sample</span>
              </button>
            </div>

            {isQuotationSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs rounded-2xl flex items-center space-x-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>
                  Official PakCorp RFQ Received! A corporate account director will email your formal PDF quotation and CAD dielines within 2 business hours.
                </span>
              </motion.div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
