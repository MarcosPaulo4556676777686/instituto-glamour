import { motion } from 'framer-motion';
import { siteContent } from '../data/content';

export default function Results() {
  return (
    <section id="testimonials" className="py-20 md:py-24 lg:py-32 bg-nude-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal-900 mb-4">
            {siteContent.results.title}
          </h2>
          <p className="text-lg md:text-xl text-charcoal-700 font-serif max-w-3xl mx-auto">
            {siteContent.results.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {siteContent.results.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white p-2"
            >
              <img
                src={image}
                alt={`Resultado de tratamento estético ${index + 1} - Instituto Glamour`}
                loading="lazy"
                className="w-full h-64 md:h-80 object-contain transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://wa.me/5511998282667"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gold-600 text-white rounded-lg font-medium hover:bg-gold-700 transition-colors duration-300 shadow-lg shadow-gold-600/30"
          >
            Ver Mais Resultados
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
