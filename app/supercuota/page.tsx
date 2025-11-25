'use client';

import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SupercuotaPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Ajuste conforme necessário

  // Auto-advance carrossel a cada 2 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Animações CSS globais */}
      <style jsx global>{`
        @keyframes gradient-flow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes sheen {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(30deg);
          }
          100% {
            transform: translateX(200%) translateY(200%) rotate(30deg);
          }
        }

        @keyframes fire-pulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 8px rgba(255, 100, 0, 0.8));
          }
          50% {
            transform: scale(1.2);
            filter: drop-shadow(0 0 16px rgba(255, 150, 0, 1));
          }
        }

        .gradient-text {
          background: linear-gradient(
            90deg,
            #00FF88 0%,
            #ffffff 25%,
            #00FF88 50%,
            #ffffff 75%,
            #00FF88 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-flow 3s linear infinite;
        }

        .btn-sheen {
          position: relative;
          overflow: hidden;
        }

        .btn-sheen::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.8),
            transparent
          );
          animation: sheen 3s ease-in-out infinite;
          pointer-events: none;
        }

        .fire-pulse {
          animation: fire-pulse 1.5s ease-in-out infinite;
        }

        /* Prevenir scroll horizontal no mobile */
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
          position: relative;
        }

        * {
          max-width: 100%;
        }

        section {
          max-width: 100vw;
          overflow-x: hidden;
        }
      `}</style>

      {/* HERO SECTION - Primeira Dobra */}
      <section
        className="relative min-h-screen flex items-start justify-center px-4 py-12 w-full overflow-x-hidden"
        style={{
          backgroundImage: 'url(/supercuota/images/BACKGROUND%20DOBRA%201%20copiar.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay com 30% de opacidade */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Conteúdo com margem superior para não cobrir o rosto */}
        <div className="relative z-10 max-w-5xl w-full mx-auto text-center mt-[300px] md:mt-[450px] space-y-8">
          
          {/* Headline com gradiente animado - Ajustado para 3 linhas no mobile */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight px-4"
          >
            <span className="gradient-text">
              Las Supercuotas más Brígidas están aquí.
            </span>
          </motion.h1>

          {/* Subheadline - Com variação de peso */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-200 leading-relaxed px-4 max-w-4xl mx-auto"
          >
            <span className="font-bold">Acceso exclusivo</span> a jugadas de otro nivel. <span className="font-bold">Deja de regalar tu plata</span> y empieza a <span className="font-bold">facturar con la élite.</span>
          </motion.p>

          {/* Botão CTA com efeito Sheen - Centralizado e responsivo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 flex justify-center w-full"
          >
            <a
              href="https://wa.me/seu-numero"
              className="btn-sheen inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-4 bg-[#00FF88] hover:bg-[#00dd77] text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black py-4 px-6 sm:py-5 sm:px-10 md:py-6 md:px-14 lg:py-7 lg:px-16 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#00FF88]/50 uppercase tracking-wide max-w-full"
            >
              {/* Ícone WhatsApp */}
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="whitespace-nowrap sm:whitespace-normal">Entrar al Grupo VIP</span>
            </a>
          </motion.div>

          {/* Aviso de Urgência com fogo animado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-3 pt-4"
          >
            <Flame className="w-6 h-6 md:w-7 md:h-7 text-orange-500 fire-pulse" />
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-200 uppercase tracking-wide">
              ¡Ponte vío! Los cupos vuelan.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SEÇÃO DE PROVA SOCIAL - Segunda Dobra */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-black via-purple-950/40 to-black w-full overflow-x-hidden"
      >
        {/* Glows ambientes - Animados */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute top-20 left-10 w-96 h-96 bg-[#00FF88]/20 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white text-center mb-16 px-4 relative z-10"
        >
          Los que ya forraron con nuestras fijas
        </motion.h2>

        {/* Carrossel de Prints */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-6xl mx-auto overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slides - Imagens dos depoimentos */}
            {[...Array(totalSlides)].map((_, index) => (
              <div key={index} className="min-w-full flex items-center justify-center px-4 py-8">
                <div className="relative w-full max-w-md">
                  {/* Brilho verde atrás da imagem - usando múltiplas camadas para efeito mais intenso */}
                  <div className="absolute -inset-4 bg-[#00FF88] rounded-3xl blur-3xl opacity-60 animate-pulse"></div>
                  <div className="absolute -inset-2 bg-[#00FF88] rounded-3xl blur-2xl opacity-40"></div>
                  
                  {/* Container da imagem */}
                  <div className="relative z-10">
                    <img
                      src={`/supercuota/images/depoimento ${index + 1}.jpeg`}
                      alt={`Depoimento ${index + 1}`}
                      className="w-full h-auto rounded-3xl object-cover shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores de slide */}
          <div className="flex justify-center gap-3 mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-[#00FF88] w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-black py-8 border-t border-gray-900 w-full overflow-x-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            Vicente Tips © 2026. Todos los derechos reservados.
          </p>
        </div>
      </motion.footer>
    </>
  );
}

