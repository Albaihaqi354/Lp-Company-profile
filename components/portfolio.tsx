import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Platform e-commerce modern dengan fitur lengkap untuk toko online dengan sistem pembayaran terintegrasi.",
      image: "/modern-ecommerce-interface.png",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Web Development",
    },
    {
      title: "Mobile Banking App",
      description:
        "Aplikasi mobile banking yang aman dan user-friendly dengan fitur transfer, pembayaran, dan investasi.",
      image: "/mobile-banking-app.png",
      tags: ["React Native", "Firebase", "API"],
      category: "Mobile App",
    },
    {
      title: "Corporate Website",
      description: "Website corporate yang elegan dan profesional dengan sistem manajemen konten yang mudah digunakan.",
      image: "/professional-corporate-website.png",
      tags: ["Next.js", "Tailwind", "CMS"],
      category: "Web Development",
    },
    {
      title: "Inventory Management",
      description: "Sistem manajemen inventori real-time untuk mengoptimalkan stok dan operasional gudang perusahaan.",
      image: "/inventory-management-dashboard.png",
      tags: ["Vue.js", "Laravel", "MySQL"],
      category: "Web Application",
    },
    {
      title: "Learning Management System",
      description: "Platform pembelajaran online dengan fitur video streaming, quiz interaktif, dan tracking progress.",
      image: "/online-learning-platform.png",
      tags: ["Angular", "Express", "PostgreSQL"],
      category: "Education Platform",
    },
    {
      title: "Healthcare Dashboard",
      description: "Dashboard analitik untuk rumah sakit dengan visualisasi data pasien dan manajemen jadwal dokter.",
      image: "/healthcare-analytics-dashboard.png",
      tags: ["React", "D3.js", "Python"],
      category: "Healthcare",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Portfolio Kami</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Berikut adalah beberapa proyek yang telah kami kerjakan dengan berbagai klien dari berbagai industri. Setiap
            proyek menunjukkan komitmen kami terhadap kualitas dan inovasi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
