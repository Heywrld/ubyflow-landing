const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#1a1a1a] py-12 md:py-15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-0 text-center md:text-left">
          {/* Logo */}
          <div className="md:opacity-80">
            <img
              src="/logos/ubyflow-logo-white.png"
              alt="Ubyflow"
              className="h-6 mx-auto md:mx-0"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <span className="hidden text-white text-lg font-bold">ubyflow</span>
          </div>

          {/* Links and Info */}
          <div className="flex flex-col gap-2 md:gap-1 md:text-right">
            <div className="text-sm text-[#737373] mb-2">
              <a
                href="/privacy.html"
                className="hover:text-uby-yellow hover:underline transition-colors duration-150"
                style={{ textUnderlineOffset: '4px' }}
              >
                Privacy Policy
              </a>
              <span className="mx-2">•</span>
              <a
                href="/terms.html"
                className="hover:text-uby-yellow hover:underline transition-colors duration-150"
                style={{ textUnderlineOffset: '4px' }}
              >
                Terms of Service
              </a>
            </div>
            <a
              href="mailto:contact@ubyflow.com"
              className="text-sm text-[#a3a3a3] hover:text-uby-yellow hover:underline transition-colors duration-150"
              style={{ textUnderlineOffset: '4px' }}
            >
              contact@ubyflow.com
            </a>
            <p className="text-[13px] text-[#525252]">
              85/87, AKANRO STREET, ILASAMAJA, MUSHIN,<br className="md:hidden" />
              LAGOS STATE, NIGERIA
            </p>
            <p className="text-xs text-[#404040] mt-4">
              © 2026 Ubyflow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
