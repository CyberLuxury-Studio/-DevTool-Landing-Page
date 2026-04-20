"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Terminal, Play } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const codeSnippets = {
  setup: `// Equip the SDK
import { Engine } from '@devtool/core';

// Initialize your instance
const app = new Engine({
  apiKey: process.env.API_KEY,
  environment: 'production',
  powerLevel: 'MAX'
});

// Start dominating
await app.launch();`,
  routing: `// Define your battle arenas
app.arena('/boss-fight', async (ctx) => {
  const { playerInfo } = ctx.request;
  
  const stats = await db.query(
    'SELECT * FROM stats WHERE id = ?',
    [playerInfo.id]
  );

  return ctx.json({ stats, buff: 'active' });
});`,
  database: `// Query the mainframe
import { schema } from './schema';

// Type-safe queries out of the box
const topPlayers = await db
  .select()
  .from(schema.users)
  .where(eq(schema.users.role, 'admin'))
  .orderBy(desc(schema.users.xp))
  .limit(10);`,
};

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeSnippets>("setup");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-card/50 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-noise z-0 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight">
                Live <span className="text-primary">Sandbox</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 font-medium">
                Test your skills in the live environment. Experience zero-latency execution and type-safe payloads directly from the edge.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-4">
                {[
                  { id: "setup", title: "1. Equip SDK", desc: "Initialize with maximum power." },
                  { id: "routing", title: "2. Build Arenas", desc: "Create endpoints instantly." },
                  { id: "database", title: "3. Query Mainframe", desc: "Type-safe database access." },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as keyof typeof codeSnippets)}
                    className={`text-left p-6 rounded-2xl border-2 transition-all ${
                      activeTab === tab.id
                        ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                        : "bg-background/50 border-border hover:border-primary/50 hover:bg-card"
                    }`}
                  >
                    <h3 className={`text-xl font-black mb-2 uppercase tracking-wide ${activeTab === tab.id ? "text-primary" : "text-foreground"}`}>
                      {tab.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">{tab.desc}</p>
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} className="h-full">
            <motion.div 
              className="rounded-2xl border-2 border-border bg-background overflow-hidden h-[500px] flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.5)] relative"
              animate={{ borderColor: activeTab === "setup" ? "rgba(59,130,246,0.5)" : activeTab === "routing" ? "rgba(168,85,247,0.5)" : "rgba(6,182,212,0.5)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b-2 border-border bg-card">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-4 text-xs font-mono text-muted-foreground tracking-widest font-bold">
                    root@devtool:~/{activeTab}.ts
                  </span>
                </div>
                <div className="flex gap-2">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1.5 hover:bg-accent rounded-md text-green-400 bg-green-400/10 border border-green-400/20"
                    >
                      <Play className="w-4 h-4" />
                    </motion.button>
                    <button
                      onClick={handleCopy}
                      className="p-1.5 hover:bg-accent rounded-md text-muted-foreground transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                    </button>
                </div>
              </div>

              {/* Code Area */}
              <div className="p-6 overflow-auto flex-1 bg-[#020617] font-mono text-sm leading-relaxed">
                <motion.pre
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <code className="text-[#e2e8f0]">
                    {codeSnippets[activeTab].split('\n').map((line, i) => (
                      <div key={i} className="table-row">
                        <span className="table-cell pr-6 text-[#475569] select-none text-right">
                          {i + 1}
                        </span>
                        <span className="table-cell">
                          {line.includes('//') ? (
                            <span className="text-[#64748b] font-bold">{line}</span>
                          ) : line.includes('import') || line.includes('from') || line.includes('const') || line.includes('await') || line.includes('return') ? (
                            <span className="text-primary font-bold">{line}</span>
                          ) : line.includes("'") ? (
                            <span className="text-green-400">{line}</span>
                          ) : (
                            line
                          )}
                        </span>
                      </div>
                    ))}
                  </code>
                </motion.pre>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
