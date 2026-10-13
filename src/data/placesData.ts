import { IMAGES } from '../assets/images';

export interface PlaceItem {
  id: string;
  name: string;
  locationCategory: 'in_city' | 'nearby';
  locationLabel: string;
  distance: string;
  image: string;
  description: string;
  whyVisit: string;
  bestTime: string;
  practicalTips: string;
}

export const PLACES_DATA: PlaceItem[] = [
  {
    id: 'malegaon-fort',
    name: 'Malegaon Fort (Naroshankar Fort)',
    locationCategory: 'in_city',
    locationLabel: 'Located in Malegaon',
    distance: 'Within city limits (North bank of Mosam River)',
    image: IMAGES.fort,
    description: 'Constructed around 1740 by Naro Shankar Rajebahadur, a general under the Peshwas, this stone fort was engineered to guard the trade routes across the Deccan. It features solid black basalt stone ramparts, historic watchtowers, and arched gateways overlooking the Mosam River. During the Anglo-Maratha war of 1818, it was the site of a historic month-long siege before coming under British control.',
    whyVisit: 'It is the most significant historical monument in Malegaon, offering a direct tactile connection to 18th-century Maratha military architecture and scenic views over the riverbank.',
    bestTime: 'Morning or late afternoon (October to March)',
    practicalTips: 'Wear comfortable walking footwear; the stone steps and river-facing bastions offer excellent quiet photography spots.'
  },
  {
    id: 'mosam-girna-confluence',
    name: 'Mosam & Girna River Confluence',
    locationCategory: 'in_city',
    locationLabel: 'Located in Malegaon',
    distance: 'Within city limits (South-eastern river boundary)',
    image: IMAGES.hero,
    description: 'The natural meeting point of the Mosam River and the larger Girna River forms a peaceful geographic boundary for the city. Stone ghats and open sandy banks provide a natural respite from the industrial bustle of the town. During the monsoon and winter, the wide riverbed attracts native water birds and fishermen with traditional cast nets.',
    whyVisit: 'Offers a tranquil, open-air perspective of Malegaon’s geography, where you can watch the sunrise reflect against the calm water and observe traditional riverside life.',
    bestTime: 'Early morning (6:00 AM – 8:30 AM)',
    practicalTips: 'Visit at dawn for peaceful water reflections and to see local morning life before city temperatures rise.'
  },
  {
    id: 'shahi-bazaar-textile-quarter',
    name: 'Shahi Bazaar & Textile Quarter',
    locationCategory: 'in_city',
    locationLabel: 'Located in Malegaon',
    distance: 'Central Malegaon (Islampura & Nayapura areas)',
    image: IMAGES.market,
    description: 'The vibrant commercial core of old Malegaon consists of narrow, energetic bazaar lanes lined with textile merchants, tailors, spice vendors, and brass artisans. Here, you can witness the bustling logistics of cotton yarn transportation and observe small, independent powerloom units operating in real time. In the evening, the area transforms into a vibrant street market filled with food stalls and tea houses.',
    whyVisit: 'Essential for understanding the authentic everyday pulse, industrious rhythm, and friendly trade culture that sustains thousands of local families.',
    bestTime: 'Evenings from 5:00 PM to 9:00 PM',
    practicalTips: 'Best explored on foot; sample fresh bakery treats and local cardamon chai while browsing woven cotton fabrics.'
  },
  {
    id: 'central-clock-tower',
    name: 'Malegaon Clock Tower & Old City Chowk',
    locationCategory: 'in_city',
    locationLabel: 'Located in Malegaon',
    distance: 'City Center (Intersection of heritage bazaar roads)',
    image: IMAGES.market,
    description: 'Standing at the prominent intersection of the historic old town, this civic clock tower serves as an unmistakable urban landmark and traditional meeting point for residents. Surrounding the chowk are historic shopfronts that have passed down through generations, selling traditional footwear, tailored garments, and seasonal fruits. It is one of the liveliest public squares in northern Maharashtra.',
    whyVisit: 'It is the quintessential civic crossroad of Malegaon, providing immediate access to heritage bakeries, fabric wholesalers, and classic street-side chai stalls.',
    bestTime: 'Mid-morning or post-sunset',
    practicalTips: 'A great starting point for self-guided heritage walks through the adjacent residential Mohallas.'
  },
  {
    id: 'chandwad-fort-renuka-temple',
    name: 'Chandwad Fort & Renuka Devi Temple',
    locationCategory: 'nearby',
    locationLabel: 'Nearby Attraction',
    distance: 'Approx. 35 km south of Malegaon',
    image: IMAGES.fort,
    description: 'Located a short drive south along the highway, the historic town of Chandwad was developed under Queen Ahilyabai Holkar of the Maratha Empire. The town is crowned by Chandragad (Chandwad Fort) and the famous Renuka Devi Temple nestled along a scenic hill ridge. The town also preserves the elegant wooden architectural carvings of Ahilyabai’s Rangmahal palace.',
    whyVisit: 'Provides an enriching cultural excursion into Maratha history, featuring breathtaking hilltop views, stone architecture, and deep spiritual heritage.',
    bestTime: 'Morning or late afternoon (October to February)',
    practicalTips: 'Easily accessible by public state transport bus or private car in roughly 40 minutes from Malegaon.'
  },
  {
    id: 'galna-fort',
    name: 'Galna Fort (Hill Fortress)',
    locationCategory: 'nearby',
    locationLabel: 'Nearby Attraction',
    distance: 'Approx. 25 km north of Malegaon',
    image: IMAGES.fort,
    description: 'Galna Fort is a rugged, historic hill fortress perched on the northern boundary between Khandesh and the Deccan. Historically contested between the Bahmani rulers, the Nizams of Ahmednagar, the Mughals, and the Marathas, the fort preserves ancient stone gateways, Persian stone inscriptions, and natural rock-cut water tanks.',
    whyVisit: 'A rewarding destination for history lovers and trekking enthusiasts seeking solitude, raw ancient stonework, and 360-degree views across the countryside.',
    bestTime: 'Post-monsoon and winter months (November to February)',
    practicalTips: 'Carry sufficient drinking water and sun protection as there are no commercial shops on the summit plateau.'
  },
  {
    id: 'ankai-tankai-forts',
    name: 'Ankai-Tankai Caves & Forts',
    locationCategory: 'nearby',
    locationLabel: 'Nearby Attraction',
    distance: 'Approx. 45 km south-east of Malegaon (Near Manmad)',
    image: IMAGES.fort,
    description: 'These twin hillforts rise dramatically with sheer vertical basalt cliffs that command the ancient trade routes through the Ankai pass. Carved directly into the rock face are remarkably preserved medieval Jain and Hindu rock-cut cave temples dating from the Yadava period. The summit features ancient palace remnants, stone tanks, and extensive fortification walls.',
    whyVisit: 'Offers a rare blend of ancient rock-cut art, thrilling hill trekking, and sweeping panoramic views of the Khandesh plains.',
    bestTime: 'Winter months (November to January)',
    practicalTips: 'Wear sturdy trekking shoes with good grip; the carved rock steps can be steep.'
  },
  {
    id: 'saptashrungi-devi-gad',
    name: 'Saptashrungi Devi Gad (Vani)',
    locationCategory: 'nearby',
    locationLabel: 'Nearby Attraction',
    distance: 'Approx. 75 km west of Malegaon',
    image: IMAGES.hero,
    description: 'Perched high on a cliff surrounded by seven mountain peaks (Sapta-shring) near Vani, this is one of Maharashtra’s revered "three-and-a-half" Shakti Peethas. The idol of the Goddess is carved directly into the sheer cliffside rock face. The site attracts pilgrims from across Maharashtra and Gujarat, supported by modern ropeway and mountain road access.',
    whyVisit: 'One of the most spiritually revered pilgrimage destinations in Western India, set against majestic, dramatic mountain cliffs.',
    bestTime: 'Throughout the year; especially during Navratri and Chaitra festivals',
    practicalTips: 'Funicular / ropeway facilities are available for senior citizens and families who prefer not to climb the stairs.'
  }
];
