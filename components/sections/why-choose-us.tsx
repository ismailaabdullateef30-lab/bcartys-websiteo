'use client'

import { useEffect, useState, useRef } from 'react'

export default function WhyChooseUs() {
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

  const reasons = [
    { title: 'High-Quality Workmanship', icon: '⭐' },
    { title: 'Fast Project Delivery', icon: '⚡' },
    { title: 'Safety-First Construction', icon: '🛡️' },
    { title: 'Competitive Pricing', icon: '💰' },
    { title: 'Modern Tools & Equipment', icon: '🔧' },
    { title: 'Transparent Communication', icon: '💬' },
  ]

  return (
    <section id="why-us" ref={ref} className="py-20 md:py-32 bg-primary px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-12 text-center">Why Choose TRex?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="p-8 bg-background/10 rounded-lg border border-accent/30 hover:border-accent hover:bg-background/20 transition-all text-center">
                  <div className="text-5xl mb-4">{reason.icon}</div>
                  <h3 className="text-lg font-bold text-primary-foreground">{reason.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
