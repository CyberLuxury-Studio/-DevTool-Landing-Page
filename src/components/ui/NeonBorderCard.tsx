"use client"

import React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface NeonCardProps extends HTMLMotionProps<"div"> {
  hoverGlow?: "cyan" | "pink" | "purple"
  isHighlighted?: boolean
}

export const NeonCard = React.forwardRef<HTMLDivElement, NeonCardProps>(
  ({ className, children, hoverGlow = "cyan", isHighlighted = false, ...props }, ref) => {

    const glowClass = {
        cyan: "hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,243,255,0.15)]",
        pink: "hover:border-neon-pink hover:shadow-[0_0_20px_rgba(255,0,60,0.15)]",
        purple: "hover:border-neon-purple hover:shadow-[0_0_20px_rgba(189,0,255,0.15)]"
    }

    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -5 }}
        className={cn(
          "relative flex flex-col p-8 bg-surface-container-low backdrop-blur-md border transition-all duration-700 ease-out",
          isHighlighted ? "border-neon-purple shadow-[0_0_20px_rgba(189,0,255,0.15)]" : "border-white/5",
          !isHighlighted && glowClass[hoverGlow],
          className
        )}
        {...props}
      >
        {isHighlighted && (
            <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
        )}
        {children as React.ReactNode}
      </motion.div>
    )
  }
)
NeonCard.displayName = "NeonCard"
