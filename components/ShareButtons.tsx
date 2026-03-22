'use client'

import { useState } from 'react'
import { Linkedin, Twitter, Link2, Check, ExternalLink } from 'lucide-react'

interface CrossPostLinks {
  linkedin?: string
  twitter?: string
  medium?: string
}

interface ShareButtonsProps {
  url: string
  title: string
  crossPostLinks?: CrossPostLinks
}

export default function ShareButtons({ url, title, crossPostLinks }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const encoded = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`
  const shareTwitter = `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}&via=josepharo`

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    })
  }

  const hasCrossPosts = crossPostLinks && (crossPostLinks.linkedin || crossPostLinks.twitter || crossPostLinks.medium)

  return (
    <div className="flex flex-col gap-4">
      {/* Share this article */}
      <div className="flex items-center gap-2">
        <a
          href={shareLinkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="w-8 h-8 rounded-sm border border-ink-light flex items-center justify-center text-text-muted hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors duration-200"
        >
          <Linkedin size={14} />
        </a>
        <a
          href={shareTwitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X / Twitter"
          className="w-8 h-8 rounded-sm border border-ink-light flex items-center justify-center text-text-muted hover:text-sky-400 hover:border-sky-400 transition-colors duration-200"
        >
          <Twitter size={14} />
        </a>
        <button
          onClick={copyLink}
          aria-label="Copy article link"
          className="w-8 h-8 rounded-sm border border-ink-light flex items-center justify-center text-text-muted hover:text-gold-DEFAULT hover:border-gold-subtle transition-colors duration-200"
        >
          {copied ? <Check size={14} className="text-teal" /> : <Link2 size={14} />}
        </button>
      </div>

      {/* Also published on */}
      {hasCrossPosts && (
        <div>
          <p className="font-mono text-[0.6rem] text-text-muted tracking-widest uppercase mb-2">Also on</p>
          <div className="flex flex-col gap-1.5">
            {crossPostLinks?.linkedin && (
              <a
                href={crossPostLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-[#0A66C2] transition-colors duration-200"
              >
                <Linkedin size={11} /> LinkedIn <ExternalLink size={10} className="opacity-60" />
              </a>
            )}
            {crossPostLinks?.twitter && (
              <a
                href={crossPostLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-sky-400 transition-colors duration-200"
              >
                <Twitter size={11} /> X / Twitter <ExternalLink size={10} className="opacity-60" />
              </a>
            )}
            {crossPostLinks?.medium && (
              <a
                href={crossPostLinks.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-green-400 transition-colors duration-200"
              >
                <span className="font-bold text-[11px] leading-none">M</span> Medium <ExternalLink size={10} className="opacity-60" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
