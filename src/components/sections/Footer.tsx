import React from "react"
import { GitGraph, Send, DiscIcon as Discord, Terminal } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-obsidian py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-text-muted text-sm font-mono">

            <div className="flex items-center space-x-2 mb-6 md:mb-0">
                <Terminal className="w-5 h-5 text-neon-cyan" />
                <span className="uppercase tracking-widest text-on-surface">Void Protocol</span>
                <span className="text-outline-variant px-2">|</span>
                <span>© 2024</span>
            </div>

            <div className="flex items-center space-x-8 mb-6 md:mb-0">
                <a href="#" className="hover:text-neon-cyan transition-colors">Documentation</a>
                <a href="#" className="hover:text-neon-cyan transition-colors">Manifesto</a>
                <a href="#" className="hover:text-neon-pink transition-colors">Status</a>
            </div>

            <div className="flex items-center space-x-6">
                <a href="#" className="text-outline-variant hover:text-neon-cyan transition-colors">
                    <GitGraph className="w-5 h-5" />
                </a>
                <a href="#" className="text-outline-variant hover:text-neon-cyan transition-colors">
                    <Send className="w-5 h-5" />
                </a>
                <a href="#" className="text-outline-variant hover:text-neon-cyan transition-colors">
                    <Discord className="w-5 h-5" />
                </a>
            </div>
        </div>
    </footer>
  )
}