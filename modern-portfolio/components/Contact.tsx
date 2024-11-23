"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-20 bg-black/50" id="contact">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400">Let's work together</p>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-zinc-900 border-zinc-800
">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out through any of these platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="mailto:baluchilukala900@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  baluchilukala900@gmail.com
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="tel:+919390521902">
                  <Phone className="mr-2 h-4 w-4" />
                  +91 9390521902
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://github.com/Balasubramanyam-Chilukala" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://www.linkedin.com/in/balasubramanyam-chilukala-186933255/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

