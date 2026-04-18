# Cyberpunk UI8 Landing Page - Project Plan

**Target Tech Stack**: Next.js 16.2.4 (App Router), Tailwind CSS, Framer Motion, Spline, TypeScript
**Project Concept**: A high-impact, multi-section waitlist/stealth landing page with a cyberpunk/cyber aesthetic.

---

## 1. Project Structure
The project leverages the Next.js App Router convention, organizing components and features in a scalable manner suited for a UI8 template.

```text
cyber-stealth-template/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (fonts, global providers)
│   │   ├── page.tsx           # Main landing page (composes sections)
│   │   ├── globals.css        # Tailwind directives and custom CSS variables
│   │   └── api/
│   │       └── waitlist/
│   │           └── route.ts   # Dummy/Template API route for the email form
│   ├── components/
│   │   ├── ui/                # Reusable, atomic UI components (Buttons, Inputs, Cards)
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── CyberGlitchText.tsx
│   │   │   └── NeonBorderCard.tsx
│   │   ├── sections/          # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── CtaSection.tsx
│   │   │   └── Footer.tsx
│   │   └── spline/            # 3D assets & Spline wrapper components
│   │       ├── HeroSplineScene.tsx
│   │       └── SplineFallback.tsx
│   ├── lib/
│   │   ├── utils.ts           # Utility functions (e.g., Tailwind class merging via clsx/tailwind-merge)
│   │   └── motion.ts          # Centralized Framer Motion variants
│   ├── types/
│   │   └── index.ts           # Global TypeScript interfaces
│   └── assets/
│       ├── fonts/             # Local font files (if not using next/font/google)
│       └── images/            # Static image assets
├── public/                    # Favicon, og-images, public static assets
├── tailwind.config.ts         # Tailwind configuration (custom colors, animations)
├── tsconfig.json              # TypeScript configuration
├── next.config.mjs            # Next.js configuration
├── package.json
└── README.md                  # Comprehensive template documentation
```

---

## 2. Design System

### Color Palette (Cyberpunk Theme)
*   **Backgrounds**:
    *   `bg-obsidian`: `#0a0a0c` (Main background)
    *   `bg-void`: `#050505` (Alternating section background)
    *   `bg-surface`: `#111116` (Cards and panels)
*   **Neons & Accents**:
    *   `neon-cyan`: `#00f3ff` (Primary actions, bright glows)
    *   `neon-pink`: `#ff003c` (Secondary accents, hover states, "glitch" effects)
    *   `neon-purple`: `#bd00ff` (Gradients and atmospheric lighting)
*   **Text**:
    *   `text-primary`: `#ffffff` (Headings)
    *   `text-muted`: `#8a8a93` (Body text, secondary labels)
    *   `text-cyber`: `#00f3ff` (Highlighted text)

### Typography
*   **Primary/Headings**: *Space Grotesk* (or *Orbitron* for a more aggressive look). Next/Font configuration will handle this.
*   **Body/Data**: *Inter* or *JetBrains Mono* for a tech-oriented, clean feel.

### Spacing Scale
Standard Tailwind spacing scale with an emphasis on macro-whitespace to let the glowing elements breathe (e.g., `py-24`, `py-32` for sections, `gap-8` and `gap-12` for flex/grid layouts).

### Reusable Component List
*   `CyberButton`: A button with a glowing cyan/pink border, hover states that increase the glow, and optional glitch effect on click.
*   `WaitlistInput`: An email input field with a dark background, a glowing bottom border on focus, and placeholder text styled like a terminal prompt (`> enter your email_`).
*   `NeonCard`: A content card (used in Features/Pricing) with a subtle gradient border and an inner `bg-surface` layer.
*   `GlitchText`: A typographic component that applies CSS/Framer Motion-based RGB splitting on hover or load.

---

## 3. Section-by-Section Breakdown

### 1. Hero Section (Waitlist Focus)
*   **Layout**: Full-viewport height (`min-h-screen`). Split vertically or layered: Text/Form on the left (or centered), and the Spline 3D scene occupying the right (or full background with text overlay).
*   **Content**: H1 (e.g., "ENTER THE NEXT ERA"), Subtitle ("Join the stealth beta. Limited access."), and the single email Waitlist form.
*   **Tailwind Strategy**: `relative w-full h-screen flex items-center justify-center overflow-hidden bg-obsidian`.
*   **Animations**: Staggered fade-up for text. Glitch effect on the H1. The email form slides in from the bottom.
*   **Spline Usage**: A high-impact 3D object (e.g., a glowing cybernetic core or floating abstract geometries) positioned using absolute positioning behind or next to the content.

### 2. Features Section
*   **Layout**: CSS Grid (`grid-cols-1 md:grid-cols-3 gap-8`).
*   **Content**: 3 to 6 feature cards detailing what makes the product unique. Icons should be tech-focused (lucide-react or custom SVG).
*   **Tailwind Strategy**: `container mx-auto py-24`. Cards use `bg-surface backdrop-blur-md border border-white/5`.
*   **Animations**: Scroll-triggered. Cards stagger in (`opacity-0 translate-y-10` to `opacity-100 translate-y-0`) using Framer Motion's `whileInView`. Glowing borders activate sequentially.

### 3. Pricing Section
*   **Layout**: Flexbox or Grid. Usually 2-3 tiers.
*   **Content**: Tier names (e.g., "Hacker", "Cyber", "God-Mode"), prices, feature lists, and a CTA button per tier. The middle tier should be highlighted.
*   **Tailwind Strategy**: Highlighted tier gets an absolute positioned pseudo-element for a continuous `neon-purple` to `neon-cyan` gradient border.
*   **Animations**: On hover, the cards lift slightly (`hover:-translate-y-2`) and cast a stronger, colored drop shadow (`shadow-[0_0_30px_rgba(0,243,255,0.2)]`).

