'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n.routing';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutSection() {
  const t = useTranslations('home.about');

  const values = [
    {
      emoji: '🤍',
      title: t('value1_title'),
      description: t('value1_desc'),
    },
    {
      emoji: '✨',
      title: t('value2_title'),
      description: t('value2_desc'),
    },
    {
      emoji: '🎂',
      title: t('value3_title'),
      description: t('value3_desc'),
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-dulci-beige-50 via-white to-dulci-pink-50 relative overflow-hidden">
      
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dulci-pink-100 rounded-full blur-3xl opacity-30 -z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/hero1.jpg"
                alt="About Dulci"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dulci-dark/40 to-transparent" />
              
              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0, rotate: -12 }}
                whileInView={{ scale: 1, rotate: -12 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl"
              >
                <div className="text-4xl mb-2">🏆</div>
                <p className="text-dulci-dark font-bold text-lg">Est. 2024</p>
                <p className="text-dulci-dark/70 text-sm">Banja Luka</p>
              </motion.div>
            </div>

            {/* Decorative element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-8 -left-8 w-24 h-24 border-4 border-dulci-pink-300 rounded-full opacity-20"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-5xl mb-4"
            >
              🍰
            </motion.span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dulci-dark mb-6">
              {t('title')}
            </h2>

            <p className="text-lg md:text-xl text-dulci-dark/70 mb-6 leading-relaxed">
              {t('paragraph1')}
            </p>

            <p className="text-lg md:text-xl text-dulci-dark/70 mb-8 leading-relaxed">
              {t('paragraph2')}
            </p>

            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-dulci-pink-400 to-dulci-pink-300 text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:shadow-pink-300/50 transition-all inline-flex items-center gap-3"
              >
                {t('cta')}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-dulci-dark mb-4">
            {t('values_title')}
          </h3>
          <p className="text-lg text-dulci-dark/70 max-w-2xl mx-auto">
            {t('values_subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all text-center border border-dulci-beige-200"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                className="text-6xl mb-6"
              >
                {value.emoji}
              </motion.div>

              <h4 className="text-2xl font-bold text-dulci-dark mb-4">
                {value.title}
              </h4>

              <p className="text-dulci-dark/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
