import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const philosophyData = [
  {
    id: '01',
    title: 'Архитектура решений',
    text: 'Мы не просто пишем код, мы закладываем фундамент. Каждая система AlfaStudio проектируется с нуля под специфику ваших бизнес-процессов, обеспечивая надежность и гибкость, которую невозможно получить в шаблонах.',
  },
  {
    id: '02',
    title: 'Визуальный интеллект',
    text: 'Дизайн — это не украшение, а инструмент коммуникации. Мы создаем интерфейсы, которые говорят с пользователем на языке эмоций и удобства, управляя вниманием и конверсией.',
  },
  {
    id: '03',
    title: 'Масштабируемый рост',
    text: 'Наши продукты растут вместе с вами. От MVP до сложных экосистем — мы внедряем архитектуру, готовую к увеличению нагрузки, расширению функционала и захвату новых рынков.',
  },
];

export default function About() {
  const [activeId, setActiveId] = useState<string | null>('01');

  const toggleActive = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="about" className="py-20 sm:py-36 px-4 sm:px-6 md:px-20 bg-[#050508] relative overflow-hidden">
      {/* Тонкая сетка-чертеж */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-24">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-widest block mb-4 sm:mb-6">// Философия AlfaStudio</span>
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.95]">
            Проектируем <br/> будущее
          </h2>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {philosophyData.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => toggleActive(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
              className="group border-t border-white/10 pt-6 sm:pt-12 relative cursor-pointer"
            >
              {/* Линия-активатор */}
              <motion.div 
                className="absolute left-0 top-0 h-px bg-amber-500"
                initial={{ width: 0 }}
                animate={{ width: activeId === item.id ? '100%' : '0%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
              
              <div className="flex items-start justify-between gap-4 sm:gap-12">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="font-mono text-zinc-500 text-sm sm:text-lg">
                  {item.id}
                </span>
              </div>

              <AnimatePresence initial={false}>
                {activeId === item.id && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-zinc-400 text-sm sm:text-lg md:text-xl leading-relaxed mt-4 sm:mt-8 max-w-2xl overflow-hidden"
                  >
                    {item.text}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
