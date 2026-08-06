import { useState, useEffect } from 'react';
import { Calculator as CalcIcon, HelpCircle, ArrowUpRight } from 'lucide-react';

export default function Calculator() {
  const [projectType, setProjectType] = useState<'landing' | 'corporate' | 'saas' | 'ecommerce'>('landing');
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<'normal' | 'express'>('normal');
  const [price, setPrice] = useState(0);
  const [days, setDays] = useState(0);

  const toggleFeature = (id: string) => {
    if (features.includes(id)) {
      setFeatures(features.filter((f) => f !== id));
    } else {
      setFeatures([...features, id]);
    }
  };

  useEffect(() => {
    let basePrice = 0;
    let baseDays = 0;

    switch (projectType) {
      case 'landing':
        basePrice = 10000;
        baseDays = 2;
        break;
      case 'corporate':
        basePrice = 20000;
        baseDays = 4;
        break;
      case 'saas':
        basePrice = 30000;
        baseDays = 7;
        break;
      case 'ecommerce':
        basePrice = 50000;
        baseDays = 15;
        break;
    }

    let featurePrice = 0;
    let featureDays = 0;

    if (features.includes('webgl')) {
      featurePrice += 5000;
      featureDays += 1;
    }
    if (features.includes('ai')) {
      featurePrice += 3000;
      featureDays += 1;
    }
    if (features.includes('cms')) {
      featurePrice += 10000;
      featureDays += 2;
    }

    let finalPrice = basePrice + featurePrice;
    let finalDays = baseDays + featureDays;

    if (timeline === 'express') {
      finalPrice = Math.round(finalPrice * 1.3);
      finalDays = Math.round(finalDays * 0.6);
    }

    setPrice(finalPrice);
    setDays(finalDays);
  }, [projectType, features, timeline]);

  const formatPrice = (p: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(p);
  };

  return (
    <section id="calculator" className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 relative bg-[#050508] border-y border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-tr from-amber-600/10 via-orange-600/5 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
              <CalcIcon className="w-4 h-4" />
              <span>Расчет бюджета</span>
            </div>
            <h2 className="text-3xl sm:text-6xl font-black text-white uppercase tracking-tight">
              КАЛЬКУЛЯТОР ПРОЕКТА
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-xs sm:text-sm leading-relaxed">
            Соберите конфигурацию вашего будущего веб-продукта. Расчет является предварительным.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            {/* 1. Тип проекта */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-zinc-400 text-xs font-mono uppercase tracking-widest">1. Выберите тип проекта</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { id: 'landing', label: 'Лендинг', desc: 'Промо-сайт' },
                  { id: 'corporate', label: 'Бизнес-сайт', desc: 'Презентация компании' },
                  { id: 'saas', label: 'Платформа', desc: 'Сложное веб-приложение' },
                  { id: 'ecommerce', label: 'E-Commerce', desc: 'Масштабный магазин' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setProjectType(t.id as any)}
                    className={`p-3.5 sm:p-5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                      projectType === t.id
                        ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/30 text-white'
                    }`}
                  >
                    <span className="font-extrabold text-xs sm:text-base leading-tight uppercase block mb-1">
                      {t.label}
                    </span>
                    <span className={`text-[9px] sm:text-[10px] leading-tight block ${projectType === t.id ? 'text-zinc-600' : 'text-zinc-500'}`}>
                      {t.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Интерактивные опции */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-zinc-400 text-xs font-mono uppercase tracking-widest">2. Интерактивные опции</h3>
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { id: 'webgl', label: 'Анимации / Интерактив', desc: 'Предает сайту уникальность' },
                  { id: 'ai', label: 'Ваш дизайн', desc: 'Весь дизайн полностью по вашим референсам' },
                  { id: 'cms', label: 'Личный кабинет', desc: 'Каждый сможет авторизоваться и подключиться к системе' },
                ].map((opt) => {
                  const active = features.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleFeature(opt.id)}
                      className={`p-4 sm:p-5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                        active
                          ? 'bg-amber-400/20 border-amber-400 text-white shadow-[0_0_25px_rgba(255,170,0,0.15)]'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/30 text-white'
                      }`}
                    >
                      <span className="font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2 flex items-center justify-between">
                        <span>{opt.label}</span>
                        <input
                          type="checkbox"
                          checked={active}
                          readOnly
                          className="accent-amber-400 pointer-events-none"
                        />
                      </span>
                      <span className="text-[9px] sm:text-[10px] leading-tight text-zinc-500">
                        {opt.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Желаемые сроки */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-zinc-400 text-xs font-mono uppercase tracking-widest">3. Желаемые сроки</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md">
                {[
                  { id: 'normal', label: 'Стандартные сроки', desc: 'Вдумчивая разработка' },
                  { id: 'express', label: 'Экспресс (+30%)', desc: 'Быстрее на 40%' },
                ].map((time) => (
                  <button
                    key={time.id}
                    onClick={() => setTimeline(time.id as any)}
                    className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                      timeline === time.id
                        ? 'bg-white text-black border-white'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/30 text-white'
                    }`}
                  >
                    <span className="font-bold text-xs uppercase block mb-0.5">{time.label}</span>
                    <span className={`text-[9px] leading-tight block ${timeline === time.id ? 'text-zinc-600' : 'text-zinc-500'}`}>
                      {time.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Результат расчета */}
          <div className="lg:col-span-4 mt-4 lg:mt-0">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-500/10 to-transparent h-full flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400/90 tracking-widest block mb-4">
                  Предварительный расчет
                </span>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <div className="text-xs text-zinc-400 font-medium uppercase mb-1">Срок производства:</div>
                    <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {days} {days % 10 === 1 && days % 100 !== 11 ? 'день' : [2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100) ? 'дня' : 'дней'}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-zinc-400 font-medium uppercase mb-1">Бюджет проекта:</div>
                    <div className="text-3xl sm:text-5xl font-black text-amber-300 tracking-tight">
                      {formatPrice(price)}
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 sm:pt-6 mt-4 sm:mt-6">
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                    <HelpCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>В цену включена базовая SEO-оптимизация.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 sm:pt-8">
                <a
                  href="#contact"
                  className="w-full py-3.5 sm:py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                >
                  <span>Заказать по расчету</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
