# Prompt to Generate the Cyberpunk Waitlist Prototype

Copy and paste the following prompt into v0, Bolt, or Cursor to generate the prototype frontend codebase for the Waitlist/Stealth landing page template.

---

**Prompt:**

You are an expert Next.js developer, UI/UX designer, and Tailwind CSS master. Your task is to generate the complete frontend code for a single-page Waitlist/Stealth landing page.

**Core Aesthetic & Vibe:**
The theme is "High-Impact Cyberpunk / Stealth Mode". It must look professional enough to be sold as a premium template on UI8.
- The main background should be Obsidian (`bg-[#0a0a0c]`), alternating with a deep Void (`bg-[#050505]`) for different sections.
- Use glowing neon accents heavily: Neon Cyan (`#00f3ff`), Neon Pink (`#ff003c`), and Neon Purple (`#bd00ff`).
- The fonts should be a sharp, technical sans-serif for headings (like *Space Grotesk* or *Orbitron*) and a clean font for body text (like *Inter* or *JetBrains Mono*).
- Include subtle glowing background elements and subtle grid lines (`bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]`).

**Tech Stack:**
- React (Next.js App Router conventions, but generating standard React components is fine if within a single file prompt)
- Tailwind CSS (use extensive arbitrary values for glows, e.g., `shadow-[0_0_15px_#00f3ff]`)
- Framer Motion (for animations)
- Lucide React (for icons)

**Sections to Generate:**

1. **Hero Section (Waitlist Focus):**
   - Full viewport height (`min-h-screen`), flex layout.
   - Large, glitch-effect H1: "ENTER THE NEXT ERA".
   - Subtitle: "Join the stealth beta. Limited access." in muted slate text.
   - An email input field (`WaitlistInput`) with a dark background (`#111116`), a glowing bottom border on focus, and placeholder text styled like a terminal prompt (`> enter your email_`).
   - A `CyberButton` to submit the form, featuring a glowing cyan/pink border and hover states that increase the glow.
   - A placeholder for a 3D Spline scene. Create a beautifully styled dark glassmorphism card (with a glowing neon purple and cyan border) that contains a pulsing placeholder text: `[ Spline 3D Scene Placeholder ]`.

2. **Features Section (CSS Grid Layout):**
   - A 3-column grid (`grid-cols-1 md:grid-cols-3`).
   - Create 3-6 feature cards using a `NeonCard` component (`bg-[#111116]`, backdrop blur, and subtle border `border-white/5`).
   - Content should focus on stealth/cyber capabilities. Use tech-focused icons (from Lucide React).
   - On hover, the borders should softly glow in neon-pink or cyan.

3. **Pricing Section (3-Tier):**
   - A grid of 3 cards representing pricing tiers: "Hacker", "Cyber", "God-Mode".
   - Cards should have a deep dark background (`bg-[#111116]`).
   - The middle "Cyber" tier must be highlighted: elevated slightly, with a continuous absolute-positioned neon-purple to neon-cyan gradient border.
   - Include pricing amounts, feature lists with checkmarks, and CTA buttons.
   - Hover effects should lift the cards slightly and cast a strong cyan colored drop shadow (`shadow-[0_0_30px_rgba(0,243,255,0.2)]`).

4. **CTA Section:**
   - Centered banner, constrained width.
   - Headline: "Ready to upload your consciousness?"
   - Repeat the `WaitlistInput` form.
   - Background should have the subtle grid pattern and a pulsing radial gradient behind the input.

5. **Footer:**
   - Simple flex layout with top border (`border-t border-white/10`).
   - Muted text (`#8a8a93`), size `text-sm`.
   - Copyright text, minimalist social links (icons), and legal links.

**Animation Requirements (using Framer Motion):**
- Wrap major sections in a `whileInView` fade-up reveal so they animate smoothly as the user scrolls down.
- The `WaitlistInput` should slide in from the bottom.
- Grids (Features/Pricing) should use `staggerChildren` to reveal cards one by one.
- Buttons should scale up slightly on hover (`whileHover={{ scale: 1.05 }}`).
- Apply a simulated "glitch" animation to the main Hero H1 on load.

**Constraints:**
- Generate clean, modern, semantic HTML/React.
- Ensure the layout is fully responsive (mobile, tablet, desktop).
- Use Tailwind for absolutely all styling. Do not write custom CSS unless it is for the background grid pattern or glitch effects, which should be in Tailwind utility classes or inline styles.
- Make the code modular and well-commented so I can easily extract components later.

Please output the complete code.