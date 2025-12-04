'use client'

import { useEffect, useState, useRef } from 'react'

export default function Portfolio() {
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

  const projects = [
    { title: 'Residential Complex', location: 'Lagos', image: '/modern-apartment-complex.png' },
    { title: 'Commercial Tower', location: 'Abuja', image: '/modern-office-building-skyscraper.jpg' },
    { title: 'Shopping Mall', location: 'Port Harcourt', image: '/large-shopping-mall-interior.jpg' },
    { title: 'Industrial Park', location: 'Kano', image: '/industrial-construction-site.jpg' },
    { title: 'Office Complex', location: 'Lagos Island', image: '/modern-corporate-office.png' },
    { title: 'Residential Estate', location: 'Ikoyi', image: '/luxury-residential-estate-development.jpg' },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background px-4">
      <div className="max-w-6xl mx-auto">
        <div ref={ref}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">Our Portfolio</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="group relative overflow-hidden rounded-lg h-64 cursor-pointer">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-primary-foreground">{project.title}</h3>
                    <p className="text-accent text-sm">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
