import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Ahmad Rizki",
      position: "CEO & Founder",
      image: "/placeholder-user.jpg",
      description:
        "Visioner dengan pengalaman 15+ tahun dalam industri teknologi. Memimpin perusahaan dengan fokus pada inovasi dan kepuasan klien.",
      skills: ["Leadership", "Strategy", "Business Development"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sari Dewi",
      position: "CTO",
      image: "/placeholder-user.jpg",
      description:
        "Expert dalam arsitektur sistem dan teknologi cloud. Bertanggung jawab atas semua aspek teknis dan pengembangan produk.",
      skills: ["Cloud Architecture", "DevOps", "System Design"],
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Budi Santoso",
      position: "Lead Developer",
      image: "/placeholder-user.jpg",
      description:
        "Full-stack developer berpengalaman dengan keahlian dalam berbagai teknologi modern. Memimpin tim development dengan passion tinggi.",
      skills: ["React", "Node.js", "Python"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
    },
    {
      name: "Maya Putri",
      position: "UI/UX Designer",
      image: "/placeholder-user.jpg",
      description:
        "Creative designer dengan eye for detail yang luar biasa. Menciptakan pengalaman user yang intuitif dan menarik.",
      skills: ["UI Design", "UX Research", "Prototyping"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Andi Wijaya",
      position: "Project Manager",
      image: "/placeholder-user.jpg",
      description:
        "Experienced project manager yang memastikan setiap proyek berjalan sesuai timeline dan budget yang ditetapkan.",
      skills: ["Agile", "Scrum", "Team Management"],
      social: {
        linkedin: "#",
      },
    },
    {
      name: "Lisa Kartika",
      position: "Marketing Director",
      image: "/placeholder-user.jpg",
      description:
        "Strategic marketer dengan track record yang terbukti dalam digital marketing dan brand development.",
      skills: ["Digital Marketing", "Brand Strategy", "Analytics"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Tim Kami</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Bertemu dengan tim profesional kami yang berdedikasi untuk memberikan solusi terbaik bagi setiap klien.
            Setiap anggota tim membawa keahlian unik dan passion yang tinggi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">{member.description}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
