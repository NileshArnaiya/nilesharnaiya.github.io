"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TitleSlide from "./slides/title-slide"
import ProblemSlide from "./slides/problem-slide"
import SolutionSlide from "./slides/solution-slide"
import ProductDemoSlide from "./slides/product-demo-slide"
import MarketSlide from "./slides/market-slide"
import TeamSlide from "./slides/team-slide"
import FundingSlide from "./slides/funding-slide"
import { Button } from "../components/button"

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    <TitleSlide key="title" />,
    <ProblemSlide key="problem" />,
    <SolutionSlide key="solution" />,
    <ProductDemoSlide key="product" />,
    <MarketSlide key="market" />,
    <TeamSlide key="team" />,
    <FundingSlide key="funding" />,
  ]

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6">
      <div className="relative">
        {slides[currentSlide]}

        {/* <div className="absolute bottom-4 right-4 text-sm text-gray-500">
          {currentSlide + 1}/{slides.length}
        </div> */}

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={goToPrevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft size={16} /> Previous
          </Button>

          <Button
            onClick={goToNextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 bg-black"
          >
            Next <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  )
}

