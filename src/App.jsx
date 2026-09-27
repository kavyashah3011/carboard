import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SampleBasketDrawer from './components/SampleBasketDrawer';
import Toast from './components/Toast';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ConfiguratorPage from './pages/ConfiguratorPage';
import SustainabilityPage from './pages/SustainabilityPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [samples, setSamples] = useState([]);
  const [isSampleDrawerOpen, setIsSampleDrawerOpen] = useState(false);
  
  const [toast, setToast] = useState({ message: '', isVisible: false });

  const showToast = (message) => {
    setToast({ message, isVisible: true });
    setTimeout(() => {
      setToast({ message: '', isVisible: false });
    }, 3000);
  };

  const handleAddSample = (product) => {
    setSamples((prev) => [...prev, product]);
    showToast(`Added ${product.name} to Sample Kit!`);
    setIsSampleDrawerOpen(true);
  };

  const handleRemoveSample = (index) => {
    setSamples((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearSamples = () => {
    setSamples([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-industrial-900 selection:bg-kraft-300 selection:text-kraft-900 font-sans">
      
      {/* Top Glass Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sampleCount={samples.length}
        onOpenSampleDrawer={() => setIsSampleDrawerOpen(true)}
      />

      {/* Main Multipage View Container */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'home' && (
              <HomePage setActiveTab={setActiveTab} onAddSample={handleAddSample} />
            )}

            {activeTab === 'products' && (
              <ProductsPage setActiveTab={setActiveTab} onAddSample={handleAddSample} />
            )}

            {activeTab === 'configurator' && (
              <ConfiguratorPage onAddSample={handleAddSample} showToast={showToast} />
            )}

            {activeTab === 'sustainability' && (
              <SustainabilityPage setActiveTab={setActiveTab} />
            )}

            {activeTab === 'about' && (
              <AboutPage setActiveTab={setActiveTab} />
            )}

            {activeTab === 'contact' && (
              <ContactPage showToast={showToast} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Sample Kit Slide Drawer */}
      <SampleBasketDrawer
        isOpen={isSampleDrawerOpen}
        onClose={() => setIsSampleDrawerOpen(false)}
        samples={samples}
        onRemoveSample={handleRemoveSample}
        onClearSamples={handleClearSamples}
      />

      {/* Floating Toast Notification */}
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={() => setToast({ message: '', isVisible: false })}
      />

    </div>
  );
}
