"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users, Award, BarChart, Clock, Globe } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Rich Course Library",
      description: "Access thousands of courses across various subjects and disciplines."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Interactive Learning",
      description: "Engage with peers and instructors through discussions and live sessions."
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Certifications",
      description: "Earn recognized certificates upon successful course completion."
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and insights."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Flexible Learning",
      description: "Learn at your own pace with lifetime access to course content."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Global Community",
      description: "Join a diverse community of learners from around the world."
    }
  ]

  return (
    <section id="features" className="py-10 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
          >
            Why Choose EduOrbit?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Discover the features that make our learning platform stand out from the rest
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      
    </section>
  )
}

export default Features
