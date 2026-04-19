import sharp from 'sharp'
import { mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = join(__dirname, '../public/images/articles/field-acquisition-cover.jpg')
mkdirSync(dirname(outPath), { recursive: true })

const W = 1200
const H = 627

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#080C14"/>
      <stop offset="100%" stop-color="#0f1520"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#EF9F27" stop-opacity="0"/>
      <stop offset="20%" stop-color="#EF9F27"/>
      <stop offset="80%" stop-color="#EF9F27"/>
      <stop offset="100%" stop-color="#EF9F27" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="chainLine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2DD4BF" stop-opacity="0.15"/>
      <stop offset="50%" stop-color="#EF9F27" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#1D9E75" stop-opacity="0.15"/>
    </linearGradient>
    <pattern id="topoH" x="0" y="0" width="1200" height="24" patternUnits="userSpaceOnUse">
      <line x1="0" y1="23" x2="1200" y2="23" stroke="#C9A84C" stroke-width="0.5" stroke-opacity="0.06"/>
    </pattern>
    <pattern id="topoV" x="0" y="0" width="24" height="627" patternUnits="userSpaceOnUse">
      <line x1="23" y1="0" x2="23" y2="627" stroke="#2DD4BF" stroke-width="0.5" stroke-opacity="0.03"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#topoH)"/>
  <rect width="${W}" height="${H}" fill="url(#topoV)"/>
  <rect width="${W}" height="220" fill="#EF9F27" fill-opacity="0.02"/>

  <!-- Category label -->
  <text x="60" y="68" font-family="'Courier New', monospace" font-size="11" letter-spacing="4" fill="#EF9F27" fill-opacity="0.85">DATA STRATEGY</text>

  <!-- Headline line 1 -->
  <text x="60" y="132" font-family="Georgia, 'Times New Roman', serif" font-size="50" font-weight="300" fill="#F0EBE0" letter-spacing="-1">From Field Acquisition</text>
  <!-- Headline line 2 -->
  <text x="60" y="188" font-family="Georgia, 'Times New Roman', serif" font-size="50" font-weight="300" fill="#F0EBE0" letter-spacing="-1">to Executive Insight</text>
  <!-- Subtitle italic accent -->
  <text x="60" y="238" font-family="Georgia, 'Times New Roman', serif" font-size="28" font-weight="300" font-style="italic" fill="#EF9F27">Designing the Full Geospatial Chain</text>

  <!-- Amber divider -->
  <rect x="60" y="262" width="1080" height="1.5" fill="url(#goldGrad)"/>

  <!-- Chain pipeline — 6 stages -->
  <!-- Connector line -->
  <line x1="110" y1="380" x2="1140" y2="380" stroke="url(#chainLine)" stroke-width="2"/>

  <!-- Stage 1: Field Design -->
  <circle cx="110" cy="380" r="28" fill="#0f1a12" stroke="#2DD4BF" stroke-width="1.5" stroke-opacity="0.6"/>
  <text x="110" y="376" font-family="'Courier New', monospace" font-size="13" font-weight="700" fill="#2DD4BF" text-anchor="middle">01</text>
  <text x="110" y="389" font-family="'Courier New', monospace" font-size="7" fill="#2DD4BF" fill-opacity="0.7" text-anchor="middle">FIELD</text>
  <text x="110" y="424" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af" text-anchor="middle">Question-First</text>
  <text x="110" y="436" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af" text-anchor="middle">Field Design</text>

  <!-- Stage 2: Processing -->
  <circle cx="316" cy="380" r="28" fill="#0f1520" stroke="#2DD4BF" stroke-width="1.5" stroke-opacity="0.4"/>
  <text x="316" y="376" font-family="'Courier New', monospace" font-size="13" font-weight="700" fill="#2DD4BF" text-anchor="middle">02</text>
  <text x="316" y="389" font-family="'Courier New', monospace" font-size="7" fill="#2DD4BF" fill-opacity="0.7" text-anchor="middle">PROCESS</text>
  <text x="316" y="424" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af" text-anchor="middle">Analyst-Grade</text>
  <text x="316" y="436" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af" text-anchor="middle">Processing</text>

  <!-- Stage 3: Translation — highlighted as the critical stage -->
  <circle cx="522" cy="380" r="32" fill="#1a1200" stroke="#EF9F27" stroke-width="2" stroke-opacity="0.9"/>
  <text x="522" y="375" font-family="'Courier New', monospace" font-size="13" font-weight="700" fill="#EF9F27" text-anchor="middle">03</text>
  <text x="522" y="389" font-family="'Courier New', monospace" font-size="7" fill="#EF9F27" fill-opacity="0.8" text-anchor="middle">TRANSLATE</text>
  <text x="522" y="428" font-family="'Courier New', monospace" font-size="9" fill="#EF9F27" fill-opacity="0.9" text-anchor="middle">Insight</text>
  <text x="522" y="440" font-family="'Courier New', monospace" font-size="9" fill="#EF9F27" fill-opacity="0.9" text-anchor="middle">Translation ★</text>

  <!-- Stage 4: Dashboard -->
  <circle cx="728" cy="380" r="28" fill="#0f1520" stroke="#2DD4BF" stroke-width="1.5" stroke-opacity="0.4"/>
  <text x="728" y="376" font-family="'Courier New', monospace" font-size="13" font-weight="700" fill="#2DD4BF" text-anchor="middle">04</text>
  <text x="728" y="389" font-family="'Courier New', monospace" font-size="7" fill="#2DD4BF" fill-opacity="0.7" text-anchor="middle">DESIGN</text>
  <text x="728" y="424" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af" text-anchor="middle">Dashboard</text>
  <text x="728" y="436" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af" text-anchor="middle">Architecture</text>

  <!-- Stage 5: Briefing -->
  <circle cx="934" cy="380" r="28" fill="#0f1520" stroke="#1D9E75" stroke-width="1.5" stroke-opacity="0.5"/>
  <text x="934" y="376" font-family="'Courier New', monospace" font-size="13" font-weight="700" fill="#1D9E75" text-anchor="middle">05</text>
  <text x="934" y="389" font-family="'Courier New', monospace" font-size="7" fill="#1D9E75" fill-opacity="0.7" text-anchor="middle">BRIEF</text>
  <text x="934" y="424" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af" text-anchor="middle">Executive</text>
  <text x="934" y="436" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af" text-anchor="middle">Briefing</text>

  <!-- Stage 6: Decision Audit -->
  <circle cx="1140" cy="380" r="28" fill="#0d1a10" stroke="#1D9E75" stroke-width="1.5" stroke-opacity="0.7"/>
  <text x="1140" y="376" font-family="'Courier New', monospace" font-size="13" font-weight="700" fill="#1D9E75" text-anchor="middle">06</text>
  <text x="1140" y="389" font-family="'Courier New', monospace" font-size="7" fill="#1D9E75" fill-opacity="0.8" text-anchor="middle">AUDIT</text>
  <text x="1140" y="424" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af" text-anchor="middle">Decision</text>
  <text x="1140" y="436" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af" text-anchor="middle">Audit</text>

  <!-- Stage label breakpoint annotation -->
  <text x="522" y="470" font-family="'Courier New', monospace" font-size="8.5" fill="#EF9F27" fill-opacity="0.6" text-anchor="middle" font-style="italic">← most teams stop here</text>

  <!-- Blockquote strip -->
  <rect x="60" y="500" width="1080" height="56" rx="4" fill="#EF9F27" fill-opacity="0.04" stroke="#EF9F27" stroke-width="0.5" stroke-opacity="0.15"/>
  <text x="80" y="524" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#EF9F27" fill-opacity="0.75">"If your dashboard needs another analyst to interpret it, it is not a dashboard."</text>
  <text x="80" y="544" font-family="Georgia, 'Times New Roman', serif" font-size="12" font-style="italic" fill="#EF9F27" fill-opacity="0.75">"It is a problem wearing a beautiful mask."</text>

  <!-- Bottom attribution -->
  <text x="60" y="610" font-family="'Courier New', monospace" font-size="10" fill="#6b7280" letter-spacing="1">josepharo.me · Joseph Aro</text>
  <text x="1140" y="610" font-family="'Courier New', monospace" font-size="10" fill="#6b7280" text-anchor="end" letter-spacing="1">April 2026</text>
</svg>`

await sharp(Buffer.from(svg))
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile(outPath)

console.log('Cover image generated:', outPath)
