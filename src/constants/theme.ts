/**
 * Design system constants extracted from the Figma spec.
 * Single source of truth for brand colors, gradients, and reusable style values.
 */

export const COLORS = {
  /** Primary brand blue */
  primary: "#00B4FD",
  /** Deep brand blue */
  primaryDark: "#003ACE",
  /** Accent blue used in check icons and highlights */
  accent: "#0066FF",
  /** Light background used on hover states and the MobileAppFeatures section */
  surface: "#E9F4F9",
  /** Main dark background */
  bgDark: "#070B14",
  /** Secondary dark background */
  bgCard: "#0A101D",
  /** Deep dark background used in CTA cards */
  bgDeep: "#000D12",
} as const;

export const GRADIENTS = {
  /** Primary brand gradient (used across buttons, glows, watermarks) */
  brand: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
  /** CTA card background gradient */
  ctaCard: "linear-gradient(135deg, #031E2A 0%, #000D12 63%)",
} as const;

export const GLOW = {
  /** Standard glow ellipse dimensions (Figma: 556.77px) */
  size: "556.77px",
  /** Standard glow blur radius */
  blur: "blur(120px)",
} as const;

/** Shared watermark text stroke style used in MobileAppFeatures and CloudCoreBanking */
export const WATERMARK_STROKE = {
  WebkitTextStroke: "1.5px rgba(0, 102, 255, 0.08)",
  color: "transparent",
} as const;
