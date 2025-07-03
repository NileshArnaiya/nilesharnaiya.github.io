"use client"

import { useEffect, useRef, useMemo } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

export default function TravelerCharacter() {
  const controls = useAnimation()
  const characterRef = useRef<HTMLDivElement>(null)

  const travelItems = useMemo(() => [
    { 
      emoji: "🎒", 
      x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000, 
      y: 0, 
      delay: 0 
    },
    { 
      emoji: "🗺️", 
      x: typeof window !== "undefined" ? Math.random() * window.innerWidth * 0.7 : Math.random() * 700, 
      y: Math.random() * 100 + 50, 
      delay: 1 
    },
    { 
      emoji: "📸", 
      x: typeof window !== "undefined" ? Math.random() * window.innerWidth * 0.7 : Math.random() * 700, 
      y: Math.random() * 100 + 150, 
      delay: 2 
    },
    { 
      emoji: "🧭", 
      x: typeof window !== "undefined" ? Math.random() * window.innerWidth * 0.7 : Math.random() * 700, 
      y: Math.random() * 100 + 100, 
      delay: 3 
    },
    { 
      emoji: "🏔️", 
      x: typeof window !== "undefined" ? Math.random() * window.innerWidth * 0.7 : Math.random() * 700, 
      y: Math.random() * 100 + 200, 
      delay: 4 
    },
    { 
      emoji: "🎪", 
      x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000, 
      y: 50, 
      delay: 5 
    },
  ], [])

  useEffect(() => {
    const animateTraveler = async () => {
      // Initial position
      await controls.start({
        x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000,
        y: 0,
        transition: { duration: 0 },
      })

      // Sequence of movements
      while (true) {
        // Walk in from right
        await controls.start({
          x: typeof window !== "undefined" ? Math.random() * window.innerWidth * 0.7 : Math.random() * 700,
          transition: { duration: 7, ease: "linear" },
        })

        // Look around
        await controls.start({
          rotate: [0, 5, -5, 0],
          y: [0, -10, 0],
          transition: { duration: 3 },
        })

        // Walk out to left
        await controls.start({
          x: -100,
          transition: { duration: 7, ease: "linear" },
        })

        // Reset position
        await controls.start({
          x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000,
          transition: { duration: 0 },
        })
      }
    }

    animateTraveler()

    return () => {
      controls.stop()
    }
  }, [])

  return (
    <motion.div
      ref={characterRef}
      className="fixed bottom-[25%] z-30 pointer-events-none"
      initial={{ x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000, y: 0 }}
      animate={controls}
    >
      <div className="relative w-[100px] h-[180px]">
        <Image
          src="/placeholder.svg?height=180&width=100"
          alt="Traveler Character"
          width={100}
          height={180}
          className="object-contain"
        />
      </div>
    </motion.div>
  )
}

