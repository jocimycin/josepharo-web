'use client'

import { useEffect, useRef } from 'react'

interface SamplePoint {
  x: number
  y: number
  size: number
  baseOpacity: number
  speed: number
  phase: number
  isTeal: boolean
  connections: number[]
}

interface Zone {
  cx: number
  cy: number
  r: number
  dashes: number[]
}

export default function AboutCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let points: SamplePoint[] = []
    let zones: Zone[] = []

    function resize() {
      if (!canvas) return
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx!.scale(dpr, dpr)
      generate()
    }

    function generate() {
      if (!canvas) return
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      // Sample points — biased toward right 60% where image lives
      const count = Math.min(90, Math.floor((w * h) / 7000))
      points = Array.from({ length: count }, (_, i) => ({
        x: (0.32 + Math.random() * 0.68) * w,
        y: (0.05 + Math.random() * 0.90) * h,
        size: 0.7 + Math.random() * 2.8,
        baseOpacity: 0.055 + Math.random() * 0.17,
        speed: 0.25 + Math.random() * 0.55,
        phase: Math.random() * Math.PI * 2,
        isTeal: Math.random() > 0.78,
        connections: [],
      }))

      // Connect nearby points — sparse network
      const maxDist = w * 0.13
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          if (points[i].connections.length >= 3) break
          if (points[j].connections.length >= 3) continue
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          if (Math.sqrt(dx * dx + dy * dy) < maxDist && Math.random() > 0.55) {
            points[i].connections.push(j)
          }
        }
      }

      // Survey-zone dashed circles
      zones = [
        { cx: w * 0.70, cy: h * 0.32, r: Math.min(w, h) * 0.19, dashes: [5, 8] },
        { cx: w * 0.56, cy: h * 0.68, r: Math.min(w, h) * 0.14, dashes: [3, 6] },
        { cx: w * 0.87, cy: h * 0.64, r: Math.min(w, h) * 0.10, dashes: [2, 5] },
      ]
    }

    function draw(ts: number) {
      if (!canvas || !ctx) return
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      const t = ts * 0.001

      ctx.clearRect(0, 0, w, h)

      // Survey zone circles (dashed)
      for (const z of zones) {
        ctx.beginPath()
        ctx.arc(z.cx, z.cy, z.r, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(201, 168, 76, 0.07)'
        ctx.lineWidth = 0.75
        ctx.setLineDash(z.dashes)
        ctx.stroke()
        ctx.setLineDash([])
      }

      // Connections
      const maxDist = w * 0.13
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        for (const j of p.connections) {
          const q = points[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const alpha = (1 - dist / maxDist) * 0.065
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(q.x, q.y)
          ctx.strokeStyle = `rgba(201, 168, 76, ${alpha})`
          ctx.lineWidth = 0.45
          ctx.stroke()
        }
      }

      // Sample points — gentle pulse
      for (const p of points) {
        const pulse = Math.sin(t * p.speed + p.phase) * 0.35
        const op = Math.max(0.02, p.baseOpacity + pulse * p.baseOpacity * 0.45)
        const r = p.size * (1 + pulse * 0.12)
        const col = p.isTeal
          ? `rgba(45, 212, 191, ${op})`
          : `rgba(201, 168, 76, ${op})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = col
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    animId = requestAnimationFrame(draw)
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      aria-hidden="true"
    />
  )
}
