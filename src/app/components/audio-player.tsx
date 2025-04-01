"use client"

import { useRef, useEffect, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function AudioPlayer({
  enabled,
  onToggle,
}: {
  enabled: boolean
  onToggle: () => void
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [audioLoaded, setAudioLoaded] = useState(false)

  useEffect(() => {
    // Create audio element
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/placeholder.mp3")
      audioRef.current.loop = true
      audioRef.current.volume = 0.3

      // Add event listeners
      audioRef.current.addEventListener("canplaythrough", () => {
        setAudioLoaded(true)
      })

      audioRef.current.addEventListener("error", (e) => {
        console.log("Audio error:", e)
        setAudioLoaded(false)
      })
    }

    // Play or pause based on enabled state
    if (enabled && audioLoaded) {
      const playPromise = audioRef.current.play()

      // Handle play promise to avoid DOMException
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Audio play was prevented: ", error)
        })
      }
    } else if (audioRef.current) {
      audioRef.current.pause()
    }

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.removeEventListener("canplaythrough", () => {
          setAudioLoaded(true)
        })
        audioRef.current.removeEventListener("error", (e) => {
          console.log("Audio error:", e)
          setAudioLoaded(false)
        })
        audioRef.current = null
      }
    }
  }, [enabled, audioLoaded])

  return (
    <button
      onClick={onToggle}
      className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition-colors"
      aria-label={enabled ? "Mute background music" : "Play background music"}
    >
      {enabled ? <Volume2 className="h-5 w-5 text-[#2b2d42]" /> : <VolumeX className="h-5 w-5 text-[#2b2d42]" />}
    </button>
  )
}

