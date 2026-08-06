'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const philosophyText = [
  'МЫ НЕ СОЗДАЕМ САЙТЫ.',
  'МЫ ФОРМИРУЕМ ЦИФРОВЫЕ ЭКОСИСТЕМЫ.',
  'МИНИМАЛИЗМ — ЭТО НАШ ИНСТРУМЕНТ.',
  'ФОКУС — ЭТО НАШ ПРИНЦИП.',
];

function Line({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 0.1]);

  return (
    <motion.div ref={ref} style={{ opacity }} className="py-10">
      <h3 className="text-5xl font-bold">{text}</h3>
    </motion.div>
  );
}

export default function Philosophy() {
  return (
    <section className="py-40 px-20">
      {philosophyText.map((text, i) => (
        <Line key={i} text={text} />
      ))}
    </section>
  );
}
