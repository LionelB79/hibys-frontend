import { m } from 'framer-motion';

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const InfusionSection = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="infusion-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <m.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 id="infusion-title" className="text-4xl font-bold text-gray-800 mb-6">L'infusion santé</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Hibys est bien plus qu'une simple boisson rafraîchissante. Riche en antioxydants naturels et en vitamine C,
              cette infusion protège vos cellules du vieillissement et booste votre système immunitaire. Son action diurétique
              favorise l'élimination des toxines tandis que ses propriétés anti-inflammatoires apaisent votre organisme.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Consommée depuis des millénaires en Afrique pour ses vertus médicinales, l'hibiscus aide à réguler la tension artérielle,
              facilite la digestion et contribue à maintenir un taux de cholestérol sain. Un véritable élixir de jouvence à portée de main.
            </p>
          </m.div>
          <m.div
            className="relative"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <m.img
              src="/verre.webp"
              alt="Verre d'infusion Hibys à base d'hibiscus"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </m.div>
        </div>
      </div>
    </section>
  );
};
