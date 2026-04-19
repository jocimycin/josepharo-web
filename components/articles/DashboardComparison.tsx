export default function DashboardComparison() {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* BAD DASHBOARD */}
      <div className="border border-red-900/50 rounded-xl overflow-hidden">
        <div className="bg-red-950/60 px-4 py-2.5 flex items-center gap-2 border-b border-red-900/40">
          <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
          <span className="text-red-400 font-mono text-xs tracking-wide">Dashboard A — Analyst View</span>
        </div>
        <div className="p-4 bg-neutral-900 space-y-3">
          <div className="text-[0.68rem] text-neutral-500 font-mono">
            Multi-Temporal Spatial Risk Assessment — Basin Zone 4
          </div>
          <div className="grid grid-cols-2 gap-1">
            {['Hydrology', 'Geology', 'Infra.', 'Vegetation', 'Risk α', 'Risk β', 'Morphometry', 'LiDAR'].map((l, i) => (
              <div
                key={i}
                className="text-[0.68rem] px-2 py-1 rounded flex items-center gap-1.5"
                style={{ backgroundColor: `hsl(${i * 30}, 30%, 18%)` }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: `hsl(${i * 30}, 60%, 55%)` }} />
                <span className="text-neutral-400">{l}</span>
              </div>
            ))}
          </div>
          <div className="text-[0.65rem] text-neutral-600 font-mono">
            14 classification categories · EPSG:4326 · 36 months
          </div>
          <div className="w-full h-20 rounded bg-neutral-800 flex items-center justify-center">
            <span className="text-neutral-600 text-[0.7rem] font-mono text-center px-4">
              Dense multi-layer map — no clear focal point
            </span>
          </div>
          <div className="text-[0.68rem] text-neutral-600 italic">
            No thresholds · No recommended action · No KPIs
          </div>
        </div>
      </div>

      {/* GOOD DASHBOARD */}
      <div className="border border-teal-900/50 rounded-xl overflow-hidden">
        <div className="bg-teal-950/60 px-4 py-2.5 flex items-center gap-2 border-b border-teal-900/40">
          <span className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0" />
          <span className="text-teal-400 font-mono text-xs tracking-wide">Dashboard B — Decision View</span>
        </div>
        <div className="p-4 bg-neutral-900 space-y-3">
          <div className="bg-amber-500/15 border border-amber-500/25 rounded-lg px-4 py-3 text-center">
            <div className="text-2xl font-bold text-amber-400">3</div>
            <div className="text-[0.7rem] text-amber-300/80 mt-0.5">High-Priority Zones Require Action</div>
          </div>
          <div className="w-full h-16 rounded bg-neutral-800 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-neutral-600 text-[0.68rem] font-mono">Focused map — 3 amber zones only</span>
            </div>
            {[22, 50, 74].map((x, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-amber-500/70 border-2 border-amber-400"
                style={{ left: `${x}%`, top: '28%' }}
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[0.6rem] text-amber-400 font-mono font-bold">
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
          <div className="space-y-1.5">
            <div className="flex items-start gap-2 text-[0.72rem]">
              <span className="text-amber-400 mt-0.5 flex-shrink-0">▲</span>
              <span className="text-neutral-300">Zone 2 risk elevated 18% since last quarter</span>
            </div>
            <div className="flex items-start gap-2 text-[0.72rem]">
              <span className="text-red-400 mt-0.5 flex-shrink-0">●</span>
              <span className="text-neutral-300">Zones 1 &amp; 3 exceed action threshold</span>
            </div>
          </div>
          <button className="w-full py-2 rounded text-[0.72rem] font-medium bg-teal-800/60 text-teal-300 border border-teal-700/40 hover:bg-teal-700/60 transition-colors duration-150">
            Download Zone Detail Report
          </button>
        </div>
      </div>
    </div>
  )
}
