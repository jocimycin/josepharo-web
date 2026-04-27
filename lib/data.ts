// ============================================================
// SITE CONTENT — josepharo.me
// Single source of truth for all copy and structured data
// ============================================================

export const siteConfig = {
  name: 'Joseph Aro',
  title: 'Joseph Aro — Geospatial Intelligence. Earth Observation. Strategic Clarity.',
  description:
    'Senior geospatial and earth observation professional specialising in GIS, remote sensing, UAV mapping, hydrography, and data strategy. Based in BC, Canada and Lagos, Nigeria.',
  url: 'https://josepharo.me',
  email: 'bidex99@gmail.com',
  location: ['BC, Canada', 'Lagos, Nigeria'],
  social: {
    linkedin: 'https://www.linkedin.com/in/joseph-aro',
    twitter: '', // PLACEHOLDER — add if applicable
    github: '',  // PLACEHOLDER — add if applicable
  },
}

export const hero = {
  eyebrow: 'Joseph Aro · BC, Canada / Lagos, Nigeria · Geospatial Intelligence · Remote Sensing · Earth Observation',
  headline: 'From field data\nto executive insight —',
  subheadline: 'geospatial intelligence\nfor complex environments.',
  supporting:
    'I build applied geospatial systems that turn earth observation, hydrography, UAV field data, and spatial analytics into decisions that matter.',
  ctaPrimary: { label: 'Explore My Work', href: '/work' },
  ctaSecondary: { label: 'Read Field Notes', href: '/writing' },
}

export const credibilityStrip = [
  '10+ Years Applied Geospatial Practice',
  'Lagos State Waterways Authority',
  'Adam Smith International',
  '300+ Professionals Trained',
  'Transport Canada Licensed Pilot',
  'BC, Canada · Lagos, Nigeria',
  'Mining · Waterways · Infrastructure · Environment',
  'Remote Sensing · Hydrography · Data Strategy',
]

export const positioningSection = {
  headline: 'Geospatial expertise at the scale of complex problems.',
  body: [
    'I work across the full value chain of geospatial intelligence — data acquisition, earth observation, hydrography, systems design, analytics, and strategic delivery. The goal is not only to generate maps or models, but to produce intelligence that leaders can act on.',
    'From field operations to executive insight, I work across mining, waterways, infrastructure, and environmental systems in Canada and Nigeria — technically deep enough to run complex remote sensing workflows, strategically aware enough to frame intelligence for leadership audiences.',
  ],
  cta: { label: 'About Joseph', href: '/about' },
}

export const expertise = [
  {
    id: 'geospatial',
    icon: 'grid',
    title: 'Geospatial Intelligence',
    points: ['Enterprise GIS systems', 'Spatial analytics & data governance', 'Geospatial platform design'],
  },
  {
    id: 'remote-sensing',
    icon: 'satellite',
    title: 'Remote Sensing & Earth Observation',
    points: ['Multispectral & hyperspectral analysis', 'LiDAR & change detection', 'Mineral exploration mapping'],
  },
  {
    id: 'uav',
    icon: 'plane',
    title: 'UAV & Field Operations',
    points: ['Large-scale drone mapping', 'Photogrammetry & point clouds', 'Licensed pilot — Transport Canada / SACAA'],
  },
  {
    id: 'hydrography',
    icon: 'waves',
    title: 'Hydrography & Waterways',
    points: ['Bathymetric surveys', 'Hydrodynamic modelling', 'Navigation & waterway intelligence'],
  },
  {
    id: 'data',
    icon: 'database',
    title: 'Data Strategy & Systems',
    points: ['Data governance frameworks', 'Geospatial transformation programs', 'Analytics & visualisation'],
  },
]

