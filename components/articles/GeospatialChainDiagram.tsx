export default function GeospatialChainDiagram() {
  const separators = [122, 232, 342, 452, 562]

  return (
    <div className="my-10 overflow-x-auto -mx-1">
      <svg
        viewBox="0 0 680 320"
        width="100%"
        style={{ minWidth: 520 }}
        role="img"
        aria-label="The full geospatial chain from field acquisition to executive insight — six stages"
      >
        <defs>
          <marker id="cg-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
          <marker id="cg-arrow-gold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
          <marker id="cg-arrow-loop" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#534AB7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>

        {/* ── Title ─────────────────────────────────────────────── */}
        <text x="340" y="22" textAnchor="middle" fill="#9ca3af" fontSize="12" fontFamily="'Courier New', monospace">
          The full geospatial chain — where does yours break?
        </text>

        {/* ── Stage 1: Field acquisition ────────────────────────── */}
        <rect x="20" y="44" width="90" height="68" rx="8" fill="#085041" stroke="#5DCAA5" strokeWidth="0.5"/>
        <text x="65" y="70" textAnchor="middle" dominantBaseline="central" fill="#9FE1CB" fontSize="14" fontWeight="500">Stage 1</text>
        <text x="65" y="86" textAnchor="middle" dominantBaseline="central" fill="#5DCAA5" fontSize="12">Field</text>
        <text x="65" y="100" textAnchor="middle" dominantBaseline="central" fill="#5DCAA5" fontSize="12">acquisition</text>

        <line x1="110" y1="78" x2="128" y2="78" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#cg-arrow)"/>

        {/* ── Stage 2: Analyst processing ───────────────────────── */}
        <rect x="130" y="44" width="90" height="68" rx="8" fill="#085041" stroke="#5DCAA5" strokeWidth="0.5"/>
        <text x="175" y="70" textAnchor="middle" dominantBaseline="central" fill="#9FE1CB" fontSize="14" fontWeight="500">Stage 2</text>
        <text x="175" y="86" textAnchor="middle" dominantBaseline="central" fill="#5DCAA5" fontSize="12">Analyst</text>
        <text x="175" y="100" textAnchor="middle" dominantBaseline="central" fill="#5DCAA5" fontSize="12">processing</text>

        <line x1="220" y1="78" x2="238" y2="78" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#cg-arrow)"/>

        {/* ── Stage 3: Insight translation — BREAK POINT ────────── */}
        <rect x="240" y="44" width="90" height="68" rx="8" fill="#633806" stroke="#EF9F27" strokeWidth="1"/>
        <text x="285" y="70" textAnchor="middle" dominantBaseline="central" fill="#FAC775" fontSize="14" fontWeight="500">Stage 3</text>
        <text x="285" y="86" textAnchor="middle" dominantBaseline="central" fill="#EF9F27" fontSize="12">Insight</text>
        <text x="285" y="100" textAnchor="middle" dominantBaseline="central" fill="#EF9F27" fontSize="12">translation</text>

        {/* Break marker */}
        <line x1="218" y1="38" x2="351" y2="38" stroke="#E24B4A" strokeWidth="1" strokeDasharray="4 3"/>
        <rect x="218" y="28" width="133" height="14" fill="#080C14"/>
        <text x="285" y="38" textAnchor="middle" dominantBaseline="central" fill="#E24B4A" fontSize="9" fontFamily="'Courier New', monospace">
          most chains break here
        </text>

        <line x1="330" y1="78" x2="348" y2="78" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#cg-arrow-gold)"/>

        {/* ── Stage 4: Dashboard architecture ───────────────────── */}
        <rect x="350" y="44" width="90" height="68" rx="8" fill="#0C447C" stroke="#85B7EB" strokeWidth="0.5"/>
        <text x="395" y="70" textAnchor="middle" dominantBaseline="central" fill="#B5D4F4" fontSize="14" fontWeight="500">Stage 4</text>
        <text x="395" y="86" textAnchor="middle" dominantBaseline="central" fill="#85B7EB" fontSize="12">Dashboard</text>
        <text x="395" y="100" textAnchor="middle" dominantBaseline="central" fill="#85B7EB" fontSize="12">architecture</text>

        <line x1="440" y1="78" x2="458" y2="78" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#cg-arrow)"/>

        {/* ── Stage 5: Executive briefing ────────────────────────── */}
        <rect x="460" y="44" width="90" height="68" rx="8" fill="#0C447C" stroke="#85B7EB" strokeWidth="0.5"/>
        <text x="505" y="70" textAnchor="middle" dominantBaseline="central" fill="#B5D4F4" fontSize="14" fontWeight="500">Stage 5</text>
        <text x="505" y="86" textAnchor="middle" dominantBaseline="central" fill="#85B7EB" fontSize="12">Executive</text>
        <text x="505" y="100" textAnchor="middle" dominantBaseline="central" fill="#85B7EB" fontSize="12">briefing</text>

        <line x1="550" y1="78" x2="568" y2="78" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#cg-arrow)"/>

        {/* ── Stage 6: Decision audit ────────────────────────────── */}
        <rect x="570" y="44" width="90" height="68" rx="8" fill="#3C3489" stroke="#AFA9EC" strokeWidth="0.5"/>
        <text x="615" y="70" textAnchor="middle" dominantBaseline="central" fill="#CECBF6" fontSize="14" fontWeight="500">Stage 6</text>
        <text x="615" y="86" textAnchor="middle" dominantBaseline="central" fill="#AFA9EC" fontSize="12">Decision</text>
        <text x="615" y="100" textAnchor="middle" dominantBaseline="central" fill="#AFA9EC" fontSize="12">audit</text>

        {/* ── Feedback loop ─────────────────────────────────────── */}
        <path
          d="M615 112 L615 145 L65 145 L65 112"
          fill="none"
          stroke="#534AB7"
          strokeWidth="0.8"
          strokeDasharray="5 4"
          markerEnd="url(#cg-arrow-loop)"
        />
        <text x="340" y="160" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">
          feedback loop — closes the chain and improves the next iteration
        </text>

        {/* ── Section divider ───────────────────────────────────── */}
        <line x1="20" y1="175" x2="660" y2="175" stroke="rgba(222,220,209,0.12)" strokeWidth="0.5"/>
        <text x="340" y="192" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">
          What belongs in each stage
        </text>

        {/* ── Column separators ─────────────────────────────────── */}
        {separators.map((x) => (
          <line
            key={x}
            x1={x} y1="200" x2={x} y2="252"
            stroke="rgba(222,220,209,0.1)"
            strokeWidth="0.5"
            strokeDasharray="3 3"
          />
        ))}

        {/* ── Stage descriptions ────────────────────────────────── */}
        {/* Stage 1 */}
        <text x="65"  y="212" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">GPS + ODK</text>
        <text x="65"  y="226" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">QA protocols</text>
        <text x="65"  y="240" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">KoboCollect</text>
        {/* Stage 2 */}
        <text x="175" y="212" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">GIS model</text>
        <text x="175" y="226" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">AHP / MCA</text>
        <text x="175" y="240" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">Validation</text>
        {/* Stage 3 — highlighted amber */}
        <text x="285" y="212" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">Plain language</text>
        <text x="285" y="226" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">Score to action</text>
        <text x="285" y="240" textAnchor="middle" fill="#EF9F27" fontSize="11" fontFamily="'Courier New', monospace" fontStyle="italic">Often skipped</text>
        {/* Stage 4 */}
        <text x="395" y="212" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">1 question</text>
        <text x="395" y="226" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">1 primary signal</text>
        <text x="395" y="240" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">1 next action</text>
        {/* Stage 5 */}
        <text x="505" y="212" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">60-sec orient</text>
        <text x="505" y="226" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">Point to signal</text>
        <text x="505" y="240" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">State the ask</text>
        {/* Stage 6 */}
        <text x="615" y="212" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">Was action</text>
        <text x="615" y="226" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">taken? Why</text>
        <text x="615" y="240" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="'Courier New', monospace">not?</text>

        {/* ── Bottom insight ────────────────────────────────────── */}
        <rect x="20" y="264" width="640" height="42" rx="6" fill="none" stroke="rgba(222,220,209,0.12)" strokeWidth="0.5"/>
        <text x="340" y="281" textAnchor="middle" fill="#F0EBE0" fontSize="12" fontWeight="500">
          The field work is already good. The analysis is solid.
        </text>
        <text x="340" y="298" textAnchor="middle" fill="#F0EBE0" fontSize="12" fontWeight="500">
          Stage 3 is where most investments are lost or recovered.
        </text>
      </svg>
    </div>
  )
}
