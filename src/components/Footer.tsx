import { Flower2 } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flower2 className="w-6 h-6" aria-hidden="true" />
          <span className="text-xl font-bold">Hibys</span>
        </div>
        <p className="text-gray-400">
          © {currentYear} Hibys - Infusion d'hibiscus aux vertus ancestrales
        </p>
      </div>
    </footer>
  );
};
