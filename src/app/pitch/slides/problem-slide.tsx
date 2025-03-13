import { Flex, Text, Button, Card } from "@radix-ui/themes";

export default function ProblemSlide() {
  return (
    <div className="slide bg-white rounded-lg shadow-lg p-8 min-h-[600px]">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-700 border-b-2 border-purple-500 pb-2 mb-6">
        Problem & Opportunity
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-500">The Problem:</h3>

          <StatBox number="68%" text="of students report not understanding how math applies to real life" />
          <StatBox number="71%" text="of content creators lack technical skills to create visual math content" />
          <StatBox number="25th" text="US global ranking in math proficiency" />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-500">The Opportunity:</h3>

          <StatBox number="$8.2B" text="annual spend on math and science supplemental materials" />
          <StatBox number="200%" text="growth in mathematical,science content on YouTube and Instagram" />
          <StatBox number="3X" text="EdTech adoption accelerated since 2020" />
        </div>
      </div>
    </div>
  )
}

function StatBox({ number, text }: { number: string; text: string }) {
  return (
    <Card className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4 rounded-r-md">
      <p className="text-2xl font-bold text-purple-700 mb-1">{number}</p>
      <p className="text-gray-700">{text}</p>
    </Card>
  )
}

