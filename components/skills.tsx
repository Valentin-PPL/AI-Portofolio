"use client"

import { Brain, Code2, Terminal, Workflow, Sparkles, Database } from "lucide-react"

const skills = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Building intelligent systems with modern AI frameworks and LLM integrations",
    tags: ["OpenAI", "LangChain", "Python", "Transformers"]
  },
  {
    icon: Terminal,
    title: "CLI Development",
    description: "Creating powerful command-line tools with intuitive interfaces",
    tags: ["Node.js", "TypeScript", "Bash", "Go"]
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Streamlining workflows with intelligent automation scripts",
    tags: ["CI/CD", "GitHub Actions", "Scripting", "APIs"]
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end application development with modern technologies",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"]
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Processing and transforming data at scale",
    tags: ["SQL", "ETL", "Data Pipelines", "Analytics"]
  },
  {
    icon: Sparkles,
    title: "Prompt Engineering",
    description: "Crafting effective prompts for optimal AI model outputs",
    tags: ["GPT-4", "Claude", "Fine-tuning", "RAG"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Combining AI knowledge with software engineering to build practical, impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {skill.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground border border-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
