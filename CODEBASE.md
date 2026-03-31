# Hibys - Code Source Complet

## Structure du projet

```
hibys-frontend/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   ├── verre.webp
│   └── fleurs.jpg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── vite-env.d.ts
    ├── types/
    │   └── index.ts
    └── components/
        ├── Header.tsx
        ├── Hero.tsx
        ├── InfusionSection.tsx
        ├── FlowerSection.tsx
        ├── BenefitsSection.tsx
        ├── ContactSection.tsx
        ├── Footer.tsx
        └── OrderModal.tsx
```

---

## Configuration

### index.html

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- SEO -->
    <title>Hibys - Infusion d'hibiscus artisanale | Boisson bien-être naturelle</title>
    <meta name="description" content="Hibys, infusion artisanale d'Hibiscus Sabdariffa du Burkina Faso. Boisson naturelle aux multiples bienfaits : antioxydants, vitamine C, protection cardiovasculaire. Disponible au marché de Niort." />
    <meta name="keywords" content="hibiscus, infusion, boisson naturelle, bien-être, antioxydants, karkadé, Niort, artisanal" />
    <meta name="author" content="Hibys" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://hibys.fr/" />
    <meta property="og:title" content="Hibys - Infusion d'hibiscus artisanale" />
    <meta property="og:description" content="Découvrez Hibys, une infusion naturelle d'Hibiscus Sabdariffa aux mille vertus pour votre santé." />
    <meta property="og:image" content="/og-image.jpg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://hibys.fr/" />
    <meta property="twitter:title" content="Hibys - Infusion d'hibiscus artisanale" />
    <meta property="twitter:description" content="Découvrez Hibys, une infusion naturelle d'Hibiscus Sabdariffa aux mille vertus pour votre santé." />
    <meta property="twitter:image" content="/og-image.jpg" />

    <!-- Theme color -->
    <meta name="theme-color" content="#DC2626" />

    <!-- Canonical -->
    <link rel="canonical" href="https://hibys.fr/" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### package.json

```json
{
  "name": "hibys-frontend",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  },
  "dependencies": {
    "framer-motion": "^12.38.0",
    "lucide-react": "^0.544.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.17.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.18.2",
    "vite": "^6.0.5"
  }
}
```

### vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
  },
})
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

### tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hibiscus: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      }
    },
  },
  plugins: [],
}
```

### postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## Source Code

### src/main.tsx

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### src/App.tsx

```tsx
import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfusionSection } from './components/InfusionSection';
import { FlowerSection } from './components/FlowerSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';

function App() {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header onOrderClick={() => setShowOrder(true)} />
      <Hero />
      <InfusionSection />
      <FlowerSection />
      <BenefitsSection />
      <ContactSection onOrderClick={() => setShowOrder(true)} />
      <Footer />
      <OrderModal isOpen={showOrder} onClose={() => setShowOrder(false)} />
    </div>
  );
}

export default App;
```

### src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### src/vite-env.d.ts

```typescript
/// <reference types="vite/client" />
```

### src/types/index.ts

```typescript
export interface OrderForm {
  name: string;
  email: string;
  phone: string;
  quantity: number;
  message: string;
}

export interface Benefit {
  title: string;
  icon: string;
  desc: string;
}
```

---

## Components

### src/components/Header.tsx

```tsx
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
```

### src/components/Hero.tsx

```tsx
import { motion } from 'framer-motion';

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
        <motion.div
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
        <motion.div
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

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          id="hero-title"
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Hibys, votre allié bien-être
        </motion.h2>

        <motion.p
          className="text-2xl md:text-3xl mb-4 font-light"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Une infusion aux mille vertus pour votre santé
        </motion.p>

        <motion.p
          className="text-xl md:text-2xl mb-8 italic"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Prenez soin de vous naturellement, chaque jour
        </motion.p>

        <motion.div
          className="space-y-2 text-lg md:text-xl"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <p>Protégez votre coeur et renforcez votre immunité</p>
          <p>Découvrez les bienfaits ancestraux de l'Hibiscus Sabdariffa</p>
        </motion.div>

        <motion.p
          className="text-3xl md:text-4xl font-bold mt-12"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Savourez... Rayonnez
        </motion.p>
      </motion.div>
    </section>
  );
};
```

### src/components/InfusionSection.tsx

```tsx
import { motion } from 'framer-motion';

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
          <motion.div
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
          </motion.div>
          <motion.div
            className="relative"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <motion.img
              src="/verre.webp"
              alt="Verre d'infusion Hibys à base d'hibiscus"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
