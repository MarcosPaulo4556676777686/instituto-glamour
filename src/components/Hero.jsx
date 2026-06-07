import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-nude-100 via-white to-nude-200" />
      
      {/* Decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-72 h-72 md:w-96 md:h-96 bg-gold-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
        className="absolute bottom-20 left-20 w-64 h-64 md:w-80 md:h-80 bg-nude-300/40 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <img
                src={siteContent.hero.logo}
                alt="Instituto Glamour - Logo Oficial"
                loading="eager"
                className="w-full max-w-2xl mx-auto object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block"
            >
              <span className="text-gold-600 font-medium tracking-wider uppercase text-sm">
                {siteContent.hero.subtitle}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl text-charcoal-700 font-serif leading-relaxed max-w-3xl mx-auto"
            >
              {siteContent.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
            >
              <motion.a
                href="#courses"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-600 text-white rounded-lg font-medium hover:bg-gold-700 transition-colors duration-300 shadow-lg shadow-gold-600/30 focus:outline-none focus:ring-4 focus:ring-gold-300"
              >
                {siteContent.hero.cta.primary}
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://wa.me/5511998282667"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-charcoal-900 text-white rounded-lg font-medium hover:bg-charcoal-800 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-charcoal-300"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                {siteContent.hero.cta.secondary}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
