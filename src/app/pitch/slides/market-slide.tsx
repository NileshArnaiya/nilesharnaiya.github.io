
import { Flex, Text, Button, Card } from "@radix-ui/themes";


export default function MarketSlide() {
  return (
    <div className="slide bg-white rounded-lg shadow-lg p-8 min-h-[600px]">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-700 border-b-2 border-purple-500 pb-2 mb-6">
        Target Market & Business Model
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-500">Target Users:</h3>

          <div className="grid gap-4">
            <MetricCard number="1M+" label="Content Creators" />
            <MetricCard number="3.7M" label="Math Educators in the US" />
            <MetricCard number="40K+" label="Educational YouTube Channels" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-500">Business Model:</h3>

          <StatBox number="$79/month" text="Content creator subscription - 200 videos per month" />
          <StatBox number="$1,500/year" text="School subscription (8 users)" />
          <StatBox number="$20/month" text="Individual educator subscription - 40 videos per month" />
          <StatBox number="MVP Stage" text="Currently pre-revenue" />
        </div>
      </div>
    </div>
  )
}

function MetricCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-purple-50 rounded-lg p-6 text-center">
      <span className="block text-3xl font-bold text-purple-700 mb-2">{number}</span>
      <span className="text-gray-600">{label}</span>
    </div>
  )
}

function StatBox({ number, text }: { number: string; text: string }) {
  return (
    <Card className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4 rounded-r-md">
      <p className="text-xl font-bold text-purple-700 mb-1">{number}</p>
      <p className="text-gray-700">{text}</p>
    </Card>
  )
}

