'use client';

import { useState, useEffect } from 'react';

export default function App1Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  // Carrossel automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
    {/* DOBRA 1 */}
    <div 
      className="min-h-screen relative flex items-start justify-center px-4 py-12 md:py-20"
      style={{
        backgroundImage: 'url(/app1/images/background-dobra-1-novo.webp)',
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
          ¡Convierte $17.000 en $170.000 con el{' '}
          <span className="gradient-animated">
            app del casino!
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

    {/* DOBRA 2 - Funcionalidades del App */}
    <div 
      className="min-h-screen relative flex items-center justify-center px-4 py-16 md:py-24"
      style={{
        backgroundImage: 'url(/app1/images/background-dobra-2.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Conteúdo Dobra 2 */}
      <div className="relative z-10 max-w-6xl w-full mx-auto text-center space-y-8 md:space-y-12">
        
        {/* Headline */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white drop-shadow-2xl px-4"
          style={{ fontFamily: "'Teko', 'Black Ops One', sans-serif" }}
        >
          <span className="gradient-animated">
            Funcionalidades del App
          </span>
        </h2>

        {/* Sub headline */}
        <p 
          className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-relaxed drop-shadow-lg px-4 max-w-4xl mx-auto"
          style={{ fontFamily: "'Teko', 'Black Ops One', sans-serif" }}
        >
          Descubre todas las herramientas que te ayudarán a{' '}
          <span className="gradient-animated">maximizar tus ganancias</span> con{' '}
          <span className="gradient-animated">inteligencia artificial</span> de última generación.
        </p>

        {/* Carrossel de Funcionalidades */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden mt-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slides - Imagens do carrossel */}
            {[
              'carrosel-1.jpeg',
              'carrossel-2.jpeg',
              'carrossel-3.jpeg',
              'carrossel-4.jpeg'
            ].map((imgName, index) => (
              <div key={index} className="min-w-full flex items-center justify-center px-4">
                <div className="w-full max-w-md">
                  <img
                    src={`/app1/images/${imgName}`}
                    alt={`Funcionalidad ${index + 1}`}
                    className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores de slide */}
          <div className="flex justify-center gap-3 mt-6">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-green-500 w-8'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Botão CTA */}
        <div className="pt-8">
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

      </div>
    </div>

    {/* DOBRA 3 - Sobre o Criador */}
    <div 
      className="min-h-screen relative flex items-center justify-center px-4 py-16 md:py-24"
      style={{
        background: 'linear-gradient(135deg, #064e3b 0%, #065f46 25%, #047857 50%, #059669 75%, #10b981 100%)',
      }}
    >
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Animações CSS para a dobra 3 */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
      `}</style>

      {/* Conteúdo Dobra 3 */}
      <div className="relative z-10 max-w-5xl w-full mx-auto text-center space-y-10 md:space-y-12">
        
        {/* Headline Dobra 3 */}
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white drop-shadow-2xl px-4 animate-fade-in-up"
          style={{ fontFamily: "'Teko', 'Black Ops One', sans-serif" }}
        >
          El creador de la{' '}
          <span className="gradient-animated">
            IA #1 en Chile
          </span>
        </h2>

        {/* Lista de Benefícios */}
        <div className="space-y-6 md:space-y-8 px-4 max-w-4xl mx-auto">
          
          {/* Item 1 */}
          <div className="flex items-start gap-4 text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl animate-slide-in-left delay-100">
            <div className="flex-shrink-0 text-3xl md:text-4xl">✅</div>
            <p 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed"
              style={{ fontFamily: "'Teko', 'Black Ops One', sans-serif" }}
            >
              Responsable de ayudar a más de{' '}
              <span className="gradient-animated">200 jugadores</span> todos los días a ganar en vivo.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4 text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl animate-slide-in-left delay-200">
            <div className="flex-shrink-0 text-3xl md:text-4xl">✅</div>
            <p 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed"
              style={{ fontFamily: "'Teko', 'Black Ops One', sans-serif" }}
            >
              Primer apostador de Chile en ganar{' '}
              <span className="gradient-animated">CLP$500.000.000</span> en vivo junto a mis alumnos.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4 text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl animate-slide-in-left delay-300">
            <div className="flex-shrink-0 text-3xl md:text-4xl">✅</div>
            <p 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed"
              style={{ fontFamily: "'Teko', 'Black Ops One', sans-serif" }}
            >
              Más de{' '}
              <span className="gradient-animated">3 años</span> aplicando estrategias que generan ingresos para{' '}
              <span className="gradient-animated">miles de chilenos</span> a diario.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-4 text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl animate-slide-in-left delay-400">
            <div className="flex-shrink-0 text-3xl md:text-4xl">✅</div>
            <p 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed"
              style={{ fontFamily: "'Teko', 'Black Ops One', sans-serif" }}
            >
              Mi{' '}
              <span className="gradient-animated">inteligencia artificial</span> aplica todo mi análisis y entrega más de{' '}
              <span className="gradient-animated">150 señales diarias</span> en mi app.
            </p>
          </div>

        </div>

        {/* CTA Repetido */}
        <div className="pt-8 animate-fade-in-up delay-500">
          <a
            href="#download"
            className="button-shimmer inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-green-700 text-2xl sm:text-3xl md:text-4xl font-black py-5 px-10 md:py-6 md:px-14 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/30 uppercase tracking-wide"
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

      </div>
    </div>
    </>
  );
}

