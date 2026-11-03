'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  products,
  categories,
  SHOW_PRICES,
  formatPrice,
  type Category,
  type Product,
} from '@/lib/products';

const badgeStyles = {
  new: 'bg-dulci-pink-400 text-white',
  vegan: 'bg-emerald-500 text-white',
  bestseller: 'bg-dulci-dark text-white',
  recommended: 'bg-amber-500 text-white',
} as const;

export function ProductCatalog() {
  const t = useTranslations('products');
  const [active, setActive] = useState<Category | 'all'>('all');

  const visible = active === 'all' ? products : products.filter((p) => p.category === active);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-dulci-dark mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-dulci-dark/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['all', ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition-colors ${
                active === cat
                  ? 'bg-dulci-pink-400 text-white shadow-md'
                  : 'bg-dulci-beige-50 text-dulci-dark hover:bg-dulci-pink-100'
              }`}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const t = useTranslations('products');
  const locale = useLocale() as 'sr' | 'en';
  const name = product.name[locale];
  const unavailable = product.available === false;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-dulci-beige-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
    >
      {/* Image – hover shows the cross-section */}
      <div className="relative aspect-square overflow-hidden bg-dulci-beige-100">
        <Image
          src={product.image}
          alt={name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-all duration-500 group-hover:scale-105 ${
            product.imageCut ? 'group-hover:opacity-0' : ''
          } ${unavailable ? 'grayscale-[40%]' : ''}`}
        />
        {product.imageCut && (
          <Image
            src={product.imageCut}
            alt={`${name} – ${t('cross_section')}`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover opacity-0 scale-105 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}

        {/* Badges */}
        {product.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className={`${badgeStyles[badge]} px-3 py-1 rounded-full text-xs font-bold shadow`}
              >
                {t(`badges.${badge}`)}
              </span>
            ))}
          </div>
        )}

        {unavailable && (
          <div className="absolute bottom-3 left-3 right-3 bg-white/90 text-dulci-dark text-center text-sm font-semibold py-2 rounded-full">
            {t('unavailable')}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-dulci-dark/50 mb-1">
          {t(`categories.${product.category}`)}
        </p>
        <h3 className="text-xl font-bold text-dulci-dark group-hover:text-dulci-pink-400 transition-colors">
          {name}
        </h3>
        {SHOW_PRICES && (
          <p className="mt-2 text-dulci-pink-400 font-semibold">
            {formatPrice(product.price)}
          </p>
        )}
      </div>
    </motion.div>
  );
}
