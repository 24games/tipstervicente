'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const TELEGRAM_LINK = 'https://t.me/seu-grupo';

export default function IAVicentePage() {
  const benefits = [
    'Señales y operaciones en vivo durante las lives, con total precisión en cada jugada.',
    'La IA El Papslots detecta patrones y oportunidades basadas en datos reales.',
    'Estrategias seguras de entrada y salida para maximizar ganancias y proteger el saldo.',
    'Mentalidad ganadora para mantener el enfoque, el control y la constancia en los resultados.',
    'Acceso directo conmigo para resolver dudas y seguir las jugadas más rentables.',
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=Montserrat:wght@400;600;700;800;900&display=swap');
        
        * {
          font-family: 'Poppins', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 200, 83, 0.5), 0 0 40px rgba(0, 200, 83, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 200, 83, 0.8), 0 0 60px rgba(0, 200, 83, 0.5);
          }
        }

        .btn-glow {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        * {
          max-width: 100%;
        }
      `}</style>

      {/* Container Principal - Fullscreen estilo Stories */}
      <div className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden">
        {/* Background - Imagem do Expert (placeholder por enquanto) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/ia-vicente/images/background%20lp%20cassino%20vicente.webp)',
            backgroundColor: '#1a1a1a', // Fallback caso a imagem não carregue
          }}
        />

        {/* Overlay Gradiente - Transparente no topo, Preto na base */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />

        {/* Conteúdo - Ancorado na parte inferior */}
        <div className="relative z-10 px-5 pb-10 pt-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Botão CTA - Destaque Principal */}
            <motion.a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow block w-full bg-[#00C853] hover:bg-[#00B248] text-white font-black text-lg sm:text-xl py-4 px-6 rounded-full transition-all duration-300 text-center uppercase tracking-wide"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ENTRAR AL GRUPO
            </motion.a>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white text-xl sm:text-2xl font-semibold leading-tight"
            >
              Lo que obtienes al unirte a nuestro{' '}
              <span className="text-[#00C853] font-black">Telegram</span>
            </motion.h1>

            {/* Lista de Benefícios */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  {/* Ícone Check Verde Neon */}
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle
                      className="w-6 h-6 text-[#00C853]"
                      strokeWidth={2.5}
                    />
                  </div>
                  
                  {/* Texto do Benefício */}
                  <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
                    {benefit}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </>
  );
}
