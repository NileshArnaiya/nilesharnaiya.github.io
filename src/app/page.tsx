"use client"
import { useEffect, useRef, useState } from "react"
import { useScroll } from "framer-motion"
import GhibliScene from "./components/ghibli-scene"
import FloatingIsland from "./components/floating-island"
import ProjectsForest from "./components/projects-forest"
import JourneyRiver from "./components/journey-river"
import WritingsSection from "./components/writings-section"
import RecommendationsMountain from "./components/recommendations-mountain"
import DateMeValley from "./components/date-me-valley"
import MagicalCursor from "./components/magical-cursor"
import AudioPlayer from "./components/audio-player"
import AutoWalkingPencil from "./components/auto-walking-pencil"
import VerticalNavigation from "./components/vertical-navigation"

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Replace with your new domain
    window.location.href = "https://nilesh.figma.site";
  }, []);

  
  const [currentScene, setCurrentScene] = useState("home")
  const [audioEnabled, setAudioEnabled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  
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

  useEffect(() => {
    if (typeof window === "undefined") return
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const totalScrollableHeight = documentHeight - windowHeight
      const progress = scrollPosition / totalScrollableHeight
      setScrollProgress(progress)

      // Update current scene based on scroll position
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

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main ref={containerRef} className="relative w-full overflow-hidden">
      {/* Magical cursor effect - only on desktop */}
      <div className="hidden lg:block">
        <MagicalCursor />
      </div>

      {/* Audio controls */}
      <div className="fixed top-6 right-6 z-50">
        <AudioPlayer enabled={audioEnabled} onToggle={() => setAudioEnabled(!audioEnabled)} />
      </div>

      {/* Vertical Navigation */}
      <VerticalNavigation activeSection={currentScene} onNavigate={handleSceneChange} />

      {/* Animated walking pencil character - only on desktop */}
      <div className="hidden lg:block">
        <AutoWalkingPencil />
      </div>

      {/* Main content with responsive padding */}
      <div className="relative lg:ml-20">
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
          <WritingsSection />
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

      {/* Footer with responsive padding */}
      <footer className="relative py-8 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 border-t border-purple-200/50 lg:ml-20">
        <div className="container mx-auto px-6 lg:px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Nilesh Jain / Arnaiya
              </h3>
              <p className="text-sm text-gray-600 font-medium">Researcher • Founder • Educator</p>
            </div>

            <div className="flex flex-col items-center md:items-end space-y-3">
              <p className="text-sm text-gray-600 font-medium">Stay Connected</p>
              <div className="flex space-x-6">
                <a
                  href="https://twitter.com/nilesharnaiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-110 font-medium"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com/in/nilesharnaiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-110 font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com/NotSoHuman.AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-110 font-medium"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Nilesh Jain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
