'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const TELEGRAM_LINK = 'https://t.me/vicentetipstertelegrambot?start=w48356245';

export default function NBAVicentePage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
        
        * {
          font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(36, 161, 222, 0.5), 0 0 40px rgba(36, 161, 222, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(36, 161, 222, 0.8), 0 0 60px rgba(36, 161, 222, 0.5);
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
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background - Imagem NBA */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/nba-vicente/images/background%20nba%20web.webp)',
            backgroundColor: '#1a1a1a',
          }}
        />

        {/* Overlay Gradiente - Transparente no topo, Preto na base */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />

        {/* Conteúdo - Posicionado logo abaixo do peito do expert */}
        <div className="absolute z-10 px-5 w-full" style={{ top: 'calc(45% - 20px)' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight"
            >
              Deja que mi equipo y yo{' '}
              <span className="text-[#00C853]">hagamos la pega</span>
              {' '}por ti
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white text-base sm:text-lg md:text-xl leading-relaxed text-center"
            >
              15 especialistas gringos. Análisis de patrones 24/7. El grupo de NBA más grande de Chile{' '}
              <span className="text-2xl">🏀</span>
            </motion.p>

            {/* Botão CTA - Telegram */}
            <motion.a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow flex items-center justify-center gap-3 w-full bg-[#24A1DE] hover:bg-[#1E8FC7] text-white font-black text-lg sm:text-xl py-4 px-6 rounded-full transition-all duration-300 uppercase tracking-wide shadow-lg shadow-blue-500/50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Send className="w-5 h-5" strokeWidth={2.5} />
              ENTRAR AL GRUPO
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
