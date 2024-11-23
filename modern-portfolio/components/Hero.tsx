"use client"

import { motion } from "framer-motion"
import { Download, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2" />
      </div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-red-500">Hello,</span> I'm Balasubramanyam
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-400 mb-8">
              Full Stack Developer
              <br />
              Specializing in React, Node.js, and Python
            </h2>
            <div className="flex gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600">
                Hire Me <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Download CV <Download className="ml-2" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
              <div className="absolute inset-0 bg-red-500 rounded-full transform -translate-x-4 translate-y-4" />
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meeeee-MRsCPLJoKT4EV03HmZTkJmXddJeUyI.png"
                  alt="Balasubramanyam Chilukala"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

