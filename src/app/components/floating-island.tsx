"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Globe, Briefcase, Heart } from "lucide-react"

export default function FloatingIsland() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects
  const islandY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0])

  return (
    <div ref={containerRef} className="min-h-screen w-full overflow-hidden relative py-20">
      {/* Sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e6f7ff] to-[#caf0f8]" />

      {/* Clouds - using SVG instead of placeholder images */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.g style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}>
          <ellipse cx="20%" cy="20%" rx="100" ry="50" fill="white" opacity="0.8" />
        </motion.g>
        <motion.g style={{ y: useTransform(scrollYProgress, [0, 1], [50, -100]) }}>
          <ellipse cx="80%" cy="40%" rx="90" ry="45" fill="white" opacity="0.8" />
        </motion.g>
      </svg>

      {/* Floating island - using SVG instead of placeholder image */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1200px]"
        style={{ y: islandY }}
      >
        <svg width="100%" height="300" viewBox="0 0 1200 300" preserveAspectRatio="none">
          {/* Island base */}
          <ellipse cx="600" cy="150" rx="500" ry="100" fill="#90be6d" />

          {/* Island top */}
          <ellipse cx="600" cy="120" rx="480" ry="90" fill="#43aa8b" />

          {/* Trees */}
          <g transform="translate(300, 50)">
            <rect x="-5" y="0" width="10" height="30" fill="#774936" />
            <polygon points="-20,30 0,-10 20,30" fill="#2d6a4f" />
            <polygon points="-15,15 0,-20 15,15" fill="#40916c" />
          </g>

          <g transform="translate(800, 70)">
            <rect x="-5" y="0" width="10" height="30" fill="#774936" />
            <polygon points="-20,30 0,-10 20,30" fill="#2d6a4f" />
            <polygon points="-15,15 0,-20 15,15" fill="#40916c" />
          </g>

          <g transform="translate(500, 40)">
            <rect x="-7" y="0" width="14" height="40" fill="#774936" />
            <polygon points="-30,40 0,-15 30,40" fill="#2d6a4f" />
            <polygon points="-20,20 0,-30 20,20" fill="#40916c" />
          </g>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-[20vh]">
        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2b2d42] mb-4">About Me</h2>
            <p className="text-lg text-[#2b2d42]">
              Currently at Yale doing neuroscience and building TryBibby.com (Bibby AI)
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-[#83c5be]">
              <CardHeader className="bg-[#83c5be]/20">
                <CardTitle className="flex items-center gap-2 text-[#2b2d42]">
                  <Briefcase className="h-6 w-6 text-[#2b2d42]" />
                  What I'm Up To
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 list-disc pl-5 text-[#2b2d42]">
                <li>Podcasting - https://calendly.com/nilesharnaiya</li>
                  <li>Working on Trybibby.com</li>
                  <li>Working on pybooks.com</li>
                  <li>Working on mathvideo.ai - https://v0-math-video-landing-page.vercel.app/</li> 
                  <li>Working on upcourse.io</li>
                  
                  <li>Previously built Buildawn.com, codeuplab.com</li>
                  <li>Previously helped organize IndabaX, part of communities like The Residency and Imbizo.africa</li>
                  <li>Creating Mr. Bean-inspired 3blue1brown coding tutorials on instagram and youtube for fun</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-[#83c5be]">
              <CardHeader className="bg-[#83c5be]/20">
                <CardTitle className="flex items-center gap-2 text-[#2b2d42]">
                  <Globe className="h-6 w-6 text-[#2b2d42]" />
                  Currently Building
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 list-disc pl-5 text-[#2b2d42]">
                <li>
                    <strong>Trybibby.com</strong> – Cursor for writing research 
                  </li>

                  <li>
                    <strong>Upcourse.io</strong> – Interactive education labs to learn anything
                  </li>
                  <li>
                    <strong>Pybooks.com</strong> – Jupyter notebooks for teachers
                  </li>
                  <li>
                    <strong>Mathvideo.ai</strong> – Create 3blue1brown style animated videos 
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
                
                </ul>
              </CardContent>
            </Card>

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
                      <li>Traveling anywhere(solo & with friends)</li>
                      <li>Mentoring</li>
                      <li>Volunteering</li>
                      <li>Sending long emails</li>
                      <li>Surfing</li>
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
                      <li>Any brain or story books</li>
                      <li>Economics</li>
                      <li>Cricket</li>
                      <li>Rafting</li>
                      <li>Naruto</li>
                      <li>Mr. Bean</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

