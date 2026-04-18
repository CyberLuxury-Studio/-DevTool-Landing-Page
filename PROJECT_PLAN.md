# DevTool Landing Page: Cyberpunk Edition - Project Plan

## 1. Project Structure (Next.js App Router)

```text
/
├── public/                 # Static assets (images, icons, fallbacks)
│   ├── fonts/              # Local font files (if not using next/font)
│   └── spline-fallback.webp # Fallback image for the 3D scene
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout (HTML, Body, Providers, Global Fonts/Meta)
│   │   ├── page.tsx        # Main Landing Page Assembly
│   │   ├── globals.css     # Tailwind imports and custom global utilities/css variables
│   │   └── not-found.tsx   # Custom 404 page
│   ├── components/
│   │   ├── layout/         # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/       # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── CodeShowcase.tsx
│   │   │   ├── Pricing.tsx
│   │   │   └── CTA.tsx
│   │   ├── ui/             # Reusable atomic UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── CodeBlock.tsx
│   │   │   └── SplineScene.tsx # Wrapper for Spline integration
│   │   └── animations/     # Reusable Framer Motion wrappers
│   │       ├── FadeIn.tsx
│   │       └── ScrollReveal.tsx
│   ├── lib/
│   │   ├── utils.ts        # Utility functions (clsx, tailwind-merge)
│   │   └── constants.ts    # Content, pricing tiers, navigation links
│   └── types/              # TypeScript interfaces and types
├── tailwind.config.ts      # Tailwind configuration and theme extensions
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md               # UI8 Documentation (setup, dev, build)
```

## 2. Section-by-Section Breakdown

### A. Hero Section
- **Layout:** Split layout (desktop) / Stacked (mobile). Left side: H1, subheadline, primary/secondary CTA buttons. Right side: Embedded Spline 3D Scene.
- **Content:** "Deploy to the Edge. Instantly." Subheadline focusing on global, secure, zero-config cloud deployments.
- **Spline Usage:** A glowing, abstract floating server cluster or a cybernetic data node that rotates slowly and reacts to mouse movement.
- **Animations:** Staggered fade-up for text elements. 3D scene scales in smoothly.
- **Tailwind Strategy:** `min-h-screen`, `flex`, `items-center`, `bg-grid-white/[0.02]` (for subtle grid background), text gradients.

### B. Features Grid (Bento Box Layout)
- **Layout:** CSS Grid-based "Bento Box" featuring 4-5 cards of varying sizes.
- **Content:** "Engineered for Velocity." Features: Global Edge Network, DDoS Protection, Instant Rollbacks, Native CI/CD.
- **Animations:** `whileInView` scroll reveal for each card, with a subtle hover scaling and border-glow effect.
- **Tailwind Strategy:** `grid-cols-1 md:grid-cols-3 md:grid-rows-2`, `gap-6`, custom `bg-glass` utility, `border-white/10`.

### C. Code Showcase / "How It Works"
- **Layout:** Centered section header above a large interactive terminal/code editor UI window.
- **Content:** "Infrastructure as Code. Literal Code." Interactive tabs to switch between YAML, JSON, and CLI snippet examples showing how easy it is to deploy.
- **Animations:** Syntax-highlighted text types out like a terminal (using Framer Motion `staggerChildren`).
- **Tailwind Strategy:** `font-mono` (JetBrains Mono), `bg-obsidian`, `border-cyan-500/30`, custom scrollbar hiding.

### D. Pricing
- **Layout:** 3-column card layout (Hobby, Pro, Enterprise). Pro tier is highlighted/scaled up.
- **Content:** Transparent pricing. Cyberpunk themed names (e.g., "Neon", "Void", "Quantum").
- **Animations:** Staggered reveal. Highlighted card has a continuous slow-pulsing neon border.
- **Tailwind Strategy:** `flex flex-col md:flex-row`, `relative`, `ring-1`, `shadow-[0_0_30px_rgba(6,182,212,0.2)]` for the glow.

### E. CTA (Call to Action)
- **Layout:** Full width, centered content container with a strong glowing background blob/gradient.
- **Content:** "Initialize Your Cluster. Free forever for individuals." Large input field for email and a "Deploy Now" button.
- **Animations:** Background gradient rotates slowly. Button has a strong hover state (text color inversion + background glow).
- **Tailwind Strategy:** `bg-gradient-to-r from-cyan-500/20 to-purple-500/20`, `backdrop-blur-xl`.

### F. Footer
- **Layout:** 4-column grid for links, left-aligned logo and tagline. Bottom row for copyright and socials.
- **Content:** Standard footer links, system status indicator (green glowing dot "All systems operational").
- **Tailwind Strategy:** `border-t border-white/10`, `text-neutral-400`, `hover:text-cyan-400`.

## 3. Design System

