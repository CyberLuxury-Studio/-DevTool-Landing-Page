"use client"

import React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface CyberButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "ghost"
  glitchEffect?: boolean
}

export const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant = "primary", glitchEffect = false, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative overflow-hidden border-0 px-8 py-4 font-mono font-bold uppercase tracking-wider text-sm transition-all duration-300",
          variant === "primary" && "bg-gradient-to-r from-neon-cyan to-primary-container text-obsidian shadow-[0_0_15px_#00f3ff] hover:shadow-[0_0_25px_#00f3ff]",
          variant === "ghost" && "bg-transparent border border-outline-variant text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]",
          className
        )}
        {...props}
      >
        <span className={cn(glitchEffect && "glitch-effect")} data-text={typeof children === 'string' ? children : undefined}>
          {children as React.ReactNode}
        </span>
      </motion.button>
    )
  }
)
CyberButton.displayName = "CyberButton"
