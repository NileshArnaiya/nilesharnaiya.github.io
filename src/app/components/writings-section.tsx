"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

import { BookOpen, MessageSquare, ExternalLink } from "lucide-react"

export default function WritingsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("writings")

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
    <div className="container mx-auto px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Writings & Talks</h2>
          <p className="text-lg text-gray-700">
            Sharing knowledge, experiences, and insights through articles and presentations
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="writings" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="writings" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Writings
              </TabsTrigger>
              <TabsTrigger value="talks" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Talks
              </TabsTrigger>
            </TabsList>

            <TabsContent value="writings" className="space-y-6">
              {writings.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read Article
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="talks" className="space-y-6">
              {talks.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Watch Talk
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  )
}

