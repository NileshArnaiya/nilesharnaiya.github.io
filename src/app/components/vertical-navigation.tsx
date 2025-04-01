"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, Code, GraduationCap, BookOpen, Star, Heart } from "lucide-react"
import { cn } from "../lib/utils"

interface NavigationProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function VerticalNavigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="h-5 w-5" /> },
    { id: "about", label: "About", icon: <User className="h-5 w-5" /> },
    { id: "projects", label: "Projects", icon: <Code className="h-5 w-5" /> },
    { id: "journey", label: "Journey", icon: <GraduationCap className="h-5 w-5" /> },
    { id: "writings", label: "Writings", icon: <BookOpen className="h-5 w-5" /> },
    { id: "recommendations", label: "Recommendations", icon: <Star className="h-5 w-5" /> },
    { id: "dateMe", label: "Date Me", icon: <Heart className="h-5 w-5" /> },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed left-0 top-0 bottom-0 z-50 flex flex-col items-center justify-center px-3 py-8",
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent",
      )}
    >
      <div className="flex flex-col space-y-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={cn(
              "group flex flex-col items-center justify-center p-3 rounded-full transition-all duration-300",
              activeSection === item.id
                ? "bg-[#83c5be] text-white"
                : "bg-white/80 text-[#2b2d42] hover:bg-[#83c5be]/20",
            )}
            onClick={() => onNavigate(item.id)}
            aria-label={item.label}
          >
            {item.icon}
            <span
              className={cn(
                "absolute left-16 px-2 py-1 rounded bg-white shadow-md text-sm whitespace-nowrap opacity-0 transform translate-x-2 transition-all duration-300",
                "group-hover:opacity-100 group-hover:translate-x-0",
              )}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </motion.nav>
  )
}

