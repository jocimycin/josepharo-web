'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const data = [
  { issue: 'Too many layers', pct: 62 },
  { issue: 'Technical terminology', pct: 53 },
  { issue: 'No recommended action', pct: 52 },
  { issue: 'Legend complexity', pct: 49 },
  { issue: 'Metric without threshold', pct: 44 },
  { issue: 'Scale not contextualised', pct: 38 },
]

function barColor(pct: number) {
  if (pct >= 55) return '#D85A30'
  if (pct >= 45) return '#EF9F27'
  return '#1D9E75'
}

export default function CognitiveLoadChart() {
  return (
    <div className="my-8 p-6 bg-neutral-900 rounded-xl border border-neutral-800">
      <p className="text-xs text-neutral-500 uppercase tracking-widest mb-6 font-mono">
        Where decision-makers lose clarity (self-reported %)
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 48, left: 8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#2a2a2a" />
          <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: '#9ca3af' }} unit="%" />
          <YAxis
            type="category"
            dataKey="issue"
            tick={{ fontSize: 11, fill: '#9ca3af' }}
            width={160}
          />
          <Tooltip
            formatter={(v) => [`${v}%`, 'Decision-makers affected']}
            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 6 }}
            labelStyle={{ color: '#e5e7eb' }}
          />
          <Bar dataKey="pct" radius={[0, 4, 4, 0]} label={{ position: 'right', fontSize: 11, fill: '#9ca3af', formatter: (v: unknown) => `${v}%` }}>
            {data.map((entry, i) => (
              <Cell key={i} fill={barColor(entry.pct)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
