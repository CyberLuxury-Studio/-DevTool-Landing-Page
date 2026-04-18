import React from "react"
import { GitGraph as Github, Send as Twitter, DiscIcon as Discord, Terminal } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-obsidian py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-text-muted text-sm font-mono gap-6">

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <Terminal className="w-5 h-5 text-neon-cyan hidden sm:block" />
                <span className="uppercase tracking-widest text-on-surface">Void Protocol</span>
                <span className="text-outline-variant px-2 hidden sm:inline">|</span>
                <span>© 2024</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                <a href="#" className="hover:text-neon-cyan transition-colors focus:outline-none focus:ring-1 focus:ring-neon-cyan px-2">Documentation</a>
                <a href="#" className="hover:text-neon-cyan transition-colors focus:outline-none focus:ring-1 focus:ring-neon-cyan px-2">Manifesto</a>
                <a href="#" className="hover:text-neon-pink transition-colors focus:outline-none focus:ring-1 focus:ring-neon-pink px-2">Status</a>
            </div>

            <div className="flex items-center space-x-6">
                <a href="#" aria-label="GitHub" className="text-outline-variant hover:text-neon-cyan transition-colors focus:outline-none focus:text-neon-cyan">
                    <Github className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Twitter" className="text-outline-variant hover:text-neon-cyan transition-colors focus:outline-none focus:text-neon-cyan">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Discord" className="text-outline-variant hover:text-neon-cyan transition-colors focus:outline-none focus:text-neon-cyan">
                    <Discord className="w-5 h-5" />
                </a>
            </div>
        </div>
    </footer>
  )
}
