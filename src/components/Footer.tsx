import React from 'react';
import { NavTab } from './Navbar';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (tab: NavTab) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E7E5E4] bg-[#F5F4F0] text-[#1C1917] mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#E7E5E4]">
          <div className="space-y-2 max-w-md">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-[#1C1917]">
              Discover Malegaon
            </h3>
            <p className="text-sm text-[#78716C] italic font-serif">
              “Stories, culture &amp; life of Malegaon.”
            </p>
            <p className="text-xs text-[#57534E] leading-relaxed pt-1">
              An independent, minimal informational guide celebrating the heritage, people, textile traditions, and cuisine of Malegaon in northern Maharashtra, India.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#44403C]">
            <button
              onClick={() => handleNav('home')}
              className="hover:text-[#8C4325] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-[#D6D3D1]" aria-hidden="true">|</span>
            <button
              onClick={() => handleNav('about')}
              className="hover:text-[#8C4325] transition-colors cursor-pointer"
            >
              About
            </button>
            <span className="text-[#D6D3D1]" aria-hidden="true">|</span>
            <button
              onClick={() => handleNav('places')}
              className="hover:text-[#8C4325] transition-colors cursor-pointer"
            >
              Places
            </button>
            <span className="text-[#D6D3D1]" aria-hidden="true">|</span>
            <button
              onClick={() => handleNav('culture-food')}
              className="hover:text-[#8C4325] transition-colors cursor-pointer"
            >
              Culture &amp; Food
            </button>
            <span className="text-[#D6D3D1]" aria-hidden="true">|</span>
            <button
              onClick={() => handleNav('blogs')}
              className="hover:text-[#8C4325] transition-colors cursor-pointer"
            >
              Blogs
            </button>
            <span className="text-[#D6D3D1]" aria-hidden="true">|</span>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-[#8C4325] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
          <p>© 2026 Discover Malegaon. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Curated with accuracy, respect, and local pride for students, travelers, and residents.
          </p>
        </div>
      </div>
    </footer>
  );
};
