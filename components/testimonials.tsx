"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Dr. Indra Kusuma",
      position: "CEO, MediCare Hospital",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "Sistem manajemen rumah sakit yang dikembangkan sangat membantu operasional harian kami. Tim sangat profesional dan responsif terhadap kebutuhan kami.",
      company: "MediCare Hospital",
    },
    {
      name: "Rina Sari",
      position: "Founder, Fashion Store",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "Platform e-commerce yang mereka buat meningkatkan penjualan online kami hingga 300%. Interface yang user-friendly dan fitur yang lengkap.",
      company: "Fashion Store",
    },
    {
      name: "Bambang Hartono",
      position: "Director, Logistics Corp",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "Aplikasi tracking dan inventory management sangat membantu efisiensi operasional perusahaan. ROI yang kami dapatkan sangat memuaskan.",
      company: "Logistics Corp",
    },
    {
      name: "Sinta Maharani",
      position: "Principal, Smart School",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "Learning Management System yang dikembangkan membuat proses belajar mengajar menjadi lebih interaktif dan efektif. Siswa dan guru sangat antusias.",
      company: "Smart School",
    },
    {
      name: "Agus Wijaya",
      position: "Owner, Restaurant Chain",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "Sistem POS dan manajemen restoran yang terintegrasi membantu kami mengelola multiple outlet dengan lebih efisien. Highly recommended!",
      company: "Restaurant Chain",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Testimoni Klien</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Dengarkan apa yang dikatakan klien kami tentang layanan dan solusi yang telah kami berikan untuk bisnis
            mereka.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="mb-6">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full mx-auto object-cover mb-4"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-lg md:text-xl text-foreground mb-6 italic text-pretty">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div>
                  <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                  <p className="text-primary">{testimonials[currentIndex].position}</p>
                  <p className="text-muted-foreground text-sm">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-transparent"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-transparent"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
