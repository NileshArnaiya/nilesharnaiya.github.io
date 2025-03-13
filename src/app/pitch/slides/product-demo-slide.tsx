import type React from "react"
import { Eye, FastForward, Mic, BarChart } from "lucide-react"

export default function ProductDemoSlide() {
  return (
    <div className="slide bg-white rounded-lg shadow-lg p-8 min-h-[600px]">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-700 border-b-2 border-purple-500 pb-2 mb-6">
        Product Demo
      </h2>

      <h3 className="text-xl font-semibold mb-4 text-purple-500">Our Core Features:</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <FeatureCard
            icon={<Eye className="h-5 w-5" />}
            title="Visual Animation Creator"
            description="No-code interface for creating all types of animations in all subjects not just math"
          />

          <FeatureCard
            icon={<FastForward className="h-5 w-5" />}
            title="Step-by-Step Animator"
            description="Shows visually appealing processes in motion to edit, verify each scene."
          />
        </div>

        <div>
          <FeatureCard
            icon={<Mic className="h-5 w-5" />}
            title="Voice and Music Integration"
            description="AI or custom teacher voiceovers with background music"
          />

          <FeatureCard
            icon={<BarChart className="h-5 w-5" />}
            title="Creator Dashboard"
            description="Analytics and content management for creators"
          />
        </div>
      </div>

      <div className="bg-gray-200 mt-6 rounded-lg flex items-center justify-center text-gray-500 italic">
        <img
          src="/images/bro.png"
          alt="Product Demo"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <p className="mt-4 font-medium text-purple-500">
        <span className="font-bold ">Current Status:</span> MVP stage, preparing for beta launch with content creators
        and educators
      </p>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-center bg-gray-50 rounded-lg p-4 mb-4">
      <div className="bg-purple-500 text-white h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-purple-700">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}
