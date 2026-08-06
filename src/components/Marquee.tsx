import { motion } from 'framer-motion';

const logos = [
  'Google',
  'Framer',
  'Apple',
  'Adobe',
  'LinkedIn',
  'Microsoft',
  'Figma',
  'Vercel',
  'Stripe',
  'Next.js',
];

export default function Marquee() {
  return (
    <div className="w-full py-12 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex items-center gap-16 whitespace-nowrap w-max"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors duration-300 cursor-pointer group"
          >
            <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-amber-400 group-hover:shadow-[0_0_8px_#ffaa00] transition-all" />
            <span className="text-sm font-semibold tracking-widest uppercase">
              {logo}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
