"use client"

import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import logo from "../../assets/Logo.png"
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 md:w-12 md:h-12 relative">
                <Image 
                  src={logo} 
                  alt="logo" 
                  className="object-contain"
                  fill
                  priority
                />
              </div>
            </Link>
            <p className="text-muted-foreground">
              Transform your learning journey with our cutting-edge LMS platform. Join thousands of learners worldwide.
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </Link>
              <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <FaGithub size={20} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              
              {/* <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates and learning tips.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border bg-background"
              />
              <button 
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg hover:opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EduOrbit LMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
