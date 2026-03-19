import Image from "next/image"
import { Clock, Users, Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    id: 1,
    name: "Escapada al Paraiso Tropical",
    destination: "Maldivas",
    image: "/images/tropical-island.jpg",
    duration: "7 Dias / 6 Noches",
    groupSize: "2-6 personas",
    rating: 4.9,
    price: 2499,
    originalPrice: 2999,
    features: ["Resort Todo Incluido", "Villa sobre el Agua", "Tours de Snorkel"],
  },
  {
    id: 2,
    name: "Aventura en Hawaii",
    destination: "Hawaii, EE.UU.",
    image: "/images/hawaii-beach.jpg",
    duration: "10 Dias / 9 Noches",
    groupSize: "4-10 personas",
    rating: 4.8,
    price: 3299,
    originalPrice: 3899,
    features: ["Recorrido por Islas", "Tours de Volcanes", "Clases de Surf"],
  },
  {
    id: 3,
    name: "Explorador del Artico",
    destination: "Islandia",
    image: "/images/arctic-wonders.jpg",
    duration: "8 Dias / 7 Noches",
    groupSize: "6-12 personas",
    rating: 4.9,
    price: 4199,
    originalPrice: 4799,
    features: ["Auroras Boreales", "Senderismo en Glaciares", "Aguas Termales"],
  },
]

export function Packages() {
  return (
    <section id="paquetes" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Paquetes Populares
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">
            Paquetes de viaje seleccionados para brindarte la experiencia vacacional definitiva
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <span className="text-white text-sm font-medium">{pkg.rating}</span>
                </div>

                {/* Destination */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{pkg.destination}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {pkg.name}
                </h3>

                {/* Trip Details */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {pkg.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <span className="text-xs text-muted-foreground line-through">
                      ${pkg.originalPrice.toLocaleString()}
                    </span>
                    <p className="text-xl font-bold text-primary">
                      ${pkg.price.toLocaleString()}
                      <span className="text-sm text-muted-foreground font-normal">/persona</span>
                    </p>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                    Reservar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 rounded-full font-semibold"
          >
            Ver Todos los Paquetes
          </Button>
        </div>
      </div>
    </section>
  )
}
