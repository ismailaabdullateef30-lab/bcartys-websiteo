'use client'

import { useEffect, useState, useRef } from 'react'

export default function Testimonials() {
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

  const testimonials = [
    {
      name: 'John Okonkwo',
      title: 'Project Owner',
      text: 'TRex Construction delivered our residential project ahead of schedule and exceeded quality expectations. Highly professional team!',
      rating: 5,
    },
    {
      name: 'Amara Nwosu',
      title: 'Real Estate Developer',
      text: 'Working with TRex was seamless. Their transparency and communication kept us informed throughout the entire construction process.',
      rating: 5,
    },
    {
      name: 'Chisom Adeyemi',
      title: 'Business Executive',
      text: 'Our commercial office was built with exceptional attention to detail. The safety standards and professionalism were outstanding.',
      rating: 5,
    },
    {
      name: 'Benjamin Eze',
      title: 'Property Manager',
      text: 'Best decision choosing TRex for our renovation project. They stayed within budget and delivered quality results on time.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-32 bg-background px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">Client Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${index * 150} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="p-8 bg-primary rounded-lg border border-accent/30 hover:border-accent/60 transition-all hover:shadow-lg hover:shadow-accent/20">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-primary-foreground/90 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="border-t border-accent/20 pt-4">
                    <p className="font-bold text-primary-foreground">{testimonial.name}</p>
                    <p className="text-accent text-sm">{testimonial.title}</p>
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
