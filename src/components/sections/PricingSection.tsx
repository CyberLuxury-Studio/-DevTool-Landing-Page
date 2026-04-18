"use client"

import React from "react"
import { motion } from "framer-motion"
import { NeonCard } from "@/components/ui/NeonBorderCard"
import { CyberButton } from "@/components/ui/Button"
import { fadeUpVariant, staggerContainer } from "@/lib/motion"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Hacker",
    price: "0",
    description: "For rogue agents and solo operators.",
    features: ["Local deployments", "Basic cloaking", "Community intel", "Standard telemetry"],
    highlighted: false,
    buttonText: "INITIATE",
  },
  {
    name: "Cyber",
    price: "49",
    description: "Full access to the Protocol for serious syndicates.",
    features: ["Global neural routing", "Advanced identity cloaking", "Priority sub-routines", "Encrypted pipelines", "24/7 dark-web support"],
    highlighted: true,
    buttonText: "UPGRADE ACCESS",
  },
  {
    name: "God-Mode",
    price: "Custom",
    description: "Enterprise grade anonymity and scale.",
    features: ["Dedicated quantum nodes", "Custom telemetry masking", "SLA guarantees", "On-premise deployment"],
    highlighted: false,
    buttonText: "CONTACT SEC-OPS",
  },
]

export const PricingSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-obsidian bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-obsidian opacity-80 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
             <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
                className="mb-20 text-center max-w-3xl mx-auto"
            >
                <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    ACCESS TIERS
                </h2>
                <p className="font-body text-text-muted text-lg">
                    Acquire the clearance level necessary for your operations.
                </p>
            </motion.div>

            <motion.div
                 variants={staggerContainer}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-50px" }}
                 className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
            >
                {tiers.map((tier) => (
                    <NeonCard
                        key={tier.name}
                        isHighlighted={tier.highlighted}
                        variants={fadeUpVariant}
                        className={`h-full ${tier.highlighted ? 'md:-translate-y-4 md:hover:-translate-y-6' : ''}`}
                    >
                        {tier.highlighted && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-cyan px-4 py-1 text-obsidian font-mono text-xs font-bold uppercase tracking-wider">
                                Most Popular
                            </div>
                        )}
                        <div className="mb-8 border-b border-outline-variant/20 pb-8">
                            <h3 className="font-mono text-xl uppercase text-on-surface mb-2 tracking-widest">{tier.name}</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-2xl text-text-muted mr-1">$</span>
                                <span className="font-heading text-5xl font-bold">{tier.price}</span>
                                {tier.price !== "Custom" && <span className="text-text-muted ml-2">/mo</span>}
                            </div>
                            <p className="text-text-muted text-sm font-body">{tier.description}</p>
                        </div>

                        <ul className="mb-10 flex-grow space-y-4">
                            {tier.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                    <Check className={`w-5 h-5 mr-3 shrink-0 ${tier.highlighted ? 'text-neon-cyan' : 'text-outline-variant'}`} />
                                    <span className="font-body text-sm text-on-surface-variant">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto">
                            <CyberButton
                                variant={tier.highlighted ? "primary" : "ghost"}
                                className="w-full"
                            >
                                {tier.buttonText}
                            </CyberButton>
                        </div>
                    </NeonCard>
                ))}
            </motion.div>
        </div>
    </section>
  )
}