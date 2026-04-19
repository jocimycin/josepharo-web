'use client'

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Technical showcase', lines: ['Technical', 'showcase'], value: 12, color: '#E24B4A' },
  { name: 'Data-rich reporting', lines: ['Data-rich', 'reporting'], value: 31, color: '#EF9F27' },
  { name: 'Insight-oriented', lines: ['Insight-', 'oriented'], value: 68, color: '#378ADD' },
  { name: 'Decision-first', lines: ['Decision-', 'first'], value: 89, color: '#1D9E75' },
]

const labelMap: Record<string, string[]> = Object.fromEntries(
  data.map((d) => [d.name, d.lines])
)

function CustomTick(props: any) {
  const { x, y, payload } = props
  const lines = labelMap[payload.value] ?? [payload.value]
  return (
    <g transform={`translate(${x},${y + 4})`}>
      {lines.map((line, i) => (
        <text
          key={i}
          x={0}
          y={i * 14}
          dy={12}
          textAnchor="middle"
          fill="#6b7280"
          fontSize={11}
          fontFamily="'Courier New', monospace"
        >
          {line}
        </text>
      ))}
    </g>
  )
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null
  const entry = data.find((d) => d.value === payload[0].value)
  return (
    <div style={{ background: '#0f1520', border: '1px solid rgba(222,220,209,0.12)', padding: '8px 12px' }}>
      <p className="font-mono text-xs" style={{ color: entry?.color ?? '#fff' }}>
        Decision adoption: {payload[0].value}%
      </p>
    </div>
  )
}

export default function ConversionFunnelChart() {
  return (
    <div className="my-10 rounded border border-ink-light bg-ink-mid p-6">
      <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-text-muted mb-1">
        Dashboard design type vs. likelihood of decision adoption
      </p>
      <p className="text-[0.78rem] text-text-muted mb-6">
        Illustrative comparison based on practitioner observation
      </p>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 48 }}>
          <XAxis
            dataKey="name"
            tick={CustomTick}
            axisLine={false}
            tickLine={false}
            interval={0}
            height={50}
          />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
            tick={{ fill: '#6b7280', fontSize: 11, fontFamily: "'Courier New', monospace" }}
            axisLine={false}
            tickLine={false}
            width={38}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={80}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap gap-5 mt-1">
        <span className="flex items-center gap-1.5 font-mono text-[0.68rem] text-text-muted">
          <span className="w-2.5 h-2.5 rounded-[2px] flex-shrink-0" style={{ background: '#E24B4A' }} />
          Typical geospatial output
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[0.68rem] text-text-muted">
          <span className="w-2.5 h-2.5 rounded-[2px] flex-shrink-0" style={{ background: '#1D9E75' }} />
          Decision-oriented output
        </span>
      </div>
    </div>
  )
}
