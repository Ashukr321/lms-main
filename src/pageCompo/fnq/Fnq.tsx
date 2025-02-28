"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What courses does EduOrbit offer?",
    answer: "EduOrbit offers a wide range of courses across technology, business, creative arts, and personal development. Our catalogue includes programming, digital marketing, design, leadership, and more."
  },
  {
    question: "How does the learning experience work?",
    answer: "Our platform provides interactive video lessons, hands-on projects, quizzes, and peer collaboration. You can learn at your own pace with lifetime access to course materials and join live sessions with instructors."
  },
  {
    question: "Are there any prerequisites for joining courses?",
    answer: "Most courses are designed for all skill levels. Any specific prerequisites will be clearly mentioned in the course description. We also provide learning paths to help you progress systematically."
  },
  {
    question: "What kind of support is available?",
    answer: "We offer 24/7 technical support, dedicated mentors, active community forums, and regular office hours with instructors. You'll never feel stuck in your learning journey."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, our mobile app is available for both iOS and Android devices. You can download lessons for offline viewing and track your progress on the go."
  }
]

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div 
      className="border-b border-muted-foreground/20 last:border-none"
      initial={false}
      
    >
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Fnq = () => {
  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get quick answers to common questions about our learning platform
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto rounded-2xl bg-card p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Fnq
