import React from 'react';
import { BlogPost } from '../data/blogsData';

interface BlogCardProps {
  post: BlogPost;
  onReadMore: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onReadMore }) => {
  return (
    <article className="group bg-white rounded-xl border border-[#E7E5E4] overflow-hidden flex flex-col justify-between hover:border-[#8C4325]/40 hover:shadow-md transition-all duration-200">
      <div>
        {/* Featured Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#E7E5E4]">
          <img
            src={post.image}
            alt={post.title}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Card Body */}
        <div className="p-6">
          {/* Metadata: unboxed clean text with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-[#78716C] mb-2.5">
            <span className="font-medium text-[#8C4325]">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
            <span aria-hidden="true">·</span>
            <span>{post.date}</span>
          </div>

          <h3 className="font-serif text-xl font-bold text-[#1C1917] leading-snug group-hover:text-[#8C4325] transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="mt-2.5 text-sm text-[#57534E] leading-relaxed line-clamp-3">
            {post.deck}
          </p>
        </div>
      </div>

      {/* Footer with Read More button */}
      <div className="px-6 pb-6 pt-2">
        <button
          onClick={() => onReadMore(post)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] group-hover:text-[#8C4325] transition-colors cursor-pointer"
        >
          <span>Read More</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </article>
  );
};
