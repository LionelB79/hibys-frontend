import React, { useState } from "react";
import {
  Send,
  Droplet,
  Flower2,
  Heart,
  ShoppingCart,
  Mail,
  Phone,
  MapPin,
  X,
} from "lucide-react";

function App() {
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: 1,
    message: "",
  });
  const [showOrder, setShowOrder] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Commande Hibys - ${orderForm.name}`);
    const body = encodeURIComponent(`
Nouvelle commande Hibys:

Nom: ${orderForm.name}
Email: ${orderForm.email}
Téléphone: ${orderForm.phone}
Quantité: ${orderForm.quantity} bouteille(s)
Message: ${orderForm.message || "Aucun message"}

---
Commande envoyée depuis le site Hibys
    `);

    window.location.href = `mailto:contact@hibys.fr?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowOrder(false);
      setOrderForm({
        name: "",
        email: "",
        phone: "",
        quantity: 1,
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Flower2 className="w-8 h-8 text-red-600" />
            <h1 className="text-3xl font-bold text-red-600">Hibys</h1>
          </div>
          <button
            onClick={() => setShowOrder(true)}
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Commander
          </button>
        </nav>
      </header>

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
            {[
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
            ].map((benefit, idx) => (
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

      <section className="py-20 bg-gradient-to-br from-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-8">
            Retrouvez-nous au marché de Niort
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <p className="font-semibold">Marché de Niort</p>
              <p>Samedi matin</p>
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
            onClick={() => setShowOrder(true)}
            className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2"
          >
            <ShoppingCart className="w-6 h-6" />
            Commander maintenant
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flower2 className="w-6 h-6" />
            <span className="text-xl font-bold">Hibys</span>
          </div>
          <p className="text-gray-400">
            © 2025 Hibys - Infusion d'hibiscus aux vertus ancestrales
          </p>
        </div>
      </footer>

      {showOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowOrder(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Commande envoyée !
                </h3>
                <p className="text-gray-600">
                  Nous vous contacterons très bientôt.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Commander Hibys
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      value={orderForm.name}
                      onChange={(e) =>
                        setOrderForm({ ...orderForm, name: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={orderForm.email}
                      onChange={(e) =>
                        setOrderForm({ ...orderForm, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={orderForm.phone}
                      onChange={(e) =>
                        setOrderForm({ ...orderForm, phone: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité (bouteilles)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={orderForm.quantity}
                      onChange={(e) =>
                        setOrderForm({ ...orderForm, quantity: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message (optionnel)
                    </label>
                    <textarea
                      value={orderForm.message}
                      onChange={(e) =>
                        setOrderForm({ ...orderForm, message: e.target.value })
                      }
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Questions ou demandes spéciales..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer la commande
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Paiement sur place au marché de Niort
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;