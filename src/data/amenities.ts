export interface Amenity {
  id: string;
  title: string;
  category: 'Wellness & Leisure' | 'Convenience & Tech' | 'Safety & Utility';
  summary: string;
  details: string;
  image: string;
  badge?: string;
}

export const amenitiesData: Amenity[] = [
  {
    id: "gymnasium",
    title: "Gymnasium",
    category: "Wellness & Leisure",
    summary: "Dedicated fitness space equipped for everyday health and personal wellness routines.",
    details: "Thoughtfully conceived fitness zone with high-grade workout equipment, natural ventilation, and an inspiring environment right within your residential tower.",
    image: "/images/amenities/amenity-gym.webp",
    badge: "Wellness"
  },
  {
    id: "indoor-games",
    title: "Indoor Games",
    category: "Wellness & Leisure",
    summary: "An exclusive resident recreation lounge for leisure, table sports and friendly community engagements.",
    details: "Designed as a tranquil recreation setting where residents and their guests can unwind over billiards, table games, and indoor leisure activities.",
    image: "/images/amenities/amenity-games.webp",
    badge: "Recreation"
  },
  {
    id: "automated-elevator",
    title: "Automated Elevator",
    category: "Convenience & Tech",
    summary: "1 automated high-speed elevator with 8-passenger capacity serving all levels.",
    details: "Equipped with modern safety sensors, ARD (Automatic Rescue Device), smooth variable-frequency drive, and refined brushed metal finishes connecting basement parking to all residential floors.",
    image: "/images/amenities/amenity-elevator.webp",
    badge: "8 Passenger"
  },
  {
    id: "covered-car-parking",
    title: "Covered Car Parking",
    category: "Convenience & Tech",
    summary: "Dedicated basement and ground level covered parking bays designed for smooth vehicle circulation.",
    details: "Spacious individual parking spaces with wide driveways, secure access ramps, clear markings, and effortless direct connectivity to the residential elevator lobby.",
    image: "/images/amenities/amenity-parking.webp",
    badge: "Basement & Ground"
  },
  {
    id: "reticulated-gas",
    title: "Reticulated Gas Connection",
    category: "Safety & Utility",
    summary: "Safe, uninterrupted piped cooking gas directly routed to individual residential kitchens.",
    details: "Modern centralised gas bank with individual safety shut-off valves, precision metering, and concealed pipeline distribution eliminating the hassle of cylinder handling.",
    image: "/images/amenities/amenity-gas.webp",
    badge: "Piped Gas"
  },
  {
    id: "cctv-surveillance",
    title: "CCTV Surveillance System",
    category: "Safety & Utility",
    summary: "Round-the-clock digital surveillance across common entrances, corridors, parking, and perimeter.",
    details: "High-definition security cameras strategically positioned at building entry gates, lift lobbies, basement parking, and common perimeters for complete resident peace of mind.",
    image: "/images/amenities/amenity-cctv.webp",
    badge: "24/7 Security"
  },
  {
    id: "soundproof-generator",
    title: "Soundproof Generator Backup",
    category: "Safety & Utility",
    summary: "Standby generator with soundproof acoustic enclosure powering common areas and apartment lighting.",
    details: "Reliable power backup infrastructure engineered to automatically activate during grid interruptions, maintaining lift operation, pump sets, stairwell lights, and apartment lighting circuits.",
    image: "/images/amenities/amenity-generator.webp",
    badge: "Acoustic Enclosure"
  }
];