export const projects = [
  {
    id: 'geospatial-coe',
    title: 'Enterprise Geospatial Capability & Data Governance',
    client: 'Enterprise Mining Operations',
    category: 'Data Strategy',
    domain: 'Mining & Exploration',
    period: '2024–Present',
    role: 'Lead, Data and Information',
    summary:
      'Applied enterprise GIS leadership, spatial data governance, and geospatial standards development within a large-scale mining and resources context. Focused on improving the quality, accessibility, and strategic utility of spatial data across a complex operational environment.',
    challenge:
      'Enterprise geospatial environments accumulate inconsistency across teams, tools, and data practices. The challenge was to establish clear standards and governance that would improve data quality and spatial capability without disrupting ongoing operations.',
    approach:
      'Assessed existing spatial data practices, developed governance standards and metadata conventions, deployed advanced aerial mapping workflows using UAV platforms with LiDAR and optical sensors, and supported the development of more consistent geospatial data structures across the organisation.',
    methods: ['ArcGIS Enterprise', 'QGIS', 'LiDAR', 'UAV Operations', 'FME', 'Data Governance', 'Remote Sensing'],
    outcomes:
      'Improved spatial data standards and governance practice across a complex operational context. Advanced aerial mapping capabilities deployed. More consistent and accessible geospatial data available to technical and operational teams.',
    reflection:
      'Geospatial governance is most effective when it is treated as an operational discipline, not a technical afterthought. Clear standards and well-structured data are prerequisites for any meaningful spatial analysis at scale.',
    featured: true,
    coverImage: '/images/project-teck-coe.jpg',
    slug: 'enterprise-geospatial-capability',
  },
  {
    id: 'mineral-exploration',
    title: 'Mineral Exploration Mapping with Multispectral & Hyperspectral Data',
    client: 'Enterprise Mining Operations',
    category: 'Remote Sensing',
    domain: 'Mining & Exploration',
    period: '2024–Present',
    role: 'Lead, Data and Information',
    summary:
      'Application of multispectral and hyperspectral remote sensing techniques for mineral exploration in complex geological environments. Covers spectral analysis, alteration mineralogy interpretation, and the integration of earth observation data into exploration workflows.',
    challenge:
      'Exploration contexts require the ability to extract actionable signals from large, multi-source datasets while retaining geological credibility. Teams relied on conventional survey methods without leveraging spectral data from modern remote sensing platforms.',
    approach:
      'Designed and implemented workflows for processing multispectral and hyperspectral imagery, integrating spectral analysis and alteration mapping into the exploration intelligence pipeline.',
    methods: ['Hyperspectral Analysis', 'Multispectral Remote Sensing', 'Alteration Mapping', 'Google Earth Engine', 'Python', 'ArcGIS'],
    outcomes:
      'Improved interpretation pathways for exploration targeting and spatial understanding. Established a repeatable spectral analysis workflow for mineral occurrence analysis, advancing long-term exploration intelligence capabilities.',
    reflection:
      'Remote sensing delivers the most value when spectral workflows are tightly tied to exploration questions, not treated as isolated image exercises. The intersection of spectral data science and operational mining intelligence is a long-term competitive advantage.',
    featured: true,
    coverImage: '/images/project-lidar-bridge.png',
    slug: 'mineral-exploration-mapping',
  },
  {
    id: 'lagos-lagoon',
    title: 'Lagos Lagoon Hydrographic Intelligence & Geospatial Portal',
    client: 'Lagos State Waterways Authority (LASWA)',
    category: 'Hydrography',
    domain: 'Waterways & Infrastructure',
    period: '2018–2022',
    role: 'Project Manager / GIS Specialist',
    summary:
      'Supported the development of hydrographic and geospatial intelligence for Lagos waterways through survey integration, spatial analysis, and portal-oriented thinking — building a clearer spatial foundation for planning and operational decision-making across West Africa\'s most complex urban waterway system.',
    challenge:
      'Waterways decisions depend on fragmented physical, operational, and navigational information. Lagos Lagoon lacked current, authoritative bathymetric data and an integrated spatial intelligence system, limiting planning, safety, and investment decisions.',
    approach:
      'Conducted multi-season bathymetric surveys of the Lagos Lagoon system, performed hydrodynamic analysis of tidal and current patterns, delivered jetty viability assessments, and led the design of a geospatial information portal consolidating waterways data for operational use.',
    methods: ['Bathymetric Survey', 'Hydrodynamic Modelling', 'Waterway Route Intelligence', 'GIS Portal Development', 'ArcGIS', 'QGIS', 'System Dynamics'],
    outcomes:
      'A stronger geospatial basis for understanding channel conditions, routes, planning contexts, and spatial decision needs. Delivered authoritative bathymetric datasets, hydrodynamic models, and jetty viability reports. Geospatial information portal designed for LASWA operational intelligence.',
    reflection:
      'Hydrographic work becomes more valuable when it is integrated into a broader intelligence layer rather than treated as a standalone survey product. Urban waterway systems are simultaneously infrastructure corridors, ecological systems, and commercial networks.',
    featured: true,
    coverImage: '/images/field-waterways-team.jpg',
    slug: 'lagos-lagoon-hydrographic-intelligence',
  },
  {
    id: 'wide-lag',
    title: 'Waterways Investment & Environmental Development — WIDE-LAG',
    client: 'Adam Smith International / Infrastructure Development International',
    category: 'Hydrography',
    domain: 'Waterways & Infrastructure',
    period: '2022–Present',
    role: 'Hydrographic Consultant',
    summary:
      'Delivered hydrographic consultation, GIS modelling, bathymetric surveys, and hydrodynamic assessments for Lagos commercial navigation route investment and environmental development initiatives.',
    challenge:
      'Establishing viable commercial navigation routes across Lagos waterways requires detailed environmental, hydrographic, and engineering intelligence to support investment decisions.',
    approach:
      'Provided hydrographic and GIS consultancy including bathymetric survey design, hydrodynamic modelling, environmental impact assessment support, and concept engineering inputs.',
    methods: ['Bathymetric Survey', 'Hydrodynamic Assessment', 'GIS Modelling', 'Environmental Analysis', 'Navigation Planning'],
    outcomes:
      'Delivered hydrographic intelligence and environmental data supporting commercial navigation route feasibility and investment planning.',
    reflection:
      'Waterways investment requires bridging technical hydrographic science with commercial viability assessment — the intelligence must be actionable for decision-makers, not just technically complete.',
    featured: false,
    coverImage: '/images/field-on-water.jpg',
    slug: 'wide-lag-waterways-investment',
  },
  {
    id: 'drone-mapping',
    title: 'Enterprise Drone Mapping at Scale',
    client: 'OEA Consults Ltd',
    category: 'UAV & Mapping',
    domain: 'UAV & Drone Mapping',
    period: '2018–Present',
    role: 'Chief Operations Officer / Senior Geospatial Intelligence Analyst',
    summary:
      'Delivered large-scale drone mapping, land use assessment, asset enumeration, and topographic intelligence across real estate, environmental, and infrastructure projects spanning 100,000+ hectares.',
    challenge:
      'Clients across Nigeria required accurate, high-resolution spatial data at operational scale — coverage areas too large for conventional survey methods and too complex for satellite imagery alone.',
    approach:
      'Designed and executed drone mapping missions using fixed-wing and multi-rotor platforms. Processed photogrammetric data for orthophotos, DSMs, and 3D models. Delivered land use analysis, asset enumeration, and topographic intelligence from processed outputs.',
    methods: ['UAV Operations', 'Photogrammetry', 'LiDAR', 'Orthophoto Processing', 'Land Use Analysis', 'QGIS', 'ArcGIS'],
    outcomes:
      'Delivered drone mapping across 100,000+ hectares. Products used in real estate valuation, environmental impact assessment, infrastructure planning, and regulatory compliance.',
    reflection:
      'Drone mapping at scale is an operational discipline as much as a technical one — logistics, airspace coordination, and workflow design determine whether the data actually reaches the decision-maker.',
    featured: false,
    coverImage: '/images/field-drone.jpg',
    slug: 'enterprise-drone-mapping',
  },
  {
    id: 'metro-rail',
    title: 'Redline Metro-Rail Alignment Survey Support',
    client: 'First Metro Infrastructures',
    category: 'Infrastructure',
    domain: 'Infrastructure & Planning',
    period: '2020–2021',
    role: 'Geospatial Lead',
    summary:
      'Delivered aerial survey, bathymetric survey, right-of-way analysis, and design support for rail alignment planning across mixed land and water environments.',
    challenge:
      'Rail alignment planning across both terrestrial and aquatic environments required integrated geospatial and hydrographic intelligence beyond the scope of standard surveying.',
    approach:
      'Conducted aerial topographic surveys along the proposed alignment corridor, performed bathymetric surveys at water crossings, delivered right-of-way analysis, and provided GIS inputs for engineering design.',
    methods: ['Aerial Survey', 'Bathymetric Survey', 'Right-of-Way Analysis', 'GIS', 'Infrastructure Planning'],
    outcomes:
      'Delivered integrated geospatial intelligence combining land and water survey data to support engineering design and route alignment decisions.',
    reflection:
      'Infrastructure planning across land-water interfaces demands both geospatial and hydrographic expertise — a rare combination that fundamentally changes the quality of design inputs.',
    featured: false,
    coverImage: '/images/project-metro-rail.jpg',
    slug: 'redline-metro-rail-alignment',
  },
  {
    id: 'cowrie-shores',
    title: 'Cowrie Shores Bathymetry & Hydrodynamic Modelling',
    client: 'Cowrie Shores Limited',
    category: 'Hydrography',
    domain: 'Waterways & Infrastructure',
    period: '2020–2021',
    role: 'Hydrographic Consultant',
    summary:
      'Conducted bathymetric surveys and hydrodynamic modelling for major artificial island and creek development projects, advising multidisciplinary engineering and development consultants.',
    challenge:
      'Designing artificial island and creek infrastructure requires precise hydrographic baseline data and dynamic modelling of water behaviour under construction and operational conditions.',
    approach:
      'Designed and executed bathymetric surveys, processed hydrographic data, developed hydrodynamic models of tidal and current behaviour, and delivered technical advisory inputs to engineering consultants.',
    methods: ['Bathymetric Survey', 'Hydrodynamic Modelling', 'Coastal Engineering Support', 'GIS', 'Environmental Assessment'],
    outcomes:
      'Delivered bathymetric datasets and hydrodynamic models that informed the engineering design of artificial island and creek development.',
    reflection:
      'Artificial coastal infrastructure demands exceptional hydrographic precision — an error in the baseline data cascades through every downstream design decision.',
    featured: false,
    coverImage: '/images/project-cowrie.jpg',
    slug: 'cowrie-shores-bathymetry',
  },
]

