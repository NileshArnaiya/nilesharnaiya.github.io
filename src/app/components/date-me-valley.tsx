"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Briefcase, BookOpen, Music, Globe, Heart } from "lucide-react"

export default function DateMeValley() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects
  const valleyY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const foregroundY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0])

  const sections = [
    {
      title: "The Multilingual Nomad",
      icon: <Globe className="text-[#4361ee]" size={48} />,
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
      icon: <Briefcase className="text-[#7209b7]" size={48} />,
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
      icon: <BookOpen className="text-[#4f772d]" size={48} />,
      content: [
        "Book collector extraordinaire. Some I read, some I collect, some exist in a quantum state of 'maybe later'.",
        "Recent passion: Surfing! Turns out riding waves is surprisingly similar to navigating my multi-hyphenate career.",
        "Brain research tip: Reading is like cross-training for your neural networks. Each book is basically a software update for your mind.",
      ],
      anecdote: "My bookshelf is less a library, more a 'potential knowledge museum'.",
    },
    {
      title: "Cultural Curator",
      icon: <Music className="text-[#e63946]" size={48} />,
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
      icon: <Heart className="text-[#f72585]" size={48} />,
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

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % sections.length)
  }

  const prevSection = () => {
    setActiveSection((prev) => (prev - 1 + sections.length) % sections.length)
  }

  return (
    <div ref={containerRef} className="min-h-screen w-full overflow-hidden relative py-20">
      {/* Valley background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#a2d2ff] to-[#cdb4db]" />

      {/* Valley */}
      <motion.div className="absolute bottom-0 left-0 w-full h-[70%]" style={{ y: valleyY }}>
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Valley"
          width={1920}
          height={800}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Foreground */}
      <motion.div className="absolute bottom-0 left-0 w-full h-[30%]" style={{ y: foregroundY }}>
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Valley Foreground"
          width={1920}
          height={400}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-[10vh]">
        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-ghibli text-[#2b2d42] mb-4">Why You Should Date Me</h2>
            <p className="text-lg text-[#2b2d42]">
              A slightly tongue-in-cheek but honest look at what I bring to the table
            </p>
          </div>

          <Card className="w-full bg-white/80 backdrop-blur-sm border-[#83c5be] overflow-hidden">
            <CardHeader className="bg-[#83c5be]/20 p-6">
              <CardTitle className="text-3xl font-ghibli text-center text-[#2b2d42]">
                {sections[activeSection].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-center mb-6">{sections[activeSection].icon}</div>

              {sections[activeSection].content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-lg text-[#2b2d42]">
                  {paragraph}
                </p>
              ))}

              <div className="italic text-[#6c757d] mt-4 border-l-4 border-[#83c5be] pl-4">
                💬 Anecdote: {sections[activeSection].anecdote}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between mt-4">
            <button
              onClick={prevSection}
              className="px-4 py-2 border border-[#83c5be] rounded-md bg-white/80 backdrop-blur-sm text-[#2b2d42] hover:bg-[#83c5be]/20 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={nextSection}
              className="px-4 py-2 bg-[#83c5be] text-white rounded-md hover:bg-[#57a99a] transition-colors"
            >
              Next
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`w-3 h-3 rounded-full ${activeSection === index ? "bg-[#83c5be]" : "bg-[#83c5be]/30"}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated butterflies */}
      <div className="absolute top-[30%] right-[20%] animate-butterfly">
        <div className="w-4 h-4 bg-[#f72585] rounded-full opacity-70"></div>
      </div>
      <div className="absolute top-[40%] left-[25%] animate-butterfly-delayed">
        <div className="w-3 h-3 bg-[#4cc9f0] rounded-full opacity-70"></div>
      </div>
    </div>
  )
}

