'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TELEGRAM_LINK = 'https://t.me/+GjHrzQWuGW5kOGNh';

export default function BilheteAcaoPage() {
  const [timeLeft, setTimeLeft] = useState(300);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) return 0;
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=Montserrat:wght@400;600;700;800;900&display=swap');
        * { font-family: 'Poppins', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        @keyframes gradient-flow { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes pulse-glow { 0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(123, 210, 4, 0.5); } 50% { transform: scale(1.05); box-shadow: 0 0 40px rgba(123, 210, 4, 0.8); } }
        @keyframes shine { 0% { transform: translateX(-100%) translateY(-100%) rotate(30deg); } 100% { transform: translateX(200%) translateY(200%) rotate(30deg); } }
        .gradient-text-animated { background: linear-gradient(90deg, #7BD204 0%, #7BD204 50%, #7BD204 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: gradient-flow 3s linear infinite; }
        .btn-pulse { position: relative; overflow: hidden; animation: pulse-glow 2s ease-in-out infinite; }
        .btn-pulse::before { content: ''; position: absolute; top: -50%; left: -50%; width: 50%; height: 200%; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent); animation: shine 3s ease-in-out infinite; pointer-events: none; }
        html, body { overflow-x: hidden; max-width: 100vw; }
        * { max-width: 100%; }
      `}</style>

      <header className="bg-[#7BD204] w-full py-2 px-4 md:px-8 border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#0055FF] rounded-lg p-2 flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16">
              <span className="text-white font-black text-xl md:text-2xl leading-none">{String(minutes).padStart(2, '0')}</span>
              <span className="text-white text-[8px] md:text-[10px] font-bold uppercase mt-0.5">MINUTOS</span>
            </div>
            <div className="bg-[#0055FF] rounded-lg p-2 flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16">
              <span className="text-white font-black text-xl md:text-2xl leading-none">{String(seconds).padStart(2, '0')}</span>
              <span className="text-white text-[8px] md:text-[10px] font-bold uppercase mt-0.5">SEGUNDOS</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-black text-xs md:text-sm font-semibold">98% de los cupos agotados</p>
            <div className="bg-blue-600 rounded-lg px-3 py-1">
              <p className="text-white text-xs md:text-sm font-bold">SOLO 3 DISPONIBLES</p>
            </div>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-4 pb-12 w-full overflow-x-hidden" style={{ backgroundImage: 'url(/bilhete-acao/images/background-hero.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-5xl w-full mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8 -mt-4">
            <img src="/bilhete-acao/images/expert.webp" alt="Expert" className="mx-auto" style={{ maxWidth: '100%', height: 'auto' }} />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight px-4 text-white">
            ÚNETE AL <span className="gradient-text-animated">GRUPO DE CUOTAS ALTAS</span> QUE MÁS ACIERTA EN CHILE!
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed px-4 max-w-4xl mx-auto">
            Recibe tips diarias para buscar un retorno <span className="gradient-text-animated font-bold">ALTO</span>, poniendo solo el vuelto del pan
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="pt-6 flex justify-center w-full">
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn-pulse inline-flex items-center justify-center gap-3 bg-[#7BD204] hover:bg-[#7BD204] text-black text-xl sm:text-2xl md:text-3xl font-black py-4 px-8 sm:py-5 sm:px-12 md:py-6 md:px-16 rounded-2xl transition-all duration-300 uppercase tracking-wide">ENTRA AHORA!</a>
          </motion.div>
        </div>
      </section>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-600 via-blue-700 via-indigo-800 to-blue-900 w-full overflow-x-hidden">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-8 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">MIRA LO QUE ELLOS TIENEN QUE DECIR:</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-200 font-semibold max-w-3xl mx-auto">Miles de chilenos ya están ganando con nuestros tips de cuotas altas</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="relative w-full max-w-6xl mx-auto overflow-hidden mb-12">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {[...Array(totalSlides)].map((_, index) => (
              <div key={index} className="min-w-full flex items-center justify-center px-4 py-8">
                <div className="relative w-full max-w-md">
                  <div className="relative z-10">
                    <img src={`/bilhete-acao/images/depoimento-${index + 1}.webp`} alt={`Depoimento ${index + 1}`} className="w-full h-auto rounded-3xl object-cover shadow-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="pt-6 flex justify-center w-full mb-8">
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn-pulse inline-flex items-center justify-center gap-3 bg-[#7BD204] hover:bg-[#7BD204] text-black text-xl sm:text-2xl md:text-3xl font-black py-4 px-8 sm:py-5 sm:px-12 md:py-6 md:px-16 rounded-2xl transition-all duration-300 uppercase tracking-wide">ENTRA AHORA!</a>
        </motion.div>
      </section>

      <footer className="bg-black py-8 border-t border-gray-900 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">Vicente Tipster | Todos los derechos reservados 2026</p>
        </div>
      </footer>
    </>
  );
}
