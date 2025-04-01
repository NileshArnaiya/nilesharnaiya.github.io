"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

export default function MrBeanCharacter() {
  const controls = useAnimation()
  const characterRef = useRef<HTMLDivElement>(null)

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
          x: window.innerWidth + 100,
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

