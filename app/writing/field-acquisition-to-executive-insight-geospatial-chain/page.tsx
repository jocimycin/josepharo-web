import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'
import ShareButtons from '@/components/ShareButtons'
import GeospatialDashboardDemo from '@/components/articles/GeospatialDashboardDemo'
import FunctionalDashboardExample from '@/components/articles/FunctionalDashboardExample'
import ConversionFunnelChart from '@/components/articles/ConversionFunnelChart'
import GeospatialChainDiagram from '@/components/articles/GeospatialChainDiagram'
import { siteConfig } from '@/lib/data'

const SLUG = 'field-acquisition-to-executive-insight-geospatial-chain'
const articleUrl = `${siteConfig.url}/writing/${SLUG}`

export const metadata: Metadata = {
  title: 'From Field Acquisition to Executive Insight: Designing the Full Geospatial Chain | Joseph Aro',
  description:
    'The geospatial chain breaks at communication. A practitioner guide to designing dashboards that drive decisions, from question-first field design to executive briefing protocol.',
  openGraph: {
    type: 'article',
    title: 'From Field Acquisition to Executive Insight: Designing the Full Geospatial Chain',
    description:
      'The geospatial chain is technically mature at acquisition and analysis. It breaks at communication. Here is how to complete it, all the way to executive decision.',
    url: articleUrl,
    authors: ['Joseph Aro'],
    publishedTime: '2026-04-18',
    images: [
      {
        url: `${siteConfig.url}/images/articles/field-acquisition-cover.jpg`,
        width: 1200,
        height: 627,
        alt: 'From Field Acquisition to Executive Insight: Designing the Full Geospatial Chain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Field Acquisition to Executive Insight',
    description: 'The geospatial chain breaks at communication. Here is how to fix it.',
    images: [`${siteConfig.url}/images/articles/field-acquisition-cover.jpg`],
  },
}

export default function FieldAcquisitionArticle() {
  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'From Field Acquisition to Executive Insight: Designing the Full Geospatial Chain',
            description:
              'The geospatial chain breaks at communication. A practitioner guide to designing dashboards that drive decisions.',
            author: { '@type': 'Person', name: 'Joseph Aro', url: siteConfig.url },
            datePublished: '2026-04-18',
            publisher: { '@type': 'Person', name: 'Joseph Aro' },
            image: `${siteConfig.url}/images/articles/field-acquisition-cover.jpg`,
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

          {/* Headline overlay, desktop */}
          <div className="absolute bottom-0 left-0 right-0 max-w-[1280px] mx-auto px-6 md:px-10 pb-12 hidden md:block">
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="badge badge-teal">Data Strategy</span>
              <span className="font-mono text-[0.7rem] text-text-muted flex items-center gap-1.5">
                <Calendar size={11} />
                April 18, 2026
              </span>
              <span className="font-mono text-[0.7rem] text-text-muted flex items-center gap-1.5">
                <Clock size={11} /> 12 min read
              </span>
            </div>
            <h1
              className="font-display font-light text-text-primary max-w-3xl leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              From Field Acquisition to Executive Insight: Designing the Full Geospatial Chain
            </h1>
          </div>
        </div>

        {/* Mobile headline */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-8 pb-4 md:hidden">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-teal">Data Strategy</span>
            <span className="font-mono text-[0.7rem] text-text-muted">12 min read</span>
          </div>
          <h1 className="font-display font-light text-h1 text-text-primary leading-tight tracking-[-0.02em]">
            From Field Acquisition to Executive Insight: Designing the Full Geospatial Chain
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
                    title="From Field Acquisition to Executive Insight: Designing the Full Geospatial Chain"
                  />
                </div>
              </div>

              {/* Lead excerpt */}
              <p className="font-display font-light text-text-secondary text-xl md:text-2xl leading-relaxed mb-10 pb-10 border-b border-ink-light/50 italic">
                The geospatial chain is technically mature at acquisition and analysis. It breaks at communication. Here is how to complete it, all the way to executive decision.
              </p>

              {/* Article body */}
              <div className="prose-editorial">

                <blockquote>
                  <em>If your dashboard needs another analyst to interpret it, it is not a dashboard. It is a problem wearing a beautiful mask.</em>
                </blockquote>

                <h2>The Chain Exists. The Break is Real.</h2>

                <p>I have been in rooms where the data was right, the analysis was solid, and the map was technically flawless, and the director across the table still could not tell me what decision to make next.</p>

                <p>Not because he lacked intelligence. Not because he did not care. But because what we handed him was designed for us, not for him.</p>

                <p>This is the defining failure of geospatial work in most organisations today. We have mastered the craft of data collection. We know how to deploy KoboToolbox in the field, geo-reference survey points, run AHP-weighted multi-criteria analysis, and render outputs in ArcGIS or QGIS with layers that would make a cartographer weep with joy. We have built flood risk models using hazard indices that integrate drainage density, precipitation, slope, soil type, and population density. We have mapped building footprints across entire urban corridors to estimate population to a high degree of accuracy. We have done the work.</p>

                <p>But somewhere between the GPS point captured at 7am on a Lagos street and the moment a Commissioner signs a budget decision, the chain breaks.</p>

                <p>That break is not technical. It is communicative. And it is costing us the very outcomes our work is supposed to drive.</p>

                <h2>What We Actually Do in the Field</h2>

                <p>Let me be specific about what the geospatial chain looks like, because the executives reading this deserve to understand what they are funding, and the analysts reading this need to see where the handoff goes wrong.</p>

                <p>The chain starts in the field. A survey team, trained and equipped, deploys with smartphones loaded with ODK or KoboCollect. Every data point carries a GPS coordinate. Quality assurance protocols run across four stages: pilot testing, enumerator training, on-ground supervision, and incoming data review. This is not casual. In the Lagos slum upgrading studies I have been part of, enumerators were trained on skip patterns, regex constraints on phone numbers and addresses, and on-the-spot validity checks. The data integrity at this stage is high.</p>

                <p>From field collection, data flows into a processing environment: QGIS, ArcGIS, or a model-based pipeline. Spatial joins link survey points to administrative boundaries. Raster analysis layers elevation models over flood risk parameters. We run geometric network analysis to trace drainage flow. We model. We validate. We iterate.</p>

                <p>The output is technically sophisticated. A flood risk map for a Lagos Local Government Area integrates six variables into a single composite score:</p>

                <pre><code>{`Flood Risk = Hazard Index × Vulnerability Index
Hazard Index = 0.13×D + 0.07×ST + 0.25×S + 0.55×P
Vulnerability Index = 0.26×PD + 0.64×LULC + 0.1×ED`}</code></pre>

                <p>Where D = drainage density, ST = soil type, S = slope, P = precipitation, PD = population density, LULC = land use land cover, ED = Euclidean distance.</p>

                <p>Every coefficient in that formula was derived from literature and weighted through Analytical Hierarchy Process. There are academic papers behind it. There are validation datasets behind it. It is rigorous.</p>

                <p>And then we put it in a dashboard with seven map layers, a 16-colour legend, a spatial statistics panel, and a sidebar of charts, and call the Commissioner in.</p>

                <h2>The Dashboard Problem Is Not a Design Problem</h2>

                <p>I want to be careful here, because the easy answer is to say &ldquo;make it prettier.&rdquo; That is wrong.</p>

                <p>The problem is not aesthetics. The problem is audience confusion at the point of design. We build dashboards to demonstrate technical competence, not to drive decisions. We include every layer because removing one feels like admitting it was unnecessary. We use every colour in the palette because the data genuinely has that many categories. We add the confidence intervals and the p-values because our academic training taught us that omitting them is dishonest.</p>

                <p>None of this is wrong in intent. All of it is wrong in effect when the audience is an executive whose cognitive budget in a meeting is already stretched, whose mandate is to allocate resources, approve interventions, or redirect programmes, not to interpret spatial autocorrelation.</p>

                <p>In Nigeria, I have sat in rooms with LAMATA executives, with State Ministry of Works directors, with FERMA representatives. Smart, accomplished people. In every case, when we deployed a technically rich dashboard without a decision framework, the meeting drifted. Questions came back to us: &ldquo;What does this mean for our priority?&rdquo; &ldquo;Which area do we act on first?&rdquo; &ldquo;Is this telling us to stop the project or continue?&rdquo;</p>

                <p>Those are not questions that indicate the executive failed to read the dashboard. Those are questions that indicate the dashboard failed to do its job.</p>

                <h2>The Two Dashboard Archetypes</h2>

                <h3>The Beautiful But Broken Dashboard</h3>

                <p>This is what most geospatial teams produce. Characterised by:</p>

                <ul>
                  <li>Multiple simultaneous map layers with opacity blending</li>
                  <li>A colour ramp that spans the full spectrum from red to blue, with intermediate values that are genuinely ambiguous to the human eye</li>
                  <li>Statistics panels displaying outputs like Moran&rsquo;s I, NDVI values, or kernel density estimates without contextual interpretation</li>
                  <li>Charts that show the distribution of every variable rather than the relationship between the variables that matters for the decision</li>
                  <li>A title that describes what the data is, not what the data means</li>
                </ul>

                <p>It looks professional. It is informationally dense. It communicates nothing actionable.</p>

                <p>I have produced dashboards exactly like this. The pivot map of the Ogun-Oshun River Basin water resources study, the flood vulnerability outputs for Lagos flood events, the drainage sedimentation models, all technically valid, all requiring a GIS analyst in the room to walk a decision-maker through what they were looking at.</p>

                <p>That is not a dashboard. That is a presentation dependency.</p>

                <h3>The Functional Decision Dashboard</h3>

                <p>A functional executive dashboard answers exactly one question per view. Not one category of questions. One question.</p>

                <p>For a flood risk intervention programme, the question might be: &ldquo;Which three LGAs require immediate infrastructure prioritisation based on combined hazard and vulnerability scores?&rdquo;</p>

                <p>Everything on that dashboard serves that question. The map shows those three LGAs, highlighted, with the others greyed. A single ranked table below the map shows the score, the key driver variable, and the recommended intervention type. A traffic-light indicator tells the executive whether the situation in each area is stable, deteriorating, or critical. The chart, if there is one, shows one comparison, last season versus this season, not seven years of trend data.</p>

                <p>The number of clicks to reach a decision: zero. The number of additional analysts required: zero. The time from opening the dashboard to knowing what to recommend: under ninety seconds.</p>

                <p>That is the standard. Not beautiful. Decisive.</p>

              </div>

              <GeospatialDashboardDemo />

              <div className="prose-editorial">

                <h2>What a Functional Geospatial Dashboard Looks Like</h2>

                <p>The anatomy of a functional decision dashboard has five elements, in strict hierarchy:</p>

                <p><strong>1. The Decision Header</strong><br />
                A plain-language statement of the question this dashboard is designed to answer. Not a title. Not a project name. A question. Example: &ldquo;Where should we deploy the next phase of drainage intervention?&rdquo;</p>

                <p><strong>2. The Primary Signal</strong><br />
                One number, one zone, or one map, the single most important output the decision-maker needs to see first. It should be visible without scrolling, without hovering, without clicking. It should be large enough to read from across a conference table.</p>

                <p><strong>3. The Context Layer</strong><br />
                The supporting data that explains the primary signal. This is where the analyst&rsquo;s work lives, the composite scores, the ranked comparisons, the trend lines. But it is subordinate to the primary signal, not parallel to it.</p>

                <p><strong>4. The Boundary Conditions</strong><br />
                The constraints the decision-maker already knows about, budget limits, political boundaries, institutional mandates, surfaced explicitly so the dashboard speaks the language of the executive&rsquo;s actual decision environment.</p>

                <p><strong>5. The Next Action</strong><br />
                A specific recommended action, stated in operational language. &ldquo;Prioritise drainage desiltation in Oshodi-Isolo and Alimosho LGAs before the next rainy season.&rdquo; Not &ldquo;data suggests elevated risk in western LGAs.&rdquo; An action.</p>

              </div>

              <FunctionalDashboardExample />

              <div className="prose-editorial">

                <h2>The Conversion Question</h2>

                <p>Geospatial teams that want to remain relevant, especially in contexts like Nigeria where GIS adoption is still fighting for legitimacy in government and enterprise, need to understand that dashboards are not deliverables. They are conversion tools.</p>

                <p>The conversion we are after is not page views or session time. It is decision adoption. Did the executive act on what the data said? Did the Commissioner sign the intervention order? Did the planning director change the resource allocation?</p>

                <p>Every design decision in a functional dashboard should be evaluated against that conversion question. Does adding this layer increase the likelihood that the right decision gets made? Does this chart help or complicate? Does this colour choice make the signal clearer or more ambiguous?</p>

              </div>

              <ConversionFunnelChart />

              <div className="prose-editorial">

                <p>In Lagos, the government spent billions of Naira in 2008 setting up the Lagos Enterprise GIS. A decade later, that platform had not driven the planning outcomes it was built to enable. Not because the data was wrong. Because the chain from data to decision was never completed. The field acquisition happened. The analysis happened. The visualisation happened. The executive insight layer, the part that turns a map into a mandate, was missing.</p>

                <p>That layer is what we build now.</p>

                <h2>Designing the Full Chain</h2>

                <p>The full geospatial chain, designed to drive decisions, has six stages:</p>

              </div>

              <GeospatialChainDiagram />

              <div className="prose-editorial">

                <p><strong>Stage 1: Question-First Field Design</strong><br />
                Before a single GPS point is collected, the decision the data must inform should already be defined. What is the Commissioner going to be asked to approve? What does the director need to allocate? Field instruments, sampling strategies, and quality assurance protocols flow from that question, not from a data catalogue.</p>

                <p><strong>Stage 2: Analyst-Grade Processing</strong><br />
                This is where technical rigour belongs. Multi-criteria analysis. Spatial statistics. Model validation. The full technical stack. This stage is for the analyst. It should not be visible to the executive.</p>

                <p><strong>Stage 3: Insight Translation</strong><br />
                The hardest stage, and the one most teams skip. Taking the outputs of Stage 2 and translating them into the language of the decision. What does a flood risk score of 0.74 actually mean for a Commissioner? It means: this community will flood in a moderate rain event, 6,000 residents are at risk, and the infrastructure investment to reduce that risk to acceptable levels is a specific kind of intervention, in a specific sequence.</p>

                <p><strong>Stage 4: Dashboard Architecture</strong><br />
                One question. One primary signal. One next action. Everything else is context, subordinated, collapsible, available on request but not defaulted to visible.</p>

                <p><strong>Stage 5: Executive Briefing Protocol</strong><br />
                The dashboard does not replace the briefing. It replaces the confusion in the briefing. A sixty-second verbal orientation to the decision question, a pointer to the primary signal, a clear statement of the recommendation. Then the executive engages with specifics.</p>

                <p><strong>Stage 6: Decision Audit</strong><br />
                Was the action taken? Was the recommendation followed? If not, where in the chain did the conversion fail? This closes the loop and improves the next iteration.</p>

                <h2>The GIS Adoption Problem Is a Communication Problem</h2>

                <p>I have given hundreds of talks on GIS. I tore through five drafts preparing for a ministerial session years ago, and I still walked in unsure what would move the needle. The single most difficult challenge GIS adoption faces in Nigeria, and across most of the global south, is its misunderstanding by the executives who are meant to sign off on its implementation.</p>

                <p>That misunderstanding is our responsibility to address. Not theirs.</p>

                <p>We are the ones who designed the dashboards they could not read. We are the ones who put Moran&rsquo;s I in a presentation to a Cabinet-level audience. We are the ones who, when asked what GIS means, instinctively reach for &ldquo;it is like Google Maps&rdquo; because we have learned, through experience, that the technically accurate answer loses the room in forty seconds.</p>

                <p>If we want GIS to drive the decisions it is capable of driving, flood risk managed at scale, transport planned efficiently, health infrastructure located where it is needed, climate-vulnerable populations protected, we need to close the chain. All the way to the executive insight layer.</p>

                <p>The field work is already good. The analysis is already solid. The gap is the last ten metres from dashboard to decision.</p>

                <h2>Call to Action</h2>

                <p>Build dashboards that answer one question. Hire for translation, not just for analysis. Design for the Commissioner, not for the conference paper.</p>

                <p>And if your dashboard still needs another analyst standing next to it to explain what it means, you have not finished the job.</p>

                <hr />

                <p className="text-sm text-text-muted leading-relaxed">
                  <em>Joseph Aro is a Geospatial Intelligence Analyst, Climate Change Analyst, and Co-founder of OEA Consults. He has over fifteen years of experience deploying geospatial solutions across urban development, flood risk management, infrastructure planning, and climate adaptation in Nigeria and North America. He is licensed by Transport Canada as a UAV pilot.</em>
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
                  title="From Field Acquisition to Executive Insight: Designing the Full Geospatial Chain"
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
                  <span className="badge badge-teal">Data Strategy</span>
                </div>

                <div>
                  <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-3">Tags</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['GIS', 'Dashboard Design', 'Executive Intelligence', 'Location Intelligence', 'Nigeria'].map((tag) => (
                      <span key={tag} className="badge badge-default text-xs">{tag}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-2">Reading time</p>
                  <p className="font-mono text-sm text-text-secondary">12 min</p>
                </div>

                <div>
                  <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-2">Published</p>
                  <p className="font-mono text-[0.78rem] text-text-secondary">April 18, 2026</p>
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