export const roles = [
  {
    id: 'teck',
    title: 'Lead, Data and Information',
    org: 'Teck Resources Ltd',
    period: 'June 2024 – Present',
    location: 'Canada',
    narrative:
      'Senior geospatial and data professional leading GIS, remote sensing, and spatial data capability within a major enterprise mining context in Canada.',
  },
  {
    id: 'candrone',
    title: 'GIS Specialist',
    org: 'Candrone / DraganFly',
    period: '2023–2024',
    location: 'Canada',
    narrative:
      'Supported GIS transformation, UAV operations, wildfire mapping, and geospatial delivery including de-mining support and remote operations contexts requiring precision spatial intelligence.',
  },
  {
    id: 'oea-coo',
    title: 'Chief Operations Officer / Senior Geospatial Intelligence Analyst',
    org: 'OEA Consults Ltd',
    period: '2018–Present',
    location: 'Nigeria',
    narrative:
      'Provides leadership across geospatial intelligence, drone mapping, hydrography, planning, and environmental data solutions. Led major mapping, land use, and training initiatives across Nigeria and Canada.',
  },
  {
    id: 'wide-lag-role',
    title: 'Hydrographic Consultant',
    org: 'Adam Smith International / IDI (WIDE-LAG)',
    period: '2022–Present',
    location: 'Nigeria',
    narrative:
      'Delivers hydrographic, GIS, and waterways intelligence consulting for Lagos waterways investment and environmental development initiatives.',
  },
  {
    id: 'laswa',
    title: 'Project Manager / GIS Specialist',
    org: 'Lagos State Waterways Authority (LASWA)',
    period: '2018–2022',
    location: 'Nigeria',
    narrative:
      'Led major system dynamics, hydrographic survey, geospatial portal design, and jetty viability initiatives across the Lagos Lagoon system.',
  },
]

