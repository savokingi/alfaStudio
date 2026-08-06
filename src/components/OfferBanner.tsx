import { motion } from 'framer-motion';
import { ArrowUpRight, Gift } from 'lucide-react';

export default function OfferBanner() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-12 relative bg-[#050508]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-6 sm:p-10 md:p-16 rounded-3xl relative overflow-hidden bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-purple-500/20 border border-amber-500/30 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8"
        >
          {/* Заднее размытие */}
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-amber-500/30 blur-3xl pointer-events-none rounded-full" />

          <div className="max-w-xl space-y-3 sm:space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5" />
              <span>Эксклюзивное предложение</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ ДЛЯ НОВЫХ КЛИЕНТОВ
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Получите скидку 15% на разработку высокопроизводительного веб-продукта при заключении договора в этом месяце.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 cursor-pointer"
            >
              <span>Получить предложение</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
