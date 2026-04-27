import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'
import ShareButtons from '@/components/ShareButtons'
import ComprehensionGapChart from '@/components/articles/ComprehensionGapChart'
import CognitiveLoadChart from '@/components/articles/CognitiveLoadChart'
import DashboardStack from '@/components/articles/DashboardStack'
import DashboardComparison from '@/components/articles/DashboardComparison'
import { siteConfig } from '@/lib/data'

const SLUG = 'why-geospatial-dashboards-fail-decision-makers'
const articleUrl = `${siteConfig.url}/writing/${SLUG}`

export const metadata: Metadata = {
  title: 'Why Most Geospatial Dashboards Fail Decision-Makers | Joseph Aro',
  description:
    'Beautiful maps. Cluttered panels. Metrics nobody acts on. The geospatial industry has a dashboard problem — and it is not a technology problem.',
  openGraph: {
    type: 'article',
    title: 'Why Most Geospatial Dashboards Fail Decision-Makers',
    description:
      'The geospatial industry has a dashboard problem. It is not a technology problem. It is a communication problem.',
    url: articleUrl,
    authors: ['Joseph Aro'],
    publishedTime: '2026-03-01',
    images: [
      {
        url: `${siteConfig.url}/images/articles/dashboard-fail-cover.jpg`,
        width: 1200,
        height: 627,
        alt: 'Why Most Geospatial Dashboards Fail Decision-Makers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Most Geospatial Dashboards Fail Decision-Makers',
    description: 'Beautiful maps. Cluttered panels. Metrics nobody acts on.',
    images: [`${siteConfig.url}/images/articles/dashboard-fail-cover.jpg`],
  },
}

export default function GeospatialDashboardsArticle() {
  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Why Most Geospatial Dashboards Fail Decision-Makers',
            description:
              'Beautiful maps. Cluttered panels. Metrics nobody acts on. The geospatial industry has a dashboard problem — and it is not a technology problem. It is a communication problem.',
            author: { '@type': 'Person', name: 'Joseph Aro', url: siteConfig.url },
            datePublished: '2026-03-01',
            publisher: { '@type': 'Person', name: 'Joseph Aro' },
            image: `${siteConfig.url}/images/articles/dashboard-fail-cover.jpg`,
          }),
        }}
      />

      {/* ─── ARTICLE HERO ──────────────────────────────────── */}
      <section className="bg-ink pt-24 pb-0">
        <div className="relative aspect-video md:aspect-[21/6] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-ink-mid" />
            <div className="absolute inset-0 bg-gradient-to-br from-gold-DEFAULT/[0.07] via-transparent to-teal-DEFAULT/[0.07]" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(201,168,76,0.6) 22px, rgba(201,168,76,0.6) 23px)',
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, transparent, transparent 22px, rgba(45,212,191,0.6) 22px, rgba(45,212,191,0.6) 23px)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          </div>

          {/* Headline overlay — desktop */}
          <div className="absolute bottom-0 left-0 right-0 max-w-[1280px] mx-auto px-6 md:px-10 pb-12 hidden md:block">
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="badge badge-teal">Geospatial Intelligence</span>
              <span className="font-mono text-[0.7rem] text-text-muted flex items-center gap-1.5">
                <Calendar size={11} />
                March 1, 2026
              </span>
              <span className="font-mono text-[0.7rem] text-text-muted flex items-center gap-1.5">
                <Clock size={11} /> 8 min read
              </span>
            </div>
            <h1
              className="font-display font-light text-text-primary max-w-3xl leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Why Most Geospatial Dashboards Fail Decision-Makers
            </h1>
          </div>
        </div>

        {/* Mobile headline */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-8 pb-4 md:hidden">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-teal">Geospatial Intelligence</span>
            <span className="font-mono text-[0.7rem] text-text-muted">8 min read</span>
          </div>
          <h1 className="font-display font-light text-h1 text-text-primary leading-tight tracking-[-0.02em]">
            Why Most Geospatial Dashboards Fail Decision-Makers
          </h1>
        </div>
      </section>

      {/* ─── ARTICLE BODY ──────────────────────────────────── */}
      <section className="bg-ink">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 xl:gap-16">

            {/* ── Main content ── */}
            <div className="lg:col-span-3">
              {/* Author row */}
              <div className="flex items-center gap-4 mb-10 pb-8 border-b border-ink-light">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-ink-mid flex-shrink-0 ring-1 ring-gold-DEFAULT/20">
                  <Image src="/images/headshot-author.jpg" alt="Joseph Aro" fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans font-semibold text-sm text-text-primary">Joseph Aro</p>
                  <p className="font-mono text-[0.68rem] text-text-muted tracking-wide">
                    Geospatial Intelligence Specialist · OEA Consults
                  </p>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <ShareButtons
                    url={articleUrl}
                    title="Why Most Geospatial Dashboards Fail Decision-Makers"
                  />
                </div>
              </div>

              {/* Lead excerpt */}
              <p className="font-display font-light text-text-secondary text-xl md:text-2xl leading-relaxed mb-10 pb-10 border-b border-ink-light/50 italic">
                Beautiful maps. Cluttered panels. Metrics nobody acts on. The geospatial industry has a dashboard problem — and it is not a technology problem. It is a communication problem.
              </p>

              {/* Article body */}
              <div className="prose-editorial">

                <h2>The Wrong Question</h2>

                <p>Walk into any GIS team review and you will hear the same question: <em>"Does the dashboard look good?"</em></p>

                <p>That is the wrong question. The right question is: <em>"Can the person who needs to act on this data understand what to do within thirty seconds?"</em></p>

                <p>Most geospatial dashboards fail that test. Not because the technology is poor. Not because the analysts are incompetent. They fail because they were built to impress rather than to inform. They were designed with the analyst as the audience when the actual audience is a Director of Operations, a VP of Environment, or a Chief Risk Officer who has six decisions to make before noon.</p>

                <p>This is a communication failure dressed up as a technical achievement.</p>

                <h2>What Is Actually Happening</h2>

                <h3>The Complexity Trap</h3>

                <p>Geospatial systems generate enormous volumes of spatially referenced data. Satellite imagery, LiDAR point clouds, bathymetric surveys, sensor networks, GNSS tracks — all of it is technically rich and analytically meaningful. The analyst who processes this data understands its depth. They understand what NDVI values indicate about vegetation health, what a change in stream morphometry suggests about catchment behaviour, what a shift in spectral signatures reveals about lithological composition.</p>

                <p>The problem is that none of that expertise transfers automatically to a dashboard panel.</p>

                <p>When analysts build dashboards, they tend to display what they know rather than what the decision-maker needs. The result is a panel that shows seventeen layers, a colour-coded legend with twelve classifications, a tooltip that requires a domain glossary to interpret, and three different coordinate reference system labels in the footer.</p>

                <p>The decision-maker opens it, stares at it, and calls the analyst to explain it.</p>

                <p>At that point, the dashboard has failed. It has become a presentation prop rather than a decision tool.</p>

                <h3>The Terminology Problem</h3>

                <p>Geospatial is a field with a precise and necessary technical vocabulary. Bifurcation ratios, drainage density indices, spectral band combinations, morphometric parameters, spatial autocorrelation coefficients — these terms are not jargon for the sake of jargon. They carry specific analytical meaning.</p>

                <p>On a dashboard facing an executive, they are noise.</p>

                <p>A VP of Mining Operations does not need to know that the anomaly detection algorithm used a Mahalanobis distance threshold across a hyperspectral feature space. They need to know whether the identified zone represents a high-confidence mineral exploration target and what the recommended next action is.</p>

                <p>The failure to translate between technical rigour and operational clarity is one of the most consistent problems in applied geospatial work. Analysts who are excellent at processing data are often not trained to ask: <em>what does this mean for the person who has to decide?</em></p>

                <h3>The Show-Off Problem</h3>

                <p>There is a third failure mode that is rarely discussed: the dashboard that is technically impressive but informationally deficient.</p>

                <p>This is the dashboard with animated particle flows, real-time raster updates, 3D terrain extrusions, and a colour gradient that shifts from deep purple to neon yellow. It is visually striking. It demonstrates clear technical competence. And it communicates almost nothing actionable.</p>

                <p>Every visual element that exists to demonstrate capability rather than convey information is visual debt. It costs the decision-maker cognitive load and returns nothing. The dashboard looks like expertise. It functions like obstruction.</p>

                <h2>The Data: Where Decision-Making Breaks Down</h2>

                <p>The following analysis reflects patterns observed consistently across enterprise spatial programs and operational geospatial deployments.</p>

                <h3>Dashboard Comprehension vs. Decision Confidence</h3>

                <p>When decision-makers are shown a complex geospatial dashboard without analyst support, their ability to extract a clear decision prompt drops significantly. When shown a simplified, action-oriented version of the same data, decision confidence rises substantially.</p>

                <p>The gap is not about intelligence. It is about design.</p>

              </div>

              <ComprehensionGapChart />

              <div className="prose-editorial">

                <h3>Where Cognitive Load Is Being Lost</h3>

                <p>The chart below illustrates where decision-makers report losing clarity when reading a typical enterprise geospatial dashboard.</p>

              </div>

              <CognitiveLoadChart />

              <div className="prose-editorial">

                <p>These are not small issues. They compound. A decision-maker who cannot parse the legend, does not understand the terminology, has no threshold to compare against, and receives no recommended action is not going to make an informed decision from that dashboard. They are going to make a guess or ask someone else.</p>

                <h2>What a Functional Dashboard Actually Looks Like</h2>

                <p>The distinction between a dysfunctional and a functional dashboard is not cosmetic. It is structural. It begins with a fundamentally different design question.</p>

                <p><strong>Dysfunctional starting question:</strong> <em>What data do we have and how can we show it?</em><br />
                <strong>Functional starting question:</strong> <em>What decision does this person need to make, and what is the minimum information required to make it confidently?</em></p>

                <h3>The Five Principles of Actionable Geospatial Dashboards</h3>

                <p><strong>1. One Primary Message Per View</strong></p>
                <p>Every dashboard view should communicate exactly one primary message. Not five insights, not a comprehensive data summary — one message that answers a specific operational question. If the question is "where are our highest-risk erosion zones this season?", that is the only thing the view should answer. Everything else is secondary or belongs on a drill-down panel.</p>

                <p><strong>2. Context Before Precision</strong></p>
                <p>Decision-makers need context before they need precision. A reading of 0.34 NDVI means nothing without knowing the baseline and the threshold of concern. A flood risk score of 7.2 means nothing without knowing what score triggers action. Every metric on a functional dashboard carries its own context: current value, baseline, threshold, and direction of change.</p>

                <p><strong>3. Action-Oriented Language</strong></p>
                <p>Labels should describe implications, not classifications. Not "High Spectral Divergence Zone" — but "Exploration Priority: Confirm with Ground Survey." Not "Morphometric Anomaly Cluster" — but "Drainage Disruption: Review Infrastructure Routing." The spatial analysis informs the label. The label speaks to the decision-maker.</p>

                <p><strong>4. Spatial Hierarchy with Purpose</strong></p>
                <p>Maps should have a clear visual hierarchy: the most important spatial information is immediately prominent, secondary information is accessible on interaction, and technical detail is available on demand but not on display. This is not simplification — it is intelligent layering.</p>

                <p><strong>5. The Analyst's Reasoning, Not the Analyst's Data</strong></p>
                <p>The hardest skill in geospatial communication is separating what the analyst found from what the decision-maker needs to understand. The dashboard should surface the analyst's conclusion, not their workflow. Show the output of the reasoning. Reserve the data for those who need to audit it.</p>

                <h2>The Bad Dashboard vs. The Good Dashboard</h2>

                <p>The contrast below illustrates the difference between a dashboard designed for analysts and one designed for decision-makers — using the same underlying spatial dataset.</p>

              </div>

              <DashboardComparison />

              <div className="prose-editorial">

                <h2>The Conversion Principle: Dashboards That Drive Decisions</h2>

                <p>In product and sales contexts, conversion means turning a prospect into a customer. In geospatial intelligence, conversion means turning data into a decision. The principle is identical: friction reduces conversion. Clarity increases it.</p>

                <p>Every layer of complexity you add to a dashboard that does not directly serve the decision reduces the probability that the decision-maker acts on the intelligence you have worked to produce. Your analysis can be technically excellent and operationally irrelevant at the same time — if the communication layer fails.</p>

                <p>The highest-impact dashboards in operational geospatial programs share a common characteristic: a decision-maker can use them without explanation. They were designed with the same discipline a product designer brings to a consumer application — obsessive attention to what the end-user actually needs, not what the system can technically provide.</p>

                <h3>The Design Stack for Decision-Driving Dashboards</h3>

              </div>

              <DashboardStack />

              <div className="prose-editorial">

                <h3>What High-Performing Dashboards Get Right</h3>

                <p>The programmes that consistently translate geospatial intelligence into executive action share several design decisions:</p>

                <p>They build separate views for analysts and decision-makers, using the same data. The analyst view shows the full data stack. The executive view shows conclusions with provenance links.</p>

                <p>They use threshold-based colouring rather than classification-based colouring. Red does not mean "high value in this dataset." Red means "this exceeds the threshold that requires your attention today."</p>

                <p>They write every label as if the decision-maker has never seen a GIS interface. Because increasingly, they have not.</p>

                <p>They test dashboards with the actual decision-makers before they go live. Not with the GIS team. With the people who need to act.</p>

                <h2>For Analysts: What This Means Practically</h2>

                <p>If you are building geospatial dashboards, the following changes will have immediate impact on how useful your work is to the people it is designed to serve.</p>

                <p><strong>Identify the decision before you build the dashboard.</strong> What specific decision does this view need to support? Who makes that decision? What do they need to be confident? Start there, not from the data.</p>

                <p><strong>Map your audience's vocabulary.</strong> What terms does your decision-maker use to describe their operational challenges? Use those terms. Translate your technical classifications into their operational language before they appear on the dashboard.</p>

                <p><strong>Enforce a three-layer rule.</strong> No operational dashboard view should display more than three active spatial layers simultaneously. If more layers are needed, they are available on interaction — not on by default.</p>

                <p><strong>Put the threshold on every metric.</strong> Every quantitative indicator should show its current value, its baseline, and the threshold that triggers action. A number without context is a number. A number with context is intelligence.</p>

                <p><strong>Run the thirty-second test.</strong> Show your dashboard to someone unfamiliar with the data and ask them what decision they would make based on what they see. If they cannot answer clearly within thirty seconds, the dashboard needs redesign — regardless of how technically sound the underlying analysis is.</p>

                <h2>The Systemic Issue</h2>

                <p>The deeper problem is that the geospatial profession trains analysts to be excellent at spatial analysis and largely untrained in communication design. We teach CRS projections, geostatistical methods, remote sensing workflows, and network analysis. We rarely teach how to structure a decision brief, how to write operational implications, or how to design for cognitive load.</p>

                <p>This is not a criticism of the profession. It is a structural gap that has real consequences. Intelligence that cannot be acted on is not intelligence — it is data. The value of geospatial work is realised at the point of decision. If the dashboard is the final link in that chain and it breaks, the investment in everything upstream — the field surveys, the processing workflows, the analytical models — returns nothing.</p>

                <p>The industry is producing increasingly sophisticated spatial analysis capabilities. The communication layer needs to catch up.</p>

                <h2>Conclusion</h2>

                <p>If your dashboard requires another analyst to interpret it, it is not a decision tool. It is a reference system for people who already understand the data.</p>

                <p>That is a legitimate and important thing to build. But it is not what your Directors, VPs, and C-suite need from you. What they need is the intelligence — clean, contextualised, and actionable — that your analysis produces. They need to understand what is happening, why it matters, and what to do next. In thirty seconds or less.</p>

                <p>The geospatial profession has built remarkable capacity to generate spatial intelligence. The next frontier is not more sophisticated analysis. It is better translation.</p>

                <p>Build dashboards that drive decisions. Not dashboards that demonstrate expertise.</p>

                <hr />

                <h2>The Test</h2>

                <blockquote>
                  <em>If the analyst who built this went on leave tomorrow, could the decision-maker still act on it?</em>
                </blockquote>

                <p>If the answer is no, you have more work to do.</p>

                <hr />

                <p className="text-sm text-text-muted leading-relaxed">
                  <em>Joseph Aro has over a decade of applied geospatial practice across mining, waterways, infrastructure, and environmental systems in Canada and Nigeria. He is licensed by Transport Canada as a UAV pilot and leads OEA Consults, a geospatial and drone mapping firm based in Lagos.</em>
                </p>

              </div>

              {/* Subscribe CTA */}
              <div className="my-14 p-8 md:p-10 bg-ink-mid border border-ink-light rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-20 h-[2px] bg-gold-DEFAULT" />
                <p className="font-display font-light text-xl md:text-2xl text-text-primary mb-3">Enjoyed this?</p>
                <p className="text-text-secondary text-sm mb-6 max-w-sm">
                  Get future essays and field notes delivered direct. No spam.
                </p>
                <NewsletterForm />
              </div>

              {/* Bottom share */}
              <div className="pt-8 border-t border-ink-light">
                <p className="font-mono text-[0.68rem] text-text-muted tracking-[0.15em] uppercase mb-4">Share this article</p>
                <ShareButtons
                  url={articleUrl}
                  title="Why Most Geospatial Dashboards Fail Decision-Makers"
                />
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <Link
                  href="/writing"
                  className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary text-sm transition-colors duration-150 group"
                >
                  <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-150" />
                  All articles
                </Link>

                <div className="h-px bg-ink-light" />

                <div>
                  <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-3">Category</p>
                  <span className="badge badge-teal">Geospatial Intelligence</span>
                </div>

                <div>
                  <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-3">Tags</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['GIS', 'Data Visualization', 'Dashboard Design', 'Decision Support', 'Spatial Analytics'].map((tag) => (
                      <span key={tag} className="badge badge-default text-xs">{tag}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-2">Reading time</p>
                  <p className="font-mono text-sm text-text-secondary">8 min</p>
                </div>

                <div>
                  <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-2">Published</p>
                  <p className="font-mono text-[0.78rem] text-text-secondary">March 1, 2026</p>
                </div>

                <div className="h-px bg-ink-light" />

                <div>
                  <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-3">More Writing</p>
                  <Link
                    href="/writing"
                    className="text-sm text-text-secondary hover:text-gold-DEFAULT flex items-center gap-1.5 transition-colors duration-150 group"
                  >
                    Browse all articles
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
