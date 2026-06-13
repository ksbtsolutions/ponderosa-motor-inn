import { scenes } from '../components/scenes.js';

// NOTE ON IMAGES:
// External image URLs are proxied through /api/img to bypass hotlink protection.
// The `fallback` field is an SVG scene from scenes.js — shown if the photo fails.
// To use real photos: place JPGs in /public/images/ and set url to e.g. '/images/property.jpg'

export const propertyPhotos = [
  {
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/75/b4/bf/caption.jpg?w=1200&h=800&s=1',
    fallback: scenes.property,
    label: 'Ponderosa Motor Inn — Golden, BC',
  },
  {
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/fd/4f/aa/photo1jpg.jpg?w=1200&h=800&s=1',
    fallback: scenes.room,
    label: 'Guest Room',
  },
  {
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/75/b4/c1/caption.jpg?w=1200&h=800&s=1',
    fallback: scenes.property,
    label: 'Property',
  },
  {
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/71/27/d1/this-is-the-breakfast.jpg?w=1200&h=800&s=1',
    fallback: scenes.room,
    label: 'Complimentary Breakfast',
  },
];

export const goldenImages = [
  { url: 'https://www.tourismgolden.com/sites/default/files/Golden-BC-scenic-Kicking-Horse-Eagles-Eye-sunset%20credit%20Best.jpg', fallback: scenes.mountains, label: "Eagle's Eye — Kicking Horse Resort", category: 'Scenic' },
  { url: 'https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2024-02/Golden-Skybridge-suspension-bridge-canyon-BC.jpg', fallback: scenes.skybridge, label: 'Golden Skybridge', category: 'Attractions' },
  { url: 'https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2022-11/Kicking-Horse-Mountain-Resort-ski-Golden-BC-winter.jpg', fallback: scenes.ski, label: 'Kicking Horse Mountain Resort', category: 'Skiing' },
  { url: 'https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2022-11/Whitewater-Rafting-Golden-BC-Kicking-Horse-River.jpg', fallback: scenes.rafting, label: 'Whitewater Rafting', category: 'Rafting' },
  { url: 'https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2022-11/Mountain-Biking-Golden-BC-Moonraker-trails.jpg', fallback: scenes.biking, label: 'Mountain Biking — Moonraker Trails', category: 'Biking' },
  { url: 'https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2022-11/Hiking-Golden-BC-Yoho-National-Park-Emerald-Lake.jpg', fallback: scenes.emeraldLake, label: 'Emerald Lake — Yoho National Park', category: 'Parks' },
  { url: 'https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2023-03/Golden-BC-Kicking-Horse-Pedestrian-Bridge-timber.jpg', fallback: scenes.skybridge, label: 'Kicking Horse Pedestrian Bridge', category: 'Attractions' },
  { url: 'https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2022-11/Wildlife-Watching-Golden-BC-bear-Columbia-Wetlands.jpg', fallback: scenes.wildlife, label: 'Wildlife — Columbia Wetlands', category: 'Wildlife' },
];

export const rooms = [
  { id:'standard', tag:'Most Popular', title:'Standard Room', desc:"Queen or king bed, flat-screen TV, en-suite bathroom, and everything you need for a perfect night's rest after a day in the mountains.", features:['Queen or King Bed','Flat-Screen TV','En-Suite Bathroom','Free Wi-Fi','Coffee Maker','Air Conditioning'], icon:'🛏️' },
  { id:'double', tag:'Great Value', title:'Double Queen Room', desc:'Two queen beds — ideal for families or groups travelling together. Spacious, clean, and exactly what you need.', features:['Two Queen Beds','Flat-Screen TV','En-Suite Bathroom','Free Wi-Fi','Mini Fridge','Extra Linens'], icon:'🛏️' },
  { id:'family', tag:'Families', title:'Family Suite', desc:'Separate sleeping areas and extra beds give the whole family room to spread out after a day on the trails.', features:['King Bed + Bunk Beds','Sitting Area','Two TVs','En-Suite Bathroom','Free Wi-Fi','Mini Fridge & Microwave'], icon:'👨‍👩‍👧‍👦' },
  { id:'kitchen', tag:'Extended Stay', title:'Kitchen Unit', desc:'Full kitchenette, dining area, and living space — everything for a longer stay without the restaurant bills.', features:['Full Kitchenette','Dining Area','King or Queen Bed','Living Room','Free Wi-Fi','Dishes & Cookware'], icon:'🍳' },
  { id:'accessible', tag:'Accessibility', title:'Accessible Room', desc:'Fully accessible with roll-in showers, grab bars, and wide doorways throughout.', features:['Roll-In Shower','Grab Bars','Wide Doorways','Lowered Fixtures','Free Wi-Fi','Ground Floor Access'], icon:'♿' },
  { id:'petfriendly', tag:'Pet Friendly', title:'Pet-Friendly Room', desc:'Bring the whole family — fur and all. Designated pet rooms with easy exterior access for walks.', features:['Pet Welcome','Ground Floor','Exterior Access','Queen Bed','Hard Floors','Pet Fee Applies'], icon:'🐾' },
];

