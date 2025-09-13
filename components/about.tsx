"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 })

  const values = [
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Visi",
      description:
        "Menjadi perusahaan terdepan dalam memberikan solusi inovatif yang mengubah cara bisnis beroperasi di era digital.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Misi",
      description:
        "Memberikan layanan berkualitas tinggi dengan teknologi terdepan untuk membantu klien mencapai tujuan bisnis mereka.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Nilai",
      description:
        "Integritas, inovasi, dan komitmen terhadap kepuasan klien adalah fondasi dari setiap layanan yang kami berikan.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Tentang Kami</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Dengan pengalaman lebih dari 10 tahun, kami telah membantu ratusan perusahaan mencapai kesuksesan melalui
            solusi teknologi yang tepat sasaran.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className={`text-center hover:shadow-lg hover:scale-105 transition-all duration-500 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: cardsVisible ? `${index * 200}ms` : "0ms",
              }}
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-pretty">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
