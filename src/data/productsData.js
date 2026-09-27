export const PRODUCTS_DATA = [
  {
    id: 'pakcorp-rsc-standard',
    name: 'PakCorp Pro-Fold™ Standard Corrugated Container',
    category: 'shipping',
    badge: 'Enterprise Standard',
    description: 'High-volume Regular Slotted Container engineered for automated packaging lines, high-density warehousing, and international intermodal freight.',
    rating: 4.95,
    reviewsCount: 1420,
    basePrice: 0.42,
    minOrder: 500,
    fluteOptions: ['C-Flute (4mm)', 'B-Flute (3mm)', 'BC-Double Wall (7mm)'],
    ectRating: '32 ECT - 48 ECT Certified',
    burstStrength: '200 - 300 PSI Mullen',
    recycledContent: '100% Recycled Kraft Fiber',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    specifications: {
      material: 'Unbleached Heavy Duty Kraft Linerboard',
      maxWeight: '75 lbs (34 kg)',
      closure: 'Automated Hot-Melt Sealing / Tape',
      biodegradable: true,
      customPrintable: true,
    }
  },
  {
    id: 'pakcorp-diecut-mailer',
    name: 'PakCorp Shield-Tuck™ Premium Die-Cut Mailer',
    category: 'custom-printed',
    badge: 'D2C Flagship',
    description: 'Self-locking luxury corrugated mailer with dust flaps and high-precision creasing. Designed for premium unboxing and direct-to-consumer logistics.',
    rating: 4.98,
    reviewsCount: 980,
    basePrice: 0.78,
    minOrder: 250,
    fluteOptions: ['E-Flute (1.5mm Micro)', 'B-Flute (3mm Standard)'],
    ectRating: '32 ECT Premium Smooth',
    burstStrength: '175 PSI',
    recycledContent: '95% FSC Recycled Content',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    specifications: {
      material: 'Coated White or Kraft Micro-Flute',
      maxWeight: '30 lbs (13.6 kg)',
      closure: 'Interlocking Front Flap (No Tape Required)',
      biodegradable: true,
      customPrintable: true,
    }
  },
  {
    id: 'pakcorp-triwall-heavy',
    name: 'PakCorp Titan-Wall™ Heavy Industrial Cargo Box',
    category: 'heavy-duty',
    badge: 'Military & OEM Grade',
    description: 'Triple-wall corrugated heavy freight shipper designed to replace wooden crates. Extreme compression strength for machinery, automotive parts, and bulk export.',
    rating: 5.0,
    reviewsCount: 340,
    basePrice: 2.10,
    minOrder: 50,
    fluteOptions: ['BC-Double Wall (7mm)', 'AAC-Triple Wall (12mm)'],
    ectRating: '71 ECT Extra Heavy Duty',
    burstStrength: '600 PSI Mullen',
    recycledContent: '85% Kraft Fiber',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    specifications: {
      material: 'High-Density Virgin & Recycled Heavy Liner',
      maxWeight: '350 lbs (158.7 kg)',
      closure: 'Heavy Duty Metal Banding & Strapping',
      biodegradable: true,
      customPrintable: true,
    }
  },
  {
    id: 'pakcorp-biolock-food',
    name: 'PakCorp BioLock™ FDA Food-Grade Container',
    category: 'food-grade',
    badge: 'FDA Certified',
    description: 'Certified grease-resistant food-safe container with non-toxic aqueous barriers. Ideal for cold chain food distribution, bakeries, and fresh produce.',
    rating: 4.92,
    reviewsCount: 650,
    basePrice: 0.58,
    minOrder: 1000,
    fluteOptions: ['F-Flute Ultra Thin', 'E-Flute Micro'],
    ectRating: '29 ECT Food Safe',
    burstStrength: '150 PSI',
    recycledContent: '100% Virgin Food-Contact Paperboard',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
    specifications: {
      material: 'FDA 21 CFR 176.170 Compliant Board',
      maxWeight: '20 lbs (9.1 kg)',
      closure: 'Self-Locking Corner Tabs',
      biodegradable: true,
      customPrintable: true,
    }
  },
  {
    id: 'pakcorp-honeycomb-panel',
    name: 'PakCorp EcoHoneycomb™ Void Cushioning Board',
    category: 'eco-accessories',
    badge: 'Zero Plastic ESG',
    description: '100% recyclable paper honeycomb structure engineered to replace expanded polystyrene (EPS) foam for void filling, edge protection, and pallet pads.',
    rating: 4.96,
    reviewsCount: 410,
    basePrice: 1.15,
    minOrder: 100,
    fluteOptions: ['10mm Hex Core', '25mm Industrial Core'],
    ectRating: 'Compression 95 PSI',
    burstStrength: '450 PSI Structural',
    recycledContent: '100% Post-Consumer Recycled Paper',
    image: 'https://images.unsplash.com/photo-1605701250441-2bfa95839417?auto=format&fit=crop&w=800&q=80',
    specifications: {
      material: '100% Recycled Kraft Cell Matrix',
      maxWeight: 'Pallet Stacking Up To 3,000 lbs',
      closure: 'Structural Cushion Board',
      biodegradable: true,
      customPrintable: false,
    }
  },
  {
    id: 'pakcorp-rigid-luxury',
    name: 'PakCorp Sovereign™ Rigid Executive Packaging',
    category: 'custom-printed',
    badge: 'Executive Series',
    description: 'Solid heavy-density chipboard wrapped with premium soft-touch printed paper. Designed for luxury tech electronics, VIP subscription kits, and executive gifts.',
    rating: 4.99,
    reviewsCount: 880,
    basePrice: 3.20,
    minOrder: 250,
    fluteOptions: ['2.5mm Solid Chipboard', 'Magnetic Closure Board'],
    ectRating: 'Solid Board 1400 GSM',
    burstStrength: '550 PSI Rigid',
    recycledContent: '85% Recycled Rigid Core',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80',
    specifications: {
      material: 'Coated Soft-Touch Art Paper + Solid Chipboard',
      maxWeight: '40 lbs (18.1 kg)',
      closure: 'Concealed Neodymium Magnetic Catch',
      biodegradable: true,
      customPrintable: true,
    }
  }
];

