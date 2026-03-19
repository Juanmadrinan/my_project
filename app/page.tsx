import { Header } from "@/components/travel/Header"
import { Hero } from "@/components/travel/Hero"
import { Stats } from "@/components/travel/Stats"
import { About } from "@/components/travel/About"
import { Destinations } from "@/components/travel/Destinations"
import { Packages } from "@/components/travel/Packages"
import { Booking } from "@/components/travel/Booking"
import { Testimonials } from "@/components/travel/Testimonials"
import { Contact } from "@/components/travel/Contact"
import { Footer } from "@/components/travel/Footer"

export default function TravelAgencyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Destinations />
      <Packages />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
