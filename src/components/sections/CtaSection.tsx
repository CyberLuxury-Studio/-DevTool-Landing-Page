"use client"

import React from "react"
import { motion } from "framer-motion"
import { fadeUpVariant } from "@/lib/motion"
import { WaitlistInput } from "@/components/ui/Input"

export const CtaSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-void relative overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-pink/10 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center p-12 bg-obsidian/60 backdrop-blur-xl border border-neon-purple/30"
        >
             <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
                READY TO UPLOAD YOUR CONSCIOUSNESS?
            </h2>
            <p className="font-body text-text-muted text-lg mb-10 max-w-xl">
                The protocol is currently in stealth. Enter your credentials to request beta access.
            </p>

            <div className="w-full flex justify-center">
                <WaitlistInput buttonText="REQUEST ACCESS" className="max-w-lg" />
            </div>

             <div className="mt-8 flex items-center space-x-2 text-xs text-text-muted font-mono uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-neon-pink animate-ping"></span>
                <span>Spots are highly limited</span>
            </div>
        </motion.div>
    </section>
  )
}