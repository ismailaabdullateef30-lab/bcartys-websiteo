'use client'

import { useState } from 'react'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Services from '@/components/sections/services'
import Portfolio from '@/components/sections/portfolio'
import WhyChooseUs from '@/components/sections/why-choose-us'
import Testimonials from '@/components/sections/testimonials'
import Contact from '@/components/sections/contact'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
