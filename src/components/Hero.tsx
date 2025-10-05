import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-pink-500 to-red-700 text-white py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Hibys, votre allié bien-être
        </h2>
        <p className="text-2xl md:text-3xl mb-4 font-light">
          Une infusion aux mille vertus pour votre santé
        </p>
        <p className="text-xl md:text-2xl mb-8 italic">
          Prenez soin de vous naturellement, chaque jour
        </p>
        <div className="space-y-2 text-lg md:text-xl">
          <p>Protégez votre cœur et renforcez votre immunité</p>
          <p>Découvrez les bienfaits ancestraux de l'Hibiscus Sabdariffa</p>
        </div>
        <p className="text-3xl md:text-4xl font-bold mt-12">
          Savourez… Rayonnez
        </p>
      </div>
    </section>
  );
};