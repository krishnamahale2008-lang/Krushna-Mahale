export type FontPairing = 'serif-editorial' | 'modern-sans' | 'minimal-mono';

export interface WebsiteTheme {
  accentColor: string; // e.g. #8C4325, #2563EB, #059669
  accentName: string;
  fontPairing: FontPairing;
  vibe: string;
  isDark?: boolean;
}

export interface WebsiteFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ShowcaseItem {
  title: string;
  category: string;
  description: string;
  priceOrDate?: string;
  badge?: string;
  image?: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatarInitials: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  cta: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GeneratedWebsite {
  id: string;
  prompt: string;
  siteName: string;
  tagline: string;
  category: string;
  theme: WebsiteTheme;
  navLinks: string[];
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    imageKeyword: string;
    imageSubject?: string;
  };
  about: {
    title: string;
    lead: string;
    paragraphs: string[];
    highlights: { label: string; value: string }[];
  };
  features: WebsiteFeature[];
  showcase: {
    title: string;
    subtitle: string;
    filterTags: string[];
    items: ShowcaseItem[];
  };
  testimonials: TestimonialItem[];
  pricing?: {
    title: string;
    subtitle: string;
    plans: PricingPlan[];
  };
  faq: FaqItem[];
  contact: {
    title: string;
    subtitle: string;
    email: string;
    location: string;
    hours: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}
