export default function FundingSlide() {
  return (
    <div className="slide bg-white rounded-lg shadow-lg p-8 min-h-[600px]">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-700 border-b-2 border-purple-500 pb-2 mb-6">
        Funding & Vision
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-500">Funding Ask:</h3>

          <div className="bg-purple-50 rounded-lg p-6 text-center mb-6">
            <span className="block text-3xl font-bold text-purple-700 mb-2">$250K</span>
            <span className="text-gray-600">Seed Round</span>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-purple-500">Use of Funds:</h3>

          <div className="flex h-8 rounded-md overflow-hidden mb-2">
            <div className="bg-purple-600 w-[40%] flex items-center justify-center text-white text-sm font-medium">
              40%
            </div>
            <div className="bg-purple-700 w-[30%] flex items-center justify-center text-white text-sm font-medium">
              30%
            </div>
            <div className="bg-purple-500 w-[20%] flex items-center justify-center text-white text-sm font-medium">
              20%
            </div>
            <div className="bg-purple-400 w-[10%] flex items-center justify-center text-white text-sm font-medium">
              10%
            </div>
          </div>

          <div className="flex text-xs text-gray-600">
            <div className="w-[40%] text-center">Product</div>
            <div className="w-[30%] text-center">Team</div>
            <div className="w-[20%] text-center">Marketing</div>
            <div className="w-[10%] text-center">Ops</div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-500">Vision & Milestones:</h3>

          <div className="flex justify-between relative">
            <Milestone year="Y1" text="Beta launch with 50+ content creators and 20 schools" isFirst={true} />
            <Milestone year="Y2" text="Expand to 500+ content creators and 100+ schools" />
            <Milestone year="Y3" text="International expansion and university-level content" />
          </div>
        </div>
      </div>

      <div className="italic text-center text-gray-600 my-8 px-8 text-lg">
        "Our vision is to make simple visualizations possible for all educators and content
        creators, helping their students everywhere to see the beauty and real-world applications of physics, chem, math, coding and machine learning."
      </div>

      <div className="text-center text-purple-700 text-lg">
        Contact:{" "}
        <a href="mailto:contact@mathvideo.ai" className="hover:underline">
          contact@mathvideo.ai
        </a>{" "}
        | (203) 390-8652
      </div>
    </div>
  )
}

function Milestone({
  year,
  text,
  isFirst = false,
}: {
  year: string
  text: string
  isFirst?: boolean
}) {
  return (
    <div className="w-[30%] text-center relative">
      {!isFirst && <div className="absolute top-[30px] right-[50%] w-full h-[3px] bg-gray-200 -z-10" />}
      <div className="bg-purple-700 text-white w-[60px] h-[60px] rounded-full flex items-center justify-center font-bold mx-auto mb-4">
        {year}
      </div>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  )
}

