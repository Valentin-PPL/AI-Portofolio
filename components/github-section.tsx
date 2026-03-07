"use client"

import { Github, GitFork, Star, Code2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { label: "Repositories", value: "25+", icon: Code2 },
  { label: "Contributions", value: "500+", icon: GitFork },
  { label: "Stars Earned", value: "100+", icon: Star },
]

const recentActivity = [
  { type: "commit", repo: "ai-cli-assistant", message: "Add context-aware suggestions", time: "2 hours ago" },
  { type: "pr", repo: "resume-critique", message: "Implement ATS scoring system", time: "1 day ago" },
  { type: "commit", repo: "automation-scripts", message: "Add scheduled task runner", time: "3 days ago" },
  { type: "commit", repo: "ai-cli-assistant", message: "Improve error handling", time: "5 days ago" },
]

export function GitHubSection() {
  return (
    <section id="github" className="py-24 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Activity</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Open source contributions and development activity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Stats Card */}
          <div className="p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Github className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">@valentinbucur</h3>
                <p className="text-muted-foreground text-sm">Active contributor</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-secondary/30 border border-border/30">
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button className="w-full bg-secondary/50 hover:bg-secondary/70 text-foreground border border-border/50">
              <Github className="mr-2 h-4 w-4" />
              View GitHub Profile
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Activity Feed */}
          <div className="p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/20 border border-border/30 hover:bg-secondary/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {activity.type === "commit" ? (
                      <Code2 className="h-4 w-4 text-primary" />
                    ) : (
                      <GitFork className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-sm text-primary">{activity.repo}</span>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{activity.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
