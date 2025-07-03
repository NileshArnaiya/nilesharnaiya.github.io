"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import { Button } from "./ui/button"

export default function GhibliScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; speed: number; opacity: number }[]>([])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Enhanced parallax effects
  const mountainsY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -150])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  useEffect(() => {
    if (typeof window === "undefined") return
    
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }))
    setParticles(newParticles)

    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          y: particle.y - particle.speed,
          x: particle.x + Math.sin(particle.y * 0.01) * 0.5,
        })).filter(particle => particle.y > -10)
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="h-screen w-full overflow-hidden relative">
      {/* Enhanced gradient background with animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 animate-gradient"
        animate={{
          background: [
            "linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)",
            "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
            "linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
            }}
            animate={{
              y: [null, -100],
              opacity: [particle.opacity, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Distant mountains with enhanced design */}
      <motion.div className="absolute bottom-[30%] left-0 w-full h-[400px]" style={{ y: mountainsY }}>
        <svg width="100%" height="100%" viewBox="0 0 1920 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mountain1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.7 }} />
              <stop offset="100%" style={{ stopColor: "#6366f1", stopOpacity: 0.4 }} />
            </linearGradient>
            <linearGradient id="mountain2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#7c3aed", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#4f46e5", stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path d="M0,400 L0,200 Q480,100 960,250 Q1440,350 1920,150 L1920,400 Z" fill="url(#mountain1)" />
          <path d="M0,400 L0,250 Q480,150 960,300 Q1440,400 1920,200 L1920,400 Z" fill="url(#mountain2)" />
        </svg>
      </motion.div>

      {/* Foreground hills with gradients */}
      <motion.div className="absolute bottom-0 left-0 w-full h-[500px]" style={{ y: foregroundY }}>
        <svg width="100%" height="100%" viewBox="0 0 1920 500" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hill1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#10b981", stopOpacity: 0.9 }} />
              <stop offset="100%" style={{ stopColor: "#059669", stopOpacity: 0.8 }} />
            </linearGradient>
            <linearGradient id="hill2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#34d399", stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: "#10b981", stopOpacity: 0.9 }} />
            </linearGradient>
          </defs>
          <path d="M0,500 L0,250 Q480,300 960,200 Q1440,100 1920,250 L1920,500 Z" fill="url(#hill1)" />
          <path d="M0,500 L0,350 Q480,400 960,300 Q1440,200 1920,350 L1920,500 Z" fill="url(#hill2)" />
        </svg>
      </motion.div>

      {/* Enhanced title and intro text */}
      <motion.div 
        className="absolute top-[25%] left-0 w-full text-center z-10 px-6" 
        style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
      >
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-white drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Nilesh Jain
          </motion.span>
          <br />
          <motion.span
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            / Arnaiya
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto px-4 text-white/90 font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            Researcher • Founder • Educator • Lifelong Learner
          </span>
        </motion.p>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Button
          variant="outline"
          size="lg"
          className="rounded-full glass border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-110 group"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center space-x-2"
          >
            <Sparkles className="h-4 w-4" />
            <ArrowDown className="h-5 w-5" />
            <span className="hidden sm:inline">Explore</span>
          </motion.div>
        </Button>
      </motion.div>

      {/* Enhanced animated elements */}
      <svg className="absolute top-[15%] left-[15%] w-full h-full pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <g key={i} className="animate-fly-1" style={{ 
            animationDelay: `${i * 2}s`, 
            transform: `translate(${i * 80}px, ${i * 20}px)` 
          }}>
            <motion.path 
              d="M0,0 Q8,8 16,0 Q24,8 32,0" 
              stroke="rgba(255,255,255,0.6)" 
              strokeWidth="2" 
              fill="none"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

