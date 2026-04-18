"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface WaitlistInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSubmitAction?: (email: string) => void
  buttonText?: string
}

export const WaitlistInput = React.forwardRef<HTMLInputElement, WaitlistInputProps>(
  ({ className, onSubmitAction, buttonText = "EXECUTE", ...props }, ref) => {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (onSubmitAction) {
        onSubmitAction(email)
      } else {
        console.log("Waitlist submitted:", email)
      }
    }

    return (
      <form onSubmit={handleSubmit} className="relative flex w-full max-w-md items-center group">
        <div className="absolute left-4 font-mono text-neon-cyan select-none">{`>`}</div>
        <input
          ref={ref}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email_"
          className={cn(
            "w-full bg-surface-container-low border-b border-outline-variant py-4 pl-8 pr-32 font-mono text-sm text-on-surface focus:border-neon-cyan focus:outline-none focus:ring-0 transition-colors duration-300",
            className
          )}
          {...props}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface px-4 py-2 font-mono text-xs font-bold text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan hover:text-obsidian transition-colors shadow-[0_0_10px_rgba(0,243,255,0.2)]"
        >
          {buttonText}
        </motion.button>
      </form>
    )
  }
)
WaitlistInput.displayName = "WaitlistInput"