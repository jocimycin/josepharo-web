/**
 * JA Monogram — Joseph Aro brand mark.
 *
 * Layout:
 *  • J  — left vertical with top serif; hook curves LEFT at bottom
 *  • A  — right side; two diagonals meeting at apex; crossbar mid-height
 *  Letters sit side-by-side with a natural typographic gap.
 */

interface JaLogoProps {
  /** Height in px. Width scales proportionally (~0.78 ratio). */
  height?: number
  className?: string
}

export default function JaLogo({ height = 40, className = '' }: JaLogoProps) {
  const w = Math.round(height * 0.78)
  const h = height

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 100 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ── J: top serif ── */}
      <line x1="7" y1="11" x2="47" y2="11" stroke="currentColor" strokeWidth="5.5" strokeLinecap="square" />

      {/* ── J: vertical stem ── */}
      <line x1="32" y1="11" x2="32" y2="92" stroke="currentColor" strokeWidth="5.5" strokeLinecap="butt" />

      {/* ── J: hook — curves LEFT at bottom ── */}
      <path
        d="M 32 92 C 32 118 7 118 7 104"
        stroke="currentColor"
        strokeWidth="5.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── A: left diagonal leg ── */}
      <line x1="73" y1="11" x2="55" y2="117" stroke="currentColor" strokeWidth="5.5" strokeLinecap="square" />

      {/* ── A: right diagonal leg ── */}
      <line x1="73" y1="11" x2="91" y2="117" stroke="currentColor" strokeWidth="5.5" strokeLinecap="square" />

      {/* ── A: crossbar ── */}
      <line x1="62" y1="74" x2="84" y2="74" stroke="currentColor" strokeWidth="4.8" strokeLinecap="square" />
    </svg>
  )
}
