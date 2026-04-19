'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Time to Insight (sec)', 'Complex Dashboard': 94, 'Decision Dashboard': 18 },
  { name: 'Decision Confidence (%)', 'Complex Dashboard': 34, 'Decision Dashboard': 81 },
  { name: 'Correct Action (%)', 'Complex Dashboard': 41, 'Decision Dashboard': 79 },
]

export default function ComprehensionGapChart() {
  return (
    <div className="my-8 p-6 bg-neutral-900 rounded-xl border border-neutral-800">
      <p className="text-xs text-neutral-500 uppercase tracking-widest mb-6 font-mono">
        Complex vs. Decision Dashboard Performance
      </p>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 8, right: 24, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#9ca3af' }} />
          <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 6 }}
            labelStyle={{ color: '#e5e7eb' }}
          />
          <Legend wrapperStyle={{ fontSize: 12, color: '#9ca3af' }} />
          <Bar dataKey="Complex Dashboard" fill="#D85A30" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Decision Dashboard" fill="#1D9E75" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
