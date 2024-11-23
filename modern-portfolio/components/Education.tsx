export default function Education() {
  const education = [
    {
      institution: "Anurag University, Hyderabad, India",
      degree: "ECE",
      duration: "2022 - 2026",
      details: "CGPA: 9.35 (expected)"
    },
    {
      institution: "Sri Gayatri Junior College, Hyderabad, India",
      degree: "TSBIE (Class XII)",
      duration: "2020 - 2022",
      details: "Marks: 962/1000"
    },
    {
      institution: "City High School, Suryapet, India",
      degree: "SSC Telangana (Class X)",
      duration: "2019 - 2020",
      details: "CGPA: 10"
    }
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
              <p className="text-gray-600 mb-2">{edu.degree}</p>
              <p className="text-gray-500 mb-2">{edu.duration}</p>
              <p className="text-gray-700">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

