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
            transform: translateX(-150%) rotate(25deg);
          }
          50% {
            transform: translateX(150%) rotate(25deg);
          }
          100% {
            transform: translateX(150%) rotate(25deg);
          }
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
          top: -50%;
          left: -100%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.9),
            transparent
          );
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
      
      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center space-y-6 md:space-y-8">
        
        {/* HEADLINE PRINCIPAL - Com espaço superior para a imagem do background */}
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white drop-shadow-2xl px-4"
          style={{ fontFamily: "'Grift', sans-serif", marginTop: '350px' }}
        >
          ¡Convierte $17.000 en $170.000 con{' '}
          <span className="gradient-animated">
            IA del casino!
          </span>
        </h1>

        {/* SUB HEADLINE */}
        <p 
          className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-relaxed drop-shadow-lg px-4 mt-6"
          style={{ fontFamily: "'Grift', sans-serif" }}
        >
          👇 Toca el botón de abajo y descarga la{' '}
          <span className="gradient-animated">app gratuita</span> con{' '}
          <span className="gradient-animated">inteligencia artificial</span> y operaciones EN VIVO.
        </p>

        {/* BOTÃO CTA */}
        <div className="pt-4 md:pt-6">
          <a
            href="#download"
            className="button-shimmer inline-flex items-center gap-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white text-xl sm:text-2xl md:text-3xl font-black py-5 px-10 md:py-6 md:px-14 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-green-500/50 hover:shadow-green-600/70 uppercase tracking-wide"
            style={{ fontFamily: "'Grift', sans-serif" }}
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
            className="inline-block bg-yellow-400 text-black text-sm sm:text-base md:text-lg font-black px-6 py-2 rounded-full uppercase tracking-wider shadow-lg"
            style={{ fontFamily: "'Grift', sans-serif" }}
          >
            🔥 100% Gratis
          </span>
        </div>

      </div>
    </div>
  );
}

