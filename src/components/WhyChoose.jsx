import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Headphones, Award, BookOpen, Users } from 'lucide-react';
import { siteContent } from '../data/content';

const iconMap = {
  'graduation-cap': GraduationCap,
  'calendar': Calendar,
  'headphones': Headphones,
  'award': Award,
  'book-open': BookOpen,
  'users': Users
};

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-nude-100 via-white to-nude-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal-900 mb-4">
            Por que escolher o Instituto Glamour?
          </h2>
          <p className="text-lg md:text-xl text-charcoal-700 font-serif max-w-3xl mx-auto">
            Excelência em formação com acompanhamento personalizado e resultados comprovados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteContent.whyChoose.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-charcoal-100"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-gold-600" />
                </div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold-600 mb-3 text-center"
                >
                  {item.value}
                </motion.div>
                <p className="text-base md:text-lg text-charcoal-700 text-center font-serif">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
