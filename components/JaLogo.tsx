/**
 * JA Monogram — Joseph Aro brand mark.
 *
 * Structure:
 *  • J  — left vertical with top serif, curves at bottom (U-sweep)
 *  • A  — shares J's vertical as left leg; separate right leg full-height;
 *          crossbar at mid-height; bottom serif on right leg
 *  The J's bottom curve connects to the A's right vertical.
 */

interface JaLogoProps {
  /** Height in px. Width scales proportionally (~0.72 ratio). */
  height?: number
  className?: string
}

export default function JaLogo({ height = 40, className = '' }: JaLogoProps) {
  const w = Math.round(height * 0.72)
  const h = height

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ── J: top serif ── */}
      <line x1="14" y1="16" x2="46" y2="16" stroke="currentColor" strokeWidth="5.5" strokeLinecap="square" />

      {/* ── J: main vertical (= A's left leg) ── */}
      <line x1="30" y1="16" x2="30" y2="99" stroke="currentColor" strokeWidth="5.5" strokeLinecap="butt" />

      {/* ── J: bottom U-curve connecting to A's right vertical ── */}
      <path
        d="M 30 99 Q 30 126 54.5 129 Q 79 130 79 108"
        stroke="currentColor"
        strokeWidth="5.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── A: crossbar ── */}
      <line x1="30" y1="70" x2="79" y2="70" stroke="currentColor" strokeWidth="4.8" strokeLinecap="square" />

      {/* ── A: right leg (full height) ── */}
      <line x1="79" y1="16" x2="79" y2="136" stroke="currentColor" strokeWidth="5.5" strokeLinecap="butt" />

      {/* ── A: right leg bottom serif ── */}
      <line x1="66" y1="136" x2="92" y2="136" stroke="currentColor" strokeWidth="4.8" strokeLinecap="square" />
    </svg>
  )
}
