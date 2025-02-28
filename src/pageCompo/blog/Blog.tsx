"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import blogPosts from '@/data/blogPosts'


const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Latest from Our Blog
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in education and e-learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full" // Added to ensure consistent height
            >
              <Link href={`/blog/${post.id}`} className="block h-full"> {/* Made Link full height */}
                <div className="group rounded-xl overflow-hidden border bg-card hover:shadow-lg transition-all duration-300 h-full flex flex-col"> {/* Added flex column */}
                  <div className="relative h-48 overflow-hidden w-full"> {/* Fixed width */}
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-blue-600 text-white text-sm px-3 py-1 rounded-full hover:opacity-90 transition-opacity">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow"> {/* Made content area flex and growing */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2"> {/* Added line clamp */}
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground flex-grow line-clamp-3"> {/* Added line clamp and flex grow */}
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-primary font-medium">
                      Read More 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
