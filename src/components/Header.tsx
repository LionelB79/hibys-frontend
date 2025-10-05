import React from 'react';
import { Flower2, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onOrderClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Flower2 className="w-8 h-8 text-red-600" />
          <h1 className="text-3xl font-bold text-red-600">Hibys</h1>
        </div>
        <button
          onClick={onOrderClick}
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition flex items-center gap-2"
        >
          <ShoppingCart className="w-5 h-5" />
          Commander
        </button>
      </nav>
    </header>
  );
};