export const CORPORATE_CLIENTS = [
  { name: 'Amazon Global Logistics', logo: 'AMAZON LOGISTICS' },
  { name: 'FedEx Freight', logo: 'FEDEX FREIGHT' },
  { name: 'DHL Supply Chain', logo: 'DHL GLOBAL' },
  { name: 'BMW Group Logistics', logo: 'BMW GROUP' },
  { name: 'Samsung Electronics', logo: 'SAMSUNG LOGISTICS' },
  { name: 'Unilever Supply Chain', logo: 'UNILEVER' },
];

export const MANUFACTURING_STEPS = [
  {
    step: '01',
    title: 'Recycled Fiber Hydrapulping',
    shortDesc: 'Converting 100% post-consumer cardboard waste into raw paper fiber slurry.',
    detail: 'Old corrugated containers (OCC) are hydrated in 50,000-liter pulpers, extracting impurities, staples, and tape to produce ultra-clean recycled paper pulp.',
    icon: 'Recycle'
  },
  {
    step: '02',
    title: 'Continuous High-Speed Corrugation',
    shortDesc: 'Steam heating and grooved rollers shape the paper into structural wavy flutes.',
    detail: 'Our 2.8m continuous corrugator heats paper with steam to 180°C, pressing flutes (A, B, C, E) between linerboards using bio-starch adhesives at 350 m/min.',
    icon: 'Waves'
  },
  {
    step: '03',
    title: '6-Pass Flexographic Eco Printing',
    shortDesc: 'Water-based soy and vegetable inks applied with sub-millimeter precision.',
    detail: 'Custom enterprise artwork is transferred onto outer linerboards using zero-VOC eco-inks at speeds up to 12,000 sheets per hour with inline inspection.',
    icon: 'Printer'
  },
  {
    step: '04',
    title: 'Automated CNC Die-Cutting & Scoring',
    shortDesc: 'Laser-drawn rotary die-cutters cut handles, score fold lines, and shape tabs.',
    detail: 'Automated steel rotary die cutters shape exact box dielines with zero tolerance drift. Edge trimmings are vacuum-recycled back into the pulping circuit.',
    icon: 'Scissors'
  },
  {
    step: '05',
    title: 'Quality Compression & Automated Logistics',
    shortDesc: 'Edge-crush testing (ECT), automated bundle strapping, and zero-emission delivery.',
    detail: 'Batch samples undergo ASTM D642 compression testing to guarantee stack stability before being robotically palletized for global freight dispatch.',
    icon: 'ShieldCheck'
  }
];

export const SUSTAINABILITY_METRICS = {
  treesSavedPerTon: 17,
  waterSavedGallonsPerTon: 7000,
  co2SavedKgPerTon: 1100,
  landfillDivertedPercent: 100
};
