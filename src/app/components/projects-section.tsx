"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Youtube, Twitter, Linkedin, Instagram, BrainCircuit, Book, Gamepad2, Rocket, Code2, GraduationCap } from "lucide-react"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const projects = [
    {
      title: "TryBibby.com",
      description:
        "AI-powered research assistant that helps researchers write papers faster and more effectively. Like having a smart research companion that understands academic writing.",
      tags: ["AI", "Research", "Academic Writing"],
      link: "https://trybibby.com",
      icon: <BrainCircuit className="h-6 w-6 text-purple-600" />,
      status: "Active",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Pybooks.com",
      description:
        "Interactive Jupyter notebooks platform designed specifically for teachers. Making Python and data science education more accessible and engaging through interactive computational notebooks.",
      tags: ["Education", "Python", "Jupyter"],
      link: "https://pybooks.com",
      icon: <Book className="h-6 w-6 text-blue-600" />,
      status: "Active",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "MyJainism.com",
      description:
        "A gamified learning platform dedicated to teaching Jain principles and philosophy. Making ancient wisdom accessible to modern learners through interactive courses and engaging content.",
      tags: ["Education", "Religion", "Gamification"],
      link: "https://myjainism.com",
      icon: <Gamepad2 className="h-6 w-6 text-green-600" />,
      status: "Coming Soon",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Buildawn.com",
      description:
        "Previously founded startup focused on helping developers build and deploy applications faster. Created tools and frameworks to streamline the development process.",
      tags: ["Development", "DevTools", "Startup"],
      link: "https://buildawn.com",
      icon: <Code2 className="h-6 w-6 text-orange-600" />,
      status: "Previous Venture",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Upcourse.io",
      description:
        "Successfully sold to a Y Combinator company. Platform for creating and delivering interactive educational labs, making learning hands-on and engaging.",
      tags: ["Education", "YC Exit", "EdTech"],
      link: "#",
      icon: <Rocket className="h-6 w-6 text-red-600" />,
      status: "Acquired",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Research & Content",
      description:
        "Active presence across social media sharing AI research insights and educational content. Follow me on Twitter, LinkedIn, Instagram, TikTok, and YouTube for daily updates.",
      tags: ["Social Media", "AI Research", "Education"],
      socials: [
        { platform: "Twitter", handle: "@NileshArnaiya", url: "https://twitter.com/NileshArnaiya" },
        { platform: "LinkedIn", handle: "NileshArnaiya", url: "https://linkedin.com/in/NileshArnaiya" },
        { platform: "Instagram", handle: "@airesearchdaily", url: "https://instagram.com/airesearchdaily" },
        { platform: "TikTok", handle: "@aipapers", url: "https://tiktok.com/@aipapers" }
      ],
      icon: <GraduationCap className="h-6 w-6 text-indigo-600" />,
      status: "Active",
      image: "/placeholder.svg?height=200&width=400",
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects & Ventures</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Building tools and platforms to make education more accessible and effective while exploring the frontiers of AI and research
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full bg-white/90 backdrop-blur-sm border-purple-100 hover:border-purple-200 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
                <div className="p-6">
                  {project.icon}
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-gray-800">{project.title}</CardTitle>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-none">
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-gray-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.socials ? (
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800 mb-2">Find me on:</h4>
                    {project.socials.map((social, socialIndex) => (
                      <a
                        key={socialIndex}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors py-1"
                      >
                        {social.platform === "Twitter" && <Twitter className="h-4 w-4" />}
                        {social.platform === "LinkedIn" && <Linkedin className="h-4 w-4" />}
                        {social.platform === "Instagram" && <Instagram className="h-4 w-4" />}
                        {social.platform === "TikTok" && <span className="text-xl">📱</span>}
                        <span className="text-sm">{social.handle}</span>
                      </a>
                    ))}
                  </div>
                ) : project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    Visit Project <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

