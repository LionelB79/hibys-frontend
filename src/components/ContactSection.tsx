import React from 'react';
import { Mail, Phone, MapPin, ShoppingCart } from 'lucide-react';

interface ContactSectionProps {
  onOrderClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOrderClick }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-pink-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-4xl font-bold mb-8">
          Retrouvez-nous au marché de Niort
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 mb-3" />
            <p className="font-semibold">Marché de Niort</p>
            <p>Dimanche matin</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 mb-3" />
            <p className="font-semibold">Email</p>
            <p>contact@hibys.fr</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 mb-3" />
            <p className="font-semibold">Téléphone</p>
            <p>06 XX XX XX XX</p>
          </div>
        </div>
        <button
          onClick={onOrderClick}
          className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2"
        >
          <ShoppingCart className="w-6 h-6" />
          Commander maintenant
        </button>
      </div>
    </section>
  );
};