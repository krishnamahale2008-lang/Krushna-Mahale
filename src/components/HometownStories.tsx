import React from 'react';

export const HometownStories: React.FC = () => {
  const cards = [
    {
      title: 'People',
      subtitle: 'Communities & Roots',
      description:
        'A warm, multilingual mosaic of families where generations of Marathi and Urdu traditions blend naturally. Defined by open doors, neighborly solidarity, and genuine hospitality.',
      highlight: 'Generous hospitality · Deep community ties'
    },
    {
      title: 'Work',
      subtitle: 'Looms & Enterprise',
      description:
        'Home to hundreds of decentralized weaving workshops, machine technicians, and ambitious young entrepreneurs modernizing the powerloom trade with digital networks and pride.',
      highlight: 'Textile craftsmanship · Grassroots enterprise'
    },
    {
      title: 'Life',
      subtitle: 'Streets & Flavors',
      description:
        'Bustling evening bazaars, simmering kadak chai at midnight stalls, smoky charcoal grills, and riverside morning walks along the banks of the historic Mosam and Girna.',
      highlight: 'Bustling night markets · Unmatched food culture'
    }
  ];

  return (
    <section className="py-14 sm:py-20 border-t border-[#E7E5E4] bg-[#F5F4F0]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-medium text-[#8C4325]">
            Hometown Stories
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Made in Malegaon
          </h2>
          <p className="mt-3 text-sm text-[#57534E] leading-relaxed">
            Three simple lenses into the people, industrious labor, and everyday soul of this Maharashtra city.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className="bg-white rounded-xl p-7 border border-[#E7E5E4] shadow-sm hover:border-[#8C4325]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-bold text-[#1C1917]">
                    {card.title}
                  </span>
                  <span className="text-xs font-mono text-[#A8A29E]">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C4325] mb-2.5">
                  {card.subtitle}
                </h4>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F5F4F0] text-xs text-[#78716C]">
                {card.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
