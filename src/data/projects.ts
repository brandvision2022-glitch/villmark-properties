import { Project } from '../types';

export const DEFAULT_IMAGES = {
  heroBanner: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
  serenityTower: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
  lakecrest: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
  floraVista: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'serenity-tower',
    title: 'Serenity Tower',
    subtitle: 'Ultra-Luxury 18-Storied Signature High-Rise Living',
    location: 'Gulshan-2, Dhaka',
    address: 'Plot 14, Road 71, Gulshan-2, Dhaka 1212',
    status: 'Ongoing',
    category: 'Residential',
    imageUrl: DEFAULT_IMAGES.serenityTower,
    fallbackImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    landSizeKatha: '14.5 Katha',
    roadWidthFt: '60 Feet Wide Road',
    totalFloors: 'G + 18 Floors (2 Basements)',
    totalUnits: '17 Exclusive Single-Floor Units',
    unitSizes: '3,850 – 4,450 Sq.Ft',
    handoverDate: 'December 2026',
    description: 'Conceived as an architectural benchmark in Gulshan-2, Serenity Tower blends modern sculptural facades with expansive private gardens, sound-insulating acoustic double glazing, and an entire sky lounge dedicated to health and social leisure.',
    highlights: [
      'Single Apartment per Floor for Maximum Privacy',
      'Double-height Entrance Lobby with 24/7 Butler Service',
      'Temperature-Controlled Rooftop Lap Pool & Hydrotherapy Spa',
      'Dual Schindler High-Speed Passenger Lifts + Stretcher Lift',
      'Full 100% Dual Power Backup with European Soundproof Generators',
      'Earthquake Resistant Structural Design following BNBC 2020 & ACI Codes'
    ],
    architect: 'Architect Mustapha Khalid Palash (Vistaara)',
    structuralEngineer: 'Engr. Shahedul Islam & Associates',
    floorPlans: [
      {
        id: 'serenity-3bhk-type-a',
        name: 'Type A - 3 Bedroom Regal Suite',
        type: '3-Bedroom Luxury Apartment',
        grossAreaSft: 3850,
        netCarpetSft: 3180,
        bedrooms: 3,
        bathrooms: 4,
        balconies: 4,
        facing: 'South-East Facing with Gulshan Lake Breeze',
        features: [
          'Grand Master Suite with walk-in Italian dressing gallery and jacuzzi bath',
          'Expansive formal family living room with panoramic floor-to-ceiling glass',
          'European modular kitchen with separate dirty kitchen & store',
          'Dedicated housekeeper suite with detached washroom and utility balcony',
          'Central VRF air conditioning infrastructure & concealed piping'
        ],
        breakdown: [
          { name: 'Formal Living & Dining Room', dimension: "28' 6\" × 18' 4\"", areaSft: 522, category: 'living' },
          { name: 'Family Lounge / Den', dimension: "16' 2\" × 14' 0\"", areaSft: 226, category: 'living' },
          { name: 'Master Bedroom Suite', dimension: "20' 0\" × 16' 8\"", areaSft: 333, category: 'bedroom' },
          { name: 'Master Walk-in Closet & Bath', dimension: "14' 0\" × 11' 6\"", areaSft: 161, category: 'bedroom' },
          { name: 'Bedroom 2 (En-suite Bath)', dimension: "16' 4\" × 15' 0\"", areaSft: 245, category: 'bedroom' },
          { name: 'Bedroom 3 (En-suite Bath)', dimension: "15' 6\" × 14' 2\"", areaSft: 220, category: 'bedroom' },
          { name: 'Gourmet Chef Kitchen', dimension: "15' 0\" × 12' 0\"", areaSft: 180, category: 'service' },
          { name: 'Utility & Maid Quarters + Bath', dimension: "12' 6\" × 8' 6\"", areaSft: 106, category: 'service' },
          { name: 'Wrap-around Corner Verandahs (x4)', dimension: 'Multiple', areaSft: 387, category: 'balcony' },
          { name: 'Circulation & Foyer Entry', dimension: 'Interior gallery', areaSft: 260, category: 'service' }
        ]
      },
      {
        id: 'serenity-3bhk-type-b',
        name: 'Type B - 3 Bedroom Executive Deluxe',
        type: '3-Bedroom Executive Residence',
        grossAreaSft: 3450,
        netCarpetSft: 2840,
        bedrooms: 3,
        bathrooms: 4,
        balconies: 3,
        facing: 'North-East Corner View',
        features: [
          'Seamless open-concept dining and conversation salon',
          'Private foyer vestibule with digital fingerprint bio-metric smart lock',
          'All bedrooms feature cross-ventilation and attached deep verandahs',
          'Pre-installed wiring for high-speed fiber optic and home automation'
        ],
        breakdown: [
          { name: 'Living & Dining Hall', dimension: "26' 0\" × 16' 6\"", areaSft: 429, category: 'living' },
          { name: 'Family Television Lounge', dimension: "14' 6\" × 13' 0\"", areaSft: 188, category: 'living' },
          { name: 'Master Bed with Attached Bath', dimension: "18' 0\" × 15' 0\"", areaSft: 270, category: 'bedroom' },
          { name: 'Bedroom 2 with Attached Bath', dimension: "15' 0\" × 14' 0\"", areaSft: 210, category: 'bedroom' },
          { name: 'Bedroom 3 with Attached Bath', dimension: "14' 6\" × 13' 6\"", areaSft: 195, category: 'bedroom' },
          { name: 'Kitchen & Pantry', dimension: "14' 0\" × 10' 6\"", areaSft: 147, category: 'service' },
          { name: 'Housekeeper Room & Bath', dimension: "10' 0\" × 8' 0\"", areaSft: 80, category: 'service' },
          { name: 'Balconies & Green Terraces (x3)', dimension: 'Generous widths', areaSft: 280, category: 'balcony' }
        ]
      }
    ]
  },
  {
    id: 'lakecrest',
    title: 'Lakecrest',
    subtitle: 'Waterfront Serenity overlooking Banani Lake',
    location: 'Banani Lakefront, Dhaka',
    address: 'Road 11, Block E, Banani Waterfront, Dhaka 1213',
    status: 'Ongoing',
    category: 'Residential',
    imageUrl: DEFAULT_IMAGES.lakecrest,
    fallbackImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    landSizeKatha: '11 Katha',
    roadWidthFt: '50 Feet Lakeside Boulevard',
    totalFloors: 'G + 14 Floors (2 Basements)',
    totalUnits: '14 Exclusive Residences',
    unitSizes: '3,100 – 3,500 Sq.Ft',
    handoverDate: 'June 2027',
    description: 'Positioned right on the tranquil shoreline of Banani Lake, Lakecrest is designed for discerning connoisseurs who seek open horizons, fresh breeze, and minimalist Scandinavian-inspired interiors with teakwood finishes.',
    highlights: [
      'Unobstructed Waterfront Panorama with 180° Lake Views',
      'Private Marina Promenade & Landscaped Pier',
      'Wellness Sanctuary with Steam, Sauna & Yoga Pavilion',
      'Automated Underground Multi-Car Stacking System',
      'Biophilic Green Planters Integrated into Every Floor Facade',
      'Rainwater Harvesting & Solar Energy Integration'
    ],
    architect: 'Studio Terracotta & Urban Form',
    structuralEngineer: 'Dr. Shamim Z. Bosunia Consult Ltd.',
    floorPlans: [
      {
        id: 'lakecrest-3bhk-suite',
        name: 'Lakeview 3-Bedroom Haven',
        type: '3-Bedroom Panoramic Residence',
        grossAreaSft: 3250,
        netCarpetSft: 2680,
        bedrooms: 3,
        bathrooms: 4,
        balconies: 3,
        facing: 'West Lakefront with Sunset Views',
        features: [
          'Full-length glass curtain wall overlooking the serene Banani lake',
          'Spacious master bedroom with lakefront breakfast deck',
          'Imported Greek Thassos marble and Spanish porcelain tiling',
          'Acoustically isolated entertainment zone and private library nook'
        ],
        breakdown: [
          { name: 'Panoramic Lakeview Living Hall', dimension: "27' 0\" × 17' 0\"", areaSft: 459, category: 'living' },
          { name: 'Formal Dining Area', dimension: "16' 0\" × 13' 6\"", areaSft: 216, category: 'living' },
          { name: 'Master Lakeview Suite', dimension: "19' 0\" × 15' 6\"", areaSft: 294, category: 'bedroom' },
          { name: 'Master Dressing Room & Spa Bath', dimension: "13' 0\" × 10' 6\"", areaSft: 136, category: 'bedroom' },
          { name: 'Bedroom 2 (Garden View)', dimension: "16' 0\" × 14' 0\"", areaSft: 224, category: 'bedroom' },
          { name: 'Bedroom 3 (Courtyard View)', dimension: "15' 0\" × 13' 0\"", areaSft: 195, category: 'bedroom' },
          { name: 'State-of-the-art Dry & Wet Kitchen', dimension: "14' 6\" × 11' 0\"", areaSft: 159, category: 'service' },
          { name: 'Maid Quarter & Utility', dimension: "11' 0\" × 8' 0\"", areaSft: 88, category: 'service' },
          { name: 'Lake Breeze Verandahs (x3)', dimension: "6' 6\" depth", areaSft: 310, category: 'balcony' }
        ]
      }
    ]
  },
  {
    id: 'flora-vista',
    title: 'Flora Vista',
    subtitle: 'Botanical Luxury Residences in Diplomatic Baridhara',
    location: 'Baridhara Diplomatic Zone, Dhaka',
    address: 'Park Road, Baridhara Diplomatic Enclave, Dhaka 1212',
    status: 'Upcoming',
    category: 'Residential',
    imageUrl: DEFAULT_IMAGES.floraVista,
    fallbackImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
    landSizeKatha: '18.2 Katha',
    roadWidthFt: '70 Feet Avenue',
    totalFloors: 'G + 15 Floors (3 Basements)',
    totalUnits: '13 Luxury Sky Villas',
    unitSizes: '4,200 – 6,500 Sq.Ft',
    handoverDate: 'September 2027',
    description: 'Set within the secure diplomatic enclave of Baridhara, Flora Vista marries biophilic architecture with diplomatic-level security, heated indoor swimming pool, high ceilings (11.5 ft clear), and private plunge pools for upper duplexes.',
    highlights: [
      'Located in Highest-Security Diplomatic Enclave of Dhaka',
      '11.5 Feet Floor-to-Ceiling Clear Living Volume',
      'Heated Indoor Lap Pool & Rooftop Japanese Zen Rock Garden',
      'Dual Dedicated Parking Slots per Apartment + EV Fast Charger',
      'Integrated Smart-Home Air Quality & HEPA Filtration System',
      'German Schüco Triple-Glazed Thermally Broken Windows'
    ],
    architect: 'DWG Architects International & Enamul Karim Nirjhar',
    structuralEngineer: 'Buro Engineers (Singapore / Dhaka)',
    floorPlans: [
      {
        id: 'flora-3bhk-villa',
        name: 'Type Premier - 3 Bedroom Sky Villa',
        type: '3-Bedroom Diplomatic Sky Residence',
        grossAreaSft: 4200,
        netCarpetSft: 3480,
        bedrooms: 3,
        bathrooms: 4,
        balconies: 4,
        facing: 'North-East Garden Boulevard',
        features: [
          'Ultra-spacious double living salon with botanical terrace',
          'Private elevator lobby directly exiting into your residence foyer',
          'Sub-Zero and Wolf kitchen appliance ready provisions',
          'Primary master bathroom wrapped in book-matched Italian Carrara marble'
        ],
        breakdown: [
          { name: 'Grand Salon & Formal Living', dimension: "30' 0\" × 19' 0\"", areaSft: 570, category: 'living' },
          { name: 'Family Dining & Wine Bar', dimension: "18' 0\" × 15' 0\"", areaSft: 270, category: 'living' },
          { name: 'Master Presidential Suite', dimension: "22' 0\" × 17' 0\"", areaSft: 374, category: 'bedroom' },
          { name: 'Master Dressing Room & Spa Bath', dimension: "15' 0\" × 12' 0\"", areaSft: 180, category: 'bedroom' },
          { name: 'Junior Suite (Attached Bath)', dimension: "18' 0\" × 15' 0\"", areaSft: 270, category: 'bedroom' },
          { name: 'Guest Bedroom (Attached Bath)', dimension: "16' 0\" × 14' 0\"", areaSft: 224, category: 'bedroom' },
          { name: 'Chef Kitchen & Butler Pantry', dimension: "16' 0\" × 12' 0\"", areaSft: 192, category: 'service' },
          { name: 'Staff Quarters (Sleeps 2) + Bath', dimension: "14' 0\" × 9' 0\"", areaSft: 126, category: 'service' },
          { name: 'Private Botanical Sky Terraces (x4)', dimension: 'Wide verandas', areaSft: 460, category: 'balcony' }
        ]
      }
    ]
  },
  {
    id: 'imperial-crest',
    title: 'The Imperial Crest',
    subtitle: 'Timeless Classical Architecture in Dhanmondi',
    location: 'Road 7/A, Dhanmondi, Dhaka',
    address: 'Plot 42, Road 7/A, Dhanmondi R/A, Dhaka 1209',
    status: 'Completed',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    landSizeKatha: '12 Katha',
    roadWidthFt: '40 Feet Quiet Residential Avenue',
    totalFloors: 'G + 13 Floors',
    totalUnits: '12 Ready Handover Residences',
    unitSizes: '3,300 Sq.Ft',
    handoverDate: 'Successfully Handed Over (2024)',
    description: 'A monument of architectural grace in the cultural heart of Dhanmondi. 100% occupied with satisfied high-net-worth families, demonstrating Villamark’s zero-compromise execution.',
    highlights: [
      '100% Handover on Schedule with Title Deeds Completed',
      'Solid Burma Teak Internal Doors and Hand-carved Architraves',
      'Dedicated Community Rooftop Banquet & Barbecue Lawn',
      'Rain-protected Car Drop-off Portico with Water Feature'
    ],
    architect: 'Arch. Rafiq Azam (Shatotto Architecture)',
    structuralEngineer: 'Dr. Jamilur Reza Choudhury Associates',
    floorPlans: [
      {
        id: 'imperial-3bhk-classic',
        name: 'Heritage 3-Bedroom Flat',
        type: '3-Bedroom Luxury Ready Unit',
        grossAreaSft: 3300,
        netCarpetSft: 2750,
        bedrooms: 3,
        bathrooms: 4,
        balconies: 3,
        facing: 'South-West Facing',
        features: [
          'Ready for immediate interior furnishing and occupancy',
          'Expansive balconies overlooking Dhanmondi greenery',
          'Dedicated driver waiting lounge and standby generators'
        ],
        breakdown: [
          { name: 'Formal Living & Dining Room', dimension: "26' 0\" × 17' 0\"", areaSft: 442, category: 'living' },
          { name: 'Family Lounge', dimension: "15' 0\" × 13' 0\"", areaSft: 195, category: 'living' },
          { name: 'Master Bedroom & En-suite', dimension: "19' 0\" × 15' 0\"", areaSft: 285, category: 'bedroom' },
          { name: 'Bedroom 2 & En-suite', dimension: "16' 0\" × 14' 0\"", areaSft: 224, category: 'bedroom' },
          { name: 'Bedroom 3 & En-suite', dimension: "15' 0\" × 13' 0\"", areaSft: 195, category: 'bedroom' },
          { name: 'Kitchen & Utility', dimension: "14' 0\" × 10' 0\"", areaSft: 140, category: 'service' },
          { name: 'Housekeeper Room & Bath', dimension: "10' 0\" × 7' 6\"", areaSft: 75, category: 'service' },
          { name: 'Balconies (x3)', dimension: 'Covered', areaSft: 290, category: 'balcony' }
        ]
      }
    ]
  }
];

