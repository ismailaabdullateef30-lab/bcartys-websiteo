'use client'

import { useEffect, useState, useRef } from 'react'

export default function Services() {
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

  const services = [
    {
      title: 'Building Construction',
      description: 'Design and construct modern residential and commercial buildings to exact specifications',
      icon: '🏢',
    },
    {
      title: 'Architecture & Design',
      description: 'Expert structural design combining aesthetics with engineering excellence',
      icon: '📐',
    },
    {
      title: 'Renovations & Remodeling',
      description: 'Transform spaces with professional renovation and modernization services',
      icon: '🔨',
    },
    {
      title: 'Infrastructure Development',
      description: 'Build roads, bridges, and critical infrastructure with precision',
      icon: '🌉',
    },
    {
      title: 'Project Management',
      description: 'End-to-end project oversight ensuring timely and budget-conscious delivery',
      icon: '📋',
    },
    {
      title: 'Civil Engineering',
      description: 'Professional civil engineering consultations for complex projects',
      icon: '⚙️',
    },
  ]

  return (
    <section id="services" ref={ref} className="py-20 md:py-32 bg-primary px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-12 text-center">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="p-8 bg-background rounded-lg border border-accent/30 hover:border-accent hover:shadow-lg hover:shadow-accent/30 transition-all group cursor-pointer">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
