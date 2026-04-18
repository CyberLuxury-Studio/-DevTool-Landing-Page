# Prompt to Generate the NeonDeploy Prototype

Copy and paste the following prompt into v0, Bolt, or Cursor to generate the prototype frontend codebase for the NeonDeploy landing page.

---

**Prompt:**

You are an expert Next.js developer, UI/UX designer, and Tailwind CSS master. Your task is to generate the complete frontend code for a single-page DevTool landing page named "NeonDeploy".

**Core Aesthetic & Vibe:**
The theme is "High-Contrast Synthwave / Cyberpunk". It must look professional enough to be sold as a premium template on UI8.
- Backgrounds should be deep voids (e.g., `bg-[#09090B]`) or midnight purple (`bg-[#130A1F]`).
- Use glowing neon accents heavily: Synthwave Cyan (`#00F0FF`), Hot Pink (`#FF003C`), and Deep Purple (`#8A2BE2`).
- The fonts should be a clean sans-serif for headings (like *Geist* or *Inter*) and a monospace font for code snippets (like *JetBrains Mono* or *Fira Code*).
- Include a subtle CRT-style grid background for the entire page using CSS gradients.

**Tech Stack:**
- React (Next.js App Router conventions, but generating standard React components is fine if within a single file prompt)
- Tailwind CSS (use extensive arbitrary values for glows, e.g., `shadow-[0_0_15px_#00F0FF]`)
- Framer Motion (for animations)
- Lucide React (for icons)

**Sections to Generate:**

1. **Header (Sticky Navigation):**
   - Glassmorphism effect (`backdrop-blur-md bg-black/50 border-b border-white/10`).
   - Logo on the left (text "NeonDeploy" with a cyan glow).
   - Links in the center (Features, Pricing, Docs).
   - "Start Deploying" button on the right (neon cyan background, black text, hover effect).

2. **Hero Section:**
   - Two columns on desktop.
   - Left column: Headline "Ship Code at the Speed of Light". Subheadline explaining fast deployments. Primary CTA "Get Started" and secondary CTA "View Docs".
   - Right column: A placeholder for a 3D scene. Create a beautifully styled dark glassmorphism card (with a glowing neon magenta and cyan border) that contains a pulsing placeholder text: `[ Spline 3D Scene Placeholder: Ambient Looping Server Core ]`.

3. **Features Section (Alternating Layout):**
   - Feature 1: Fast Deployments. Text on left. On the right, build an interactive "Terminal Window" component (macOS style dots in top left). Inside, display a code snippet typing out `git push neondeploy main` followed by a fast green success output.
   - Feature 2: API Monitoring. Text on right. On the left, build a glowing glassmorphism card showing a mock dashboard with neon glowing stats and a line chart placeholder.
   - Feature 3: Code Analysis. Text on left. On the right, build a code block that highlights a simulated syntax error in hot pink, and shows a "fixed" state in cyan.

4. **Pricing Section (3-Tier Grid):**
   - A grid of 3 cards: Hobby, Pro, Enterprise.
   - The cards should have a deep dark background and a 1px subtle border.
   - The middle "Pro" card must be highlighted: elevated slightly, with a strong Synthwave Cyan glowing border, and a "Most Popular" glowing badge.
   - Include pricing amounts and a list of features with checkmark icons.
   - Add hover effects so the cards slightly lift and their glow intensifies.

5. **CTA Section:**
   - A wide, centered banner section.
   - Heavy ambient gradient background (deep purples and dark pinks fading into the black void).
   - Headline: "Ready to hack the mainframe? Join 10,000+ developers."
   - Large, glowing "Sign Up Now" button.

6. **Footer:**
   - Standard 4-column layout (Product, Resources, Company, Legal).
   - Use muted slate text.
   - A large, very faint neon logo watermark in the background of the footer area.

**Animation Requirements (using Framer Motion):**
- Wrap major sections in a `whileInView` fade-up reveal so they animate smoothly as the user scrolls down.
- Buttons should scale up slightly on hover (`whileHover={{ scale: 1.05 }}`).
- The terminal typing effect can be simulated with basic React state or Framer Motion stagger.

**Constraints:**
- Generate clean, modern, semantic HTML/React.
- Ensure the layout is fully responsive (mobile, tablet, desktop).
- Use Tailwind for absolutely all styling. Do not write custom CSS unless it is for the background grid pattern, which should be in a Tailwind utility class or inline style.
- Make the code modular and well-commented so I can easily extract components later.

Please output the complete code.