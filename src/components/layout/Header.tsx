import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Docs', href: '#docs' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-transparent backdrop-blur-md flex items-center border-none outline-none">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3 z-50">
          <img
            src="/assets/logo-skip-white-1b688-D7aboadx.webp"
            alt="Skip Logo"
            className="h-8 w-auto drop-shadow-sm"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/90 text-[15px] font-medium hover:text-white transition-colors border-none outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-7 h-10 font-medium text-[15px] border-0 transition-colors">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white z-50 p-2 -mr-2 border-none outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden px-6 pt-20 z-40">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white text-2xl font-medium hover:text-indigo-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-8 h-12 w-full max-w-xs text-lg mt-6 font-medium transition-colors">
              Login
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