### 4. CTA Section
*   **Layout**: Centered, constrained width (`max-w-3xl`).
*   **Content**: "Ready to upload your consciousness?" + Waitlist Form repeated.
*   **Tailwind Strategy**: A distinct background pattern (e.g., a subtle grid `bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]`).
*   **Animations**: Pulse animation on a background radial gradient to draw the eye to the input field.

### 5. Footer
*   **Layout**: Simple flex layout.
*   **Content**: Copyright, links to socials (represented by minimalist icons), and legal links.
*   **Tailwind Strategy**: `border-t border-white/10 pt-8 pb-12 flex justify-between items-center text-text-muted text-sm`.

---

## 4. Animation Plan

All animations are handled via **Framer Motion**. Centralized variants are stored in `lib/motion.ts`.

*   **FadeUp Variant**:
    ```javascript
    export const fadeUpVariant = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
    ```
*   **Stagger Container**: Used on the Features and Pricing grids to stagger the children.
    ```javascript
    export const staggerContainer = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };
    ```
*   **Scroll-Triggered**: All sections wrap their content in a `<motion.div>` with `initial="hidden"`, `whileInView="visible"`, `viewport={{ once: true, amount: 0.2 }}`.
*   **Micro-interactions**: Buttons use `whileHover={{ scale: 1.05 }}` and `whileTap={{ scale: 0.95 }}`.

---

## 5. Spline Integration Plan

*   **Embedding**: Use `@splinetool/react-spline`.
*   **Scene Setup**: The scene should be optimized in Spline before exporting. Keep polygon counts low, bake lighting if possible, and rely on material emissions for the "glow" rather than heavy dynamic point lights.
*   **Performance Strategy (Crucial)**:
    *   **Lazy Loading**: The Spline component MUST be dynamically imported with `ssr: false` in Next.js to prevent server-side hydration errors and reduce initial JS payload.
        ```javascript
        const SplineScene = dynamic(() => import('@splinetool/react-spline'), {
          ssr: false,
          loading: () => <SplineFallback />
        });
        ```
    *   **Fallback**: While the 3D scene loads, `<SplineFallback />` displays a static, compressed webp image or a CSS-based glowing orb placeholder to ensure the layout doesn't shift (Cumulative Layout Shift) and the user isn't staring at a blank space.

---

## 6. Component Architecture

*   **`HeroSection`**:
    *   *Props*: None.
    *   *Responsibilities*: Layout the hero text, WaitlistInput, and dynamically load the Spline scene.
*   **`WaitlistInput`**:
    *   *Props*: `onSubmit: (email: string) => void`, `buttonText?: string`.
    *   *Responsibilities*: Manage local state for the email input, handle form submission (mock API call), display success/error state.
*   **`FeatureCard`**:
    *   *Props*: `title: string`, `description: string`, `icon: React.ReactNode`, `delay?: number`.
    *   *Responsibilities*: Render individual feature with hover states. Apply the Framer Motion variant based on the `delay` prop.
*   **`PricingCard`**:
    *   *Props*: `tier: string`, `price: string`, `features: string[]`, `isHighlighted?: boolean`.
    *   *Responsibilities*: Render pricing tier. If `isHighlighted` is true, apply the neon gradient border and prominent CTA button.
*   **`CyberButton`**:
    *   *Props*: Standard HTML button props + `variant?: 'primary' | 'ghost'`.
    *   *Responsibilities*: Render a highly styled, reusable button with motion interactions.

---

## 7. Performance Strategy

*   **Image Optimization**: All static images (fallback assets, backgrounds) must use the Next.js `<Image>` component for automatic webp/avif conversion, responsive sizing, and lazy loading.
*   **Code Splitting**: Native to Next.js App Router. Sections not immediately visible in the viewport can be dynamically imported if they contain heavy libraries.
*   **Font Loading**: Use `next/font/google` for Space Grotesk/Inter. This ensures zero layout shift, as fonts are self-hosted and preloaded automatically by Next.js.
*   **Spline Loading**: As detailed in section 5, dynamic imports and SSR disabling.
*   **Tailwind**: Utilize standard Tailwind compilation which automatically purges unused CSS.

---

## 8. UI8 Packaging Checklist (Code Submission)

To ensure this template is accepted and highly rated on UI8, the final zip file should be structured cleanly:

1.  **Clean Repository**: Remove `.git`, `node_modules`, and `.next` folders before zipping.
2.  **Env Variables**: Provide a `.env.example` file (even if it's just mock variables for the waitlist API). DO NOT include `.env.local`.
3.  **Documentation**:
    *   A stellar `README.md` containing:
        *   Project overview and tech stack.
        *   Prerequisites (Node version).
        *   Step-by-step installation instructions (`npm install`, `npm run dev`).
        *   Instructions on how to change colors in `tailwind.config.ts`.
        *   Instructions on how to replace the Spline URL with the buyer's own 3D scene.
4.  **Code Comments**: Ensure complex Framer Motion logic or Tailwind utility combinations (like gradient borders) are well-commented.
5.  **Linting**: Ensure the code passes `npm run lint` and `npm run build` with zero errors or warnings. Provide a clean `package.json` with strict versioning.
6.  **Assets Folder**: Ensure the `public` folder contains placeholder images that are free for commercial use (Unsplash/Pexels) or custom-generated, to avoid copyright issues upon sale.
