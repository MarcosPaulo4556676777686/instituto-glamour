import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5511998282667"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
    >
      <motion.div
        animate={{
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 4
        }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.div>
      
      {/* Pulse effect */}
      <motion.span
        animate={{
          scale: [1, 1.4, 1],
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="absolute inset-0 bg-green-500 rounded-full"
      />
    </motion.a>
  );
}
