"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import teamMembers from '@/data/team'
const About = () => {
  return (
    <div className="min-h-screen py-10 md:py-20 bg-background" id='about'>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-6">
            About EduOrbit
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transforming education through innovative technology and personalized learning experiences
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                At EduOrbit, we believe in democratizing education by making high-quality learning accessible to everyone. Our mission is to create an engaging, interactive, and personalized learning environment that empowers students and educators alike.
              </p>
              <ul className="space-y-4">
                {[
                  'Personalized Learning Paths',
                  'Interactive Course Content',
                  'Expert Instructors',
                  'Global Learning Community'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Students' },
              { number: '500+', label: 'Courses' },
              { number: '150+', label: 'Instructors' },
              { number: '95%', label: 'Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/30 py-20 " id='team'>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Leadership Team
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-background rounded-lg p-6 text-center shadow-lg"
              >
                <motion.div 
                  className="relative w-32 h-32 mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                    className="rounded-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <Link href={member.linkedin} target='_blank' className="text-muted-foreground hover:text-primary transition-colors">
                    <FaLinkedin size={20} />
                  </Link>
                  <Link href={member.github} target='_blank' className="text-muted-foreground hover:text-primary transition-colors">
                    <FaGithub size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
