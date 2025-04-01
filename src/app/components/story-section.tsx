"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <div ref={containerRef} className="min-h-screen w-full overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e6f7ff] to-[#caf0f8]" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-ghibli text-[#2b2d42] mb-8">My Story</h2>
          <p className="text-xl text-[#2b2d42] mb-6">
            Welcome to my world, where education meets innovation and curiosity never ends.
          </p>
          <p className="text-lg text-[#2b2d42]">Scroll down to explore the different chapters of my journey.</p>
        </div>
      </motion.div>
    </div>
  )
}

