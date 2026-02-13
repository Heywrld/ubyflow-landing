import { useEffect, useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Hero = () => {
  const badgeRef = useRef(null)
  const headlineRef = useRef(null)
  const taglineRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    // Staggered animations on page load
    const timers = [
      setTimeout(() => {
        if (headlineRef.current) {
          headlineRef.current.style.opacity = '1'
          headlineRef.current.style.transform = 'translateY(0)'
        }
      }, 400),
      setTimeout(() => {
        if (taglineRef.current) taglineRef.current.style.opacity = '1'
      }, 700),
      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.style.opacity = '1'
          ctaRef.current.style.transform = 'scale(1)'
        }
      }, 1000),
      setTimeout(() => {
        if (badgeRef.current) badgeRef.current.style.opacity = '1'
      }, 1200),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  const whatsappUrl = "https://wa.me/2349075125087?text=Hi%20Ubyflow!%20I'm%20interested%20in%20joining%20the%20waitlist%20🚀"

  return (
    <section className="relative min-h-screen md:h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-uby-yellow/5 via-transparent to-transparent" />

      {/* Network pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#FFC300" opacity="0.3" />
              <line x1="50" y1="50" x2="100" y2="50" stroke="#FFC300" strokeWidth="0.5" opacity="0.2" />
              <line x1="50" y1="50" x2="50" y2="100" stroke="#FFC300" strokeWidth="0.5" opacity="0.2" />
              <line x1="50" y1="50" x2="100" y2="100" stroke="#FFC300" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-block mb-6 opacity-0 transition-opacity duration-400"
        >
          <span className="bg-uby-yellow/20 text-uby-yellow px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Launching Q1 2026
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-[64px] font-bold text-white mb-6 opacity-0 translate-y-5 transition-all duration-800"
          style={{ transitionTimingFunction: 'ease-out' }}
        >
          Turn Crypto & Gift Cards into Naira, Instantly
        </h1>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-lg md:text-xl text-[#a3a3a3] mb-10 opacity-0 transition-opacity duration-600"
        >
          Fast conversions, seamless payments, zero stress.
        </p>

        {/* CTA Button */}
        <a
          ref={ctaRef}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-uby-yellow text-black px-8 py-4 rounded-lg font-semibold text-base md:text-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,195,0,0.4)] active:scale-98 transition-all duration-200 opacity-0 scale-90"
        >
          Join Waitlist
        </a>
      </div>
    </section>
  )
}

export default Hero
