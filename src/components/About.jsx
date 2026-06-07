import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart } from 'lucide-react';
import { siteContent } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-200/30 to-nude-200/30 rounded-3xl blur-2xl" />
            <img
              src={siteContent.about.image}
              alt={`Dra Priscila - Especialista em estética com mais de 6 anos de experiência`}
              loading="lazy"
              className="relative rounded-3xl shadow-2xl w-full object-contain max-h-[500px] lg:max-h-[600px]"
            />
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <p className="font-display font-bold text-charcoal-900">6+ Anos</p>
                  <p className="text-sm text-charcoal-600">de Experiência</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gold-600 font-medium tracking-wider uppercase text-sm mb-2">
                Sobre mim
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal-900">
                {siteContent.about.name}
              </h2>
              <p className="text-lg md:text-xl text-charcoal-600 font-serif mt-2">
                {siteContent.about.handle} — {siteContent.about.title}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-charcoal-700 leading-relaxed"
            >
              {siteContent.about.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-display font-bold text-charcoal-900">
                {siteContent.about.subtitle}
              </h3>
              <p className="text-charcoal-700 leading-relaxed">
                {siteContent.about.subdescription}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4"
            >
              {[
                { icon: GraduationCap, title: "Formação", desc: "Especializada" },
                { icon: Heart, title: "Atendimento", desc: "Humanizado" },
                { icon: Award, title: "Qualidade", desc: "Premium" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 bg-nude-50 rounded-2xl hover:bg-nude-100 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <h4 className="font-display font-bold text-charcoal-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-charcoal-600">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
