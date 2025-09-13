import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe, Database, Shield, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Pengembangan Web",
      description:
        "Membangun website modern dan responsif dengan teknologi terdepan untuk meningkatkan presence online bisnis Anda.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Aplikasi Mobile",
      description: "Mengembangkan aplikasi mobile native dan cross-platform yang user-friendly untuk iOS dan Android.",
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Digital Marketing",
      description: "Strategi pemasaran digital yang efektif untuk meningkatkan brand awareness dan konversi penjualan.",
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Sistem Database",
      description: "Merancang dan mengimplementasikan sistem database yang scalable dan secure untuk kebutuhan bisnis.",
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Keamanan Cyber",
      description: "Melindungi aset digital perusahaan dengan solusi keamanan cyber yang komprehensif dan terpercaya.",
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Konsultasi IT",
      description:
        "Memberikan konsultasi teknologi informasi untuk optimalisasi proses bisnis dan transformasi digital.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Layanan Kami</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Kami menyediakan berbagai layanan teknologi yang dirancang khusus untuk memenuhi kebutuhan bisnis modern dan
            membantu Anda mencapai tujuan digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-pretty">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
