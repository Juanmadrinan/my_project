"use client"

import { useState } from "react"
import { MapPin, Calendar, Users, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Booking() {
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [travelers, setTravelers] = useState("")

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-2xl border border-border/50">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Encuentra Tu Viaje Perfecto
            </h2>
            <p className="text-muted-foreground text-sm lg:text-base">
              Busca entre miles de destinos y paquetes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 lg:gap-6">
            {/* Destination Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Destino
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="A donde?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="pl-12 h-14 rounded-xl bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Date Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Fecha de Viaje
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-12 h-14 rounded-xl bg-secondary/50 border-border/50 text-foreground"
                />
              </div>
            </div>

            {/* Travelers Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Viajeros
              </label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full pl-12 h-14 rounded-xl bg-secondary/50 border border-border/50 text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Seleccionar</option>
                  <option value="1">1 Viajero</option>
                  <option value="2">2 Viajeros</option>
                  <option value="3">3 Viajeros</option>
                  <option value="4">4 Viajeros</option>
                  <option value="5">5+ Viajeros</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold text-base">
                <Search className="w-5 h-5 mr-2" />
                Buscar Viajes
              </Button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-border/50">
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Maldivas", "Hawaii", "Japon", "Islandia", "Grecia"].map((place) => (
              <button
                key={place}
                onClick={() => setDestination(place)}
                className="px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-full text-sm text-foreground transition-colors"
              >
                {place}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
