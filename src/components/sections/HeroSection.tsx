"use client"

import React, { Suspense } from "react"
import dynamic from "next/dynamic"
import { CyberGlitchText } from "@/components/ui/CyberGlitchText"
import { WaitlistInput } from "@/components/ui/Input"
import { fadeUpVariant } from "@/lib/motion"
import { motion } from "framer-motion"

// Dynamically import the Spline component, disabling SSR to avoid hydration mismatch
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplinePlaceholder />,
})

// Using a placeholder for the Spline scene while loading
const SplinePlaceholder = () => (
    <div className="w-full max-w-[600px] aspect-square relative flex items-center justify-center border border-outline-variant/20 bg-surface-container-low/40 backdrop-blur-3xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/10 to-neon-cyan/10 opacity-50"></div>
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent"></div>

        <p className="font-mono text-sm tracking-[0.2em] uppercase text-neon-cyan/70 animate-pulse select-none z-10">
            [ Loading Scene Core ]
        </p>

        {/* Tactical Markers */}
        <div className="absolute top-4 left-4 w-1 h-1 bg-neon-cyan"></div>
        <div className="absolute top-4 right-4 w-1 h-1 bg-neon-cyan"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-neon-purple"></div>
        <div className="absolute bottom-4 right-4 w-1 h-1 bg-neon-purple"></div>
    </div>
)

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 pb-12 overflow-hidden px-6 md:px-12 lg:px-24 bg-obsidian bg-grid-pattern">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-void/40 via-obsidian/80 to-obsidian"></div>

      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col space-y-8 max-w-2xl">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUpVariant}
            >
                <div className="flex items-center space-x-3 mb-6">
                    <span className="h-px w-8 bg-neon-cyan"></span>
                    <span className="font-mono text-xs uppercase tracking-widest text-neon-cyan">Initialization Sequence</span>
                </div>
                <CyberGlitchText
                    text="ENTER THE NEXT ERA"
                    className="text-5xl md:text-7xl lg:text-8xl tracking-tighter"
                />
            </motion.div>

            <motion.p
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="text-text-muted text-lg md:text-xl max-w-lg leading-relaxed font-body"
            >
                Join the stealth beta. Limited access to the most advanced deployment protocol on the net.
            </motion.p>

            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="pt-4"
            >
                <WaitlistInput />
                <p className="mt-4 font-mono text-xs text-text-muted/60 uppercase tracking-wider">
                    // secure connection established
                </p>
            </motion.div>
        </div>

        <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="hidden lg:flex justify-end items-center h-[600px] w-full relative"
        >
            <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-l from-transparent to-obsidian/50"></div>
            <Spline scene="https://prod.spline.design/qE1d6i-5YtE1z5T6/scene.splinecode" className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  )
}
