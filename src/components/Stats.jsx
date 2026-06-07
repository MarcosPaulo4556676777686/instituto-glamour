import { motion } from 'framer-motion';
import { Check, Users, Award } from 'lucide-react';
import { siteContent } from '../data/content';

const iconMap = {
  check: Check,
  users: Users,
  award: Award
};

export default function Stats() {
  return (
    <section id="benefits" className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Números que falam
          </h2>
          <p className="text-lg md:text-xl text-charcoal-300 font-serif">
            Comprovado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {siteContent.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 hover:border-gold-500/50 transition-colors duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gold-500/20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-gold-400" />
                </div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-gold-400 mb-3 md:mb-4 text-center"
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm md:text-base text-charcoal-300 text-center font-serif">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
