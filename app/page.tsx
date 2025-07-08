import { Hero } from "@/components/hero"
import { ThemeShowcase } from "@/components/theme-showcase"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { MarketplaceStats } from "@/components/marketplace-stats"
import { GitHubStats } from "@/components/github-stats"
import { MoodSimulator } from "@/components/mood-simulator"
import { Download } from "@/components/download"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <ThemeShowcase />
      <Features />
      <HowItWorks />
      <MoodSimulator />
      <MarketplaceStats />
      <GitHubStats />
      <Download />
      <Footer />
    </main>
  )
}
