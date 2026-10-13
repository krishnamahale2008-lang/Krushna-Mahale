import React from 'react';
import { IMAGES } from '../assets/images';
import { NavTab } from '../components/Navbar';

interface AboutViewProps {
  onNavigate: (tab: NavTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <div className="border-b border-[#E7E5E4] pb-8">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4325]">
          City Profile &amp; Origins
        </span>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
          About Malegaon
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
          A concise, factual introduction to the geography, historical transitions, and cultural character of northern Maharashtra’s textile capital.
        </p>
      </div>

      {/* Featured Photo with Caption */}
      <figure className="space-y-2">
        <div className="overflow-hidden rounded-xl bg-[#E7E5E4] aspect-[16/9]">
          <img
            src={IMAGES.hero}
            alt="The tranquil banks of Girna and Mosam rivers in Malegaon"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="text-xs text-[#78716C] font-serif italic text-center">
          The Girna and Mosam riverbanks have nurtured commerce, settlements, and community gatherings in Malegaon for over three centuries.
        </figcaption>
      </figure>

      {/* Section 1: Where is Malegaon? */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-semibold text-[#8C4325]">01</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
            Where is Malegaon?
          </h2>
        </div>
        <div className="space-y-4 text-base text-[#44403C] leading-relaxed">
          <p>
            Malegaon is situated in the north-western Deccan region of Maharashtra, India. Administratively, it serves as the second-largest city and a major municipal corporation within the Nashik district, located approximately 105 kilometers northeast of Nashik city and about 280 kilometers northeast of Mumbai.
          </p>
          <p>
            The city sits directly on the vital National Highway 53 (traditionally the Mumbai–Agra highway corridor), connecting it efficiently with Dhule, Jalgaon, and the Khandesh plains. Malegaon is framed by two rivers: the Mosam River, which flows directly through the city, and the larger Girna River, which skirts its eastern edge before the two streams merge.
          </p>
          <div className="bg-[#F5F4F0] p-5 rounded-lg border border-[#E7E5E4] text-sm text-[#44403C] space-y-1">
            <p><strong>District:</strong> Nashik District, Maharashtra, India</p>
            <p><strong>River Basin:</strong> Confluence of Mosam &amp; Girna Rivers (Tapi Basin)</p>
            <p><strong>Major Corridors:</strong> NH 53 (Old NH 3 / Mumbai–Agra Highway)</p>
            <p><strong>Nearest Major Railhead:</strong> Manmad Junction (approx. 35 km away)</p>
          </div>
        </div>
      </section>

      {/* Section 2: A Brief History */}
      <section className="space-y-4 pt-4 border-t border-[#E7E5E4]">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-semibold text-[#8C4325]">02</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
            A Brief History
          </h2>
        </div>
        <div className="space-y-4 text-base text-[#44403C] leading-relaxed">
          <p>
            Historical records indicate that the settlement originally began as a modest hamlet known as Maliwadi along the fertile northern bank of the Mosam River. In the 18th century, the Peshwas granted the region to general <strong>Naro Shankar Rajebahadur</strong>, who recognized its strategic geographic positioning along key North–South trading routes.
          </p>
          <p>
            In 1740, Naroshankar commenced the construction of Malegaon Fort, employing skilled stone carvers and craftsmen from across northern and central India. The fortress provided protection, attracting traders, blacksmiths, and small artisans to settle around its walls.
          </p>
          <p>
            During the Third Anglo-Maratha War in 1818, Malegaon was defended by an Arab garrison in the service of the Peshwa. After holding out against British forces for nearly a month, the fort surrendered, leading to British administrative governance.
          </p>
          <p>
            The city’s defining demographic milestone occurred following the 1857 upheaval in northern India. Master handloom weavers (the Ansari community) from Uttar Pradesh centers like Varanasi, Allahabad, and Mau migrated south seeking economic sanctuary. Finding raw cotton readily available from the Khandesh and Vidarbha farms, they permanently established weaving colonies here, turning Malegaon into one of the country’s foremost textile centers.
          </p>
        </div>
      </section>

      {/* Section 3: What Makes Malegaon Special? */}
      <section className="space-y-6 pt-4 border-t border-[#E7E5E4]">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-semibold text-[#8C4325]">03</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
            What Makes Malegaon Special?
          </h2>
        </div>
        <p className="text-base text-[#44403C] leading-relaxed">
          Malegaon is not a typical highway town. Its identity is forged by six interconnected pillars that distinguish it across Maharashtra:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#E7E5E4]">
            <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
              1. Cultural Diversity &amp; Language
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Marathi and Urdu coexist in equal measure throughout daily life. Cultural events feature both traditional Maharashtrian Powadas and Urdu poetry mushairas, creating a shared bilingual fabric.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E7E5E4]">
            <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
              2. The Decentralized Textile Industry
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Unlike monolithic corporate mills, Malegaon’s weaving is powered by thousands of family-owned workshops. The city produces millions of meters of cotton and synthetic grey cloth daily.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E7E5E4]">
            <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
              3. Bustling Traditional Markets
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Historic bazaar quarters near the Killa and Central Clock Tower preserve the charm of conversational trade, where merchants greet patrons with fresh tea before weighing textiles or spices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E7E5E4]">
            <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
              4. A Celebrated Culinary Identity
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              From signature charcoal-grilled seekh kebabs and saffron sheermal to fiery Khandeshi shev bhaji and dal baati, the city’s cuisine is among the most sought-after in northern Maharashtra.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E7E5E4]">
            <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
              5. Inclusive Festival Traditions
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Celebrations of Eid, Diwali, and Ganesh Chaturthi spill onto shared streets with communal goodwill, dhol-tasha beats, midnight markets, and reciprocal family visits.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E7E5E4]">
            <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
              6. Resilient Grassroots Creativity
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              The city gained international renown for its DIY parody cinema ("Mollywood"), proving that modest working-class communities can produce original art, humor, and self-reliance.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Navigation Call to Action */}
      <div className="pt-8 border-t border-[#E7E5E4] flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 className="font-serif text-lg font-bold text-[#1C1917]">
            Ready to explore further?
          </h4>
          <p className="text-xs text-[#78716C]">
            View historical landmarks or dive into our 10 in-depth local blog essays.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onNavigate('places');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 text-xs font-semibold text-[#1C1917] border border-[#D6D3D1] hover:border-[#1C1917] rounded-md transition-colors cursor-pointer"
          >
            Explore Places
          </button>
          <button
            onClick={() => {
              onNavigate('blogs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#8C4325] hover:bg-[#A35230] rounded-md transition-colors cursor-pointer"
          >
            Read Our Blogs
          </button>
        </div>
      </div>
    </div>
  );
};
