'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './bilhete-acao.css';

export default function BilheteAcaoPage() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos em segundos
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Cronômetro countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            return 0; // Para em 00:00
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Carrossel automático
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

      {/* HEADER - Disclaimer com cronômetro */}
      <header className="bg-[#7BD204] w-full py-2 px-4 md:px-8 border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-between gap-4">
          {/* Bloco Cronômetro - Esquerda */}
          <div className="flex items-center gap-2">
            {/* Card Minutos */}
            <div className="bg-[#0055FF] rounded-lg p-2 flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16">
              <span className="text-white font-black text-xl md:text-2xl leading-none">
                {String(minutes).padStart(2, '0')}
              </span>
              <span className="text-white text-[8px] md:text-[10px] font-bold uppercase mt-0.5">
                MINUTOS
              </span>
            </div>
            
            {/* Card Segundos */}
            <div className="bg-[#0055FF] rounded-lg p-2 flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16">
              <span className="text-white font-black text-xl md:text-2xl leading-none">
                {String(seconds).padStart(2, '0')}
              </span>
              <span className="text-white text-[8px] md:text-[10px] font-bold uppercase mt-0.5">
                SEGUNDOS
              </span>
            </div>
          </div>

          {/* Bloco Texto - Direita */}
          <div className="flex flex-col items-end gap-1">
            <p className="text-black text-xs md:text-sm font-semibold">
              98% de los cupos agotados
            </p>
            <div className="bg-blue-600 rounded-lg px-3 py-1">
              <p className="text-white text-xs md:text-sm font-bold">
                SOLO 3 DISPONIBLES
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-4 pb-12 w-full overflow-x-hidden"
        style={{
          backgroundImage: 'url(/bilhete-acao/images/background-hero.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay escuro para contraste */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-5xl w-full mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          {/* Imagem do Expert */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 -mt-4"
          >
            <img
              src="/bilhete-acao/images/expert.webp"
              alt="Expert"
              className="mx-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </motion.div>

          {/* Headline com gradiente animado */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight px-4 text-white"
          >
            ÚNETE AL{' '}
            <span className="gradient-text-animated">
              GRUPO DE CUOTAS ALTAS
            </span>{' '}
            QUE MÁS ACIERTA EN CHILE!
          </motion.h1>

          {/* Sub headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed px-4 max-w-4xl mx-auto"
          >
            Recibe tips diarias para buscar un retorno{' '}
            <span className="gradient-text-animated font-bold">ALTO</span>, poniendo solo el vuelto del pan
          </motion.p>

          {/* Botão CTA com ícone Telegram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-6 flex flex-col items-center justify-center w-full gap-2"
          >
            <a
              href="https://t.me/seu-grupo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#0088cc] hover:bg-[#0077b5] text-white text-base sm:text-lg font-semibold py-3 px-6 sm:py-3.5 sm:px-8 rounded-lg transition-colors duration-200"
            >
              {/* Ícone Telegram - Círculo branco com avião */}
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#0088cc]"
                >
                  <path 
                    d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>ENTRAR AL GRUPO AHORA</span>
            </a>
            <p className="text-xs sm:text-sm text-gray-400 text-center">
              ¿No tienes Telegram?{' '}
              <a 
                href="https://telegram.org/apps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-gray-300 transition-colors"
              >
                Haz clic aquí.
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DE DEPOIMENTOS */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-600 via-blue-700 via-indigo-800 to-blue-900 w-full overflow-x-hidden">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            MIRA LO QUE ELLOS TIENEN QUE DECIR:
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-200 font-semibold max-w-3xl mx-auto">
            Miles de chilenos ya están ganando con nuestros tips de cuotas altas
          </p>
        </motion.div>

        {/* Carrossel de Prints */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-6xl mx-auto overflow-hidden mb-12"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slides - Imagens dos depoimentos */}
            {[...Array(totalSlides)].map((_, index) => (
              <div key={index} className="min-w-full flex items-center justify-center px-4 py-8">
                <div className="relative w-full max-w-md">
                  {/* Imagem */}
                  <div className="relative z-10">
                    <img
                      src={`/bilhete-acao/images/depoimento-${index + 1}.webp`}
                      alt={`Depoimento ${index + 1}`}
                      className="w-full h-auto rounded-3xl object-cover shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Botão CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-6 flex flex-col items-center justify-center w-full mb-8 gap-2"
        >
          <a
            href="https://t.me/seu-grupo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#0088cc] hover:bg-[#0077b5] text-white text-base sm:text-lg font-semibold py-3 px-6 sm:py-3.5 sm:px-8 rounded-lg transition-colors duration-200"
          >
            {/* Ícone Telegram - Círculo branco com avião */}
            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#0088cc]"
              >
                <path 
                  d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span>ENTRAR AL GRUPO AHORA</span>
          </a>
          <p className="text-xs sm:text-sm text-gray-300 text-center">
            ¿No tienes Telegram?{' '}
            <a 
              href="https://telegram.org/apps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-gray-200 transition-colors"
            >
              Haz clic aquí.
            </a>
          </p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 border-t border-gray-900 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            Vicente Tipster | Todos los derechos reservados 2026
          </p>
        </div>
      </footer>
    </>
  );
}

