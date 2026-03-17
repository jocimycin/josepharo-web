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
    'I work across geospatial intelligence, remote sensing, hydrography, UAV mapping, and data strategy — solving complex environmental, infrastructure, and operational problems.',
  ctaPrimary: { label: 'Explore My Work', href: '/work' },
  ctaSecondary: { label: 'Read My Writing', href: '/writing' },
}

export const credibilityStrip = [
  '10+ Years Experience',
  'Teck Resources',
  'Lagos Waterways Authority',
  'Adam Smith International',
  '300+ Professionals Trained',
  'Transport Canada Licensed Pilot',
  'BC, Canada & Lagos, Nigeria',
  'Mining · Waterways · Infrastructure · Environment',
]

export const positioningSection = {
  headline: 'Geospatial expertise at the scale of complex problems.',
  body: [
    'Joseph Aro is a senior geospatial and data professional with over a decade of experience spanning GIS, remote sensing, UAV-enabled surveying, hydrography, environmental intelligence, and strategic project delivery. His work covers the full value chain — from field acquisition and technical operations to enterprise data architecture, spatial analytics, and executive decision support.',
    'Working across mining, waterways, infrastructure, urban development, and environmental systems in Canada and Nigeria, Joseph brings rare cross-disciplinary range: technically deep enough to run complex remote sensing workflows, commercially astute enough to frame intelligence for leadership audiences.',
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
    title: 'Geospatial Centre of Excellence & Data Transformation',
    client: 'Teck Resources',
    category: 'Data Strategy',
    domain: 'Mining & Exploration',
    period: '2024–Present',
    role: 'Lead, Data and Information',
    summary:
      'Established a geospatial centre of excellence, defining standards and best practices for GIS data governance and remote sensing workflows — driving an enterprise shift from siloed architectures to interconnected spatial intelligence systems.',
    challenge:
      'A large international mining operation with fragmented geospatial data across multiple systems, inconsistent standards, and no unified governance framework for spatial assets.',
    approach:
      'Audited existing data architecture, defined governance standards and metadata conventions, deployed advanced aerial mapping workflows using UAV platforms with LiDAR, optical, and magnetic sensors, and led the architectural transformation toward interconnected geospatial data structures.',
    methods: ['ArcGIS Enterprise', 'QGIS', 'LiDAR', 'UAV Operations', 'FME', 'Data Governance', 'Remote Sensing'],
    outcomes:
      'Established a functioning geospatial centre of excellence with documented standards adopted across the organisation. Advanced aerial mapping capabilities deployed. Fragmented spatial systems consolidated into structured, interconnected intelligence infrastructure.',
    reflection:
      'Transforming data architecture in large organisations requires equal parts technical rigour and stakeholder alignment. The governance framework was as important as the technology choices.',
    featured: true,
    coverImage: '/images/project-teck-coe.jpg', // Terrain Modelling
    slug: 'geospatial-centre-of-excellence',
  },
  {
    id: 'mineral-exploration',
    title: 'Mineral Exploration Mapping with Multispectral & Hyperspectral Data',
    client: 'Teck Resources',
    category: 'Remote Sensing',
    domain: 'Mining & Exploration',
    period: '2024–Present',
    role: 'Lead, Data and Information',
    summary:
      'Pioneered advanced mineral exploration mapping using multispectral and hyperspectral remote sensing workflows, supporting exploration intelligence and operational efficiency.',
    challenge:
      'Mineral exploration teams relied on conventional survey methods without leveraging the spectral data available from modern remote sensing platforms.',
    approach:
      'Designed and implemented workflows for processing multispectral and hyperspectral imagery, integrating spectral analysis into the exploration intelligence pipeline.',
    methods: ['Hyperspectral Analysis', 'Multispectral Remote Sensing', 'Google Earth Engine', 'Python', 'ArcGIS'],
    outcomes:
      'Established a repeatable spectral analysis workflow for mineral occurrence analysis, advancing exploration intelligence capabilities.',
    reflection:
      'The intersection of spectral data science and operational mining intelligence is a rapidly maturing space — building the internal capability to exploit it is a long-term competitive advantage.',
    featured: true,
    coverImage: '/images/project-mineral.jpg',
    slug: 'mineral-exploration-mapping',
  },
  {
    id: 'permafrost',
    title: 'Regional Permafrost Change Detection & Mineral Occurrence Analysis',
    client: 'Teck Resources',
    category: 'Remote Sensing',
    domain: 'Climate & Environment',
    period: '2024–Present',
    role: 'Lead, Data and Information',
    summary:
      'Applied remote sensing and multicluster computing to assess permafrost change across a regional study area and relate findings to mineral occurrence patterns.',
    challenge:
      'Understanding permafrost dynamics in operational and exploration areas requires large-scale time-series analysis beyond the capacity of conventional desktop GIS tools.',
    approach:
      'Designed a cloud-based multicluster computing workflow combining satellite-derived surface temperature and vegetation indices to detect permafrost change, integrated with mineral occurrence data.',
    methods: ['Google Earth Engine', 'Python', 'Time-Series Analysis', 'Remote Sensing', 'Permafrost Modelling'],
    outcomes:
      'Produced regional permafrost change maps with temporal analysis, providing environmental intelligence for operational planning and exploration.',
    reflection:
      'Climate-aware geospatial intelligence is no longer a research niche — it is operational necessity for any resource organisation working in northern or high-altitude environments.',
    featured: false,
    coverImage: '/images/project-permafrost.jpg',
    slug: 'permafrost-change-detection',
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
      'Led bathymetric surveys, hydrodynamic assessments, jetty viability studies, and the design of a geospatial information portal for Lagos waterways intelligence — one of West Africa\'s most complex urban waterway systems.',
    challenge:
      'Lagos Lagoon lacked current, authoritative bathymetric data and an integrated spatial intelligence system, limiting waterways planning, safety, and investment decisions.',
    approach:
      'Conducted multi-season bathymetric surveys of the Lagos Lagoon system, performed hydrodynamic analysis of tidal and current patterns, delivered jetty viability assessments, and led the design of a geospatial information portal consolidating waterways data.',
    methods: ['Bathymetric Survey', 'Hydrodynamic Modelling', 'ArcGIS', 'QGIS', 'GIS Portal Development', 'System Dynamics'],
    outcomes:
      'Delivered authoritative bathymetric datasets, hydrodynamic models, and jetty viability reports used in waterways planning. Designed a geospatial information portal for LASWA operational intelligence.',
    reflection:
      'Urban waterway systems are among the most complex geospatial environments to work in — they are simultaneously infrastructure corridors, ecological systems, and commercial networks.',
    featured: true,
    coverImage: '/images/project-lagos-lagoon.jpg',
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
    coverImage: '/images/project-wide-lag.jpg',
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
    coverImage: '/images/project-drone-mapping.jpg',
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
      'Leads geospatial excellence, data governance, remote sensing workflows, and digital asset management across a broad international operating context. Established a geospatial centre of excellence and is advancing the enterprise shift from siloed spatial architecture to interconnected intelligence systems.',
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
  { type: 'degree', title: 'M.Sc. Geography and Environmental Management', institution: 'PLACEHOLDER — confirm institution', year: '' },
  { type: 'degree', title: 'B.Tech Geography', institution: 'PLACEHOLDER — confirm institution', year: '' },
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
  { value: '10+', label: 'Years of Experience' },
  { value: '300+', label: 'Professionals Trained' },
  { value: '8', label: 'Major Project Domains' },
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

// PLACEHOLDER articles — replace with real posts
export const articles = [
  {
    id: 'placeholder-1',
    title: 'PLACEHOLDER — First article title required from Joseph',
    slug: 'first-article',
    category: 'Geospatial Intelligence',
    excerpt: 'PLACEHOLDER — Article excerpt required.',
    date: '2026-03-01',
    readTime: 6,
    featured: true,
    coverImage: '/images/blog-placeholder-1.jpg', // LiDAR aerial image
    body: '',
  },
  {
    id: 'placeholder-2',
    title: 'PLACEHOLDER — Second article title required from Joseph',
    slug: 'second-article',
    category: 'Hydrography & Waterways',
    excerpt: 'PLACEHOLDER — Article excerpt required.',
    date: '2026-02-15',
    readTime: 5,
    featured: false,
    coverImage: '/images/blog-placeholder-2.jpg',
    body: '',
  },
  {
    id: 'placeholder-3',
    title: 'PLACEHOLDER — Third article title required from Joseph',
    slug: 'third-article',
    category: 'Data Strategy',
    excerpt: 'PLACEHOLDER — Article excerpt required.',
    date: '2026-02-01',
    readTime: 7,
    featured: false,
    coverImage: '/images/blog-placeholder-3.jpg',
    body: '',
  },
]

export const contactConfig = {
  headline: "Let's Work Together",
  intro:
    "For consulting, research collaboration, advisory, speaking, or strategic inquiries — get in touch directly.",
  email: 'bidex99@gmail.com',
  phone: '', // PLACEHOLDER — confirm preferred public number or set to empty
  responseTime: 'I typically respond within 48 hours.',
  inquiryTypes: ['Consulting', 'Advisory', 'Research Collaboration', 'Speaking', 'Other'],
}
