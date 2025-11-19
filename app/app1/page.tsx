'use client';

export default function App1Page() {
  return (
    <div 
      className="min-h-screen relative flex items-start justify-center px-4 py-12 md:py-20"
      style={{
        backgroundImage: 'url(/app1/images/background-de-fato.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay leve para escurecer um pouco o background */}
      <div className="absolute inset-0 bg-black/15"></div>
      
      {/* Animações CSS */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
        
        @keyframes fire-flicker {
          0%, 100% {
            transform: scale(1) rotate(-2deg);
            filter: brightness(1) drop-shadow(0 0 8px rgba(255, 100, 0, 0.8));
          }
          25% {
            transform: scale(1.1) rotate(2deg);
            filter: brightness(1.3) drop-shadow(0 0 12px rgba(255, 150, 0, 1));
          }
          50% {
            transform: scale(0.95) rotate(-1deg);
            filter: brightness(0.9) drop-shadow(0 0 6px rgba(255, 80, 0, 0.7));
          }
          75% {
            transform: scale(1.08) rotate(1deg);
            filter: brightness(1.2) drop-shadow(0 0 10px rgba(255, 120, 0, 0.9));
          }
        }
        
        .fire-animated {
          display: inline-block;
          animation: fire-flicker 1.5s ease-in-out infinite;
        }
        
        .gradient-animated {
          background: linear-gradient(
            90deg,
            #10b981 0%,
            #34d399 25%,
            #6ee7b7 50%,
            #34d399 75%,
            #10b981 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite;
          filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.8));
        }
        
        .button-shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .button-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 30%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.8),
            transparent
          );
          transform: translateX(-100%);
          animation: shimmer 2.5s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>
      
      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center space-y-6 md:space-y-8">
        
        {/* HEADLINE PRINCIPAL - Com espaço superior para a imagem do background */}
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white drop-shadow-2xl px-4"
          style={{ fontFamily: "'Teko', 'Black Ops One', sans-serif", marginTop: '350px' }}
        >
          ¡Convierte $17.000 en $170.000 con{' '}
          <span className="gradient-animated">
            IA del casino!
          </span>
        </h1>

        {/* SUB HEADLINE */}
        <p 
          className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-relaxed drop-shadow-lg px-4 mt-6"
          style={{ fontFamily: "'Teko', 'Black Ops One', sans-serif" }}
        >
          👇 Toca el botón de abajo y descarga la{' '}
          <span className="gradient-animated">app gratuita</span> con{' '}
          <span className="gradient-animated">inteligencia artificial</span> y operaciones EN VIVO.
        </p>

        {/* BOTÃO CTA */}
        <div className="pt-4 md:pt-6">
          <a
            href="#download"
            className="button-shimmer inline-flex items-center gap-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white text-2xl sm:text-3xl md:text-4xl font-black py-5 px-10 md:py-6 md:px-14 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-green-500/50 hover:shadow-green-600/70 uppercase tracking-wide"
            style={{ fontFamily: "'Teko', 'Black Ops One', sans-serif" }}
          >
            <svg 
              className="w-7 h-7 md:w-8 md:h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
            Descargar Ahora
          </a>
        </div>

        {/* Badge de Grátis */}
        <div className="pt-4">
          <span 
            className="inline-flex items-center gap-2 text-white text-lg sm:text-xl md:text-2xl font-black uppercase tracking-wider drop-shadow-2xl"
            style={{ fontFamily: "'Teko', 'Black Ops One', sans-serif" }}
          >
            <span className="fire-animated text-2xl sm:text-3xl">🔥</span>
            100% Gratis
          </span>
        </div>

      </div>
    </div>
  );
}

