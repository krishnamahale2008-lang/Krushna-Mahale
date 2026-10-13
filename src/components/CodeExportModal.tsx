import React, { useState } from 'react';
import { GeneratedWebsite } from '../types/website';

interface CodeExportModalProps {
  site: GeneratedWebsite;
  isOpen: boolean;
  onClose: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({
  site,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'html' | 'json'>('html');

  if (!isOpen) return null;

  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${site.siteName} — ${site.tagline}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Newsreader:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    h1, h2, h3 { font-family: ${site.theme.fontPairing === 'serif-editorial' ? "'Newsreader', serif" : "'Plus Jakarta Sans', sans-serif"}; }
  </style>
</head>
<body class="${site.theme.isDark ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'} antialiased">
  <!-- Navigation -->
  <header class="border-b ${site.theme.isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-100 bg-white/90'} sticky top-0 z-30 backdrop-blur-md">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <span class="text-xl font-bold">${site.siteName}</span>
      <nav class="hidden md:flex gap-6 text-sm">
        ${site.navLinks.map((l) => `<a href="#${l.toLowerCase()}" class="hover:opacity-80">${l}</a>`).join('\n        ')}
      </nav>
      <a href="#contact" class="px-4 py-2 text-xs font-semibold text-white rounded-lg" style="background-color: ${site.theme.accentColor}">${site.hero.primaryCta}</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="py-20 border-b ${site.theme.isDark ? 'border-slate-800' : 'border-slate-100'}">
    <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
      <span class="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border" style="color: ${site.theme.accentColor}; border-color: ${site.theme.accentColor}40">${site.hero.badge}</span>
      <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight">${site.hero.headline}</h1>
      <p class="text-lg opacity-80 max-w-2xl mx-auto">${site.hero.subheadline}</p>
      <div class="flex justify-center gap-4 pt-4">
        <a href="#showcase" class="px-6 py-3 text-sm font-semibold text-white rounded-lg" style="background-color: ${site.theme.accentColor}">${site.hero.primaryCta}</a>
        <a href="#contact" class="px-6 py-3 text-sm font-semibold rounded-lg border ${site.theme.isDark ? 'border-slate-700' : 'border-slate-300'}">${site.hero.secondaryCta}</a>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="py-20 max-w-6xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      ${site.features.map((f, i) => `
      <div class="p-6 rounded-xl border ${site.theme.isDark ? 'border-slate-800 bg-slate-800/40' : 'border-slate-200 bg-white'}">
        <div class="text-lg font-bold mb-2">0${i + 1}</div>
        <h3 class="font-bold mb-2">${f.title}</h3>
        <p class="text-xs opacity-75 leading-relaxed">${f.description}</p>
      </div>`).join('')}
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-12 border-t ${site.theme.isDark ? 'border-slate-800 bg-slate-950 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-600'}">
    <div class="max-w-6xl mx-auto px-6 flex justify-between text-xs">
      <div>${site.siteName} — ${site.footer.tagline}</div>
      <div>${site.footer.copyright}</div>
    </div>
  </footer>
</body>
</html>`;

  const jsonCode = JSON.stringify(site, null, 2);
  const codeToDisplay = activeTab === 'html' ? htmlCode : jsonCode;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeToDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([codeToDisplay], {
      type: activeTab === 'html' ? 'text/html' : 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = activeTab === 'html' ? `${site.siteName.toLowerCase().replace(/\s+/g, '-')}.html` : 'website-spec.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full flex flex-col max-h-[85vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
              Export Generated Website
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Complete standalone HTML + Tailwind CSS code ready to deploy anywhere.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg text-xs">
              <button
                onClick={() => setActiveTab('html')}
                className={`px-3 py-1 rounded-md font-medium cursor-pointer ${
                  activeTab === 'html'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                HTML File
              </button>
              <button
                onClick={() => setActiveTab('json')}
                className={`px-3 py-1 rounded-md font-medium cursor-pointer ${
                  activeTab === 'json'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                JSON Schema
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Code Preview Box */}
        <div className="flex-1 overflow-auto p-4 bg-slate-950 font-mono text-xs text-slate-200 selection:bg-blue-600">
          <pre className="whitespace-pre-wrap leading-relaxed">{codeToDisplay}</pre>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {activeTab === 'html' ? 'Self-contained single file with CDN styles' : 'Structured JSON data'}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? '✓ Copied!' : 'Copy Code'}
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-lg transition-colors cursor-pointer"
            >
              Download {activeTab === 'html' ? '.html' : '.json'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
