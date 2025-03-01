"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BackgroundLogo = () => {
  const [viewport, setViewport] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setViewport({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Main Logo Shape */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-primary via-blue-500 to-blue-600 blur-2xl" />
      </motion.div>

      {/* Animated Circles */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, rotate: 0, scale: 1 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20 - index * 3,
            delay: index * 1,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className={`w-[700px] h-[700px] border-[3px] rounded-full
              ${index === 0 ? 'border-primary/40 shadow-lg shadow-primary/20' :
                index === 1 ? 'border-blue-500/30 shadow-lg shadow-blue-500/20' :
                  'border-blue-600/20 shadow-lg shadow-blue-600/20'}`}
            style={{
              transform: `scale(${1 + index * 0.2})`,
            }}
          />
        </motion.div>
      ))}

      {/* Floating Particles */}
      {viewport.width > 0 && [...Array(30)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          initial={{
            opacity: 0,
            x: Math.random() * viewport.width,
            y: Math.random() * viewport.height,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            opacity: [0, 0.8, 0],
            x: Math.random() * viewport.width,
            y: Math.random() * viewport.height,
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 8 + Math.random() * 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
          className={`absolute w-2 h-2 rounded-full
            ${index % 3 === 0 ? 'bg-primary/30' :
              index % 3 === 1 ? 'bg-blue-500/30' :
                'bg-blue-600/30'}
            blur-sm shadow-lg`}
        />
      ))}

      {/* Glowing Lines (Fixed - Uses Rotation Style) */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`line-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{
            duration: 10,
            delay: index * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            transform: `rotate(${index * 45}deg)`,
            borderTop: index % 2 === 0 ? '2px solid rgba(59,130,246,0.2)' : '2px solid rgba(59,130,246,0.1)',
            filter: 'blur(2px)'
          }}
        />
      ))}

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-90" />

      {/* Modern Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  )
}

export default BackgroundLogo
