'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'BRANDING', desc: 'Crafting identity that resonates.' },
  { title: 'WEB DESIGN', desc: 'User-centric aesthetic experiences.' },
  { title: 'STRATEGY', desc: 'Defining the path to impact.' },
  { title: 'DEVELOPMENT', desc: 'Building performant digital systems.' },
];

export default function Capabilities() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-40 px-20">
      <h2 className="text-sm text-zinc-500 mb-20 tracking-widest uppercase">Capabilities</h2>
      <div className="flex flex-col">
        {services.map((service, i) => (
          <div
            key={i}
            className="border-t border-zinc-800 py-10 relative"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex justify-between items-center">
              <span className="text-6xl font-bold">{service.title}</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered === i ? 1 : 0 }}
                className="text-lg text-zinc-400"
              >
                {service.desc}
              </motion.span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
