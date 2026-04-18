"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const codeSnippets = {
  "deploy.yaml": `name: void-production
env:
  - NEXT_PUBLIC_API_URL: api.void.dev
routes:
  - src: /api/(.*)
    dest: /functions/api
  - src: /(.*)
    dest: /public/$1
build:
  command: npm run build
  output: .next`,
  "config.json": `{
  "version": 2,
  "name": "void-core",
  "regions": ["iad1", "sfo1", "fra1"],
  "github": {
    "repo": "void-deploy/core",
    "silent": true
  }
}`,
  "void cli": `$ void deploy --prod
> Authenticating... [OK]
> Building project...
> Uploading artifacts (4.2MB)
> Provisioning edge nodes...
> Success! Deployed to 35 regions.
> URL: https://core.void.dev
> Time: 4.2s`
}

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeSnippets>("deploy.yaml")

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6">
            Infrastructure as Code.<br/>
            <span className="text-muted">Literal Code.</span>
          </h2>
          <p className="text-muted text-lg mb-8 max-w-md">
            Define your entire cloud architecture with simple, declarative configuration files. Version controlled, predictable, and fast.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0A0A0A] border border-white/10 rounded-sm shadow-2xl relative"
        >
          {/* Mac-style Terminal Header */}
          <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#111]">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-tertiary/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="flex space-x-4 flex-1">
              {(Object.keys(codeSnippets) as Array<keyof typeof codeSnippets>).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-mono text-xs uppercase tracking-wider px-2 py-1 transition-colors ${
                    activeTab === tab ? "text-primary border-b border-primary" : "text-muted hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 overflow-x-auto">
            <pre className="font-mono text-sm leading-relaxed text-[#A1A1AA]">
              <code>
                {codeSnippets[activeTab].split('\n').map((line, i) => (
                  <div key={i} className="table-row">
                    <span className="table-cell pr-6 text-white/20 select-none text-right">{i + 1}</span>
                    <span className="table-cell">{line}</span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
