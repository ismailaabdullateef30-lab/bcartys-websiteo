'use client'

import { useEffect, useState, useRef } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const highlights = [
    { number: '10+', text: 'Years Experience' },
    { number: '50+', text: 'Certified Engineers' },
    { number: '100+', text: 'Completed Projects' },
  ]

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-background px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About TRex Construction</h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl leading-relaxed">
            TRex Construction is a modern construction firm specializing in building infrastructure, residential
            complexes, commercial structures, and renovation projects. We combine technology, expertise, and skilled
            labor to deliver outstanding results on every project.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="p-8 bg-primary rounded-lg border border-accent/30 hover:border-accent/60 transition-all hover:shadow-lg hover:shadow-accent/20">
                  <div className="text-4xl font-bold text-accent mb-2">{item.number}</div>
                  <p className="text-primary-foreground text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
