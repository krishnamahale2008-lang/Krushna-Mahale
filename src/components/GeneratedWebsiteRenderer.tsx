import React, { useState } from 'react';
import { GeneratedWebsite } from '../types/website';

interface RendererProps {
  site: GeneratedWebsite;
  onSelectTag?: (tag: string) => void;
}

export const GeneratedWebsiteRenderer: React.FC<RendererProps> = ({ site }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isAnnual, setIsAnnual] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const isDark = site.theme.isDark;
  const accent = site.theme.accentColor || '#8C4325';

  const fontClass =
    site.theme.fontPairing === 'serif-editorial'
      ? 'font-serif'
      : site.theme.fontPairing === 'minimal-mono'
      ? 'font-mono'
      : 'font-sans';

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim()) return;
    setContactSubmitted(true);
    showToast('Inquiry sent successfully! Thank you for reaching out.');
  };

  const filteredItems = site.showcase.items.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div
      className={`min-h-full transition-colors duration-200 ${
        isDark ? 'bg-[#0F172A] text-[#F8FAFC]' : 'bg-[#FFFFFF] text-[#0F172A]'
      }`}
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-[#1E293B] text-white text-xs font-medium rounded-lg shadow-xl border border-slate-700 flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header & Navigation */}
      <nav
        className={`sticky top-0 z-30 border-b backdrop-blur-md transition-colors ${
          isDark
            ? 'bg-[#0F172A]/90 border-slate-800'
            : 'bg-white/90 border-slate-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className={`text-xl font-bold tracking-tight ${fontClass}`}
              style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
            >
              {site.siteName}
            </span>
            <span
              className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${accent}15`,
                color: accent,
              }}
            >
              {site.category}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-medium">
            {site.navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={`transition-colors hover:opacity-80 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('contact-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-4 py-2 text-xs font-semibold rounded-lg text-white shadow-xs transition-opacity hover:opacity-95 cursor-pointer"
            style={{ backgroundColor: accent }}
          >
            {site.hero.primaryCta}
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-inherit">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            {site.hero.badge && (
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border"
                style={{
                  color: accent,
                  borderColor: `${accent}40`,
                  backgroundColor: `${accent}10`,
                }}
              >
                <span>◆</span>
                <span>{site.hero.badge}</span>
              </span>
            )}

            <h1
              className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${fontClass}`}
            >
              {site.hero.headline}
            </h1>

            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {site.hero.subheadline}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById('showcase-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-white rounded-lg shadow-sm transition-transform hover:-translate-y-0.5 cursor-pointer"
                style={{ backgroundColor: accent }}
              >
                {site.hero.primaryCta}
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('contact-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-5 py-3 text-xs sm:text-sm font-semibold rounded-lg border transition-colors cursor-pointer ${
                  isDark
                    ? 'border-slate-700 text-slate-200 hover:bg-slate-800'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {site.hero.secondaryCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About & Metric Proof Section */}
      <section className="py-14 sm:py-20 border-b border-inherit">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: accent }}
              >
                About Our Work
              </span>
              <h2 className={`text-2xl sm:text-4xl font-bold tracking-tight ${fontClass}`}>
                {site.about.title}
              </h2>
              <p
                className={`text-base sm:text-lg font-medium ${
                  isDark ? 'text-slate-200' : 'text-slate-700'
                }`}
              >
                {site.about.lead}
              </p>
              {site.about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {site.about.highlights.map((h, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-xl border ${
                    isDark
                      ? 'bg-slate-900/60 border-slate-800'
                      : 'bg-slate-50 border-slate-200/80'
                  }`}
                >
                  <div
                    className="text-2xl sm:text-3xl font-extrabold"
                    style={{ color: accent }}
                  >
                    {h.value}
                  </div>
                  <div
                    className={`mt-1 text-xs font-medium uppercase tracking-wider ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section className="py-14 sm:py-20 border-b border-inherit">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span
              className="text-xs uppercase tracking-widest font-semibold"
              style={{ color: accent }}
            >
              Why Choose Us
            </span>
            <h2 className={`mt-2 text-2xl sm:text-4xl font-bold tracking-tight ${fontClass}`}>
              Engineered with Distinction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {site.features.map((feat, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border flex flex-col justify-between transition-transform hover:-translate-y-1 ${
                  isDark
                    ? 'bg-slate-900/40 border-slate-800'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold mb-4"
                    style={{
                      backgroundColor: `${accent}18`,
                      color: accent,
                    }}
                  >
                    0{i + 1}
                  </div>
                  <h3 className={`text-base font-bold mb-2 ${fontClass}`}>
                    {feat.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Showcase / Portfolio / Menu Section */}
      <section id="showcase-section" className="py-14 sm:py-20 border-b border-inherit">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: accent }}
              >
                Collection
              </span>
              <h2 className={`mt-1 text-2xl sm:text-4xl font-bold tracking-tight ${fontClass}`}>
                {site.showcase.title}
              </h2>
              <p
                className={`mt-1 text-xs sm:text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {site.showcase.subtitle}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-slate-100 dark:bg-slate-800">
              {site.showcase.filterTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    activeFilter === tag
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Showcase Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-xl border overflow-hidden p-6 flex flex-col justify-between hover:shadow-md transition-all ${
                  isDark
                    ? 'bg-slate-900/40 border-slate-800'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span
                      className="font-semibold uppercase tracking-wider"
                      style={{ color: accent }}
                    >
                      {item.category}
                    </span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-slate-800 font-medium">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${fontClass}`}>
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {item.priceOrDate && (
                  <div className="mt-5 pt-3 border-t border-inherit flex items-center justify-between text-xs font-semibold">
                    <span>{item.priceOrDate}</span>
                    <button
                      onClick={() => showToast(`Selected "${item.title}"`)}
                      className="text-xs hover:underline cursor-pointer"
                      style={{ color: accent }}
                    >
                      View Details →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing Section (If provided) */}
      {site.pricing && site.pricing.plans.length > 0 && (
        <section className="py-14 sm:py-20 border-b border-inherit">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: accent }}
              >
                Plans &amp; Investment
              </span>
              <h2 className={`mt-2 text-2xl sm:text-4xl font-bold tracking-tight ${fontClass}`}>
                {site.pricing.title}
              </h2>
              <p
                className={`mt-2 text-xs sm:text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {site.pricing.subtitle}
              </p>

              {/* Annual / Monthly toggle */}
              <div className="mt-6 inline-flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    !isAnnual
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    isAnnual
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Annual (20% off)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {site.pricing.plans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl p-8 border flex flex-col justify-between relative ${
                    plan.isPopular
                      ? 'ring-2 shadow-lg'
                      : isDark
                      ? 'bg-slate-900/40 border-slate-800'
                      : 'bg-white border-slate-200'
                  }`}
                  style={{
                    borderColor: plan.isPopular ? accent : undefined,
                  }}
                >
                  {plan.isPopular && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                      style={{ backgroundColor: accent }}
                    >
                      Most Popular
                    </span>
                  )}

                  <div>
                    <h3 className={`text-lg font-bold mb-1 ${fontClass}`}>
                      {plan.name}
                    </h3>
                    <p
                      className={`text-xs mb-4 ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-3xl sm:text-4xl font-extrabold">
                        {isAnnual && plan.price.startsWith('$') && !plan.price.includes('0')
                          ? `$${Math.round(parseInt(plan.price.replace('$', '')) * 0.8)}`
                          : plan.price}
                      </span>
                      <span
                        className={`text-xs ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        {plan.period}
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-xs">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <span style={{ color: accent }}>✓</span>
                          <span
                            className={isDark ? 'text-slate-300' : 'text-slate-600'}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => showToast(`Selected "${plan.name}" plan`)}
                    className="mt-8 w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white shadow-xs transition-opacity hover:opacity-90 cursor-pointer"
                    style={{ backgroundColor: accent }}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Testimonials Section */}
      {site.testimonials.length > 0 && (
        <section className="py-14 sm:py-20 border-b border-inherit">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: accent }}
              >
                Client Perspectives
              </span>
              <h2 className={`mt-2 text-2xl sm:text-4xl font-bold tracking-tight ${fontClass}`}>
                Trusted by Discerning People
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {site.testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={`p-7 rounded-xl border ${
                    isDark
                      ? 'bg-slate-900/40 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <p
                    className={`text-base sm:text-lg italic leading-relaxed mb-6 font-serif ${
                      isDark ? 'text-slate-200' : 'text-slate-700'
                    }`}
                  >
                    “{t.quote}”
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: accent }}
                    >
                      {t.avatarInitials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">{t.name}</h4>
                      <p
                        className={`text-xs ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. FAQ Accordion Section */}
      {site.faq.length > 0 && (
        <section className="py-14 sm:py-20 border-b border-inherit">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: accent }}
              >
                Clarity &amp; Answers
              </span>
              <h2 className={`mt-2 text-2xl sm:text-3xl font-bold tracking-tight ${fontClass}`}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {site.faq.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-xl border overflow-hidden transition-colors ${
                      isDark
                        ? 'bg-slate-900/40 border-slate-800'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold transition-colors cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <span
                        className="text-lg font-bold ml-4"
                        style={{ color: accent }}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        className={`px-5 pb-5 pt-0 text-xs sm:text-sm leading-relaxed border-t border-inherit ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        <p className="pt-3">{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 9. Contact & Inquiries Section */}
      <section id="contact-section" className="py-14 sm:py-20 border-b border-inherit">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <span
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: accent }}
              >
                Reach Out
              </span>
              <h2 className={`text-2xl sm:text-4xl font-bold tracking-tight ${fontClass}`}>
                {site.contact.title}
              </h2>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {site.contact.subtitle}
              </p>

              <div
                className={`mt-6 p-5 rounded-xl border space-y-2 text-xs sm:text-sm ${
                  isDark
                    ? 'bg-slate-900/40 border-slate-800'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <strong>Email: </strong>
                  <span style={{ color: accent }}>{site.contact.email}</span>
                </div>
                <div>
                  <strong>Location: </strong>
                  <span>{site.contact.location}</span>
                </div>
                <div>
                  <strong>Availability: </strong>
                  <span>{site.contact.hours}</span>
                </div>
              </div>
            </div>

            {/* Interactive Working Form */}
            <div
              className={`lg:col-span-7 p-6 sm:p-8 rounded-xl border ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800'
                  : 'bg-white border-slate-200'
              }`}
            >
              {contactSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div
                    className="w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold text-lg text-white"
                    style={{ backgroundColor: accent }}
                  >
                    ✓
                  </div>
                  <h3 className={`text-xl font-bold ${fontClass}`}>
                    Message Received
                  </h3>
                  <p
                    className={`text-xs sm:text-sm ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    Thank you, {contactName}. We have logged your request and will follow up shortly.
                  </p>
                  <button
                    onClick={() => {
                      setContactSubmitted(false);
                      setContactName('');
                      setContactEmail('');
                      setContactMsg('');
                    }}
                    className="mt-2 text-xs font-semibold hover:underline"
                    style={{ color: accent }}
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Maya Lin"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border focus:outline-none focus:ring-2 ${
                        isDark
                          ? 'bg-slate-800 border-slate-700 text-white focus:ring-blue-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="name@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border focus:outline-none focus:ring-2 ${
                        isDark
                          ? 'bg-slate-800 border-slate-700 text-white focus:ring-blue-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      placeholder="Tell us what you have in mind..."
                      className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border focus:outline-none focus:ring-2 resize-y ${
                        isDark
                          ? 'bg-slate-800 border-slate-700 text-white focus:ring-blue-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-slate-400'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-white shadow-xs cursor-pointer hover:opacity-95"
                    style={{ backgroundColor: accent }}
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer
        className={`py-12 border-t ${
          isDark
            ? 'bg-[#0B1120] border-slate-800 text-slate-400'
            : 'bg-slate-50 border-slate-200 text-slate-500'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <span
              className={`font-bold text-sm mr-2 ${fontClass}`}
              style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
            >
              {site.siteName}
            </span>
            <span>— {site.footer.tagline}</span>
          </div>

          <p>{site.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};
