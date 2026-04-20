"use client";

import { motion } from "framer-motion";
import { Terminal, ChevronRight, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] opacity-30 translate-y-1/3 -translate-x-1/3" />
      
      {/* Gamified Floating Elements */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-tr from-primary to-cyan-400 rounded-3xl opacity-60 blur-md z-0 hidden lg:block"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-20 w-32 h-32 bg-gradient-to-bl from-secondary to-fuchsia-500 rounded-full opacity-40 blur-lg z-0 hidden lg:block"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-8 cursor-pointer hover:bg-primary/20 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#3b82f6]"></span>
              <span className="text-sm font-bold tracking-wider uppercase">Level 2.0 Now Available</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 uppercase text-shadow-lg">
              Unlock the Ultimate <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                Dev Arsenal
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Equip powerful tools, automate your workflow, and dominate your codebase with next-gen developer infrastructure.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-primary to-cyan-500 text-white font-black flex items-center justify-center gap-2 hover:opacity-90 transition-opacity uppercase tracking-widest text-lg border-2 border-white/20"
              >
                <Terminal className="w-6 h-6" />
                Start Playing Free
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-card border-2 border-border text-foreground font-bold flex items-center justify-center gap-2 hover:bg-accent transition-colors uppercase tracking-widest text-lg"
              >
                <Zap className="w-5 h-5 text-yellow-400" />
                Watch Trailer
              </motion.button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
             <p className="mt-8 text-sm text-muted-foreground font-mono font-bold tracking-widest uppercase">
                <span className="text-primary mr-2">➜</span> npm install @devtool/core --save
             </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
