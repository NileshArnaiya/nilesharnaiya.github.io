"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { BookOpen, Film, Star, ExternalLink } from "lucide-react"

export default function RecommendationsSection() {
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

  const books = [
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description:
        "A fascinating exploration of human history that changed my perspective on our species' development.",
      tags: ["History", "Anthropology", "Science"],
      rating: 5,
      link: "https://www.goodreads.com/book/show/23692271-sapiens",
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      description:
        "Brilliant insights into how we think and make decisions. Essential for understanding human behavior.",
      tags: ["Psychology", "Behavioral Economics", "Decision Making"],
      rating: 5,
      link: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow",
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      description:
        "Changed my perspective on startups and innovation. A must-read for anyone interested in building something new.",
      tags: ["Business", "Startups", "Innovation"],
      rating: 4,
      link: "https://www.goodreads.com/book/show/18050143-zero-to-one",
    },
  ]

  const movies = [
    {
      title: "Taare Zameen Par",
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
      title: "3 Idiots",
      director: "Rajkumar Hirani",
      description:
        "A film that resonated with my views on education and following your passion rather than societal expectations.",
      tags: ["Comedy", "Drama", "Education"],
      rating: 5,
      link: "https://www.imdb.com/title/tt1187043/",
    },
  ]

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
      ))
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommendations</h2>
          <p className="text-lg text-gray-700">Books and movies that have shaped my thinking and perspective</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="books" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="books" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Books
              </TabsTrigger>
              <TabsTrigger value="movies" className="flex items-center gap-2">
                <Film className="h-4 w-4" />
                Movies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="books" className="space-y-6">
              {books.map((book, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{book.title}</CardTitle>
                    <CardDescription>by {book.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-4">{renderStars(book.rating)}</div>
                    <p>{book.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {book.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild>
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
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{movie.title}</CardTitle>
                    <CardDescription>Directed by {movie.director}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-4">{renderStars(movie.rating)}</div>
                    <p>{movie.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {movie.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild>
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
      </motion.div>
    </div>
  )
}

