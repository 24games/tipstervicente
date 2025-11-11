import type { Metadata, Viewport } from 'next'
import RemainingSlots from './components/RemainingSlots'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Vicente Mines 💣 - Grupo VIP',
  description: '¡ÚLTIMOS CUPOS GRATUITOS! Asegura el tuyo ya',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function MinesVicentePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center px-4 py-8 sm:py-12">
      {/* Gradiente de fundo */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #06080E 100%)',
        }}
      />
      
      {/* Glow azul radial no centro */}
      <div 
        className="absolute z-0 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, rgba(37, 99, 235, 0.2) 30%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center max-w-xl w-full space-y-6 sm:space-y-8">
        
        {/* Número grande de cupos restantes */}
        <RemainingSlots />

        {/* Foto circular com glow azul */}
        <div className="relative mt-4">
          <div 
            className="absolute inset-0 rounded-full opacity-70"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
              filter: 'blur(20px)',
              transform: 'scale(1.1)',
            }}
          />
          <div 
            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-[3px]"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
              boxShadow: '0 0 40px rgba(37, 99, 235, 0.6), 0 0 80px rgba(96, 165, 250, 0.3)',
            }}
          >
            <div className="w-full h-full rounded-full bg-black p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <Image
                  src="/images/icone vicente.png"
                  alt="Vicente Mines"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Nome */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mt-2">
          Vicente Mines 💣
        </h1>

        {/* Linha de destaque com emoji de fogo */}
        <div 
          className="px-6 py-3 rounded-full text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.15) 0%, rgba(251, 191, 36, 0.1) 100%)',
            border: '1px solid rgba(250, 204, 21, 0.3)',
            boxShadow: '0 0 30px rgba(250, 204, 21, 0.2), inset 0 0 20px rgba(250, 204, 21, 0.05)',
          }}
        >
          <p className="text-sm sm:text-base font-bold tracking-wide uppercase">
            <span className="text-neon-yellow">🔥</span>
            {' '}
            <span 
              style={{
                background: 'linear-gradient(90deg, #FACC15 0%, #FFFFFF 50%, #FACC15 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ¡ÚLTIMOS CUPOS GRATUITOS! ¡ASEGURA EL TUYO YA!
            </span>
          </p>
        </div>

        {/* Linha pequena com instrução */}
        <p className="text-white text-sm sm:text-base font-medium opacity-80 text-center">
          HAZ CLIC EN EL BOTÓN DE ABAJO👇
        </p>

        {/* Seta verde animada */}
        <div className="animate-breathing">
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_8px_rgba(0,255,127,0.6)]"
          >
            <path 
              d="M12 5V19M12 19L19 12M12 19L5 12" 
              stroke="url(#greenGradient)" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="greenGradient" x1="12" y1="5" x2="12" y2="19" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00FF7F" />
                <stop offset="1" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Botão principal com glow azul */}
        <a
          href="https://t.me/+-RVi0AhIjw9iMTAx"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Entrar al grupo VIP"
          className="group relative w-full sm:w-auto"
        >
          <div 
            className="absolute inset-0 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
              filter: 'blur(20px)',
              transform: 'scale(1.05)',
            }}
          />
          <button
            className="relative w-full flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg uppercase tracking-wide text-white transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.99]"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
              boxShadow: '0 8px 32px rgba(37, 99, 235, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Ícone de play/entrar */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:scale-110"
            >
              <path 
                d="M8 5V19L19 12L8 5Z" 
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Entrar al grupo vip</span>
          </button>
        </a>

      </div>
    </main>
  )
}

