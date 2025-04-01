"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { MapPin, Briefcase, BookOpen, Globe, Star, GraduationCap } from "lucide-react"

export default function JourneySection() {
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

  const journeySteps = [
    {
      title: "The Beginning",
      icon: <Star className="text-blue-600" size={32} />,
      content: "I learned to code at 17 – late by today's standards. This sparked a passion for lifelong learning.",
      year: "Early Days",
    },
    {
      title: "Self-Education",
      icon: <BookOpen className="text-green-600" size={32} />,
      content: "I taught myself through platforms like edX, Udacity, and Coursera (when they were just starting!).",
      year: "Learning Phase",
    },
    {
      title: "Overcoming Challenges",
      icon: <Star className="text-orange-600" size={32} />,
      content:
        "After failing 12th grade, I bounced back by diving into internships, self-taught skills, and exploring the tech world.",
      year: "Resilience",
    },
    {
      title: "Bangalore Adventures",
      icon: <MapPin className="text-purple-600" size={32} />,
      content:
        "Bangalore became my second home, where I soaked up knowledge, collected swag, and ate a lot of free pizza at tech meetups.",
      year: "Exploration",
    },
    {
      title: "Career Experiments",
      icon: <Briefcase className="text-red-600" size={32} />,
      content: "I've held various roles – some successful, others not so much. But every experience shaped my path.",
      year: "Growth",
    },
    {
      title: "Teaching in South Africa",
      icon: <Globe className="text-teal-600" size={32} />,
      content: "I even taught for a semester in South Africa while pursuing my Master's degree.",
      year: "Global Experience",
    },
    {
      title: "Founding Projects",
      icon: <Star className="text-yellow-600" size={32} />,
      content: "Started multiple projects including Upcourse.io, Pybooks.com, CodeUpLab, NavalNow, and 1Kitchen POS.",
      year: "Entrepreneurship",
    },
    {
      title: "Yale Research",
      icon: <GraduationCap className="text-blue-800" size={32} />,
      content: "Heading to Yale as a research associate, continuing my journey in academia and research.",
      year: "Present",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-lg text-gray-700">A path of continuous learning, exploration, and growth</p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-black z-10"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        {step.icon}
                        <div>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                          <p className="text-sm text-gray-500">{step.year}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{step.content}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

