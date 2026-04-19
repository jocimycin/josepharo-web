const rankRows = [
  { n: 1, name: 'Oshodi-Isolo', pct: '100%', bar: '#E24B4A', score: '0.87' },
  { n: 2, name: 'Alimosho',     pct: '85%',  bar: '#EF9F27', score: '0.74' },
  { n: 3, name: 'Mushin',       pct: '78%',  bar: '#EF9F27', score: '0.68' },
  { n: 4, name: 'Surulere',     pct: '52%',  bar: '#9ca3af', score: '0.45' },
  { n: 5, name: 'Agege',        pct: '38%',  bar: '#9ca3af', score: '0.33' },
]

const metricCards = [
  {
    label: 'Population at risk (Oshodi-Isolo)',
    val: '~6,200',
    sub: 'in high-hazard zone',
    dot: '#E24B4A',
    note: 'Deteriorating vs last season',
  },
  {
    label: 'Drainage desiltation sites',
    val: '14',
    sub: 'identified, priority 3',
    dot: '#EF9F27',
    note: 'Pre-season window: 6 wks',
  },
  {
    label: 'Budget coverage (est.)',
    val: 'Top 3',
    sub: 'within current allocation',
    dot: '#1D9E75',
    note: 'All 3 zones feasible',
  },
]

