'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-12 text-center">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">Contact Information</h3>
              <p className="text-primary-foreground/70">Have a project in mind? We'd love to hear about it.</p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-accent text-2xl">✉️</div>
                <div>
                  <p className="font-semibold text-primary-foreground">Email</p>
                  <p className="text-primary-foreground/70">info@trexconstruction.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-accent text-2xl">📞</div>
                <div>
                  <p className="font-semibold text-primary-foreground">Phone</p>
                  <p className="text-primary-foreground/70">+234 (0) 808 123 4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-accent text-2xl">📍</div>
                <div>
                  <p className="font-semibold text-primary-foreground">Address</p>
                  <p className="text-primary-foreground/70">123 Construction Avenue, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-primary-foreground mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-background/10 border border-accent/30 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary-foreground mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-background/10 border border-accent/30 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary-foreground mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background/10 border border-accent/30 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
