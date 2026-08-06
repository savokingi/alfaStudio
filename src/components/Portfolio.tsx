'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { title: 'PROJECT ONE', category: 'BRANDING' },
  { title: 'PROJECT TWO', category: 'WEB DESIGN' },
  { title: 'PROJECT THREE', category: 'DEVELOPMENT' },
  { title: 'PROJECT FOUR', category: 'UI/UX' },
];

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section ref={targetRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 px-20">
          {projects.map((project, index) => (
            <div key={index} className="w-[60vw] flex-shrink-0">
              <div className="h-[60vh] bg-zinc-900 mb-8 rounded-lg overflow-hidden" />
              <h2 className="text-6xl font-bold">{project.title}</h2>
              <p className="text-zinc-500 text-xl mt-2">{project.category}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
