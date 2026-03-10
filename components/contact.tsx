"use client"

import { useState } from "react"
import { Mail, Phone, Send, MapPin, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    setLoading(true)
    setStatus("")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } else {
      setStatus("error")
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            {"Have a project in mind? Let's discuss how we can work together."}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md">
              <h3 className="font-semibold mb-4">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href="mailto:gastonvalentino@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/20 border border-border/30 hover:bg-secondary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">gastonvalentino@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:0760119604"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/20 border border-border/30 hover:bg-secondary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium">0760 119 604</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/20 border border-border/30">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">Available Worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md">
              <h3 className="font-semibold mb-4">Connect</h3>

              <div className="flex gap-3">
                <a href="https://github.com/Valentin-PPL" target="_blank">
                  <Button variant="outline" size="icon" className="border-border/50 bg-secondary/30 hover:bg-secondary/50">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>

                <a href="https://linkedin.com/in/valentinbucur" target="_blank">
                  <Button variant="outline" size="icon" className="border-border/50 bg-secondary/30 hover:bg-secondary/50">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>

                <a href="mailto:gastonvalentino@gmail.com">
                  <Button variant="outline" size="icon" className="border-border/50 bg-secondary/30 hover:bg-secondary/50">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className="bg-secondary/30 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="bg-secondary/30 border-border/50 focus:border-primary"
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="bg-secondary/30 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>

                {status === "success" && (
                  <p className="text-green-500 text-sm mt-3">
                    Message sent successfully!
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-500 text-sm mt-3">
                    Something went wrong. Please try again.
                  </p>
                )}

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}