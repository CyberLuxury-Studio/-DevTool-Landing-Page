# Project Plan: DevTool Landing Page (UI8 Release)

**Project Name:** NeonDeploy - High-Contrast Cyberpunk DevTool Landing Page
**Description:** A professional, code-snippet-heavy landing page template tailored for developer tools, built with a striking Synthwave cyberpunk aesthetic. Optimized for sale on UI8.
**Tech Stack:** Next.js 16.2.4 (App Router), React, TypeScript, Tailwind CSS, Framer Motion, Spline 3D.

---

## 1. Project Structure (Next.js App Router)

```text
neondeploy/
├── public/                 # Static assets
│   ├── fonts/              # Geist & JetBrains Mono local font files
│   ├── images/             # Fallback images, logos, UI8 thumbnails
│   └── 3d/                 # Spline local fallbacks (if applicable)
├── src/
│   ├── app/                # App Router root
│   │   ├── layout.tsx      # Root layout (fonts, providers, global nav/footer)
│   │   ├── page.tsx        # Main landing page
│   │   └── globals.css     # Tailwind imports and custom cyberpunk utilities (glows, grid)
│   ├── components/         # React Components
│   │   ├── ui/             # Reusable UI elements (buttons, cards, badges)
│   │   ├── sections/       # Major page sections (Hero, Features, Pricing)
│   │   ├── 3d/             # Spline viewer component
│   │   └── animations/     # Reusable Framer Motion wrappers (FadeIn, Reveal)
│   ├── lib/                # Utilities and helpers
│   │   ├── cn.ts           # Tailwind merge & clsx utility
│   │   └── constants.ts    # Content data (pricing tiers, feature lists)
│   ├── hooks/              # Custom React hooks (e.g., useScroll, useWindowSize)
│   └── types/              # TypeScript interfaces and type definitions
├── tailwind.config.ts      # Tailwind configuration (custom colors, fonts, shadows)
├── next.config.mjs         # Next.js config
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies and scripts
```

---

## 2. Design System

**Aesthetic:** High-Contrast Synthwave / Cyberpunk (Neon lights on dark void backgrounds).

### Color Palette
- **Backgrounds:** Deep Void (`#09090B`), Midnight Purple (`#130A1F`)
- **Primary Accents (Neons):**
  - Synthwave Cyan: `#00F0FF` (Buttons, active states, glowing borders)
  - Hot Pink: `#FF003C` (Error states, secondary calls-to-action, highlights)
  - Deep Neon Purple: `#8A2BE2` (Gradients, ambient background glows)
- **Text:** White (`#FFFFFF`), Muted Slate (`#A1A1AA` for descriptions), Cyan (`#00F0FF` for highlighted code syntax).

### Typography
- **Headings/UI Text:** *Geist* (Clean, modern, highly legible for technical SaaS).
- **Code Snippets/Terminals:** *JetBrains Mono* (Perfect for the DevTool aesthetic).

### Spacing & Layout
- **Spacing Scale:** Standard Tailwind 8pt scale (4, 8, 16, 24, 32, 48, 64, 96, 128).
- **Container:** Max-width of `1280px` (`max-w-7xl`) to keep code blocks readable.
- **Grids:** CRT-style subtle background grid (`bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]`).

### Reusable Component List
- `NeonButton`: Glow on hover, angled borders.
- `TerminalWindow`: Mac-style window wrapper with red/yellow/green dots, using JetBrains Mono inside.
- `GlassCard`: Deep translucent background with a 1px solid neon gradient border.
- `GlowingBadge`: Small pill-shaped tag for versioning or "New Feature" callouts.

---

## 3. Section-by-Section Breakdown

### 1. Header/Navigation
- **Layout:** Sticky glassmorphism header. Logo on left, navigation links center, CTA ("Start Deploying") on right.
- **Content:** Features, Docs, Pricing, Changelog.
- **Tailwind Strategy:** `backdrop-blur-md bg-black/50 border-b border-white/10`.

### 2. Hero Section
- **Layout:** Two-column split on desktop (Text left, Spline 3D right).
- **Content:** High-impact headline ("Ship Code at the Speed of Light"). Subtitle explaining fast deployments and analysis. Primary CTA button + Secondary "Read the Docs".
- **3D Spline:** Embedded on the right (see Spline plan below).
- **Animations:** Staggered fade-up for text. Spline loads in via opacity fade.

### 3. Features: The DevTool Arsenal
- **Layout:** Alternating left/right rows.
- **Content:**
  - *Feature 1: Fast Deployments.* (Visual: Interactive terminal typing a `git push` command, followed by a blazing fast success output).
  - *Feature 2: API Monitoring.* (Visual: A glowing line chart or neon dashboard snippet showing uptime metrics).
  - *Feature 3: Code Analysis.* (Visual: A code block highlighting a syntax error in hot pink, then correcting to cyan).
- **Animations:** Scroll-triggered slide-in from the sides. Interactive terminal uses Framer Motion's `useAnimation` for a simulated typing effect triggered on `whileInView`.

