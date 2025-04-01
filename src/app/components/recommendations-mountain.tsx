"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { BookOpen, Film, Star, ExternalLink } from "lucide-react"

export default function RecommendationsMountain() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("books")

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects
  const mountainsY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const foregroundY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0])

  const books = [
    {
      title: "Models of the mind",
      author: "Grace lindsey",
      description:
        "A fascinating exploration of human history that changed my perspective on our species' development.",
      tags: ["History", "Anthropology", "Science"],
      rating: 5,
      link: "https://www.goodreads.com/book/show/23692271-sapiens",
    },
    {
      title: "Grasp",
      author: "Sanjay Sharma",
      description:
        "Brilliant insights into how we think about education online. Essential for understanding human behavior.",
      tags: ["Psychology", "Behavioral Economics", "Decision Making"],
      rating: 5,
      link: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow",
    },
    {
      title: "Seven and a half lessons",
      author: "Lisa Feldman",
      description:
        "Changed my perspective on the brain. A must-read for anyone interested in building something new.",
      tags: ["Business", "Startups", "Innovation"],
      rating: 4,
      link: "https://www.goodreads.com/book/show/18050143-zero-to-one",
    },
  ]

  const movies = [
    {
      title: "Taare zameen Par",
      director: "Aamir Khan",
      description: "A beautiful film about education, empathy, and understanding different ways of learning.",
      tags: ["Drama", "Education", "Inspirational"],
      rating: 5,
      link: "https://www.imdb.com/title/tt0986264/",
    },
    {
      title: "The Social Network",
      director: "David Fincher",
      description: "Fascinating look at the creation of Facebook and the complexities of innovation and relationships.",
      tags: ["Drama", "Biography", "Technology"],
      rating: 4,
      link: "https://www.imdb.com/title/tt1285016/",
    },
    {
      title: "Person of Interest",
      director: "Jonathan nolan",
      description:
        "A film that resonated with my views on AI and such careful scenes that make you think about your morals, ethics and rationality.",
      tags: ["Comedy", "Drama", "Education"],
      rating: 5,
      link: "https://www.imdb.com/title/tt1187043/",
    },
  ]

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "text-[#f9c74f] fill-[#f9c74f]" : "text-gray-300"}`} />
      ))
  }

  return (
    <div ref={containerRef} className="min-h-screen w-full overflow-hidden relative py-20">
      {/* Mountain background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#bde0fe] to-[#a2d2ff]" />

      {/* Mountains */}
      <motion.div className="absolute bottom-0 left-0 w-full h-[70%]" style={{ y: mountainsY }}>
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Mountains"
          width={1920}
          height={800}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Foreground */}
      <motion.div className="absolute bottom-0 left-0 w-full h-[30%]" style={{ y: foregroundY }}>
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Mountain Foreground"
          width={1920}
          height={400}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-[10vh]">
        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-ghibli text-[#2b2d42] mb-4">Recommendations</h2>
            <p className="text-lg text-[#2b2d42]">Books and movies that have shaped my thinking and perspective</p>
          </div>

          <Tabs defaultValue="books" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/50 backdrop-blur-sm">
              <TabsTrigger
                value="books"
                className="flex items-center gap-2 data-[state=active]:bg-[#83c5be]/30 data-[state=active]:text-[#2b2d42]"
              >
                <BookOpen className="h-4 w-4" />
                Books
              </TabsTrigger>
              <TabsTrigger
                value="movies"
                className="flex items-center gap-2 data-[state=active]:bg-[#83c5be]/30 data-[state=active]:text-[#2b2d42]"
              >
                <Film className="h-4 w-4" />
                Movies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="books" className="space-y-6">
              {books.map((book, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-[#83c5be] overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <CardHeader className="bg-[#83c5be]/20">
                    <CardTitle className="text-[#2b2d42]">{book.title}</CardTitle>
                    <CardDescription className="text-[#6c757d]">by {book.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-4">{renderStars(book.rating)}</div>
                    <p className="text-[#2b2d42] mb-4">{book.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {book.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="bg-[#83c5be]/20 text-[#2b2d42] border-[#83c5be]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#83c5be] text-[#2b2d42] hover:bg-[#83c5be]/20"
                      asChild
                    >
                      <a href={book.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on Goodreads
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="movies" className="space-y-6">
              {movies.map((movie, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-[#83c5be] overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <CardHeader className="bg-[#83c5be]/20">
                    <CardTitle className="text-[#2b2d42]">{movie.title}</CardTitle>
                    <CardDescription className="text-[#6c757d]">Directed by {movie.director}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-4">{renderStars(movie.rating)}</div>
                    <p className="text-[#2b2d42] mb-4">{movie.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {movie.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="bg-[#83c5be]/20 text-[#2b2d42] border-[#83c5be]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#83c5be] text-[#2b2d42] hover:bg-[#83c5be]/20"
                      asChild
                    >
                      <a href={movie.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on IMDb
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

