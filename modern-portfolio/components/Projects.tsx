"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Skill Craft",
      description: "Full stack job suggestion platform built with React and Node.js",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://skill-craft-frontend.vercel.app/"
    },
    {
      title: "Eco-voice",
      description: "Climate action platform with Gemini API integration",
      image: "/placeholder.svg?height=300&width=400",
      link: "#"
    },
    {
      title: "Telugu Learning App",
      description: "Android application for learning Telugu using Java",
      image: "/placeholder.svg?height=300&width=400",
      link: "#"
    }
  ]

  return (
    <section className="py-20 bg-black/50" id="projects">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400">Some of my recent work</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

