import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfusionSection } from './components/InfusionSection';
import { FlowerSection } from './components/FlowerSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';

function App() {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header onOrderClick={() => setShowOrder(true)} />
      <Hero />
      <InfusionSection />
      <FlowerSection />
      <BenefitsSection />
      <ContactSection onOrderClick={() => setShowOrder(true)} />
      <Footer />
      <OrderModal isOpen={showOrder} onClose={() => setShowOrder(false)} />
    </div>
  );
}

export default App;