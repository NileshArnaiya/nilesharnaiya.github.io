"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink } from "lucide-react"

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
      title: "Animated Visual Learning",
      description:
        "Creating engaging animated content to explain complex concepts in simple, visual ways. Making learning accessible and fun through animation.",
      tags: ["Education", "Animation", "Visual Learning"],
      link: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Upcourse.io",
      description:
        "Interactive education labs to learn anything. A platform designed to make learning engaging and effective through hands-on labs.",
      tags: ["Education", "Interactive", "E-learning"],
      link: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Pybooks.com",
      description:
        "Jupyter notebooks for teachers. Empowering educators with interactive computational tools for better teaching experiences.",
      tags: ["Education", "Python", "Jupyter"],
      link: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "CodeUpLab",
      description:
        "Helping students learn programming and data science through interactive coding environments and guided projects.",
      tags: ["Programming", "Data Science", "Education"],
      link: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "NavalNow",
      description:
        "Naval Ravikant's wisdom distilled. A curated collection of insights and principles from Naval's podcasts, tweets, and interviews.",
      tags: ["Knowledge", "Wisdom", "Curation"],
      link: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "1Kitchen POS",
      description:
        "Restaurant management software designed to streamline operations, manage inventory, and improve customer service.",
      tags: ["Restaurant", "Management", "POS"],
      link: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Building tools and platforms to make education more accessible and effective
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

