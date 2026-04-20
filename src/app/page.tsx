import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { CodeShowcase } from "@/components/sections/CodeShowcase"
import { Pricing } from "@/components/sections/Pricing"
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Integration Ecosystem Marquee (Gamified) */}
        <section className="py-10 border-y border-white/5 bg-black/40 overflow-hidden relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          <div className="flex w-[200%] animate-[marquee_15s_linear_infinite]">
             <div className="flex gap-20 items-center whitespace-nowrap min-w-full justify-around px-10">
                  <span className="text-3xl font-black text-white/20 uppercase tracking-widest flex items-center gap-3">🎮 UNREAL</span>
                  <span className="text-3xl font-black text-white/20 uppercase tracking-widest flex items-center gap-3">⚡ VERCEL</span>
                  <span className="text-3xl font-black text-white/20 uppercase tracking-widest flex items-center gap-3">👾 DISCORD</span>
                  <span className="text-3xl font-black text-white/20 uppercase tracking-widest flex items-center gap-3">🚀 GITHUB</span>
                  <span className="text-3xl font-black text-white/20 uppercase tracking-widest flex items-center gap-3">🔥 SUPABASE</span>
             </div>
             <div className="flex gap-20 items-center whitespace-nowrap min-w-full justify-around px-10">
                  <span className="text-3xl font-black text-white/20 uppercase tracking-widest flex items-center gap-3">🎮 UNREAL</span>
                  <span className="text-3xl font-black text-white/20 uppercase tracking-widest flex items-center gap-3">⚡ VERCEL</span>
                  <span className="text-3xl font-black text-white/20 uppercase tracking-widest flex items-center gap-3">👾 DISCORD</span>
                  <span className="text-3xl font-black text-white/20 uppercase tracking-widest flex items-center gap-3">🚀 GITHUB</span>
                  <span className="text-3xl font-black text-white/20 uppercase tracking-widest flex items-center gap-3">🔥 SUPABASE</span>
             </div>
          </div>
        </section>

        <CodeShowcase />
        <Features />
        <Pricing />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
