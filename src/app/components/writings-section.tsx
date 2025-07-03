"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Badge } from "./ui/badge"
import { ExternalLink, BookOpen, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function WritingsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects
  const cloudsY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0])

  const writings = [
    {
      title: "From Failure to Yale: My Unconventional Path",
      description: "A detailed account of my journey from failing 12th grade to conducting research at Yale University.",
      link: "https://medium.com/@nilesharnaiya/from-failure-to-yale",
      date: "March 2024",
      tags: ["Personal Growth", "Education", "Research"]
    },
    {
      title: "Building TryBibby: AI Research Assistant",
      description: "The story behind creating TryBibby.com, an AI-powered research tool that helps academics and students streamline their research process.",
      link: "https://medium.com/@nilesharnaiya/building-trybibby",
      date: "February 2024",
      tags: ["AI", "Entrepreneurship", "EdTech"]
    }
  ]

  const socials = [
    {
      name: "Substack",
      handle: "niloferai",
      link: "https://niloferai.substack.com/"
    },
    {
      name: "Twitter",
      handle: "@NileshArnaiya",
      link: "https://twitter.com/NileshArnaiya"
    },
    {
      name: "LinkedIn",
      handle: "NileshArnaiya",
      link: "https://linkedin.com/in/NileshArnaiya"
    },
    {
      name: "YouTube",
      handle: "Nilesh Arnaiya",
      link: "https://www.youtube.com/watch?v=AEjKC8LDSAE&list=PLpdNpcGdAWNT2uYORCUfLisE7iq5Z10cg"
    }
  ]

  return (
    <div ref={containerRef} className="min-h-screen w-full overflow-hidden relative py-20">
      {/* Sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#90e0ef] to-[#bde0fe]" />

      {/* Clouds background */}
      <motion.div className="absolute top-0 left-0 w-full h-[80%]" style={{ y: cloudsY }}>
        <Image
          src="/nilesharnaiya.github.io/placeholder.svg"
          alt="Clouds Background"
          width={1920}
          height={800}
          className="w-full h-full object-cover opacity-70"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-[10vh]">
        <motion.div style={{ y: contentY }} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2b2d42]">
              Writings & Talks
            </h2>
            <p className="text-lg text-[#2b2d42]">
              Sharing knowledge, experiences, and insights through articles and social media
            </p>
          </div>

          <Tabs defaultValue="writings" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/50 backdrop-blur-sm">
              <TabsTrigger value="writings" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Writings
              </TabsTrigger>
              <TabsTrigger value="social" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Connect
              </TabsTrigger>
            </TabsList>

            <TabsContent value="writings" className="space-y-6">
              {writings.map((writing, index) => (
                <Link key={index} href={writing.link} target="_blank" className="block group">
                  <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl font-bold group-hover:text-blue-600">
                            {writing.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {writing.description}
                          </CardDescription>
                        </div>
                        <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {writing.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-4 text-sm text-gray-500">
                        {writing.date}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </TabsContent>

            <TabsContent value="social" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {socials.map((social, index) => (
                  <Link key={index} href={social.link} target="_blank" className="block group">
                    <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                          <div>
                            <h3 className="font-semibold text-lg text-gray-900">{social.name}</h3>
                            <p className="text-gray-600">{social.handle}</p>
                          </div>
                          <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 ml-auto" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* Flying paper animation */}
      <div className="absolute top-[40%] right-[30%] animate-float">
        <div className="w-8 h-10 bg-white transform rotate-12"></div>
      </div>
      <div className="absolute top-[60%] left-[25%] animate-float-delayed">
        <div className="w-6 h-8 bg-white transform -rotate-6"></div>
      </div>
    </div>
  )
}

