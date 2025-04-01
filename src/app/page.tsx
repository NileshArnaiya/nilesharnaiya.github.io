"use client"
import { useEffect, useRef, useState } from "react"
import { useScroll } from "framer-motion"
import GhibliScene from "./components/ghibli-scene"
import FloatingIsland from "./components/floating-island"
import ProjectsForest from "./components/projects-forest"
import JourneyRiver from "./components/journey-river"
import WritingsClouds from "./components/writings-clouds"
import RecommendationsMountain from "./components/recommendations-mountain"
import DateMeValley from "./components/date-me-valley"
import MagicalCursor from "./components/magical-cursor"
import AudioPlayer from "./components/audio-player"
import AutoWalkingPencil from "./components/auto-walking-pencil"
import VerticalNavigation from "./components/vertical-navigation"


export default function Home() {
  const [currentScene, setCurrentScene] = useState("home")
  const [audioEnabled, setAudioEnabled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const scenes = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "journey", label: "Journey" },
    { id: "writings", label: "Writings" },
    { id: "recommendations", label: "Recommendations" },
    { id: "dateMe", label: "Date Me" },
  ]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const handleSceneChange = (scene: string) => {
    setCurrentScene(scene)
    // Scroll to the scene
    const element = document.getElementById(scene)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update current scene based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight

        scenes.forEach(({ id }) => {
          const element = document.getElementById(id)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
              setCurrentScene(id)
            }
          }
        })
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <main ref={containerRef} className="relative w-full bg-background overflow-hidden">
      {/* Magical cursor effect */}
      <MagicalCursor />

      {/* Audio controls */}
      <div className="fixed top-5 right-5 z-50">
        <AudioPlayer enabled={audioEnabled} onToggle={() => setAudioEnabled(!audioEnabled)} />
      </div>

      {/* Vertical Navigation */}
      <VerticalNavigation activeSection={currentScene} onNavigate={handleSceneChange} />

      {/* Animated walking pencil character */}
      <AutoWalkingPencil />

      {/* Main content */}
      <div className="relative ml-16">
        {/* Home scene */}
        <section id="home" className="h-screen relative">
          <GhibliScene />
        </section>

        {/* About scene */}
        <section id="about" className="min-h-screen relative">
          <FloatingIsland />
        </section>

        {/* Projects scene */}
        <section id="projects" className="min-h-screen relative">
          <ProjectsForest />
        </section>

        {/* Journey scene */}
        <section id="journey" className="min-h-screen relative">
          <JourneyRiver />
        </section>

        {/* Writings scene */}
        <section id="writings" className="min-h-screen relative">
          <WritingsClouds />
        </section>

        {/* Recommendations scene */}
        <section id="recommendations" className="min-h-screen relative">
          <RecommendationsMountain />
        </section>

        {/* Date Me scene */}
        <section id="dateMe" className="min-h-screen relative">
          <DateMeValley />
        </section>
      </div>

      {/* Footer */}
      <footer className="relative py-8 bg-muted border-t border-border ml-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-foreground">Nilesh Jain / Arnaiya</h3>
              <p className="text-sm text-muted-foreground">Researcher • Founder • Educator</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <p className="text-sm text-muted-foreground mb-2">Stay Connected</p>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/nilesharnaiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com/in/nilesharnaiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com/NotSoHuman.AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Nilesh Jain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}