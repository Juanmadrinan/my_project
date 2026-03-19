"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Calendar, Users, Globe, Smile, Move3d, Accessibility } from "lucide-react"

const stats = [
  { icon: Calendar, label: "Anos de Experiencia", value: 10, suffix: "" },
  { icon: Users, label: "Clientes Satisfechos", value: 5000, suffix: "" },
  { icon: Globe, label: "Paises Cubiertos", value: 100, suffix: "" },
]

const features = [
  { icon: Smile, label: "Satisfaccion del Cliente" },
  { icon: Move3d, label: "Reservas Flexibles" },
  { icon: Accessibility, label: "Accesibilidad" },
]

export function Stats() {
  return (
    <section className="relative py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Stats & Content */}
          <div className="space-y-8">
            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 lg:gap-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                Nuestros tours ofrecen una amplia gama de destinos que se adaptan a todos los intereses. Desde playas banadas por el sol con aguas cristalinas de color azul turquesa, hasta impresionantes paisajes montanosos, lagos tranquilos y frondosos bosques.
              </p>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                No pierdas esta oportunidad! Tenemos una oferta especial: las primeras 50 personas que reserven el tour recibiran un 15% de descuento en compras con nuestros socios.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center"
                  title={feature.label}
                >
                  <feature.icon className="w-4 h-4 text-muted-foreground" />
                </div>
              ))}
              <button className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-2 ml-2">
                Saber mas
                <span className="text-primary">→</span>
              </button>
            </div>
          </div>

          {/* Right Side - Floating Images */}
          <div className="relative h-[400px] lg:h-[500px]">
            {/* Dashed outline decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] h-[350px] lg:w-[320px] lg:h-[400px] border-2 border-dashed border-border/30 rounded-3xl" />
            
            {/* Main Image */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] lg:w-[240px] rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 z-10">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/machu-picchu.jpg"
                  alt="Machu Picchu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Second Image */}
            <div className="absolute right-8 lg:right-12 top-8 w-[160px] lg:w-[200px] rounded-2xl overflow-hidden shadow-xl transform rotate-3 z-20">
              <div className="aspect-square relative">
                <Image
                  src="/images/tropical-island.jpg"
                  alt="Isla Tropical"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Third Image */}
            <div className="absolute right-4 lg:right-8 bottom-8 w-[140px] lg:w-[180px] rounded-2xl overflow-hidden shadow-xl transform -rotate-3 z-30">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/mountain-vista.jpg"
                  alt="Vista de Montana"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Passport decoration */}
            <div className="absolute right-0 top-0 text-accent/20 transform rotate-12">
              <PassportIcon className="w-20 h-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <p className="text-2xl lg:text-3xl font-bold text-foreground">
      {count.toLocaleString()}{suffix}
    </p>
  )
}

function PassportIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zm6 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 8c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4z" />
    </svg>
  )
}
