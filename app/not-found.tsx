import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen bg-ink flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="font-mono text-xs text-gold-DEFAULT tracking-widest uppercase mb-6">404</p>
        <h1 className="font-display font-light text-h1 text-text-primary mb-4">
          Page not found.
        </h1>
        <p className="text-text-secondary text-base mb-10 leading-relaxed">
          This coordinate doesn&apos;t resolve to anything. Try heading back to known territory.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Home <ArrowRight size={16} />
          </Link>
          <Link href="/work" className="btn-secondary">
            Explore Work
          </Link>
        </div>
      </div>
    </section>
  )
}
