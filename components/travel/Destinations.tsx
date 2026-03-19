"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const regions = [
  { id: "australia", name: "Australia" },
  { id: "africa", name: "Africa" },
  { id: "europa", name: "Europa" },
  { id: "asia", name: "Asia" },
  { id: "nueva-zelanda", name: "Nueva Zelanda" },
]

const destinations = {
  australia: {
    title: "Cinco razones para visitar Australia",
    description: "Descubre la tierra de las antipodas con sus impresionantes playas, fauna unica, ciudades vibrantes, cultura aborigen ancestral y la iconica Gran Barrera de Coral.",
    image: "/images/australia.jpg",
    highlights: ["Opera de Sidney", "Gran Barrera de Coral", "Aventuras en el Outback"],
    duration: "10-14 dias",
    groupSize: "8-15 personas",
  },
  africa: {
    title: "Cinco razones para visitar Africa",
    description: "Experimenta la magia de los safaris africanos, presencia la gran migracion, explora antiguas piramides y surmergete en ricas culturas tribales.",
    image: "/images/africa.jpg",
    highlights: ["Aventuras de Safari", "Cataratas Victoria", "Parque Nacional Serengeti"],
    duration: "12-16 dias",
    groupSize: "6-12 personas",
  },
  europa: {
    title: "Cinco razones para visitar Europa",
    description: "Desde las calles romanticas de Paris hasta las ruinas historicas de Roma, Europa ofrece encanto infinito, gastronomia de clase mundial y siglos de historia.",
    image: "/images/europe.jpg",
    highlights: ["Torre Eiffel", "Coliseo Romano", "Islas Griegas"],
    duration: "14-21 dias",
    groupSize: "10-20 personas",
  },
  asia: {
    title: "Cinco razones para visitar Asia",
    description: "Descubre templos ancestrales, ciudades futuristas, playas pristinas y cocinas diversas en el continente mas grande y diverso del mundo.",
    image: "/images/asia.jpg",
    highlights: ["Monte Fuji", "Angkor Wat", "Taj Mahal"],
    duration: "10-18 dias",
    groupSize: "8-16 personas",
  },
  "nueva-zelanda": {
    title: "Cinco razones para visitar Nueva Zelanda",
    description: "Experimenta fiordos impresionantes, deportes de aventura, cultura maori y paisajes tan increibles que han protagonizado grandes peliculas de Hollywood.",
    image: "/images/new-zealand.jpg",
    highlights: ["Milford Sound", "Hobbiton", "Queenstown"],
    duration: "10-14 dias",
    groupSize: "8-12 personas",
  },
}

export function Destinations() {
  const [activeRegion, setActiveRegion] = useState<keyof typeof destinations>("asia")

  const currentDestination = destinations[activeRegion]

  return (
    <section id="destinos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
          Destinos
        </h2>

        {/* Region Tabs */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-12">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id as keyof typeof destinations)}
              className={`font-serif text-lg lg:text-xl transition-all duration-300 pb-1 border-b-2 ${
                activeRegion === region.id
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Destination Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <div className="aspect-[4/3] relative">
              <Image
                src={currentDestination.image}
                alt={currentDestination.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-sm uppercase tracking-wider">
              {currentDestination.title}
            </p>
            <p className="text-foreground text-base lg:text-lg leading-relaxed">
              {currentDestination.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {currentDestination.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary/50 rounded-full text-sm text-foreground flex items-center gap-2"
                >
                  <MapPin className="w-3 h-3 text-primary" />
                  {highlight}
                </span>
              ))}
            </div>

            {/* Trip Info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="w-4 h-4 text-accent" />
                <span>{currentDestination.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Users className="w-4 h-4 text-accent" />
                <span>{currentDestination.groupSize}</span>
              </div>
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-full font-semibold">
              Explorar {regions.find(r => r.id === activeRegion)?.name}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
