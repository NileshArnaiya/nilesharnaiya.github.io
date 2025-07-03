"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { ExternalLink, Github, Code, Zap, Brain, Rocket, BookOpen, Video, DollarSign, Users, Star, Trophy, Target } from "lucide-react"

export default function ProjectsForest() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const forestY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const treesY = useTransform(scrollYProgress, [0, 1], [50, -150])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const featuredProjects = [
    {
      icon: <Brain className="h-6 w-6 text-blue-500" />,
      title: "TryBibby.com",
      description: "AI-powered research assistant - like Cursor but for writing research papers. Helping researchers accelerate their work with intelligent writing tools.",
      tags: ["AI", "Research", "Writing", "Active"],
      status: "active",
      statusLabel: "Currently Building",
      link: "https://trybibby.com",
      category: "AI Tools",
      highlight: "Featured Project"
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      title: "Bibby Robotics",
      description: "Next-generation robotics platform for researchers at dimagai.com/landing. Building the future of research automation and AI-driven discovery.",
      tags: ["Robotics", "AI", "Research", "Innovation"],
      status: "active",
      statusLabel: "In Development",
      link: "https://dimagai.com/landing",
      category: "Robotics",
      highlight: "Cutting Edge"
    },
    {
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      title: "Upcourse.io",
      description: "Interactive education labs platform that was successfully sold to a Y Combinator company. Built to help anyone learn anything through hands-on experiences.",
      tags: ["Education", "YC Exit", "EdTech", "Sold"],
      status: "sold",
      statusLabel: "Sold to YC Company",
      category: "EdTech",
      highlight: "YC Exit",
      achievement: "Successfully Exited"
    }
  ]

  const otherProjects = [
    {
      icon: <Video className="h-6 w-6 text-purple-500" />,
      title: "MathVideo.ai",
      description: "Create 3Blue1Brown style animated educational videos using AI. Making complex mathematics beautiful and accessible.",
      tags: ["AI", "Education", "Animation", "Math"],
      link: "https://v0-math-video-landing-page.vercel.app/",
      category: "Education"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
      title: "PyBooks.com",
      description: "Jupyter notebooks platform for teachers and educators. Simplifying the creation and sharing of interactive coding lessons.",
      tags: ["Education", "Python", "Jupyter", "Teaching"],
      category: "EdTech"
    },
    {
      icon: <Code className="h-6 w-6 text-pink-500" />,
      title: "CodeUpLab.com",
      description: "Previously built platform helping students learn programming and data science through hands-on projects and mentorship.",
      tags: ["Education", "Coding", "Data Science", "Previous"],
      category: "EdTech"
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      title: "Buildawn.com",
      description: "Previously developed platform for rapid prototyping and development. Focused on helping startups build and iterate quickly.",
      tags: ["Development", "Startups", "Prototyping", "Previous"],
      category: "Development"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      title: "1Kitchen POS",
      description: "Restaurant management software providing comprehensive point-of-sale solutions for the food service industry.",
      tags: ["SaaS", "Restaurants", "Management", "POS"],
      category: "SaaS"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "NavalNow",
      description: "Platform distilling Naval Ravikant's wisdom and insights, making timeless advice easily accessible and searchable.",
      tags: ["Wisdom", "Content", "Philosophy", "Knowledge"],
      category: "Content"
    }
  ]

  const categories = ["All", "AI Tools", "EdTech", "Robotics", "Development", "SaaS", "Content"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? otherProjects 
    : otherProjects.filter(project => project.category === selectedCategory)

  return (
    <div ref={containerRef} className="min-h-screen w-full relative overflow-hidden">
      {/* Enhanced gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100"
        animate={{
          background: [
            "linear-gradient(135deg, #dcfce7, #f0fdfa, #e6fffa)",
            "linear-gradient(135deg, #bbf7d0, #ccfbf1, #a7f3d0)",
            "linear-gradient(135deg, #dcfce7, #f0fdfa, #e6fffa)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated forest elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: treesY }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-green-400/20 rounded-full backdrop-blur-sm"
            style={{
              width: Math.random() * 150 + 80,
              height: Math.random() * 150 + 80,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        {/* Enhanced title section */}
        <motion.div
          className="text-center mb-16"
          style={{ opacity: titleOpacity }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Building the future of AI research tools, education platforms, and innovative solutions that bridge technology with human needs.
          </motion.p>
        </motion.div>

        {/* Featured projects */}
        <motion.div
          className="mb-20"
          style={{ y: forestY }}
        >
          <motion.h3
            className="text-2xl font-heading font-bold mb-8 text-center bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ 
                  y: -20, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Card className="glass border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-xl h-full transform-gpu relative overflow-hidden">
                  {/* Status indicator */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge 
                      variant="secondary" 
                      className={`text-xs font-medium border-none ${
                        project.status === 'active' 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                          : project.status === 'sold'
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                          : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      }`}
                    >
                      {project.statusLabel}
                    </Badge>
                  </div>

                  {/* Highlight badge */}
                  {project.highlight && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none text-xs font-medium"
                      >
                        {project.highlight}
                      </Badge>
                    </div>
                  )}

                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div
                      className="mx-auto w-20 h-20 rounded-3xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {project.icon}
                    </motion.div>
                    <CardTitle className="text-2xl font-heading font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center relative z-10">
                    <CardDescription className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">
                      {project.description}
                    </CardDescription>
                    
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors mb-6 font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span>Visit Project</span>
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    )}
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + tagIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200 hover:from-green-200 hover:to-emerald-200 transition-all duration-300 text-xs"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'glass text-green-700 hover:bg-white/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Other projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${selectedCategory}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <Card className="glass border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-xl h-full">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {project.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-heading font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-green-600 hover:text-green-700 transition-colors mb-4 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-3 w-3" />
                    </motion.a>
                  )}
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="secondary" 
                        className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="glass max-w-2xl mx-auto p-8 rounded-3xl border border-white/30">
            <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Interested in Collaboration?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new projects, research opportunities, and innovative ideas that can make a positive impact.
            </p>
            <motion.a
              href="https://calendly.com/nilesharnaiya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Connect</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

