# NeonDeploy - Cyber Stealth Template

Welcome to the **NeonDeploy** template! This is a high-impact, multi-section waitlist/stealth landing page built with a cyberpunk aesthetic, optimized for the modern web.

## Tech Stack
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Spline](https://spline.design/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## Quick Start

### 1. Install Dependencies
Ensure you have Node.js installed, then run:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Customization Guide

### Changing the Color Palette
The template utilizes a custom design system ("Void Protocol"). You can easily change the core neon colors in the `tailwind.config.ts` file located in the root directory.

Look for the `colors` object inside `theme.extend`:
```typescript
colors: {
  // ... other colors
  "obsidian": "#0a0a0c",
  "void": "#050505",
  "neon-cyan": "#00f3ff",  // Primary Accent
  "neon-pink": "#ff003c",  // Secondary Accent
  "neon-purple": "#bd00ff", // Tertiary Accent
}
```

### Replacing the 3D Spline Scene
The glowing 3D object in the Hero section is powered by Spline. To use your own scene:
1. Open `src/components/sections/HeroSection.tsx`.
2. Locate the `<Spline />` component near the bottom of the file.
3. Replace the `scene` URL string with your exported Spline URL:

```tsx
<Spline scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode" className="w-full h-full" />
```

### Hooking up the Waitlist API
The email waitlist form is fully functional visually, but currently points to a mock API route.
To save emails to a real database:
1. Open `src/app/api/waitlist/route.ts`.
2. Replace the simulated `setTimeout` delay with your actual database or email provider logic (e.g., Supabase, Firebase, Resend, or Mailchimp).

---

## Folder Structure

- `src/app/`: Contains the Next.js App Router layout, page, and API routes.
- `src/components/ui/`: Contains atomic, reusable UI components (Buttons, Inputs, Cards).
- `src/components/sections/`: Contains the major page blocks (Hero, Features, Pricing).
- `src/lib/`: Contains utility functions and centralized Framer Motion variants.

## License
Free for personal and commercial use as part of your application. You may not resell this template as-is or as a derivative template.