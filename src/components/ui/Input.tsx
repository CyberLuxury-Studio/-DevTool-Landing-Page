"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface WaitlistInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSubmitAction?: (email: string) => Promise<void>
  buttonText?: string
}

export const WaitlistInput = React.forwardRef<HTMLInputElement, WaitlistInputProps>(
  ({ className, onSubmitAction, buttonText = "EXECUTE", ...props }, ref) => {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (!email) return

      setStatus("loading")
      setMessage("establishing secure connection...")

      try {
        if (onSubmitAction) {
          await onSubmitAction(email)
        } else {
          // Default API call if no custom action provided
          const response = await fetch("/api/waitlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          })

          const data = await response.json()

          if (!response.ok) {
            throw new Error(data.error || "Connection failed")
          }
        }

        setStatus("success")
        setMessage("credentials logged. await further instructions.")
        setEmail("")
      } catch (error: any) {
        setStatus("error")
        setMessage(error.message || "protocol breached. try again.")
      }
    }

    return (
      <div className="w-full max-w-md flex flex-col relative">
        <form onSubmit={handleSubmit} className="relative flex w-full items-center group">
          <div className="absolute left-4 font-mono text-neon-cyan select-none">{`>`}</div>
          <input
            ref={ref}
            type="email"
            required
            value={email}
            disabled={status === "loading" || status === "success"}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === "error") setStatus("idle")
            }}
            placeholder="enter your email_" aria-label="Email address for waitlist"
            className={cn(
              "w-full bg-surface-container-low border-b py-4 pl-8 pr-32 font-mono text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
              status === "error" ? "border-neon-pink focus:border-neon-pink" : "border-outline-variant focus:border-neon-cyan",
              className
            )}
            {...props}
          />
          <motion.button
            whileHover={{ scale: status !== "loading" && status !== "success" ? 1.05 : 1 }}
            whileTap={{ scale: status !== "loading" && status !== "success" ? 0.95 : 1 }}
            disabled={status === "loading" || status === "success"}
            type="submit"
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 font-mono text-xs font-bold transition-all shadow-[0_0_10px_rgba(0,243,255,0.2)]",
              status === "success"
                ? "bg-neon-cyan text-obsidian border border-neon-cyan shadow-[0_0_15px_#00f3ff]"
                : "bg-surface text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan hover:text-obsidian disabled:hover:bg-surface disabled:hover:text-neon-cyan"
            )}
          >
            {status === "loading" ? (
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-neon-cyan rounded-full animate-ping"></span>
                <span>UPLOADING</span>
              </span>
            ) : status === "success" ? (
              "ACCEPTED"
            ) : (
              buttonText
            )}
          </motion.button>
        </form>

        {/* Status Message */}
        <div className="absolute -bottom-6 left-0 right-0 h-6">
          {status !== "idle" && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "font-mono text-xs uppercase tracking-wider",
                status === "loading" && "text-neon-cyan animate-pulse",
                status === "success" && "text-neon-cyan drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]",
                status === "error" && "text-neon-pink drop-shadow-[0_0_5px_rgba(255,0,60,0.8)]"
              )}
            >
              // {message}
            </motion.p>
          )}
        </div>
      </div>
    )
  }
)
WaitlistInput.displayName = "WaitlistInput"