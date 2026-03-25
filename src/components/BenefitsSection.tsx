import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import type { Benefit } from '../types';

const benefits: (Benefit & { id: string })[] = [
  {
    id: 'cardio',
    title: "Protection cardiovasculaire",
    icon: "heart",
    desc: "Régule la tension artérielle et protège le coeur"
  },
  {
    id: 'antioxidant',
    title: "Puissant antioxydant",
    icon: "shield",
    desc: "Lutte contre le vieillissement cellulaire"
  },
  {
    id: 'immunity',
    title: "Renforce l'immunité",
    icon: "muscle",
    desc: "Riche en vitamine C, booste vos défenses naturelles"
  },
  {
    id: 'detox',
    title: "Action détoxifiante",
    icon: "sparkles",
    desc: "Diurétique et drainant, élimine les toxines"
  },
];

const iconMap: Record<string, string> = {
  heart: "❤️",
  shield: "🛡️",
  muscle: "💪",
  sparkles: "✨",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="benefits-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-12 h-12 text-red-600" aria-hidden="true" />
            </motion.div>
            <h3 id="benefits-title" className="text-4xl font-bold text-gray-800">
              Des bienfaits scientifiquement prouvés
            </h3>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            De nombreuses études confirment les vertus exceptionnelles de l'Hibiscus Sabdariffa pour votre santé :
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit) => (
            <motion.article
              key={benefit.id}
              className="bg-red-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow"
              variants={cardVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="text-5xl mb-4"
                aria-hidden="true"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
              >
                {iconMap[benefit.icon]}
              </motion.div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h4>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-red-100 to-pink-100 rounded-3xl p-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            L'hibiscus agit aussi sur :
          </h4>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-semibold text-red-700">Digestion</p>
              <p className="text-sm text-gray-700">Facilite le transit et apaise les troubles digestifs</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-semibold text-red-700">Cholestérol</p>
              <p className="text-sm text-gray-700">Aide à maintenir un taux sain de lipides sanguins</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-semibold text-red-700">Peau et cheveux</p>
              <p className="text-sm text-gray-700">Hydrate, régénère et fortifie naturellement</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
