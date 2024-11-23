"use client"

import { motion } from "framer-motion"
import { Code2, Layout, Server } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: <Layout className="w-10 h-10 text-red-500" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React.js and Next.js with TypeScript"
    },
    {
      icon: <Server className="w-10 h-10 text-red-500" />,
      title: "Backend Development",
      description: "Developing robust server-side applications with Node.js, Express, and Python (Django/FastAPI)"
    },
    {
      icon: <Code2 className="w-10 h-10 text-red-500" />,
      title: "Full Stack Development",
      description: "End-to-end application development including database design, API development, and frontend implementation"
    }
  ]

  return (
    <section className="py-20 bg-black" id="services">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-gray-400">Specialized in full stack development and modern web technologies</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

