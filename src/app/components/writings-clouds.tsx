"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { BookOpen, MessageSquare, ExternalLink } from "lucide-react"

export default function WritingsClouds() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("writings")

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects
  const cloudsY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const cloudLeft1Y = useTransform(scrollYProgress, [0, 1], [50, -100])
  const cloudRight1Y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const cloudLeft2Y = useTransform(scrollYProgress, [0, 1], [100, -50])
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0])

  const writings = [
    {
      title: "My Thoughts on Substack",
      description:
        "I regularly share my thoughts and insights on my Substack blog, covering topics from education to technology",
      date: "Ongoing",
      tags: ["Blog", "Thoughts", "Education"],
      link: "#",
    },
    {
      title: "Twitter Threads",
      description:
        "I share bite-sized wisdom and observations on Twitter, connecting with a community of like-minded thinkers",
      date: "Ongoing",
      tags: ["Social Media", "Thoughts", "Community"],
      link: "#",
    },
    {
      title: "The Power of Self-Education",
      description: "How I taught myself programming and built a career without traditional credentials",
      date: "June 15, 2023",
      tags: ["Education", "Programming", "Career"],
      link: "#",
    },
    {
      title: "From Failure to Yale: My Unconventional Path",
      description: "The story of how failing 12th grade led me to a research position at Yale University",
      date: "April 3, 2023",
      tags: ["Personal Growth", "Academia", "Resilience"],
      link: "#",
    },
    {
      title: "Building Educational Tools for the Next Generation",
      description: "Insights from creating Pybooks and other educational platforms",
      date: "February 22, 2023",
      tags: ["EdTech", "Entrepreneurship", "Teaching"],
      link: "#",
    },
  ]

  const talks = [
    {
      title: "The Future of Interactive Education",
      description: "Keynote at EdTech Summit 2023 discussing how interactive tools are transforming learning",
      date: "September 10, 2023",
      tags: ["Education", "Technology", "Future"],
      link: "#",
    },
    {
      title: "Democratizing AI Education in Africa",
      description: "Panel discussion at IndabaX on making AI education accessible across the continent",
      date: "July 5, 2023",
      tags: ["AI", "Africa", "Education"],
      link: "#",
    },
    {
      title: "From Self-Taught to Self-Made",
      description: "TEDx talk on leveraging self-education to build a career and businesses",
      date: "March 18, 2023",
      tags: ["Motivation", "Career", "Education"],
      link: "#",
    },
  ]

  return (
    <div ref={containerRef} className="min-h-screen w-full overflow-hidden relative py-20">
      {/* Sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#90e0ef] to-[#bde0fe]" />

      {/* Clouds background */}
      <motion.div className="absolute top-0 left-0 w-full h-[80%]" style={{ y: cloudsY }}>
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Clouds Background"
          width={1920}
          height={800}
          className="w-full h-full object-cover opacity-70"
        />
      </motion.div>

      {/* Individual clouds */}
      <motion.div className="absolute top-[20%] left-[10%] w-[300px] h-[150px]" style={{ y: cloudLeft1Y }}>
        <Image
          src="/placeholder.svg?height=150&width=300"
          alt="Cloud"
          width={300}
          height={150}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div className="absolute top-[30%] right-[15%] w-[250px] h-[120px]" style={{ y: cloudRight1Y }}>
        <Image
          src="/placeholder.svg?height=120&width=250"
          alt="Cloud"
          width={250}
          height={120}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div className="absolute top-[50%] left-[20%] w-[200px] h-[100px]" style={{ y: cloudLeft2Y }}>
        <Image
          src="/placeholder.svg?height=100&width=200"
          alt="Cloud"
          width={200}
          height={100}
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-[10vh]">
        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-ghibli text-[#2b2d42] mb-4">Writings & Talks</h2>
            <p className="text-lg text-[#2b2d42]">
              Sharing knowledge, experiences, and insights through articles and presentations
            </p>
          </div>

          <Tabs defaultValue="writings" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/50 backdrop-blur-sm">
              <TabsTrigger
                value="writings"
                className="flex items-center gap-2 data-[state=active]:bg-[#83c5be]/30 data-[state=active]:text-[#2b2d42]"
              >
                <BookOpen className="h-4 w-4" />
                Writings
              </TabsTrigger>
              <TabsTrigger
                value="talks"
                className="flex items-center gap-2 data-[state=active]:bg-[#83c5be]/30 data-[state=active]:text-[#2b2d42]"
              >
                <MessageSquare className="h-4 w-4" />
                Talks
              </TabsTrigger>
            </TabsList>

            <TabsContent value="writings" className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Connect with Me</h2>
                <div className="mt-4">
                  <a href="https://niloferai.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    My Substack
                  </a>
                </div>
                <div className="mt-2">
                  <a href="https://x.com/NileshArnaiya" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    My Twitter
                  </a>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="talks" className="space-y-6">
              {/* You can add similar links for talks if needed */}
              <a href="https://www.youtube.com/watch?v=AEjKC8LDSAE&list=PLpdNpcGdAWNT2uYORCUfLisE7iq5Z10cg&pp=gAQB" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Talks and fun on youtube
                  </a>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* Flying paper */}
      <div className="absolute top-[40%] right-[30%] animate-float-paper">
        <div className="w-8 h-10 bg-white transform rotate-12"></div>
      </div>
      <div className="absolute top-[60%] left-[25%] animate-float-paper-delayed">
        <div className="w-6 h-8 bg-white transform -rotate-6"></div>
      </div>
    </div>
  )
}