```

### src/components/FlowerSection.tsx

```tsx
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
```

### src/components/BenefitsSection.tsx

```tsx
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
```

### src/components/ContactSection.tsx

```tsx
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ShoppingCart } from 'lucide-react';

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
        <motion.h3
          id="contact-title"
          className="text-4xl font-bold mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Retrouvez-nous au marché de Niort
        </motion.h3>

        <motion.address
          className="grid md:grid-cols-3 gap-8 mb-12 not-italic"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="flex flex-col items-center"
            variants={contactItemVariants}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="w-8 h-8 mb-3" aria-hidden="true" />
            </motion.div>
            <p className="font-semibold">Marché de Niort</p>
            <p>Dimanche matin</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={contactItemVariants}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-8 h-8 mb-3" aria-hidden="true" />
            </motion.div>
            <p className="font-semibold">Email</p>
            <a href="mailto:contact@hibys.fr" className="hover:underline">contact@hibys.fr</a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={contactItemVariants}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-8 h-8 mb-3" aria-hidden="true" />
            </motion.div>
            <p className="font-semibold">Téléphone</p>
            <a href="tel:+33600000000" className="hover:underline">06 XX XX XX XX</a>
          </motion.div>
        </motion.address>

        <motion.button
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
        </motion.button>
      </div>
    </section>
  );
};
```

### src/components/Footer.tsx

```tsx
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
```

### src/components/OrderModal.tsx

```tsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { Send, X } from 'lucide-react';
import type { OrderForm } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  quantity?: string;
}

const initialFormState: OrderForm = {
  name: '',
  email: '',
  phone: '',
  quantity: 1,
  message: '',
};

export const OrderModal = ({ isOpen, onClose }: OrderModalProps) => {
  const [orderForm, setOrderForm] = useState<OrderForm>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!orderForm.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!orderForm.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(orderForm.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    if (!orderForm.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!/^[\d\s+()-]{10,}$/.test(orderForm.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Le numéro de téléphone n\'est pas valide';
    }

    if (!orderForm.quantity || orderForm.quantity < 1) {
      newErrors.quantity = 'La quantité doit être au moins 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const subject = encodeURIComponent(`Commande Hibys - ${orderForm.name}`);
    const body = encodeURIComponent(`
Nouvelle commande Hibys:

Nom: ${orderForm.name}
Email: ${orderForm.email}
Téléphone: ${orderForm.phone}
Quantité: ${orderForm.quantity} bouteille(s)
Message: ${orderForm.message || 'Aucun message'}

---
Commande envoyée depuis le site Hibys
    `);

    window.location.href = `mailto:contact@hibys.fr?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setOrderForm(initialFormState);
      setErrors({});
    }, 3000);
  };

  const handleClose = useCallback(() => {
    onClose();
    setOrderForm(initialFormState);
    setErrors({});
    setSubmitted(false);
  }, [onClose]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleClose]);

  // Focus trap and initial focus
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    const handleTabKey = (e: KeyboardEvent) => {
      if (!isOpen || e.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsed = parseInt(value, 10);
    setOrderForm({
      ...orderForm,
      quantity: isNaN(parsed) ? 1 : Math.max(1, parsed)
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer la fenêtre de commande"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-green-600" aria-hidden="true" />
            </div>
            <h3 id="modal-title" className="text-2xl font-bold text-gray-800 mb-2">
              Commande envoyée !
            </h3>
            <p className="text-gray-600">
              Nous vous contacterons très bientôt.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h3 id="modal-title" className="text-2xl font-bold text-gray-800 mb-6">
              Commander Hibys
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="name"
                  type="text"
                  required
                  value={orderForm.name}
                  onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Votre nom"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={orderForm.email}
                  onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="votre@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={orderForm.phone}
                  onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="06 XX XX XX XX"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantité (bouteilles) <span className="text-red-500">*</span>
                </label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  required
                  value={orderForm.quantity}
                  onChange={handleQuantityChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
                    errors.quantity ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={!!errors.quantity}
                  aria-describedby={errors.quantity ? 'quantity-error' : undefined}
                />
                {errors.quantity && (
                  <p id="quantity-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.quantity}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  value={orderForm.message}
                  onChange={(e) => setOrderForm({ ...orderForm, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="Questions ou demandes spéciales..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" aria-hidden="true" />
                Envoyer la commande
              </button>

              <p className="text-sm text-gray-500 text-center">
                Paiement sur place au marché de Niort
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
```

---

## Assets (public/)

- `favicon.svg` - Logo SVG hibiscus
- `verre.webp` - Photo du verre d'infusion
- `fleurs.jpg` - Photo des fleurs d'hibiscus
