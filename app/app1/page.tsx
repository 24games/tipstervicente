export default function App1Page() {
  return (
    <div 
      className="min-h-screen relative flex items-center justify-center px-4 py-12 md:py-20"
      style={{
        backgroundImage: 'url(/app1/images/background-dobra-1.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay escuro para melhor legibilidade */}
      <div className="absolute inset-0 bg-black/60"></div>
      
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
            transform: translateX(-100%) rotate(25deg);
          }
          100% {
            transform: translateX(200%) rotate(25deg);
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
          left: -50%;
          width: 30%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.8),
            transparent
          );
          animation: shimmer 2s ease-in-out infinite;
          animation-delay: 0s;
        }
      `}</style>
      
      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center space-y-6 md:space-y-8">
        
        {/* Imagem acima da headline */}
        <div className="mb-8 md:mb-12">
          <img 
            src="/app1/images/todo o resto.png" 
            alt="App IA Casino"
            className="w-48 sm:w-56 md:w-64 lg:w-80 h-auto mx-auto drop-shadow-2xl"
          />
        </div>

        {/* HEADLINE PRINCIPAL - Mais curta */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white drop-shadow-2xl px-4"
          style={{ fontFamily: "'Grift', sans-serif" }}
        >
          ¡Convierte $17.000 en $170.000 con{' '}
          <span className="gradient-animated">
            IA del casino!
          </span>
        </h1>

        {/* SUB HEADLINE */}
        <p 
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed drop-shadow-lg px-4 mt-6"
          style={{ fontFamily: "'Grift', sans-serif" }}
        >
          👇 Toca el botón de abajo y descarga la{' '}
          <span className="gradient-animated">app gratuita</span> con{' '}
          <span className="gradient-animated">inteligencia artificial</span> y operaciones EN VIVO.
        </p>

        {/* BOTÃO CTA */}
        <div className="pt-8 md:pt-12">
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

