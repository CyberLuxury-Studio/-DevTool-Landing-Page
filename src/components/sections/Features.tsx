"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Globe, Infinity, Layers, Gamepad2, Trophy, Crosshair } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Hyper-Speed Execution",
    description: "Compile and deploy at the speed of thought. Zero lag, maximum velocity.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Invincible Security",
    description: "Enterprise-grade encryption keeps your loot safe from enemy factions.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Co-Pilot",
    description: "Your automated companion that writes boilerplate and fixes bugs instantly.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Multiplayer",
    description: "Deploy to edge networks worldwide. Dominate servers globally.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: <Infinity className="w-8 h-8" />,
    title: "Infinite Scaling",
    description: "Your app grows automatically. Never worry about server caps again.",
    color: "from-red-400 to-rose-500",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Mod Support",
    description: "Easily integrate with over 500+ standard industry tools and APIs.",
    color: "from-cyan-400 to-blue-500",
  },
];

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight">
              Unlock Your <span className="text-primary">Skill Tree</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              Equip these legendary perks to build faster, scale infinitely, and crush your deadlines.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-colors group relative overflow-hidden h-full"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-[40px] group-hover:opacity-20 transition-opacity`}></div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-wide">{feature.title}</h3>
                <p className="text-muted-foreground font-medium text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                     <Crosshair className="w-4 h-4" /> Equip Perk
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
