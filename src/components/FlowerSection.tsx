import { motion } from 'framer-motion';

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const FlowerSection = () => {
  return (
    <section className="py-20 bg-red-50" aria-labelledby="flower-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1 relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <motion.img
              src="/fleurs.jpg"
              alt="Fleurs d'Hibiscus Sabdariffa du Burkina Faso"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 id="flower-title" className="text-4xl font-bold text-gray-800 mb-6">Une fleur d'exception</h3>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
