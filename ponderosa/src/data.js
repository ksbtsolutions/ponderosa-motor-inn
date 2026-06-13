export const rooms = [
  {
    id: 'standard',
    tag: 'Most Popular',
    title: 'Standard Room',
    desc: 'Queen or king bed, flat-screen TV, en-suite bathroom, and everything you need for a perfect night\'s rest after a day in the mountains.',
    features: ['Queen or King Bed', 'Flat-Screen TV', 'En-Suite Bathroom', 'Free Wi-Fi', 'Coffee Maker', 'Air Conditioning'],
    icon: '🛏️',
  },
  {
    id: 'double',
    tag: 'Great Value',
    title: 'Double Queen Room',
    desc: 'Two queen beds — ideal for families or groups travelling together. Spacious, clean, and exactly what you need after a long day outdoors.',
    features: ['Two Queen Beds', 'Flat-Screen TV', 'En-Suite Bathroom', 'Free Wi-Fi', 'Mini Fridge', 'Extra Towels & Linens'],
    icon: '🛏️',
  },
  {
    id: 'family',
    tag: 'Families',
    title: 'Family Suite',
    desc: 'Separate sleeping areas and extra beds give the whole family room to spread out. Includes a sitting area so everyone has their own space.',
    features: ['King Bed + Bunk Beds', 'Sitting Area', 'Two TVs', 'En-Suite Bathroom', 'Free Wi-Fi', 'Mini Fridge & Microwave'],
    icon: '👨‍👩‍👧‍👦',
  },
  {
    id: 'kitchen',
    tag: 'Extended Stay',
    title: 'Kitchen Unit',
    desc: 'Full kitchenette, a proper dining area, and additional living space — everything for a longer stay in the mountains without the restaurant bills.',
    features: ['Full Kitchenette', 'Dining Area', 'King or Queen Bed', 'Living Room', 'Free Wi-Fi', 'Dishes & Cookware'],
    icon: '🍳',
  },
  {
    id: 'accessible',
    tag: 'Accessibility',
    title: 'Accessible Room',
    desc: 'Fully accessible rooms designed for comfort and ease, with roll-in showers, grab bars, and wide doorways throughout.',
    features: ['Roll-In Shower', 'Grab Bars', 'Wide Doorways', 'Lowered Fixtures', 'Free Wi-Fi', 'Ground Floor Access'],
    icon: '♿',
  },
  {
    id: 'petfriendly',
    tag: 'Pet Friendly',
    title: 'Pet-Friendly Room',
    desc: 'Bring the whole family — fur and all. Designated pet-friendly rooms with easy exterior access so walks are a breeze.',
    features: ['Pet Welcome', 'Ground Floor', 'Exterior Access', 'Queen Bed', 'Hard Floors', 'Pet Fee Applies'],
    icon: '🐾',
  },
];

export const activities = [
  {
    icon: '⛷️',
    name: 'Ski Kicking Horse',
    season: 'Winter',
    desc: 'One of Canada\'s premier ski resorts sits right outside Golden — massive vertical, legendary powder, and terrain for all levels.',
    link: 'https://www.kickinghorseresort.com',
  },
  {
    icon: '🚵',
    name: 'Mountain Biking',
    season: 'Summer',
    desc: 'Golden is a world-class mountain bike destination. The network of trails here draws riders from across North America.',
  },
  {
    icon: '🛶',
    name: 'Whitewater Rafting',
    season: 'Summer',
    desc: 'The Kicking Horse River runs right through town, offering thrilling Class III–IV rapids and guided tours for all experience levels.',
  },
  {
    icon: '🏕️',
    name: 'Hiking & Backcountry',
    season: 'Summer / Fall',
    desc: 'Hundreds of trails across six national parks. Everything from paved lakeside strolls to multi-day alpine routes.',
  },
  {
    icon: '⛳',
    name: 'Golf',
    season: 'Summer',
    desc: 'Championship mountain golf courses with views so dramatic you\'ll forget to count your strokes.',
  },
  {
    icon: '🦅',
    name: 'Wildlife Viewing',
    season: 'Year Round',
    desc: 'Bears, elk, eagles, osprey — Golden sits in one of BC\'s most active wildlife corridors.',
  },
  {
    icon: '🧗',
    name: 'Rock Climbing',
    season: 'Summer / Fall',
    desc: 'Sport and trad climbing routes throughout the area, from beginner crags to serious multi-pitch routes.',
  },
  {
    icon: '🎿',
    name: 'Cross-Country Skiing',
    season: 'Winter',
    desc: 'Groomed Nordic trails at Kicking Horse and throughout the backcountry for a quieter winter adventure.',
  },
];

