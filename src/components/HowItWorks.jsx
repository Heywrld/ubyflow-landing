import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useEffect, useRef } from 'react'

const steps = [
  {
    number: 1,
    title: 'Sign Up',
    description: 'Create your account in under 2 minutes with just your email and phone number.',
  },
  {
    number: 2,
    title: 'Get Verified',
    description: 'Complete a quick KYC verification to unlock all features and higher limits.',
  },
  {
    number: 3,
    title: 'Start Trading',
    description: 'Buy, sell, or swap crypto and gift cards instantly. Funds hit your account in minutes.',
  },
]

const Step = ({ step, index }) => {
  const stepRef = useScrollAnimation(0.3)
  const lineRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && lineRef.current) {
            lineRef.current.style.width = '100%'
          }
        })
      },
      { threshold: 0.3 }
    )

    if (lineRef.current) {
      observer.observe(lineRef.current)
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current)
      }
    }
  }, [])

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div
        ref={stepRef}
        className="flex flex-col items-center md:items-start opacity-0 scale-95 transition-all duration-600"
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        <div className="w-16 h-16 rounded-full bg-uby-yellow flex items-center justify-center mb-4">
          <span className="text-black font-bold text-2xl">{step.number}</span>
        </div>
        <h3 className="text-white font-bold text-2xl mb-3 text-center md:text-left">
          {step.title}
        </h3>
        <p className="text-[#a3a3a3] text-base max-w-[280px] text-center md:text-left leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Connecting line - desktop only */}
      {index < steps.length - 1 && (
        <div
          ref={lineRef}
          className="hidden md:block flex-1 h-0.5 bg-uby-yellow mx-8 mt-8 transition-all duration-800"
          style={{ width: '0%' }}
        />
      )}
    </div>
  )
}

const HowItWorks = () => {
  return (
    <section className="bg-black py-24 md:py-[100px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
          Get Started in 3 Simple Steps
        </h2>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1">
              <Step step={step} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
