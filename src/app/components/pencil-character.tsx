"use client"

import { useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "./ui/button"
import { FootprintsIcon as Walking } from "lucide-react"

export default function PencilCharacter() {
  const [isWalking, setIsWalking] = useState(false)
  const [currentScene, setCurrentScene] = useState(0)
  const controls = useAnimation()
  const characterRef = useRef<HTMLDivElement>(null)

  // Scenes the character will walk through
  const scenes = [
    {
      id: "home",
      path: [
        { x: -100, y: 0 },
        { x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000, y: 0 },
      ],
    },
    {
      id: "about", 
      path: [
        { x: -100, y: 0 },
        { x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000, y: 0 },
      ],
    },
    {
      id: "projects",
      path: [
        { x: -100, y: 0 },
        { x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000, y: 0 },
      ],
    },
    {
      id: "journey",
      path: [
        { x: -100, y: 0 },
        { x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000, y: 0 },
      ],
    },
    {
      id: "writings",
      path: [
        { x: -100, y: 0 },
        { x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000, y: 0 },
      ],
    },
    {
      id: "recommendations",
      path: [
        { x: -100, y: 0 },
        { x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000, y: 0 },
      ],
    },
    {
      id: "dateMe",
      path: [
        { x: -100, y: 0 },
        { x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000, y: 0 },
      ],
    },
  ]

  // Start walking animation
  const startWalking = async () => {
    if (isWalking) return

    setIsWalking(true)

    // Scroll to the current scene
    const sceneElement = document.getElementById(scenes[currentScene].id)
    if (sceneElement) {
      sceneElement.scrollIntoView({ behavior: "smooth" })
    }

    // Start walking animation
    const path = scenes[currentScene].path

    // Animate character walking across the scene
    await controls.start({
      x: path[1].x,
      y: path[1].y,
      transition: {
        duration: 10,
        ease: "linear",
      },
    })

    // Move to next scene
    const nextScene = (currentScene + 1) % scenes.length
    setCurrentScene(nextScene)
    setIsWalking(false)

    // Reset position for next walk
    controls.set({ x: -100, y: 0 })
  }

  return (
    <>
      {/* Pencil character */}
      <motion.div
        ref={characterRef}
        className="fixed bottom-[20%] z-40 pointer-events-none"
        initial={{ x: -100, y: 0 }}
        animate={controls}
      >
        <div className="relative w-[100px] h-[200px]">
          <svg
            width="100"
            height="200"
            viewBox="0 0 100 200"
            className={`transform ${isWalking ? "animate-pencil-walk" : ""}`}
          >
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
            <line
              x1="40"
              y1="70"
              x2="20"
              y2={isWalking ? "60" : "80"}
              stroke="#2B2D42"
              strokeWidth="2"
              className={isWalking ? "animate-arm-swing" : ""}
            />
            <line
              x1="60"
              y1="70"
              x2="80"
              y2={isWalking ? "80" : "60"}
              stroke="#2B2D42"
              strokeWidth="2"
              className={isWalking ? "animate-arm-swing-reverse" : ""}
            />

            {/* Legs */}
            <line
              x1="45"
              y1="130"
              x2="30"
              y2={isWalking ? "160" : "170"}
              stroke="#2B2D42"
              strokeWidth="2"
              className={isWalking ? "animate-leg-swing" : ""}
            />
            <line
              x1="55"
              y1="130"
              x2="70"
              y2={isWalking ? "170" : "160"}
              stroke="#2B2D42"
              strokeWidth="2"
              className={isWalking ? "animate-leg-swing-reverse" : ""}
            />
          </svg>
        </div>
      </motion.div>

      {/* Keep walking button */}
      <div className="fixed bottom-5 left-5 z-50">
        <Button
          onClick={startWalking}
          disabled={isWalking}
          className="bg-[#83c5be] hover:bg-[#57a99a] text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg transition-all"
        >
          <Walking size={18} />
          Keep Walking
        </Button>
      </div>
    </>
  )
}

