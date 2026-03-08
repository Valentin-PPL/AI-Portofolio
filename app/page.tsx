import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
{/* import { Projects } from "@/components/projects" */}
import { GitHubSection } from "@/components/github-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import Script from "next/script"

export default function Home() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/particles.js"></Script>
      <Script src="/particles-config.js"></Script>

      <div id="particles-js"></div>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Skills />
        {/* <Projects /> */}
        <GitHubSection />
        <Contact />
        <Footer />
      </main>
    </>
  )
}