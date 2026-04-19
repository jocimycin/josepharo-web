const layers = [
  {
    label: 'Decision Surface',
    sublabel: 'What to do, by when, with what confidence',
    bg: '#EF9F27',
    text: '#412402',
    badge: 'Decision-maker',
    badgeBg: 'rgba(0,0,0,0.18)',
  },
  {
    label: 'Insight Surface',
    sublabel: 'What the data means in operational terms',
    bg: '#FAC775',
    text: '#633806',
    badge: 'Decision-maker',
    badgeBg: 'rgba(0,0,0,0.14)',
  },
  {
    label: 'Metric Surface',
    sublabel: 'Key indicators with context and thresholds',
    bg: '#1D9E75',
    text: '#04342C',
    badge: 'Analyst',
    badgeBg: 'rgba(0,0,0,0.18)',
  },
  {
    label: 'Spatial Surface',
    sublabel: 'Focused map — only what the decision requires',
    bg: '#0F6E56',
    text: '#E1F5EE',
    badge: 'Analyst',
    badgeBg: 'rgba(0,0,0,0.22)',
  },
]

export default function DashboardStack() {
  return (
    <div className="my-8">
      <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4 font-mono">
        Dashboard Design Stack
      </p>
      <div className="flex flex-col gap-1">
        {layers.map((layer, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-5 py-3.5 rounded-lg"
            style={{ backgroundColor: layer.bg, color: layer.text }}
          >
            <div>
              <p className="font-semibold text-sm">{layer.label}</p>
              <p className="text-xs opacity-75 mt-0.5">{layer.sublabel}</p>
            </div>
            <span
              className="text-xs font-medium px-2.5 py-1 rounded ml-4 flex-shrink-0"
              style={{ backgroundColor: layer.badgeBg }}
            >
              {layer.badge}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs text-neutral-600 mt-3 font-mono">
        Each layer serves the layer above it. The analyst operates across all four. The decision-maker should only need Layers 3 and 4.
      </p>
    </div>
  )
}
