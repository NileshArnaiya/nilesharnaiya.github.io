"use client"

import { useState, useEffect } from "react"
import { BookOpen, Code, Film, Globe, GraduationCap, Heart, Home, Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { motion } from "framer-motion"
import { cn } from "../lib/utils"

interface NavigationProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
    { id: "about", label: "About", icon: <Globe className="h-4 w-4" /> },
    { id: "projects", label: "Projects", icon: <Code className="h-4 w-4" /> },
    { id: "journey", label: "Journey", icon: <GraduationCap className="h-4 w-4" /> },
    { id: "writings", label: "Writings", icon: <BookOpen className="h-4 w-4" /> },
    { id: "recommendations", label: "Recommendations", icon: <Film className="h-4 w-4" /> },
    { id: "dateMe", label: "Date Me", icon: <Heart className="h-4 w-4" /> },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold"
        >
          Nilesh Jain / Arnaiya
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={cn("flex items-center gap-1", activeSection === item.id && "bg-black/5")}
              onClick={() => onNavigate(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col gap-2 mt-8">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={cn("justify-start", activeSection === item.id && "bg-black/5")}
                  onClick={() => {
                    onNavigate(item.id)
                    setIsOpen(false)
                  }}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

