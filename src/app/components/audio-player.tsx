"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX, Play, Pause, Music } from "lucide-react"

interface AudioPlayerProps {
  enabled: boolean
  onToggle: () => void
}

export default function AudioPlayer({ enabled, onToggle }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [showControls, setShowControls] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      if (enabled && !isPlaying) {
        audioRef.current.play()
        setIsPlaying(true)
      } else if (!enabled && isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    }
  }, [enabled, volume])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setShowControls(true)}
      onHoverEnd={() => setShowControls(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main toggle button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="glass p-3 rounded-2xl border border-white/20 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
        onClick={onToggle}
        aria-label={enabled ? "Disable audio" : "Enable audio"}
      >
        <motion.div
          animate={{
            rotate: enabled ? 360 : 0,
            scale: enabled ? [1, 1.2, 1] : 1,
          }}
          transition={{
            rotate: { duration: 0.5 },
            scale: { duration: 0.3 },
          }}
        >
          {enabled ? (
            <Volume2 className="h-5 w-5 text-purple-600 group-hover:text-purple-700" />
          ) : (
            <VolumeX className="h-5 w-5 text-gray-500 group-hover:text-gray-600" />
          )}
        </motion.div>

        {/* Animated sound waves */}
        <AnimatePresence>
          {enabled && (
            <motion.div
              className="absolute -top-1 -right-1 flex space-x-0.5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full"
                  animate={{
                    height: [4, 8, 4],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Extended controls panel */}
      <AnimatePresence>
        {showControls && enabled && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 glass p-4 rounded-2xl border border-white/20 backdrop-blur-xl shadow-xl min-w-[200px]"
          >
            <div className="flex items-center space-x-3 mb-3">
              <Music className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Background Music
              </span>
            </div>

            <div className="flex items-center space-x-3 mb-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlayPause}
                className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                <motion.div
                  animate={{ rotate: isPlaying ? 0 : 90 }}
                  transition={{ duration: 0.3 }}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </motion.div>
              </motion.button>

              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <VolumeX className="h-3 w-3 text-gray-400" />
                  <div className="flex-1 relative">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <motion.div
                      className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg pointer-events-none"
                      style={{ width: `${volume * 100}%` }}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <Volume2 className="h-3 w-3 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 text-center">
              Ambient soundscape
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/music/placeholder.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </motion.div>
  )
}

