import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 relative bg-[#050508] overflow-hidden">
      {/* ArteDante свечение */}
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-tl from-amber-600/30 via-orange-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Контакты слева */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Обратная связь</span>
            </div>
            <h2 className="text-3xl sm:text-6xl font-black text-white uppercase tracking-tight mb-4 sm:mb-6">
              ОБСУДИМ <br />ПРОЕКТ?
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Оставьте контакты и вкратце опишите вашу идею. Мы свяжемся с вами в течение 2-х часов с готовым предложением!
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-zinc-500 font-mono uppercase">Напишите нам</div>
                <a href="mailto:info@alfastudio.design" className="text-sm sm:text-base text-white font-bold hover:text-amber-300 transition-colors">
                  info@alfastudio.design
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-zinc-500 font-mono uppercase">Позвоните нам</div>
                <a href="tel:+79030525565" className="text-sm sm:text-base text-white font-bold hover:text-amber-300 transition-colors">
                  +7 (903) 052-55-65
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 flex-shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-zinc-500 font-mono uppercase">Локация креатива</div>
                <div className="text-sm sm:text-base text-white font-bold">Россия</div>
              </div>
            </div>
          </div>
        </div>

        {/* Форма справа */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            {submitted ? (
              <div className="py-12 sm:py-16 text-center space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">Заявка отправлена!</h3>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto">
                  Спасибо, {formData.name || 'друг'}. Эксперт AlfaStudio свяжется с вами в течение пары часов.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs font-mono uppercase text-zinc-400">Как вас зовут</label>
                  <input
                    type="text"
                    required
                    placeholder="Алексей"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-2.5 sm:py-3 text-white text-base sm:text-lg focus:outline-none focus:border-amber-400 transition-colors placeholder:text-zinc-700"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs font-mono uppercase text-zinc-400">Почта или номер телефона</label>
                  <input
                    type="text"
                    required
                    placeholder="hello@alfastudio.design / +7 (999) 000-00-00"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-2.5 sm:py-3 text-white text-base sm:text-lg focus:outline-none focus:border-amber-400 transition-colors placeholder:text-zinc-700"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs font-mono uppercase text-zinc-400">Расскажите о проекте</label>
                  <textarea
                    rows={3}
                    placeholder="Задачи проекта, сроки, ссылки..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-2.5 sm:py-3 text-white text-base sm:text-lg focus:outline-none focus:border-amber-400 transition-colors placeholder:text-zinc-700 resize-none"
                  />
                </div>

                {/* Интерактивная янтарная orb-кнопка отправки */}
                <div className="pt-2 sm:pt-4 flex justify-center sm:justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-28 sm:h-28 py-4 sm:py-0 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_40px_rgba(255,140,0,0.5)] hover:scale-105 sm:hover:scale-110 transition-all duration-300 flex sm:flex-col items-center justify-center gap-2 sm:gap-1 cursor-pointer border border-amber-300/40"
                  >
                    <span>Отправить</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
