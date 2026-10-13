import { IMAGES } from '../assets/images';

export interface CultureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface FoodItem {
  id: string;
  name: string;
  category: 'Local Specialty' | 'Khandeshi Classic' | 'Street Food' | 'Bakery & Sweets';
  description: string;
  image: string;
  whereToFind: string;
}

export const CULTURE_ITEMS: CultureItem[] = [
  {
    id: 'festivals',
    title: 'Festivals of Unity and Grandeur',
    tagline: 'Eid, Diwali & Ganeshotsav celebrated with open hearts',
    description: 'Festivals in Malegaon are marked by open doors, shared hospitality, and vibrant public gatherings. During Ramadan and Eid, the bazaars stay illuminated past midnight with festive food stalls, while Ganesh Chaturthi brings energetic dhol-tasha drum processions and artistic pandals. Diwali turns the river ghats and residential verandas golden with clay diyas.',
    highlights: [
      'Ramadan night markets with festive desserts and clothing sales until dawn',
      'Traditional Maharashtrian Dhol-Tasha troupes during Ganesh Utsav',
      'Shared sweets and community visits between neighbors of all faiths'
    ],
    image: IMAGES.market
  },
  {
    id: 'textile-tradition',
    title: 'Textile Heritage and Attire',
    tagline: 'Centuries of weaving expertise woven into everyday dress',
    description: 'Malegaon’s clothing traditions are intrinsically connected to its loom economy. Handloom and powerloom cottons dominate everyday attire. Men frequently wear comfortable hand-stitched kurta-pajamas, dhotis, or lungis suited for working in warm climates, while women wear traditional nine-yard and six-yard Maharashtrian Nauvari or Paithani-bordered sarees, alongside tailored salwar suits.',
    highlights: [
      'Mastery in fine cotton grey cloth and customized blended fabrics',
      'Local tailoring lanes specializing in custom ethnic wear within hours',
      'Generational knowledge of yarn spinning, thread sizing, and warp handling'
    ],
    image: IMAGES.textile
  },
  {
    id: 'markets-and-bazaars',
    title: 'Living Bazaars and Trade Lanes',
    tagline: 'Traditional commercial lanes with generational merchants',
    description: 'The markets of Malegaon reflect historic trade patterns. Different quarters of the city specialize in specific crafts: one alley dedicated to fragrant spices and roasted grains, another to brass utensils, and vast sections dedicated to cloth merchants. Commerce here is conversational—merchants offer water and tea before discussing prices.',
    highlights: [
      'Bustling evening markets that peak as the daily loom shifts conclude',
      'Spice vendors grinding signature Khandeshi Kala Masala on traditional stone mills',
      'Intimate scale where pedestrians and bicycles navigate narrow heritage streets'
    ],
    image: IMAGES.market
  },
  {
    id: 'community-arts',
    title: 'Grassroots Arts & “Mollywood” Cinema',
    tagline: 'Resourceful filmmaking, Urdu mushairas, and folk traditions',
    description: 'Malegaon is celebrated internationally for its spirited grassroots creativity. In the late 1990s and 2000s, local residents created "Mollywood"—a homegrown film movement where witty parodies of Bollywood and Hollywood hits were written, directed, and edited by local loom workers on modest equipment. The city also sustains a deep reverence for Urdu poetry sessions (Mushairas) and traditional wrestling (Akhadas).',
    highlights: [
      'Globally documented DIY spoof cinema created by local video artists',
      'Evening poetry gatherings (Mushairas) drawing appreciative local crowds',
      'Traditional Akhada wrestling pits along the riverbanks'
    ],
    image: IMAGES.fort
  }
];

export const FOOD_ITEMS: FoodItem[] = [
  {
    id: 'malegaon-seekh-kebabs',
    name: 'Malegaon Seekh Kebabs',
    category: 'Local Specialty',
    description: 'Finely minced meat seasoned with local garlic, green chilies, coriander, and freshly roasted cumin, charcoal-grilled on long skewers. Served smoking hot with lemon wedges, raw sliced onion rings, and fiery green mint chutney.',
    image: IMAGES.food,
    whereToFind: 'Old Agra Road & food stalls near Malegaon Fort'
  },
  {
    id: 'sheermal',
    name: 'Saffron Sheermal',
    category: 'Bakery & Sweets',
    description: 'A traditional mildly sweet, rich flatbread infused with saffron milk and clarified butter, baked in clay ovens. Pairs deliciously with spicy curries or skewered kebabs.',
    image: IMAGES.food,
    whereToFind: 'Heritage wood-fired bakeries across Islampura and Nayapura'
  },
  {
    id: 'khandeshi-shev-bhaji',
    name: 'Khandeshi Shev Bhaji',
    category: 'Khandeshi Classic',
    description: 'Crispy besan (chickpea flour) gathiya sev served in a deeply aromatic, dark-roasted curry made from charred coconut, dry spices, and local Kala Masala. Accompanied by jowar bhakri.',
    image: IMAGES.food,
    whereToFind: 'Traditional Maharashtrian dining houses & highway dhabas'
  },
  {
    id: 'dal-baati-khandesh',
    name: 'Khandeshi Dal Baati',
    category: 'Khandeshi Classic',
    description: 'Hand-rolled wheat dough baatis slowly roasted over gentle embers, crushed by hand, and bathed in golden ghee alongside a thick, spicy yellow lentil curry.',
    image: IMAGES.food,
    whereToFind: 'Local family restaurants and festive banquet feasts'
  },
  {
    id: 'mutton-khurdi',
    name: 'Mutton Khurdi (Aromatic Broth)',
    category: 'Local Specialty',
    description: 'A soothing, golden meat broth lightly simmered with black peppercorns, crushed ginger, cardamom, and fresh coriander. Renowned as a comforting breakfast dish during winter.',
    image: IMAGES.food,
    whereToFind: 'Early morning breakfast eateries near the central chowk'
  },
  {
    id: 'irani-chai-bakery',
    name: 'Kadak Chai & Nankhatai',
    category: 'Bakery & Sweets',
    description: 'Strong, creamy cardamom-simmered milk tea served in classic transparent glass cups alongside crumbly, ghee-rich nankhatai cookies and crispy wood-fired rusks.',
    image: IMAGES.market,
    whereToFind: 'Corner tea stalls and century-old bakeries throughout the city'
  }
];
