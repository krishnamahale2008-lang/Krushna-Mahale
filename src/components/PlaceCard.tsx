import React from 'react';
import { PlaceItem } from '../data/placesData';

interface PlaceCardProps {
  place: PlaceItem;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const isInCity = place.locationCategory === 'in_city';

  return (
    <div className="bg-white rounded-xl border border-[#E7E5E4] overflow-hidden flex flex-col justify-between hover:border-[#8C4325]/40 hover:shadow-sm transition-all duration-200">
      <div>
        {/* Place Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#E7E5E4]">
          <img
            src={place.image}
            alt={place.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Place Details */}
        <div className="p-6">
          {/* Location distinction banner as quiet typographic metadata */}
          <div className="flex items-center gap-2 text-xs text-[#78716C] mb-2">
            <span className={`font-semibold ${isInCity ? 'text-[#8C4325]' : 'text-[#44403C]'}`}>
              {place.locationLabel}
            </span>
            <span aria-hidden="true">·</span>
            <span>{place.distance}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] leading-snug">
            {place.name}
          </h3>

          <p className="mt-3 text-sm text-[#44403C] leading-relaxed">
            {place.description}
          </p>

          {/* Why it is worth visiting */}
          <div className="mt-5 pt-4 border-t border-[#F5F4F0] space-y-2">
            <div className="text-xs">
              <span className="font-semibold text-[#1C1917]">Why it is worth visiting: </span>
              <span className="text-[#57534E] leading-relaxed">{place.whyVisit}</span>
            </div>
            
            <div className="text-xs text-[#78716C]">
              <span className="font-medium text-[#1C1917]">Best time: </span>
              <span>{place.bestTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 text-xs text-[#78716C] italic border-t border-[#FAFAF9]">
        Tip: {place.practicalTips}
      </div>
    </div>
  );
};