### Colors
- **Backgrounds:** Void (`#050505`), Obsidian (`#0F0F13`), Deep Space (`#13131A`).
- **Accents (Neon):**
  - Cyan (Primary): `#00F0FF`
  - Purple (Secondary): `#B026FF`
  - Pink (Warning/Highlight): `#FF003C`
- **Text:** White (`#FFFFFF`), Muted (`#A1A1AA`), Code Muted (`#71717A`).

### Typography
- **Headings (H1-H6):** `Orbitron` (High-impact, geometric, sci-fi) or `Space Grotesk` (Modern, clean, tech-focused).
- **Body:** `Inter` (Legibility).
- **Code/Monospace:** `JetBrains Mono` (Terminals, snippets, UI tags).

### Reusable Components
- `Button`: Variants (Primary Neon, Secondary Outline, Ghost). Includes built-in hover glow effects.
- `Card`: Glassmorphism background, 1px subtle border, optional inner noise texture.
- `CodeBlock`: Takes a string and language, renders formatted code with syntax highlighting (e.g., using `prism-react-renderer` or standard HTML/CSS).
- `Badge`: Small pill-shaped text for tags (e.g., "Beta", "New").

## 4. Animation Plan (Framer Motion)

- **Entry Animations (Hero):**
  - Variant: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}`
  - Used for headings and buttons. Staggered by `0.1s`.
- **Scroll Reveals (Sections):**
  - Variant: `initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}`
  - Applied to Feature Cards, Pricing Tiers.
- **Micro-interactions:**
  - `whileHover={{ scale: 1.05 }}` on standard cards.
  - Button Hover: Background shadow expands `box-shadow: 0 0 20px #00F0FF`.
- **Terminal Typing Effect:**
  - Parent variant with `staggerChildren`, child variant fading in text spans sequentially to simulate typing.

## 5. Spline Integration Plan

- **Scene Concept:** A stylized, floating server rack or an abstract isometric "cloud edge" node. Dark materials, emitting cyan/purple lights. The scene is interactive (mouse orbit/pan restricted to a small degree).
- **Component Wrapper:** Create `<SplineScene />` wrapper around `@splinetool/react-spline`.
- **Lazy Loading:** Use Next.js `next/dynamic` to load the Spline component asynchronously to prevent blocking the initial page load.
  ```typescript
  const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => <div className="animate-pulse bg-white/5 rounded-xl w-full h-full" />,
  })
  ```
- **Performance:** Export the Spline scene with optimized textures and a low polygon count. Ensure a static `.webp` fallback image is used if WebGL fails or loading takes too long.

## 6. Component Architecture

- **`Layout/Header.tsx`**: Renders navigation and mobile menu toggle. Props: `navLinks` array.
- **`UI/Button.tsx`**:
  - Props: `variant` ("neon", "outline", "ghost"), `size` ("sm", "md", "lg"), `href` (optional), `children`.
  - Logic: Merges tailwind classes using `clsx` and `twMerge`.
- **`UI/Card.tsx`**:
  - Props: `className`, `children`, `glowColor`.
  - Logic: Renders base glassmorphism styles and applies dynamic hover glow based on props.
- **`Sections/CodeShowcase.tsx`**:
  - State: `activeTab` (index of currently selected code snippet).
  - Handles tab switching and passing correct data to `<CodeBlock />`.

## 7. Performance Strategy

- **Image Optimization:** All static images (logos, fallback backgrounds) served via `next/image` for automatic WebP conversion and responsive sizing.
- **Font Loading:** Use `next/font/google` for Inter, Space Grotesk, and JetBrains Mono. This ensures fonts are preloaded and eliminates cumulative layout shift (CLS).
- **Spline Lazy Loading:** (As described above), dynamic import without SSR.
- **CSS Bundle:** Tailwind CSS ensures only used styles are purged and shipped.
- **Code Splitting:** Next.js App Router automatically code-splits per route and component boundary.

## 8. UI8 Packaging Checklist (Code Only)

To prepare this template for a professional UI8 sale, the final zip file must be clean and developer-ready:

1. **Clean Project State:**
   - Delete `node_modules`, `.next`, and `.env.local` files.
   - Ensure `package.json` has an updated version, clean script list, and exact dependency versions.
2. **Configuration Checklist:**
   - `tailwind.config.ts` is fully documented for buyers to easily change brand colors.
   - `next.config.js` is clean of any local testing domains.
3. **Documentation (`README.md`):**
   - High-quality hero image of the template.
   - **Quick Start Guide:** Steps to `npm install` and `npm run dev`.
   - **Customization Guide:** Explain where to find the Spline URL to replace it, how to change the primary Neon colors in Tailwind, and where the content constants (`lib/constants.ts`) live.
   - **Deployment Instructions:** Guide for Vercel deployment.
4. **Code Quality:**
   - Run `npm run lint` and ensure 0 warnings.
   - Run `npm run build` to verify a successful production build without type errors.
5. **Zip Packaging:**
   - Folder structure: `Template_Name_v1.0/` containing the source code.
   - Include a `changelog.txt` for future updates.