export const activities = [
  { icon:'⛷️', name:'Ski Kicking Horse', season:'Winter', desc:"One of Canada's premier resorts — 2,800m vertical, legendary powder, terrain for every level.", link:'https://www.kickinghorseresort.com', img:'https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2022-11/Kicking-Horse-Mountain-Resort-ski-Golden-BC-winter.jpg', fallback: scenes.ski },
  { icon:'🌉', name:'Golden Skybridge', season:'Summer / Fall', desc:"Walk 426 feet above a canyon on Canada's highest suspension bridges. Plus zipline, mountain coaster, and canyon swing.", link:'https://goldenskybridge.com', img:'https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2024-02/Golden-Skybridge-suspension-bridge-canyon-BC.jpg', fallback: scenes.skybridge },
  { icon:'🛶', name:'Whitewater Rafting', season:'Summer', desc:'The Kicking Horse River runs right through town — Class III–IV rapids and guided tours for all experience levels.', img:'https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2022-11/Whitewater-Rafting-Golden-BC-Kicking-Horse-River.jpg', fallback: scenes.rafting },
  { icon:'🚵', name:'Mountain Biking', season:'Summer', desc:"Golden's Moonraker Trails are world-class, drawing riders from across North America every summer.", img:'https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2022-11/Mountain-Biking-Golden-BC-Moonraker-trails.jpg', fallback: scenes.biking },
  { icon:'🏕️', name:'Hiking & Backpacking', season:'Summer / Fall', desc:'Hundreds of trails across six national parks — Emerald Lake, Takakkaw Falls, Asulkan Valley, and more.', img:'https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2022-11/Hiking-Golden-BC-Yoho-National-Park-Emerald-Lake.jpg', fallback: scenes.emeraldLake },
  { icon:'🦅', name:'Wildlife Watching', season:'Year Round', desc:"Bears, elk, eagles, wolves. The Columbia Wetlands is one of BC's richest wildlife corridors.", img:'https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2022-11/Wildlife-Watching-Golden-BC-bear-Columbia-Wetlands.jpg', fallback: scenes.wildlife },
  { icon:'⛳', name:'Golf', season:'Summer', desc:"Championship mountain golf with views that make every round unforgettable. Golden Golf Club is minutes away." },
  { icon:'🧗', name:'Rock Climbing', season:'Summer / Fall', desc:'Sport and trad climbing from beginner crags to multi-pitch routes, and the Via Ferrata at Kicking Horse.' },
  { icon:'🎿', name:'Nordic Skiing', season:'Winter', desc:'Groomed cross-country trails and endless backcountry skiing for those who prefer the quiet mountain side.' },
  { icon:'🪂', name:'Paragliding', season:'Summer', desc:'Tandem flights from Mount 7 with Altitude Adventures — soar over the Rocky Mountains.' },
];

export const parks = [
  { name:'Yoho National Park', dist:'15 min', highlights:['Takakkaw Falls','Emerald Lake','Burgess Shale','Wapta Falls'], desc:"The word 'Yoho' is a Cree expression of awe — once you see Takakkaw Falls or Emerald Lake, you'll understand why." },
  { name:'Glacier National Park', dist:'45 min', highlights:['Rogers Pass','400+ Glaciers','Illecillewaet Trail','Historic Snowsheds'], desc:'Over 400 glaciers and the famous Rogers Pass — a National Historic Site and one of Canada\'s great mountain passes.' },
  { name:'Kootenay National Park', dist:'45 min', highlights:['Radium Hot Springs','Paint Pots','Marble Canyon','Vermilion River'], desc:'Soak in the Radium Hot Springs, explore ochre-red Paint Pots, and hike through dramatic river canyons.' },
  { name:'Banff National Park', dist:'1.5 hrs', highlights:['Lake Louise','Moraine Lake','Icefields Pkwy','Banff Townsite'], desc:"Canada's most iconic national park. Lake Louise and Moraine Lake alone are worth the drive." },
  { name:'Mt. Revelstoke Park', dist:'1.5 hrs', highlights:['Summit Road','Alpine Meadows','Giant Cedars','Skunk Cabbage Trail'], desc:'Drive to the summit for panoramic alpine views, or walk among ancient old-growth cedar forests below.' },
  { name:'Jasper National Park', dist:'3 hrs', highlights:['Athabasca Glacier','Dark Sky Preserve','Maligne Lake','Icefields Pkwy'], desc:"The Icefields Parkway — the most beautiful road in Canada — connects Golden to Jasper. Plan a full day." },
];

