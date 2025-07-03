"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function MagicalCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    if (typeof window === "undefined") return
    
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  useEffect(() => {
    const handleMouseOver = () => setCursorVariant("hover")
    const handleMouseOut = () => setCursorVariant("default")

    const buttons = document.querySelectorAll("button, a")
    buttons.forEach((button) => {
      button.addEventListener("mouseover", handleMouseOver)
      button.addEventListener("mouseout", handleMouseOut)
    })

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseover", handleMouseOver)
        button.removeEventListener("mouseout", handleMouseOut)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(131, 197, 190, 0.3)",
      height: 32,
      width: 32,
      borderRadius: "50%",
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: "rgba(242, 132, 130, 0.4)",
      height: 40,
      width: 40,
      borderRadius: "50%",
    },
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>
    </>
  )
}

