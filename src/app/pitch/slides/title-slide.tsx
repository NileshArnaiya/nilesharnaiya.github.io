export default function TitleSlide() {
  return (
    <div className="slide bg-gradient-to-br from-purple-700 to-purple-500 text-white rounded-lg shadow-lg p-12 text-center min-h-[600px] flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">MathVideo.ai</h1>
      <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl">
        Create animated educational videos from text
      </p>

      <div className="mt-16 text-lg">
        <p>Nilesh Jain, Founder (Yale Researcher)</p>
        <p>Alexander Gil, Co-Founder (Amazon Senior Data Scientist)</p>
        <p className="mt-4">
          <a href="mailto:contact@mathvideo.ai" className="underline hover:no-underline">
            contact@mathvideo.ai
          </a>{" "}
          | mathvideo.ai
        </p>
      </div>
    </div>
  )
}

