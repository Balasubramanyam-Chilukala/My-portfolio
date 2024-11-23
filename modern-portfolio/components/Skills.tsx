export default function Skills() {
  const skills = [
    { category: "Programming Languages", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
    { category: "Frontend Technologies", items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend Technologies", items: ["Node.js", "Express.js", "Django", "FastAPI"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis"] },
    { category: "DevOps & Tools", items: ["Git", "Docker", "AWS", "CI/CD", "Agile methodologies"] }
  ]

  return (
    <section id="skills" className="bg-zinc-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-red-500">{skillSet.category}</h3>
              <ul className="list-disc list-inside">
                {skillSet.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

