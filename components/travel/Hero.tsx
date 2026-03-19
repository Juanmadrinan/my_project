"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Playa Hawaii",
    country: "EE.UU.",
    region: "Hawaii",
    rating: 4.8,
    image: "/images/hawaii-beach.jpg",
  },
  {
    id: 2,
    name: "Maravillas del Artico",
    country: "Islandia",
    region: "Escandinavia",
    rating: 4.9,
    image: "/images/arctic-wonders.jpg",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mountains.jpg"
          alt="Paisaje de montanas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
              Viaja a Todos los{" "}
              <span className="text-primary">Rincones del Mundo</span>
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg max-w-md leading-relaxed">
              Descubre las maravillas del mundo. Tu viaje sonado. Nuestros tours ofrecen una amplia gama de destinos que se adaptan a todos los intereses
            </p>
            <Button 
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base font-semibold rounded-full transition-all duration-300"
            >
              Reservar Viaje
            </Button>
          </div>

          {/* Right Content - Destination Cards */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={destinations[currentSlide].image}
                    alt={destinations[currentSlide].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-white text-sm font-medium">
                        {destinations[currentSlide].rating}
                      </span>
                    </div>
                    <p className="text-white/80 text-sm">
                      {destinations[currentSlide].country}
                    </p>
                    <p className="text-white/60 text-xs">
                      {destinations[currentSlide].region}
                    </p>
                    <h3 className="text-white text-xl font-serif font-bold mt-1">
                      {destinations[currentSlide].name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-secondary/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                  aria-label="Destino anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-secondary/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                  aria-label="Siguiente destino"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Floating Second Card */}
              <div className="absolute -right-8 top-8 w-32 lg:w-40 rounded-2xl overflow-hidden shadow-xl transform rotate-6 hidden sm:block">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={destinations[(currentSlide + 1) % destinations.length].image}
                    alt={destinations[(currentSlide + 1) % destinations.length].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white/60 text-xs">
                      {destinations[(currentSlide + 1) % destinations.length].country}
                    </p>
                    <p className="text-white text-sm font-semibold">
                      {destinations[(currentSlide + 1) % destinations.length].name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
