import Image from "next/image"
import { CheckCircle2, Zap, DollarSign } from "lucide-react"

const values = [
  {
    icon: CheckCircle2,
    title: "Fiabilidad",
    description: "Confianza de miles de viajeros en todo el mundo",
  },
  {
    icon: Zap,
    title: "Rapidez",
    description: "Reservas rapidas y confirmaciones instantaneas",
  },
  {
    icon: DollarSign,
    title: "Rentabilidad",
    description: "El mejor valor para tu inversion en viajes",
  },
]

export function About() {
  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/travel-office.jpg"
                  alt="Nuestra oficina de viajes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Decorative airplane */}
            <div className="absolute -top-4 -left-4 w-16 h-16 text-accent/30">
              <AirplaneIcon />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Sobre Nosotros
            </h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                Nuestro equipo de expertos en viajes es apasionado por explorar el mundo y ayudar a nuestros clientes a hacer lo mismo. Con anos de experiencia en la industria del turismo, hemos desarrollado fuertes relaciones con proveedores y socios en todo el mundo, lo que nos permite ofrecer ofertas exclusivas y acceso privilegiado a algunos de los destinos mas increibles del planeta.
              </p>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                En nuestra agencia de viajes, creemos que viajar es mas que solo visitar lugares nuevos: se trata de experimentar nuevas culturas, conocer gente nueva y crear recuerdos que duran toda la vida.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-6">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-3">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {value.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AirplaneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  )
}
