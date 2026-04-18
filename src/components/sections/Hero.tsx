"use client"

import { Button } from "@/components/ui/Button"
import { SplineScene } from "@/components/ui/SplineScene"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2 bg-surface-high border border-white/10 px-3 py-1 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-xs text-primary uppercase tracking-widest">System Online</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-sans font-bold leading-tight mb-6">
            Deploy to the Edge. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Instantly.
            </span>
          </h1>

          <p className="text-lg text-muted font-inter mb-10 max-w-xl">
            Command your infrastructure from the terminal. Zero-configuration global edge network built for high-velocity teams.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg">Initialize Cluster</Button>
            <Button variant="secondary" size="lg">Read Docs</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative h-[400px] lg:h-[600px] w-full"
        >
          {/* Cyberpunk framing for the 3D scene */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none z-20" />
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-20" />

          <SplineScene className="w-full h-full relative z-10" />
        </motion.div>
      </div>
    </section>
  )
}
