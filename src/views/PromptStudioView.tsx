import React, { useState } from 'react';
import { GeneratedWebsite, FontPairing } from '../types/website';
import { GeneratedWebsiteRenderer } from '../components/GeneratedWebsiteRenderer';
import { CodeExportModal } from '../components/CodeExportModal';
import { synthesizeWebsiteFromPrompt } from '../utils/fallbackGenerator';

interface PromptStudioViewProps {
  onOpenShowcase?: () => void;
}

export const PromptStudioView: React.FC<PromptStudioViewProps> = ({ onOpenShowcase }) => {
  const [prompt, setPrompt] = useState('Minimalist sourdough bakery and specialty coffee shop in Kyoto with daily bake schedule and online pre-orders');
  const [refinementPrompt, setRefinementPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState<string>('');
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Initialize with a beautifully crafted default website
  const [website, setWebsite] = useState<GeneratedWebsite>(() =>
    synthesizeWebsiteFromPrompt('Minimalist sourdough bakery and specialty coffee shop with daily bake schedule')
  );

  const samplePrompts = [
    { label: '🥐 Sourdough Bakery', prompt: 'Artisanal sourdough bakery and specialty pour-over cafe with daily bake schedule and pastry menu' },
    { label: '⚡ Cloud DevOps SaaS', prompt: 'Next-generation cloud telemetry and real-time edge data pipeline platform with pricing table' },
    { label: '🏛️ Architecture Studio', prompt: 'Minimalist Japanese and Scandinavian spatial architecture studio with selected works and monographs' },
    { label: '🦷 Dental & Wellness', prompt: 'Modern serene dental clinic with 3D imaging, gentle treatments, and online appointment booking' },
    { label: '🌿 Botanical Skincare', prompt: 'Organic cold-pressed botanical skincare apothecary with ingredient sourcing and minimalist product cards' },
    { label: '📸 Fashion Photography', prompt: 'Editorial fashion photographer portfolio with dark mode gallery, client reviews, and booking inquiries' },
  ];

  const colorOptions = [
    { name: 'Terracotta', color: '#8C4325' },
    { name: 'Cobalt', color: '#2563EB' },
    { name: 'Emerald', color: '#059669' },
    { name: 'Amber', color: '#B45309' },
    { name: 'Teal', color: '#0D9488' },
    { name: 'Slate', color: '#1C1917' },
  ];

  const handleGenerate = async (inputPrompt?: string) => {
    const targetPrompt = inputPrompt || prompt;
    if (!targetPrompt.trim()) return;

    setIsGenerating(true);
    setGenerationStep('Analyzing website concept and target audience...');

    // Progress step simulation for smooth user feedback
    const stepTimer1 = setTimeout(() => {
      setGenerationStep('Synthesizing typographic scale and domain layout...');
    }, 400);

    const stepTimer2 = setTimeout(() => {
      setGenerationStep('Drafting authentic human copy & interactive widgets...');
    }, 800);

    try {
      // Attempt server-side Gemini generation via our full-stack endpoint
      const response = await fetch('/api/generate-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: targetPrompt }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.website && !data.fallbackNeeded) {
          const generatedSite: GeneratedWebsite = {
            ...data.website,
            id: String(Date.now()),
            prompt: targetPrompt,
          };
          setWebsite(generatedSite);
          setIsGenerating(false);
          clearTimeout(stepTimer1);
          clearTimeout(stepTimer2);
          return;
        }
      }
    } catch {
      // Server offline or proxy unavailable — smoothly fall back to our rich local engine
    }

    // High-quality local synthesizer fallback
    setTimeout(() => {
      const generated = synthesizeWebsiteFromPrompt(targetPrompt);
      setWebsite(generated);
      setIsGenerating(false);
      clearTimeout(stepTimer1);
      clearTimeout(stepTimer2);
    }, 1100);
  };

  const handleRefine = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!refinementPrompt.trim()) return;

    setIsGenerating(true);
    setGenerationStep(`Applying refinement: "${refinementPrompt}"...`);

    try {
      const response = await fetch('/api/generate-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          existingSite: website,
          refinement: refinementPrompt,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.website && !data.fallbackNeeded) {
          setWebsite({ ...data.website, id: String(Date.now()), prompt: website.prompt });
          setIsGenerating(false);
          setRefinementPrompt('');
          return;
        }
      }
    } catch {
      // fallback
    }

    setTimeout(() => {
      const refined = synthesizeWebsiteFromPrompt(website.prompt, website, refinementPrompt);
      setWebsite(refined);
      setIsGenerating(false);
      setRefinementPrompt('');
    }, 800);
  };

  const handleColorChange = (hex: string, name: string) => {
    setWebsite((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        accentColor: hex,
        accentName: name,
      },
    }));
  };

  const handleFontChange = (fontPairing: FontPairing) => {
    setWebsite((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        fontPairing,
      },
    }));
  };

  const handleToggleDark = () => {
    setWebsite((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        isDark: !prev.theme.isDark,
      },
    }));
  };

  const getViewportWidthClass = () => {
    switch (viewport) {
      case 'mobile':
        return 'max-w-[390px] shadow-2xl rounded-[32px] border-[8px] border-slate-800 overflow-hidden';
      case 'tablet':
        return 'max-w-[768px] shadow-2xl rounded-2xl border-[6px] border-slate-800 overflow-hidden';
      case 'desktop':
      default:
        return 'w-full shadow-md rounded-xl border border-slate-200 overflow-hidden';
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] flex flex-col">
      
      {/* Code Export Modal */}
      <CodeExportModal
        site={website}
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

      {/* 1. Studio Prompt Header Bar */}
      <header className="bg-white border-b border-[#E7E5E4] px-4 sm:px-6 py-6 shadow-xs">
        <div className="max-w-6xl mx-auto space-y-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8C4325] animate-pulse"></span>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4325]">
                  AI Prompt Studio
                </span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight">
                Prompt to Website Generator
              </h1>
            </div>

            {onOpenShowcase && (
              <button
                onClick={onOpenShowcase}
                className="self-start sm:self-auto text-xs font-semibold px-3.5 py-1.5 border border-[#D6D3D1] hover:border-[#1C1917] rounded-lg transition-colors text-[#44403C] hover:text-[#1C1917] flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Malegaon Guide Showcase</span>
                <span>→</span>
              </button>
            )}
          </div>

          {/* Primary Prompt Input Bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleGenerate();
                }}
                placeholder="Enter any prompt... (e.g. Modern boutique hotel in Santorini with room suites & booking)"
                className="w-full pl-4 pr-10 py-3 bg-[#FAFAF9] border border-[#D6D3D1] rounded-xl text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#8C4325]/40 focus:border-[#8C4325] shadow-xs"
              />
              {prompt && (
                <button
                  onClick={() => setPrompt('')}
                  className="absolute right-3 top-3 text-xs text-[#A8A29E] hover:text-[#1C1917]"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={() => handleGenerate()}
              disabled={isGenerating}
              className="px-6 py-3 bg-[#1C1917] hover:bg-[#8C4325] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm hover:shadow-md disabled:bg-[#A8A29E] whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <span>Generate Website</span>
                  <span className="text-xs">⚡</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Prompt Inspiration Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none text-xs">
            <span className="text-[#78716C] font-medium shrink-0">Try prompt:</span>
            {samplePrompts.map((s) => (
              <button
                key={s.label}
                onClick={() => {
                  setPrompt(s.prompt);
                  handleGenerate(s.prompt);
                }}
                className="px-2.5 py-1 rounded-lg bg-[#F5F4F0] hover:bg-[#E7E5E4] text-[#44403C] hover:text-[#1C1917] font-medium shrink-0 transition-colors cursor-pointer border border-[#E7E5E4]"
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Generation Progress Indicator Banner */}
          {isGenerating && (
            <div className="bg-[#FAF7F2] border border-[#8C4325]/30 p-3 rounded-lg flex items-center gap-3 animate-fadeIn">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8C4325] animate-ping"></div>
              <span className="text-xs font-medium text-[#8C4325]">
                {generationStep || 'Building your website from prompt...'}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* 2. Live Canvas Controls Toolbar */}
      <section className="bg-white/80 backdrop-blur-md border-b border-[#E7E5E4] px-4 sm:px-6 py-2.5 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Active Site Title */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#1C1917]">{website.siteName}</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="text-[#78716C]">{website.category}</span>
          </div>

          {/* Center: Device Viewport Switcher */}
          <div className="flex items-center bg-[#F5F4F0] p-1 rounded-lg border border-[#E7E5E4]">
            <button
              onClick={() => setViewport('desktop')}
              className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewport === 'desktop'
                  ? 'bg-white text-[#1C1917] shadow-xs font-semibold'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
              title="Desktop 1440px view"
            >
              <span>🖥️</span>
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewport === 'tablet'
                  ? 'bg-white text-[#1C1917] shadow-xs font-semibold'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
              title="Tablet 768px view"
            >
              <span>💻</span>
              <span className="hidden sm:inline">Tablet</span>
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewport === 'mobile'
                  ? 'bg-white text-[#1C1917] shadow-xs font-semibold'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
              title="Mobile 390px view"
            >
              <span>📱</span>
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          {/* Right: Theme Quick-Toggles & Code Export */}
          <div className="flex items-center gap-3">
            
            {/* Color Swatches */}
            <div className="hidden lg:flex items-center gap-1">
              {colorOptions.map((c) => (
                <button
                  key={c.name}
                  onClick={() => handleColorChange(c.color, c.name)}
                  className={`w-5 h-5 rounded-full transition-transform hover:scale-110 cursor-pointer ${
                    website.theme.accentColor === c.color ? 'ring-2 ring-offset-2 ring-slate-900' : ''
                  }`}
                  style={{ backgroundColor: c.color }}
                  title={`${c.name} Accent`}
                />
              ))}
            </div>

            {/* Font Toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-[#F5F4F0] p-1 rounded-md">
              <button
                onClick={() => handleFontChange('serif-editorial')}
                className={`px-2 py-0.5 rounded text-[11px] font-serif cursor-pointer ${
                  website.theme.fontPairing === 'serif-editorial' ? 'bg-white font-bold shadow-xs' : 'text-[#78716C]'
                }`}
              >
                Serif
              </button>
              <button
                onClick={() => handleFontChange('modern-sans')}
                className={`px-2 py-0.5 rounded text-[11px] font-sans cursor-pointer ${
                  website.theme.fontPairing === 'modern-sans' ? 'bg-white font-bold shadow-xs' : 'text-[#78716C]'
                }`}
              >
                Sans
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={handleToggleDark}
              className={`px-2.5 py-1 rounded-lg border font-medium cursor-pointer transition-colors ${
                website.theme.isDark
                  ? 'bg-slate-900 text-white border-slate-700'
                  : 'bg-white text-slate-800 border-slate-300'
              }`}
              title="Toggle Light/Dark Theme"
            >
              {website.theme.isDark ? '🌙 Dark' : '☀️ Light'}
            </button>

            {/* Export Code Button */}
            <button
              onClick={() => setIsExportOpen(true)}
              className="px-3 py-1.5 bg-[#8C4325] hover:bg-[#A35230] text-white font-semibold rounded-lg transition-colors cursor-pointer shadow-xs flex items-center gap-1"
            >
              <span>Export Code</span>
              <span className="text-[10px]">↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Live Canvas Area */}
      <main className="flex-1 p-4 sm:p-8 flex justify-center items-start overflow-y-auto">
        <div className={`transition-all duration-300 ${getViewportWidthClass()}`}>
          <GeneratedWebsiteRenderer site={website} />
        </div>
      </main>

      {/* 4. Floating Prompt Refinement Dock */}
      <footer className="sticky bottom-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E7E5E4] px-4 py-3 shadow-lg">
        <form onSubmit={handleRefine} className="max-w-4xl mx-auto flex items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={refinementPrompt}
              onChange={(e) => setRefinementPrompt(e.target.value)}
              placeholder="Refine this website... (e.g. 'Add a 3-tier pricing plan', 'Make it dark mode with neon accents', 'Add 2 more testimonials')"
              className="w-full pl-4 pr-10 py-2.5 bg-[#FAFAF9] border border-[#D6D3D1] rounded-xl text-xs sm:text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#8C4325]/40"
            />
            {refinementPrompt && (
              <button
                type="button"
                onClick={() => setRefinementPrompt('')}
                className="absolute right-3 top-2.5 text-xs text-[#A8A29E] hover:text-[#1C1917]"
              >
                ✕
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={!refinementPrompt.trim() || isGenerating}
            className="px-5 py-2.5 bg-[#1C1917] hover:bg-[#8C4325] disabled:bg-[#D6D3D1] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer whitespace-nowrap shadow-xs"
          >
            Refine Site
          </button>
        </form>
      </footer>
    </div>
  );
};
