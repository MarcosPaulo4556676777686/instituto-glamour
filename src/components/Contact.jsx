import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Instagram, Linkedin, Twitter } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal-900 mb-4">
            {siteContent.contact.title}
          </h2>
          <p className="text-lg md:text-xl text-charcoal-700 font-serif max-w-3xl mx-auto">
            {siteContent.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start gap-4 p-4 md:p-6 bg-nude-50 rounded-2xl hover:bg-nude-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-charcoal-900 mb-1">Endereço</h3>
                  <p className="text-charcoal-700 text-sm md:text-base">{siteContent.contact.address}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-4 p-4 md:p-6 bg-nude-50 rounded-2xl hover:bg-nude-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-charcoal-900 mb-1">Telefone</h3>
                  <a href={`tel:${siteContent.contact.phone}`} className="text-charcoal-700 hover:text-gold-600 transition-colors text-sm md:text-base">
                    {siteContent.contact.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-4 p-4 md:p-6 bg-nude-50 rounded-2xl hover:bg-nude-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-charcoal-900 mb-1">Horário de Atendimento</h3>
                  <p className="text-charcoal-700 whitespace-pre-line text-sm md:text-base">{siteContent.contact.hours}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4"
            >
              <a
                href={siteContent.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-charcoal-900 rounded-full flex items-center justify-center text-white hover:bg-gold-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteContent.contact.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-charcoal-900 rounded-full flex items-center justify-center text-white hover:bg-gold-600 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={siteContent.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-charcoal-900 rounded-full flex items-center justify-center text-white hover:bg-gold-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-nude-400/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-charcoal-900 to-charcoal-800 rounded-3xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                {siteContent.contact.cta.title}
              </h3>
              <p className="text-charcoal-300 mb-8 font-serif">
                {siteContent.contact.cta.description}
              </p>
              
              <motion.a
                href={`https://wa.me/${siteContent.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-gold-600 text-white rounded-lg font-medium hover:bg-gold-700 transition-colors duration-300 shadow-lg shadow-gold-600/30"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                {siteContent.contact.cta.button}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
