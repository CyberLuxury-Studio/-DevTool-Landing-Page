"use client"

import React from "react"
import { motion } from "framer-motion"
import { NeonCard } from "@/components/ui/NeonBorderCard"
import { ShieldAlert, Network, Zap, Fingerprint, CodeXml, EyeOff } from "lucide-react"
import { fadeUpVariant, staggerContainer } from "@/lib/motion"

const features = [
  {
    title: "Shadow Deployments",
    description: "Push updates entirely off-grid. Zero downtime, zero trace.",
    icon: <EyeOff className="w-6 h-6 text-neon-cyan" />,
    glow: "cyan" as const,
  },
  {
    title: "Encrypted Pipelines",
    description: "Military-grade encryption for every single build artifact.",
    icon: <ShieldAlert className="w-6 h-6 text-neon-pink" />,
    glow: "pink" as const,
  },
  {
    title: "Neural Routing",
    description: "AI-driven edge delivery network. Bypasses standard protocols.",
    icon: <Network className="w-6 h-6 text-neon-purple" />,
    glow: "purple" as const,
  },
  {
    title: "Micro-second Analytics",
    description: "Real-time, redacted telemetry. Know everything, reveal nothing.",
    icon: <Zap className="w-6 h-6 text-neon-cyan" />,
    glow: "cyan" as const,
  },
  {
    title: "Identity Cloaking",
    description: "Mask your infrastructure footprints automatically on deploy.",
    icon: <Fingerprint className="w-6 h-6 text-neon-purple" />,
    glow: "purple" as const,
  },
  {
    title: "Quantum Code Analysis",
    description: "Detect vulnerabilities before the compiler even runs.",
    icon: <CodeXml className="w-6 h-6 text-neon-pink" />,
    glow: "pink" as const,
  },
]

export const FeaturesSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-void relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
        <div className="container mx-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
                className="mb-16 max-w-2xl"
            >
                <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    <span className="text-neon-cyan mr-2">/</span>
                    TACTICAL ADVANTAGE
                </h2>
                <p className="font-body text-text-muted text-lg">
                    Standard dev tools are obsolete. The Protocol gives you the stealth and speed required for the modern digital frontier.
                </p>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
                {features.map((feature, idx) => (
                    <NeonCard key={idx} hoverGlow={feature.glow} variants={fadeUpVariant}>
                        <div className="mb-6 flex items-center justify-between">
                            <div className="p-3 bg-obsidian border border-outline-variant/30">
                                {feature.icon}
                            </div>
                            <span className="font-mono text-xs text-outline-variant tracking-widest">
                                0{idx + 1}
                            </span>
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="font-body text-text-muted text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </NeonCard>
                ))}
            </motion.div>
        </div>
    </section>
  )
}