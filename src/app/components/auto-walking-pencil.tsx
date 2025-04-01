"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

export default function AutoWalkingPencil() {
  const [isWalking, setIsWalking] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)
  const controls = useAnimation()
  const characterRef = useRef<HTMLDivElement>(null)

  // Define the path for the character to walk
  const walkPaths = [
    { x: typeof window !== "undefined" ? window.innerWidth + 100 : 0, y: 0, duration: 15 },
    { x: -100, y: 0, duration: 15 },
    { x: typeof window !== "undefined" ? window.innerWidth + 100 : 0, y: 0, duration: 15 },
    { x: -100, y: 0, duration: 15 },
    { x: typeof window !== "undefined" ? window.innerWidth + 100 : 0, y: 0, duration: 15 },
    { x: -100, y: 0, duration: 15 },
    { x: typeof window !== "undefined" ? window.innerWidth + 100 : 0, y: 0, duration: 15 },
  ]

  // Start walking animation on component mount
  useEffect(() => {
    const walkSequence = async () => {
      for (let i = 0; i < walkPaths.length; i++) {
        const path = walkPaths[i]

        // Flip the character based on direction
        if (characterRef.current) {
          characterRef.current.style.transform = path.x > 0 ? "scaleX(1)" : "scaleX(-1)"
        }

        // Animate walking
        await controls.start({
          x: path.x,
          transition: {
            duration: path.duration,
            ease: "linear",
          },
        })

        // Move to next section
        setCurrentSection((prev) => (prev + 1) % walkPaths.length)
      }

      // Restart the sequence
      walkSequence()
    }

    walkSequence()

    // Clean up
    return () => {
      controls.stop()
    }
  }, [])

  return (
    <motion.div
      ref={characterRef}
      className="fixed bottom-[15%] z-40 pointer-events-none ml-16"
      initial={{ x: -100, y: 0 }}
      animate={controls}
    >
      <div className="relative w-[100px] h-[200px]">
        <svg width="100" height="200" viewBox="0 0 100 200" className="animate-pencil-walk">
          {/* Pencil body */}
          <rect x="40" y="30" width="20" height="100" fill="#F9C74F" stroke="#2B2D42" strokeWidth="2" />

          {/* Pencil tip */}
          <polygon points="40,130 60,130 50,150" fill="#F28482" stroke="#2B2D42" strokeWidth="2" />

          {/* Pencil eraser */}
          <rect x="40" y="20" width="20" height="10" fill="#F72585" stroke="#2B2D42" strokeWidth="2" />

          {/* Face */}
          <circle cx="50" cy="50" r="15" fill="#FFFFFF" stroke="#2B2D42" strokeWidth="2" />

          {/* Eyes */}
          <circle cx="45" cy="45" r="2" fill="#2B2D42" />
          <circle cx="55" cy="45" r="2" fill="#2B2D42" />

          {/* Smile */}
          <path d="M45,55 Q50,60 55,55" fill="none" stroke="#2B2D42" strokeWidth="2" />

          {/* Arms */}
          <line x1="40" y1="70" x2="20" y2="60" stroke="#2B2D42" strokeWidth="2" className="animate-arm-swing" />
          <line
            x1="60"
            y1="70"
            x2="80"
            y2="80"
            stroke="#2B2D42"
            strokeWidth="2"
            className="animate-arm-swing-reverse"
          />

          {/* Legs */}
          <line x1="45" y1="130" x2="30" y2="160" stroke="#2B2D42" strokeWidth="2" className="animate-leg-swing" />
          <line
            x1="55"
            y1="130"
            x2="70"
            y2="170"
            stroke="#2B2D42"
            strokeWidth="2"
            className="animate-leg-swing-reverse"
          />
        </svg>
      </div>
    </motion.div>
  )
}

