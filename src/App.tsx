import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { PlacesView } from './views/PlacesView';
import { CultureFoodView } from './views/CultureFoodView';
import { BlogsView } from './views/BlogsView';
import { BlogDetailView } from './views/BlogDetailView';
import { ContactView } from './views/ContactView';
import { PromptStudioView } from './views/PromptStudioView';
import { BLOGS_DATA, BlogPost } from './data/blogsData';

type AppMode = 'studio' | 'showcase';

export default function App() {
  const [appMode, setAppMode] = useState<AppMode>('showcase');
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'studio') {
        setAppMode('studio');
        return;
      }
      if (hash.startsWith('blog/')) {
        const slug = hash.replace('blog/', '');
        const found = BLOGS_DATA.find((b) => b.slug === slug);
        if (found) {
          setSelectedBlog(found);
          setCurrentTab('blogs');
          setAppMode('showcase');
          return;
        }
      }

      if (['home', 'about', 'places', 'culture-food', 'blogs', 'contact'].includes(hash)) {
        setCurrentTab(hash as NavTab);
        setSelectedBlog(null);
        setAppMode('showcase');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateShowcase = (tab: NavTab) => {
    setCurrentTab(tab);
    setSelectedBlog(null);
    setAppMode('showcase');
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBlog = (post: BlogPost) => {
    setSelectedBlog(post);
    setAppMode('showcase');
    window.location.hash = `blog/${post.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlogs = () => {
    setSelectedBlog(null);
    setCurrentTab('blogs');
    window.location.hash = 'blogs';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const switchToStudio = () => {
    setAppMode('studio');
    window.location.hash = 'studio';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const switchToShowcase = () => {
    setAppMode('showcase');
    setCurrentTab('home');
    setSelectedBlog(null);
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#1C1917]">
      {/* Top Universal Mode Switcher Bar */}
      <div className="bg-[#1C1917] text-white px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-2 border-b border-[#292524] z-50">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-wide uppercase text-[10px] bg-[#8C4325] px-2 py-0.5 rounded text-white">
            Live Platform
          </span>
          <span className="text-[#A8A29E] hidden sm:inline">
            Prompt-to-Website AI Engine &amp; Full Showcase
          </span>
        </div>

        <div className="flex items-center gap-1.5 p-0.5 bg-[#292524] rounded-lg">
          <button
            onClick={switchToStudio}
            className={`px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              appMode === 'studio'
                ? 'bg-white text-[#1C1917] shadow-xs'
                : 'text-[#A8A29E] hover:text-white'
            }`}
          >
            <span>✨ Prompt Generator</span>
          </button>
          <button
            onClick={switchToShowcase}
            className={`px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              appMode === 'showcase'
                ? 'bg-white text-[#1C1917] shadow-xs'
                : 'text-[#A8A29E] hover:text-white'
            }`}
          >
            <span>🏛️ Malegaon Showcase</span>
          </button>
        </div>
      </div>

      {/* Main View Router */}
      {appMode === 'studio' ? (
        <PromptStudioView onOpenShowcase={switchToShowcase} />
      ) : (
        <div className="flex flex-col min-h-[calc(100vh-40px)]">
          {/* Top Showcase Navigation */}
          <Navbar currentTab={currentTab} onNavigate={handleNavigateShowcase} />

          {/* Main Content Area for Showcase */}
          <main className="flex-grow">
            {selectedBlog ? (
              <BlogDetailView
                post={selectedBlog}
                onBack={handleBackToBlogs}
                onSelectBlog={handleSelectBlog}
              />
            ) : (
              <>
                {currentTab === 'home' && (
                  <HomeView
                    onNavigate={handleNavigateShowcase}
                    onSelectBlog={handleSelectBlog}
                  />
                )}
                {currentTab === 'about' && (
                  <AboutView onNavigate={handleNavigateShowcase} />
                )}
                {currentTab === 'places' && <PlacesView />}
                {currentTab === 'culture-food' && <CultureFoodView />}
                {currentTab === 'blogs' && (
                  <BlogsView onSelectBlog={handleSelectBlog} />
                )}
                {currentTab === 'contact' && <ContactView />}
              </>
            )}
          </main>

          {/* Minimal Footer */}
          <Footer onNavigate={handleNavigateShowcase} />
        </div>
      )}
    </div>
  );
}
