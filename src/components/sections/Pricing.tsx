"use client";

import { Check, Trophy, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const tiers = [
  {
    name: "NOVICE",
    price: "0",
    description: "Perfect for side quests and indie devs.",
    features: ["Up to 3 projects", "Basic analytics", "Community support", "1GB Storage"],
    cta: "Start Playing Free",
    popular: false,
  },
  {
    name: "PRO GAMER",
    price: "29",
    description: "For serious devs pushing to production.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority 24/7 support",
      "100GB Storage",
      "Custom domains",
    ],
    cta: "Equip Pro Pass",
    popular: true,
  },
  {
    name: "GOD MODE",
    price: "99",
    description: "Maximum power for elite guilds.",
    features: [
      "Everything in Pro",
      "Dedicated server instance",
      "SLA guarantee",
      "Unlimited Storage",
      "Custom integrations",
    ],
    cta: "Unlock God Mode",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-accent/30 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight">
              Choose Your <span className="text-primary">Loadout</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              Transparent pricing. No loot boxes. Upgrade or downgrade anytime.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className={`rounded-3xl p-8 border-2 ${
                  tier.popular
                    ? "bg-card border-primary relative shadow-[0_0_40px_rgba(59,130,246,0.3)] transform md:-translate-y-4"
                    : "bg-background border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-cyan-400 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    {tier.name === "NOVICE" && <Shield className="w-5 h-5 text-muted-foreground" />}
                    {tier.name === "PRO GAMER" && <Zap className="w-5 h-5 text-primary" />}
                    {tier.name === "GOD MODE" && <Trophy className="w-5 h-5 text-yellow-500" />}
                    <h3 className="text-2xl font-black uppercase tracking-wide">{tier.name}</h3>
                  </div>
                  <p className="text-muted-foreground font-medium">{tier.description}</p>
                </div>

                <div className="mb-8">
                  <span className="text-6xl font-black">${tier.price}</span>
                  <span className="text-muted-foreground font-bold">/mo</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-primary font-bold" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest transition-colors ${
                  tier.popular
                    ? "bg-gradient-to-r from-primary to-cyan-500 text-white hover:opacity-90 shadow-lg"
                    : "bg-accent text-foreground hover:bg-accent/80 border-2 border-border"
                }`}>
                  {tier.cta}
                </motion.button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
