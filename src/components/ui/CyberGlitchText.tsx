"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const CyberGlitchText = ({
  text,
  className,
  as: Component = "h1"
}: {
  text: string,
  className?: string,
  as?: React.ElementType
}) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Component
        className={cn("glitch-effect font-heading font-bold text-on-background", className)}
        data-text={text}
      >
        {text}
      </Component>
    </motion.div>
  )
}