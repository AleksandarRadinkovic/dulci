'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n.routing';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const t = useTranslations('home.hero');
  const [isLoaded, setIsLoaded] = useState(false);

  // Mouse tracking za parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dulci-beige-50 via-white to-dulci-beige-100 pb-20">
      
      {/* Animated gradient blobs - MANJE ROZE */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-dulci-beige-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-dulci-pink-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* 3D Floating emoji elements sa parallax - POBOLJŠANO ZA MOBILE */}
      <motion.div style={{ x, y }} className="absolute inset-0 pointer-events-none z-[1]">
        {[
          { emoji: '🍰', x: '10%', y: '15%', scale: 1.5, delay: 0, rotate: -15 },
          { emoji: '🧁', x: '85%', y: '20%', scale: 1.2, delay: 0.2, rotate: 15 },
          { emoji: '🍪', x: '15%', y: '70%', scale: 1.3, delay: 0.4, rotate: -10 },
          { emoji: '🍩', x: '80%', y: '75%', scale: 1.4, delay: 0.6, rotate: 20 },
          { emoji: '🍫', x: '50%', y: '10%', scale: 1.1, delay: 0.8, rotate: 0 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: item.rotate }}
            animate={{ 
              opacity: isLoaded ? 0.12 : 0, // ← POVEĆANA SA 0.06 NA 0.12 (vidljivije na mobilnom)
              scale: isLoaded ? item.scale : 0,
              rotate: [item.rotate, item.rotate + 10, item.rotate],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              delay: item.delay,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            style={{
              position: 'absolute',
              left: item.x,
              top: item.y,
              fontSize: '6rem', // ← SMANJENA SA 8rem NA 6rem (bolje za mobile)
            }}
            className="md:text-[8rem]" // ← Na desktop-u 8rem
          >
            {item.emoji}
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full mb-8 shadow-xl border border-dulci-beige-200"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl"
            >
              🍰
            </motion.span>
            <span className="text-dulci-dark font-semibold text-sm md:text-base">Est. 2024 - Banja Luka</span>
          </motion.div>

          {/* Main heading - SPORIJI GRADIENT */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-dulci-dark mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.span
              initial={{ backgroundPosition: '0%' }}
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ 
                duration: 10, // ← POVEĆANA SA 5 NA 10 sekundi (SPORIJE!)
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #0e0e0e, #d4a5a5, #0e0e0e)', // ← Ostaje isto
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('title')}
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-2xl lg:text-3xl text-dulci-dark/70 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {t('subtitle')}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex gap-4 md:gap-6 justify-center flex-wrap mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link href="/products">
              <motion.button
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: '0 25px 50px -12px rgba(212, 165, 165, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-dulci-pink-400 to-dulci-pink-300 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg lg:text-xl font-bold transition-all shadow-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center gap-2 md:gap-3">
                  {t('cta_primary')}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>
            
            <Link href="/about">
              <motion.button
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 backdrop-blur-sm text-dulci-dark px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg lg:text-xl font-bold transition-all shadow-2xl border-2 border-dulci-beige-300"
              >
                {t('cta_secondary')}
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-center mb-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-flex flex-col items-center gap-2"
            >
              <span className="text-dulci-dark/50 font-medium text-sm">{t('scroll')}</span>
              <span className="text-2xl text-dulci-dark/40">↓</span>
            </motion.div>
          </motion.div>

          {/* Stats cards - MANJE ROZE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="grid grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: '500+', label: t('stat_customers'), emoji: '👥', color: 'from-dulci-beige-200 to-dulci-pink-200' },
              { number: '50+', label: t('stat_products'), emoji: '🍰', color: 'from-dulci-pink-200 to-dulci-beige-200' },
              { number: '100%', label: t('stat_handmade'), emoji: '✨', color: 'from-dulci-beige-100 to-dulci-beige-200' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: '0 20px 40px -10px rgba(212, 165, 165, 0.4)',
                }}
                className={`bg-gradient-to-br ${stat.color} rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl border border-white/50 backdrop-blur-sm cursor-pointer`}
              >
                <motion.div 
                  className="text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.emoji}
                </motion.div>
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-dulci-dark mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-[10px] md:text-xs lg:text-sm xl:text-base text-dulci-dark/80 font-semibold leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
