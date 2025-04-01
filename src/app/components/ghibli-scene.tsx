"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "./ui/button"

export default function GhibliScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Parallax effects
  const mountainsY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -20])
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="h-screen w-full overflow-hidden relative">
      {/* Sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#a2d2ff] to-[#e6f7ff]" />

      {/* Distant mountains - using SVG instead of placeholder image */}
      <motion.div className="absolute bottom-[30%] left-0 w-full h-[300px]" style={{ y: mountainsY }}>
        <svg width="100%" height="100%" viewBox="0 0 1920 300" preserveAspectRatio="none">
          <path d="M0,300 L0,150 Q480,50 960,200 Q1440,300 1920,100 L1920,300 Z" fill="#83c5be" opacity="0.6" />
          <path d="M0,300 L0,200 Q480,100 960,250 Q1440,350 1920,150 L1920,300 Z" fill="#577590" opacity="0.4" />
        </svg>
      </motion.div>

      {/* Foreground with stylized hills - using SVG instead of placeholder image */}
      <motion.div className="absolute bottom-0 left-0 w-full h-[400px]" style={{ y: foregroundY }}>
        <svg width="100%" height="100%" viewBox="0 0 1920 400" preserveAspectRatio="none">
          <path d="M0,400 L0,200 Q480,250 960,150 Q1440,50 1920,200 L1920,400 Z" fill="#90be6d" opacity="0.8" />
          <path d="M0,400 L0,300 Q480,350 960,250 Q1440,150 1920,300 L1920,400 Z" fill="#43aa8b" opacity="0.9" />
        </svg>
      </motion.div>

      {/* Title and intro text */}
      <motion.div 
        className="absolute top-[30%] left-0 w-full text-center z-10" 
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Nilesh Jain / Arnaiya
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4 text-foreground/80">
          Researcher at Yale • Founder • Educator • Lifelong Learner
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Button
          variant="outline"
          size="lg"
          className="rounded-full animate-bounce bg-background/20 backdrop-blur-sm border-foreground/20 text-foreground hover:bg-background/30"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <ArrowDown className="h-5 w-5" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </motion.div>

      {/* Animated birds */}
      <svg className="absolute top-[20%] left-[20%] w-full h-full pointer-events-none">
        <g className="animate-fly-1">
          <path d="M0,0 Q5,5 10,0 Q15,5 20,0" stroke="currentColor" className="text-foreground" strokeWidth="2" fill="none" />
        </g>
        <g className="animate-fly-2" style={{ transformOrigin: "30px 30px", transform: "translate(30px, 30px)" }}>
          <path d="M0,0 Q4,4 8,0 Q12,4 16,0" stroke="currentColor" className="text-foreground" strokeWidth="2" fill="none" />
        </g>
        <g className="animate-fly-3" style={{ transformOrigin: "60px 20px", transform: "translate(60px, 20px)" }}>
          <path d="M0,0 Q6,6 12,0 Q18,6 24,0" stroke="currentColor" className="text-foreground" strokeWidth="2" fill="none" />
        </g>
      </svg>
    </div>
  )
}

