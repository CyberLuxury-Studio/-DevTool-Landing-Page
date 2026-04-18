"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Globe, Cpu } from "lucide-react"

const features = [
  {
    title: "Global Edge Network",
    description: "Deploy to 35+ regions instantly with our low-latency routing protocol.",
    icon: Globe,
    className: "md:col-span-2",
  },
  {
    title: "DDoS Protection",
    description: "Enterprise-grade mitigation active at layer 7.",
    icon: Shield,
  },
  {
    title: "Instant Rollbacks",
    description: "Revert to any previous state in milliseconds.",
    icon: Zap,
  },
  {
    title: "Native CI/CD",
    description: "Deep integration with your git workflow. Push to deploy.",
    icon: Cpu,
    className: "md:col-span-2",
  },
]

export function Features() {
  return (
    <section className="py-24 relative bg-surface">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold mb-4">Engineered for Velocity</h2>
          <p className="text-muted font-mono text-sm max-w-xl">
            // High-performance primitives for modern distributed applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-surface-high border border-white/5 p-8 relative group hover:border-primary/50 transition-colors ${feature.className || ""}`}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

              <feature.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-xl font-sans font-bold mb-3">{feature.title}</h3>
              <p className="text-muted text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
