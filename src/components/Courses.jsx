import { motion } from 'framer-motion';
import { Clock, CheckCircle, Crown, ChevronRight } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Courses() {
  return (
    <section id="courses" className="py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal-900 mb-4">
            Nossos Cursos
          </h2>
          <p className="text-lg md:text-xl text-charcoal-700 font-serif max-w-3xl mx-auto">
            Formações especializadas em Harmonização Facial e Estética Avançada com prática clínica e acompanhamento pós-curso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteContent.courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {course.vip && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gold-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Crown className="w-3 h-3" />
                    VIP
                  </div>
                </div>
              )}

              <div className="bg-white border border-charcoal-100 rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-gold-600" />
                  <span className="text-sm text-charcoal-600 font-medium">{course.duration}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-charcoal-900 mb-3 leading-tight">
                  {course.title}
                </h3>

                <p className="text-charcoal-700 mb-6 font-serif text-sm md:text-base">
                  {course.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-display font-bold text-charcoal-900 mb-2 text-sm">
                      O que você aprende:
                    </h4>
                    <ul className="space-y-1">
                      {course.learnings.slice(0, 4).map((learning, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-charcoal-600">
                          <CheckCircle className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                          <span>{learning}</span>
                        </li>
                      ))}
                      {course.learnings.length > 4 && (
                        <li className="text-sm text-gold-600 font-medium">
                          +{course.learnings.length - 4} outros tópicos
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-charcoal-900 mb-2 text-sm">
                      Diferenciais:
                    </h4>
                    <ul className="space-y-1">
                      {course.differentials.map((diff, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-charcoal-600">
                          <CheckCircle className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                          <span>{diff}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/5511998282667"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gold-600 text-white rounded-xl font-medium hover:bg-gold-700 transition-colors duration-300 shadow-lg shadow-gold-600/20"
                >
                  Saiba mais
                  <ChevronRight className="ml-2 w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
