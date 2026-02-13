import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const formRef = useScrollAnimation(0.4)

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone) => {
    return /^(070|080|090|081|091|071|081|011|012|013|014|015|016|017|018|019)\d{8}$/.test(phone.replace(/\s/g, ''))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const newErrors = { ...errors }

    if (!value.trim()) {
      newErrors[name] = 'This field is required'
    } else if (name === 'email' && !validateEmail(value)) {
      newErrors[name] = 'Please enter a valid email address'
    } else if (name === 'phone' && !validatePhone(value)) {
      newErrors[name] = 'Please enter a valid Nigerian phone number'
    }

    setErrors(newErrors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate all fields
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid Nigerian phone number'
    }
    if (!formData.interest) newErrors.interest = 'Please select an option'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Console log form data
    console.log('Form submitted:', formData)

    // Show success state
    setTimeout(() => {
      setIsSuccess(true)
      setTimeout(() => {
        // Redirect to WhatsApp
        const message = encodeURIComponent(
          `Hi Ubyflow! I just submitted my details - ${formData.name}. Looking forward to joining!`
        )
        window.location.href = `https://wa.me/2349075125087?text=${message}`
      }, 1500)
    }, 300)
  }

  return (
    <section className="bg-[#0a0a0a] py-20 md:py-[120px]">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        <div
          ref={formRef}
          className="bg-[#1a1a1a] p-8 md:p-12 rounded-2xl shadow-[0_0_60px_rgba(255,195,0,0.08)] opacity-0 scale-[0.97] transition-all duration-700 relative"
        >
          {/* Pulsing glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-uby-yellow/5 animate-pulse pointer-events-none" />

          {!isSuccess ? (
            <>
              <h2 className="text-3xl md:text-[40px] font-bold text-white text-center mb-4">
                Join the Waitlist
              </h2>
              <p className="text-base text-[#a3a3a3] text-center mb-8">
                Be among the first to experience seamless crypto and gift card trading
              </p>

              <form onSubmit={handleSubmit} className="relative z-10">
                {/* Name */}
                <div className="mb-6">
                  <label className="block text-sm text-[#a3a3a3] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    className={`w-full bg-[#0a0a0a] border rounded-lg px-4 py-3.5 text-white text-[15px] transition-all duration-200 focus:outline-none focus:border-uby-yellow focus:ring-2 focus:ring-uby-yellow/10 focus:bg-[#121212] ${
                      errors.name ? 'border-red-500' : 'border-[#333]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-sm text-[#a3a3a3] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={`w-full bg-[#0a0a0a] border rounded-lg px-4 py-3.5 text-white text-[15px] transition-all duration-200 focus:outline-none focus:border-uby-yellow focus:ring-2 focus:ring-uby-yellow/10 focus:bg-[#121212] ${
                      errors.email ? 'border-red-500' : 'border-[#333]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label className="block text-sm text-[#a3a3a3] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="080XXXXXXXX"
                    className={`w-full bg-[#0a0a0a] border rounded-lg px-4 py-3.5 text-white text-[15px] transition-all duration-200 focus:outline-none focus:border-uby-yellow focus:ring-2 focus:ring-uby-yellow/10 focus:bg-[#121212] ${
                      errors.phone ? 'border-red-500' : 'border-[#333]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Interest Dropdown */}
                <div className="mb-6">
                  <label className="block text-sm text-[#a3a3a3] mb-2">
                    What excites you most about Ubyflow?
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-[#0a0a0a] border rounded-lg px-4 py-3.5 text-white text-[15px] transition-all duration-200 focus:outline-none focus:border-uby-yellow focus:ring-2 focus:ring-uby-yellow/10 focus:bg-[#121212] ${
                      errors.interest ? 'border-red-500' : 'border-[#333]'
                    }`}
                  >
                    <option value="">Select an option</option>
                    <option value="crypto">Crypto-to-Naira conversions</option>
                    <option value="giftcard">Gift card cash-out</option>
                    <option value="bills">Bill payments</option>
                    <option value="remittances">Fast remittances</option>
                    <option value="p2p">Peer-to-peer trading</option>
                    <option value="wallet">Multi-currency wallet</option>
                    <option value="all">All of the above</option>
                  </select>
                  {errors.interest && (
                    <p className="text-red-500 text-xs mt-1">{errors.interest}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-uby-yellow text-black py-4 rounded-lg font-bold text-base mt-6 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(255,195,0,0.3)] active:scale-98 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8 relative z-10 animate-in">
              <CheckCircle className="w-16 h-16 text-uby-yellow mx-auto mb-4 animate-scale-in" />
              <p className="text-white text-lg font-semibold mt-4">
                Thanks! Redirecting to WhatsApp...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default WaitlistForm
