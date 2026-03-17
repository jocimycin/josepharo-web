'use client'

import { useEffect, useRef } from 'react'

interface ContourCenter {
  xRatio: number
  yRatio: number
  rRatio: number
  rings: number
  phaseOffset: number
  pingStart: number // offset within ping cycle (seconds)
}

const PING_CYCLE = 5.5 // seconds between beacon pulses
const PING_STAGGER = 0.14 // seconds between each ring in a ping

const CENTERS: ContourCenter[] = [
  { xRatio: 0.18, yRatio: 0.42, rRatio: 0.44, rings: 7, phaseOffset: 0,   pingStart: 0.0 },
  { xRatio: 0.80, yRatio: 0.66, rRatio: 0.30, rings: 6, phaseOffset: 2.3, pingStart: 1.9 },
  { xRatio: 0.62, yRatio: 0.10, rRatio: 0.20, rings: 5, phaseOffset: 4.7, pingStart: 3.5 },
]

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number

    function resize() {
      if (!canvas) return
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx!.scale(dpr, dpr)
    }

    function drawGrid(w: number, h: number) {
      ctx!.save()
      ctx!.strokeStyle = 'rgba(201, 168, 76, 0.04)'
      ctx!.lineWidth = 0.5
      ctx!.shadowBlur = 0
      const cols = 16
      for (let i = 0; i <= cols; i++) {
        const x = (i / cols) * w
        ctx!.beginPath()
        ctx!.moveTo(x, 0)
        ctx!.lineTo(x, h)
        ctx!.stroke()
      }
      const rows = 10
      for (let i = 0; i <= rows; i++) {
        const y = (i / rows) * h
        ctx!.beginPath()
        ctx!.moveTo(0, y)
        ctx!.lineTo(w, y)
        ctx!.stroke()
      }
      ctx!.restore()
    }

    function drawCenter(center: ContourCenter, w: number, h: number, t: number) {
      const cx = center.xRatio * w
      const cy = center.yRatio * h
      const baseR = Math.min(w, h) * center.rRatio

      // Beacon ping: how far through this cycle are we for this center?
      const timeSincePing = (t + center.pingStart) % PING_CYCLE

      for (let ring = 0; ring < center.rings; ring++) {
        const ringProgress = ring / center.rings
        const r = baseR * (0.10 + ringProgress * 0.90)

        // Base opacity: inner rings slightly brighter
        const baseOpacity = 0.18 * (1 - ringProgress * 0.62) + 0.04

        // Beacon flash: each ring fires staggered from center outward
        const ringFireTime = ring * PING_STAGGER
        const elapsed = timeSincePing - ringFireTime
        const flash = elapsed > 0 && elapsed < 1.2
          ? Math.exp(-elapsed * 6.5) * 0.75
          : 0

        const opacity = Math.min(0.92, baseOpacity + flash)
        const lineWidth = ring === 0 ? 1.6 : ring === 1 ? 1.1 : 0.75

        // Glow on flash
        if (flash > 0.04) {
          ctx!.shadowColor = `rgba(201, 168, 76, ${flash * 0.9})`
          ctx!.shadowBlur = flash * 28
        } else {
          ctx!.shadowBlur = 0
          ctx!.shadowColor = 'transparent'
        }

        ctx!.beginPath()
        ctx!.strokeStyle = `rgba(201, 168, 76, ${opacity})`
        ctx!.lineWidth = lineWidth + flash * 0.8

        const steps = 140
        for (let i = 0; i <= steps; i++) {
          const angle = (i / steps) * Math.PI * 2
          const d =
            Math.sin(angle * 2 + t * 0.16 + center.phaseOffset) * r * 0.08 +
            Math.sin(angle * 3 + t * 0.11 + center.phaseOffset * 1.4 + ring * 0.5) * r * 0.055 +
            Math.sin(angle * 5 + t * 0.07 + ring * 0.9) * r * 0.032 +
            Math.sin(angle * 8 + t * 0.04 + center.phaseOffset * 0.7) * r * 0.016
          const dist = r + d
          const x = cx + dist * Math.cos(angle)
          const y = cy + dist * Math.sin(angle) * 0.72
          if (i === 0) ctx!.moveTo(x, y)
          else ctx!.lineTo(x, y)
        }
        ctx!.closePath()
        ctx!.stroke()
      }

      // Reset glow
      ctx!.shadowBlur = 0
      ctx!.shadowColor = 'transparent'
    }

    function draw(timestamp: number) {
      if (!canvas || !ctx) return
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      const t = timestamp * 0.001

      ctx.clearRect(0, 0, w, h)
      drawGrid(w, h)
      for (const center of CENTERS) {
        drawCenter(center, w, h, t)
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
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
