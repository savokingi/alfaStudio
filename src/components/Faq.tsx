import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Сколько времени занимает разработка проекта?',
      a: 'Разработка стандартного лендинга или бизнес-сайта занимает от 2 до 3 недель. Масштабные веб-сервисы, сложные e-commerce платформы или кастомные 3D WebGL сцены требуют от 4 до 8 недель.',
    },
    {
      q: 'Вы работаете по готовым шаблонам или создаете дизайн с нуля?',
      a: 'AlfaStudio работает исключительно по индивидуальным решениям. Мы никогда не используем готовые шаблоны. Каждый сайт проектируется с чистого листа в Figma, а кодовая база оптимизируется под конкретные требования и не содержит лишнего мусора.',
    },
    {
      q: 'Какие технологии вы используете в работе?',
      a: 'Наш стек: React, Next.js, Vite, TypeScript, Tailwind CSS, Framer Motion, GSAP, Three.js (WebGL), а также быстрые headless CMS системы (Strapi, Sanity) для удобного администрирования.',
    },
    {
      q: 'Включена ли базовая оптимизация скорости и SEO в стоимость?',
      a: 'Да, обязательно. Каждый выпускаемый нами проект проходит технический SEO-аудит, ручную минификацию ассетов и тонкую настройку серверов для достижения 95-100 баллов в Google Lighthouse Speed.',
    },
    {
      q: 'Что требуется от клиента для старта совместной работы?',
      a: 'Нам потребуются ваши бизнес-задачи, референсы (что вам нравится визуально) и контентные материалы, если они есть. Всю остальную работу по разработке прототипа, структуры и копирайту мы берем на себя.',
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 relative bg-[#050508]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Остались вопросы?</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            ЧАСТЫЕ ВОПРОСЫ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl overflow-hidden border border-white/10 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span className="text-left leading-snug">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Plus className="w-4 h-4 text-zinc-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4 text-left">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
