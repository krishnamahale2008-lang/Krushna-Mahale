import { GeneratedWebsite, WebsiteTheme } from '../types/website';

export function synthesizeWebsiteFromPrompt(
  prompt: string,
  existing?: GeneratedWebsite,
  refinement?: string
): GeneratedWebsite {
  const p = (refinement ? `${prompt} ${refinement}` : prompt).toLowerCase();

  // Color & Vibe selection based on prompt
  let theme: WebsiteTheme = {
    accentColor: '#8C4325',
    accentName: 'Terracotta',
    fontPairing: 'modern-sans',
    vibe: 'Modern & Warm',
    isDark: false,
  };

  if (p.includes('dark') || p.includes('cyber') || p.includes('neon') || p.includes('tech') || p.includes('saas') || p.includes('developer')) {
    theme = {
      accentColor: '#2563EB',
      accentName: 'Cobalt Blue',
      fontPairing: 'modern-sans',
      vibe: 'High-Tech Precision',
      isDark: p.includes('dark'),
    };
  } else if (p.includes('eco') || p.includes('green') || p.includes('plant') || p.includes('botanical') || p.includes('organic') || p.includes('wellness') || p.includes('yoga')) {
    theme = {
      accentColor: '#059669',
      accentName: 'Emerald Green',
      fontPairing: 'serif-editorial',
      vibe: 'Organic Botanical',
      isDark: false,
    };
  } else if (p.includes('coffee') || p.includes('bakery') || p.includes('cafe') || p.includes('bread') || p.includes('food') || p.includes('restaurant')) {
    theme = {
      accentColor: '#B45309',
      accentName: 'Warm Amber',
      fontPairing: 'serif-editorial',
      vibe: 'Artisanal Warmth',
      isDark: false,
    };
  } else if (p.includes('photo') || p.includes('art') || p.includes('portfolio') || p.includes('architect') || p.includes('design') || p.includes('luxury')) {
    theme = {
      accentColor: '#1C1917',
      accentName: 'Monochrome Slate',
      fontPairing: 'serif-editorial',
      vibe: 'Minimalist Editorial',
      isDark: false,
    };
  } else if (p.includes('dental') || p.includes('clinic') || p.includes('health') || p.includes('doctor') || p.includes('hospital')) {
    theme = {
      accentColor: '#0D9488',
      accentName: 'Teal Medical',
      fontPairing: 'modern-sans',
      vibe: 'Clean Clinical Calm',
      isDark: false,
    };
  }

  // Preserve existing theme modifications if refining
  if (existing && refinement) {
    if (refinement.toLowerCase().includes('dark')) theme.isDark = true;
    if (refinement.toLowerCase().includes('light')) theme.isDark = false;
  }

  // Template 1: Bakery / Cafe / Food
  if (p.includes('coffee') || p.includes('bakery') || p.includes('cafe') || p.includes('food') || p.includes('restaurant')) {
    return {
      id: String(Date.now()),
      prompt,
      siteName: 'Nordic Hearth Bakery',
      tagline: 'Slow Fermentation & Heritage Grain Roasts',
      category: 'Artisanal Cafe & Bakery',
      theme,
      navLinks: ['Menu', 'Our Story', 'Bake Schedule', 'FAQ', 'Contact'],
      hero: {
        badge: 'Crafted with Ancient Grains',
        headline: 'Slow-Fermented Sourdough & Specialty Roasts',
        subheadline: 'Baked fresh every sunrise using single-origin stoneground flours and open-flame hearth traditions.',
        primaryCta: 'View Daily Bake Menu',
        secondaryCta: 'Reserve Morning Table',
        imageKeyword: 'artisan bread and hot coffee',
        imageSubject: 'Fresh sourdough loaf sliced open beside steaming porcelain cappuccino cup',
      },
      about: {
        title: 'Baking as a Patience Discipline',
        lead: 'We believe good bread cannot be rushed by industrial timetables.',
        paragraphs: [
          'Founded in 2022, Nordic Hearth started as a tiny micro-bakery operating out of a hand-built brick oven. Today, we work directly with heritage organic wheat mills across regional valleys.',
          'Every loaf undergoes a strict 36-hour wild yeast cold fermentation, yielding a deep, caramelized crust and an airy, digestible crumb.'
        ],
        highlights: [
          { label: 'Fermentation Time', value: '36 Hours' },
          { label: 'Local Flour Sourced', value: '100% Organic' },
          { label: 'Daily Loaves Baked', value: '180 Only' },
        ],
      },
      features: [
        { title: 'Wild Levain Culture', description: 'Cultivated from wild apple skins and refreshed twice daily for gentle natural acidity.', icon: 'spark' },
        { title: 'Direct-Trade Coffee', description: 'Single-estate washed Ethiopian and Colombian beans roasted weekly on a vintage Diedrich.', icon: 'coffee' },
        { title: 'Zero Additives', description: 'Only four pure ingredients in our foundational sourdough: organic flour, filtered well water, sea salt, and patience.', icon: 'shield' },
        { title: 'Morning Hearth Warmth', description: 'Fresh loaves emerge from our stone deck ovens at 7:00 AM and 12:30 PM sharp.', icon: 'compass' },
      ],
      showcase: {
        title: 'Morning Menu & Hearth Signatures',
        subtitle: 'Handcrafted in limited batches every morning until sold out.',
        filterTags: ['All', 'Sourdough', 'Pastries', 'Specialty Brews'],
        items: [
          { title: 'Country Rye Sourdough', category: 'Sourdough', description: 'Stoneground dark rye with toasted caraway and malted barley crust.', priceOrDate: '$8.50', badge: 'Signature Loaf' },
          { title: 'Cardamom Morning Bun', category: 'Pastries', description: 'Laminated croissant dough rolled with freshly crushed Swedish cardamom and pearl sugar.', priceOrDate: '$4.75', badge: 'Baker Favorite' },
          { title: 'Sesame Miso Baguette', category: 'Sourdough', description: 'Slow-cold proofed baguette crusted with golden and black sesame seeds.', priceOrDate: '$5.25' },
          { title: 'Pour-Over Yirgacheffe', category: 'Specialty Brews', description: 'Delicate jasmine, bergamot, and ripe peach flavor notes brewed on V60.', priceOrDate: '$5.50' },
          { title: 'Salted Honey Almond Tart', category: 'Pastries', description: 'Frangipane filling on butter crust topped with flaky Maldon sea salt.', priceOrDate: '$6.00' },
          { title: 'Oat Flat White', category: 'Specialty Brews', description: 'Double shot espresso balanced with micro-foamed organic minor figures oat milk.', priceOrDate: '$4.50' },
        ],
      },
      testimonials: [
        { quote: 'The crumb structure on their country sourdough is unmatched. I walk three miles every Saturday morning just for their cardamom bun.', name: 'Elin Lindqvist', role: 'Culinary Writer', avatarInitials: 'EL' },
        { quote: 'Authentic bakery craftsmanship. You can taste the 36-hour fermentation and the quality of their grain.', name: 'Marcus Vance', role: 'Local Chef', avatarInitials: 'MV' },
      ],
      faq: [
        { question: 'Do you offer gluten-free bread options?', answer: 'While our kitchen uses wheat flour extensively, we bake a 100% whole buckwheat and flaxseed loaf every Wednesday and Saturday.' },
        { question: 'Can I pre-order bread for weekend gatherings?', answer: 'Yes, pre-orders can be placed 48 hours in advance through our order form or in-person at the front counter.' },
        { question: 'What time do pastries usually sell out?', answer: 'Our cardamom buns and almond croissants typically sell out by 10:30 AM on weekends.' },
      ],
      contact: {
        title: 'Visit the Hearth',
        subtitle: 'Stop by for hot bread, pour-over coffee, and a quiet seat.',
        email: 'hello@nordichearthbakery.com',
        location: '42 Millhouse Way, Old Town Quarter',
        hours: 'Tuesday – Sunday: 7:00 AM – 3:00 PM (Closed Mondays)',
      },
      footer: {
        copyright: '© 2026 Nordic Hearth Bakery. All rights reserved.',
        tagline: 'Bread that honors time, earth, and community.',
      },
    };
  }

  // Template 2: Tech SaaS / Cloud / AI / Analytics
  if (p.includes('saas') || p.includes('tech') || p.includes('cloud') || p.includes('analytics') || p.includes('software') || p.includes('platform')) {
    return {
      id: String(Date.now()),
      prompt,
      siteName: 'Vektor Data',
      tagline: 'Real-Time Edge Telemetry & Neural Pipelines',
      category: 'Developer Platform & Cloud SaaS',
      theme,
      navLinks: ['Platform', 'Features', 'Architecture', 'Pricing', 'Docs'],
      hero: {
        badge: 'v2.4 Distributed Engine Live',
        headline: 'Ship Real-Time Data Pipelines Without the Cluster Overhead',
        subheadline: 'Zero-config stream ingestion, distributed edge transformations, and millisecond analytical queries built for modern engineering teams.',
        primaryCta: 'Start Free Sandbox',
        secondaryCta: 'Explore Documentation',
        imageKeyword: 'cloud infrastructure and sleek dashboard',
        imageSubject: 'Modern dark telemetry dashboard with streaming data visualizations',
      },
      about: {
        title: 'Engineered for Sub-10ms Latency',
        lead: 'Eliminating the complexity of maintaining Kafka clusters and Redis caches.',
        paragraphs: [
          'Vektor was founded by former distributed systems engineers who spent years wrestling with fragile data glue code and unpredictable cloud egress bills.',
          'We unified stream ingestion, time-series aggregation, and serverless compute into a single global edge runtime deployed across 280 edge nodes.'
        ],
        highlights: [
          { label: 'Global Edge PoPs', value: '280+' },
          { label: 'P99 Query Latency', value: '< 8.4ms' },
          { label: 'Uptime SLA', value: '99.995%' },
        ],
      },
      features: [
        { title: 'Zero-Copy Ingestion', description: 'Native WebSocket, gRPC, and HTTP/3 ingest endpoints with automatic backpressure management.', icon: 'zap' },
        { title: 'End-to-End Cryptography', description: 'Hardware security module (HSM) key isolation with automated field-level encryption.', icon: 'shield' },
        { title: 'Edge WASM Transforms', description: 'Run lightweight Rust and TypeScript transformation functions directly at the ingress edge.', icon: 'spark' },
        { title: 'Auto-Scaling Storage', description: 'Tiered object storage that moves cold partitions to low-cost archive without query downtime.', icon: 'compass' },
      ],
      showcase: {
        title: 'Core Architecture Capabilities',
        subtitle: 'Everything required to power mission-critical telemetry.',
        filterTags: ['All', 'Ingestion', 'Transforms', 'Security'],
        items: [
          { title: 'Stream Router', category: 'Ingestion', description: 'High-throughput protocol demuxing capable of handling 2M events/sec per node.', badge: 'Core' },
          { title: 'Stateful Windows', category: 'Transforms', description: 'Sliding and tumbling window aggregates evaluated with millisecond fidelity.', badge: 'Telemetry' },
          { title: 'Audit Trail Vault', category: 'Security', description: 'Immutable write-once cryptographic ledger for compliance and forensic audits.', badge: 'SOC 2' },
          { title: 'SQL-over-Streams', category: 'Ingestion', description: 'Query active in-flight streams using standard ANSI SQL without pre-aggregation.' },
        ],
      },
      pricing: {
        title: 'Transparent, Predictable Pricing',
        subtitle: 'No surprise egress spikes or per-seat user taxes.',
        plans: [
          {
            name: 'Developer Sandbox',
            price: '$0',
            period: '/ month',
            description: 'For personal projects, hobby pipelines, and prototyping.',
            features: ['10M monthly events', 'Up to 5 edge transforms', '7 days data retention', 'Community Slack support'],
            cta: 'Create Free Account',
          },
          {
            name: 'Production Scale',
            price: '$129',
            period: '/ month',
            description: 'For fast-growing engineering teams requiring production SLAs.',
            isPopular: true,
            features: ['250M monthly events', 'Unlimited edge transforms', '90 days retention', 'Sub-10ms global routing', 'Priority 24/7 Slack & PagerDuty'],
            cta: 'Start 14-Day Trial',
          },
          {
            name: 'Enterprise Dedicated',
            price: '$649',
            period: '/ month',
            description: 'Dedicated clusters, custom VPC peering, and custom SLAs.',
            features: ['Multi-billion event scale', 'BYO-Cloud (AWS, GCP, Azure)', 'Custom data residency compliance', 'Dedicated solutions architect', '99.999% SLA guarantee'],
            cta: 'Speak with Solutions Team',
          },
        ],
      },
      testimonials: [
        { quote: 'We slashed our data infrastructure costs by 64% while dropping our analytics ingest latency from 4 seconds to under 20 milliseconds.', name: 'David Chen', role: 'VP of Platform Engineering', avatarInitials: 'DC' },
        { quote: 'The WASM transform model is genuinely brilliant. We deploy edge data filters in seconds using standard TypeScript.', name: 'Sarah Jenkins', role: 'Lead DevOps Architect', avatarInitials: 'SJ' },
      ],
      faq: [
        { question: 'How is data residency handled for GDPR compliance?', answer: 'You can pin pipeline partitions to specific geographic regions (e.g., EU-only or US-only) with a single configuration flag.' },
        { question: 'Can we connect directly to PostgreSQL or BigQuery?', answer: 'Yes, Vektor includes native zero-overhead sync connectors to PostgreSQL, Snowflake, ClickHouse, and BigQuery.' },
        { question: 'Does Vektor support self-hosted air-gapped clusters?', answer: 'Our Enterprise plan provides Kubernetes operator distributions that run completely disconnected inside private sovereign VPCs.' },
      ],
      contact: {
        title: 'Talk to an Infrastructure Engineer',
        subtitle: 'Get answers on architecture sizing, VPC peering, and custom benchmarking.',
        email: 'engineering@vektordata.io',
        location: 'San Francisco, CA & Distributed Global Remote',
        hours: 'Support: 24/7/365 On-Call Coverage',
      },
      footer: {
        copyright: '© 2026 Vektor Data Systems, Inc. All rights reserved.',
        tagline: 'Distributed streaming primitives for resilient engineering.',
      },
    };
  }

  // Template 3: Portfolio / Creative Agency / Architecture / Photography
  if (p.includes('portfolio') || p.includes('photo') || p.includes('architect') || p.includes('design') || p.includes('art') || p.includes('studio')) {
    return {
      id: String(Date.now()),
      prompt,
      siteName: 'Atelier Kanso',
      tagline: 'Minimalist Architecture & Spatial Design',
      category: 'Design Studio & Portfolio',
      theme,
      navLinks: ['Selected Works', 'Philosophy', 'Monographs', 'Awards', 'Inquiries'],
      hero: {
        badge: 'Kyoto · Copenhagen · Basel',
        headline: 'Spaces Crafted for Silence, Light and Natural Materiality',
        subheadline: 'We design private residences, cultural pavilions, and mindful interiors that honor natural transitions of sunlight and shadow.',
        primaryCta: 'View Selected Works',
        secondaryCta: 'Studio Monograph',
        imageKeyword: 'minimalist architecture concrete and light',
        imageSubject: 'Clean architectural concrete facade with geometric shadows and tranquil courtyard tree',
      },
      about: {
        title: 'The Poetics of Essential Space',
        lead: 'Architecture should not shout; it should listen to the landscape.',
        paragraphs: [
          'Founded in 2018, Atelier Kanso operates at the intersection of Japanese joinery traditions and Nordic structural rationalism.',
          'We treat timber, raw cast concrete, weathered zinc, and lime plaster not as superficial veneers, but as enduring materials that age with grace.'
        ],
        highlights: [
          { label: 'Completed Commissions', value: '42 Works' },
          { label: 'International Citations', value: '16 Awards' },
          { label: 'Studio Years', value: '8 Years' },
        ],
      },
      features: [
        { title: 'Natural Daylight Studies', description: 'Every aperture and overhang is calculated to track solar seasonal cycles and minimize artificial glare.', icon: 'spark' },
        { title: 'Tactile Materiality', description: 'Uncoated cedar, honed river stone, and lime wash surfaces that develop rich natural patina over decades.', icon: 'shield' },
        { title: 'Passive Thermal Envelope', description: 'Triple-glazed thermal boundaries and ground-source heat exchangers engineered for carbon neutrality.', icon: 'compass' },
        { title: 'Custom Joinery Integration', description: 'Integrated built-in cabinetry and bespoke bronze hardware designed specifically for each residence.', icon: 'star' },
      ],
      showcase: {
        title: 'Selected Commissions',
        subtitle: 'A survey of residential, pavilion, and institutional spaces.',
        filterTags: ['All', 'Residential', 'Pavilions', 'Interiors'],
        items: [
          { title: 'House on Lake Biwa', category: 'Residential', description: 'A cantilevered charred cedar dwelling hovering above seasonal shoreline reeds.', priceOrDate: '2025', badge: 'Residential Award' },
          { title: 'The Forest Tea Pavilion', category: 'Pavilions', description: 'Minimalist timber frame with translucent shoji screens sited in ancient cypress woods.', priceOrDate: '2024', badge: 'Cultural' },
          { title: 'Nordic Clay Library', category: 'Interiors', description: 'Rammed earth reading alcoves and oak reading desks with acoustic felt baffles.', priceOrDate: '2024' },
          { title: 'Pavilion for Solitude', category: 'Pavilions', description: 'Black basalt stone garden structure featuring an open rain-collection aperture.', priceOrDate: '2023' },
          { title: 'Basel Courtyard Residence', category: 'Residential', description: 'Urban infill home wrapped around a private zen moss courtyard with lime-washed walls.', priceOrDate: '2023' },
          { title: 'Gallery of Quiet Objects', category: 'Interiors', description: 'Exhibition hall with diffuse skylights engineered for minimal acoustic reverberation.', priceOrDate: '2022' },
        ],
      },
      testimonials: [
        { quote: 'Living in an Atelier Kanso home transforms your relationship with morning light. Every window frames the sky like a living artwork.', name: 'Tadashi Murata', role: 'Collector & Client', avatarInitials: 'TM' },
        { quote: 'A masterclass in restraint. They prove that true luxury in modern architecture is silence, texture, and proportion.', name: 'Astrid Møller', role: 'Architectural Review', avatarInitials: 'AM' },
      ],
      faq: [
        { question: 'What is your typical project timeline from concept to completion?', answer: 'Residential commissions typically require 6 to 9 months of conceptual and technical design, followed by 12 to 18 months of careful construction.' },
        { question: 'Do you take on international commissions outside of Japan and Europe?', answer: 'Yes, we accept a selective number of international commissions annually, partnering with licensed local executive architects.' },
      ],
      contact: {
        title: 'Initiate a Conversation',
        subtitle: 'Share your site location, brief thoughts, and intended timeline.',
        email: 'inquiries@atelierkanso.com',
        location: 'Kyoto Studio: 18 Higashiyama-ku · Basel Studio: St. Alban-Vorstadt 24',
        hours: 'Monday – Friday: 9:00 AM – 6:00 PM (By appointment)',
      },
      footer: {
        copyright: '© 2026 Atelier Kanso Spatial Architects. All rights reserved.',
        tagline: 'Quiet architecture for thoughtful living.',
      },
    };
  }

  // Template 4: Modern Clinic / Health / Dental / Wellness
  if (p.includes('dental') || p.includes('clinic') || p.includes('doctor') || p.includes('health') || p.includes('wellness') || p.includes('medical')) {
    return {
      id: String(Date.now()),
      prompt,
      siteName: 'Luminary Dental & Wellness',
      tagline: 'Modern Preventative Dentistry & Facial Aesthetics',
      category: 'Healthcare & Dental Studio',
      theme,
      navLinks: ['Treatments', 'The Experience', 'Technology', 'Our Doctors', 'Appointments'],
      hero: {
        badge: 'Accepting New Patients',
        headline: 'Dentistry Reimagined Around Comfort, Precision & Calm',
        subheadline: 'Experience gentle preventative care, 3D laser imaging, and restorative aesthetics in a serene, spa-inspired atmosphere.',
        primaryCta: 'Book First Consultation',
        secondaryCta: 'Explore Treatments',
        imageKeyword: 'modern serene dental clinic room',
        imageSubject: 'Sunlit modern dental studio with ergonomic chair and botanical greenery',
      },
      about: {
        title: 'Where Clinical Rigor Meets Human Compassion',
        lead: 'We eliminated noisy waiting rooms and rushed appointments.',
        paragraphs: [
          'Founded by board-certified dental specialists, Luminary was built to replace dental anxiety with relaxed, transparent care.',
          'From ceiling-mounted calming screens and noise-canceling headphones to low-radiation 3D cone-beam scans, every detail is engineered for ease.'
        ],
        highlights: [
          { label: 'Patient Comfort Rating', value: '4.98 / 5.0' },
          { label: 'Years in Practice', value: '14 Years' },
          { label: 'Digital Accuracy', value: '0.02mm' },
        ],
      },
      features: [
        { title: 'Gentle Air-Flow Cleaning', description: 'Pain-free guided biofilm therapy using warm water and micro-fine powder instead of harsh scraping.', icon: 'spark' },
        { title: 'Same-Day Ceramic Crowns', description: 'High-definition CAD/CAM 3D milling that crafts custom porcelain crowns in a single visit.', icon: 'shield' },
        { title: 'Zero-Judgement Care', description: 'Whether it has been 6 months or 6 years since your last visit, our team greets you with empathy.', icon: 'heart' },
        { title: 'Transparent Cost Estimates', description: 'Clear itemized treatment breakdowns with insurance verification before any procedure begins.', icon: 'check' },
      ],
      showcase: {
        title: 'Our Signature Care Services',
        subtitle: 'Comprehensive oral health tailored to your individual anatomy.',
        filterTags: ['All', 'Preventative', 'Restorative', 'Aesthetics'],
        items: [
          { title: 'Comprehensive Exam & 3D Imaging', category: 'Preventative', description: 'Low-dose digital scans, periodontal charting, oral cancer screening, and gentle cleaning.', priceOrDate: '$195', badge: 'New Patient' },
          { title: 'Porcelain Veneers & Smile Design', category: 'Aesthetics', description: 'Bespoke hand-layered porcelain laminates tailored to complement your facial structure.', priceOrDate: 'Consultation', badge: 'Aesthetics' },
          { title: 'Clear Aligner Orthodontics', category: 'Aesthetics', description: 'Custom digital aligners that gently guide teeth into optimal functional alignment.', priceOrDate: 'From $2,800' },
          { title: 'Same-Day Ceramic Restoration', category: 'Restorative', description: 'Precision milled porcelain onlays and crowns matching natural enamel coloration.', priceOrDate: 'From $850' },
        ],
      },
      testimonials: [
        { quote: 'I avoided the dentist for seven years due to severe phobia. The team at Luminary completely changed that. Warm, gentle, and utterly pain-free.', name: 'Rachel Gomez', role: 'Patient since 2023', avatarInitials: 'RG' },
        { quote: 'The cleanest, most thoughtful medical practice I have ever set foot in. The 3D scan and explanation was fascinating.', name: 'Dr. Neil Harrison', role: 'Orthopedic Surgeon', avatarInitials: 'NH' },
      ],
      faq: [
        { question: 'Do you accept major dental insurance plans?', answer: 'Yes, we work directly with Delta Dental, MetLife, Cigna, Aetna, and Guardian, and handle all direct claims filing on your behalf.' },
        { question: 'What if I need emergency dental attention?', answer: 'We reserve emergency appointment blocks every single morning and afternoon for urgent tooth pain or cracked teeth.' },
      ],
      contact: {
        title: 'Schedule Your Visit',
        subtitle: 'Located centrally with complimentary private patient parking.',
        email: 'care@luminarydental.com',
        location: '720 Grandview Blvd, Suite 300',
        hours: 'Monday – Friday: 7:30 AM – 6:00 PM · Saturday: 8:00 AM – 2:00 PM',
      },
      footer: {
        copyright: '© 2026 Luminary Dental & Wellness Studios. All rights reserved.',
        tagline: 'Modern, empathetic oral healthcare for your entire life.',
      },
    };
  }

  // Default Universal Template: Dynamic Modern Brand / Business / Organization
  const formattedTitle = prompt
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 3)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ') || 'Elevate Studio';

  return {
    id: String(Date.now()),
    prompt,
    siteName: formattedTitle,
    tagline: 'Crafted with Intent, Purpose & Precision',
    category: 'Modern Business & Brand',
    theme,
    navLinks: ['Overview', 'Features', 'Showcase', 'Reviews', 'Contact'],
    hero: {
      badge: 'Built From Your Prompt',
      headline: `The Modern Platform for ${formattedTitle}`,
      subheadline: `A refined, responsive website generated specifically for "${prompt}". Engineered with clean typography, purposeful structure, and interactive components.`,
      primaryCta: 'Explore Solutions',
      secondaryCta: 'Get in Touch',
      imageKeyword: 'modern minimal workspace',
      imageSubject: 'Clean studio workspace bathed in natural daylight with modern design accents',
    },
    about: {
      title: 'Built Around Quality & Character',
      lead: 'We believe thoughtful design communicates more than words alone.',
      paragraphs: [
        `Created in response to: "${prompt}". This application demonstrates how modern design discipline pairs with intelligent content synthesis.`,
        'Every section is modular, fully accessible, and styled with strict typographic rhythm and harmonious spacing.'
      ],
      highlights: [
        { label: 'Crafted In', value: '2026' },
        { label: 'Responsive Viewports', value: '100%' },
        { label: 'Design Score', value: '99/100' },
      ],
    },
    features: [
      { title: 'Tailored to Your Request', description: 'Structured around the specific domain, audience, and intent captured in your input prompt.', icon: 'spark' },
      { title: 'Responsive By Default', description: 'Flawlessly optimized across desktop, tablet, and mobile touchscreens with zero layout shifts.', icon: 'compass' },
      { title: 'Clean Semantic Code', description: 'Built with React 19, Tailwind CSS, and accessible WCAG AA contrast standards.', icon: 'shield' },
      { title: 'Instant Code Export', description: 'Copy the full standalone HTML and React code directly to your clipboard or download it.', icon: 'star' },
    ],
    showcase: {
      title: 'Featured Collection & Works',
      subtitle: 'Curated projects, services, and highlights.',
      filterTags: ['All', 'Primary', 'Specialty', 'Archive'],
      items: [
        { title: `${formattedTitle} Signature 01`, category: 'Primary', description: 'Flagship offering engineered with meticulous attention to detail and enduring craftsmanship.', badge: 'Featured' },
        { title: `${formattedTitle} Concept 02`, category: 'Specialty', description: 'Innovative approach designed to streamline workflows and captivate your audience.', badge: 'New' },
        { title: `${formattedTitle} Project 03`, category: 'Archive', description: 'Time-tested solution delivering dependable performance and lasting value.' },
        { title: `${formattedTitle} Custom 04`, category: 'Specialty', description: 'Bespoke customization adapted specifically for discerning clients and teams.' },
      ],
    },
    testimonials: [
      { quote: 'The clarity, simplicity, and speed of this platform exceeded all our expectations. A genuinely delightful user experience.', name: 'Elena Rostova', role: 'Creative Director', avatarInitials: 'ER' },
      { quote: 'Clean design that lets the content breathe. Exactly what modern web applications should feel like.', name: 'Julian Hayes', role: 'Product Strategist', avatarInitials: 'JH' },
    ],
    faq: [
      { question: 'Can I edit the generated content and colors?', answer: 'Yes! Use the theme controls in the top toolbar to instantly adjust colors, switch typography, or submit follow-up prompts.' },
      { question: 'How do I export this website to my own hosting?', answer: 'Click the "Export Code" button in the upper right to copy the complete HTML + Tailwind markup or download a ready-to-deploy index.html file.' },
      { question: 'Does the website work on mobile devices?', answer: 'Yes, all generated components are 100% responsive and tested against phone, tablet, and widescreen desktop breakpoints.' },
    ],
    contact: {
      title: 'Let’s Create Together',
      subtitle: 'Reach out to discuss new initiatives, collaborations, or custom requests.',
      email: `hello@${formattedTitle.toLowerCase().replace(/\s+/g, '')}.com`,
      location: 'Metropolitan District & Global Digital Presence',
      hours: 'Monday – Friday: 9:00 AM – 5:00 PM',
    },
    footer: {
      copyright: `© 2026 ${formattedTitle}. All rights reserved.`,
      tagline: 'Designed with purpose, built with pride.',
    },
  };
}
