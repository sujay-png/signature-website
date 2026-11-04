export interface SpecificationCategory {
  category: string;
  tagline: string;
  items: {
    title: string;
    description: string;
  }[];
}

export const specificationsData: SpecificationCategory[] = [
  {
    category: "Doors & Windows",
    tagline: "Crafted entryways and precision fenestration",
    items: [
      {
        title: "Main Entrance Door",
        description: "Decorative melamine polished main entrance veneer door with solid structural frame."
      },
      {
        title: "Internal Room Doors",
        description: "Wooden door frames with good-quality painted flush door shutters for all internal rooms."
      },
      {
        title: "Toilet Door Shutters",
        description: "Durable fibro-tech shutters engineered for moisture resistance and lasting integrity."
      },
      {
        title: "Windows & Ventilators",
        description: "Aluminium windows with smooth sliding shutters for inside apartment spaces."
      }
    ]
  },
  {
    category: "Flooring & Surfaces",
    tagline: "Premium vitrified tiles and natural stone selections",
    items: [
      {
        title: "Apartment Interiors",
        description: "High-grade vitrified tile flooring inside the apartments for an elegant seamless look."
      },
      {
        title: "Common Corridors & Lobbies",
        description: "Combination of premium granite and vitrified tile flooring across all common areas."
      },
      {
        title: "Toilet Flooring",
        description: "Coloured ceramic anti-skid tiles for safe, slip-resistant toilet floor surfaces."
      }
    ]
  },
  {
    category: "Kitchen & Utility",
    tagline: "Functional elegance and durable craftsmanship",
    items: [
      {
        title: "Kitchen Countertop",
        description: "Polished natural granite counter paired with heavy-duty stainless steel sink."
      },
      {
        title: "Plumbing & C.P Fittings",
        description: "High-grade C.P fittings provided for kitchen sink, utility taps and dining areas."
      },
      {
        title: "Gas Provision",
        description: "Reticulated piped gas connection point routed directly to each residence."
      }
    ]
  },
  {
    category: "Bathrooms & Sanitary",
    tagline: "Digital tiles and precision Jaguar fittings",
    items: [
      {
        title: "Wall Cladding",
        description: "Designer digital wall tiles laid seamlessly up to the ceiling height."
      },
      {
        title: "CP & Sanitary Ware",
        description: "Fittings in all toilets are of Jaguar or equivalent reputable make."
      },
      {
        title: "Water Management",
        description: "C.P fittings provided across all toilet points, kitchen and dining hand-wash."
      }
    ]
  },
  {
    category: "Paint & Wall Finishing",
    tagline: "Smooth putty preparation and refined palette",
    items: [
      {
        title: "Interior Ceilings & Walls",
        description: "Putty-finished painting for interior walls and ceilings delivering clean, flawless surfaces."
      },
      {
        title: "Exterior Elevation",
        description: "Weather-resistant exterior acrylic paint system designed to endure coastal Mangaluru weather."
      }
    ]
  },
  {
    category: "Water Supply & Sustainability",
    tagline: "Dual-source supply and conscious conservation",
    items: [
      {
        title: "Water Sources",
        description: "Continuous dual water supply with on-site deep Borewell in addition to Corporation water connection."
      },
      {
        title: "Storage Infrastructure",
        description: "Overhead water storage tank and underground sump tank equipped with automatic pumping systems."
      },
      {
        title: "Rainwater Harvesting",
        description: "Integrated rainwater harvesting system designed for groundwater recharge and sustainability."
      }
    ]
  },
  {
    category: "Electrical, Backup & Common Facilities",
    tagline: "Uninterrupted power, surveillance and mobility",
    items: [
      {
        title: "Generator Power Backup",
        description: "Dedicated standby generator with soundproof acoustic enclosure powering common areas and apartment lighting."
      },
      {
        title: "Automated Passenger Elevator",
        description: "1 automated 8-passenger elevator serving basement parking through all residential upper floors."
      },
      {
        title: "CCTV Surveillance",
        description: "Comprehensive CCTV coverage monitoring entrance gates, lobbies, and parking areas."
      },
      {
        title: "Parking Facilities",
        description: "Covered car parking in the dedicated basement and ground-level driveways."
      }
    ]
  }
];
