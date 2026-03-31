import { m } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-pink-500 to-red-700 text-white py-24" aria-labelledby="hero-title">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <m.div
          className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <m.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.12, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <m.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <m.h2
          id="hero-title"
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Hibys, votre allié bien-être
        </m.h2>

        <m.p
          className="text-2xl md:text-3xl mb-4 font-light"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Une infusion aux mille vertus pour votre santé
        </m.p>

        <m.p
          className="text-xl md:text-2xl mb-8 italic"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Prenez soin de vous naturellement, chaque jour
        </m.p>

        <m.div
          className="space-y-2 text-lg md:text-xl"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <p>Protégez votre coeur et renforcez votre immunité</p>
          <p>Découvrez les bienfaits ancestraux de l'Hibiscus Sabdariffa</p>
        </m.div>

        <m.p
          className="text-3xl md:text-4xl font-bold mt-12"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Savourez... Rayonnez
        </m.p>
      </m.div>
    </section>
  );
};
