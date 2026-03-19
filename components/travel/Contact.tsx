"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                Ready to start your adventure? Contact us today and let our travel experts help you plan the perfect trip.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground text-sm">hello@flyfly.travel</p>
                  <p className="text-muted-foreground text-sm">support@flyfly.travel</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground text-sm">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                  <p className="text-muted-foreground text-sm">123 Travel Street, Suite 100</p>
                  <p className="text-muted-foreground text-sm">New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                  <p className="text-muted-foreground text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground text-sm">Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border/50 shadow-xl">
            <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 rounded-xl bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 rounded-xl bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 rounded-xl bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-muted-foreground mb-2">
                    Dream Destination
                  </label>
                  <Input
                    id="destination"
                    name="destination"
                    type="text"
                    placeholder="Where do you want to go?"
                    value={formData.destination}
                    onChange={handleChange}
                    className="h-12 rounded-xl bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your dream vacation..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold text-base"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
