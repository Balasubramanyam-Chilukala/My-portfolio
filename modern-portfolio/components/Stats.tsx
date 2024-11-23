"use client"

import { motion } from "framer-motion"

export default function Stats() {
  const stats = [
    { number: "300+", label: "LeetCode Problems" },
    { number: "6", label: "HackerRank Stars" },
    { number: "3", label: "Major Projects" },
    { number: "2", label: "Hackathon Wins" },
  ]

  return (
    <section className="py-20 bg-black/50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