### 4. Pricing (3-Tier)
- **Layout:** 3-column CSS Grid. Middle tier slightly elevated.
- **Content:**
  - *Hobby:* Free, essential dev features.
  - *Pro (Highlighted):* Synthwave Cyan glow border. All features, team support.
  - *Enterprise:* Custom limits, SLA.
- **Tailwind Strategy:** `grid-cols-1 md:grid-cols-3 gap-8`. Hover effects on cards (`hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]`).

### 5. CTA Section
- **Layout:** Centered block with a heavy glowing background gradient.
- **Content:** "Ready to hack the mainframe? Join 10,000+ developers." Final "Sign Up" button.

### 6. Footer
- **Layout:** 4-column standard SaaS footer.
- **Content:** Links to GitHub, Discord, Twitter, Legal, Docs. Large neon logo watermark in the background.

---

## 4. Animation Plan (Framer Motion)

- **Hero Stagger:**
  - `containerVariant`: `staggerChildren: 0.1`
  - `itemVariant`: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
- **Interactive Terminal (Features):**
  - Use `framer-motion` to reveal characters one by one simulating `stdout` output.
  - Blinking cursor using `animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}`.
- **Scroll Reveals:**
  - Wrap sections in a `<Reveal>` component using `whileInView={{ opacity: 1, y: 0 }}` and `viewport={{ once: true, margin: "-100px" }}`.
- **Hover Micro-interactions:**
  - Buttons scale to `1.05`.
  - Cards rotate slightly 3D on hover using `useScroll` and `useTransform` mapped to mouse position (optional flair).

---

## 5. Spline Integration Plan

**Concept:** An ambient, looping abstract composition. Think of a dark, floating "Server Core" or a cluster of glowing, geometric neon shards (cyan and magenta) slowly rotating in a zero-gravity void, emitting a soft bloom effect.

**Integration Strategy:**
- **Component:** Use `@splinetool/react-spline`.
- **Performance/Loading:**
  - The Spline component is heavy. Wrap it in a React `Suspense` boundary or use Next.js `next/dynamic` to lazy load it.
  - **Fallback:** While Spline is loading, display a high-quality WebP static render of the 3D scene (or a glowing CSS spinner) to prevent Layout Shift and keep the Initial Load fast.
- **Interactivity:** For this project, we requested *ambient looping*. The scene will not track mouse movement to save on client CPU/GPU usage, keeping the page buttery smooth for scrolling.

---

## 6. Component Architecture

| Component | Props | Responsibility |
| :--- | :--- | :--- |
| `Button` | `variant` (primary/neon, secondary, ghost), `children`, `onClick` | Renders styled buttons with glow effects. |
| `TerminalBlock` | `codeLines` (array of strings), `language` | Renders the interactive typing terminal window. |
| `GlassCard` | `children`, `className`, `glowColor` | Container for features/pricing with cyberpunk borders. |
| `PricingCard` | `tier` (name), `price`, `features` (array), `isPopular` (boolean) | Renders a specific pricing tier. |
| `SplineViewer` | `sceneUrl`, `fallbackImage` | Handles the lazy loading and rendering of the 3D canvas. |
| `SectionHeading` | `title`, `subtitle`, `alignment` (left/center) | Consistent typography for section headers. |

---

## 7. Performance Strategy

1. **Font Loading:** Use `next/font/google` (or local if custom) for Geist and JetBrains Mono to ensure zero layout shift and automatic preloading.
2. **Image Optimization:** All static assets (bgs, fallback images) must be WebP format, routed through Next.js `<Image />` for automatic responsive sizing.
3. **Spline Lazy Loading:** As mentioned, strict `next/dynamic` implementation for the 3D scene to ensure it doesn't block the main thread during initial page load.
4. **Code Splitting:** Rely on App Router's default Server Components (`.tsx` files). Only mark specific interactive files (like the terminal animation, Spline viewer, or mobile nav toggle) with `"use client"`.

---

## 8. UI8 Packaging Checklist (Code-Only)

To ensure a 5-star rating on UI8, the final zip file must be immaculately organized.

- [ ] **Clean Codebase:** Remove all `node_modules` and `.next` build folders before zipping.
- [ ] **`.env.example`:** Included if any dummy API keys or configuration are mocked.
- [ ] **README.md:** Highly detailed. Must include:
  - Project Overview & Tech Stack.
  - Step-by-step installation guide (`npm install`, `npm run dev`).
  - Explanation of how to edit content (e.g., pointing buyers to `src/lib/constants.ts`).
  - How to replace the Spline URL with their own.
- [ ] **Tailwind Config Documentation:** Brief instructions on how buyers can change the primary Cyan/Pink colors to their brand colors via `tailwind.config.ts`.
- [ ] **Asset Licensing:** A `LICENSE.txt` or `CREDITS.md` file confirming all fonts (Geist, JetBrains Mono) are open-source and free to use commercially.
- [ ] **Preview Images (For UI8 Listing):**
  - `Thumbnail.jpg` (1200x900 or 800x600 per UI8 specs)
  - `Full_Page_Scroll.jpg` (Long screenshot of the entire layout).
  - Minimum 5 high-res feature detail shots.

---
*End of Project Plan*
