"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Briefcase, BookOpen, Music, Globe, Heart } from "lucide-react"

export default function DateMeSection() {
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

  const sections = [
    {
      title: "The Multilingual Nomad",
      icon: <Globe className="text-blue-600" size={48} />,
      content: [
        "Mumbai, Bangalore, Ahmedabad, Johannesburg, Cape Town, and now the USA - my passport is basically a world tour diary.",
        "Language skills: Hindi, Marwari, Gujarati, broken Marathi, a sprinkle of Kannada, and enough Spanish to order tapas. Think United Nations, but with more chai.",
        "Neuroscience fun fact: Each language you learn creates new neural pathways, essentially giving your brain a cognitive workout. My brain's basically an Olympic gymnast at this point.",
      ],
      anecdote:
        "Once tried explaining quantum physics in Marwari. Spoiler: It didn't go well, but hey, at least my brain tried!",
    },
    {
      title: "Professional Shapeshifter",
      icon: <Briefcase className="text-purple-600" size={48} />,
      content: [
        "Resumes are for amateurs. I prefer to call my career path a 'professional adventure'.",
        "From teaching to full-stack development, Android apps to data science, and now a researcher at Yale University.",
        "Marwari business mindset: Always hustling, even when the 'hustle' looks like deep neuroscience research.",
      ],
      anecdote:
        "My LinkedIn profile looks like I'm either incredibly talented or suffering from severe career ADHD. Why choose?",
    },
    {
      title: "The Bookworm Surfer",
      icon: <BookOpen className="text-green-600" size={48} />,
      content: [
        "Book collector extraordinaire. Some I read, some I collect, some exist in a quantum state of 'maybe later'.",
        "Recent passion: Surfing! Turns out riding waves is surprisingly similar to navigating my multi-hyphenate career.",
        "Brain research tip: Reading is like cross-training for your neural networks. Each book is basically a software update for your mind.",
      ],
      anecdote: "My bookshelf is less a library, more a 'potential knowledge museum'.",
    },
    {
      title: "Cultural Curator",
      icon: <Music className="text-red-600" size={48} />,
      content: [
        "Ukulele player (yes, really). Data visualization artist. South Indian dance enthusiast.",
        "Can wake up at 4:30 AM for cricket, but will also cry during 'Taare Zameen Par'.",
        "Emotional range: From analyzing complex datasets to getting misty-eyed during movies about human connections.",
        "Huge Naruto fan and appreciator of Mr. Bean's physical comedy. I find wisdom in both animated ninjas and silent comedy.",
      ],
      anecdote:
        "My playlist is a wild mix of cricket commentary, neuroscience podcasts, Naruto soundtracks, and Ganpati songs. Diversity is my middle name.",
    },
    {
      title: "The Real Deal",
      icon: <Heart className="text-pink-600" size={48} />,
      content: [
        "Looking for a partner who's curious, kind, and has ambitions beyond social media validation.",
        "One relationship, two one-sided loves, multiple heartbreaks - but still believing in connection.",
        "Virgo. Dog person. Lover of rain, Mumbai's chaos, and meaningful conversations.",
        "Enjoys long walks and writing thoughtful emails. I believe both are underrated forms of connection in today's fast-paced world.",
      ],
      anecdote:
        "Not seeking perfection, just someone who finds my neuroscience jokes funny, doesn't mind my incomplete book collection, and might join me for walks while discussing anime philosophy.",
    },
  ]

  const [activeSection, setActiveSection] = useState(0)

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % sections.length)
  }

  const prevSection = () => {
    setActiveSection((prev) => (prev - 1 + sections.length) % sections.length)
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why You Should Date Me</h2>
          <p className="text-lg text-gray-700">
            A slightly tongue-in-cheek but honest look at what I bring to the table
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="w-full">
            <CardHeader className="bg-gray-50 p-6">
              <CardTitle className="text-3xl font-bold text-center">{sections[activeSection].title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-center mb-6">{sections[activeSection].icon}</div>

              {sections[activeSection].content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-lg text-gray-700">
                  {paragraph}
                </p>
              ))}

              <div className="italic text-gray-500 mt-4 border-l-4 border-blue-500 pl-4">
                💬 Anecdote: {sections[activeSection].anecdote}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between mt-4">
            <button
              onClick={prevSection}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={nextSection}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Next
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`w-3 h-3 rounded-full ${activeSection === index ? "bg-blue-600" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

