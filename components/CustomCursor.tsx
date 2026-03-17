'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [mounted, setMounted] = useState(false)

  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)

  // Ring lags behind with spring physics
  const rx = useSpring(mx, { stiffness: 100, damping: 16, mass: 0.4 })
  const ry = useSpring(my, { stiffness: 100, damping: 16, mass: 0.4 })

  useEffect(() => {
    // Only activate on mouse (fine pointer) devices
    if (!window.matchMedia('(pointer: fine)').matches) return
    setMounted(true)

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      setVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element
      setHovering(!!target.closest('a, button, [data-cursor-hover]'))
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [mx, my])

  if (!mounted) return null

  return (
    <>
      {/* Lagging ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: rx,
          y: ry,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovering ? 50 : 32,
          height: hovering ? 50 : 32,
          opacity: visible ? 1 : 0,
          border: hovering
            ? '1px solid rgba(201, 168, 76, 0.85)'
            : '1px solid rgba(201, 168, 76, 0.45)',
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Instant dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: mx,
          y: my,
          translateX: '-50%',
          translateY: '-50%',
          width: 5,
          height: 5,
          backgroundColor: 'var(--gold)',
        }}
        animate={{
          opacity: visible && !hovering ? 1 : 0,
          scale: hovering ? 0 : 1,
        }}
        transition={{ duration: 0.12 }}
      />
    </>
  )
}