export default function FunctionalDashboardExample() {
  return (
    <div className="my-10">
      {/* Label row */}
      <div className="flex items-center gap-2.5 mb-3">
        <span className="inline-block bg-teal-DEFAULT/10 text-teal-DEFAULT text-[0.62rem] font-mono tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border border-teal-DEFAULT/20">
          Functional Pattern
        </span>
        <span className="text-[0.78rem] text-text-muted font-mono">
          One question · One signal · One action
        </span>
      </div>

      {/* Dashboard frame */}
      <div className="rounded border border-ink-light overflow-hidden">

        {/* Header */}
        <div className="px-4 py-3 bg-[#0a1018] border-b border-ink-light flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[0.58rem] text-text-muted tracking-[0.15em] uppercase mb-1">
              Decision dashboard — Flood Intervention Programme
            </div>
            <div className="text-[0.92rem] font-medium text-teal-DEFAULT leading-snug">
              Where should we deploy the next phase of drainage intervention?
            </div>
          </div>
          <div className="font-mono text-[0.62rem] text-text-muted whitespace-nowrap mt-0.5 flex-shrink-0">
            Updated: Apr 2026
          </div>
        </div>

        {/* Grid body */}
        <div className="bg-ink p-2.5 grid grid-cols-3 gap-2">

          {/* Map card — 2 cols */}
          <div className="col-span-2 bg-ink-mid border border-ink-light rounded p-3">
            <div className="font-mono text-[0.62rem] text-text-muted mb-2">
              Priority zones — composite flood risk score (hazard × vulnerability)
            </div>
            <svg width="100%" height="160" viewBox="0 0 380 160" aria-label="Map showing 3 priority flood intervention zones highlighted">
              <rect width="380" height="160" fill="#080C14" rx="4"/>
              {/* Grey base LGAs */}
              <ellipse cx="60"  cy="75"  rx="45" ry="36" fill="#B4B2A9" fillOpacity="0.2"/>
              <ellipse cx="140" cy="58"  rx="50" ry="33" fill="#B4B2A9" fillOpacity="0.2"/>
              <ellipse cx="228" cy="85"  rx="54" ry="40" fill="#B4B2A9" fillOpacity="0.2"/>
              <ellipse cx="305" cy="62"  rx="44" ry="36" fill="#B4B2A9" fillOpacity="0.2"/>
              <ellipse cx="335" cy="122" rx="37" ry="28" fill="#B4B2A9" fillOpacity="0.2"/>
              <ellipse cx="100" cy="130" rx="40" ry="26" fill="#B4B2A9" fillOpacity="0.2"/>
              {/* 3 priority zones highlighted */}
              <ellipse cx="60"  cy="75"  rx="45" ry="36" fill="#E24B4A" fillOpacity="0.6"/>
              <text x="60"  y="71"  textAnchor="middle" fill="#fff"   fontSize="9" fontWeight="500">Oshodi-Isolo</text>
              <text x="60"  y="82"  textAnchor="middle" fill="#ffcccc" fontSize="8">Score 0.87</text>
              <ellipse cx="140" cy="58"  rx="50" ry="33" fill="#EF9F27" fillOpacity="0.65"/>
              <text x="140" y="54"  textAnchor="middle" fill="#fff"   fontSize="9" fontWeight="500">Alimosho</text>
              <text x="140" y="65"  textAnchor="middle" fill="#fff3cc" fontSize="8">Score 0.74</text>
              <ellipse cx="100" cy="130" rx="40" ry="26" fill="#EF9F27" fillOpacity="0.5"/>
              <text x="100" y="126" textAnchor="middle" fill="#fff"   fontSize="9" fontWeight="500">Mushin</text>
              <text x="100" y="137" textAnchor="middle" fill="#fff3cc" fontSize="8">Score 0.68</text>
              {/* Muted labels */}
              <text x="228" y="88"  textAnchor="middle" fill="#555350" fontSize="8">Surulere</text>
              <text x="305" y="65"  textAnchor="middle" fill="#555350" fontSize="8">Agege</text>
              <text x="335" y="125" textAnchor="middle" fill="#555350" fontSize="8">Apapa</text>
              {/* Legend */}
              <circle cx="252" cy="148" r="5" fill="#E24B4A" fillOpacity="0.8"/>
              <text x="260" y="152" fill="#888780" fontSize="8">Critical priority</text>
              <circle cx="322" cy="148" r="5" fill="#EF9F27" fillOpacity="0.8"/>
              <text x="330" y="152" fill="#888780" fontSize="8">High priority</text>
            </svg>
          </div>

          {/* Rank table — 1 col */}
          <div className="bg-ink-mid border border-ink-light rounded p-3">
            <div className="font-mono text-[0.62rem] text-text-muted mb-2">
              Priority ranking by composite score
            </div>
            {rankRows.map((row) => (
              <div
                key={row.n}
                className="flex items-center gap-2 py-1.5 border-b border-ink-light last:border-0"
              >
                <span className="font-mono text-[0.6rem] text-text-muted w-3 flex-shrink-0">{row.n}</span>
                <span className="text-[0.7rem] text-text-secondary flex-1 truncate">{row.name}</span>
                <div className="w-10 bg-ink rounded-sm h-1.5 flex-shrink-0">
                  <div className="h-1.5 rounded-sm" style={{ width: row.pct, background: row.bar }} />
                </div>
                <span className="font-mono text-[0.6rem] text-text-muted w-7 text-right flex-shrink-0">
                  {row.score}
                </span>
              </div>
            ))}
          </div>

          {/* Metric cards */}
          {metricCards.map((card) => (
            <div key={card.label} className="bg-ink-mid border border-ink-light rounded p-3">
              <div className="font-mono text-[0.6rem] text-text-muted mb-1 leading-tight">{card.label}</div>
              <div className="text-[1.3rem] font-medium text-text-primary leading-none">{card.val}</div>
              <div className="font-mono text-[0.6rem] text-text-muted mt-0.5">{card.sub}</div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: card.dot }} />
                <span className="font-mono text-[0.58rem] text-text-muted leading-tight">{card.note}</span>
              </div>
            </div>
          ))}

          {/* Action card — full width */}
          <div className="col-span-3 bg-[#091520] border border-[#1a3a5c] rounded p-3 flex items-start gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: '#185FA5' }}
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3.5 3.5L13 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-[0.82rem] font-medium leading-snug" style={{ color: '#93c5fd' }}>
                Recommended action: Prioritise drainage desiltation in Oshodi-Isolo and Alimosho before the next
                rainy season. Mushin to follow in Phase 2.
              </div>
              <div className="font-mono text-[0.65rem] mt-1" style={{ color: '#60a5fa' }}>
                Decision required by: May 15, 2026 &nbsp;·&nbsp; Approving authority: Commissioner, Environment
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer note */}
      <div className="mt-3 px-4 py-3 bg-ink-mid/40 border-l-2 border-teal-DEFAULT/40">
        <p className="text-[0.78rem] text-text-muted leading-relaxed">
          <strong className="font-medium text-text-secondary">What the executive sees:</strong> One prioritised map,
          a clear ranking, three signal metrics with status indicators, and a recommended action with a deadline.
          No analyst required in the room to explain it.
        </p>
      </div>
    </div>
  )
}
