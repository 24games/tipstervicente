'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function RemainingSlots() {
  const [count, setCount] = useState(37)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    if (count <= 1) return

    const randomDelay = Math.floor(Math.random() * (7000 - 4000 + 1)) + 4000

    const timer = setTimeout(() => {
      setDirection(-1)
      setCount((prev) => prev - 1)
    }, randomDelay)

    return () => clearTimeout(timer)
  }, [count])

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Container do número - altura fixa para evitar layout shift */}
      <div className="relative h-[120px] sm:h-[160px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={count}
            initial={{ 
              opacity: 0, 
              y: direction > 0 ? -30 : 30,
              scale: 0.9
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1
            }}
            exit={{ 
              opacity: 0, 
              y: direction > 0 ? 30 : -30,
              scale: 0.9
            }}
            transition={{ 
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute"
          >
            <span 
              className="text-[120px] sm:text-[160px] font-black leading-none"
              style={{
                background: 'linear-gradient(180deg, #00FF7F 0%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 80px rgba(0, 255, 127, 0.5)',
                filter: 'drop-shadow(0 0 40px rgba(16, 185, 129, 0.6))',
              }}
            >
              {count}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtítulo */}
      <p className="text-white text-xs sm:text-sm font-bold tracking-[0.15em] uppercase opacity-90">
        ¡POCOS CUPOS DISPONIBLES!
      </p>
    </div>
  )
}

