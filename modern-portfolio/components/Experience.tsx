"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      company: "Learn-X-Tech",
      position: "Backend Developer & Script Writer",
      period: "March 2024 - Present",
      description: "Building backend systems and creating content for social media"
    },
    {
      company: "Cisco",
      position: "Virtual Intern",
      period: "May 2024",
      description: "Learned about Cybersecurity Essentials and Network fundamentals"
    },
    {
      company: "Swecha",
      position: "App Development Intern",
      period: "July 2024 - Sept 2024",
      description: "Developed a Telugu learning application using Java"
    }
  ]

  return (
    <section className="py-20 bg-black" id="experience">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400">My professional journey</p>
        </motion.div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>{exp.company}</CardTitle>
                  <CardDescription className="text-gray-400">{exp.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

