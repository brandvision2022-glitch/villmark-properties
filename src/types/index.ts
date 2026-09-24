export interface RoomBreakdown {
  name: string;
  dimension: string;
  areaSft: number;
  category: 'living' | 'bedroom' | 'service' | 'balcony';
}

export interface UnitFloorPlan {
  id: string;
  name: string;
  type: string;
  grossAreaSft: number;
  netCarpetSft: number;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  facing: string;
  breakdown: RoomBreakdown[];
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  address: string;
  status: 'Ongoing' | 'Upcoming' | 'Completed';
  category: 'Residential' | 'Commercial' | 'Mixed-Use';
  imageUrl: string;
  fallbackImage: string;
  landSizeKatha: string;
  roadWidthFt: string;
  totalFloors: string;
  totalUnits: string;
  unitSizes: string;
  handoverDate: string;
  description: string;
  highlights: string[];
  floorPlans: UnitFloorPlan[];
  architect: string;
  structuralEngineer: string;
}

export interface LandownerInquiry {
  fullName: string;
  phone: string;
  email: string;
  locationSector: string;
  landSizeKatha: string;
  roadWidthFt: string;
  handoverExpectation: string;
  plotCondition: string;
  currentStructure: string;
  proposedRatio: string;
  notes: string;
}

export interface ImageLinksConfig {
  heroBanner: string;
  serenityTower: string;
  lakecrest: string;
  floraVista: string;
}
