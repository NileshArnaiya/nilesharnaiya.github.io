export default function TeamSlide() {
  return (
    <div className="slide bg-white rounded-lg shadow-lg p-8 min-h-[600px]">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-700 border-b-2 border-purple-500 pb-2 mb-6">Team</h2>

      <div className="space-y-6">
        <TeamMember
          initials="NJ"
          name="Nilesh Jain"
          title="Founder"
          bio="Yale Researcher, Data scientist and Mathematician, Previous ventures: pybooks.com, upcourse.io"
        />

        <TeamMember
          initials="AG"
          name="Alexander Gil"
          title="Co-Founder"
          bio="Amazon Senior Data Scientist, Expertise in machine learning and data visualization"
        />

        <TeamMember
          initials="DS"
          name="Dhruvil Shah"
          title="Software Engineering Intern"
          bio="4th year Computer Science student at MIT, Specialized in computational mathematics and visualization"
        />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-purple-500">Advisors:</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <TeamMember initials="YV" name="Yale Ventures" title="" bio="Institutional support and grant awarded" />

        <TeamMember initials="LH" name="LocalhostHQ" title="" bio="Upcoming grant" />
      </div>
    </div>
  )
}

function TeamMember({
  initials,
  name,
  title,
  bio,
}: {
  initials: string
  name: string
  title: string
  bio: string
}) {
  return (
    <div className="flex items-start">
      <div className="bg-gray-200 h-14 w-14 rounded-full flex items-center justify-center text-gray-600 font-bold text-lg mr-4 flex-shrink-0">
        {initials}
      </div>
      <div>
        <h4 className="font-semibold text-purple-700">
          {name}
          {title && <span>, {title}</span>}
        </h4>
        <p className="text-gray-600 text-sm whitespace-pre-line">{bio}</p>
      </div>
    </div>
  )
}

