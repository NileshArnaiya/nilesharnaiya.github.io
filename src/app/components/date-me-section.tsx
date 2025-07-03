"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, Globe, Briefcase, BookOpen, Music, Heart, Sparkles } from "lucide-react"

export default function DateMeSection() {
  const ref = useRef(null)
  const [activeSection, setActiveSection] = useState(0)

  const sections = [
    {
      title: "The Multilingual Nomad",
      icon: <Globe className="text-blue-600" size={48} />,
      content: [
        "Mumbai, Bangalore, Ahmedabad, Johannesburg, Cape Town, and now the USA and Canada - my passport is basically a world tour diary.",
        "Language skills: Hindi, Marwari, Gujarati, broken Marathi, ondu nimisha of Kannada, and enough Spanish to order tapas, tacos. Think United Nations, but with more chai.",
        "Neuroscience fun fact: Each language you learn creates new neural pathways, essentially giving your brain a cognitive workout. My brain's basically an Olympic gymnast at this point.",
      ],
      anecdote:
        "Once tried explaining quantum physics in Marwari. Spoiler: It didn't go well, but hey, at least my brain tried!",
      color: "from-blue-500/20 to-blue-600/20",
      iconBg: "bg-blue-100"
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
      color: "from-purple-500/20 to-purple-600/20",
      iconBg: "bg-purple-100"
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
      color: "from-green-500/20 to-green-600/20",
      iconBg: "bg-green-100"
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
      color: "from-red-500/20 to-red-600/20",
      iconBg: "bg-red-100"
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
      color: "from-pink-500/20 to-pink-600/20",
      iconBg: "bg-pink-100"
    },
  ]

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % sections.length)
  }

  const prevSection = () => {
    setActiveSection((prev) => (prev - 1 + sections.length) % sections.length)
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-flex items-center gap-2">
                Why You Should Date Me <Sparkles className="h-8 w-8 text-yellow-400" />
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A slightly tongue-in-cheek but honest look at what I bring to the table
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="w-full overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${sections[activeSection].color} opacity-50`} />
                  <CardHeader className="relative z-10 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-2xl ${sections[activeSection].iconBg}`}>
                        {sections[activeSection].icon}
                      </div>
                      <CardTitle className="text-3xl font-bold">{sections[activeSection].title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10 p-8 pt-0">
                    <div className="space-y-4">
                      {sections[activeSection].content.map((paragraph, index) => (
                        <motion.p
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-lg text-gray-700"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-8 p-4 bg-white/50 rounded-xl border border-gray-100"
                    >
                      <p className="italic text-gray-600">
                        💭 {sections[activeSection].anecdote}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSection}
                className="rounded-full bg-white/80 hover:bg-white shadow-lg -translate-x-1/2"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSection}
                className="rounded-full bg-white/80 hover:bg-white shadow-lg translate-x-1/2"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeSection === index
                    ? "bg-purple-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

