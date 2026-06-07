import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold mb-4">Instituto Glamour</h3>
            <p className="text-charcoal-400 font-serif">
              Transformando carreiras através da educação em estética avançada.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display font-bold mb-4">{siteContent.quickLinks.title}</h4>
            <ul className="space-y-2">
              {siteContent.quickLinks.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-charcoal-400 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-charcoal-400">
              <li>{siteContent.contact.phone}</li>
              <li>{siteContent.contact.address}</li>
              <li className="whitespace-pre-line">{siteContent.contact.hours}</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-charcoal-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-charcoal-400 text-xs md:text-sm">
            {siteContent.footer.copyright}
          </p>
          
          <div className="flex gap-3 md:gap-4">
            <a
              href={siteContent.contact.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 bg-charcoal-800 rounded-full flex items-center justify-center text-charcoal-400 hover:bg-gold-600 hover:text-white transition-colors duration-300"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href={siteContent.contact.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 bg-charcoal-800 rounded-full flex items-center justify-center text-charcoal-400 hover:bg-gold-600 hover:text-white transition-colors duration-300"
            >
              <Twitter className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href={siteContent.contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 bg-charcoal-800 rounded-full flex items-center justify-center text-charcoal-400 hover:bg-gold-600 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </motion.div>

        {/* Developer Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-charcoal-800 pt-4 mt-4 text-center"
        >
          <p className="text-charcoal-500 text-xs">
            Desenvolvido por <span className="text-gold-400 font-semibold">Codelink</span> | 
            <a href="https://www.instagram.com/codelinkbr__/" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-gold-400 transition-colors duration-300 ml-1">@codelinkbr__</a> | 
            <a href="tel:+5527998127274" className="text-charcoal-400 hover:text-gold-400 transition-colors duration-300 ml-1">(27) 99812-7274</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
