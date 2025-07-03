"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { Button } from "./ui/button"
import { FootprintsIcon as Walking } from "lucide-react"

export default function WalkingCharacter() {
  const [isWalking, setIsWalking] = useState(false)
  const [position, setPosition] = useState({ x: -100, y: 0 })
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

  // Walking animation frames
  const walkingFrames = [
    "/placeholder.svg?height=150&width=80", // Replace with actual walking animation frames
    "/placeholder.svg?height=150&width=80",
    "/placeholder.svg?height=150&width=80",
    "/placeholder.svg?height=150&width=80",
  ]

  const [currentFrame, setCurrentFrame] = useState(0)

  // Handle walking animation frames
  useEffect(() => {
    if (!isWalking) return

    const frameInterval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % walkingFrames.length)
    }, 200) // Change frame every 200ms

    return () => clearInterval(frameInterval)
  }, [isWalking, walkingFrames.length])

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
    setPosition(path[0])

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
    setPosition({ x: -100, y: 0 })
  }

  return (
    <>
      {/* Walking character */}
      <motion.div
        ref={characterRef}
        className="fixed bottom-[20%] z-40 pointer-events-none"
        initial={{ x: position.x, y: position.y }}
        animate={controls}
      >
        <div className="relative w-[80px] h-[150px]">
          <Image
            src={walkingFrames[currentFrame] || "/placeholder.svg"}
            alt="Walking character"
            width={80}
            height={150}
            className="object-contain"
          />
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

