import React from 'react';
import { IMAGES } from '../assets/images';
import { NavTab } from '../components/Navbar';
import { HometownStories } from '../components/HometownStories';
import { BLOGS_DATA, BlogPost } from '../data/blogsData';
import { BlogCard } from '../components/BlogCard';

interface HomeViewProps {
  onNavigate: (tab: NavTab) => void;
  onSelectBlog: (post: BlogPost) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectBlog }) => {
  // Highlight 3 featured blogs on homepage
  const featuredBlogs = BLOGS_DATA.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1C1917] text-white">
        <div className="relative h-[480px] sm:h-[580px] lg:h-[620px] w-full">
          {/* Hero Image */}
          <img
            src={IMAGES.hero}
            alt="Scenic view along the Girna River and historic Malegaon"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-70"
          />
          {/* Measured Scrim for WCAG AA readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/50 to-transparent" />

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 w-full">
              <div className="max-w-2xl space-y-4">
                <span className="text-xs uppercase tracking-widest font-medium text-[#E7E5E4]/80">
                  Northern Maharashtra, India
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Discover Malegaon
                </h1>
                <p className="text-base sm:text-lg text-[#E7E5E4] font-normal leading-relaxed text-balance">
                  Stories, culture, people and everyday life from the heart of Maharashtra.
                </p>

                {/* Hero Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      onNavigate('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3 text-xs sm:text-sm font-semibold text-[#1C1917] bg-white hover:bg-[#F5F4F0] rounded-lg transition-colors cursor-pointer shadow-sm whitespace-nowrap"
                  >
                    Explore Malegaon
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('blogs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#8C4325] hover:bg-[#A35230] rounded-lg transition-colors cursor-pointer shadow-sm whitespace-nowrap"
                  >
                    Read Our Blogs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Introduction Below Hero */}
      <section className="py-12 sm:py-16 bg-[#FAFAF9] border-b border-[#E7E5E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4325]">
            Welcome &amp; Introduction
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight">
            About Malegaon
          </h2>
          <p className="text-base sm:text-lg text-[#44403C] leading-relaxed max-w-2xl mx-auto font-normal">
            Malegaon is a city in Maharashtra known for its diverse culture, textile industry, local markets, food, festivals and vibrant everyday life.
          </p>
        </div>
      </section>

      {/* Hometown Stories Section ("Made in Malegaon") */}
      <HometownStories />

      {/* Visual City Highlights / Editorial Gateway */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4325]">
              Guide Highlights
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-[#1C1917] tracking-tight">
              Essential Chapters
            </h2>
          </div>
          <p className="text-sm text-[#78716C] max-w-md">
            Delve into historical architecture, the rhythmic loom quarters, and centuries-old culinary secrets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Heritage & Places */}
          <div className="group bg-white rounded-xl border border-[#E7E5E4] overflow-hidden flex flex-col justify-between hover:border-[#8C4325]/40 transition-colors">
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-[#E7E5E4]">
                <img
                  src={IMAGES.fort}
                  alt="Historic Naroshankar Fort walls"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[#8C4325] uppercase tracking-wider">
                  Heritage &amp; Sights
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold text-[#1C1917]">
                  Places to Visit
                </h3>
                <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                  Discover 18th-century Naroshankar Fort on the Mosam River and prominent nearby fortresses like Chandwad and Galna.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <button
                onClick={() => {
                  onNavigate('places');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#1C1917] hover:text-[#8C4325] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Explore Places</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 2: Culture & Gastronomy */}
          <div className="group bg-white rounded-xl border border-[#E7E5E4] overflow-hidden flex flex-col justify-between hover:border-[#8C4325]/40 transition-colors">
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-[#E7E5E4]">
                <img
                  src={IMAGES.food}
                  alt="Authentic Malegaon seekh kebabs and sheermal"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[#8C4325] uppercase tracking-wider">
                  Cuisine &amp; Life
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold text-[#1C1917]">
                  Culture &amp; Food
                </h3>
                <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                  Taste renowned charcoal-grilled seekh kebabs, saffron sheermal bread, spicy Khandeshi curries, and midnight tea.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <button
                onClick={() => {
                  onNavigate('culture-food');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#1C1917] hover:text-[#8C4325] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Read Food &amp; Culture</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 3: The Textile Engine */}
          <div className="group bg-white rounded-xl border border-[#E7E5E4] overflow-hidden flex flex-col justify-between hover:border-[#8C4325]/40 transition-colors">
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-[#E7E5E4]">
                <img
                  src={IMAGES.textile}
                  alt="Running powerloom weaving cotton fabric"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[#8C4325] uppercase tracking-wider">
                  Industrial Heritage
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold text-[#1C1917]">
                  The Textile Story
                </h3>
                <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                  Learn how 19th-century master weavers migrated here and established one of India’s most prolific decentralized textile hubs.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <button
                onClick={() => {
                  const textileBlog = BLOGS_DATA.find((b) => b.slug === 'malegaon-textile-industry-economic-backbone');
                  if (textileBlog) onSelectBlog(textileBlog);
                }}
                className="text-xs font-semibold text-[#1C1917] hover:text-[#8C4325] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Read Industry Story</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories from the 10 Blogs */}
      <section className="py-16 sm:py-20 border-t border-[#E7E5E4] bg-[#F5F4F0]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4325]">
                Curated Perspectives
              </span>
              <h2 className="mt-1 font-serif text-3xl font-bold text-[#1C1917] tracking-tight">
                Featured Blogs
              </h2>
            </div>

            <button
              onClick={() => {
                onNavigate('blogs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold uppercase tracking-wider text-[#8C4325] hover:text-[#1C1917] transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <span>Explore All 10 Stories</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredBlogs.map((post) => (
              <BlogCard key={post.id} post={post} onReadMore={onSelectBlog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
