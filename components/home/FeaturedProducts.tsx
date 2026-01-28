'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n.routing';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function FeaturedProducts() {
  const t = useTranslations('home.featured');

  const products = [
    {
      id: 1,
      name: t('product1_name'),
      description: t('product1_desc'),
      ingredients: t('product1_ingredients'),
      image: '/images/hero/hero1.jpg',
    },
    {
      id: 2,
      name: t('product2_name'),
      description: t('product2_desc'),
      ingredients: t('product2_ingredients'),
      image: '/images/hero/hero2.jpg',
    },
    {
      id: 3,
      name: t('product3_name'),
      description: t('product3_desc'),
      ingredients: t('product3_ingredients'),
      image: '/images/hero/hero3.jpg',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-5xl mb-4"
          >
            🍰
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-dulci-dark mb-4">
            {t('title')}
          </h2>
          
          <p className="text-lg md:text-xl text-dulci-dark/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-dulci-beige-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-dulci-beige-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dulci-dark/0 group-hover:bg-dulci-dark/20 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dulci-dark mb-2 group-hover:text-dulci-pink-400 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-dulci-dark/70 mb-3">
                  {product.description}
                </p>

                {/* Ingredients */}
                <div className="mb-4 p-3 bg-white/50 rounded-xl">
                  <p className="text-sm font-semibold text-dulci-dark/80 mb-1">
                    {t('ingredients_label')}:
                  </p>
                  <p className="text-sm text-dulci-dark/60">
                    {product.ingredients}
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <Link href="/products" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-dulci-pink-300 text-white px-4 py-3 rounded-full font-semibold hover:bg-dulci-pink-400 transition-colors"
                    >
                      {t('learn_more')}
                    </motion.button>
                  </Link>
                  
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white border-2 border-dulci-pink-300 text-dulci-pink-400 px-4 py-3 rounded-full font-semibold hover:bg-dulci-pink-50 transition-colors"
                    >
                      💬
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -12 }}
                whileInView={{ scale: 1, rotate: -12 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                className="absolute top-4 right-4 bg-dulci-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                ⭐ Popular
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-dulci-pink-400 to-dulci-pink-300 text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-pink-300/50 transition-all"
            >
              {t('view_all')} →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
