import { motion } from 'framer-motion';
import { ArrowUpRight, Play,  Zap } from 'lucide-react';

export default function Hero() {

  return (
    <section id="hero" className="relative min-h-screen pt-28 sm:pt-36 pb-16 px-4 sm:px-6 md:px-12 flex flex-col justify-between overflow-hidden subtle-grid">
      {/* Фоновое свечение (Aura Glows) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] amber-glow opacity-50 pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] purple-glow opacity-30 pointer-events-none rounded-full" />

      {/* Центральный контент */}
      <div className="max-w-6xl mx-auto w-full z-10 text-left">


        {/* Главный заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <h1 className="text-4xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight text-white leading-[0.98] uppercase mb-6 sm:mb-8 break-words">
            ALFASTUDIO <br />
            <span className="bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent">
              WEB PRODUCTION
            </span>
          </h1>

          {/* Интерактивная 3D-линза (показывается на больших экранах) */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden lg:block absolute -right-4 top-0 w-36 h-36 rounded-full bg-gradient-to-br from-white/20 via-amber-500/10 to-transparent backdrop-blur-2xl border border-white/20 shadow-[0_0_50px_rgba(255,170,0,0.2)] p-4"
          >
            <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center">
              <Zap className="w-10 h-10 text-amber-300 animate-pulse" />
            </div>
          </motion.div>
        </motion.div>

        {/* Описание и CTA кнопки */}
        <div className="grid md:grid-cols-12 gap-6 sm:gap-8 items-end mt-2 sm:mt-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed font-normal"
          >
            Проектируем и запускаем сложные веб-интерфейсы, интерактивную 3D-графику и кастомные цифровые экосистемы для брендов, стремящихся к технологическому лидерству.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-5 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 md:justify-end"
          >
            <a
              href="#services"
              className="px-6 py-3.5 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105 cursor-pointer"
            >
              <span>Наши услуги</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#works"
              className="px-6 py-3.5 rounded-full glass-panel hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-white/15 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current text-amber-400" />
              <span>Видеопрезентация</span>
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
