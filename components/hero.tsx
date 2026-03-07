"use client"

import { ArrowDown, Github, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-primary font-medium">Available for opportunities</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">Valentin</span>
          <br />
          <span className="text-primary">Bucur</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          AI Developer & Automation Engineer
        </p>
        
        <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 text-pretty">
          Building intelligent tools that transform workflows. Specializing in AI-powered applications, 
          command-line interfaces, and automation systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
            <Mail className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <a 
            href="mailto:gastonvalentino@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">gastonvalentino@gmail.com</span>
          </a>
          <span className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
          <a 
            href="tel:0760119604" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>0760 119 604</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