export const credentials = [
  { type: 'degree', title: 'M.Sc. Geography and Environmental Management', institution: 'University of Ilorin', year: '' },
  { type: 'degree', title: 'B.Tech Geography', institution: 'Federal University of Technology, Yola', year: '' },
  { type: 'certificate', title: 'Certificate in Climate Change and its Impacts', institution: 'Brown University', year: '' },
  { type: 'license', title: 'Advanced Pilot Certificate (UAV)', institution: 'Transport Canada', year: '' },
  { type: 'license', title: 'Remote Pilot License', institution: 'South African Civil Aviation Authority / UAV Industries', year: '' },
]

export const skills = {
  'GIS & Spatial': ['QGIS', 'ArcGIS', 'FME', 'Google Earth Engine', 'Spatial Analytics'],
  'Remote Sensing & UAV': ['LiDAR', 'Photogrammetry', 'UAV Operations', 'Hyperspectral Analysis', 'Change Detection'],
  'Data & Programming': ['Python', 'SQL', 'Geospatial Data Science', 'Database Management'],
  'Visualisation & BI': ['Tableau', 'Power BI', 'Reporting', 'Insight Communication'],
  'Leadership & Strategy': ['Project Management', 'Program Delivery', 'Strategic Planning', 'Policy Design', 'Capacity Building'],
}

