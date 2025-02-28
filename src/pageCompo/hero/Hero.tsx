"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter, FaPlay } from 'react-icons/fa'
import { motion } from 'framer-motion'
import VideoModal from '@/components/VideoModal'

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden py-24 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Transform Your Learning Journey with EduOrbit
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-xl">
              Experience the future of education with our cutting-edge LMS platform. Personalized learning paths, interactive content, and real-time progress tracking - all in one place.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="https://lms-student-dashbord.vercel.app/">
                <button className="px-8 py-3 bg-gradient-to-r cursor-pointer from-primary to-blue-600 text-white rounded-lg hover:opacity-90 transition-all">
                  Start Learning
                </button>
              </Link>
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="px-8 py-3 border border-primary dark:border-primary rounded-lg hover:bg-primary/10 transition-all flex items-center gap-2 cursor-pointer"
              >
                <FaPlay size={16} />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <p className="text-muted-foreground">Follow us on:</p>
              <div className="flex gap-4">
                <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <FaLinkedin size={24} />
                </Link>
                <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <FaGithub size={24} />
                </Link>
                <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <FaTwitter size={24} />
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div>
                <motion.h4 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                >
                  50K+
                </motion.h4>
                <p className="text-muted-foreground">Active Students</p>
              </div>
              <div>
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                >
                  200+
                </motion.h4>
                <p className="text-muted-foreground">Expert Instructors</p>
              </div>
              <div>
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                >
                  1000+
                </motion.h4>
                <p className="text-muted-foreground">Course Library</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Students collaborating on a learning platform" 
                className="w-full h-full object-cover rounded-2xl opacity-95"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://cdn.pixabay.com/video/2024/06/06/215475_tiny.mp4"
      />
    </section>
  )
}

export default Hero
