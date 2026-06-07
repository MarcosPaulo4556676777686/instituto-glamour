import { motion } from 'framer-motion';
import { siteContent } from '../data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-nude-100 via-white to-nude-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal-900 mb-4">
            Depoimentos de Alunos
          </h2>
          <p className="text-lg md:text-xl text-charcoal-700 font-serif max-w-3xl mx-auto">
            Experiências reais de quem transformou sua carreira conosco
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteContent.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-charcoal-100"
            >
              <img
                src={testimonial.image}
                alt={`Depoimento ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
