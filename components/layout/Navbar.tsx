'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';


export function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/products', label: t('products') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-dulci-beige-300 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
      {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full shadow-md group-hover:shadow-lg transition-shadow bg-white">
            <Image
              src="/images/logo.jpg"
              alt="Dulci Logo"
              width={56}
              height={56}
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>
          <span className="text-2xl md:text-3xl font-bold text-dulci-dark group-hover:text-dulci-pink-400 transition-colors">
            Dulci
          </span>
        </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-dulci-dark hover:text-dulci-pink-400 transition-colors font-medium text-lg group"
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dulci-pink-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dulci-pink-300 group-hover:w-full transition-all duration-300" />
                )}
              </Link>
            ))}
          </div>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-dulci-dark group-hover:bg-dulci-pink-400 transition-colors"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-dulci-dark group-hover:bg-dulci-pink-400 transition-colors"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-dulci-dark group-hover:bg-dulci-pink-400 transition-colors"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-dulci-beige-300 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                      isActive(link.href)
                        ? 'bg-dulci-pink-100 text-dulci-pink-400'
                        : 'text-dulci-dark hover:bg-dulci-beige-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4 border-t border-dulci-beige-200"
              >
                <LanguageSwitcher />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function LanguageSwitcher() {
  const pathname = usePathname();
  
  // Izvuci trenutni locale i path
  const segments = pathname.split('/').filter(Boolean);
  const currentLocale = segments[0] === 'sr' || segments[0] === 'en' ? segments[0] : 'sr';
  const pathWithoutLocale = '/' + segments.slice(1).join('/');
  
  const switchLocale = (locale: string) => {
    return `/${locale}${pathWithoutLocale}`;
  };

  return (
    <div className="flex items-center gap-2 bg-dulci-beige-50 rounded-full p-1">
      <Link
        href={switchLocale('sr')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          currentLocale === 'sr' 
            ? 'bg-white shadow-md text-dulci-dark' 
            : 'hover:bg-white/50 text-dulci-dark/60'
        }`}
      >
        SR
      </Link>
      <Link
        href={switchLocale('sr')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          currentLocale === 'en' 
            ? 'bg-white shadow-md text-dulci-dark' 
            : 'hover:bg-white/50 text-dulci-dark/60'
        }`}
      >
        EN
      </Link>
    </div>
  );
}

