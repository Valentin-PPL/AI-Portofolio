import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold mb-2">
              Valentin Bucur<span className="text-primary">.</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI Developer & Automation Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary/30 border border-border/50 flex items-center justify-center hover:bg-secondary/50 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary/30 border border-border/50 flex items-center justify-center hover:bg-secondary/50 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:gastonvalentino@gmail.com"
              className="w-10 h-10 rounded-lg bg-secondary/30 border border-border/50 flex items-center justify-center hover:bg-secondary/50 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Valentin Bucur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
