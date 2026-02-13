import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappUrl = "https://wa.me/2349075125087?text=Hi%20Ubyflow!%20I'm%20interested%20in%20joining%20the%20waitlist%20🚀"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-black/30 py-4'
          : 'backdrop-blur-0 bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Desktop Logo */}
        <div className="hidden md:block">
          <img
            src="/logos/ubyflow-logo-white.png"
            alt="Ubyflow"
            className="h-8 opacity-80 hover:opacity-100 transition-opacity"
            onError={(e) => {
              // Fallback to text if image fails
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'block'
            }}
          />
          <span className="hidden text-white text-xl font-bold">ubyflow</span>
        </div>

        {/* Mobile Logomark */}
        <div className="md:hidden">
          <div className="w-10 h-10 rounded-full bg-uby-yellow flex items-center justify-center">
            <img
              src="/logos/ubyflow-logomark.svg"
              alt="U"
              className="h-6 w-6"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <span className="hidden text-black text-lg font-bold">U</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-uby-yellow text-black px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:scale-105 hover:shadow-[0_0_20px_rgba(255,195,0,0.4)] active:scale-98 transition-all duration-200"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  )
}

export default Navbar
