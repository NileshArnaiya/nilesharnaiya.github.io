"use client"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-blue-500/20 mix-blend-overlay z-[1]" />
        <div className="absolute inset-0 backdrop-blur-[2px] z-[2]" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/images/Animated_Elephant_s_Magical_Forest_Walk.mp4" type="video/mp4" />
        </video>
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0" style={{ zIndex: -1 }}>
          <Image
            src="/images/Area.gif"
            alt="Magical Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-8 py-10 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Hi, I'm Nilesh Jain / Arnaiya
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90 drop-shadow-lg">
            Researcher at Yale • Founder • Educator • Lifelong Learner
          </p>
        </motion.div>
      </div>

      {/* Scroll Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Button
          variant="outline"
          size="lg"
          className="rounded-full animate-bounce bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30 hover:border-white/50 text-white"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          }}
        >
          <ArrowDown className="h-5 w-5" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </motion.div>
    </div>
  )
}

