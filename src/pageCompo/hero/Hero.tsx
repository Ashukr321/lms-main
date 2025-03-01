"use client"

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter, FaPlay, FaGraduationCap, FaCertificate, FaLaptopCode, FaUsers, FaClock, FaMobileAlt } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import VideoModal from '@/components/VideoModal'
import BackgroundLogo from '@/components/BackgroundLogo'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const isMobile = useMediaQuery('(max-width: 768px)')

  // Memoized hero images array
  const heroImages = useMemo(() => [
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Students collaborating on a learning platform"
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Modern learning environment"
    },
    {
      url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Digital education concept"
    },
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Online learning setup"
    }
  ], [])

  // Memoized features array
  const features = useMemo(() => [
    { icon: <FaGraduationCap className="w-6 h-6" />, text: "Expert-Led Courses" },
    { icon: <FaCertificate className="w-6 h-6" />, text: "Verified Certificates" },
    { icon: <FaLaptopCode className="w-6 h-6" />, text: "Hands-on Projects" },
    { icon: <FaMobileAlt className="w-6 h-6" />, text: "Mobile Learning" },
    { icon: <FaUsers className="w-6 h-6" />, text: "Community Support" },
    { icon: <FaClock className="w-6 h-6" />, text: "Lifetime Access" },
  ], [])

  // Auto-rotate images with useCallback
  useEffect(() => {
    if (!isMobile) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        )
      }, 4000)

      return () => clearInterval(timer)
    }
  }, [heroImages.length, isMobile])

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-background/60 backdrop-blur-sm min-h-screen">
      {!isMobile && <BackgroundLogo />}
      
      {/* Glass Morphism Effect */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] backdrop-saturate-150" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
           

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-primary via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-sm leading-tight">
              Transform Your Learning Journey with EduOrbit
            </h1>
            <p className="text-base sm:text-lg xl:text-xl text-muted-foreground max-w-xl">
              Experience the future of education with our cutting-edge LMS platform. Personalized learning paths, interactive content, and real-time progress tracking - all in one place.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="https://lms-student-dashbord.vercel.app/">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r cursor-pointer from-primary via-blue-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-primary/20 text-sm sm:text-base"
                >
                  Start Learning
                </motion.button>
              </Link>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoModalOpen(true)}
                className="px-6 sm:px-8 py-3 border-2 border-primary/20 dark:border-primary/20 rounded-lg hover:bg-primary/10 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm shadow-lg hover:shadow-primary/20 text-sm sm:text-base"
              >
                <FaPlay size={16} />
                Watch Demo
              </motion.button>
            </div>

            {/* Quick Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-primary/5 border border-primary/10 backdrop-blur-sm"
                >
                  <div className="text-primary">{feature.icon}</div>
                  <span className="text-xs sm:text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 sm:gap-6 pt-4">
              <p className="text-muted-foreground text-sm sm:text-base">Follow us on:</p>
              <div className="flex gap-4">
                {[
                  { icon: <FaLinkedin size={20} />, href: "https://linkedin.com" },
                  { icon: <FaGithub size={20} />, href: "https://github.com" },
                  { icon: <FaTwitter size={20} />, href: "https://twitter.com" }
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -2 }}
                  >
                    <Link 
                      href={social.href} 
                      target="_blank" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats with Enhanced Animation */}
            <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-8 pt-6">
              {[
                { number: "50K+", text: "Active Students", icon: "👨‍🎓" },
                { number: "200+", text: "Expert Instructors", icon: "👨‍🏫" },
                { number: "1000+", text: "Course Library", icon: "📚" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center flex-1 min-w-[120px]"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-xl sm:text-2xl mb-1">{stat.icon}</span>
                    <h4 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary via-blue-500 to-blue-600 bg-clip-text text-transparent">
                      {stat.number}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{stat.text}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Hero Image with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-blue-600/20 mix-blend-overlay z-10" />
              
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  src={heroImages[currentImageIndex].url}
                  alt={heroImages[currentImageIndex].alt}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </AnimatePresence>
              
              {/* Image Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
              
              {/* Floating Achievement Cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 left-4 p-3 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-xl backdrop-blur-sm z-20"
              >
                <div className="flex items-center gap-2">
                  <FaCertificate className="text-yellow-500 w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="text-xs sm:text-sm font-medium">Certified Courses</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-4 right-4 p-3 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-xl backdrop-blur-sm z-20"
              >
                <div className="flex items-center gap-2">
                  <FaUsers className="text-primary w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="text-xs sm:text-sm font-medium">Live Sessions</span>
                </div>
              </motion.div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-primary/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -left-4 w-32 sm:w-40 h-32 sm:h-40 bg-blue-600/10 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
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
