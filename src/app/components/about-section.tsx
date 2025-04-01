"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Globe, Briefcase, Heart } from "lucide-react"

export default function AboutSection() {
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
          <h2 className="text-3xl md:text-4xl font-ghibli text-[#2b2d42] mb-4">About Me</h2>
          <p className="text-lg text-[#2b2d42]">
            Currently at Yale as a research associate and building multiple neuroscience projects
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="mb-8 bg-white/80 backdrop-blur-sm border-[#83c5be]">
            <CardHeader className="bg-[#83c5be]/20">
              <CardTitle className="flex items-center gap-2 text-[#2b2d42]">
                <Briefcase className="h-6 w-6 text-[#2b2d42]" />
                What I'm Up To
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Mr. Bean Coding"
                    width={200}
                    height={200}
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-3 list-disc pl-5 text-[#2b2d42]">
                    <li>Podcasting - https://calendly.com/nilesharnaiya</li>
                    <li>Running The Residency in Bangalore</li>
                    <li>Mentoring on platforms like Topmate and Mentorcruise</li>
                    <li>Previously built Buildawn.com</li>
                    <li>Helping organize IndabaX, spreading AI knowledge across Africa</li>
                    <li>Creating Mr. Bean-inspired coding tutorials for beginners</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="mb-8 bg-white/80 backdrop-blur-sm border-[#83c5be]">
            <CardHeader className="bg-[#83c5be]/20">
              <CardTitle className="flex items-center gap-2 text-[#2b2d42]">
                <Globe className="h-6 w-6 text-[#2b2d42]" />
                Currently Building
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <ul className="space-y-3 list-disc pl-5 text-[#2b2d42]">
                    <li>
                      <strong>Upcourse.io</strong> – Interactive education labs to learn anything
                    </li>
                    <li>
                      <strong>Pybooks.com</strong> – Jupyter notebooks for teachers
                    </li>
                    <li>
                      <strong>CodeUpLab</strong> – Helping students learn programming and data science
                    </li>
                    <li>
                      <strong>NavalNow</strong> – Naval Ravikant's wisdom distilled
                    </li>
                    <li>
                      <strong>1Kitchen POS</strong> – Restaurant management software
                    </li>
                    <li>
                      <strong>Linux Adventures</strong> – Open-source tutorials and projects
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Linux Coding"
                    width={200}
                    height={200}
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-white/80 backdrop-blur-sm border-[#83c5be]">
            <CardHeader className="bg-[#83c5be]/20">
              <CardTitle className="flex items-center gap-2 text-[#2b2d42]">
                <Heart className="h-6 w-6 text-[#2b2d42]" />
                Things I Love
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#2b2d42]">
                <div>
                  <h4 className="font-medium mb-2">Hobbies</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Yoga</li>
                    <li>Reading</li>
                    <li>AI Art</li>
                    <li>Astronomy</li>
                    <li>Public Speaking</li>
                    <li>Walking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Activities</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Traveling (solo & with friends)</li>
                    <li>Mentoring</li>
                    <li>Volunteering</li>
                    <li>Writing emails</li>
                    <li>Linux tinkering</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Passions</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Teaching</li>
                    <li>Content Creation</li>
                    <li>Gift-Giving</li>
                    <li>Cycling</li>
                    <li>Animated visual learning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Interests</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Human Behavior</li>
                    <li>Economics</li>
                    <li>Cricket</li>
                    <li>Rafting</li>
                    <li>Naruto</li>
                    <li>Mr. Bean</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Travel"
                  width={100}
                  height={100}
                  className="rounded-lg w-full h-auto object-cover"
                />
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Mr. Bean"
                  width={100}
                  height={100}
                  className="rounded-lg w-full h-auto object-cover"
                />
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Linux"
                  width={100}
                  height={100}
                  className="rounded-lg w-full h-auto object-cover"
                />
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Coding"
                  width={100}
                  height={100}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

