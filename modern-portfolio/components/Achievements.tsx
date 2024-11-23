export default function Achievements() {
  const achievements = [
    "Awarded 1st place in a Hackathon conducted by CourseVita.",
    "Solved 300+ problems in Leetcode.",
    "6 stars in HackerRank for problem solving in Java.",
    "Awarded 2nd Place in coding competition conducted by codechef at Anurag University.",
    "Got 4th place in TECKHACK#3 hackathon at Anurag University.",
    "Competed in the Data Dynamo 24-hour hackathon at Anurag University."
  ]

  return (
    <section id="achievements" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-lg">{achievement}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

