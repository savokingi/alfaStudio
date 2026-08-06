import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, TrendingUp, Palette, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const servicesList = [
    {
      num: '01',
      title: 'ВЕБ-РАЗРАБОТКА & 3D WEBGL',
      category: 'Технологии',
      desc: 'Создаем сайты и платформы любого уровня сложности — от промо-лендингов от 10 000 ₽ до полноценных веб-приложений и SaaS-платформ от 50 000 ₽. Внедряем интерактивные WebGL-сцены, анимации и сложную логику.',
      tags: ['Лендинг от 10 000 ₽', 'Бизнес-сайт от 20 000 ₽', 'Платформа от 30 000 ₽', 'Анимации / WebGL'],
      icon: Code,
      glow: 'from-amber-500/20 via-transparent to-transparent',
    },
    {
      num: '02',
      title: 'ЦИФРОВОЙ ДИЗАЙН & БРЕНДИНГ',
      category: 'Ваш дизайн',
      desc: 'Полностью кастомизируем дизайн под ваши референсы. Разрабатываем дизайн-системы, визуальную айдентику и уникальные интерфейсы, которые выделяют вас среди конкурентов.',
      tags: ['Дизайн по референсам', 'UX/UI-проектирование', 'Motion design', 'Айдентика'],
      icon: Palette,
      glow: 'from-purple-500/20 via-transparent to-transparent',
    },
    {
      num: '03',
      title: 'ЛИЧНЫЙ КАБИНЕТ & СИСТЕМЫ',
      category: 'Разработка',
      desc: 'Проектируем и внедряем клиентские кабинеты, системы авторизации и админ-панели. Настраиваем интеграцию с любыми внешними сервисами и CRM.',
      tags: ['Авторизация', 'Админ-панель', 'API-интеграции', 'CRM-связка'],
      icon: ShoppingBag,
      glow: 'from-emerald-500/20 via-transparent to-transparent',
    },
    {
      num: '04',
      title: 'E-COMMERCE & SEO-ПРОДВИЖЕНИЕ',
      category: 'Маркетинг',
      desc: 'Разрабатываем headless-магазины с высокой конверсией, проводим технический SEO-аудит, настраиваем аналитику и лидогенерацию. Базовая SEO-оптимизация включена в каждый проект.',
      tags: ['Headless E-Commerce', 'SEO-аудит', 'Аналитика и ROI', 'Эквайринг'],
      icon: TrendingUp,
      glow: 'from-blue-500/15 via-transparent to-transparent',
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 relative bg-[#050508] subtle-grid">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Технологический стек AlfaStudio</span>
            </div>
            <h2 className="text-3xl sm:text-6xl font-black text-white uppercase tracking-tight">
              НАШИ УСЛУГИ
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-xs sm:text-sm leading-relaxed">
            Сфокусируйтесь на главном. Мы создаем технологические решения, которые обеспечивают взрывной рост конверсий и выделяют ваш бизнес среди конкурентов.
          </p>
        </div>

        <div className="space-y-3">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            const isOpen = activeIndex === index;

            return (
              <div
                key={service.num}
                className={`border-b border-white/10 transition-all duration-500 overflow-hidden relative ${
                  isOpen ? 'bg-white/[0.03] rounded-2xl sm:rounded-3xl p-5 sm:p-8' : 'py-5 px-3 hover:bg-white/[0.01]'
                }`}
              >
                <div
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-8 flex-1 min-w-0">
                    <span className="font-mono text-zinc-500 text-xs sm:text-sm">
                      {service.num}
                    </span>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 mb-0.5 block">
                        {service.category}
                      </span>
                      <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight truncate group-hover:text-amber-400 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-amber-400 text-black border-amber-400' : 'bg-white/5 text-white'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-12 gap-6 pt-6 mt-4 border-t border-white/5">
                        <div className="md:col-span-8 space-y-4">
                          <p className="text-zinc-400 text-xs sm:text-base leading-relaxed">
                            {service.desc}
                          </p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-4">
                            {service.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="text-[10px] sm:text-[11px] px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 text-zinc-300 border border-white/10 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="md:col-span-4 flex items-end md:justify-end pt-2 md:pt-0">
                          <a
                            href="#contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all duration-300 hover:scale-105 cursor-pointer"
                          >
                            <span>Оставить заявку</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
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
