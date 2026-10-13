import React, { useState } from 'react';

export type NavTab = 'home' | 'about' | 'places' | 'culture-food' | 'blogs' | 'contact';

interface NavbarProps {
  currentTab: NavTab;
  onNavigate: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Malegaon' },
    { id: 'places', label: 'Places' },
    { id: 'culture-food', label: 'Culture & Food' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleSelect = (tab: NavTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF9]/95 backdrop-blur-md border-b border-[#E7E5E4] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleSelect('home')}
            className="text-left font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] hover:text-[#8C4325] transition-colors"
          >
            Discover Malegaon
          </button>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#44403C]">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`relative py-1 text-sm tracking-tight transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#1C1917] font-semibold'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8C4325] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary action / Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSelect('blogs')}
              className="hidden lg:inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#1C1917] hover:bg-[#8C4325] rounded-md transition-colors cursor-pointer whitespace-nowrap"
            >
              Read Blogs
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#44403C] hover:text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#8C4325]/40 rounded-md"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E7E5E4] bg-[#FAFAF9] px-4 pt-3 pb-5 space-y-1 shadow-lg animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                currentTab === item.id
                  ? 'bg-[#F5F4F0] text-[#8C4325] font-semibold'
                  : 'text-[#44403C] hover:bg-[#F5F4F0]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleSelect('blogs')}
              className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-[#1C1917] hover:bg-[#8C4325] rounded-md transition-colors"
            >
              Explore All 10 Blogs
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
