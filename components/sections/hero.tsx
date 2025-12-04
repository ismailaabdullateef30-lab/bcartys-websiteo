'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full h-screen bg-primary overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(/placeholder.svg?height=1080&width=1920&query=modern construction site skyscraper)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            TRex Construction
          </h1>
          <h2 className="text-xl md:text-2xl text-accent mb-8 font-light">
            Building the Future with Strength and Precision
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Reliable, innovative, and quality-driven construction services
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 md:px-10 md:py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105"
            >
              Get a Quote
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 md:px-10 md:py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
