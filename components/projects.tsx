"use client"

import { Terminal, FileText, Cog, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    icon: Terminal,
    title: "AI CLI Assistant",
    description: "A powerful command-line interface that leverages AI to help developers with code generation, debugging, and documentation. Features natural language queries and context-aware suggestions.",
    tags: ["Python", "OpenAI API", "CLI", "Rich"],
    features: ["Natural language commands", "Code generation", "Context awareness", "Shell integration"],
    color: "from-teal-500/20 to-cyan-500/20"
  },
  {
    icon: FileText,
    title: "AI Resume Critique",
    description: "An intelligent resume analysis tool that provides actionable feedback on resume content, formatting, and ATS optimization. Powered by advanced NLP for comprehensive evaluation.",
    tags: ["Python", "NLP", "GPT-4", "FastAPI"],
    features: ["ATS scoring", "Content analysis", "Format suggestions", "Industry insights"],
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Cog,
    title: "Automation Scripts",
    description: "A collection of automation scripts for repetitive tasks including file organization, data processing, API integrations, and workflow automation for enhanced productivity.",
    tags: ["Python", "Bash", "Node.js", "APIs"],
    features: ["File management", "Data pipelines", "API automation", "Scheduled tasks"],
    color: "from-emerald-500/20 to-teal-500/20"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Showcasing practical AI applications that solve real-world problems
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 md:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <project.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs rounded-full bg-secondary/50 text-secondary-foreground border border-border/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 text-pretty">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                      <Button variant="outline" size="sm" className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  {/* Project visual */}
                  <div className="lg:w-80 h-48 lg:h-56 rounded-2xl bg-gradient-to-br from-secondary/80 to-secondary/40 border border-border/30 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-6">
                      <project.icon className="h-16 w-16 text-primary/60 mx-auto mb-3" />
                      <div className="text-xs text-muted-foreground font-mono">
                        {">"} project.run()
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
