'use client'

import { useState } from 'react'

type DashboardType = 'broken' | 'functional'

const BROKEN_ITEMS = [
  'Multi-layer opacity blending (7 active layers)',
  "Moran's I = 0.743 (z=4.21, p<0.001)",
  'NDVI mean ± σ: 0.31 ± 0.08',
  '16-colour composite risk legend',
  'Precipitation anomaly 2016–2023',
]

const FUNCTIONAL_ITEMS = [
  '3 priority LGAs highlighted, others greyed',
  'Ranked table: Oshodi-Isolo (0.87), Alimosho (0.74), Mushin (0.68)',
  'Traffic-light status: Critical / High / Stable',
  'Population at risk: ~6,200 in highest zone',
  'Action: Prioritise drainage desiltation before rainy season',
]

export default function GeospatialDashboardDemo() {
  const [active, setActive] = useState<DashboardType>('broken')

  return (
    <div className="my-10 rounded border border-ink-light overflow-hidden bg-ink-mid">
      <div className="flex border-b border-ink-light">
        <button
          onClick={() => setActive('broken')}
          className={`flex-1 py-3 text-sm font-mono tracking-wide transition-colors ${
            active === 'broken'
              ? 'bg-[#1a0a07] text-[#f87171] border-b-2 border-[#ef4444]'
              : 'text-text-muted hover:text-text-secondary'
          }`}
        >
          The broken dashboard
        </button>
        <button
          onClick={() => setActive('functional')}
          className={`flex-1 py-3 text-sm font-mono tracking-wide transition-colors ${
            active === 'functional'
              ? 'bg-[#071a10] text-teal-DEFAULT border-b-2 border-teal-DEFAULT'
              : 'text-text-muted hover:text-text-secondary'
          }`}
        >
          The functional dashboard
        </button>
      </div>

      <div className="p-6 md:p-8">
        {active === 'broken' ? (
          <div>
            <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[#f87171] mb-5">
              What the executive sees: technically dense, decision-absent
            </p>
            <ul className="space-y-3">
              {BROKEN_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ef4444]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded border border-[#3a1a1a] bg-[#1a0a0a] p-4">
              <p className="text-sm text-text-secondary leading-relaxed">
                <span className="font-semibold text-[#f87171]">Result:</span>{' '}
                The Commissioner asks &ldquo;What does this mean for our priority?&rdquo; The analyst is called back in.
                No decision is made in the meeting.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-teal-DEFAULT mb-5">
              What the executive sees: one question, one signal, one action
            </p>
            <ul className="space-y-3">
              {FUNCTIONAL_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-DEFAULT" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded border border-gold-DEFAULT/20 bg-gold-DEFAULT/5 p-4">
              <p className="text-sm text-text-secondary leading-relaxed">
                <span className="font-semibold text-gold-DEFAULT">Recommended action:</span>{' '}
                Prioritise drainage desiltation in Oshodi-Isolo and Alimosho before the next rainy season. Mushin to follow in Phase 2.
              </p>
              <p className="font-mono text-[0.68rem] text-text-muted mt-2">
                Decision required by: May 15, 2026 — No analyst required in the room.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
