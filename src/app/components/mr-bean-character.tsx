"use client"

import { useEffect, useRef, useMemo } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

export default function MrBeanCharacter() {
  const controls = useAnimation()
  const characterRef = useRef<HTMLDivElement>(null)

  const randomObjects = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: typeof window !== "undefined" ? Math.random() * window.innerWidth * 0.8 : Math.random() * 800,
      y: Math.random() * 200 + 100,
      type: ['📱', '🎸', '🎨', '📚', '🎮', '⚽', '🎯', '🎪'][Math.floor(Math.random() * 8)],
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 3,
    }))
  , [])

  useEffect(() => {
    const animateBean = async () => {
      // Initial position
      await controls.start({
        x: -100,
        y: 0,
        transition: { duration: 0 },
      })

      // Sequence of movements
      while (true) {
        // Walk in
        await controls.start({
          x: Math.random() * window.innerWidth * 0.8,
          transition: { duration: 5, ease: "linear" },
        })

        // Do something funny
        await controls.start({
          rotate: [0, -10, 10, -10, 0],
          scale: [1, 1.1, 1],
          transition: { duration: 2 },
        })

        // Walk out
        await controls.start({
          x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000,
          transition: { duration: 5, ease: "linear" },
        })

        // Reset position
        await controls.start({
          x: -100,
          transition: { duration: 0 },
        })
      }
    }

    animateBean()

    return () => {
      controls.stop()
    }
  }, [])

  return (
    <motion.div
      ref={characterRef}
      className="fixed bottom-[20%] z-30 pointer-events-none"
      initial={{ x: -100, y: 0 }}
      animate={controls}
    >
      <div className="relative w-[120px] h-[200px]">
        <Image
          src="/placeholder.svg?height=200&width=120"
          alt="Mr. Bean Character"
          width={120}
          height={200}
          className="object-contain"
        />
      </div>
    </motion.div>
  )
}

