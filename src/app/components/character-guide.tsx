"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

export default function CharacterGuide({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-20 right-5 z-50 w-80 bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-[#83c5be] p-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-ghibli text-[#2b2d42]">Your Guide</h3>
        <button onClick={onClose} className="text-[#6c757d] hover:text-[#2b2d42]">
          <X size={18} />
        </button>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-[#83c5be]/30">
          <Image
            src="/placeholder.svg?height=64&width=64"
            alt="Guide Character"
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-[#2b2d42]">Totoro</h4>
          <p className="text-sm text-[#6c757d]">Your friendly guide</p>
        </div>
      </div>

      <p className="text-[#2b2d42] mb-4">
        Welcome to my magical world! Scroll through the different scenes to learn about me, or use the navigation dots
        on the left.
      </p>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#f28482]"></div>
          <span className="text-sm text-[#2b2d42]">Home</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#83c5be]"></div>
          <span className="text-sm text-[#2b2d42]">About Me</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#83c5be]"></div>
          <span className="text-sm text-[#2b2d42]">Projects</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#83c5be]"></div>
          <span className="text-sm text-[#2b2d42]">Journey</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#83c5be]"></div>
          <span className="text-sm text-[#2b2d42]">Writings</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#83c5be]"></div>
          <span className="text-sm text-[#2b2d42]">Recommendations</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#83c5be]"></div>
          <span className="text-sm text-[#2b2d42]">Date Me</span>
        </div>
      </div>
    </motion.div>
  )
}

