import React, { useState } from 'react';
import { PLACES_DATA } from '../data/placesData';
import { PlaceCard } from '../components/PlaceCard';

type PlaceFilter = 'all' | 'in_city' | 'nearby';

export const PlacesView: React.FC = () => {
  const [filter, setFilter] = useState<PlaceFilter>('all');

  const filteredPlaces = PLACES_DATA.filter((place) => {
    if (filter === 'all') return true;
    return place.locationCategory === filter;
  });

  const inCityCount = PLACES_DATA.filter((p) => p.locationCategory === 'in_city').length;
  const nearbyCount = PLACES_DATA.filter((p) => p.locationCategory === 'nearby').length;

  return (
    <div className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4325]">
          Landmarks &amp; Excursions
        </span>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
          Places to Visit
        </h1>
        <p className="mt-4 text-base text-[#57534E] leading-relaxed">
          Notable historic places and areas in Malegaon, alongside prominent heritage fortresses and pilgrimage sites located across the surrounding countryside.
        </p>
      </div>

      {/* Filter Tabs (Functional buttons as allowed for interactive controls) */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#E7E5E4] pb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
            filter === 'all'
              ? 'bg-[#1C1917] text-white shadow-xs'
              : 'text-[#57534E] hover:text-[#1C1917] bg-[#F5F4F0]'
          }`}
        >
          All Locations ({PLACES_DATA.length})
        </button>
        <button
          onClick={() => setFilter('in_city')}
          className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
            filter === 'in_city'
              ? 'bg-[#1C1917] text-white shadow-xs'
              : 'text-[#57534E] hover:text-[#1C1917] bg-[#F5F4F0]'
          }`}
        >
          Located in Malegaon ({inCityCount})
        </button>
        <button
          onClick={() => setFilter('nearby')}
          className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
            filter === 'nearby'
              ? 'bg-[#1C1917] text-white shadow-xs'
              : 'text-[#57534E] hover:text-[#1C1917] bg-[#F5F4F0]'
          }`}
        >
          Nearby Attractions ({nearbyCount})
        </button>
      </div>

      {/* Geographic distinction reminder note */}
      <div className="bg-[#F5F4F0] p-4 rounded-lg border border-[#E7E5E4] text-xs text-[#57534E] flex items-start gap-2">
        <svg className="w-4 h-4 text-[#8C4325] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>
          <strong>Note on Geography:</strong> Landmarks labeled <em>Located in Malegaon</em> are within city municipal bounds along the Mosam River. Sites labeled <em>Nearby Attraction</em> are regional fortresses and shrines located between 25 km and 75 km away in Nashik / Khandesh.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPlaces.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};
