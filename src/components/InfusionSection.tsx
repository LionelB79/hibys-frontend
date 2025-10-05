import React from 'react';
import { Droplet } from 'lucide-react';

export const InfusionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Droplet className="w-12 h-12 text-red-600" />
              <h3 className="text-4xl font-bold text-gray-800">L'infusion santé</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Hibys est bien plus qu'une simple boisson rafraîchissante. Riche en antioxydants naturels et en vitamine C, 
              cette infusion protège vos cellules du vieillissement et booste votre système immunitaire. Son action diurétique 
              favorise l'élimination des toxines tandis que ses propriétés anti-inflammatoires apaisent votre organisme.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Consommée depuis des millénaires en Afrique pour ses vertus médicinales, l'hibiscus aide à réguler la tension artérielle, 
              facilite la digestion et contribue à maintenir un taux de cholestérol sain. Un véritable élixir de jouvence à portée de main.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-red-400 to-pink-600 rounded-3xl shadow-2xl flex items-center justify-center">
              <Droplet className="w-32 h-32 text-white opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};