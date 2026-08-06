import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030305] text-white pt-16 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12 sm:mb-16">
          {/* Бренд */}
          <div className="sm:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight">
              <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="AlfaStudio Logo" className="w-8 h-8 sm:w-9 sm:h-9" />
              <span className="text-white">AlfaStudio</span>
            </div>
            <p className="text-zinc-500 text-xs max-w-sm leading-relaxed">
              Индивидуальное веб-производство, высокотехнологичный digital-маркетинг и премиальный UI/UX дизайн для лидеров рынка.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <div className="text-xs font-mono uppercase text-zinc-400 mb-3 sm:mb-4 font-bold">Навигация</div>
            <ul className="space-y-2 text-xs text-zinc-500 font-medium">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Главная</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">О нас</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Услуги</a></li>
              <li><a href="#works" className="hover:text-amber-400 transition-colors">Кейсы</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Калькулятор</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Тарифы</a></li>
            </ul>
          </div>

          {/* Документы */}
          <div>
            <div className="text-xs font-mono uppercase text-zinc-400 mb-3 sm:mb-4 font-bold">Документы</div>
            <ul className="space-y-2 text-xs text-zinc-500 font-medium">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Пользовательское соглашение</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Файлы Cookie</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">SLA Соглашение</a></li>
            </ul>
          </div>

          {/* Соцсети */}
          <div>
            <div className="text-xs font-mono uppercase text-zinc-400 mb-3 sm:mb-4 font-bold">Мы в сети</div>
            <ul className="space-y-2 text-xs text-zinc-500 font-medium">
              <li><a href="https://t.me/swidl" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Behance</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Крупный логотип внизу */}
        <div className="border-t border-white/5 pt-8 sm:pt-12 pb-6 flex flex-row items-center justify-between gap-4">
          <div className="text-5xl sm:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/0 tracking-tighter uppercase select-none font-sans">
            ALFA
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 hover:bg-amber-400 hover:text-black text-white border border-white/10 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg flex-shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs text-zinc-600 border-t border-white/5 pt-6 font-mono text-center sm:text-left">
          <div>© {new Date().getFullYear()} AlfaStudio Web Production Agency. Все права защищены.</div>
          <div>Разработано в стиле темного минимализма</div>
        </div>
      </div>
    </footer>
  );
}
