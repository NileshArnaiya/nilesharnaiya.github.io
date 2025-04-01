"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { MapPin, Briefcase, BookOpen, Globe, Star, GraduationCap } from "lucide-react"

export default function JourneyRiver() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects
  const riverY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0])

  const journeySteps = [
    {
      title: "The Beginning",
      icon: <Star className="text-[#f28482]" size={32} />,
      content: "I learned to code at 17 – late by today's standards. This sparked a passion for lifelong learning.",
      year: "Early Days",
    },
    {
      title: "Self-Education",
      icon: <BookOpen className="text-[#84a59d]" size={32} />,
      content: "I taught myself through platforms like edX, Udacity, and Coursera (when they were just starting!).",
      year: "Learning Phase",
    },
    {
      title: "Overcoming Challenges",
      icon: <Star className="text-[#f8961e]" size={32} />,
      content:
        "After failing 12th grade, I bounced back by diving into internships, self-taught skills, and exploring the tech world.",
      year: "Resilience",
    },
    {
      title: "Bangalore Adventures",
      icon: <MapPin className="text-[#9381ff]" size={32} />,
      content:
        "Bangalore became my second home, where I soaked up knowledge, collected swag, and ate a lot of free pizza at tech meetups.",
      year: "Exploration",
    },
    
    {
      title: "World Travels",
      icon: <Globe className="text-[#43aa8b]" size={32} />,
      content:
        "Exploring South Africa, Europe, and Asia while teaching and coding. Every place added new perspectives to my work.",
      year: "Global Experience",
    },
    {
      title: "Founding Projects",
      icon: <Star className="text-[#f9c74f]" size={32} />,
      content: "Started multiple projects including Trybibby.com, Upcourse.io, Pybooks.com, etc. ",
      year: "Entrepreneurship",
    },
    {
      title: "Yale Research",
      icon: <GraduationCap className="text-[#577590]" size={32} />,
      content: "At Yale as a research associate, continuing my journey in academia and research to experience it one last time",
      year: "Present",
    },
  ]

  return (
    <div ref={containerRef} className="min-h-screen w-full overflow-hidden relative py-20">
      {/* River background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#a8dadc] to-[#90e0ef]" />

      {/* River - using SVG instead of placeholder image */}
      <motion.div className="absolute bottom-0 left-0 w-full h-[60%]" style={{ y: riverY }}>
        <svg width="100%" height="100%" viewBox="0 0 1920 700" preserveAspectRatio="none">
          {/* River path */}
          <path
            d="M0,700 L0,300 
               C160,350 320,250 480,300 
               C640,350 800,250 960,300 
               C1120,350 1280,250 1440,300 
               C1600,350 1760,250 1920,300 
               L1920,700 Z"
            fill="#48cae4"
          />

          {/* River highlights */}
          <path
            d="M0,700 L0,350 
               C160,400 320,300 480,350 
               C640,400 800,300 960,350 
               C1120,400 1280,300 1440,350 
               C1600,400 1760,300 1920,350 
               L1920,700 Z"
            fill="#90e0ef"
            opacity="0.7"
          />

          {/* River ripples */}
          {Array.from({ length: 20 }).map((_, i) => (
            <path
              key={i}
              d={`M${i * 100},${350 + Math.sin(i) * 20} Q${i * 100 + 25},${340 + Math.sin(i) * 20} ${i * 100 + 50},${350 + Math.sin(i) * 20}`}
              stroke="#caf0f8"
              strokeWidth="2"
              fill="none"
            />
          ))}
        </svg>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-[10vh]">
        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2b2d42] mb-4">My Journey</h2>
            <p className="text-lg text-[#2b2d42]">A path of exploration and exploitation, coming soon</p>
          </div>

          <div className="relative">
            {/* Journey river line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#83c5be]"></div>

            {/* Journey steps */}
            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#83c5be] z-10"></div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                    <Card className="bg-white/80 backdrop-blur-sm border-[#83c5be] overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-md">
                      <CardHeader className="pb-2 bg-[#83c5be]/20">
                        <div className="flex items-center gap-3">
                          {step.icon}
                          <div>
                            <CardTitle className="text-xl text-[#2b2d42]">{step.title}</CardTitle>
                            <p className="text-sm text-[#6c757d]">{step.year}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#2b2d42]">{step.content}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

