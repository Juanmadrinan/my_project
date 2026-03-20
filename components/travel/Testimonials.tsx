"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Garcia",
    location: "Madrid, Espana",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    destination: "Tour Playa Hawaii",
    text: "Una experiencia absolutamente increible! Vive Experiencias Travel hizo nuestra luna de miel inolvidable. Cada detalle fue perfectamente planificado, desde el lujoso resort hasta las cenas privadas en la playa. No puedo esperar para reservar nuestra proxima aventura con ellos!",
  },
  {
    id: 2,
    name: "Carlos Rodriguez",
    location: "Barcelona, Espana",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    destination: "Tour Cultural Japon",
    text: "Vive Experiencias Travel supero todas las expectativas. Sus guias locales eran conocedores y apasionados. Exploramos joyas ocultas en Tokio y Kioto que nunca habriamos encontrado por nuestra cuenta. Una experiencia verdaderamente autentica!",
  },
  {
    id: 3,
    name: "Ana Martinez",
    location: "Valencia, Espana",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    destination: "Safari Africano",
    text: "El viaje de safari fue un sueno hecho realidad! Ver los Cinco Grandes en su habitat natural fue impresionante. Los alojamientos eran lujosos y los guias excepcionales. Vive Experiencias Travel lo hizo todo perfecto.",
  },
  {
    id: 4,
    name: "Pablo Fernandez",
    location: "Sevilla, Espana",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    destination: "Aventura en Islandia",
    text: "Ver las Auroras Boreales estaba en mi lista de deseos durante anos, y Vive Experiencias Travel lo hizo realidad! El senderismo en glaciares y las aguas termales fueron increibles. Su atencion al detalle es incomparable.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

  return (
    <section id="opiniones" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Lo Que Dicen Nuestros Viajeros
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg max-w-xl">
              Historias reales de viajeros reales que experimentaron la diferencia de Vive Experiencias Travel
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className={`bg-card rounded-3xl p-6 lg:p-8 border border-border/50 transition-all duration-300 ${
                index === 0 ? "shadow-xl" : "opacity-80 hover:opacity-100"
              }`}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Destination Badge */}
              <div className="inline-block px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground mb-4">
                {testimonial.destination}
              </div>

              {/* Text */}
              <p className="text-foreground text-sm lg:text-base leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
