"use client"

import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Neon",
    price: "$0",
    description: "For personal projects and experiments.",
    features: ["100GB Bandwidth", "Unlimited Deployments", "Community Support", "Shared Edge Nodes"],
    highlight: false
  },
  {
    name: "Quantum",
    price: "$49",
    description: "For professional teams scaling fast.",
    features: ["1TB Bandwidth", "Priority Build Queue", "Email Support", "Dedicated Edge Nodes"],
    highlight: true
  },
  {
    name: "Void",
    price: "Custom",
    description: "For enterprise scale and security.",
    features: ["Unlimited Bandwidth", "Dedicated Account Manager", "24/7 Phone Support", "Custom SLA"],
    highlight: false
  }
]

export function Pricing() {
  return (
    <section className="py-24 relative bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold mb-4">Transparent Scaling</h2>
          <p className="text-muted font-mono text-sm">
            // No hidden fees. Pay for what you use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-surface-high p-8 border ${
                plan.highlight
                  ? "border-primary shadow-[0_0_30px_rgba(0,240,255,0.15)] md:-translate-y-4"
                  : "border-white/5"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-primary text-[#050505] text-xs font-mono font-bold uppercase tracking-widest">
                  Recommended
                </div>
              )}

              <h3 className="font-mono text-xl uppercase text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold font-sans">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted">/mo</span>}
              </div>
              <p className="text-sm text-muted mb-8 h-10">{plan.description}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-3" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? "primary" : "secondary"}
                className="w-full"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Select Plan"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
