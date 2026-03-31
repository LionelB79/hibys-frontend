import { useState, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfusionSection } from './components/InfusionSection';
import { FlowerSection } from './components/FlowerSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MotionProvider } from './components/MotionProvider';

const OrderModal = lazy(() => import('./components/OrderModal').then(m => ({ default: m.OrderModal })));

function App() {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <MotionProvider>
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
        <Header onOrderClick={() => setShowOrder(true)} />
        <Hero />
        <InfusionSection />
        <FlowerSection />
        <BenefitsSection />
        <ContactSection onOrderClick={() => setShowOrder(true)} />
        <Footer />
        {showOrder && (
          <Suspense fallback={<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"><div className="bg-white p-4 rounded-lg">Chargement...</div></div>}>
            <OrderModal isOpen={showOrder} onClose={() => setShowOrder(false)} />
          </Suspense>
        )}
      </div>
    </MotionProvider>
  );
}

export default App;