export const AMENITIES_DATA = [
  {
    icon: 'Waves',
    title: 'Infinity Sky Pool',
    description: 'Rooftop temperature-controlled infinity swimming pool offering breathtaking panoramic city and skyline horizons.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Seismic & Wind Engineered',
    description: 'Designed adhering to strict BNBC 2020, ACI 318, and international earthquake safety guidelines with highest-grade steel.'
  },
  {
    icon: 'Zap',
    title: '100% Dual Generator Power',
    description: 'European sound-attenuated generators with zero-delay automatic changeover covering all air conditioners, appliances, and lifts.'
  },
  {
    icon: 'Key',
    title: 'Private Concierge & Valet',
    description: 'Double-height grand entrance lobby, 24/7 dedicated concierge desk, biometric access controls, and video intercom.'
  },
  {
    icon: 'Dumbbell',
    title: 'TechnoGym Fitness Center',
    description: 'Fully equipped private gym with steam, dry sauna, locker rooms, and certified personal fitness trainer provisions.'
  },
  {
    icon: 'Car',
    title: 'Smart Automated Parking',
    description: 'Spacious basements with epoxy flooring, EV charging ports, high-ceiling ramp clearance, and dedicated chauffeur lounge.'
  },
  {
    icon: 'Trees',
    title: 'Lush Rooftop Zen Garden',
    description: 'Landscaped rooftop garden with barbecue station, star-gazing lounge, open-air cinema screen, and children’s play area.'
  },
  {
    icon: 'Sparkles',
    title: 'Suvastu-Standard Finishing',
    description: 'Finest imported Italian marbles, Grohe/Kohler sanitary fittings, German hardware, and seasoned Burmese teak woodwork.'
  }
];

export const SUVASTU_VALUES = [
  {
    title: 'Fair & Transparent Sharing',
    desc: 'Guaranteed equitable partnership ratio with transparent FAR calculations, zero hidden deductions, and timely escrow security.'
  },
  {
    title: 'Zero Handover Delay',
    desc: 'Unwavering track record of handing over projects strictly within the contractual timeline, backed by liquidity guarantees.'
  },
  {
    title: 'Supreme Structural Quality',
    desc: 'Heavy-duty 72.5 grade steel, high-performance concrete, deep bored piles, and triple-tier quality inspections by BUET specialists.'
  },
  {
    title: 'Full RAJUK Approval Assurance',
    desc: 'Comprehensive legal due diligence, title verification, setback clearances, and 100% compliant RAJUK / DAP approvals.'
  }
];
