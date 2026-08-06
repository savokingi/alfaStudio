import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap } from 'lucide-react';

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  const plans = [
    {
      name: 'Базовый тариф',
      price: yearly ? '89 000 ₽' : '109 000 ₽',
      period: '/месяц',
      desc: 'Прекрасно подходит для стартапов, которым необходим чистый, стильный и продающий лендинг-презентация.',
      highlight: false,
      features: [
        'Индивидуальный Landing Page',
        'Адаптивный дизайн (Mobile, Tablet)',
        'Базовая SEO-оптимизация и аналитика',
        'Быстрая верстка на React / Vite',
        'Техподдержка по почте',
      ],
      cta: 'Начать проект',
    },
    {
      name: 'Стандартный тариф',
      price: yearly ? '199 000 ₽' : '239 000 ₽',
      period: '/месяц',
      desc: 'Оптимальное решение для развивающихся продуктов и компаний, нацеленных на доминирование на рынке.',
      highlight: true,
      badge: 'Популярно',
      features: [
        'Веб-производство & Интерактивная 3D-графика',
        'Быстрый Headless CMS бэкенд управления',
        'Продвинутый технический SEO-комплекс',
        'Интерактивные микро-анимации интерфейса',
        'Выделенный чат в Telegram / Slack',
        'Ежемесячное техподдержка и обновление',
      ],
      cta: 'Запустить стандартный пакет',
    },
    {
      name: 'Премиум тариф',
      price: yearly ? '389 000 ₽' : '469 000 ₽',
      period: '/месяц',
      desc: 'Комплексная цифровая трансформация бизнеса с внедрением сложных WebGL-сцен и интеллектуальных ИИ-решений.',
      highlight: false,
      features: [
        'Флагманский магазин или корпоративная платформа',
        'Эксклюзивная 3D-графика и интерактивные сцены',
        'ИИ-ассистенты и автоматизация рабочих процессов',
        'Безлимитное внедрение фич во время производства',
        'Персональный техлид и мгновенный SLA-ответ',
        'A/B тестирование и постоянное масштабирование',
      ],
      cta: 'Обсудить Enterprise',
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 relative bg-[#050508] overflow-hidden">
      {/* Огромная фоновая надпись */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
        PRICING
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Заголовок */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20">
            <Zap className="w-3.5 h-3.5" />
            <span>Инвестиции в цифровой успех</span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-white uppercase tracking-tight mb-4 sm:mb-6">
            ПРОЗРАЧНЫЕ ТАРИФЫ
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base leading-relaxed">
            Выберите оптимальный тариф под масштаб вашего бизнеса. Никаких скрытых платежей, полная прозрачность процессов.
          </p>

          {/* Переключатель */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4">
            <span className={`text-xs font-semibold ${!yearly ? 'text-white' : 'text-zinc-500'}`}>
              Помесячно
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className="w-14 h-8 rounded-full bg-white/10 p-1 border border-white/15 relative transition-colors cursor-pointer flex-shrink-0"
            >
              <motion.div
                animate={{ x: yearly ? 24 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="w-6 h-6 rounded-full bg-amber-400 shadow-md"
              />
            </button>
            <span className={`text-xs font-semibold ${yearly ? 'text-white' : 'text-zinc-500'} flex items-center gap-1.5`}>
              Годовой абонемент
              <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold">
                Скидка 20%
              </span>
            </span>
          </div>
        </div>

        {/* Сетка тарифов */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 relative ${
                plan.highlight
                  ? 'bg-gradient-to-b from-white/10 via-white/5 to-white/0 border-2 border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.15)] lg:scale-105 z-20'
                  : 'glass-panel border border-white/10'
              }`}
            >
              {/* Бейдж Популярно */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-amber-400 text-black font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">{plan.period}</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6 pb-6 border-b border-white/10">
                  {plan.desc}
                </p>

                {/* Опции */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlight ? 'bg-amber-400 text-black' : 'bg-white/10 text-white'
                      }`}>
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-xs text-zinc-300 font-medium text-left">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Кнопка CTA */}
              <a
                href="#contact"
                className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center ${
                  plan.highlight
                    ? 'bg-white text-black hover:bg-amber-400 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105'
                    : 'glass-panel hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
