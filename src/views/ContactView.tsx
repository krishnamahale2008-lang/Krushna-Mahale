import React, { useState } from 'react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate immediate clean response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="border-b border-[#E7E5E4] pb-8">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4325]">
          Community Submissions &amp; Feedback
        </span>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
          Contact Us
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
          Have a story, place or experience from Malegaon that should be featured? Let us know.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Contact Form */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#E7E5E4] shadow-xs">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#8C4325]/10 text-[#8C4325] flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                Thank You, {formData.name}
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed max-w-md mx-auto">
                Your message has been recorded. We appreciate you taking the time to share your perspective on Malegaon.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-5 py-2.5 text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#8C4325] rounded-md transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Kulkarni or Farhan Ansari"
                  className="w-full px-3.5 py-2.5 bg-[#FAFAF9] border border-[#D6D3D1] rounded-lg text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#8C4325]/40 focus:border-[#8C4325]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 bg-[#FAFAF9] border border-[#D6D3D1] rounded-lg text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#8C4325]/40 focus:border-[#8C4325]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1.5">
                  Your Message or Story Suggestion
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about a local artisan, a historic site, a traditional recipe, or share feedback on the city guide..."
                  className="w-full px-3.5 py-2.5 bg-[#FAFAF9] border border-[#D6D3D1] rounded-lg text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#8C4325]/40 focus:border-[#8C4325] resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#8C4325] disabled:bg-[#A8A29E] rounded-md transition-colors cursor-pointer shadow-xs"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Informational Guidance Panel */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-[#F5F4F0] p-6 rounded-xl border border-[#E7E5E4] space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#1C1917]">
              What We Welcome
            </h3>
            <ul className="text-xs text-[#57534E] space-y-2 list-disc list-inside leading-relaxed">
              <li>Verified historical accounts and archival references from Nashik/Khandesh.</li>
              <li>Spotlights on local artisans, handloom/powerloom innovators, and family workshops.</li>
              <li>Traditional recipes, culinary heritage spots, and bakery traditions.</li>
              <li>Photographs of historic monuments, riverfront vistas, and bazaar scenes.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E7E5E4] space-y-2">
            <span className="text-xs font-semibold text-[#8C4325] uppercase tracking-wider">
              Editorial Integrity
            </span>
            <p className="text-xs text-[#57534E] leading-relaxed">
              This publication is strictly non-commercial and community-focused. We prioritize factual accuracy, mutual respect, and cultural celebration above sensationalism or commercial promotional listings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
