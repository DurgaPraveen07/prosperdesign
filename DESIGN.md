---
name: Architectural Prestige
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#121212'
  on-primary-container: '#7e7d7d'
  inverse-primary: '#5f5e5e'
  secondary: '#c7c6c4'
  on-secondary: '#2f312f'
  secondary-container: '#464745'
  on-secondary-container: '#b5b5b2'
  tertiary: '#e9c349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#181100'
  on-tertiary-container: '#987a00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e3e2e0'
  secondary-fixed-dim: '#c7c6c4'
  on-secondary-fixed: '#1a1c1a'
  on-secondary-fixed-variant: '#464745'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 24px
  stack-xl: 120px
  stack-md: 48px
---

## Brand & Style

The design system is engineered to evoke the precision and quiet confidence of a world-class architecture firm. It prioritizes the "luxury of space," utilizing extreme whitespace to frame content as if it were a gallery exhibit. 

The aesthetic is **Minimalist-Glassmorphic**, blending the structural clarity of modernist architecture with the ethereal depth of high-end digital interfaces. The emotional response is one of calm authority, professional rigor, and uncompromising quality. Every interaction should feel deliberate and smooth, mirroring the tactile experience of premium materials like brushed metal and frosted glass.

## Colors

This design system utilizes a high-contrast, dark-mode-first palette to emphasize light and shadow, much like architectural renderings.

- **Primary (Deep Charcoal):** `#121212`. Used for the infinite canvas and primary structural backgrounds. It provides the "void" that allows photography and gold accents to pop.
- **Secondary (Off-White):** `#FAF9F6`. Reserved for primary typography and high-impact UI elements. It is softened slightly from pure white to reduce eye strain and feel more like premium paper.
- **Tertiary (Champagne Gold):** `#D4AF37`. Used sparingly as a "metal inlay" accent for interactive states, call-to-actions, or subtle decorative borders.
- **Neutral:** A range of grays derived from the charcoal base, used for secondary text and subtle borders to maintain hierarchy without breaking the minimalist flow.

## Typography

The typography strategy focuses on **Inter**, utilizing its systematic clarity and varying weights to create a cinematic hierarchy. 

- **Display & Headlines:** Use tight letter-spacing and heavy weights (600-700) to create a bold, "editorial" impact.
- **Body Text:** Ample line height (1.6) ensures maximum readability against dark backgrounds.
- **Labels:** Small caps with generous letter-spacing are used for categorization and technical metadata, mimicking architectural blueprints.
- **Scaling:** On mobile, display sizes are reduced significantly to maintain the "frame" of whitespace around the text.

## Layout & Spacing

The layout is built on a **12-column fixed grid** for desktop, centered within the viewport. 

- **The "Breath" Principle:** Vertical spacing between major sections (`stack-xl`) is intentionally oversized (120px+) to ensure each project or piece of content feels prestigious and isolated.
- **Alignment:** Content should strictly align to the grid edges. Asymmetrical layouts are encouraged, where images might span 8 columns and text only 3, leaving a "void" of 1 column in between.
- **Responsive:** On mobile, the grid collapses to a single column with 24px side margins. The generous vertical breathing room is maintained to keep the luxury feel.

## Elevation & Depth

This system avoids traditional drop shadows in favor of **Glassmorphism** and **Tonal Layering**.

- **Surfaces:** Use a 1px solid border at 10% opacity (Off-White) to define edges.
- **Glass Effects:** Interactive cards and navigation bars use a background blur (`backdrop-filter: blur(20px)`) combined with a semi-transparent fill (`rgba(255, 255, 255, 0.03)`).
- **Depth:** Higher elevation is communicated by increasing the brightness of the background fill slightly and sharpening the "rim light" (the top border).
- **Shadows:** Only used when absolutely necessary for legibility over complex imagery. If used, they must be "Ambient Shadows": extremely soft, large radius (60px+), and very low opacity (15%).

## Shapes

The shape language is sophisticated and modern. While the overall layout is "boxy" and architectural, individual interactive components use **large radii** to feel approachable and high-tech.

- **Primary Containers:** 1rem (16px) radius for cards and modal windows.
- **Buttons/Inputs:** 0.5rem (8px) radius for a more precise, engineered look.
- **Media:** Full-bleed images should remain sharp (0px) to feel like integrated architectural features, whereas floating "gallery" images should follow the 16px radius rule.

## Components

- **Buttons:**
  - *Primary:* Solid Off-White with Charcoal text. No shadow. High-contrast hover (shifts to Champagne Gold text).
  - *Secondary:* Ghost style. 1px Off-White border (20% opacity). On hover, the border becomes 100% opaque.
- **Glass Cards:** Used for project previews. Features a 20px blur, a subtle 1px border, and a "shimmer" gradient effect on hover.
- **Inputs:** Underlined or minimal boxed fields. The active state is signaled by the label transforming into the small-cap style and moving above the line, accented by a 1px Champagne Gold bottom border.
- **Navigation:** A fixed, top-aligned bar with a heavy backdrop blur. The logo is centered or left-aligned, with navigation links in the `label-caps` style.
- **Progress Indicators:** Thin (2px) lines in Champagne Gold. Used for scroll progress or image carousels to maintain the "precision instrument" aesthetic.