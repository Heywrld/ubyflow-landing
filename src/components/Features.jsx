import { Repeat, Gift, Receipt, Send, Users, Wallet } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const features = [
  {
    icon: Repeat,
    title: 'Crypto ↔ Naira Swaps',
    description: 'Convert Bitcoin, USDT, and major cryptocurrencies to naira at competitive rates.',
  },
  {
    icon: Gift,
    title: 'Gift Card Cash-Out',
    description: 'Instant cash for iTunes, Amazon, Google Play, and international gift cards.',
  },
  {
    icon: Receipt,
    title: 'Bill Payments',
    description: 'Pay airtime, data, electricity, and cable bills in seconds.',
  },
  {
    icon: Send,
    title: 'Fast Remittances',
    description: 'Send money across borders quickly and affordably.',
  },
  {
    icon: Users,
    title: 'Peer-to-Peer Trading',
    description: 'Trade crypto directly with verified users at your preferred rates.',
  },
  {
    icon: Wallet,
    title: 'Multi-Currency Wallet',
    description: 'Store naira and crypto in one secure wallet with real-time balances.',
  },
]

const FeatureCard = ({ feature, index }) => {
  const cardRef = useScrollAnimation(0.2)

  return (
    <div
      ref={cardRef}
      className="bg-[#1a1a1a] border-l-4 border-uby-yellow p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(255,195,0,0.15)] opacity-0 translate-y-8"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-uby-yellow flex items-center justify-center mb-4">
        <feature.icon className="w-6 h-6 text-black" />
      </div>
      <h3 className="text-white font-bold text-xl mb-2">{feature.title}</h3>
      <p className="text-[#a3a3a3] text-[15px] leading-relaxed">{feature.description}</p>
    </div>
  )
}

const Features = () => {
  return (
    <section className="bg-[#0f0f0f] py-24 md:py-[100px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-[#a3a3a3]">
            Trade, pay, and send money with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
