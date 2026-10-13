import React, { useState } from 'react';
import { BLOGS_DATA, BlogPost } from '../data/blogsData';
import { BlogCard } from '../components/BlogCard';

interface BlogsViewProps {
  onSelectBlog: (post: BlogPost) => void;
}

export const BlogsView: React.FC<BlogsViewProps> = ({ onSelectBlog }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'City Overview', 'History', 'Industry & Economy', 'Food & Culinary', 'Culture & Traditions', 'Local Life', 'Future & Youth'];

  const filteredBlogs = BLOGS_DATA.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.deck.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4325]">
          Curated Journal &amp; City Essays
        </span>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
          Discover Malegaon Blogs
        </h1>
        <p className="mt-4 text-base text-[#57534E] leading-relaxed">
          Ten original, factual, and human-centered essays exploring every facet of the city—from 18th-century fortresses and the powerloom trade to night kebab trails and youth aspirations.
        </p>
      </div>

      {/* Search and Category Filter Toolbar */}
      <div className="space-y-4 bg-white p-5 rounded-xl border border-[#E7E5E4] shadow-xs">
        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search blogs by keyword, topic, or place..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#FAFAF9] border border-[#D6D3D1] rounded-lg text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#8C4325]/40 focus:border-[#8C4325]"
          />
          <svg className="w-5 h-5 text-[#A8A29E] absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-2.5 text-xs text-[#78716C] hover:text-[#1C1917]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills / Filter buttons */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'bg-[#F5F4F0] text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((post) => (
            <BlogCard key={post.id} post={post} onReadMore={onSelectBlog} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-[#E7E5E4] p-8 space-y-3">
          <p className="font-serif text-lg text-[#1C1917]">No essays match your search.</p>
          <p className="text-xs text-[#78716C]">Try clearing your search term or selecting another category.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#8C4325] rounded-md hover:bg-[#A35230] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
