"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import blogPosts from '@/data/blogPosts'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Grid, SlidersHorizontal } from 'lucide-react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from '@/styles/Blog.module.css'

const Blog = () => {
  const [sortOption, setSortOption] = useState<'recent' | 'oldest'>('recent')
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid')

  // Sort blog posts based on date
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return sortOption === 'recent' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime()
  })

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,  // Disable navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  // Blog post card component
  const BlogPostCard = ({ post, index }: { post: typeof blogPosts[0], index: number }) => (
    <motion.div
      key={post.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full px-2"
    >
      <Link href={`/blog/${post.id}`} className="block h-full">
        <div className="group rounded-xl overflow-hidden border bg-card hover:shadow-lg transition-all duration-300 h-full flex flex-col">
          <div className="relative h-48 overflow-hidden w-full">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-blue-600 text-white text-sm px-3 py-1 rounded-full hover:opacity-90 transition-opacity">
              {post.category}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-muted-foreground flex-grow line-clamp-3">
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
  )

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

        {/* Controls */}
        <div className="flex justify-between items-center mb-8">
          {/* View Mode Toggle */}
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('grid')}
              className="w-10 h-10"
            >
              <Grid className="h-5 w-5" />
            </Button>
            <Button
              variant={viewMode === 'carousel' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('carousel')}
              className="w-10 h-10"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>

          {/* Sort Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                Sort by {sortOption === 'recent' ? 'Most Recent' : 'Oldest First'}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSortOption('recent')}>
                Most Recent
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption('oldest')}>
                Oldest First
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Content */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className={styles['carousel-container']}>
            <Slider {...sliderSettings}>
              {sortedPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog
