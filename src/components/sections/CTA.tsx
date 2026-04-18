"use client"

import { Button } from "@/components/ui/Button"

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent opacity-50" />
      <div className="absolute w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-sans font-bold mb-6">
          Initialize Your Cluster.
        </h2>
        <p className="text-xl text-muted mb-10">
          Free forever for individuals. Start deploying in seconds.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-surface-high border-b-2 border-white/20 focus:border-primary outline-none px-4 py-3 font-mono text-sm w-full transition-colors"
            required
          />
          <Button type="submit" size="lg" className="shrink-0">
            Deploy Now
          </Button>
        </form>
      </div>
    </section>
  )
}
