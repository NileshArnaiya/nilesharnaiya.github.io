"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Code, GraduationCap, BookOpen, Star, Heart, Menu, X } from "lucide-react"
import { cn } from "../lib/utils"

interface NavigationProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function VerticalNavigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    
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

  const handleNavClick = (itemId: string) => {
    onNavigate(itemId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "hidden lg:flex fixed left-0 top-0 bottom-0 z-50 flex-col items-center justify-center px-4 py-8 w-20",
          isScrolled 
            ? "glass backdrop-blur-xl shadow-2xl border-r border-white/20" 
            : "bg-transparent",
        )}
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "group relative flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 overflow-hidden",
                activeSection === item.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "glass hover:glass text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400",
              )}
              onClick={() => handleNavClick(item.id)}
              aria-label={item.label}
            >
              <div className="relative z-10">
                {item.icon}
              </div>
              
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                initial={false}
                animate={{ opacity: activeSection === item.id ? 0.2 : 0 }}
              />
              
              {/* Tooltip */}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute left-full ml-4 px-3 py-2 rounded-lg glass text-sm whitespace-nowrap font-medium text-gray-800 dark:text-gray-200 shadow-lg"
              >
                {item.label}
              </motion.span>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn(
          "lg:hidden fixed top-6 left-6 z-50 p-3 rounded-2xl transition-all duration-300",
          isScrolled || isMobileMenuOpen
            ? "glass backdrop-blur-xl shadow-lg border border-white/20"
            : "bg-white/10 backdrop-blur-sm"
        )}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <motion.div
          animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          )}
        </motion.div>
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 glass backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="fixed left-0 top-0 bottom-0 w-80 max-w-[80vw] glass border-r border-white/20 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-20 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className={cn(
                      "w-full flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 text-left",
                      activeSection === item.id
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "glass hover:glass text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    )}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

