"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId.replace("#", ""))
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#team", label: "Team" },
    { href: "#testimonials", label: "Testimonials" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => smoothScrollTo("#hero")}
            className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-200"
          >
            TechSolutions
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => smoothScrollTo(item.href)}
                className={`transition-colors duration-200 relative group font-medium ${
                  isScrolled ? "text-gray-700 hover:text-primary" : "text-gray-800 hover:text-primary"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => smoothScrollTo("#contact")}
              className="hidden md:inline-flex hover:scale-105 transition-transform duration-200"
            >
              Contact Us
            </Button>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden hover:scale-110 transition-transform duration-200 ${
                isScrolled ? "text-gray-700" : "text-gray-800"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => smoothScrollTo(item.href)}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 text-left animate-in slide-in-from-left-2 font-medium"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => smoothScrollTo("#contact")}
                className="w-fit animate-in slide-in-from-left-2"
                style={{ animationDelay: `${navItems.length * 50}ms` }}
              >
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