export const packages = [
  { id:'ski', icon:'⛷️', title:'Ski Escape', season:'Winter', desc:'Hit the slopes at Kicking Horse Mountain Resort and come back to a warm room. Perfect for a weekend ski getaway from Calgary or Vancouver.', includes:['2+ nights accommodation','Ski lift ticket discounts','Early check-in for ski days','Gear storage on site'] },
  { id:'adventure', icon:'🏔️', title:'Summer Adventure', season:'Summer', desc:"Hiking, biking, rafting, and the Skybridge — pack it all in. We'll help you plan your days.", includes:['3+ nights accommodation','Trail map & local guide book','BBQ area access','Late checkout on departure day'] },
  { id:'golf', icon:'⛳', title:'Golf Getaway', season:'Summer', desc:'Tee off on championship mountain courses with views that make every round memorable.', includes:['2+ nights accommodation','Tee time priority booking','Golf cart discounts','Complimentary breakfast'] },
  { id:'parks', icon:'🦌', title:'Parks Explorer', season:'Year Round', desc:'Use Ponderosa as your basecamp and explore all six national parks within reach of Golden.', includes:['4+ nights accommodation','Parks pass information','Curated day-trip itineraries','Packed lunch cooler rental'] },
];

export const reviews = [
  { name:'Ski Weekend Guest', date:'Winter 2023', stars:5, platform:'TripAdvisor', text:"Stayed whilst skiing at Kicking Horse — only $90 inc. tax for a massive, very clean room with friendly service. Great simple breakfast, hot tub, and for 2 people you really couldn't do better. The bed was the most comfortable I've ever slept on in a motel!", highlight:'Perfect ski basecamp' },
  { name:'Road Tripper', date:'Summer 2024', stars:4, platform:'TripAdvisor', text:"Nicole was very helpful and eager to give a fair price when I asked for two rooms. It was clean! We enjoyed our flat screen TV, coffee maker and comfy beds. Remember this is a Budget Motel so cleanliness really matters — and it delivered. We WILL return.", highlight:'Great value, helpful staff' },
  { name:'Family Traveller', date:'Fall 2023', stars:4, platform:'Booking.com', text:"We arrived after a 12-hour journey with 2 children. Debora and Thomas were very welcoming and provided us with a room with 3 double beds — exactly what we needed.", highlight:'Welcoming to families' },
  { name:'Late Night Arrival', date:'Summer 2022', stars:5, platform:'TripAdvisor', text:"Found the Ponderosa at nearly 1 AM during high tourist season. A sleepy gentleman cheerfully checked me in, explained the Wi-Fi and breakfast times. Kindness like that at 1 AM is worth writing about.", highlight:'24/7 genuine hospitality' },
  { name:'Verified Guest', date:'Spring 2024', stars:4, platform:'Booking.com', text:"Very nice experience for a low-budget hotel. Perfect location, very helpful staff, light breakfast included, free Wi-Fi. Really wonderful base for one night.", highlight:'Ideal location' },
  { name:'RV Traveller', date:'Summer 2023', stars:4, platform:'Booking.com', text:"Staff were very accommodating for our RV in the carpark. Average well-kept rooms, clean parking area, and able to sit outside our room and relax with morning coffee.", highlight:'RV & trailer friendly' },
];

export const travelLinks = [
  { name:'TripAdvisor', url:'https://www.tripadvisor.com/Hotel_Review-g181785-d182382-Reviews-Ponderosa_Motor_Inn-Golden_Kootenay_Rockies_British_Columbia.html', color:'#00aa6c', desc:'192 reviews' },
  { name:'Booking.com', url:'https://www.booking.com/hotel/ca/golden-1206-transcanada-highway.html', color:'#003580', desc:'1,756 reviews' },
  { name:'Expedia', url:'https://www.expedia.ca/Golden-Hotels-Ponderosa-Motor-Inn.h31718.Hotel-Information', color:'#ffcc00', textColor:'#000', desc:'Expedia deals' },
  { name:'Hotels.com', url:'https://ca.hotels.com/ho83499/', color:'#d4222a', desc:'Hotels.com' },
  { name:'KAYAK', url:'https://www.ca.kayak.com/Golden-Hotels-Ponderosa-Motor-Inn.642241.ksp', color:'#FF690F', desc:'1,400+ reviews' },
];
