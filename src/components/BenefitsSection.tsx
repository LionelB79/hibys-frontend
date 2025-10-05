import React from 'react';
import { Heart } from 'lucide-react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  { 
    title: "Protection cardiovasculaire", 
    icon: "❤️",
    desc: "Régule la tension artérielle et protège le cœur"
  },
  { 
    title: "Puissant antioxydant", 
    icon: "🛡️",
    desc: "Lutte contre le vieillissement cellulaire"
  },
  { 
    title: "Renforce l'immunité", 
    icon: "💪",
    desc: "Riche en vitamine C, booste vos défenses naturelles"
  },
  { 
    title: "Action détoxifiante", 
    icon: "✨",
    desc: "Diurétique et drainant, élimine les toxines"
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-12 h-12 text-red-600" />
            <h3 className="text-4xl font-bold text-gray-800">
              Des bienfaits scientifiquement prouvés
            </h3>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            De nombreuses études confirment les vertus exceptionnelles de l'Hibiscus Sabdariffa pour votre santé :
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-red-50 p-6 rounded-2xl text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h4>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-100 to-pink-100 rounded-3xl p-8">
          <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            L'hibiscus agit aussi sur :
          </h4>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-semibold text-red-700">Digestion</p>
              <p className="text-sm text-gray-700">Facilite le transit et apaise les troubles digestifs</p>
            </div>
            <div>
              <p className="font-semibold text-red-700">Cholestérol</p>
              <p className="text-sm text-gray-700">Aide à maintenir un taux sain de lipides sanguins</p>
            </div>
            <div>
              <p className="font-semibold text-red-700">Peau et cheveux</p>
              <p className="text-sm text-gray-700">Hydrate, régénère et fortifie naturellement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};