import React from 'react';
import { Flower2 } from 'lucide-react';

export const FlowerSection: React.FC = () => {
  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="w-full h-96 bg-gradient-to-br from-pink-400 to-red-600 rounded-3xl shadow-2xl flex items-center justify-center">
              <Flower2 className="w-32 h-32 text-white opacity-50" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <Flower2 className="w-12 h-12 text-red-600" />
              <h3 className="text-4xl font-bold text-gray-800">Une fleur d'exception</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              L'Hibiscus Sabdariffa, appelé aussi oseille de Guinée ou karkadé, est la seule variété d'hibiscus aux propriétés 
              culinaires et médicinales reconnues. Utilisée depuis plus de 4000 ans, cette plante majestueuse est un trésor 
              de la pharmacopée traditionnelle africaine.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nos fleurs proviennent du Burkina Faso où elles sont cultivées de manière 100% naturelle, sans pesticides ni engrais chimiques. 
              Récoltées à la main dans le respect des coopératives locales, nous sélectionnons uniquement les calices les plus riches 
              en principes actifs pour vous garantir une efficacité optimale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};