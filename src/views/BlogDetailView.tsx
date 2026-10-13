import React, { useState } from 'react';
import { BlogPost, BLOGS_DATA } from '../data/blogsData';
import { BlogCard } from '../components/BlogCard';

interface BlogDetailViewProps {
  post: BlogPost;
  onBack: () => void;
  onSelectBlog: (post: BlogPost) => void;
}

export const BlogDetailView: React.FC<BlogDetailViewProps> = ({
  post,
  onBack,
  onSelectBlog,
}) => {
  const [copied, setCopied] = useState(false);

  // Find 3 related blogs (excluding current)
  const relatedBlogs = BLOGS_DATA.filter((b) => b.id !== post.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <article className="py-10 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Navigation Top Bar */}
      <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#8C4325] transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Blogs</span>
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#44403C] hover:text-[#1C1917] bg-[#F5F4F0] hover:bg-[#E7E5E4] rounded-md transition-colors cursor-pointer"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span>{copied ? 'Link Copied!' : 'Share Essay'}</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="space-y-4">
        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#78716C]">
          <span className="font-semibold text-[#8C4325]">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
          <span aria-hidden="true">·</span>
          <span>Published {post.date}</span>
          <span aria-hidden="true">·</span>
          <span>By {post.author}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] leading-tight text-balance">
          {post.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#57534E] leading-relaxed font-serif italic border-l-2 border-[#8C4325] pl-4">
          {post.deck}
        </p>
      </header>

      {/* Large Featured Image */}
      <figure className="space-y-2">
        <div className="overflow-hidden rounded-xl bg-[#E7E5E4] aspect-[16/9] shadow-sm">
          <img
            src={post.image}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="text-xs text-[#78716C] font-serif italic text-center">
          {post.imageCaption}
        </figcaption>
      </figure>

      {/* Article Body Content */}
      <div className="prose prose-stone max-w-none text-base text-[#292524] leading-relaxed space-y-8">
        
        {/* Intro Paragraph with Drop Cap */}
        <p className="text-lg sm:text-xl text-[#1C1917] leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#8C4325] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
          {post.content.intro}
        </p>

        {/* Content Sections */}
        {post.content.sections.map((sec, idx) => (
          <section key={idx} className="space-y-4 pt-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] border-b border-[#F5F4F0] pb-2">
              {sec.heading}
            </h2>

            {sec.body.map((p, pIdx) => (
              <p key={pIdx} className="text-[#332F2C] leading-relaxed">
                {p}
              </p>
            ))}

            {sec.listItems && (
              <div className="bg-[#FBF9F5] p-5 rounded-lg border border-[#E7E5E4] my-4">
                <ul className="space-y-2 text-sm text-[#44403C]">
                  {sec.listItems.map((li, liIdx) => (
                    <li key={liIdx} className="flex items-start gap-2">
                      <span className="text-[#8C4325] font-bold mt-1 text-xs">◆</span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}

        {/* Pull Quote */}
        {post.content.pullQuote && (
          <blockquote className="my-8 py-6 px-8 border-y border-[#E7E5E4] bg-[#F5F4F0]/40 text-center">
            <p className="font-serif text-xl sm:text-2xl italic text-[#1C1917] leading-relaxed">
              “{post.content.pullQuote}”
            </p>
          </blockquote>
        )}

        {/* Key Takeaway Box */}
        <div className="bg-white p-6 rounded-xl border border-[#E7E5E4] shadow-xs space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#8C4325] block">
            Summary &amp; Key Insight
          </span>
          <p className="text-sm text-[#44403C] leading-relaxed">
            {post.content.takeaway}
          </p>
        </div>
      </div>

      {/* Footer Navigation within Article */}
      <div className="pt-8 border-t border-[#E7E5E4] flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#8C4325] rounded-md transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to All 10 Blogs</span>
        </button>

        <div className="text-xs text-[#78716C]">
          Part of the <em>Discover Malegaon</em> community archive.
        </div>
      </div>

      {/* Related Blogs Section */}
      <section className="pt-12 border-t border-[#E7E5E4] space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4325]">
            Continue Reading
          </span>
          <h3 className="mt-1 font-serif text-2xl font-bold text-[#1C1917]">
            Related Stories &amp; Chapters
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedBlogs.map((relPost) => (
            <BlogCard
              key={relPost.id}
              post={relPost}
              onReadMore={(p) => {
                onSelectBlog(p);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </section>
    </article>
  );
};
