import { m } from 'framer-motion';
import { Mail, MapPin, ShoppingCart } from 'lucide-react';

interface ContactSectionProps {
  onOrderClick: () => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ContactSection = ({ onOrderClick }: ContactSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-pink-600 text-white" aria-labelledby="contact-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <m.h3
          id="contact-title"
          className="text-4xl font-bold mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Retrouvez-nous au marché de Niort
        </m.h3>

        <m.address
          className="grid md:grid-cols-2 gap-8 mb-12 not-italic max-w-md mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <m.div
            className="flex flex-col items-center"
            variants={contactItemVariants}
            transition={{ duration: 0.5 }}
          >
            <m.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="w-8 h-8 mb-3" aria-hidden="true" />
            </m.div>
            <p className="font-semibold">Marché de Niort</p>
            <p>Dimanche matin</p>
          </m.div>

          <m.div
            className="flex flex-col items-center"
            variants={contactItemVariants}
            transition={{ duration: 0.5 }}
          >
            <m.div
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-8 h-8 mb-3" aria-hidden="true" />
            </m.div>
            <p className="font-semibold">Email</p>
            <a href="mailto:hibys.fr@gmail.com" className="hover:underline">hibys.fr@gmail.com</a>
          </m.div>
        </m.address>

        <m.button
          onClick={onOrderClick}
          className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCart className="w-6 h-6" aria-hidden="true" />
          Commander maintenant
        </m.button>
      </div>
    </section>
  );
};
