"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
]

export function Navbar(): React.JSX.Element {

  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  useEffect((): (() => void) => {

    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return (): void => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  const scrollToSection = (href: string): void => {

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsMobileMenuOpen(false)
      return
    }

    const element: Element | null = document.querySelector(href)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }

    setIsMobileMenuOpen(false)
  }

  return (

    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        <button
          onClick={(): void => scrollToSection("#")}
          className="text-xl font-bold hover:text-primary transition-colors"
        >
          VB<span className="text-primary">.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item: NavItem) => (

            <button
              key={item.label}
              onClick={(): void => scrollToSection(item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>

          ))}

          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={(): void => scrollToSection("#contact")}
          >
            Hire Me
          </Button>

        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={(): void => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen
            ? <X className="h-5 w-5" />
            : <Menu className="h-5 w-5" />
          }
        </Button>

      </div>

      {isMobileMenuOpen && (

        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 py-4 px-6">

          <div className="flex flex-col gap-4">

            {navItems.map((item: NavItem) => (

              <button
                key={item.label}
                onClick={(): void => scrollToSection(item.href)}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </button>

            ))}

            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
              onClick={(): void => scrollToSection("#contact")}
            >
              Hire Me
            </Button>

          </div>

        </div>

      )}

    </nav>
  )
}