export const stats = [
  { value: '10+', label: 'Years Applied Geospatial Practice' },
  { value: '300+', label: 'Professionals Trained' },
  { value: '5', label: 'Core Practice Domains' },
  { value: '2', label: 'Countries of Operation' },
]

export const speaking = [
  {
    id: 'esri-nigeria-2023',
    event: 'ESRI Nigeria GIS Day 2023',
    role: 'Keynote Speaker',
    topic: 'Geospatial Intelligence and the Future of Spatial Analytics in Africa',
    year: '2023',
    image: '/images/speaking-esri-2023.jpg',
  },
  {
    id: 'aag-denver',
    event: 'AAG Annual Meeting — Denver',
    role: 'Presenter',
    topic: 'Spatial Epidemiology: Geospatial Methods for Public Health Intelligence',
    year: 'PLACEHOLDER — confirm year',
    image: '/images/speaking-aag-denver.jpg',
  },
  {
    id: 'jips-kenya',
    event: 'Roundtable — JIPS, Kenya',
    role: 'Participant / Speaker',
    topic: 'Geospatial Data in Humanitarian and Development Contexts',
    year: 'PLACEHOLDER — confirm year',
    image: '/images/speaking-jips-kenya.jpg',
  },
]

export const blogCategories = [
  'Geospatial Intelligence',
  'Remote Sensing',
  'Earth Observation',
  'Hydrography & Waterways',
  'UAV & Drone Operations',
  'Data Strategy',
  'Climate & Environment',
  'Infrastructure & Planning',
  'Leadership & Operations',
  'Field Notes',
]

// Articles — publish via Sanity Studio at /studio once connected.
// These are launch-ready titles; body content to be authored by Joseph Aro.
export const articles = [
  {
    id: 'article-1',
    title: 'Why Most Geospatial Dashboards Fail Decision-Makers',
    slug: 'why-geospatial-dashboards-fail-decision-makers',
    category: 'Geospatial Intelligence',
    excerpt:
      'Beautiful maps. Cluttered panels. Metrics nobody acts on. The geospatial industry has a dashboard problem — and it is not a technology problem. It is a communication problem.',
    date: '2026-03-01',
    readTime: 8,
    featured: true,
    coverImage: '/images/articles/dashboard-fail-cover.jpg',
    body: '',
  },
  {
    id: 'article-2',
    title: 'Building Hydrographic Intelligence from Fragmented Datasets',
    slug: 'second-article',
    category: 'Hydrography & Waterways',
    excerpt:
      'Waterway systems are some of the hardest environments to model spatially. Surveys are seasonal, datasets are incomplete, and the physical environment changes faster than most collection cycles. Here is how to build intelligence that holds up anyway.',
    date: '2026-02-15',
    readTime: 5,
    featured: false,
    coverImage: '/images/blog-placeholder-1.jpg',
    body: '',
  },
  {
    id: 'article-3',
    title: 'From Field Acquisition to Executive Insight: Designing the Full Geospatial Chain',
    slug: 'field-acquisition-to-executive-insight-geospatial-chain',
    category: 'Data Strategy',
    excerpt:
      'The geospatial chain is technically mature at acquisition and analysis. It breaks at communication. Here is how to complete it — all the way to executive decision.',
    date: '2026-04-18',
    readTime: 12,
    featured: false,
    coverImage: '/images/articles/field-acquisition-cover.jpg',
    body: 'published',
  },
]

export const contactConfig = {
  headline: 'Working on Something Complex?',
  intro:
    'For consulting, research collaboration, speaking, or strategic advisory on geospatial systems, remote sensing, hydrography, or spatial decision support — get in touch.',
  closingLine:
    'If the challenge is complex, spatial, and decision-critical, that is usually where I do my best work.',
  email: 'bidex99@gmail.com',
  phone: '', // PLACEHOLDER — confirm preferred public number or set to empty
  responseTime: 'I typically respond within 48 hours.',
  inquiryTypes: ['Consulting & Technical Advisory', 'Research & Academic Collaboration', 'Speaking & Workshops', 'Geospatial Systems Design', 'Remote Sensing & Hydrographic Projects'],
}
