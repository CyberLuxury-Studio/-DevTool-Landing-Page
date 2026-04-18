import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { CodeShowcase } from "@/components/sections/CodeShowcase"
import { Pricing } from "@/components/sections/Pricing"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Header />
      <Hero />
      <Features />
      <CodeShowcase />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
