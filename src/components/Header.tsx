import { Flower2, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onOrderClick: () => void;
}

export const Header = ({ onOrderClick }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center" aria-label="Navigation principale">
        <a href="/" className="flex items-center gap-2" aria-label="Hibys - Accueil">
          <Flower2 className="w-8 h-8 text-red-600" aria-hidden="true" />
          <span className="text-3xl font-bold text-red-600">Hibys</span>
        </a>
        <button
          onClick={onOrderClick}
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors flex items-center gap-2"
        >
          <ShoppingCart className="w-5 h-5" aria-hidden="true" />
          Commander
        </button>
      </nav>
    </header>
  );
};