export const parks = [
  {
    name: 'Yoho National Park',
    dist: '15 min',
    highlights: ['Takakkaw Falls', 'Emerald Lake', 'Burgess Shale', 'Natural Bridge'],
    desc: 'The word "Yoho" is a Cree expression of awe — and once you see Takakkaw Falls or Emerald Lake, you\'ll understand why.',
  },
  {
    name: 'Glacier National Park',
    dist: '45 min',
    highlights: ['Rogers Pass', '400+ Glaciers', 'Illecillewaet Trail', 'Historic Snowshed'],
    desc: 'Over 400 glaciers and the famous Rogers Pass — a National Historic Site and one of Canada\'s great mountain passes.',
  },
  {
    name: 'Kootenay National Park',
    dist: '45 min',
    highlights: ['Radium Hot Springs', 'Paint Pots', 'Marble Canyon', 'Vermilion River'],
    desc: 'Soak in the famous Radium Hot Springs, explore ochre-red Paint Pots, and hike through dramatic river canyons.',
  },
  {
    name: 'Banff National Park',
    dist: '1.5 hrs',
    highlights: ['Lake Louise', 'Moraine Lake', 'Icefields Parkway', 'Banff Townsite'],
    desc: 'Canada\'s most iconic national park. Lake Louise and Moraine Lake alone are worth the drive.',
  },
  {
    name: 'Mt. Revelstoke Park',
    dist: '1.5 hrs',
    highlights: ['Summit Road', 'Alpine Meadows', 'Giant Cedars', 'Skunk Cabbage Trail'],
    desc: 'Drive to the summit for panoramic alpine meadow views, or walk among old-growth cedar forests at the valley floor.',
  },
  {
    name: 'Jasper National Park',
    dist: '3 hrs',
    highlights: ['Athabasca Glacier', 'Icefields Parkway', 'Dark Sky Preserve', 'Maligne Lake'],
    desc: 'The Icefields Parkway — the most beautiful road in Canada — connects Golden to Jasper. Plan a full day.',
  },
];

export const packages = [
  {
    id: 'ski',
    icon: '⛷️',
    title: 'Ski Escape',
    season: 'Winter',
    desc: 'Hit the slopes at Kicking Horse Mountain Resort and come back to a warm room. Perfect for a weekend ski getaway.',
    includes: ['2+ nights accommodation', 'Ski lift ticket discounts', 'Early check-in for ski days', 'Gear storage on site'],
  },
  {
    id: 'adventure',
    icon: '🏔️',
    title: 'Summer Adventure',
    season: 'Summer',
    desc: 'Hiking, biking, and rafting — pack it all in. We\'ll help you plan your days and keep your gear safe overnight.',
    includes: ['3+ nights accommodation', 'Trail map & local guide book', 'BBQ area access', 'Late checkout on departure day'],
  },
  {
    id: 'golf',
    icon: '⛳',
    title: 'Golf Getaway',
    season: 'Summer',
    desc: 'Tee off on championship mountain courses with views that make every round memorable. ',
    includes: ['2+ nights accommodation', 'Tee time priority booking', 'Golf cart discounts', 'Complimentary breakfast'],
  },
  {
    id: 'parks',
    icon: '🦌',
    title: 'Parks Explorer',
    season: 'Year Round',
    desc: 'Use Ponderosa as your basecamp and explore all six national parks within reach of Golden.',
    includes: ['4+ nights accommodation', 'Parks pass information', 'Curated day-trip itineraries', 'Packed lunch cooler rental'],
  },
];
