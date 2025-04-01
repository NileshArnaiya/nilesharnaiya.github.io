"use client"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Nilesh Jain / Arnaiya</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Researcher at Yale • Founder • Educator • Lifelong Learner
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="outline"
          size="lg"
          className="rounded-full animate-bounce"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <ArrowDown className="h-5 w-5" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </motion.div>
    </div>
  )
}

