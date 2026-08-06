import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Главная', id: 'hero' },
    { label: 'О студии', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Кейсы', id: 'works' },
    { label: 'Калькулятор', id: 'calculator' },
    { label: 'Стоимость', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-5 py-2.5 rounded-full transition-all duration-500 border ${
            scrolled
              ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.9)] scale-[0.98]'
              : 'bg-white/[0.04] backdrop-blur-md border-white/10 shadow-lg'
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="AlfaStudio Logo" className="w-8 h-8 sm:w-9 sm:h-9" />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-amber-200 bg-clip-text text-transparent font-extrabold tracking-wider text-sm sm:text-base">
              AlfaStudio
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 text-xs font-medium text-zinc-400">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center gap-3">
            

            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-extrabold text-xs hover:bg-amber-400 transition-all duration-300 hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            >
              <span>Начать проект</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/10 text-white border border-white/15 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050508]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-28 lg:hidden pointer-events-auto"
          >
            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400/90 mb-2">
                // НАВИГАЦИЯ
              </span>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollTo(item.id)}
                  className="text-2xl font-black text-white text-left uppercase tracking-tight hover:text-amber-400 transition-colors flex items-center justify-between py-2 border-b border-white/5 cursor-pointer"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-600" />
                </motion.button>
              ))}
            </div>

            {/* Mobile Drawer Bottom Info & CTA */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>3 свободных слота на разработку в этом месяце</span>
              </div>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-pointer"
              >
                <span>Начать проект</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
