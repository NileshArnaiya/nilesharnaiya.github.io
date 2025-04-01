"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink } from "lucide-react"

export default function ProjectsForest() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects
  const forestBgY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const treesY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0])

  const projects = [
    {
      title: "Animated Visual Learning",
      description:
        "Creating engaging animated content to explain complex concepts in simple, visual ways. Making learning accessible and fun through animation.",
      tags: ["Education", "Animation", "Visual Learning"],
      link: "https://mathvideo.ai",
    },
    {
      title: "Upcourse.io",
      description:
        "Interactive education labs to learn anything. A platform designed to make learning engaging and effective through hands-on labs.",
      tags: ["Education", "Interactive", "E-learning"],
      link: "https://upcourse.io",
    },
    {
      title: "Pybooks.com",
      description:
        "Jupyter notebooks for teachers. Empowering educators with interactive computational tools for better teaching experiences.",
      tags: ["Education", "Python", "Jupyter"],
      link: "https://pybooks.com",
    },
    {
      title: "Neuroscience Adventures",
      description:
        "Exploring the world of open-source through Linux. Tutorials, tips, and tricks for both beginners and advanced users.",
      tags: ["Linux", "Open Source", "Programming"],
      link: "https://pypi.org/project/speed-spike-sort/",
    },
    {
      title: "Bibby - The Research writing assistant you need",
      description:
        "Learning to code with latex and writing research papers is a pain. We simplified it with AI and better UI+UX principles",
      tags: ["Humor", "Coding", "Education"],
      link: "https://trybibby.com",
    },
    {
      title: "Jainism",
      description:
        "Combining my passion for teaching in religion through gamification.",
      tags: ["Travel", "Remote Work", "Coding"],
      link: "https://myjainism.com",
    },
  ]

  return (
    <div ref={containerRef} className="min-h-screen w-full overflow-hidden relative py-20">
      {/* Forest background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#caf0f8] to-[#a8dadc]" />

      {/* Background trees - using SVG instead of placeholder image */}
     

      {/* Foreground trees - using SVG instead of placeholder image */}
    

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-[10vh]">
        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2b2d42] mb-4">Projects</h2>
            <p className="text-lg text-[#2b2d42] max-w-2xl mx-auto">
              Building tools and platforms to make education more accessible and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-[#83c5be] transform transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#2b2d42] mb-2">{project.title}</h3>
                  <p className="text-[#2b2d42] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="bg-[#83c5be]/20 text-[#2b2d42] border-[#83c5be]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-[#83c5be] text-[#2b2d42] hover:bg-[#83c5be]/20"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Project
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

