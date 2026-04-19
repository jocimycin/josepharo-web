import sharp from 'sharp'
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = join(__dirname, '../public/images/articles/dashboard-fail-cover.jpg')
mkdirSync(dirname(outPath), { recursive: true })

const W = 1200
const H = 627

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#161616"/>
      <stop offset="100%" stop-color="#1e1e1e"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#EF9F27" stop-opacity="0"/>
      <stop offset="20%" stop-color="#EF9F27"/>
      <stop offset="80%" stop-color="#EF9F27"/>
      <stop offset="100%" stop-color="#EF9F27" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="redFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#D85A30" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#D85A30" stop-opacity="0.04"/>
    </linearGradient>
    <linearGradient id="greenFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1D9E75" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#1D9E75" stop-opacity="0.04"/>
    </linearGradient>
    <!-- Topographic line texture -->
    <pattern id="topoH" x="0" y="0" width="1200" height="24" patternUnits="userSpaceOnUse">
      <line x1="0" y1="23" x2="1200" y2="23" stroke="#C9A84C" stroke-width="0.5" stroke-opacity="0.08"/>
    </pattern>
    <pattern id="topoV" x="0" y="0" width="24" height="627" patternUnits="userSpaceOnUse">
      <line x1="23" y1="0" x2="23" y2="627" stroke="#2DD4BF" stroke-width="0.5" stroke-opacity="0.04"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- Grid texture -->
  <rect width="${W}" height="${H}" fill="url(#topoH)"/>
  <rect width="${W}" height="${H}" fill="url(#topoV)"/>
  <!-- Subtle gradient overlay top -->
  <rect width="${W}" height="200" fill="#EF9F27" fill-opacity="0.03"/>

  <!-- Category label -->
  <text x="60" y="68" font-family="'Courier New', monospace" font-size="11" letter-spacing="4" fill="#EF9F27" fill-opacity="0.85" text-transform="uppercase">GEOSPATIAL INTELLIGENCE</text>

  <!-- Headline — line 1 -->
  <text x="60" y="132" font-family="Georgia, 'Times New Roman', serif" font-size="52" font-weight="300" fill="#F5F5F5" letter-spacing="-1">Why Most Geospatial</text>
  <!-- Headline — line 2 -->
  <text x="60" y="192" font-family="Georgia, 'Times New Roman', serif" font-size="52" font-weight="300" fill="#F5F5F5" letter-spacing="-1">Dashboards Fail</text>
  <!-- Headline — line 3 (italic / accent) -->
  <text x="60" y="252" font-family="Georgia, 'Times New Roman', serif" font-size="52" font-weight="300" font-style="italic" fill="#EF9F27">Decision-Makers</text>

  <!-- Amber divider -->
  <rect x="60" y="278" width="1080" height="1.5" fill="url(#goldGrad)"/>

  <!-- ── Dashboard A panel ── -->
  <rect x="60" y="300" width="516" height="280" rx="6" fill="#111111" stroke="#D85A30" stroke-width="0.8" stroke-opacity="0.5"/>
  <rect x="60" y="300" width="516" height="280" rx="6" fill="url(#redFade)"/>

  <!-- Panel A header -->
  <rect x="60" y="300" width="516" height="32" rx="6" fill="#1a0e0b"/>
  <rect x="60" y="320" width="516" height="12" fill="#1a0e0b"/>
  <circle cx="78" cy="316" r="5" fill="#D85A30" fill-opacity="0.8"/>
  <text x="92" y="321" font-family="'Courier New', monospace" font-size="10.5" fill="#D85A30" fill-opacity="0.9">Dashboard A — Analyst View</text>

  <!-- Panel A: layer legend items -->
  <rect x="76" y="344" width="90" height="18" rx="3" fill="#1e2a1a"/>
  <circle cx="85" cy="353" r="4" fill="#4ade80" fill-opacity="0.7"/>
  <text x="94" y="357" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af">Hydrology</text>

  <rect x="172" y="344" width="90" height="18" rx="3" fill="#1e1e2a"/>
  <circle cx="181" cy="353" r="4" fill="#818cf8" fill-opacity="0.7"/>
  <text x="190" y="357" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af">Geology</text>

  <rect x="268" y="344" width="90" height="18" rx="3" fill="#2a1e18"/>
  <circle cx="277" cy="353" r="4" fill="#f97316" fill-opacity="0.7"/>
  <text x="286" y="357" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af">Infra.</text>

  <rect x="364" y="344" width="90" height="18" rx="3" fill="#1e2a20"/>
  <circle cx="373" cy="353" r="4" fill="#34d399" fill-opacity="0.7"/>
  <text x="382" y="357" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af">Vegetation</text>

  <rect x="76" y="368" width="90" height="18" rx="3" fill="#2a1a1a"/>
  <circle cx="85" cy="377" r="4" fill="#f87171" fill-opacity="0.7"/>
  <text x="94" y="381" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af">Risk α</text>

  <rect x="172" y="368" width="90" height="18" rx="3" fill="#2a2018"/>
  <circle cx="181" cy="377" r="4" fill="#fbbf24" fill-opacity="0.7"/>
  <text x="190" y="381" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af">Risk β</text>

  <rect x="268" y="368" width="90" height="18" rx="3" fill="#181e2a"/>
  <circle cx="277" cy="377" r="4" fill="#60a5fa" fill-opacity="0.7"/>
  <text x="286" y="381" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af">Morphometry</text>

  <rect x="364" y="368" width="90" height="18" rx="3" fill="#1e1e1e"/>
  <circle cx="373" cy="377" r="4" fill="#e2e8f0" fill-opacity="0.6"/>
  <text x="382" y="381" font-family="'Courier New', monospace" font-size="9" fill="#9ca3af">LiDAR</text>

  <!-- Dense map placeholder -->
  <rect x="76" y="394" width="484" height="130" rx="4" fill="#0e0e0e"/>
  <!-- Simulated chaotic map layers -->
  <rect x="76" y="394" width="484" height="130" rx="4" fill="none" stroke="#2a2a2a" stroke-width="1"/>
  <!-- Random coloured blobs simulating cluttered layers -->
  <ellipse cx="200" cy="450" rx="80" ry="40" fill="#4ade80" fill-opacity="0.08"/>
  <ellipse cx="320" cy="440" rx="100" ry="50" fill="#818cf8" fill-opacity="0.1"/>
  <ellipse cx="430" cy="460" rx="60" ry="35" fill="#f97316" fill-opacity="0.1"/>
  <ellipse cx="160" cy="480" rx="70" ry="30" fill="#f87171" fill-opacity="0.09"/>
  <ellipse cx="380" cy="490" rx="90" ry="25" fill="#60a5fa" fill-opacity="0.07"/>
  <!-- Contour lines -->
  <path d="M 90 430 Q 200 410 310 435 Q 420 460 540 440" stroke="#C9A84C" stroke-width="0.7" stroke-opacity="0.25" fill="none"/>
  <path d="M 90 455 Q 180 445 290 460 Q 410 478 540 465" stroke="#C9A84C" stroke-width="0.7" stroke-opacity="0.18" fill="none"/>
  <path d="M 90 480 Q 220 470 350 485 Q 460 496 540 488" stroke="#C9A84C" stroke-width="0.7" stroke-opacity="0.12" fill="none"/>
  <!-- Coord label bottom right -->
  <text x="450" y="518" font-family="'Courier New', monospace" font-size="7.5" fill="#4b5563">EPSG:4326 · 36 months · 14 classes</text>

  <!-- No action label -->
  <text x="76" y="546" font-family="'Courier New', monospace" font-size="8.5" fill="#6b7280" font-style="italic">No thresholds · No recommended action · No KPIs</text>

  <!-- ── Dashboard B panel ── -->
  <rect x="624" y="300" width="516" height="280" rx="6" fill="#111111" stroke="#1D9E75" stroke-width="0.8" stroke-opacity="0.5"/>
  <rect x="624" y="300" width="516" height="280" rx="6" fill="url(#greenFade)"/>

  <!-- Panel B header -->
  <rect x="624" y="300" width="516" height="32" rx="6" fill="#0c1a14"/>
  <rect x="624" y="320" width="516" height="12" fill="#0c1a14"/>
  <circle cx="642" cy="316" r="5" fill="#1D9E75" fill-opacity="0.9"/>
  <text x="656" y="321" font-family="'Courier New', monospace" font-size="10.5" fill="#1D9E75" fill-opacity="0.9">Dashboard B — Decision View</text>

  <!-- KPI block -->
  <rect x="640" y="344" width="484" height="68" rx="5" fill="#EF9F27" fill-opacity="0.12" stroke="#EF9F27" stroke-width="0.8" stroke-opacity="0.3"/>
  <text x="882" y="375" font-family="Georgia, serif" font-size="36" font-weight="700" fill="#EF9F27" text-anchor="middle">3</text>
  <text x="882" y="398" font-family="'Courier New', monospace" font-size="9.5" fill="#EF9F27" fill-opacity="0.75" text-anchor="middle">High-Priority Zones Require Action</text>

  <!-- Focused map -->
  <rect x="640" y="422" width="484" height="80" rx="4" fill="#0e0e0e"/>
  <rect x="640" y="422" width="484" height="80" rx="4" fill="none" stroke="#2a2a2a" stroke-width="1"/>
  <!-- Three amber zones only -->
  <circle cx="730" cy="462" r="16" fill="#EF9F27" fill-opacity="0.2" stroke="#EF9F27" stroke-width="1.5" stroke-opacity="0.7"/>
  <text x="730" y="466" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#EF9F27" text-anchor="middle">1</text>
  <circle cx="882" cy="455" r="16" fill="#EF9F27" fill-opacity="0.2" stroke="#EF9F27" stroke-width="1.5" stroke-opacity="0.7"/>
  <text x="882" y="459" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#EF9F27" text-anchor="middle">2</text>
  <circle cx="1040" cy="468" r="16" fill="#EF9F27" fill-opacity="0.2" stroke="#EF9F27" stroke-width="1.5" stroke-opacity="0.7"/>
  <text x="1040" y="472" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#EF9F27" text-anchor="middle">3</text>
  <text x="648" y="494" font-family="'Courier New', monospace" font-size="7.5" fill="#4b5563" font-style="italic">Focused map — 3 amber zones only</text>

  <!-- Insight rows -->
  <text x="645" y="520" font-family="'Courier New', monospace" font-size="9" fill="#EF9F27">▲</text>
  <text x="660" y="520" font-family="'Courier New', monospace" font-size="9" fill="#d1d5db">Zone 2 risk elevated 18% since last quarter</text>
  <text x="645" y="537" font-family="'Courier New', monospace" font-size="9" fill="#f87171">●</text>
  <text x="660" y="537" font-family="'Courier New', monospace" font-size="9" fill="#d1d5db">Zones 1 &amp; 3 exceed action threshold</text>

  <!-- CTA button -->
  <rect x="845" y="508" width="230" height="30" rx="4" fill="#1D9E75" fill-opacity="0.25" stroke="#1D9E75" stroke-width="0.8" stroke-opacity="0.5"/>
  <text x="960" y="527" font-family="'Courier New', monospace" font-size="9" fill="#6ee7b7" text-anchor="middle">Download Zone Detail Report</text>

  <!-- Bottom attribution -->
  <text x="60" y="610" font-family="'Courier New', monospace" font-size="10" fill="#6b7280" letter-spacing="1">josepharo.me · Joseph Aro</text>
  <text x="1140" y="610" font-family="'Courier New', monospace" font-size="10" fill="#6b7280" text-anchor="end" letter-spacing="1">March 2026</text>
</svg>`

await sharp(Buffer.from(svg))
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile(outPath)

console.log('Cover image generated:', outPath)
