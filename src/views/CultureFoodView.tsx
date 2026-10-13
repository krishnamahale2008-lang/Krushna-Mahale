import React, { useState } from 'react';
import { CULTURE_ITEMS, FOOD_ITEMS } from '../data/cultureFoodData';

export const CultureFoodView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'culture' | 'food'>('both');

  return (
    <div className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4325]">
          Living Traditions &amp; Flavors
        </span>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
          Culture &amp; Food
        </h1>
        <p className="mt-4 text-base text-[#57534E] leading-relaxed">
          From communal festivals and grassroots cinema to coal-grilled seekh kebabs and fragrant sheermal, experience the shared customs and culinary soul of Malegaon.
        </p>
      </div>

      {/* Quick View Controls */}
      <div className="flex items-center gap-2 border-b border-[#E7E5E4] pb-4">
        <button
          onClick={() => setActiveTab('both')}
          className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
            activeTab === 'both' ? 'bg-[#1C1917] text-white' : 'bg-[#F5F4F0] text-[#57534E] hover:text-[#1C1917]'
          }`}
        >
          Overview Both
        </button>
        <button
          onClick={() => setActiveTab('culture')}
          className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
            activeTab === 'culture' ? 'bg-[#1C1917] text-white' : 'bg-[#F5F4F0] text-[#57534E] hover:text-[#1C1917]'
          }`}
        >
          Culture &amp; Traditions
        </button>
        <button
          onClick={() => setActiveTab('food')}
          className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
            activeTab === 'food' ? 'bg-[#1C1917] text-white' : 'bg-[#F5F4F0] text-[#57534E] hover:text-[#1C1917]'
          }`}
        >
          Local Food &amp; Cuisine
        </button>
      </div>

      {/* SECTION 1: CULTURE */}
      {(activeTab === 'both' || activeTab === 'culture') && (
        <section className="space-y-10">
          <div className="border-b border-[#E7E5E4] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-semibold text-[#8C4325]">SECTION 01</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Culture &amp; Community Traditions
              </h2>
            </div>
            <p className="text-xs text-[#78716C]">
              Festivals, clothing, markets &amp; grassroots expression
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CULTURE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#E7E5E4] overflow-hidden flex flex-col justify-between hover:border-[#8C4325]/40 transition-colors"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden bg-[#E7E5E4]">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#8C4325]">
                      {item.tagline}
                    </span>
                    <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#44403C] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-[#F5F4F0] space-y-1.5">
                      <span className="text-xs font-semibold text-[#1C1917] block">
                        Distinctive Aspects:
                      </span>
                      <ul className="text-xs text-[#57534E] space-y-1 list-disc list-inside">
                        {item.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: FOOD */}
      {(activeTab === 'both' || activeTab === 'food') && (
        <section className="space-y-10 pt-4">
          <div className="border-b border-[#E7E5E4] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-semibold text-[#8C4325]">SECTION 02</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Local &amp; Khandeshi Cuisine
              </h2>
            </div>
            <p className="text-xs text-[#78716C]">
              Authentic flavors visitors encounter in Malegaon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOOD_ITEMS.map((food) => (
              <div
                key={food.id}
                className="bg-white rounded-xl border border-[#E7E5E4] overflow-hidden flex flex-col justify-between hover:border-[#8C4325]/40 transition-colors"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-[#E7E5E4]">
                    <img
                      src={food.image}
                      alt={food.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-semibold text-[#8C4325] uppercase tracking-wider mb-1">
                      {food.category}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                      {food.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#57534E] leading-relaxed">
                      {food.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 text-[11px] text-[#78716C] border-t border-[#FAFAF9] pt-2">
                  <span className="font-semibold text-[#1C1917]">Where: </span>
                  {food.whereToFind}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Note on Food Culture */}
          <div className="bg-[#F5F4F0] p-6 rounded-xl border border-[#E7E5E4] text-xs sm:text-sm text-[#44403C] space-y-2">
            <h4 className="font-serif text-base font-bold text-[#1C1917]">
              The Evening Food Experience
            </h4>
            <p className="leading-relaxed">
              Street eating in Malegaon comes alive after sundown. Street vendors set up coal grills around Old Agra Road, near the fort, and along the bustling chowks. Dining here is informal and social: friends gather around small plastic stools, share hot skewers, and conclude the night with a tiny glass of sweet milk chai.
            </p>
          </div>
        </section>
      )}
    </div>
  );
};
