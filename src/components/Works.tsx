import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { title: 'STREET 52', category: 'Barbershop', url: 'https://artemdiscipline.github.io/street52/' },
  { title: 'F41 BARBERSHOP', category: 'Barbershop', url: 'https://artemdiscipline.github.io/f41-barbershop/' },
  { title: 'VSTUDY', category: 'EdTech Платформа', url: 'https://vstudy.ru' },
  { title: 'SOPKA COFFEE', category: 'Coffee Shop', url: 'https://sopka-coffee.web.app' },
  { title: 'SPA RUKI', category: 'Массажный салон', url: 'https://spa-ruki.web.app' },
];

export default function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Магнитные координаты для превью
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section 
      id="works" 
      className="py-20 sm:py-36 px-4 sm:px-6 md:px-20 bg-[#050508] relative overflow-hidden" 
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-[1400px] mx-auto">
        <span className="text-amber-500 font-mono text-xs sm:text-sm tracking-widest uppercase block mb-12 sm:mb-20 italic">
          // Избранные работы
        </span>

        <div className="flex flex-col">
          {projects.map((work, i) => (
            <a
              key={i}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group py-8 sm:py-12 border-b border-white/10 last:border-b-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
            >
              <div>
                <h2 className="text-3xl sm:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter sm:group-hover:pl-6 lg:group-hover:pl-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] break-words">
                  {work.title}
                </h2>
                <span className="text-amber-400/90 font-mono text-xs sm:hidden uppercase tracking-wider mt-1 block">
                  {work.category}
                </span>
              </div>
              
              <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 mt-2 sm:mt-0">
                <span className="text-zinc-500 font-mono text-xs sm:text-sm hidden sm:block uppercase tracking-wider">
                  {work.category}
                </span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300 flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Интерактивное превью (на десктопе) */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            style={{
              x: springX,
              y: springY,
              opacity: 1,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="fixed top-0 left-0 w-72 h-48 pointer-events-none z-50 rounded-2xl overflow-hidden border border-white/20 shadow-2xl hidden md:flex items-center justify-center bg-zinc-900"
          >
             <div className="w-full h-full flex items-center justify-center text-zinc-400 font-mono text-xs p-4 text-center">
               Превью проекта: {projects[hoveredIndex].title}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
