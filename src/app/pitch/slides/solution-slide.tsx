import type React from "react"
import { CuboidIcon as Cube, Brain, Music, BookOpen } from "lucide-react"

export default function SolutionSlide() {
  return (
    <div className="slide bg-white rounded-lg shadow-lg p-8 min-h-[600px]">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-700 border-b-2 border-purple-500 pb-2 mb-6">
        Solution
      </h2>

      <h3 className="text-xl font-semibold mb-4 text-purple-500">MathVideo.ai Platform</h3>

      <div className="space-y-4">
        <FeatureCard
          icon={<Cube className="h-6 w-6" />}
          title="Interactive 3D simulations generator"
          description="Create 3blue1brown style math animations without coding"
        />

        <FeatureCard
          icon={<Brain className="h-6 w-6" />}
          title="AI-powered accuracy verification"
          description="Ensures mathematical correctness in all generated content"
        />

        <FeatureCard
          icon={<Music className="h-6 w-6" />}
          title="Background music and voiceovers"
          description="AI or custom voiceovers to enhance the learning experience"
        />

        <FeatureCard
          icon={<BookOpen className="h-6 w-6" />}
          title="Cross-discipline applications"
          description="Covers math, physics, chemistry, and coding education"
        />
      </div>

      <div className="bg-gray-200  mt-6 rounded-lg flex items-center justify-center text-gray-500 italic">
  <img src="/images/Area.gif" alt="3D graph transformation animation" className="w-full h-full object-cover" />
</div>

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
    <div className="flex items-center bg-gray-50 rounded-lg p-4">
      <div className="bg-purple-500 text-white h-12 w-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-purple-700">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

