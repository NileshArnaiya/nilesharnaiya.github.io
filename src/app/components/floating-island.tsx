"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Sparkles, Heart, BookOpen, Code2, Briefcase, Users, Trophy, Rocket, Brain, Star, ExternalLink } from "lucide-react"

export default function FloatingIsland() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const islandY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const cloudY = useTransform(scrollYProgress, [0, 1], [50, -150])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const aboutItems = [
    {
      icon: <Brain className="h-6 w-6 text-blue-500" />,
      title: "AI Researcher at Yale",
      description: "Conducting groundbreaking research in AI, neuroscience, and human-computer interaction at one of the world's leading universities.",
      tags: ["AI", "Neuroscience", "Yale", "Research"],
      highlight: "Currently at Yale University",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      title: "Serial Entrepreneur",
      description: "Successfully sold upcourse.io to a Y Combinator company. Currently building next-generation tools for researchers including trybibby.com and Bibby robotics.",
      tags: ["YC Exit", "Startups", "AI Tools", "Robotics"],
      highlight: "Sold to YC Company",
      links: [
        { label: "TryBibby.com", url: "https://trybibby.com" },
        { label: "Bibby Robotics", url: "https://dimagai.com/landing" }
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "Experienced Mentor",
      description: "6+ years of mentoring aspiring entrepreneurs and developers at MentorCruise, helping hundreds achieve their goals in tech and business.",
      tags: ["MentorCruise", "6+ Years", "Leadership", "Growth"],
      highlight: "6 Years at MentorCruise",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-pink-500" />,
      title: "Avid Reader & Educator",
      description: "Passionate about continuous learning through books and sharing knowledge. Creating educational content and teaching the next generation of innovators.",
      tags: ["Reading", "Teaching", "Content Creation", "Learning"],
      highlight: "Book Lover",
    },
    {
      icon: <Code2 className="h-6 w-6 text-indigo-500" />,
      title: "Builder & Creator",
      description: "Previously built successful platforms like Buildawn.com and codeuplab.com. Passionate about creating tools that bridge technology and human needs.",
      tags: ["Full-Stack", "Product", "Innovation", "Tech"],
      highlight: "Proven Track Record",
    },
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Community Leader",
      description: "Active in tech communities like The Residency and Imbizo.africa. Organized IndabaX events and believes in the power of collaborative learning.",
      tags: ["Community", "Events", "Collaboration", "Impact"],
      highlight: "Community Builder",
    },
  ]

  const achievements = [
    { icon: <Trophy className="h-5 w-5" />, text: "Yale Researcher", color: "text-blue-600" },
    { icon: <Star className="h-5 w-5" />, text: "YC Company Exit", color: "text-green-600" },
    { icon: <Users className="h-5 w-5" />, text: "6+ Year Mentor", color: "text-purple-600" },
    { icon: <Rocket className="h-5 w-5" />, text: "Multiple Startups", color: "text-pink-600" },
  ]

  return (
    <div ref={containerRef} className="min-h-screen w-full relative overflow-hidden">
      {/* Enhanced gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"
        animate={{
          background: [
            "linear-gradient(135deg, #e0e7ff, #faf5ff, #fdf2f8)",
            "linear-gradient(135deg, #ddd6fe, #f3e8ff, #fce7f3)",
            "linear-gradient(135deg, #e0e7ff, #faf5ff, #fdf2f8)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating clouds */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: cloudY }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/40 rounded-full backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 40 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        {/* Animated title */}
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
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          
          {/* Achievement badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass px-4 py-2 rounded-full flex items-center space-x-2 border border-white/30"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className={achievement.color}>
                  {achievement.icon}
                </span>
                <span className="text-sm font-medium text-gray-700">{achievement.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-6 w-6 text-purple-500" />
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Exploring the intersection of AI, research, and entrepreneurship while building tools that empower the next generation of innovators
            </p>
            <Sparkles className="h-6 w-6 text-pink-500" />
          </motion.div>
        </motion.div>

        {/* Enhanced floating cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          style={{ y: islandY }}
        >
          {aboutItems.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/95 backdrop-blur-sm border border-purple-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-bold text-gray-800">{item.title}</CardTitle>
                    {item.highlight && (
                      <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                        {item.highlight}
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.links && (
                    <div className="mt-4 space-y-2">
                      {item.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-purple-600 hover:text-purple-800 transition-colors"
                        >
                          {link.label}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="glass max-w-2xl mx-auto p-8 rounded-3xl border border-white/30 backdrop-blur-xl">
            <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Connect & Collaborate
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you're interested in AI research, need mentoring, or want to discuss potential collaborations, I'd love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://calendly.com/nilesharnaiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Book a Call</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://mentorcruise.com/mentor/NileshArnaiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 glass rounded-full font-medium text-purple-700 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Mentoring Sessions</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Floating elements for decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

