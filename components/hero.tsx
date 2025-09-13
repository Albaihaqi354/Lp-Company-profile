"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-office-building-background.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Solusi Terbaik untuk
          <span
            className={`text-primary block transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Bisnis Anda
          </span>
        </h1>

        <p
          className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Kami menyediakan layanan profesional yang inovatif dan berkualitas tinggi untuk membantu mengembangkan bisnis
          Anda ke level yang lebih tinggi.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            onClick={() => smoothScrollTo("#services")}
            className="hover:scale-105 transition-transform duration-200"
          >
            Lihat Layanan
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => smoothScrollTo("#about")}
            className="hover:scale-105 transition-transform duration-200"
          >
            Tentang Kami
          </Button>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => smoothScrollTo("#about")}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-200 group"
          >
          </button>
        </div>
      </div>
    </section>
  )
}
